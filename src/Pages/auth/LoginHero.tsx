import React from 'react';
import topSvg from '../../assets/top-shape.svg';
import centerSvg from '../../assets/center-shape.svg';
import bottomSvg from '../../assets/bottom-shape.svg'

interface LoginHeroProps {
  currentStep?: number;
  stepsCount?: number;
}

const stepsLabels = [
  'البيانات الأساسية',
  'بيانات الحساب',
];

const LoginHero: React.FC<LoginHeroProps> = ({ currentStep = 1, stepsCount = 2 }) => {
  return (
    <div className="flex flex-col justify-center bg-gradient-to-tr from-[#4857FC] to-[#4F8CFF] text-white p-10 w-full h-full min-h-screen relative overflow-hidden">
      {/* الزخارف */}
      <div className="absolute top-0 end-0 h-full opacity-20 pointer-events-none select-none flex flex-col justify-between items-end">
        <img src={topSvg} alt="top-svg" style={{width: '50px', height: '50px'}} />
        <img src={centerSvg} alt="center-svg" style={{width: '80px', height: '80px'}} />
        <img src={bottomSvg} alt="bottom-svg" style={{width: '150px', height: '150px'}} />
      </div>
      {/* خطوات التسجيل */}
      <div className="flex flex-col items-center z-20 mt-8">
        <div className="flex items-center gap-6 mb-8">
          {Array.from({ length: stepsCount }).map((_, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div className={`w-10 h-10 flex items-center justify-center rounded-full border-2 transition-all duration-300 ${currentStep === idx + 1 ? 'bg-white text-primary border-white shadow-lg' : 'bg-white/20 border-white/40 text-white'}`}>
                <span className={`text-lg font-bold ${currentStep === idx + 1 ? 'text-primary' : 'text-white'}`}>{idx + 1}</span>
              </div>
              <span className={`mt-2 text-xs font-semibold ${currentStep === idx + 1 ? 'text-white' : 'text-white/70'}`}>{stepsLabels[idx]}</span>
            </div>
          ))}
        </div>
      </div>
      {/* النص الترحيبي */}
      <div className="z-10 text-center mt-8">
        <h2 className="text-2xl font-bold mb-2 flex items-center justify-center gap-2">
          <span>مرحبًا بك في عائدي!</span>
          <span className="text-yellow-400 text-2xl">👋</span>
        </h2>
        <p className="text-sm font-medium text-white/90 max-w-xs mx-auto">
          نحن هنا لمساعدتك على تحقيق النجاح في متجرك الإلكتروني من خلال تحليلات دقيقة وتقارير شاملة.
        </p>
        {/* <div className="flex justify-center mt-4 gap-1">
          <span className="w-3 h-1 rounded bg-white/80 inline-block"></span>
          <span className="w-3 h-1 rounded bg-white/40 inline-block"></span>
          <span className="w-3 h-1 rounded bg-white/40 inline-block"></span>
        </div> */}
      </div>
    </div>
  );
};

export default LoginHero; 