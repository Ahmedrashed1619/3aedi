import { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const CalendarCard = () => {

  const months = [
    'يناير', 'فبراير', 'مارس', 'إبريل', 'مايو', 'يونيو',
    'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'
  ];

  const daysOfWeek = ['الأحد', 'الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'];

  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(17);

  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();

  const getDaysInMonth = (year: number, month: number): number => new Date(year, month + 1, 0).getDate();
  const daysInMonth = getDaysInMonth(currentYear, currentMonth);

  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentYear, currentMonth - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentYear, currentMonth + 1, 1));
  };

  const handleDateClick = (day: number): void => {
    setSelectedDate(day);
  };

  const createDaysArray = () => {
    const days = [];
    
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(null);
    }
    
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(i);
    }
    
    return days;
  };

  const daysArray = createDaysArray();

  return (
    <div className="bg-white rounded-3xl p-5 shadow-md font-sans h-full" dir="rtl">
      <div className="flex justify-between items-center mb-4">
        <button 
          onClick={handlePrevMonth} 
          className="p-3 rounded-full bg-gray-100 hover:bg-indigo-500 hover:text-white transition-all duration-300"
        >
          <FaChevronRight />
        </button>
        
        <h2 className="text-lg font-bold text-center">
          {months[currentMonth]} {currentYear}
        </h2>
        
        <button 
          onClick={handleNextMonth} 
          className="p-3 rounded-full bg-gray-100 hover:bg-indigo-500 hover:text-white transition-all duration-300"
        >
          <FaChevronLeft />
        </button>
      </div>
      
      <div className="grid grid-cols-7 gap-1 my-2">
        {daysOfWeek.map((day, index) => (
          <div key={index} className="text-center text-xs py-1 font-medium text-gray-400">
            {day}
          </div>
        ))}
      </div>
      
      <div className="grid grid-cols-7 gap-1">
        {daysArray.map((day, index) => (
          <div 
            key={index} 
            className={`
              text-center p-2 text-base font-medium rounded-full
              ${day === null ? 'invisible' : 'cursor-pointer'}
              ${day === selectedDate ? 'bg-blue-600 text-white' : 'hover:bg-gray-100'}
            `}
            onClick={() => day !== null && handleDateClick(day)}
          >
            {day}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarCard;