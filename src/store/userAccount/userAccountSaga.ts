// src/store/userAccount/userAccountSaga.ts
import { call, put, takeLatest } from 'redux-saga/effects';
import { createUserAccountApi } from '../../api/userAccountApi'; // Import your API function
import {
  createUserAccountRequest,
  createUserAccountSuccess,
  createUserAccountFailure,
} from './userAccountSlice';
import { PayloadAction } from '@reduxjs/toolkit';
import { User } from './userAccountSlice'; // Import the User type

// Worker saga: handle user account creation
function* handleCreateUserAccount(action: PayloadAction<{ name: string; email: string; password: string }>) {
  try {
    // Call the API to create a new user account with the provided action payload
    const response: { data: User } = yield call(createUserAccountApi, action.payload);

    // Dispatch success action with user data on successful account creation
    yield put(createUserAccountSuccess(response.data));
  } catch (error: any) {
    // Dispatch failure action with error message on failure
    yield put(createUserAccountFailure(error.message));
  }
}

// Watcher saga: listen for createUserAccountRequest actions
export function* userAccountSaga() {
  yield takeLatest(createUserAccountRequest.type, handleCreateUserAccount); // Watch for user account creation requests
}
