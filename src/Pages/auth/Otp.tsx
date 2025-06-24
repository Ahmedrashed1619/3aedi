import { useRef } from 'react';
import { Link } from 'react-router-dom';
import LoginHero from './LoginHero';
import './Auth.scss';

const OTP_LENGTH = 6;

const Otp = () => {
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);

  // Handle input change and auto-focus
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, idx: number) => {
    const value = e.target.value.replace(/[^0-9]/g, '');
    e.target.value = value;
    if (value && idx < OTP_LENGTH - 1) {
      inputsRef.current[idx + 1]?.focus();
    }
  };

  // Handle backspace to move focus
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, idx: number) => {
    if (e.key === 'Backspace' && !e.currentTarget.value && idx > 0) {
      inputsRef.current[idx - 1]?.focus();
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
        <div className="w-full max-w-md bg-white rounded-3xl shadow-lg p-4 sm:p-6 md:p-8 lg:px-10 mx-auto">
          <h2 className="text-xl md:text-2xl font-extrabold text-center mb-8 text-text-primary leading-tight">أدخل رمز التحقق بالبريد</h2>
          <form className="flex flex-col items-center gap-6">
            <div className="flex justify-center gap-2 sm:gap-3 md:gap-4 w-full">
              {Array.from({ length: OTP_LENGTH }).map((_, idx) => (
                <input
                  key={idx}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  ref={el => { inputsRef.current[idx] = el; }}
                  onChange={e => handleChange(e, idx)}
                  onKeyDown={e => handleKeyDown(e, idx)}
                  className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-center text-xl md:text-2xl border border-border rounded-lg bg-background-light focus:outline-none focus:ring-1 focus:ring-primary transition placeholder-placeholder font-bold"
                  autoFocus={idx === 0}
                  aria-label={`رقم ${idx + 1}`}
                />
              ))}
            </div>
            <button type="submit" className="auth-button mt-2 w-full">تأكيد</button>
          </form>
          <div className="text-center mt-6 text-xs md:text-sm text-text-secondary font-semibold">
            لم يصلك الرمز بالبريد الإلكتروني؟{' '}
            <Link to="#" className="auth-link font-medium">إعادة الإرسال</Link>
          </div>
          <div className="text-center mt-4 text-xs md:text-sm">
            <Link to="/register" className="auth-link">عودة إلى إنشاء حساب جديد</Link>
          </div>
        </div>
      </div>
      <div className="md:basis-1/2 lg:basis-[45%] xl:basis-2/5 h-full">
        <LoginHero />
      </div>
    </div>
  );
};

export default Otp;
