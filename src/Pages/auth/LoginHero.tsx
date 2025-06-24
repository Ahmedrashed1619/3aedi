import React from 'react';
import topSvg from '../../assets/top-shape.svg';
import centerSvg from '../../assets/center-shape.svg';
import bottomSvg from '../../assets/bottom-shape.svg'

const LoginHero = () => {
  return (
    <div className="flex flex-col justify-center bg-gradient-to-tr from-[#4857FC] to-[#4F8CFF] text-white p-10 w-full h-full min-h-screen relative overflow-hidden">
      {/* الزخارف */}
      <div className="absolute top-0 end-0 h-full opacity-20 pointer-events-none select-none flex flex-col justify-between items-end">
        <img src={topSvg} alt="top-svg" style={{width: '50px', height: '50px'}} />
        <img src={centerSvg} alt="center-svg" style={{width: '80px', height: '80px'}} />
        <img src={bottomSvg} alt="bottom-svg" style={{width: '150px', height: '150px'}} />
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