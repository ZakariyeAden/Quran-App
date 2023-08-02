import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

// GET the Verses from API
// Target the id for each chapter in dispach! 
// And display in DOM for client side
function* fetchVerses(action) {
  
  try {
    const verses = yield axios.get(`/verses/${action.payload}`);

    yield put({ type: "SET_VERSES", payload: verses.data.data });
    // Catch any errors
  } catch (err) {
    console.log("ERROR in GET sagas verses:", err);
  }
}

function* versesSaga() {
  yield takeLatest("FETCH_VERSES", fetchVerses);
}

export default versesSaga;
