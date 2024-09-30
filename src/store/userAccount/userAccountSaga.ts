import {call, put, takeLatest} from 'redux-saga/effects';
import {createUserAccountRequest} from './userAccountSlice';
import {PayloadAction} from '@reduxjs/toolkit';
import api from '../../service/apiService.ts';
import {User} from '../../screens/userAccountCreation/types.ts';
import {Alert} from 'react-native';

function* handleUserSignUp(
  action: PayloadAction<{name: string; email: string; password: string}>,
): Generator {
  try {
    const userData: User = action.payload;
    const response = yield call(api.signup, userData);
    if (response) {
      Alert.alert('Registration Successful', `Our representative will get in touch with you shortly`, [
        {text: 'OK'},
      ]);
    }
  } catch (error) {
    Alert.alert(
      'Registration Failed',
      'An error occurred during registration. Please try again.',
      [{text: 'OK'}],
    );
  }
}

export function* userAccountSaga() {
  yield takeLatest(createUserAccountRequest, handleUserSignUp);
}
