import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '@store/slices/authSlice';
import { Link, useNavigate } from 'react-router-dom';
import LoginHero from './LoginHero';
import { useState } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import './Auth.scss';

const loginSchema = z.object({
  email: z.string().email('يرجى إدخال بريد إلكتروني صحيح'),
  password: z.string().min(6, 'كلمة المرور يجب أن تكون 6 أحرف على الأقل'),
});

type LoginFormValues = z.infer<typeof loginSchema>;

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginFormValues) => {
    dispatch(loginSuccess({ token: 'fake-token', user: { email: data.email } }));
    navigate('/');
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
          <button className="auth-button-secondary mb-5">
            <img src={'google.svg'} alt="Google" className="w-5 h-5" />
            تسجيل الدخول بواسطة جوجل
          </button>
          <div className="auth-divider mb-5">
            <span className="auth-divider-line"></span>
            <span className="auth-divider-text">أو</span>
            <span className="auth-divider-line"></span>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label htmlFor="email" className="auth-label">البريد الإلكتروني<span className="text-text-error">*</span></label>
              <input
                id="email"
                type="email"
                {...register('email')}
                className="auth-input"
                placeholder="example@email.com"
                autoComplete="email"
              />
              {errors.email && <p className="auth-error">{errors.email.message}</p>}
            </div>
            <div>
              <label htmlFor="password" className="auth-label">كلمة المرور<span className="text-text-error">*</span></label>
              <div className="relative flex items-center border border-border rounded-lg bg-background-light focus-within:ring-1 focus-within:ring-primary">
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  {...register('password')}
                  className="flex-1 bg-transparent border-0 outline-none px-3 py-2 text-right text-xs md:text-sm placeholder-placeholder font-normal"
                  placeholder="أدخل كلمة المرور"
                  autoComplete="current-password"
                />
                <button
                  type="button"
                  tabIndex={-1}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-primary-light hover:text-primary"
                  onClick={() => setShowPassword((v) => !v)}
                >
                  {showPassword ? <FiEyeOff size={16} /> : <FiEye size={16} />}
                </button>
              </div>
              {errors.password && <p className="auth-error">{errors.password.message}</p>}
              <div className="my-4">
                <Link to={'/forget-password'} className="auth-link text-xs md:text-sm">نسيت كلمة المرور؟</Link>
              </div>
            </div>
            <button type="submit" className="auth-button mt-2">
              تسجيل الدخول
            </button>
          </form>
          <div className="text-center mt-5 text-xs md:text-sm text-primary-light font-semibold">
            ليس لديك حساب؟ <Link to={'/register'} className="auth-link">إنشاء حساب جديد</Link>
          </div>
        </div>
      </div>
      <div className="md:basis-1/2 lg:basis-[45%] xl:basis-2/5 h-full">
        <LoginHero />
      </div>
    </div>
  );
};

export default Login; 