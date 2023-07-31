// HOOKS
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const ChapterList = () => {
  const dispatch = useDispatch();

  // Load all of the Chapters
  useEffect(() => {
    dispatch({type:'FETCH_CHAPTERS'});
  },[])
  return (
    <div>ChapterList</div>
  )
}

export default ChapterList