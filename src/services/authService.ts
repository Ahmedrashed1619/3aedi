import service from "./fetchInterceptor";

// In a real app, you would define types for your API responses and request bodies
// For example:
// interface LoginRequest { email: string; password: string; }
// interface AuthResponse { token: string; user: any; }

export const login = async (credentials: any) => {
//   const { data } = await service.post<AuthResponse>('/auth/login', credentials);
  // return data;
  
  // Placeholder:
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

  // Placeholder:
  console.log('Registering with', userInfo);
  await new Promise(resolve => setTimeout(resolve, 500));
  return {
    message: 'Registration successful',
  };
}; 