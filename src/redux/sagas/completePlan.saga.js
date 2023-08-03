import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";


// update 'completed' to TRUE by id 
function* completePlanById(action) {
  try {
     yield axios.put(`/plan/complete/${action.payload}`);
    
    yield put({ type: "FETCH_PLAN"});
    // Catch any errors
  } catch (err) {
    console.log("ERROR in Update to Complete Plan sagas:", err);
  }
}

function* completePlanSaga() {
  yield takeLatest('COMPLETE_PLAN', completePlanById)
}

export default completePlanSaga;