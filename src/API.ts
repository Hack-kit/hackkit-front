import axios, { AxiosResponse, AxiosError } from 'axios';

import { ISignupBody } from './component/Signup/interface';
import { IUser } from './component/Main/interface';

const BASE_URL = process.env.REACT_APP_URL;

function errorTypeGuard(error: any): error is AxiosError {
  return error.response !== undefined;
}

export default {
  async signupUser(
    body: ISignupBody,
  ): Promise<{ user: IUser; accessToken: string } | undefined> {
    try {
      const res = (await axios.post(
        `${BASE_URL}/users/signup`,
        body,
      )) as AxiosResponse<{
        pk: number;
        user: Omit<IUser, 'pk'>;
        token: {
          access_token: string;
        };
      }>;
      if (res.status === 201) {
        const { data } = res;
        return {
          user: {
            ...data.user,
            pk: data.pk,
          },
          accessToken: data.token.access_token,
        };
      }
    } catch (e) {
      return undefined;
    }
    return undefined;
  },

  async login(
    googleId: string,
  ): Promise<{ user: IUser; token: string } | undefined> {
    try {
      const res = (await axios.post(`${BASE_URL}/users/login`, {
        google_id: googleId,
        type: 'Google',
      })) as AxiosResponse<{
        user: IUser;
        token: {
          access_token: string;
        };
      }>;
      if (res.status === 200) {
        return {
          user: res.data.user,
          token: res.data.token.access_token,
        };
      }
    } catch (error: unknown) {
      if (errorTypeGuard(error)) {
        return undefined;
      }
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

  async getFoods(token: string) {
    try {
      const res = await axios.get(`${BASE_URL}/stores/food`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return res.data.foods;
    } catch (e) {
      return [];
    }
  },
};
