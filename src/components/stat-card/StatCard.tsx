import React from 'react';
import './StatCard.scss';

interface StatCardProps {
  title: string;
  value: string | number;
  icon?: React.ReactNode;
  specialCard?: boolean;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, icon, specialCard = false }) => {
  
  return (
    <div
      className={`stat-card flex items-center rounded-3xl p-6 gap-x-3 transition-all duration-500 bg-white hover:bg-indigo-500 group`}
      dir='rtl'
    >
      <div className="flex justify-center items-center">
        {icon}
      </div>
      <div className="flex flex-col gap-y-1 justify-start">
        <h6 className="title text-xs md:text-sm xl:text-base font-semibold text-[#64748b] group-hover:text-white transition-all duration-500">{title}</h6>
        <h6 className={`value text-[#1e293b] ${specialCard ? 'special-card !text-green-500' : ''} text-lg md:text-xl lg:text-2xl 2x:text-3xl font-bold group-hover:text-white transition-all duration-500`}>
          {value} {title !== 'الطلبات' && <img src={'/Riyal.svg'} alt="currency" className={'w-8 h-8 inline-block'} loading='lazy' />}
        </h6>
      </div>
    </div>
  );
};

export default StatCard;