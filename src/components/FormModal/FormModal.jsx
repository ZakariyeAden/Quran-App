// HOOKS
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
// MUI and Assets
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Button,
  Modal,
  Box,
  Grid,
} from "@mui/material";
import QuranHero from "../Assets/Quran.jpg";
import "./FormModal.css";
// Sweetalert
import Swal from "sweetalert2";
const FormModal = ({ open, handleCloseModal }) => {
  // HOOKS
  const [planInput, setPlanInput] = useState({ date: "", chapter: "" });
  const [error, setError] = useState(false);
  const chapters = useSelector(state => state.chapters);
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();
  const history = useHistory();

  // Submit
  const handleSubmit = event => {
    event.preventDefault();
    // See the logs after submit
    console.log("Date:", planInput.date);
    console.log("Chapter:", planInput.chapter);
    // Add validation
    if (planInput.chapter === "" || planInput.date === "") {
      setError(true);
      return;
    }
    // Continue to 'ADD_PLAN' dispatch if inputs are not Empty!
    setError(false);
    dispatch({
      type: "ADD_PLAN",
      // Data: We need to only recieve the id from Client for chapters selected and user
      //  since the Table in Database!
      payload: {
        chapter: planInput.chapter,
        plan_id: user.id,
        deadline: planInput.date,
      },
    });
    // Alert Success!
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Added to plan",
      showConfirmButton: false,
      timer: 3000,
    });
    // Go to Chapters page
    history.push("/chapters");
  };
  // Styling the Modal
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    p: 4,
  };
  // Load Chapters names
  useEffect(() => {
    dispatch({ type: "FETCH_CHAPTERS" });
  }, []);
  return (
    <div>
      <Modal
        open={open}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <img src={QuranHero} alt="Quran" className="quran-img" />
            </Grid>
            <Grid item xs={12}>
              <h2 className="form-heading">Add to Plan</h2>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Chapters</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="chapters"
                  onChange={e =>
                    setPlanInput({ ...planInput, chapter: e.target.value })
                  }
                  value={planInput.chapter}
                  error={error}
                  helperText={error ? "Please Select a Chapter!" : ""}
                >
                  {chapters.map(chapter => {
                    return (
                      <MenuItem key={chapter.id} value={chapter.id}>
                        {chapter.name}
                      </MenuItem>
                    );
                  })}
                </Select>

                <label>Deadline:</label>
                <TextField
                  type="date"
                  onChange={e =>
                    setPlanInput({ ...planInput, date: e.target.value })
                  }
                  error={error}
                  helperText={error ? "Please fill in a Date!" : ""}
                >
                  Date
                </TextField>
                <Button
                  variant="contained"
                  onClick={handleSubmit}
                  sx={{
                    marginTop: "1rem",
                  }}
                >
                  Submit
                </Button>
              </FormControl>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </div>
  );
};

export default FormModal;
