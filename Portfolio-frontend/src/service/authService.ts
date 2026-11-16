

import { fsClient } from "./api";
import { parseAxiosError } from "../lib/utils";
import type { DefaultFuncResponse, DefaultFunctionParams } from "../types/api";
import { LOGIN_USER_URL, LOGOUT_USER_URL, GET_SPECIFIC_USER_URL, UPDATE_USER_URL } from "@/constants/constants";

type LoginPayload = {
   username: string;
   password: string;
}

type LoginFuncParams = {
  creds: LoginPayload;
} & DefaultFunctionParams<string>;


type LoginResponse = DefaultFuncResponse<any>;

class AuthService {
   
    constructor(){}

    async login({ creds, onFailure, onSuccess  }: LoginFuncParams): Promise<LoginResponse>{
        try {
             // Support frontend sending `username` (map to backend `email`) or `email`
             const payload = {
                email: (creds as any).username ?? (creds as any).email,
                password: creds.password,
             };

             // backend user auth route lives at /api/v1/users/auth
             const response = await fsClient.post(LOGIN_USER_URL, payload);

             // Backend sets an httpOnly cookie and returns user info on success.
             const respData = response.data;
             onSuccess?.(respData);
             return {
                success: true,
                message: typeof respData?.message === 'string' ? respData.message : 'Successfully logged in!',
                data: respData,
             } as LoginResponse;
        } catch (error: unknown) {

          onFailure?.(parseAxiosError(error));
      
          return {
             message: parseAxiosError(error),
             success: false,
          }
        }

    }   

   async logout(): Promise<DefaultFuncResponse> {
      try {
         const res = await fsClient.post(LOGOUT_USER_URL);
         return { success: true, message: res.data?.message ?? 'Logged out' };
      } catch (error: unknown) {
         return { success: false, message: parseAxiosError(error) };
      }
   }

   async getProfile(): Promise<DefaultFuncResponse> {
      try {
         const res = await fsClient.get(GET_SPECIFIC_USER_URL);
         return { success: true, message: 'OK', data: res.data };
      } catch (error: unknown) {
         return { success: false, message: parseAxiosError(error) };
      }
   }

   async updateProfile(payload: any): Promise<DefaultFuncResponse> {
      try {
         const res = await fsClient.put(UPDATE_USER_URL, payload);
         return { success: true, message: 'Profile updated', data: res.data };
      } catch (error: unknown) {
         return { success: false, message: parseAxiosError(error) };
      }
   }
}


export const authService = new AuthService();
