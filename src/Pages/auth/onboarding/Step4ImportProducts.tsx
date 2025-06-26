import { Button } from 'antd';
import { Toaster } from 'react-hot-toast';
import SvgIcon from "@/assets/step4.svg"

const MOCK_PRODUCTS_COUNT = 4;
const MOCK_PRODUCTS_TOTAL = 4;

const Step4ImportProducts = ({ onBack, onSubmit, isLoading }: { onBack: () => void, onSubmit: () => void, isLoading?: boolean }) => {
  
    // Mock progress percentage
  const percent = (MOCK_PRODUCTS_COUNT / MOCK_PRODUCTS_TOTAL) * 100;

  const handleConfirm = () => {
    if (onSubmit) onSubmit();
  };

  const SuccessComponent = () => {
    return (
      <div className="w-full max-w-lg bg-white rounded-3xl shadow-lg p-8 flex flex-col items-center justify-center mx-auto">
        <h3 className="text-2xl 2xl:text-3xl font-extrabold text-center mb-4 text-primary">استيراد المنتجات !</h3>
        <div className="flex flex-col items-center justify-center mb-8">
          <div className="relative w-32 h-32 flex items-center justify-center mb-2">
            <svg className="absolute top-0 left-0" width="128" height="128" viewBox="0 0 128 128">
              <circle cx="64" cy="64" r="56" stroke="#E5E7EB" strokeWidth="10" fill="none" />
              <circle
                cx="64"
                cy="64"
                r="56"
                stroke="#4857FC"
                strokeWidth="10"
                fill="none"
                strokeDasharray={2 * Math.PI * 56}
                strokeDashoffset={2 * Math.PI * 56 * (1 - percent / 100)}
                strokeLinecap="round"
                style={{ transition: 'stroke-dashoffset 0.5s' }}
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              {/* <svg width="56" height="56" viewBox="0 0 24 24" fill="none">
                <path d="M12 17V7" stroke="#4857FC" strokeWidth="2.5" strokeLinecap="round" />
                <path d="M8 11L12 7L16 11" stroke="#4857FC" strokeWidth="2.5" strokeLinecap="round" />
                <path d="M20 16.5C20 18.9853 17.9853 21 15.5 21H8.5C6.01472 21 4 18.9853 4 16.5C4 14.0147 6.01472 12 8.5 12H15.5C17.9853 12 20 14.0147 20 16.5Z" stroke="#4857FC" strokeWidth="2.5" />
              </svg> */}
              <img src={SvgIcon} className='w-16 h-16' alt="import-products" />
              <span className="text-primary font-bold text-lg mt-2">{MOCK_PRODUCTS_COUNT}/{MOCK_PRODUCTS_TOTAL}</span>
            </div>
          </div>
        </div>
        <p className="text-center text-black mb-6 text-xs md:text-sm font-bold">
            سنستورد منتجاتك في الخلفية، تأكد أن سعر تكلفة المنتج في متجرك لا يشمل تكاليف إضافية مثل التسويق أو التخزين أو الشحن، فهي تُحسب بشكل منفصل.<br />
            <span className='text-[10px] sm:text-xs text-[#9CA3AF]'>
                (إن كان السعر غير صحيح في متجرك، عدله واضغط "تأكيد".)
            </span>
        </p>
        <Button type="primary" onClick={handleConfirm} loading={isLoading} className="mt-2 w-3/4 font-bold py-5">
            تأكيد . ابدأ رحلتك
        </Button>
      </div>
    )
  }

  const WrongComponent = () => {
    return (
      <div className="w-full max-w-lg bg-white rounded-3xl shadow-lg p-8 flex flex-col items-center justify-center mx-auto">
        <h3 className="text-2xl 2xl:text-3xl font-extrabold text-center mb-4 text-[#FF3B3B]">فشل الإستيراد !</h3>
        <div className="flex flex-col items-center justify-center mb-8">
          <div className="relative w-32 h-32 flex items-center justify-center mb-2">
            <svg className="absolute top-0 left-0" width="128" height="128" viewBox="0 0 128 128">
              <circle cx="64" cy="64" r="56" stroke="#E5E7EB" strokeWidth="10" fill="none" />
              <circle
                cx="64"
                cy="64"
                r="56"
                stroke="#FF3B3B"
                strokeWidth="10"
                fill="none"
                strokeDasharray={2 * Math.PI * 56}
                strokeDashoffset={2 * Math.PI * 56 * (1 - percent / 100)}
                strokeLinecap="round"
                style={{ transition: 'stroke-dashoffset 0.5s' }}
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <img src={SvgIcon} className='w-16 h-16' alt="import-products" />
              <span className="text-[#FF3B3B] font-bold text-lg mt-2">{MOCK_PRODUCTS_COUNT}/{MOCK_PRODUCTS_TOTAL}</span>
            </div>
          </div>
        </div>
        <p className="text-center text-black mb-6 text-xs md:text-sm font-bold">
          فشل في استيراد المنتجات، تأكد أن الأسعار لا تتضمن تكاليف إضافية مثل التسويق أو التخزين أو الشحن.<br />
          <span className='text-[10px] sm:text-xs text-[#9CA3AF]'>
            (صحح الأسعار في متجرك ثم أعد، ثم حاول مرة أخرى.)
          </span>
        </p>
        <Button type="primary" danger className="mt-2 w-3/4 font-bold py-5 bg-[#FF3B3B] border-none" onClick={onBack}>
          حاول مجددًا
        </Button>
      </div>
    )
  }

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <Toaster position="top-center" />
      <h2 className="text-2xl 2xl:text-3xl text-center sm:text-start w-full mb-8 text-black font-black leading-tight">🔄  استيراد منتجات منصات التجارة الإلكترونية</h2>
      <SuccessComponent />
      <div className="mt-2">
        <WrongComponent />
      </div>
    </div>
  );
};

export default Step4ImportProducts; 