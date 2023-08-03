import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

// GET all of Chapter Plans
function* fetchChapterPlan() {
  try {
    const plan = yield axios.get("/plan");
    // Dispatch the GET in 'SET_PLAN' and payload
    yield put({ type: "SET_PLAN", payload: plan.data });
    // Catch any errors
  } catch (err) {
    console.log("ERROR in GET sagas Plan:", err);
  }
}

// Delete by Id
function* deletePlanId(action) {
  try {
     yield axios.delete(`/plan/${action.payload}`);
    
    yield put({ type: "FETCH_PLAN"});
    // Catch any errors
  } catch (err) {
    console.log("ERROR in Delete sagas Plan:", err);
  }
}
// Delete by Id
function* updatePlanId(action) {
  try {
     yield axios.put(`/plan/${action.payload}`);
    
    yield put({ type: "FETCH_PLAN"});
    // Catch any errors
  } catch (err) {
    console.log("ERROR in Update sagas Plan:", err);
  }
}

function* planSaga() {
  yield takeLatest("FETCH_PLAN", fetchChapterPlan);
  yield takeLatest("DELETE_PLAN", deletePlanId);
  yield takeLatest('UPDATE_PLAN', updatePlanId)
}

export default planSaga;
