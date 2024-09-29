// src/interceptor.ts
import {logoutAction} from './user/reducer'; // Import the logout action

import {AxiosInstance, AxiosResponse, InternalAxiosRequestConfig} from 'axios';
import store from '../store/store.ts';

// Function to add the token to the request headers
const onRequest = (
  config: InternalAxiosRequestConfig,
): InternalAxiosRequestConfig => {
  const rootState = store.getState();
  const globalState = rootState.user || {};
  const tokens = globalState.token;
  const token = tokens?.access?.token;

  // Ensure headers is initialized
  if (!config.headers) {
    // config.headers = {}; // Initialize headers as an empty object if it's undefined
  }

  // Add the token to the headers if it exists
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`; // Add the token to the headers
  }

  return config; // Return the modified config
};
// Handle request errors
const onRequestError = (error: any): Promise<any> => {
  console.error(`[request error] [${JSON.stringify(error)}]`);
  return Promise.reject(error);
};

// Handle successful responses
const onResponse = (response: AxiosResponse): AxiosResponse => {
  // Optionally log response details
  // console.info(`[response] [${JSON.stringify(response)}]`);
  return response; // Return the response
};

// Handle response errors
const onResponseError = (error: any): Promise<any> => {
  console.error(`[response error] [${JSON.stringify(error)}]`);

  if (error.response) {
    const {status, data} = error.response;

    if (status === 401) {
      // Unauthorized error handler
      store.dispatch(logoutAction()); // Dispatch the logout action
    } else if (data && data.status === 401) {
      // Unauthorized error handler
      store.dispatch(logoutAction()); // Dispatch the logout action
    }
  }
  return Promise.reject(error); // Re-throw the error to be handled later
};

// Function to set up interceptors for the given Axios instance
export function setupInterceptorsTo(
  axiosInstance: AxiosInstance,
): AxiosInstance {
  axiosInstance.interceptors.request.use(onRequest, onRequestError);
  axiosInstance.interceptors.response.use(onResponse, onResponseError);
  return axiosInstance; // Return the axios instance with interceptors set up
}
