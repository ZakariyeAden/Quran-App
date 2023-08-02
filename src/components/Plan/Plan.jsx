import { useState, useEffect } from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Button,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";

const Plan = () => {
  // HOOKS
  const [chapterInput, setChapterInput] = useState("");
  const [dateInput, setDateInput] = useState("");
  const chapters = useSelector(state => state.chapters);
  const dispatch = useDispatch();


  // Submit
  const handleSubmit = event => {
    event.preventDefault();
    // See the logs after submit
    console.log('Date:',dateInput);
    console.log('Chapter:',chapterInput);
  };

  // Load Chapters names
  useEffect(() => {
    dispatch({ type: "FETCH_CHAPTERS" });
  }, []);
  return (
    <FormControl  >
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
            <MenuItem key={chapter.id} value={chapter.name}>
              {chapter.name}
            </MenuItem>
          );
        })}
      </Select>

      <label>Date:</label>
      <TextField type="date" onChange={e => setDateInput(e.target.value)}>
        Date
      </TextField>
      <Button variant="contained" onClick={handleSubmit}>Submit</Button>
    </FormControl>
  );
};

export default Plan;
