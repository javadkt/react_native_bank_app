import api from '../../service/api.ts';
import {ApiConstants} from '../../utils/apiConstants.ts';
import {User} from '../../screens/userAccountCreation/types.ts';
import {call, put, takeLatest} from 'redux-saga/effects';
import {
  createUserAccountFailure,
  createUserAccountRequest,
} from './userAccountSlice.ts';

function* handleCreateUserAccount(action: {
  payload: User;
}): Generator<any, void, unknown> {
  try {
    const response = yield call(
      api<User>, // Specify the expected response type
      ApiConstants.CREATE_ACCOUNT,
      action.payload,
      'POST',
    );
    console.log(response);
    /*    if (ApiResonse.success) {
          yield put(createUserAccountSuccess(response.data));
        } else {
          yield put(createUserAccountFailure(response.message));
        }*/
  } catch (error: any) {
    // Dispatch failure action with error message on failure
    yield put(createUserAccountFailure(error.message));
  }
}

// Watcher saga: listen for createUserAccountRequest actions
export function* userAccountSaga() {
  yield takeLatest(createUserAccountRequest, handleCreateUserAccount); // Use the action creator
}
