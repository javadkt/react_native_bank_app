// src/redux/store.ts

import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers/rootReducer.ts';


// Create the Redux store using configureStore
const store = configureStore({
  reducer: rootReducer,
  // Middleware is automatically configured, but you can add custom middleware here
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(customMiddleware),
});

// Export the store for use in your app
export type AppState = ReturnType<typeof store.getState>; // Type for the entire Redux state
export type AppDispatch = typeof store.dispatch; // Type for the dispatch function

export default store;
