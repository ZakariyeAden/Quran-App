import { all } from 'redux-saga/effects';
import loginSaga from './login.saga';
import registrationSaga from './registration.saga';
import userSaga from './user.saga';
import chaptersSaga from './chapters.sagas';
import chapterItemSaga from './chapterItem.sagas';
import versesSaga from './verses.sagas'
import planInfoSagas from './planInfo.saga';
import chapterPlanSaga from './chapterPlan.sagas';
import deletePlanSagas from './deletePlan.saga'
import completePlanSaga from './completePlan.saga';
import editPlanInfoSagas from './editPlan.saga';
import playAudioSagas from './playAudio.saga'
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
    planInfoSagas(),
    chapterPlanSaga(),
    deletePlanSagas(),
    completePlanSaga(),
    editPlanInfoSagas(),
    playAudioSagas(),
  ]);
}
