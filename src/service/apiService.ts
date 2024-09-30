import axios from 'axios';
import {ApiConstants} from '../utils/apiConstants.ts';
import {SignupResponse, User} from '../screens/userAccountCreation/types.ts';

const api = {
  signup: async (userData: User): Promise<SignupResponse> => {
    try {
      const payload = {...userData, loginId: userData.name};
      const response = await axios.post<SignupResponse>(
        `${ApiConstants.BASE_URL}/users`,
        payload,
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default api;
