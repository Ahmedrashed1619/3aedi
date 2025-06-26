import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import RegisterHero from './RegisterHero';
import { Form, Input, Button, Select } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone, DownOutlined } from '@ant-design/icons';
import PhoneInput from 'react-phone-input-2';
import './Auth.scss';
import { useToast } from '@/hooks/useToast';
import { useMutation } from '@/hooks/useMutation';
import END_POINTS from '@/services/constants';
import { register } from '@/services/authService';

const businessTypes = [
  { value: 'electronics_technology', label: 'الإلكترونيات والتقنية' },
  { value: 'fashion_beauty', label: 'الأزياء والجمال' },
  { value: 'home_decor', label: 'المنزل والديكور' },
  { value: 'entertainment_hobbies', label: 'الترفيه والهوايات' },
  { value: 'pets', label: 'الحيوانات الأليفة' },
  { value: 'marketing_agency', label: 'وكالة تسويق' },
  { value: 'digital_products', label: 'منتجات رقمية' },
  { value: 'other', label: 'أخرى' },
];

const Register = () => {
  const [step, setStep] = useState(1);
  const [form] = Form.useForm();
  const [step1Values, setStep1Values] = useState({});
  const toast = useToast();
  const navigate = useNavigate();
  const { post } = useMutation();

  const onNext = async () => {
    try {
      const values = await form.validateFields(['fullName', 'store_name', 'store_url', 'store_category']);
      setStep1Values(values);
      setStep(2);
    } catch {}
  };

  const onBack = () => setStep(1);

  const onFinish = async (values: any) => {

    const allValues = { ...step1Values, ...values };
    let first_name = '';
    let last_name = '';
    if (allValues.fullName) {
      const nameParts = allValues.fullName.trim().split(' ');
      first_name = nameParts[0] || '';
      last_name = nameParts.slice(1).join(' ') || '';
    }
    const requestBody = {
      first_name,
      last_name,
      email: allValues.email,
      phone: `+${allValues.phone}`,
      password: allValues.password,
      password2: allValues.password2,
      store_name: allValues.store_name,
      store_url: allValues.store_url,
      store_category: allValues.store_category,
    };

    try {
      const data = await register(requestBody);
      
      if (data?.status === "success") {
        toast.success(data?.message || 'تم التسجيـل بنجاح!');
        navigate('/login');
      } else {
        toast.error(data?.message || 'فشل التسجيـل');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col-reverse md:flex-row bg-background font-arabic relative">
      <img
        src="/logo.png"
        alt="3aedi-logo"
        className="hidden md:block absolute top-8 right-8 z-20 h-10"
      />
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-white rounded-3xl shadow-lg py-4 px-6 sm:py-5 sm:px-8 md:py-6 md:px-10 lg:px-12 mx-auto">
          <Form
            form={form}
            layout="vertical"
            onFinish={onFinish}
            className="space-y-4"
          >
            {step === 1 && (
              <>
                <h2 className="text-xl md:text-2xl font-extrabold text-center mb-6 text-text-primary leading-tight">أدخل البيانات الأساسية</h2>
                <Form.Item
                  name="fullName"
                  label={<span className="auth-label">الاسم الكريم</span>}
                  rules={[
                    { required: true, message: 'الاسم الكامل مطلوب (3 أحرف على الأقل)', min: 3 },
                    { max: 120, message: 'الاسم يجب أن يكون أقل من 120 حرف' }
                  ]}
                  className='!mb-0'
                >
                  <Input className='py-2' placeholder="أدخل اسمك" maxLength={120} />
                </Form.Item>
                <Form.Item
                  name="store_name"
                  label={<span className="auth-label">أدخل اسم متجرك/وكالة التسويق</span>}
                  rules={[
                    { required: true, message: 'اسم المتجر/الوكالة مطلوب', min: 2 },
                    { max: 120, message: 'اسم المتجر يجب أن يكون أقل من 120 حرف' }
                  ]}
                  className='!mb-0'
                >
                  <Input className='py-2' placeholder="أدخل اسم متجرك/وكالتك" maxLength={120} />
                </Form.Item>
                <Form.Item
                  name="store_url"
                  label={<span className="auth-label">رابط متجرك/وكالة التسويق</span>}
                  rules={[
                    { required: true, type: 'url', message: 'يرجى إدخال رابط صحيح' },
                    { max: 200, message: 'الرابط يجب أن يكون أقل من 200 حرف' }
                  ]}
                  className='!mb-0'
                >
                  <Input className='py-2' placeholder="https://store-name.com" maxLength={200} />
                </Form.Item>
                <Form.Item
                  name="store_category"
                  label={<span className="auth-label">نشاطك التجاري</span>}
                  rules={[{ required: true, message: 'نوع النشاط التجاري مطلوب' }]}
                  className='!mb-0'
                >
                  <Select
                    placeholder="اختر نوع النشاط"
                    suffixIcon={<DownOutlined style={{ color: '#1B2559', fontSize: 12, right: 0 }} />}
                    styles={{ popup: { root: { textAlign: 'right' } } }}
                  >
                    {businessTypes.map((opt, i) => (
                      <Select.Option key={i} value={opt.value} className="text-xs lg:text-sm 2xl:text-base">
                        {opt.label}
                      </Select.Option>
                    ))}
                  </Select>
                </Form.Item>
                <Button type="primary" className="mt-2 w-full font-medium py-5" onClick={onNext}>
                  التالي
                </Button>
                <div className="text-center mt-5 text-xs md:text-sm text-primary-light font-semibold">
                  لديك حساب بالفعل؟ <Link to={'/login'} className="auth-link">تسجيل الدخول</Link>
                </div>
              </>
            )}
            {step === 2 && (
              <>
                <h2 className="text-xl md:text-2xl font-extrabold text-center mb-6 text-text-primary leading-tight">سجّل حسابك الآن</h2>
                <Form.Item
                  name="email"
                  label={<span className="auth-label">البريد الالكتروني</span>}
                  rules={[{ required: true, type: 'email', message: 'يرجى إدخال بريد إلكتروني صحيح' }]}
                  className='!my-0'
                >
                  <Input className='py-2' placeholder="أدخل البريد الالكتروني" />
                </Form.Item>
                <Form.Item
                  name="phone"
                  label={<span className="auth-label">رقم الجوال</span>}
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
                </Form.Item>
                <Form.Item
                  name="password"
                  label={<span className="auth-label !mt-0">كلمة المرور</span>}
                  rules={[{ required: true, min: 6, message: 'كلمة المرور يجب أن تكون 6 أحرف على الأقل' }]}
                  className='!mb-0'
                >
                  <Input.Password
                    className='py-2'
                    placeholder="أدخل كلمة المرور"
                    iconRender={visible => visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />}
                  />
                </Form.Item>
                <Form.Item
                  name="password2"
                  label={<span className="auth-label !mt-0">تأكيد كلمة المرور</span>}
                  dependencies={["password"]}
                  rules={[
                    { required: true, message: 'يرجى تأكيد كلمة المرور!' },
                    ({ getFieldValue }) => ({
                      validator(_, value) {
                        if (!value || getFieldValue('password') === value) {
                          return Promise.resolve();
                        }
                        return Promise.reject(new Error('كلمتا المرور غير متطابقتين!'));
                      },
                    }),
                  ]}
                  className='!mb-0'
                >
                  <Input.Password
                    className='py-2'
                    placeholder="أعد إدخال كلمة المرور"
                    iconRender={visible => visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />}
                  />
                </Form.Item>
                <div className="text-[10px] md:text-xs">
                  من خلال التسجيل فإنك توافق على {" "}
                  <Link to="#" className="text-primary hover:underline">الشروط والأحكام وسياسة الخصوصية</Link>
                </div>
                <Button type="primary" htmlType="submit" className="mt-2 w-full font-medium py-5">
                  إنشاء حساب جديد
                </Button>
                <div className="auth-divider my-5">
                  <span className="auth-divider-line"></span>
                  <span className="auth-divider-text">أو</span>
                  <span className="auth-divider-line"></span>
                </div>
                <Button type="default" className="auth-button-secondary ">
                  <img src={'google.svg'} alt="Google" className="w-5 h-5" />
                  تسجيل الدخول بواسطة جوجل
                </Button>
                <div className="text-center mt-2 text-xs md:text-sm text-primary-light font-semibold">
                  لديك حساب بالفعل؟ <Link to={'/login'} className="auth-link">تسجيل الدخول</Link>
                </div>
                <div className="text-center">
                  <Button type="link" className="auth-link !text-black hover:!text-primary transition-all duration-200 text-xs" onClick={onBack}>
                    عودة للبيانات الأساسية
                  </Button>
                </div>
              </>
            )}
          </Form>
        </div>
      </div>
      <div className="md:basis-1/2 lg:basis-[45%] xl:basis-2/5 h-full">
        <RegisterHero currentStep={step} />
      </div>
    </div>
  );
};

export default Register; 