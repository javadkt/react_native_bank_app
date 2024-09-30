import axios from 'axios';
import {ApiConstants} from '../utils/apiConstants.ts';
import {User} from '../screens/userAccountCreation/types.ts';

const api = {
  signup: async (userData: User): Promise<any> => {
    try {
      const response = await axios.post(`${ApiConstants.BASE_URL}/users`, userData);
      debugger;
      return response.data; // Return the response data from the API
    } catch (error) {
      throw error; // Handle errors as needed
    }
  },
};

export default api;
