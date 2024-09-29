import axios, {AxiosRequestConfig} from 'axios';
import {setupInterceptorsTo} from '../utils/interceptors.ts';
import {ApiConstants} from '../utils/apiConstants.ts';
import {ApiResponse} from '../screens/userAccountCreation/types.ts';

setupInterceptorsTo(axios);

const url = ApiConstants.BASE_URL;

// Define the type for the API request parameters
interface ApiRequestParams {
  [key: string]: any;
}

export default async function api<T>(
  path: string,
  params: ApiRequestParams,
  method: 'GET' | 'POST' | 'PUT' | 'DELETE',
  headers: {[key: string]: string} = {},
  timeout: number = 5000,
): Promise<ApiResponse<T>> {
  // Ensure this is a promise of ApiResponse<T>
  const fullUrl = `${url}${path}`;

  if (__DEV__) {
    console.log('Request:', {method, fullUrl, headers, params});
  }

  const config: AxiosRequestConfig = {
    method,
    url: fullUrl,
    data: method === 'GET' ? undefined : params,
    headers,
    timeout,
  };

  try {
    const res = await axios(config);

    return {
      success: res.data.success,
      status: res.data.status,
      message: res.data.message,
      data: res.data.data, // Assuming this is the structure of your API response
    } as ApiResponse<T>;
  } catch (error) {
    console.error('Error connecting to server:', error);
    throw error; // Re-throw the error for the caller to handle
  }
}
