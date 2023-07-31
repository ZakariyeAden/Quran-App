import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


// GET the id of Chapter and use Quran API to display the Verses for each chapter
// Use .env to keep it Private
function* fetchChapterVerses(action){
  try{
    const chapters = yield axios.get(`/chapters/${action.payload}`);
    // Dispatch the GET in 'SET_VERSES' and payload
    yield put({type: 'SET_VERSES', payload: chapters.data})
    // Catch any errors
  }catch(err){
    console.log('ERROR in GET sagas Verses:',err);
  }
}

function* versesSaga() {
  yield takeLatest('FETCH_VERSES', fetchChapterVerses);
}

export default  versesSaga;