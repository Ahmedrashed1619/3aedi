import { useDispatch } from 'react-redux';
import { loginSuccess } from '@store/slices/authSlice';
import { Link, useNavigate } from 'react-router-dom';
import LoginHero from './LoginHero';
import { Form, Input, Button } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import PhoneInput from 'react-phone-input-2';
import './Auth.scss';
import { useToast } from '@/hooks/useToast';
import { useState } from 'react';
// import { BASE_URL } from '@/utils/fetcher';
import END_POINTS from '@/services/constants';
import { useMutation } from '@/hooks/useMutation';
import { login } from '@/services/authService';
import axios from 'axios';
import { BASE_URL } from '@/config';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toast = useToast();
  const { post } = useMutation();

  const [form] = Form.useForm();
  const [loginWithEmail, setLoginWithEmail] = useState(true);

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   try {
  //     const res = await fetch(
  //       'https://api.3aedi.com/api/users/auth/register/',
  //       {
  //         method: 'POST',
  //         headers: { 'Content-Type': 'application/json' },
  //         body: JSON.stringify(form),
  //       }
  //     );
  //     if (!res.ok) throw new Error(await res.text());
  //     console.log(res);
      
  //     // setStatus('✅ Registered successfully!');
  //   } catch (err) {
  //     // setStatus(`❌ ${err.message}`);
  //   }
  // };

  const onFinish = async (values: any) => {
    // const formData = new FormData();
    
    // if (loginWithEmail) {
    //   formData.append('email', values.email);
    // } else {
    //   formData.append('phone', values.phone);
    // }
    // formData.append('password', values.password);

    await login(values);
    // const res = await axios.post(`${BASE_URL}${END_POINTS.LOGIN}`, formData, {
    //   headers: {} // بدون Content-Type مع FormData
    // });

    // console.log(res);
  };

  return (
    <div className="min-h-screen w-full flex flex-col-reverse md:flex-row bg-background font-arabic relative">
      <img
        src="/logo.png"
        alt="3aedi-logo"
        className="hidden md:block absolute top-8 right-8 z-20 h-10"
      />
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-white rounded-3xl shadow-lg p-4 sm:p-6 md:p-8 lg:px-10 mx-auto">
          <h2 className="text-xl md:text-2xl font-extrabold text-center mb-6 text-text-primary leading-tight">تسجيل الدخول</h2>
          <Button type="default" className="auth-button-secondary">
            <img src={'google.svg'} alt="Google" className="w-5 h-5" />
            تسجيل الدخول بواسطة جوجل
          </Button>
          <div className="auth-divider mb-5">
            <span className="auth-divider-line"></span>
            <span className="auth-divider-text">أو</span>
            <span className="auth-divider-line"></span>
          </div>
          <div className="flex justify-center mb-2">
            <Button
              type={loginWithEmail ? 'primary' : 'default'}
              onClick={() => setLoginWithEmail(true)}
              className="mx-1 text-xs"
            >
              الدخول بالبريد الإلكتروني
            </Button>
            <Button
              type={!loginWithEmail ? 'primary' : 'default'}
              onClick={() => setLoginWithEmail(false)}
              className="mx-1 text-xs"
            >
              الدخول برقم الجوال
            </Button>
          </div>
          <Form
            form={form}
            onFinish={onFinish}
            className="space-y-4"
            layout="vertical"
            initialValues={{ email: '', phone: '' }}
          >
            {loginWithEmail ? (
              <Form.Item
                name="email"
                label={<span className="auth-label">البريد الإلكتروني</span>}
                rules={[
                  { required: true, message: 'يرجى إدخال البريد الإلكتروني' },
                  { type: 'email', message: 'يرجى إدخال بريد إلكتروني صحيح' },
                ]}
                className='!mb-0'
              >
                <Input className="auth-input !py-2" placeholder="example@email.com" autoComplete="email" />
              </Form.Item>
            ) : (
              <Form.Item
                name="phone"
                label={<span className="auth-label">رقم الجوال</span>}
                rules={[
                  { required: true, message: 'يرجى إدخال رقم الجوال' },
                ]}
                className="!mb-0"
              >
                <PhoneInput
                  country={'sa'}
                  inputProps={{
                    name: 'phone',
                  }}
                  placeholder="5xxxxxxxx"
                />
              </Form.Item>
            )}
            <Form.Item
              name="password"
              label={<span className="auth-label">كلمة المرور </span>}
              rules={[{ required: true, min: 6, message: 'كلمة المرور يجب أن تكون 6 أحرف على الأقل' }]}
              className='!mb-0'
            >
              <Input.Password
                className='auth-input !py-2'
                placeholder="أدخل كلمة المرور"
                iconRender={visible => visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />}
              />
            </Form.Item>
            <div className="my-4">
              <Link to={'/forgot-password'} className="auth-link text-xs md:text-sm">نسيت كلمة المرور؟</Link>
            </div>
            <Button type="primary" htmlType="submit" className="mt-2 w-full font-medium py-5">
              تسجيل الدخول
            </Button>
          </Form>
          <div className="text-center mt-5 text-xs md:text-sm text-primary-light font-semibold">
            ليس لديك حساب؟ <Link to={'/register'} className="auth-link">إنشاء حساب جديد</Link>
          </div>
        </div>
      </div>
      <div className="md:basis-1/2 lg:basis-[45%] xl:basis-2/5 h-full">
        <LoginHero
          title='مرحبًا بك في عائدي !'
          description='نحن هنا لمساعدتك على تحقيق النجاح في متجرك الإلكتروني من خلال تحليلات دقيقة وتقارير شاملة.'
        />
      </div>
    </div>
  );
};

export default Login; 