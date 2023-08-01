import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


// GET the indiviual Chapter
function* fetchChapterItem(action){
  try{
    const chapterItem = yield axios.get(`/chapters/${action.payload}`);
    // Dispatch the GET in 'SET_CHAPTER_ITEM' and payload
    yield put({type: "SET_CHAPTER_ITEM", payload: chapterItem.data})
    // Catch any errors
  }catch(err){
    console.log('ERROR in GET sagas Chapter item:',err);
  }
}

function* chapterItemSaga() {
  yield takeLatest('FETCH_CHAPTER_ITEM', fetchChapterItem);
}

export default  chapterItemSaga;