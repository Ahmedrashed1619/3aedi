import axios from 'axios';
import { store } from '../store/store';
import { logout } from '../store/slices/authSlice';
import { handleApiError } from '../utils/handleApiError';

const service = axios.create({
  baseURL: 'https://your-api-url.com/api', // Replace with your actual API URL
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add a request interceptor to include the token in headers
service.interceptors.request.use(
  (config) => {
    const token = store.getState().auth.token;
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
service.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error?.response?.status;
    if (status === 401) {
      // Unauthorized: Logout and redirect
      store.dispatch(logout());
      window.location.href = '/login';
      return Promise.reject(error);
    }
    if (status === 403) {
      handleApiError({ response: { data: { message: 'ليس لديك صلاحية للوصول إلى هذا المورد.' } } });
      return Promise.reject(error);
    }
    if (status >= 500) {
      handleApiError({ response: { data: { message: 'حدث خطأ في السيرفر. حاول لاحقًا.' } } });
      return Promise.reject(error);
    }
    // Handle all other errors (400, 422, etc.)
    handleApiError(error);
    return Promise.reject(error);
  }
);

export default service; 