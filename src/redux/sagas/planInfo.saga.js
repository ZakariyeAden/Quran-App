import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// POST for Plan
function* setPlanInfo(action){
  try{
    yield axios.post('/plan',action.payload);
    yield put({type: "SET_PLAN_INFO", payload: action.payload})
    // Catch any errors
  }catch(err){
    console.log('ERROR in POST sagas Plan',err);
  }
}

function* planInfoSagas(){
  yield takeLatest('ADD_PLAN', setPlanInfo);
}

export default planInfoSagas;