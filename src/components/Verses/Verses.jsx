// HOOKS
import { useEffect } from "react";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";

import './Verses.css'
const VersesList = () => {
  const { id } = useParams();
  const chapter = useSelector(state => state.chapterItem);
  const ayahs = useSelector(state => state.verses);
  console.log('Ayahs:',ayahs);
  const dispatch = useDispatch();

  // Indiviual Chapter item and Verses
  useEffect(() => {
    // dispatch({ type: "FETCH_CHAPTER_ITEM"});
   dispatch({ type: "FETCH_VERSES", payload: id });
  }, []);

  return (
    <div>
      <h2>Chapter:{chapter.name}</h2>
      {ayahs.map((verse, key) => {
        return <p className="ayahs-text" key={key}>{verse.text}</p>;
      })}
    </div>
  );
};

export default VersesList;
