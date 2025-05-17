import React from 'react';
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import './ResultCard.scss'


interface ResultCardProps {
  title: string;
  percentage: number;
  isProfit: boolean;
  days: number;
  total: number;
}

// const ZigzagArrow = ({ isProfit }: { isProfit: boolean }) => (
//   isProfit ? (
//     <svg width="80" height="56" viewBox="0 0 80 56" fill="none" xmlns="http://www.w3.org/2000/svg">
//       <path d="M4 52L28 28L44 44L68 20" stroke="#22c55e" strokeWidth="5" strokeLinejoin="round"/>
//       <path d="M68 20V36" stroke="#22c55e" strokeWidth="5" strokeLinecap="round"/>
//       <path d="M68 20H52" stroke="#22c55e" strokeWidth="5" strokeLinecap="round"/>
//     </svg>
//   ) : (
//     <svg width="80" height="56" viewBox="0 0 80 56" fill="none" xmlns="http://www.w3.org/2000/svg">
//       <path d="M4 12L28 36L44 20L68 44" stroke="#ef4444" strokeWidth="5" strokeLinejoin="round"/>
//       <path d="M68 44V28" stroke="#ef4444" strokeWidth="5" strokeLinecap="round"/>
//       <path d="M68 44H52" stroke="#ef4444" strokeWidth="5" strokeLinecap="round"/>
//     </svg>
//   )
// );

const ResultCard: React.FC<ResultCardProps> = ({
  title,
  percentage,
  isProfit,
  days,
  total,
}) => {
  const totalColor = isProfit ? 'text-green-500' : 'text-red-500';
  return (
    <div className="grid grid-rows-3 gap-1 shadow-md rounded-3xl" dir='rtl'>
      <div className="row-span-2">
        <div className="bg-white rounded-t-3xl p-5 h-full relative">
          <div className="flex justify-between items-start">
            <div className="flex flex-row sm:flex-col items-center sm:items-start gap-2">
              <img src={'/Icon3.svg'} alt="chart" loading='lazy' />
              <span className='text-[#1B2559] font-semibold text-base lg:text-lg xl:text-xl'>
                {title}
              </span>
            </div>
            <div className={`flex items-center gap-x-1 ${isProfit ? 'text-green-500' : 'text-red-500'}`}>
              % {percentage}
              {isProfit ? <TiArrowSortedUp /> : <TiArrowSortedDown />}
            </div>
          </div>
          <div className="flex justify-end">
            {isProfit ? 
              <img src="/Ictrendingup.svg" alt="Ictrendingup" className='block w-24 xl:w-28 2xl:w-32' loading='lazy' />
              :
              <img src="/Ictrendingdown.svg" alt="Ictrendingdown" className='block w-24 xl:w-28 2xl:w-32' loading='lazy' />
            }
          </div>
          <div className={`flex items-center font-bold gap-x-2 absolute bottom-4 right-4`}>
            <span className='text-[#2B3674] text-6xl lg:text-7xl 2xl:text-8xl'>{days}</span>
            <span className='text-[#6B7280] text-2xl lg:text-3xl 2xl:text-4xl'>يوم</span>
          </div>
        </div>
      </div>
      <div className="row-span-1">
        <div className="bg-white rounded-b-3xl px-5 py-8 h-full">
          <span className="text-[#6B7280] text-sm md:text-base lg:text-lg font-bold flex items-center gap-2">
            <span className="inline-block w-[12px] h-[12px] rounded-[4px] bg-indigo-500"></span>
            {isProfit ? 'إجمالي الأرباح' : 'إجمالي الخسائر'}
          </span>
          <div className="mt-3 flex justify-center items-center gap-x-1">
            <span className={`font-bold text-2xl ${totalColor}`}>{total.toFixed(2)}</span>
            <img src="/Riyal.svg" alt="riyal" className='w-8 h-8 riyal-img' loading='lazy' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultCard; 