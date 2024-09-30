// src/store/userAccount/userAccountSlice.ts
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {User} from '../../screens/userAccountCreation/types.ts';

interface UserAccountState {
  userData: User | null;
  isLoading: boolean;
  error: string | null;
  token: string | null;
  form: {
    name: string;
    email: string;
    password: string;
    errors: {
      name?: string;
      email?: string;
      password?: string;
    };
  };
}

// Initial state
const initialState: UserAccountState = {
  userData: null,
  isLoading: false,
  error: null,
  token: null,
  form: {
    name: '',
    email: '',
    password: '',
    errors: {},
  },
};

// Create the slice
const userAccountSlice = createSlice({
  name: 'userAccount',
  initialState,
  reducers: {
    createUserAccountRequest: (
      state,
      action: PayloadAction<{name: string; email: string; password: string}>,
    ) => {
      state.isLoading = true;
    },
    createUserAccountSuccess: (state, action: PayloadAction<User>) => {
      state.isLoading = false; // Set loading to false
      state.userData = action.payload; // Set user data
      state.error = null; // Clear errors
    },
    createUserAccountFailure: (state, action: PayloadAction<string>) => {
      state.isLoading = false; // Set loading to false
      state.error = action.payload; // Set the error message
    },
    resetAccount: state => {
      state.userData = null; // Reset user data
      state.isLoading = false; // Reset loading state
      state.error = null; // Reset error state
    },
    updateFormField: (
      state,
      action: PayloadAction<{
        field: keyof UserAccountState['form'];
        value: string;
      }>,
    ) => {
      const {field, value} = action.payload;
      state.form[field] = value;
    },

    setFormErrors: (
      state,
      action: PayloadAction<UserAccountState['form']['errors']>,
    ) => {
      state.form.errors = action.payload;
    },
  },
});

// Export actions
export const {
  createUserAccountRequest,
  createUserAccountSuccess,
  createUserAccountFailure,
  resetAccount,
  updateFormField,
  setFormErrors,
} = userAccountSlice.actions;

// Export the reducer
export default userAccountSlice.reducer;
