// HOOKS
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// Components
import ChapterCard from "../ChapterCard/ChapterCard";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
// CSS and MUI
import "./Chapters.css";
import { Grid, Container } from "@mui/material";

const Chapters = () => {
  // HOOKS
  const dispatch = useDispatch();
  const chapters = useSelector(state => state.chapters);
  const user = useSelector(state => state.user);
  const loadingSpinner = useSelector(store => store.loadingSpinner);

  // Load all of the Chapters
  useEffect(() => {
    dispatch({ type: "FETCH_CHAPTERS" });
  }, []);

  return (
    <div className="hero-section">
      <div>
        <h1 className="user-heading">
          Welcome, <span className="user">{user.username}</span> to Glorious
          Noble Quran - Select a Chapter
        </h1>
        <Grid container spacing={2} className="chapter-card">
          {chapters.map(chapter => {
            return <ChapterCard chapter={chapter} key={chapter.id} />;
          })}
        </Grid>
      </div>
    </div>
  );
};

export default Chapters;
