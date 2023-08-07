import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// UPDATE plan info after client submits data!
function* setEditPlanInfo(action){
  try{
    yield axios.put(`/plan/edit/${action.payload.id}`, action.payload);
    yield put({type:'FETCH_PLAN'});
    // Catch any errors
  }catch(err){
    console.log('ERROR in UPDATE sagas Edit plan:',err);
  }
}

function* editPlanInfoSagas(){
  yield takeLatest('EDIT_PLAN', setEditPlanInfo);
}

export default editPlanInfoSagas;