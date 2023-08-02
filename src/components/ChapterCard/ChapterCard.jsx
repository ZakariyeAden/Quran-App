import React from "react";
// HOOKS
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  Grid,
  Card,
  Typography,
  CardContent,
  Button,
  CardActions,
  Container,
} from "@mui/material";
const ChapterCard = ({ chapter }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  // Get the Chapter Id and dispatch:
  const getChapterId = id => {
    // Chapter Id selected by user:
    console.log("Chapter Id:", id);
    // Dispatchs for Indivual Chapter and Verses
    dispatch({ type: "SET_CHAPTER_ITEM", payload: id });
    dispatch({ type: "SET_VERSES", payload: id.id });
    // Route to Verses page
    history.push(`/user/${id.id}`);
  };
  return (
    <div>
      <Grid item lg={3} md={4} xs={6}>
        <Card sx={{ minWidth: 375 }} >
          <CardContent  onClick={() => getChapterId(chapter)} className="card">
            <Typography>{chapter.chapter_number}</Typography>
            <Typography>{chapter.name}</Typography>
            <Typography>{chapter.arabic_name}</Typography>
            <Typography>{chapter.translated_name}</Typography>
          </CardContent>
          <Button size="small" >Bookmark</Button>
        </Card>
      </Grid>
    </div>
  );
};

export default ChapterCard;
