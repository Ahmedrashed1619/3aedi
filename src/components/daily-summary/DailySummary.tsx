import React, { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { FiPlus } from 'react-icons/fi';

interface DailySummaryProps {
  onToggleComments?: () => void;
}

const DailySummary: React.FC<DailySummaryProps> = ({
  onToggleComments,
}) => {

  const [showComments, setShowComments] = useState(false);

  const handleToggleComments = () => {
    setShowComments(!showComments);
    if (onToggleComments) onToggleComments();
  };

  return (
    <>
      <div className="!my-6 md:!my-8 lg:!my-10 xl:!my-12 w-full flex flex-col-reverse gap-y-3 sm:flex-row sm:gap-y-0 justify-between items-end sm:items-center">
        <button 
          className="flex items-center justify-between gap-2 px-3 py-1 border rounded-xl w-[180px] text-lg font-bold border-gray-500 hover:border-transparent text-gray-500 hover:text-white hover:bg-[#4857FC] transition-all duration-300"
          onClick={handleToggleComments}
          dir='rtl'
        >
          <div className="cursor-pointer p-1 flex items-center gap-2">
            <FiPlus size={20} />
            <span>تعليقات</span>
          </div>
          <div className="flex items-center gap-2">
            <IoIosArrowDown
              className={`transition-transform duration-300 ${showComments ? 'rotate-180' : ''}`} 
            />
          </div>
        </button>
        <div>
          <h6 className='mb-4 text-[#6B7280] text-lg font-bold text-end'>الملخص اليومي</h6>
          <span className="text-lg lg:text-xl xl:text-2xl 2xl:text-[1.75rem] font-bold text-black">
          ! <span className='text-green-600'>مبروك ! 🎉</span>
            <span> أرباحك تكبر ونجاحك يستمر</span>
            <span className='inline-block w-3 h-3 rounded-full bg-green-500 align-middle ml-1'></span>
          </span>
        </div>
      </div>
      {showComments && (
        <div className="comments-section bg-white rounded-lg p-4 mt-4 border border-gray-200 shadow-sm">
          <p className="text-gray-500">منطقة التعليقات (يمكن إضافة المحتوى هنا)</p>
        </div>
      )}
    </>
  );
};

export default DailySummary;