import service from '@/services/fetchInterceptor';
import { AxiosRequestConfig } from 'axios';

export const fetcher = async ([url, params]: [string, AxiosRequestConfig['params']]) => {
  const res = await service.get(url, { params });
  return res.data;
}; 