import END_POINTS from "./constants";
import service from "./fetchInterceptor";
// interface AuthResponse { token: string; user: any; }

export const login = async (credentials: any) => {
  const { data } = await service.post(END_POINTS.LOGIN, credentials);
  return data;
};

export const register = async (userInfo: any) => {
  const { data } = await service.post(END_POINTS.REGISTER, userInfo);
  return data;
}; 