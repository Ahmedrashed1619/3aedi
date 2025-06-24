import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import RegisterHero from './RegisterHero';
import './Auth.scss';

const registerSchema = z.object({
  // Step 1
  fullName: z.string().min(3, 'Full name is required'),
  storeName: z.string().min(2, 'Store/Agency name is required'),
  storeUrl: z.string().url('Please enter a valid URL'),
  businessType: z.string().min(1, 'Business type is required'),
  // Step 2
  email: z.string().email('Please enter a valid email'),
  phone: z.string().min(8, 'Phone number is required'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  agree: z.literal(true, { errorMap: () => ({ message: 'You must agree to the terms.' }) }),
});

type RegisterFormValues = z.infer<typeof registerSchema>;

const businessTypes = [
  { value: '', label: 'اختر نوع النشاط' },
  { value: 'ecommerce', label: 'متجر إلكتروني' },
  { value: 'marketing', label: 'وكالة تسويق' },
  { value: 'other', label: 'أخرى' },
];

const Register = () => {
  const [step, setStep] = useState(1);
  const [showPassword, setShowPassword] = useState(false);
  const methods = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    mode: 'onTouched',
    defaultValues: {
      fullName: '',
      storeName: '',
      storeUrl: '',
      businessType: '',
      email: '',
      phone: '',
      password: '',
      agree: true,
    },
  });
  const { register, handleSubmit, formState: { errors }, trigger, watch } = methods;

  const onNext = async () => {
    const valid = await trigger(['fullName', 'storeName', 'storeUrl', 'businessType']);
    if (valid) setStep(2);
  };

  const onBack = () => setStep(1);

  const onSubmit = (data: RegisterFormValues) => {
    // Send all data in one request
    console.log('Register data:', data);
    alert('Registration successful!');
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
          <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              {step === 1 && (
                <>
                  <h2 className="text-xl md:text-2xl font-extrabold text-center mb-6 text-text-primary leading-tight">أدخل البيانات الأساسية</h2>
                  <div>
                    <label className="auth-label">الاسم الكريم <span className="text-text-error">*</span></label>
                    <input {...register('fullName')} className="auth-input" placeholder="أدخل اسمك" />
                    {errors.fullName && <p className="auth-error">{errors.fullName.message}</p>}
                  </div>
                  <div>
                    <label className="auth-label">أدخل اسم متجرك/وكالة التسويق <span className="text-text-error">*</span></label>
                    <input {...register('storeName')} className="auth-input" placeholder="أدخل اسم متجرك/وكالتك" />
                    {errors.storeName && <p className="auth-error">{errors.storeName.message}</p>}
                  </div>
                  <div>
                    <label className="auth-label">رابط متجرك/وكالة التسويق <span className="text-text-error">*</span></label>
                    <input {...register('storeUrl')} className="auth-input" placeholder="https://store-name.com" />
                    {errors.storeUrl && <p className="auth-error">{errors.storeUrl.message}</p>}
                  </div>
                  <div>
                    <label className="auth-label">نشاطك التجاري <span className="text-text-error">*</span></label>
                    <select {...register('businessType')} className="auth-input">
                      {businessTypes.map(opt => (
                        <option key={opt.value} value={opt.value}>{opt.label}</option>
                      ))}
                    </select>
                    {errors.businessType && <p className="auth-error">{errors.businessType.message}</p>}
                  </div>
                  <button type="button" className="auth-button mt-2" onClick={onNext}>التالي</button>

                  <div className="text-center mt-5 text-xs md:text-sm text-primary-light font-semibold">
                    لديك حساب بالفعل؟ <Link to={'/login'} className="auth-link">تسجيل الدخول</Link>
                  </div>
                </>
              )}
              {step === 2 && (
                <>
                  <h2 className="text-xl md:text-2xl font-extrabold text-center mb-6 text-text-primary leading-tight">سجّل حسابك الآن</h2>
                  <div>
                    <label className="auth-label">البريد الالكتروني <span className="text-text-error">*</span></label>
                    <input {...register('email')} className="auth-input" placeholder="أدخل البريد الالكتروني" />
                    {errors.email && <p className="auth-error">{errors.email.message}</p>}
                  </div>
                  <div>
                    <label className="auth-label">رقم الجوال <span className="text-text-error">*</span></label>
                    <div className="flex items-center gap-2">
                      <span className="bg-background-light border border-border rounded-lg px-2 py-2 text-gray-500 select-none">+966</span>
                      <input {...register('phone')} className="auth-input" placeholder="5xxxxxxxx" style={{direction:'ltr'}} />
                    </div>
                    {errors.phone && <p className="auth-error">{errors.phone.message}</p>}
                  </div>
                  <div>
                    <label className="auth-label">كلمة المرور <span className="text-text-error">*</span></label>
                    <div className="relative flex items-center border border-border rounded-lg bg-background-light focus-within:ring-1 focus-within:ring-primary">
                      <input
                        type={showPassword ? 'text' : 'password'}
                        {...register('password')}
                        className="flex-1 bg-transparent border-0 outline-none px-3 py-2 text-right text-xs md:text-sm placeholder-placeholder font-normal"
                        placeholder="أدخل كلمة المرور"
                        autoComplete="new-password"
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
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <input type="checkbox" {...register('agree')} id="agree" className="accent-primary" />
                    <label htmlFor="agree" className="text-xs md:text-sm text-gray-600 cursor-pointer">
                      من خلال التسجيل فإنك توافق على <Link to="#" className="text-primary hover:underline">الشروط والأحكام وسياسة الخصوصية</Link>
                    </label>
                  </div>
                  {errors.agree && <p className="auth-error">{errors.agree.message}</p>}
                  <button type="submit" className="auth-button mt-2">إنشاء حساب جديد</button>
                  <div className="auth-divider my-5">
                    <span className="auth-divider-line"></span>
                    <span className="auth-divider-text">أو</span>
                    <span className="auth-divider-line"></span>
                  </div>
                  <button type="button" className="auth-button-secondary mb-5 w-full flex items-center justify-center gap-2">
                    <img src={'google.svg'} alt="Google" className="w-5 h-5" />
                    تسجيل الدخول بواسطة جوجل
                  </button>
                  <div className="text-center mt-2 text-xs md:text-sm text-primary-light font-semibold">
                    لديك حساب بالفعل؟ <Link to={'/login'} className="auth-link">تسجيل الدخول</Link>
                  </div>
                  <button type="button" className="text-xs text-primary mt-2" onClick={onBack}>عودة للبيانات الأساسية</button>
                </>
              )}
            </form>
          </FormProvider>
        </div>
      </div>
      <div className="md:basis-1/2 lg:basis-[45%] xl:basis-2/5 h-full">
        <RegisterHero currentStep={step} />
      </div>
    </div>
  );
};

export default Register; 