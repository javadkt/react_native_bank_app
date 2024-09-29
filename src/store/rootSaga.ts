import {all} from 'redux-saga/effects';
import {userAccountSaga} from './userAccount/userAccountSaga';

export default function* rootSaga() {
  yield all([
    userAccountSaga(),
    //sagas
  ]);
}
