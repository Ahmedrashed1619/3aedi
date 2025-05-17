import React from 'react';
import './WarningCard.scss';

interface WarningCardProps {
  onButtonClick?: () => void;
}

const WarningCard: React.FC<WarningCardProps> = ({ onButtonClick }) => {
  return (
    <div className="warning-card__container w-full mx-auto">
      <div className="relative rounded-3xl border-2 border-[#CC990060] bg-amber-50 p-6 flex flex-col-reverse gap-y-6 md:gap-y-0 md:flex-row items-center justify-between">
        <div className={'alert-bar__button-container'}>
            <button
                className={'alert-bar__button'}
                onClick={onButtonClick}
            >
                اضغط هنا للإدخال!
            </button>
        </div>
        
        <div className="flex items-center justify-end flex-grow rtl-text">
          <div className="pr-2 text-right text-black">
            <p className="font-bold mb-2 text-sm sm:text-base md:text-lg lg:text-xl">! أرقامك بدونها ، مجرد تخمين</p>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg">
              يبدو أن هناك معلومات غير مكتملة و لا يمكنك معرفة بحثك الحقيقي دون إدخال التكاليف الشهرية المتغيرة
            </p>
          </div>
          <div className={'alert-bar__icon'}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 4L2 20h20L12 4z" stroke="#F6C700" strokeWidth="2" fill="#FFF8E1"/>
                <rect x="11" y="10" width="2" height="5" rx="1" fill="#F6C700"/>
                <rect x="11" y="17" width="2" height="2" rx="1" fill="#F6C700"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WarningCard;