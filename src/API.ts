import axios, { AxiosResponse, AxiosError } from 'axios';

import { ISignupBody } from './component/Signup/interface';
import { IUser } from './component/Main/interface';

const BASE_URL = 'http://localhost:8000/api';

function errorTypeGuard(error: any): error is AxiosError {
  return error.response !== undefined;
}

export default {
  async signupUser(body: ISignupBody) {
    try {
      const res = (await axios.post(
        `${BASE_URL}/users/signup`,
        body,
      )) as AxiosResponse<IUser>;
      if (res.status === 201) {
        return res.data;
      }
    } catch (e) {
      return undefined;
    }
    return undefined;
  },

  async validateUser(googleId: string): Promise<boolean> {
    try {
      const res = (await axios.post(`${BASE_URL}/oauth/validate`, {
        google_id: googleId,
        type: 'Google',
      })) as AxiosResponse;
      if (res.status === 200) {
        return true;
      }
    } catch (error: unknown) {
      if (errorTypeGuard(error)) {
        return false;
      }
    }
    return false;
  },
};
