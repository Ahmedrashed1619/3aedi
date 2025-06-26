import axios from 'axios';
import { store } from '../store/store';
import { logout } from '../store/slices/authSlice';
import { handleApiError } from '../utils/handleApiError';
import { BASE_URL } from '@/config';

const service = axios.create({
  baseURL: BASE_URL,
  timeout: 6000,
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
    if (status === 400) {
      handleApiError({ response: { data: { message: error?.response?.data?.message ?? 'الطلب غير صحيح. تحقق من البيانات المدخلة.' } } });
      return Promise.reject(error);
    }
    if (status === 401) {
      // Unauthorized: Logout and redirect
      // store.dispatch(logout());
      // window.location.href = '/login';
      handleApiError({ response: { data: { message: error?.response?.data?.message ?? 'ليس لديك صلاحية للوصول إلى هذا المورد.' } } });
      return Promise.reject(error);
    }
    if (status === 403) {
      handleApiError({ response: { data: { message: error?.response?.data?.message ?? 'ليس لديك صلاحية للوصول إلى هذا المورد.' } } });
      return Promise.reject(error);
    }
    if (status === 422) {
      handleApiError({ response: { data: { message: error?.response?.data?.message ?? 'هناك خطأ في البيانات المدخلة. يرجى المراجعة.' } } });
      return Promise.reject(error);
    }
    if (status >= 500) {
      handleApiError({ response: { data: { message: error?.response?.data?.message ?? 'حدث خطأ في السيرفر. حاول لاحقًا.' } } });
      return Promise.reject(error);
    }
    handleApiError(error);
    return Promise.reject(error);
  }
);

export default service; 