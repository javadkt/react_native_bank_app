// src/screens/userAccountCreation/types.ts
export interface User {
  name: string;
  email: string;
}

export type UserData = {
  name: string;
  email: string;
  password: string;
};

export interface ApiResponse {
  success: boolean;
  status: number;
  message: string;
  data: User;
}


export type RootStackParamList = {
  SignUp: undefined; // No parameters for the SignUp screen
  FailurePage: undefined; // No parameters for the FailurePage
  // Add other routes here
};


export interface SignupResponse {
  id: number;
  loginId: string;
  password: string; // Consider whether you really need to handle this securely
  email: string;
}
