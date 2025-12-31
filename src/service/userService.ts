import { fsClient } from "./api";

import { DefaultFuncResponse, DefaultFunctionParams } from "@/types/api";
import { parseAxiosError } from "@/lib/utils";
import { User } from "@/types/user";
import {
   CREATE_USER_URL,
   GET_ALL_USERS_URL,
   GET_SPECIFIC_USER_URL,
   UPDATE_USER_URL,
   ADMIN_DELETE_USER_URL,
   ADMIN_UPDATE_USER_URL,
} from "@/constants/constants";


type GetUsersResponse = DefaultFuncResponse<User[] | undefined>;

type GetUserDetailsParams = DefaultFunctionParams<User> & { id: string };
type GetUserDetailsResponse = DefaultFuncResponse<User | undefined>;


type CreateNewUserParams = DefaultFunctionParams<User> & { username: string, email: string, password: string };
type CreateNewUserResponse = DefaultFuncResponse<User>;

type UpdateUserParams = DefaultFunctionParams<User> & { username: string; email: string; password: string };
type UpdateUserResponse = DefaultFuncResponse<User>;


class UserService {
   
    constructor(){}

    // Handler for get all users
    async getUsers({ onSuccess, onFailure }: DefaultFunctionParams<User[]>): Promise<GetUsersResponse>{
        try {

         const response = await fsClient.get<User[]>(GET_ALL_USERS_URL);


         if(!response.data){

             const message = "Users data not found"; 
             onFailure?.(message);
             return {
                success: false,
                message,
             }
         }

          onSuccess?.(response.data);
        
          return {
            success: true,
            message: "User fetched successfully",
            data: response.data
          }

        } catch (error) {

           onFailure?.(parseAxiosError(error));
           return {
              success: false,
              message: parseAxiosError(error),
           }
        }

    }

    // Handler for get single user/or user details
    async getUserDetails({ id, onSuccess, onFailure }: GetUserDetailsParams): Promise<GetUserDetailsResponse>{
        try {

      const response = await fsClient.get<User>(`/api/v1/users/${id}`);

         if(!response.data){
            const message = "User details not found"; 

             onFailure?.(message);
             return {
                success: false,
                message,
             }
         }

          onSuccess?.(response.data);
        
          return {
            success: true,
            message: "User fetched successfully",
            data: response.data
          }

        } catch (error) {

           onFailure?.(parseAxiosError(error));
           return {
              success: false,
              message: parseAxiosError(error),
           }
        }
    }

   // Handler for getting current user's profile
   async getProfile({ onSuccess, onFailure }: DefaultFunctionParams<User>): Promise<GetUserDetailsResponse> {
      try {
         const response = await fsClient.get<User>(GET_SPECIFIC_USER_URL);

         if(!response.data){
            const message = "User profile not found";
            onFailure?.(message);
            return {
               success: false,
               message,
            }
         }

         onSuccess?.(response.data);

         return {
            success: true,
            message: "Profile fetched successfully",
            data: response.data,
         }
      } catch(error){
         onFailure?.(parseAxiosError(error));
         return {
            success: false,
            message: parseAxiosError(error),
         }
      }
   }

    // Handler for creating new user
    async createNewUser({ username, email, password, onSuccess, onFailure }: CreateNewUserParams): Promise<CreateNewUserResponse>{
        try {

          const response = await fsClient.post<User>(CREATE_USER_URL, {
             username, 
             email,
             password
         });

         if(!response.data){
            const message = "Error while creating new user"; 

             onFailure?.(message);
             return {
                success: false,
                message,
             }
         }

          onSuccess?.(response.data);
        
          return {
            success: true,
            message: "User created successfully!",
            data: response.data
          }

        } catch (error) {

           onFailure?.(parseAxiosError(error));
           return {
              success: false,
              message: parseAxiosError(error),
           }
        }
    }

    // Handler for updating user details
   async UpdateUserDetails({ username, email, password, onSuccess, onFailure }: UpdateUserParams): Promise<UpdateUserResponse>{
        try {

       const response = await fsClient.put<User>(UPDATE_USER_URL, {
          username, 
          email,
          password
       });

         if(!response.data){
            const message = "Error while updating user details"; 

             onFailure?.(message);
             return {
                success: false,
                message,
             }
         }

          onSuccess?.(response.data);
        
          return {
            success: true,
            message: "User details updated successfully!",
            data: response.data
          }

        } catch (error) {

           onFailure?.(parseAxiosError(error));
           return {
              success: false,
              message: parseAxiosError(error),
           }
        }
    }

   // Admin: update user by id
   async updateUserByAdmin({ id, username, email, password, isAdmin, onSuccess, onFailure }: DefaultFunctionParams & { id: string; username?: string; email?: string; password?: string; isAdmin?: boolean }): Promise<UpdateUserResponse> {
      try {
         const target = ADMIN_UPDATE_USER_URL.replace(':id', String(id));
         const response = await fsClient.put<User>(target, {
            username,
            email,
            password,
            isAdmin,
         });

         if(!response.data){
            const message = "Error while updating user details";
            onFailure?.(message);
            return { success: false, message };
         }

         onSuccess?.(response.data);
         return { success: true, message: "User details updated successfully!", data: response.data };
      } catch (error) {
         onFailure?.(parseAxiosError(error));
         return { success: false, message: parseAxiosError(error) };
      }
   }



    // Handler for deleting user by user id
    async deleteUserById({ id, onFailure, onSuccess }: DefaultFunctionParams & { id: number | string }): Promise<DefaultFuncResponse>{
        try {

         const target = ADMIN_DELETE_USER_URL.replace(':id', String(id));
         const response = await fsClient.delete<User>(target);

         if(response.status != 200){
            const message = "Error while deleting user"; 

             onFailure?.(message);
             return {
                success: false,
                message,
             }
         }


         onSuccess?.(true)
          return {
            success: true,
            message: "User deleted successfully",
          }
        } catch (error) {

           onFailure?.(parseAxiosError(error));
           return {
              success: false,
              message: parseAxiosError(error),
           }
        }
    }
}


// User Service Initialized Instance
export const userService = new UserService();
