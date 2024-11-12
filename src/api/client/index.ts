import axios, { AxiosInstance, AxiosError } from 'axios';
import { ApiError, ApiResponse, ApiErrorResponse } from 'types/api/client';

export class ApiClient {
  private client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: process.env.VUE_APP_API_URL,
      timeout: 5000,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
    });

    this.setupInterceptors();
  }

  private setupInterceptors(): void {
    this.client.interceptors.response.use(
      (response) => response.data,
      (error: AxiosError<ApiErrorResponse>) => {
        const apiError: ApiError = {
          message: 'An error occurred',
          status: error.response?.status
        };

        if (error.response?.data) {
          console.error('API Error:', error.response.data);
          apiError.message = error.response.data.message || apiError.message;
          apiError.errors = error.response.data.errors;
        }

        return Promise.reject(apiError);
      }
    );
  }

  public get<T>(url: string): ApiResponse<T> {
    return this.client.get(url);
  }
}

export const apiClient = new ApiClient();
