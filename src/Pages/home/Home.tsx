import React, { useState } from 'react';
import { FaGoogle, FaFacebook, FaTiktok, FaSnapchatGhost, FaTwitter, FaMoneyBillWave, FaBoxOpen, FaReceipt } from 'react-icons/fa';
import SummarySection from '../../components/SummarySection';
import CalendarCard from '../../components/calender-card/CalendarCard';
import WeeklyChart from '../../components/weekly-chart/WeeklyChart';
import MarketingSpendList from '../../components/marketing-spend/MarketingSpendList';
import ResultCard from '../../components/result-card/ResultCard';
import DoughnutChartCard from '../../components/doughnut-chart/DoughnutChartCard';
import WarningCard from '../../components/warning-card/WarningCard';
import DailySummary from '../../components/daily-summary/DailySummary';

const marketingItems = [
  { id: 1, platform: 'جوجل', amount: 154.5, date: '2024 سبتمبر 22', icon: '/Group 249.svg' },
  { id: 2, platform: 'ميتا', amount: 154.5, date: '2024 سبتمبر 22', icon: '/logos_meta.svg' },
  { id: 3, platform: 'تيك توك', amount: 154.5, date: '2024 سبتمبر 22', icon: '/Vector.svg' },
  { id: 4, platform: 'سناب شات', amount: 154.5, date: '2024 سبتمبر 22', icon: '/mingcute_snapchat-line.svg' },
  { id: 5, platform: '(X) تويتر', amount: 154.5, date: '2024 سبتمبر 22', icon: '/prime_twitter.svg' },
];

const costItems = [
  { id: 1, platform: 'التكاليف اليومية', amount: 154.50, icon: '/material-symbols_money-bag-outline-rounded.svg', date: '2024 سبتمبر 22' },
  { id: 2, platform: 'تكلفة المنتجات', amount: 154.50, icon: '/icon-park-outline_ad-product.svg', date: '2024 سبتمبر 22' },
  { id: 3, platform: 'قيمة الضريبة', amount: 154.50, icon: '/hugeicons_taxes.svg', date: '2024 سبتمبر 22' },
];

const handleButtonClick = () => {
  console.log('Button clicked!');
};

const handleToggleComments = () => {
  console.log('تبديل عرض التعليقات');
};

const Home = () => {
  return (
    <div className="space-y-6">
      <WarningCard onButtonClick={handleButtonClick} />
      <DailySummary
        onToggleComments={handleToggleComments}
      />
      <SummarySection />
      <div className="grid grid-cols-1 md:grid-cols-7 lg:grid-cols-5 xl:grid-cols-3 gap-6">
        <div className="md:col-span-3 lg:col-span-2 xl:col-span-1">
          <CalendarCard />
        </div>
        <div className="md:col-span-4 lg:col-span-3 xl:col-span-2">
          <WeeklyChart />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6" dir='rtl'>
        <ResultCard
          title="نتيجة الربح"
          percentage={3.46}
          isProfit={true}
          days={14}
          total={4154.5}
        />
        <ResultCard
          title="نتيجة الخسارة"
          percentage={-3.46}
          isProfit={false}
          days={16}
          total={4154.5}
        />
        <MarketingSpendList items={marketingItems} total={682} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6" dir='rtl'>
        <DoughnutChartCard
          title="نسبة ربح / خسارة"
          data={[61, 27]}
          labels={["إجمالي المبيعات", "الصافي"]}
          colors={["#4857FC", "#6AD2FF"]}
          centerLabel="%2.45"
          percentage="%2.45"
          percentageColor="#22c55e"
          arrowDirection="up"
          legends={[
            { label: "إجمالي المبيعات", value: "﷼1062.69", color: "#4857FC" },
            { label: "الصافي", value: "﷼274.41", color: "#6AD2FF" },
          ]}
          date="22 سبتمبر 2024"
        />
        <DoughnutChartCard
          title="نقطة تعادل العائد الإعلاني"
          data={[60, 40]}
          labels={["المصروفات", "التسويق"]}
          colors={["#FFCD29", "#F97316"]}
          centerLabel="4.9"
          percentage="%2.45+"
          percentageColor="#22c55e"
          arrowDirection="up"
          legends={[
            { label: "المصروفات", value: "﷼1062.69", color: "#FFCD29" },
            { label: "التسويق", value: "﷼1062.69", color: "#F97316" },
          ]}
          date="22 سبتمبر 2024"
          isCurency={true}
        />
        <MarketingSpendList items={costItems} total={682} title='إجمالي المصاريف' />
      </div>
    </div>
  );
};

export default Home; 