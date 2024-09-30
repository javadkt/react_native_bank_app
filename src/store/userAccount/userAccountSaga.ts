// src/store/userAccount/userAccountSaga.ts
import {call, put, takeLatest} from 'redux-saga/effects';
import {
  createUserAccountRequest,
  createUserAccountFailure,
} from './userAccountSlice';
import {PayloadAction} from '@reduxjs/toolkit';
import {User} from '../../screens/userAccountCreation/types.ts';
import api from '../../service/apiService.ts';
import {CommonActions} from '@react-navigation/native';
import * as RootNavigation from "../rootNavigation";
import {Alert} from 'react-native';

// Define the generator function return type
function* handleUserSignUp(
  action: PayloadAction<{name: string; email: string; password: string}>,
): Generator {
  try {

    //Alert.alert('Registration Success','Our representative will get in touch with you shortly');
    const userData: User = action.payload;
    const response = yield call(api.signup, userData);

    //if (response?.status === 200) {
    //RootNavigation.navigate('ResponseStatus');
/*    yield put(
      CommonActions.navigate({
        name: 'ResponseStatus',
      }),
    );*/
    // }
  } catch (error) {}
}

export function* userAccountSaga() {
  yield takeLatest(createUserAccountRequest, handleUserSignUp); // Use the action creator
}
