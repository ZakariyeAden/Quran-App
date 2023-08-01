// HOOKS
import { useEffect } from "react";
import { useParams } from "react-router";
import { useSelector,useDispatch } from "react-redux";
const VersesList = () => {
  const { id } = useParams();
  const chapter = useSelector(state => state.chapterItem);
  const dispatch = useDispatch();

  // Indiviual Chapter item
  useEffect(() => {
    dispatch({type:'FETCH_CHAPTER_ITEM', payload: id});
  },[]);
  // Id
  console.log('ID',id);
  return (
    <div>
      <h4>Chapter:{chapter.name}</h4>
    </div>
  );
};

export default VersesList;
