// src/redux/reducers/accountReducer.ts

// Define the initial state shape
interface AccountState {
  name: string;
  email: string;
  password: string;
  error: string | null; // To hold any error messages
}

// Initial state
const initialState: AccountState = {
  name: '',
  email: '',
  password: '',
  error: null,
};

// Define action types
const SET_ACCOUNT = 'SET_ACCOUNT';
const SET_ERROR = 'SET_ERROR';
const CLEAR_ERROR = 'CLEAR_ERROR';

// Action interfaces
interface SetAccountAction {
  type: typeof SET_ACCOUNT;
  payload: {
    name: string;
    email: string;
    password: string;
  };
}

interface SetErrorAction {
  type: typeof SET_ERROR;
  payload: string; // Error message
}

interface ClearErrorAction {
  type: typeof CLEAR_ERROR;
}

// Union type for actions
type AccountActionTypes = SetAccountAction | SetErrorAction | ClearErrorAction;

// Account reducer function
const accountReducer = (state = initialState, action: AccountActionTypes): AccountState => {
  switch (action.type) {
    case SET_ACCOUNT:
      return {
        ...state,
        name: action.payload.name,
        email: action.payload.email,
        password: action.payload.password,
        error: null, // Clear any existing errors when setting account info
      };
    case SET_ERROR:
      return {
        ...state,
        error: action.payload, // Set the error message
      };
    case CLEAR_ERROR:
      return {
        ...state,
        error: null, // Clear the error
      };
    default:
      return state; // Return the current state for unknown actions
  }
};

export default accountReducer;
