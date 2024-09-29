// src/screens/userAccountCreation/types.ts
export interface User {
  name: string;
  email: string;
}

export interface ApiResponse<T> {
  success: boolean;
  status: number;
  message: string;
  data: T;
}
