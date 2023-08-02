import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// POST for Plan
function* setPlanForm(action){
  try{
    yield axios.post('/plan',action.payload);
    yield put({type: "SET_PLAN_FORM", payload: action.payload})
    // Catch any errors
  }catch(err){
    console.log('ERROR in POST sagas Plan',err);
  }
}

function* planFormSagas(){
  yield takeLatest('ADD_PLAN', setPlanForm);
}

export default planFormSagas;