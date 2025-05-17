import React from 'react';
import './MarketingSpendList.scss';
import { TiArrowSortedDown } from 'react-icons/ti';

interface SpendItem {
  id: number;
  platform: string;
  amount: number;
  date: string;
  icon?: React.ReactNode;
}

interface MarketingSpendListProps {
  items: SpendItem[];
  total: number;
  title?: string;
}

const MarketingSpendList: React.FC<MarketingSpendListProps> = ({ items, total, title = 'إجمالي التسويق' }) => (
  <div className='marketing-spend-card'>
    <div className='flex justify-between items-start gap-x-2 mb-4'>
      <div className='flex flex-col gap-2'>
        <span className='text-[#6B7280] text-base md:text-lg lg:text-xl font-bold'>
          {title}
        </span>
        <div className="flex items-center gap-x-1">
          <span className={`font-bold text-xl`}>{total}</span>
          <img src="/Riyal.svg" alt="riyal" className='w-8 h-8 riyal-img' loading='lazy' />
        </div>
      </div>
      <div className="flex items-center gap-x-1 text-red-500 font-semibold">
        % 2.45-
        <TiArrowSortedDown />
      </div>
    </div>
    <ul className='marketing-spend-card__list'>
      {items.map((item) => (
        <li key={item.id} className='marketing-spend-card__item'>
          <div className="card-platform flex justify-between items-center gap-x-2 w-full">
            <div className="flex justify-start items-center gap-x-3">
              <div className='w-10 h-10 rounded-full bg-gray-100 flex justify-center items-center'>
                {typeof item.icon === 'string' ? <img src={item.icon} alt="platform" className='w-6 h-6' loading='lazy' /> : item.icon}
              </div>
              <div className="flex flex-col gap-y-1">
                <span className='text-[#1B2559] text-lg font-bold text-center'>{item.platform}</span>
                <span className='text-[#6B7280] font-bold text-sm'>{item.date}</span>
              </div>
            </div>
            <div className="flex items-center gap-x-2">
              <span className='text-red-500 text-lg font-bold text-center'>{item.amount}</span>
              <img src="/Riyal.svg" alt="riyal" className='w-6 h-6 riyal-img' loading='lazy' />
            </div>
          </div>
        </li>
      ))}
    </ul>
  </div>
);

export default MarketingSpendList; 