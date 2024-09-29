// src/store/userAccount/userAccountSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the User interface to represent user data
export interface User {
  id: string;
  name: string;
  email: string;
}

// Define the state interface for the user account slice
interface UserAccountState {
  userData: User | null;       // User data or null if not logged in
  isLoading: boolean;           // Loading state for async tasks
  error: string | null;         // Error messages
}

// Initial state
const initialState: UserAccountState = {
  userData: null,
  isLoading: false,
  error: null,
};

// Create the slice
const userAccountSlice = createSlice({
  name: 'userAccount',
  initialState,
  reducers: {
    createUserAccountRequest(state) {
      state.isLoading = true;       // Set loading to true when account creation is initiated
      state.error = null;           // Clear previous error
    },
    createUserAccountSuccess(state, action: PayloadAction<User>) {
      state.userData = action.payload; // Set user data from the payload
      state.isLoading = false;       // Set loading to false after successful account creation
    },
    createUserAccountFailure(state, action: PayloadAction<string>) {
      state.isLoading = false;      // Set loading to false on failure
      state.error = action.payload;  // Set error message
    },
    resetUserAccount(state) {
      state.userData = null;         // Reset user data
      state.isLoading = false;       // Reset loading state
      state.error = null;            // Reset error state
    },
  },
});

// Export actions
export const {
  createUserAccountRequest,
  createUserAccountSuccess,
  createUserAccountFailure,
  resetUserAccount,
} = userAccountSlice.actions;

// Export the reducer
export default userAccountSlice.reducer;
