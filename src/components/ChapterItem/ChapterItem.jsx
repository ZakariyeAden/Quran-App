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
} from "@mui/material";
const ChapterItem = ({ chapter }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  // Get the Chapter Id and dispatch:
  const getChapterId = id => {
    dispatch({ type: "FETCH_VERSES", payload: id });
    // Route to Verses page
    history.push(`/user/${id}`);
  };
  return (
    <div>
      <Grid item lg={8} md={4} xs={6}>
        <Card sx={{ minWidth: 375 }} onClick={() => getChapterId(chapter.id)}>
          <CardContent className="card">
            <Typography color="text.secondary">
              {chapter.chapter_number}
            </Typography>
            <Typography variant="h5" component="div">
              {chapter.name}
            </Typography>
            <Typography color="text.secondary">
              {chapter.arabic_name}
            </Typography>
            <Typography color="text.secondary">
              {chapter.translated_name}
            </Typography>
            <Button size="small">Bookmark</Button>
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
};

export default ChapterItem;
