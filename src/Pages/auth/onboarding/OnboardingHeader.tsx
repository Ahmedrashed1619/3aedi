import { Link } from 'react-router-dom';

function OnboardingHeader() {
  return (
    <header className="hidden sm:flex justify-between items-center w-full py-5 bg-white px-8">
      {/* Logo */}
      <div className="logo">
        <Link to="/">
          <img src="/logo.png" alt="3aedi-logo" className="h-12 w-40" />
        </Link>
      </div>

      {/* User profile and notifications */}
      {/* <div className="flex items-center gap-4">
        <div className="relative w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center border">
            <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center border-2 border-white">4</span>
        </div>
      </div> */}
    </header>
  );
}

export { OnboardingHeader };
export default OnboardingHeader; 