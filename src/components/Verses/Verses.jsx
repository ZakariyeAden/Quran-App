import { Link } from "react-router-dom";
// HOOKS
import { useEffect } from "react";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
// Components
import VersesItem from "../VersesItem/VersesItem";
// CSS and mui
import "./Verses.css";
import { Container } from "@mui/material";
const Verses = () => {
  // Hooks
  const { id } = useParams();
  const chapter = useSelector(state => state.chapterItem);
  const verses = useSelector(state => state.verses);
  const dispatch = useDispatch();

  // load Indiviual Chapter item and Verses
  useEffect(() => {
    dispatch({ type: "FETCH_CHAPTER_ITEM", payload: id });
    dispatch({ type: "FETCH_VERSES" });
  }, []);
  // Id
  console.log("ID", id);
  return (
    <Container maxWidth="lg">
      <Link to="/user">Go Back home</Link>
      <div className="d-flex">
        <h3>Chapter:{chapter.name}</h3>
        <div id="audio"></div>
      </div>
      <div>
        {/* <p>{verses.text}</p> */}
        {/* {verses.map((ayah) => {
          return (
            <VersesItem verse={ayah}/>
          );
        })} */}
      </div>
    </Container>
  );
};

export default Verses;
