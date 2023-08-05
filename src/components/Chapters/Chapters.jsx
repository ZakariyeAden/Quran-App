// HOOKS
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid, Container } from "@mui/material";
import ChapterCard from "../ChapterCard/ChapterCard";
// CSS
import './Chapters.css'
const Chapters = () => {
  const dispatch = useDispatch();
  const chapters = useSelector(state => state.chapters);
  // Load all of the Chapters
  useEffect(() => {
    dispatch({ type: "FETCH_CHAPTERS" });
  }, []);

  return (
    <div>
      <Grid container spacing={2} className="chapter-card">
        {chapters.map(chapter => {
          return <ChapterCard chapter={chapter} key={chapter.id} />;
        })}
      </Grid>
    </div>
  );
};

export default Chapters;
