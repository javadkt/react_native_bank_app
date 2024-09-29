import axios, {AxiosRequestConfig} from 'axios';
import {setupInterceptorsTo} from '../utils/interceptors.ts';
import {ApiConstants} from '../utils/apiConstants.ts';

setupInterceptorsTo(axios);

const url = ApiConstants.BASE_URL;

// Define the type for the API request parameters
interface ApiRequestParams {
  [key: string]: any; // Adjust this type based on your expected params structure
}

export default async function api(
  path: string,
  params: ApiRequestParams,
  method: 'GET' | 'POST' | 'PUT' | 'DELETE', // Define allowed HTTP methods
  headers: {[key: string]: string} = {}, // Optional additional headers
  timeout: number = 5000, // Request timeout
): Promise<any> {
  const fullUrl = `${url}${path}`;

  if (__DEV__) {
    console.log('Request:', {method, fullUrl, headers, params});
  }

  const config: AxiosRequestConfig = {
    method,
    url: fullUrl,
    data: params,
    headers,
    timeout,
  };

  try {
    let res = await axios(config);
    if (res) {
      return res.data;
    } else {
      throw new Error('Invalid Response');
    }
  } catch (error) {
    console.error('Error connecting to server:', error);
    throw error; // Re-throw the error to be caught by the caller
  }
}
