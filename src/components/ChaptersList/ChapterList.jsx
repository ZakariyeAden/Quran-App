// HOOKS
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Grid,
  Card,
  Typography,
  CardContent,
  Button,
  CardActions,
} from "@mui/material";
import ChapterItem from "../ChapterItem/ChapterItem";

const ChapterList = () => {
  const dispatch = useDispatch();
  const chapters = useSelector(state => state.chapters);
  // Load all of the Chapters
  useEffect(() => {
    dispatch({ type: "FETCH_CHAPTERS" });
  }, []);
  return (
    <div>
      <Grid container spacing={2}>
        {chapters.map(chapter => {
          return <ChapterItem chapter={chapter}/>;
        })}
      </Grid>
    </div>
  );
};

export default ChapterList;
