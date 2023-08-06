// HOOKS
import { useEffect } from "react";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
const VersesList = () => {
  const Params = useParams();
  const chapter = useSelector(state => state.chapterItem);
  const verses = useSelector(state => state.verses);
  const dispatch = useDispatch();

  // Indiviual Chapter item and Verses
  useEffect(() => {
    dispatch({ type: "FETCH_CHAPTER_ITEM", payload: Params.id });
    dispatch({ type: "FETCH_VERSES" });
  }, []);
  // Id
  // console.log("ID", id);
  return (
    <div>
      <h4>Chapter:{chapter.name}</h4>
      <div></div>
    </div>
  );
};

export default VersesList;
