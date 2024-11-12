export interface ApiError {
  message: string;
  status?: number;
  errors?: Record<string, string[]>;
}

export type ApiResponse<T> = Promise<T>;

export interface ApiErrorResponse {
  message: string;
  errors?: Record<string, string[]>;
}
