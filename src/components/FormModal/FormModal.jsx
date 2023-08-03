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
const FormModal = ({ open, handleCloseModal }) => {
  // HOOKS
  const [chapterInput, setChapterInput] = useState("");
  const [dateInput, setDateInput] = useState("");
  const chapters = useSelector(state => state.chapters);
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();

  // Submit
  const handleSubmit = event => {
    event.preventDefault();
    // See the logs after submit
    console.log("Date:", dateInput);
    console.log("Chapter:", chapterInput);

    dispatch({
      type: "ADD_PLAN",
      // Data: We need to only recieve the id from Client for chapters selected and user
      //  since the Table in Database!
      payload: {
        chapter: chapterInput,
        plan_id: user.id,
        deadline: dateInput,
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
    border: "2px solid #000",
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
              label="Age"
              onChange={e => setChapterInput(e.target.value)}
              value={chapterInput}
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
            <TextField type="date" onChange={e => setDateInput(e.target.value)}>
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

export default FormModal;
