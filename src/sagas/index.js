import { select, takeEvery, put } from 'redux-saga/effects';
import { updateAccessToken } from '../actions/AuthActions/actions';
import * as AuthTypes from '../actions/AuthActions/types';

function* fetchAccessToken(action) {
  const state = select();
  console.log(state);
  console.log(action);
  yield put(updateAccessToken("aaabbbccc"));
}

function* rootSaga() {
  yield takeEvery(AuthTypes.GET_CODE, fetchAccessToken);
}

export default rootSaga;