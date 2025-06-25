import { useDispatch } from "react-redux";
import END_POINTS from "./constants";
import service from "./fetchInterceptor";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/useToast";
import { loginSuccess } from "@/store/slices/authSlice";
import { BASE_URL } from "@/config";
import axios from "axios";

// interface AuthResponse { token: string; user: any; }

// const dispatch = useDispatch();
// const navigate = useNavigate();
// const toast = useToast();

export const login = async (credentials: any) => {
  console.log(credentials);
  
  const formData = new FormData();
  
  if (credentials.email) {
    formData.append('email', credentials.email);
  }
  if (credentials.phone) {
    formData.append('phone', credentials.phone);
  }
  formData.append('password', credentials.password);

  console.log(formData);

  console.log("url: ", `${BASE_URL}${END_POINTS.LOGIN}`);

  const response = await fetch(`${BASE_URL}${END_POINTS.LOGIN}`, {
    method: 'POST',
    headers: {
      "content-type": "application/json"
    }, // بدون Content-Type مع FormData
    body: JSON.stringify(credentials)
  });

  console.log(response);
  

  if (!response.ok) {
    throw new Error('فشل تسجيل الدخول');
  }

  const data = await response.json();
  console.log(data);
  
  return data;

    // console.log(res);  

    // dispatch(loginSuccess({ token: 'fake-token', user: payload }));
    // toast.success('تم تسجيل الدخول بنجاح!');
    // navigate('/');
    // return {
    //   token: 'fake-api-token',
    //   user: { email: credentials.email, name: 'Test User' },
    // };
};

export const register = async (userInfo: any) => {
  const { data } = await service.post(END_POINTS.REGISTER, userInfo);
  return data;

  // يمكنك التوجيه بعد النجاح إذا أردت:
  // navigate('/login');
  // return {
  //   message: 'Registration successful',
  // };
}; 