// src/store/store.ts
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './rootReducer'; // Import your root reducer
import rootSaga from './rootSaga';       // Import your root saga

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// Configure the Redux store
const store = configureStore({
  reducer: rootReducer,                  // Set the root reducer
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }) // Disable thunk middleware, if using Redux Saga
      .concat(sagaMiddleware),            // Add saga middleware
});

// Run the root saga
sagaMiddleware.run(rootSaga);

// Export the store
export type AppDispatch = typeof store.dispatch; // Type for dispatch
export type RootState = ReturnType<typeof store.getState>; // Type for the Redux state
export default store;
