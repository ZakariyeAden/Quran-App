import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

// GET all of the Chapters
function* fetchAllChapters() {
  try {
    const chapters = yield axios.get("/chapters");
    // Show loading
    yield put({ type: "SHOW_SPINNER" });
    // Dispatch the GET in 'SET_CHAPTERS' and payload
    yield put({ type: "SET_CHAPTERS", payload: chapters.data });
    // Hide loading
    yield put({ type: "HIDE_SPINNER" });
    // Catch any errors
  } catch (err) {
    console.log("ERROR in GET sagas chapters:", err);
  }
}

function* chaptersSaga() {
  yield takeLatest("FETCH_CHAPTERS", fetchAllChapters);
}

export default chaptersSaga;
