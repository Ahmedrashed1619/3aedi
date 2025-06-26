import React from 'react';
import topSvg from '@/assets/top-shape.svg';
import centerSvg from '@/assets/center-shape.svg';
import bottomSvg from '@/assets/bottom-shape.svg';
import firstSvg from '@/assets/first-shape.svg';
import secondSvg from '@/assets/second-shape.svg';

interface LoginHeroProps {
  title: string;
  description: string;
  icon?: string;
}

const LoginHero: React.FC<LoginHeroProps> = ({ title, description, icon }) => {
  return (
    <div className="flex flex-col justify-center bg-gradient-to-tr from-[#4857FC] to-[#4F8CFF] text-white p-10 w-full h-full min-h-screen relative overflow-hidden">
      {/* Decorations */}
      <div className="absolute top-0 end-0 h-full opacity-20 pointer-events-none select-none flex flex-col justify-between items-end">
        <img src={topSvg} alt="top-svg" style={{width: '50px', height: '50px'}} />
        <img src={centerSvg} alt="center-svg" style={{width: '80px', height: '80px', marginBottom: "250px"}} />
        <img src={bottomSvg} alt="bottom-svg" style={{width: '150px', height: '150px'}} />
      </div>
      <div className="absolute top-0 start-0 h-full opacity-20 pointer-events-none select-none flex flex-col justify-between items-start">
        <img src={firstSvg} alt="first-svg" style={{width: '50px', height: '50px'}} />
        <img src={secondSvg} alt="second-svg" style={{width: '80px', height: '80px', marginBottom: "150px "}} />
      </div>
      {/* النص الترحيبي */}
      <div className="z-10 text-center mt-8">
        <h2 className="text-lg md:text-xl lg:text-2xl 2xl:text-3xl font-bold mb-2 flex items-center justify-center gap-2">
          <span>{title}</span>
          <span className="text-yellow-400 text-2xl">{icon || "👋"}</span>
        </h2>
        <p className="text-xs lg:text-sm font-medium text-white/90 max-w-xs mx-auto">
          {description}
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