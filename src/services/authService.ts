// import service from "./fetchInterceptor";

// interface AuthResponse { token: string; user: any; }

export const login = async (credentials: any) => {
//   const { data } = await service.post<AuthResponse>('/auth/login', credentials);
  // return data;
  
  console.log('Logging in with', credentials);
  await new Promise(resolve => setTimeout(resolve, 500));
  return {
    token: 'fake-api-token',
    user: { email: credentials.email, name: 'Test User' },
  };
};

export const register = async (userInfo: any) => {
  // const { data } = await service.post('/auth/register', userInfo);
  // return data;

  console.log('Registering with', userInfo);
  await new Promise(resolve => setTimeout(resolve, 500));
  return {
    message: 'Registration successful',
  };
}; 