import type { ApiResponse, ApiError } from '@/types/api';

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080';

const request = async <T>(
  endpoint: string,
  options?: RequestInit
): Promise<ApiResponse<T>> => {
  const url = `${API_BASE_URL}${endpoint}`;

  const token = localStorage.getItem('access_token');
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
    ...options?.headers,
  };

  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  const config: RequestInit = {
    headers,
    ...options,
  };

  try {
    const response = await fetch(url, config);
    const data = await response.json();

    if (!response.ok) {
      throw {
        message: data.message || 'API 요청 실패',
        status: response.status,
      } as ApiError;
    }

    return {
      data,
      status: response.status,
    };
  } catch (error) {
    if (error && typeof error === 'object' && 'status' in error) {
      throw error;
    }
    throw {
      message: '네트워크 오류가 발생했습니다.',
      status: 0,
    } as ApiError;
  }
};

export const apiClient = {
  get: <T>(endpoint: string, options?: RequestInit): Promise<ApiResponse<T>> =>
    request<T>(endpoint, { ...options, method: 'GET' }),

  post: <T>(
    endpoint: string,
    body?: unknown,
    options?: RequestInit
  ): Promise<ApiResponse<T>> =>
    request<T>(endpoint, {
      ...options,
      method: 'POST',
      body: body ? JSON.stringify(body) : undefined,
    }),

  put: <T>(
    endpoint: string,
    body?: unknown,
    options?: RequestInit
  ): Promise<ApiResponse<T>> =>
    request<T>(endpoint, {
      ...options,
      method: 'PUT',
      body: body ? JSON.stringify(body) : undefined,
    }),

  delete: <T>(
    endpoint: string,
    options?: RequestInit
  ): Promise<ApiResponse<T>> =>
    request<T>(endpoint, { ...options, method: 'DELETE' }),
};
