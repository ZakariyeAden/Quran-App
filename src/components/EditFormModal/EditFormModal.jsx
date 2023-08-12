// HOOKS
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// MUI and CSS
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
import "./EditForm.css";
const EditFormModal = ({ open, handleCloseModal }) => {
  // HOOKS
  const chapters = useSelector(state => state.chapters);
  const editPlans = useSelector(state => state.editPlan);
  const dispatch = useDispatch();

  // Submit
  const handleSubmit = event => {
    event.preventDefault();
    dispatch({ type: "EDIT_PLAN", payload: editPlans });
  };
  // Change the Previous property and show the previous values
  const handleChange = (event, propertyToChange) => {
    dispatch({
      type: "EDIT_ON_CHANGE",
      payload: {
        property: propertyToChange,
        value: event.target.value,
      },
    });
  };
  // Styling the Modal
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
  };

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
              <h2 className="form-heading">Extend your Deadline:</h2>
              <FormControl fullWidth>
                <label>Deadline:</label>
                <TextField
                  type="date"
                  onChange={event => handleChange(event, "deadline")}
                  value={editPlans.deadline}
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

export default EditFormModal;
