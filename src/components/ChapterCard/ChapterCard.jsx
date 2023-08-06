// HOOKS
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
// MUI
import {
  Grid,
  Card,
  Typography,
  CardContent,
  Button,
} from "@mui/material";
// Components
import FormModal from "../FormModal/FormModal";

const ChapterCard = ({ chapter }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [ open, setOpen ] = useState(false);
  // Get the Chapter Id and dispatch:
  const getChapterId = id => {
    // Chapter Id selected by user:
    console.log("Chapter Id:", id);
    // Dispatchs for Indivual Chapter and Verses
    dispatch({ type: "SET_CHAPTER_ITEM", payload: id });
    // dispatch({ type: "SET_VERSES", payload: id.id });
    // Route to Verses page
    history.push(`/user/${id.id}`);
  };
  // Open Modal
  const handleOpenModal = () => {
    setOpen(true);
  };
  // Close Modal
  const handleCloseModal = () => {
    setOpen(false);
  };
  return (
    <div>
      {/* Form Modal after user Clicks add to plan */}
      <FormModal open={open} handleCloseModal={handleCloseModal}/>
      <Grid item lg={3} md={4} xs={6}>
        <Card sx={{ minWidth: 375, backgroundColor: "#00366F"}} >
          <CardContent onClick={() => getChapterId(chapter)} className="card-content">
            <Typography>{chapter.chapter_number}</Typography>
            <Typography>{chapter.name}</Typography>
            <Typography>{chapter.arabic_name}</Typography>
            <Typography>{chapter.translated_name}</Typography>
          </CardContent>
          <Button size="small" onClick={handleOpenModal}>Bookmark</Button>
        </Card>
      </Grid>
    </div>
  );
};

export default ChapterCard;
