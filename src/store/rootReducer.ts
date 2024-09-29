// src/store/rootReducer.ts
import {combineReducers} from '@reduxjs/toolkit';
import userAccountReducer from './userAccount/userAccountSlice';

const rootReducer = combineReducers({
  userAccount: userAccountReducer,

  // Add other reducers as needed
});

export type RootState = ReturnType<typeof rootReducer>; // Type for the overall Redux state
export default rootReducer;
