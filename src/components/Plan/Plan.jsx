import { useState, useEffect } from "react";
import {
  Table,
  TableContainer,
  Paper,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import EditFormModal from "../EditFormModal/EditFormModal";
// Moment Library to fix the Date
import moment from "moment";

const Plan = () => {
  // HOOKS
  const plans = useSelector(state => state.plan);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  // Open Edit Modal and get the Row to edit!
  // Dispatch the row seleted to Edit
  const handleOpenEditModal = row => {
    console.log("Row selected to update:", row);
    setOpen(true);

    dispatch({ type: "SET_EDIT_PLAN", payload: row });
  };
  // Close Modal
  const handleCloseEditModal = () => {
    setOpen(false);
  };
  // Delete by Id
  const handleDelete = id => {
    console.log("Id Table row to delete from:", id);
    dispatch({ type: "DELETE_PLAN", payload: id });
  };
  // Update To Complete by Id
  const handleComplete = id => {
    console.log("Id Table row to update from:", id);
    dispatch({ type: "COMPLETE_PLAN", payload: id });
  };
  // Load Plan
  useEffect(() => {
    dispatch({ type: "FETCH_PLAN" });
  }, []);
  return (
    <TableContainer component={Paper}>
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
            // Formatting the date with moment library without Time from Database
            let currentDate = moment(row.current_date);
            let deadline = moment(row.deadline);
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
                      {currentDate.format("L")}
                    </TableCell>
                    <TableCell align="right">{deadline.format("L")}</TableCell>
                    <TableCell align="right">
                    Completed!
                    </TableCell>
                    <TableCell align="right">
                      <button onClick={() => handleOpenEditModal(row)}>
                        Edit?
                      </button>
                    </TableCell>
                    <TableCell align="right">
                      <button onClick={() => handleDelete(row.id)}>
                        Delete
                      </button>
                    </TableCell>
                  </TableRow>
                ) : (
                  <TableRow
                    key={row.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="right">
                      {currentDate.format("L")}
                    </TableCell>
                    <TableCell align="right">{deadline.format("L")}</TableCell>
                    <TableCell align="right">
                      <button onClick={() => handleComplete(row.id)}>
                        Completed?
                      </button>
                    </TableCell>
                    <TableCell align="right">
                      <button onClick={() => handleOpenEditModal(row)}>
                        Edit?
                      </button>
                    </TableCell>
                    <TableCell align="right">
                      <button onClick={() => handleDelete(row.id)}>
                        Delete
                      </button>
                    </TableCell>
                  </TableRow>
                )}
              </>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Plan;
