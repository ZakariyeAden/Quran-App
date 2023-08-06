import { all } from 'redux-saga/effects';
import loginSaga from './login.saga';
import registrationSaga from './registration.saga';
import userSaga from './user.saga';
import chaptersSaga from './chapters.sagas';
import chapterItemSaga from './chapterItem.sagas';
import versesSaga from './verses.sagas'
import formSagas from './form.saga';
import planSaga from './plan.sagas';
import deletePlanSagas from './deletePlan.saga'
import completePlanSaga from './completePlan.saga';
import editPlanInfoSagas from './editPlan.saga';
// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga

// some sagas trigger other sagas, as an example
// the registration triggers a login
// and login triggers setting the user
export default function* rootSaga() {
  yield all([
    loginSaga(), // login saga is now registered
    registrationSaga(),
    userSaga(),
    chaptersSaga(),
    chapterItemSaga(),
    versesSaga(),
    formSagas(),
    planSaga(),
    deletePlanSagas(),
    completePlanSaga(),
    editPlanInfoSagas(),
  ]);
}
