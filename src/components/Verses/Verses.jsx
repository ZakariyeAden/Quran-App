// HOOKS
import { useEffect } from "react";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";

import "./Verses.css";
import { Link } from "react-router-dom";
const VersesList = () => {
  const { id } = useParams();
  const chapter = useSelector(state => state.chapterItem);
  const ayahs = useSelector(state => state.verses);
  const audio = useSelector(state => state.playAudio);

  console.log("Ayahs:", ayahs);
  const dispatch = useDispatch();

  // Indiviual Chapter item, Verses, and Audio
  useEffect(() => {
    dispatch({ type: "FETCH_CHAPTER_ITEM", payload: id});
    dispatch({ type: "FETCH_VERSES", payload: id });
    // dispatch({ type: "FETCH_AUDIO", payload: id });
  }, []);

  return (
    <div className="verse-section">
      <Link to="/user" className="verse-link">
        <ion-icon name="arrow-back-outline" size="medium"></ion-icon> Go Back
        Home
      </Link>
      <div className="d-flex">
        {chapter.map((chapter, key) => {
          return(
            <h2 key={key}>Chapter:{chapter.name}</h2>
          );
        })}
    
      </div>

      {ayahs.map((verse, key) => {
        return (
          <p className="ayahs-text" key={key}>
            {verse?.text}
          </p>
        );
      })}
    </div>
  );
};

export default VersesList;
