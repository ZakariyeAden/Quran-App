import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

// GET the Audio for Each Chapter from API
// Target the id! 
// And display in DOM for client side
function* fetchAudio(action) {
  try {
    // Example:
    // https://api.quran.com/api/v4/chapter_recitations/1/1
    const audio = yield axios.get(`https://api.quran.com/api/v4/chapter_recitations/${action.payload}/${action.payload}`);
    yield put({ type: "SET_AUDIO", payload: audio.data.audio_file });
    // Catch any errors
  } catch (err) {
    console.log("ERROR in GET sagas verses:", err);
  }
}

function* audioSaga() {
  yield takeLatest("FETCH_AUDIO", fetchAudio);
}

export default audioSaga;