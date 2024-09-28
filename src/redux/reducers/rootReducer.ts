// src/redux/reducers/rootReducer.ts

import { combineReducers } from 'redux';
import accountReducer from './accountReducer';
// Import other reducers as needed

const rootReducer = combineReducers({
  account: accountReducer,
  // Add other reducers here, e.g., userReducer, productReducer
});

export type AppState = ReturnType<typeof rootReducer>; // Define AppState type based on the root reducer
export default rootReducer;
