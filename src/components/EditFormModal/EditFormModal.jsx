import { useState, useEffect } from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Button,
  Modal,
  Box,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
const EditFormModal = ({ open, handleCloseModal }) => {
  // HOOKS
  const [planInput, setPlanInput] = useState({ date: "", chapter: "" });
  const chapters = useSelector(state => state.chapters);
  const editPlan = useSelector(state => state.editPlan);
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();

  // Submit
  const handleSubmit = event => {
    event.preventDefault();
    dispatch({ type: "EDIT_PLAN", payload: editPlan });
  };
// 
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
          <FormControl>
            <InputLabel id="demo-simple-select-label">Chapters</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="chapters"
              onChange={(event) => handleChange(event, "chapter_id")}
              value={editPlan.chapter_id}
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
            <TextField type="date" onChange={(event) => handleChange(event, "deadline")} >
              Date
            </TextField>
            <Button variant="contained" onClick={handleSubmit}>
              Submit
            </Button>
          </FormControl>
        </Box>
      </Modal>
    </div>
  );
};

export default EditFormModal;
