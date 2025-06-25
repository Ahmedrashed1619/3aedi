import { useDispatch } from 'react-redux';
import { loginSuccess } from '@store/slices/authSlice';
import { Link, useNavigate } from 'react-router-dom';
import LoginHero from './LoginHero';
import { Form, Input, Button } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import PhoneInput from 'react-phone-input-2';
import './Auth.scss';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onFinish = (values: any) => {
    console.log('Login data:', values);
    dispatch(loginSuccess({ token: 'fake-token', user: { phone: values.phone } }));
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
          <Button type="default" className="auth-button-secondary mb-5 w-full flex items-center justify-center gap-2">
            <img src={'google.svg'} alt="Google" className="w-5 h-5" />
            تسجيل الدخول بواسطة جوجل
          </Button>
          <div className="auth-divider mb-5">
            <span className="auth-divider-line"></span>
            <span className="auth-divider-text">أو</span>
            <span className="auth-divider-line"></span>
          </div>
          <Form onFinish={onFinish} className="space-y-4" layout="vertical">
            <Form.Item
              name="phone"
              label={<span className="auth-label">رقم الجوال </span>}
              rules={[{ required: true, message: 'رقم الجوال مطلوب' }]}
              className='!mb-0'
            >
              <PhoneInput
                country={'sa'}
                inputProps={{
                  name: 'phone',
                  required: true,
                }}
                placeholder="5xxxxxxxx"
              />
              {/* <div>
                <label htmlFor="email" className="auth-label">البريد الإلكتروني</label>
                <input
                  id="email"
                  type="email"
                  {...register('email')}
                  className="auth-input"
                  placeholder="example@email.com"
                  autoComplete="email"
                />
                {errors.email && <p className="auth-error">{errors.email.message}</p>}
              </div> */}
            </Form.Item>
            <Form.Item
              name="password"
              label={<span className="auth-label">كلمة المرور </span>}
              rules={[{ required: true, min: 6, message: 'كلمة المرور يجب أن تكون 6 أحرف على الأقل' }]}
            >
              <Input.Password
                className='auth-input !py-2'
                placeholder="أدخل كلمة المرور"
                iconRender={visible => visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />}
              />
            </Form.Item>
            <div className="my-4">
              <Link to={'/forget-password'} className="auth-link text-xs md:text-sm">نسيت كلمة المرور؟</Link>
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