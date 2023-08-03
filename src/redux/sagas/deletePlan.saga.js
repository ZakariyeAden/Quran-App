import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";


// Delete Plan by Id
function* deletePlanById(action) {
  try {
     yield axios.delete(`/plan/delete/${action.payload}`);
    
    yield put({ type: "FETCH_PLAN"});
    // Catch any errors
  } catch (err) {
    console.log("ERROR in Delete sagas Plan:", err);
  }
}

function* deletePlanSaga() {
  yield takeLatest("DELETE_PLAN", deletePlanById);
}

export default deletePlanSaga
