import React from 'react';
import './Header.scss';

interface HeaderProps {
  collapsed: boolean;
}

const Header: React.FC<HeaderProps> = ({ collapsed }) => {
  return (
    <header
      className={`navbar bg-white flex items-center px-6 justify-start py-5 fixed top-0 left-0 right-[12px] ${collapsed? "collapsed" : "not-collapsed"}`}
    >
      <div className="flex items-center space-x-2 md:space-x-3 rtl:space-x-reverse w-full">
        
        <div className="flex items-center">
          <div className="flex items-center border border-gray-200 rounded-full pr-2 md:pr-3 lg:pr-4 pl-1 md:pl-2 lg:pl-3 bg-white shadow-sm min-w-[120px] md:min-w-[150px] lg:min-w-[200px]">
            <svg className="w-4 h-4 md:w-5 md:h-5 text-blue-500 mr-1 md:mr-2 lg:mr-3 rtl:mr-0 rtl:ml-1 md:rtl:ml-2 lg:rtl:ml-3" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" /></svg>
            <div className="flex flex-col items-center justify-center flex-1">
              <span className="text-xs md:text-sm lg:text-base font-bold text-gray-800">أسماء محمد</span>
              <span className="text-[10px] md:text-xs lg:text-sm text-gray-400 mt-0.5 md:mt-1">694196497</span>
            </div>
          </div>
          <div className="-ml-4 md:-ml-6 lg:-ml-8 rtl:-mr-2 md:rtl:-mr-3 lg:rtl:-mr-4 rtl:-ml-0 w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-blue-600 rounded-full flex items-center justify-center shadow-lg border-2 md:border-2 border-white">
            <svg width="20" height="20" className="md:w-6 md:h-6 lg:w-8 lg:h-8" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="24" cy="24" r="20" stroke="white" strokeWidth="4" />
              <path d="M34 24c0-5.523-4.477-10-10-10s-10 4.477-10 10" stroke="white" strokeWidth="4" strokeLinecap="round" />
              <path d="M24 34c5.523 0 10-4.477 10-10" stroke="white" strokeWidth="4" strokeLinecap="round" />
            </svg>
          </div>
        </div>
   
        <div className="flex items-center">
          <div className="relative w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-gray-100 rounded-full flex items-center justify-center shadow-sm">
            <svg className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] md:text-xs lg:text-sm font-bold rounded-full w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 flex items-center justify-center border-2 md:border-2 border-white">4</span>
          </div>
        </div>

      </div>
    </header>
  );
};

export default Header;
