import { apiClient } from './index';

export interface UserInfo {
  id: number;
  name: string;
  email: string;
}

export interface CreateUserRequest {
  name: string;
  email: string;
}

export interface UpdateUserRequest {
  name?: string;
  email?: string;
}

export const userApi = {
  getUserInfo: (): Promise<UserInfo> => {
    return apiClient
      .get<UserInfo>('/api/user/info')
      .then((response) => response.data)
      .catch((error) => {
        throw error;
      });
  },

  createUser: (userData: CreateUserRequest): Promise<UserInfo> => {
    return apiClient
      .post<UserInfo>('/api/user', userData)
      .then((response) => response.data)
      .catch((error) => {
        throw error;
      });
  },

  updateUser: (
    userId: number,
    userData: UpdateUserRequest
  ): Promise<UserInfo> => {
    return apiClient
      .put<UserInfo>(`/api/user/${userId}`, userData)
      .then((response) => response.data)
      .catch((error) => {
        throw error;
      });
  },

  deleteUser: (userId: number): Promise<void> => {
    return apiClient
      .delete<void>(`/api/user/${userId}`)
      .then(() => {
        return;
      })
      .catch((error) => {
        throw error;
      });
  },
};
