import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// POST for Plan
function* setPlan(action){
  try{
    yield axios.post('/plan',action.payload);
    yield put({type: "SET_PLAN"})
    // Catch any errors
  }catch(err){
    console.log('ERROR in POST sagas Plan',err);
  }
}

function* planSagas(){
  yield takeLatest('FETCH_PLAN', setPlan);
}

export default planSagas;