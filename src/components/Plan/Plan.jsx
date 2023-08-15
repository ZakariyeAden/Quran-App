// MUI and Assets
import {
  Table,
  TableContainer,
  Paper,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
} from "@mui/material";
import QuranLogo from "../Assets/QuranLogo.png";
import { ImQuotesLeft } from "react-icons/im";
import "./Plan.css";
// HOOKS
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// Components
import EditFormModal from "../EditFormModal/EditFormModal";
// Sweetalert
import Swal from "sweetalert2";
const Plan = () => {
  // HOOKS
  const plans = useSelector(state => state.plan);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  // Open Edit Modal and get the Row to edit!
  // Dispatch the row seleted to Edit
  const handleOpenEditModal = (row, id) => {
    console.log("Row selected to update:", row);
    setOpen(true);

    dispatch({ type: "SET_EDIT_PLAN", payload: row });
  };
  // Close Modal
  const handleCloseEditModal = () => {
    setOpen(false);
  };

  // Delete Plan by Id
  const handleDelete = id => {
    console.log("Id Table row to delete from:", id);

    // Adding Modal for Delete!
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
      reverseButtons: true,
    }).then(result => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your Plan has been deleted.", "success");
        // Dispatch DELETE_PLAN if Client confirms!
        dispatch({ type: "DELETE_PLAN", payload: id });
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        Swal.fire("Cancelled", "Your plan has been canceled!", "error");
      }
    });
  };

  // Update Plan To Complete by Id
  const handleComplete = id => {
    console.log("Id Table row to update from:", id);
    dispatch({ type: "COMPLETE_PLAN", payload: id });
  };

  // Send an Alert that Chapter is passed due!
  const ModalAlert = row => {
    Swal.fire({
      title: `${row.name}`,
      text: `${row.name} Chapter is passed due!`,
      timer: 3000,
    });
  };

  // Load Plan
  useEffect(() => {
    dispatch({ type: "FETCH_PLAN" });
  }, []);
  return (
    <>
      <div className="d-flex mt">
        <img src={QuranLogo} alt="Quran Logo" width="100" />
        <h1 className="plan-heading">
          Read, Study, Memorize, and learn the Quran
        </h1>
      </div>
      <TableContainer component={Paper} className="plan-section">
        {/* Edit Form Modal after user Clicks Edit to plan */}
        <EditFormModal handleCloseModal={handleCloseEditModal} open={open} />
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Chapter</TableCell>
              <TableCell align="right">Date:</TableCell>
              <TableCell align="right">Deadline:</TableCell>
              <TableCell align="right">Completed:</TableCell>
              <TableCell align="right">Edit:</TableCell>
              <TableCell align="right">Remove:</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {plans.map(row => {
              // Formatting the date without Time from Database
              // Current Date
              const currentDate = new Date(row.current_date);
              const formattedCurrentDate = currentDate.toLocaleString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              });
              // Deadline Date
              const deadlineDate = new Date(row.deadline);
              const formattedDeadlineDate = deadlineDate.toLocaleString(
                "en-US",
                {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                }
              );
              return (
                <>
                  {row.completed === true ? (
                    <TableRow
                      key={row.id}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                      className="completed"
                    >
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell align="right">
                        {formattedCurrentDate}
                      </TableCell>
                      <TableCell align="right">
                        {formattedDeadlineDate}
                      </TableCell>
                      <TableCell align="right">
                        <span className="checkmark">
                          <ion-icon
                            name="checkmark-outline"
                            size="large"
                            className="checkmark-"
                            aria-label="Checkmark"
                          ></ion-icon>
                        </span>
                      </TableCell>
                      <TableCell align="right">
                        <ion-icon
                          name="create-outline"
                          size="large"
                          onClick={() => handleOpenEditModal(row)}
                          aria-label="Create"
                        ></ion-icon>
                      </TableCell>
                      <TableCell align="right">
                        <ion-icon
                          name="trash-outline"
                          size="large"
                          class="delete"
                          onClick={() => handleDelete(row.id)}
                        ></ion-icon>
                      </TableCell>
                    </TableRow>
                  ) : (
                    <TableRow
                      key={row.id}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                      className={
                        row.deadline < row.current_date ? "deadline" : ""
                      }
                    >
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell align="right">
                        {formattedCurrentDate}
                      </TableCell>
                      <TableCell align="right">
                        {formattedDeadlineDate}
                      </TableCell>
                      {/* If deadline passed current date alert the Client! */}
                      {row.deadline < row.current_date && ModalAlert(row) ? (
                        <TableCell align="right">
                          <Button
                            size="small"
                            onClick={() => handleComplete(row.id)}
                          >
                            Passed Due:
                          </Button>
                        </TableCell>
                      ) : (
                        <TableCell align="right">
                          <Button
                            size="small"
                            onClick={() => handleComplete(row.id)}
                          >
                            Completed?
                          </Button>
                        </TableCell>
                      )}
                      <TableCell align="right">
                        <ion-icon
                          name="create-outline"
                          size="large"
                          onClick={() => handleOpenEditModal(row)}
                          aria-label="Create"
                        ></ion-icon>
                      </TableCell>
                      <TableCell align="right">
                        <ion-icon
                          name="trash-outline"
                          size="large"
                          onClick={() => handleDelete(row.id)}
                          class="delete"
                        ></ion-icon>
                      </TableCell>
                    </TableRow>
                  )}
                </>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <div className="verse-section">
        <span className="icon">
          <ImQuotesLeft />
        </span>
        <h2 className="quran-heading">
          Had We sent down this Quran upon a mountain, you would have certainly
          seen it
          <br /> humbled and torn apart in awe of Allah. We set forth such
          comparisons for people,
          <br /> ˹so˺ perhaps they may reflect.
        </h2>
        <h6 className="quran-subheading">
          Quran <span>Surah Al Hashr Verse 21</span>
        </h6>
      </div>
    </>
  );
};

export default Plan;
