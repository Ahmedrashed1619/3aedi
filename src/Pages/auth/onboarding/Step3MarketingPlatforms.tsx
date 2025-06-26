import { Button, Switch } from 'antd';
import { useState } from 'react';

const mockPlatforms = [
  {
    key: 'tiktok',
    name: 'تيك توك',
    icon: '/public/prime_twitter.svg', // Replace with actual TikTok icon path
    status: 'إبدأ في الإعداد',
    color: '#000',
    active: true,
  },
  {
    key: 'snapchat',
    name: 'سناب شات',
    icon: '/public/mingcute_snapchat-line.svg',
    status: '',
    color: '#FFFC00',
    active: false,
  },
  {
    key: 'meta',
    name: 'ميتا',
    icon: '/public/Chart2.svg', // Replace with actual Meta icon path
    status: '',
    color: '#1877F2',
    active: false,
  },
  {
    key: 'twitter',
    name: 'تويتر (X)',
    icon: '/public/prime_twitter.svg',
    status: '',
    color: '#1DA1F2',
    active: false,
  },
  {
    key: 'google',
    name: 'جوجل',
    icon: '/public/google.svg',
    status: '',
    color: '#34A853',
    active: false,
  },
];

const Step3MarketingPlatforms = ({ onBack, onNext, isLoading }: { onBack: () => void, onNext: () => void, isLoading?: boolean }) => {
  const [platforms, setPlatforms] = useState(mockPlatforms);

  const handleSwitch = (key: string) => {
    setPlatforms(prev => prev.map(p => p.key === key ? { ...p, active: !p.active } : p));
  };

  return (
    <div className="w-full max-w-md bg-white rounded-3xl shadow-lg py-4 px-6 sm:py-5 sm:px-8 md:py-6 md:px-10 lg:py-8 lg:px-12 mx-auto flex flex-col items-center">
      <h2 className="text-xl md:text-2xl font-extrabold text-center mb-6 text-text-primary leading-tight">اختر المنصات التي تدير حملاتك الإعلانية</h2>
      <div className="w-full mb-4">
        <div className="flex items-center justify-between bg-gray-50 rounded-lg px-3 py-2 mb-4 border border-gray-200">
          <span className="text-xs lg:text-sm font-bold text-black">اختر المنصات</span>
          <span className="text-xs lg:text-sm text-gray-400">إبدأ في الإعداد</span>
        </div>
        <div className="flex flex-col gap-3">
          {platforms.map((platform) => (
            <div key={platform.key} className="flex items-center justify-between bg-white rounded-lg px-3 py-2 border border-gray-100 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#F6F8FD] rounded-full p-1">
                    <img src={platform.icon} alt={platform.name} className="w-full h-full object-fill rounded-full" style={{ background: platform.color + '10' }} />
                </div>
                <span className="font-extrabold text-xs md:text-sm lg:text-base text-black">{platform.name}</span>
              </div>
              <div className="flex items-center gap-2">
                {/* {platform.status && (
                  <span className="text-xs font-semibold text-primary-light bg-white px-2">{platform.status}</span>
                )} */}
                <Switch checked={platform.active} onChange={() => handleSwitch(platform.key)} />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex gap-4 mt-4 w-full">
        <Button type="primary" onClick={onNext} className="w-[60%] font-medium py-5" loading={isLoading}>
          التالي
        </Button>
        <Button type="default" onClick={onBack} className="w-[40%] font-medium py-5" disabled={isLoading}>
          العودة
        </Button>
      </div>
    </div>
  );
};

export default Step3MarketingPlatforms; 