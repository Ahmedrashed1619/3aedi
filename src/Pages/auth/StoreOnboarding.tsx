import React, { useState } from 'react';
// import { Steps } from 'antd';
// import { Link } from 'react-router-dom';
import Step1UserInfo from './onboarding/Step1UserInfo';
import Step2BusinessDetails from './onboarding/Step2BusinessDetails';
import Step3MarketingPlatforms from './onboarding/Step3MarketingPlatforms';
import Step4ImportProducts from './onboarding/Step4ImportProducts';
import './Auth.scss';
import { useToast } from '../../hooks/useToast';
import { useNavigate } from 'react-router-dom';
import { OnboardingHeader } from './onboarding/OnboardingHeader';
import { register } from '../../services/authService';

// const { Step } = Steps;

const steps = [
  { title: 'معلومات التسجيل' },
  { title: 'تفاصيل النشاط' },
  { title: 'ربط منصات التسويق' },
  { title: 'إستيراد المنتجات' },
];

const StoreOnboarding: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [formData, setFormData] = useState<any>({});
  const toast = useToast();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const [isLoadingStep3, setIsLoadingStep3] = useState(false);
  const [isLoadingStep4, setIsLoadingStep4] = useState(false);

  const handleStep1Next = (values: any) => {
    setFormData((prev: any) => ({ ...prev, ...values }));
    setCurrent(1);
  };

  const handleStep2Next = async (values: any) => {
    setIsLoading(true);
    const allData = { ...formData, ...values };
    // Prepare data as in Register
    const [first_name, ...last_name_parts] = allData.fullName.trim().split(' ');
    const last_name = last_name_parts.join(' ');
    const requestBody = {
      first_name,
      last_name: last_name || first_name,
      email: allData.email,
      phone: `+${allData.phone}`,
      password: allData.password,
      password2: allData.password2,
      store_name: allData.store_name,
      store_url: allData.store_url,
      store_category: allData.store_category,
    };
    try {
      const data = await register(requestBody);
      if (data?.status === 'success') {
        toast.success(data?.message || 'تم حفظ بياناتك بنجاح');
        setCurrent(2); // Go to step3
      } else {
        toast.error(data?.message || 'حدث خطأ أثناء الحفظ');
      }
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  const handleStep3Next = () => {
    setIsLoadingStep3(true);
    setTimeout(() => {
      toast.info('تم الانتقال للخطوة التالية');
      setCurrent(3);
      setIsLoadingStep3(false);
    }, 1000);
  };

  const handleStep4Submit = () => {
    setIsLoadingStep4(true);
    setTimeout(() => {
      toast.success('اكتمل التسجيل بنجاح! سيتم توجيهك الآن.');
      navigate('/dashboard');
      setIsLoadingStep4(false);
    }, 1500);
  };

  const renderStepContent = (step: number) => {
    switch (step) {
      case 0:
        return <Step1UserInfo onNext={handleStep1Next} initialValues={formData} isLoading={isLoading} />;
      case 1:
        return <Step2BusinessDetails onNext={handleStep2Next} onBack={() => setCurrent(0)} initialValues={formData} isLoading={isLoading} />;
      case 2:
        return <Step3MarketingPlatforms onBack={() => setCurrent(1)} onNext={handleStep3Next} isLoading={isLoadingStep3} />;
      case 3:
        return <Step4ImportProducts onBack={() => setCurrent(2)} onSubmit={handleStep4Submit} isLoading={isLoadingStep4} />;
      default:
        return null;
    }
  };

  const renderStepper = (isMobile = false) => {
    if (isMobile) {
      return (
        <div className="flex items-start justify-between">
          {steps.map((item, index) => (
            <React.Fragment key={item.title}>
              <div className="flex flex-col items-center text-center w-20">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center border-2 border-gray-200 ${
                    index <= current ? 'bg-primary text-white border-primary' : 'bg-white text-gray-400'
                  }`}
                >
                  {index < current ? (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    <span>{index + 1}</span>
                  )}
                </div>
                <h3
                  className={`font-bold mt-2 text-[10px] sm:text-xs ${
                    index <= current ? 'text-[#1B2559]' : 'text-gray-400'
                  }`}
                >
                  {item.title}
                </h3>
              </div>
              {index < steps.length - 1 && (
                <div
                  className={`flex-1 h-0.5 mt-4 mx-0 border-t-2 ${
                    index <= current ? 'border-primary' : 'border-gray-200'
                  } border-dashed`}
                ></div>
              )}
            </React.Fragment>
          ))}
        </div>
      );
    }

    return (
      <>
        {steps.map((item, index) => (
          <div key={item.title} className="step-item flex items-start mb-12">
            <div className="relative">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center border-2 border-gray-200 ${
                  index <= current ? 'bg-primary text-white border-primary' : 'bg-white text-gray-400'
                }`}
              >
                {index < current ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  <span>{index + 1}</span>
                )}
              </div>
              {index < steps.length - 1 && (
                <div
                  className={`absolute h-full w-0.5 top-8 right-4 border-s-2 ${
                    index <= current ? 'border-primary' : 'border-gray-200'
                  } border-dashed`}
                  style={{ height: 'calc(100% + 3rem)' }}
                />
              )}
            </div>
            <div className="ms-4">
              <h3 className={`font-bold ${index <= current ? 'text-[#1B2559]' : 'text-gray-400'}`}>
                {item.title}
              </h3>
            </div>
          </div>
        ))}
      </>
    );
  };

  return (
    <div className="min-h-screen w-full font-arabic flex flex-col" dir="rtl">
        <OnboardingHeader />
        <div className='flex flex-col md:flex-row flex-1'>
            {/* Right Sidebar - hidden on small screens */}
            <div className="hidden md:flex w-full md:w-[40%] lg:1/3 md:max-w-sm xl:w-1/4 flex-shrink-0 bg-white shadow-lg flex-col justify-between p-8">
                <div className="w-full">
                    <div className="mb-16">
                        <h2 className="text-xl md:text-2xl font-black mb-2 text-black leading-tight">🚀 ابدأ رحلتك مع عائدي</h2>
                        <p className="text-xs md:text-sm xl:text-base font-medium text-[#6B7280]">خطوات سريعة لإعداد متجرك الإلكتروني!</p>
                    </div>
                    <div className="custom-steps">
                        <div className="hidden md:block">{renderStepper(false)}</div>
                    </div>
                </div>
                <div className='mt-6 md:mt-2'>
                    <div className="font-bold text-black text-xs xl:text-sm">
                        هل تواجه مشكلة في التسجيل؟ <a href='' className="auth-link text-sm">مركز المساعدة</a>
                    </div>
                </div>
            </div>
            
            {/* Main Content */}
            <div className="flex-1 flex flex-col bg-gray-50 py-5">
                {/* Horizontal stepper above the form on small screens */}
                <div className="block md:hidden px-4 pt-6 pb-10">
                    {renderStepper(true)}
                </div>
                <main className="flex-1 flex flex-col items-center justify-center px-4 md:px-12">
                    <div className={`w-full ${current !== 3 && "max-w-xl"}`}>
                        {renderStepContent(current)}
                    </div>
                </main>
                {/* <footer className="text-end px-12 py-6 hidden md:block">
                    <Link to="/store-onboarding">
                        <span className="font-bold text-gray-600 hover:text-primary transtion duration-200 text-sm lg:text-base xl:text-lg">العودة</span>
                    </Link>
                </footer> */}
            </div>
        </div>
    </div>
  );
};

export default StoreOnboarding; 