import React from 'react';
import StatCard from './stat-card/StatCard';

// Mini SVG Bar Chart for Sales
const MiniBarChart = () => (
  <svg width="32" height="20" viewBox="0 0 32 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="8" width="4" height="10" rx="2" fill="#A5B4FC" />
    <rect x="10" y="4" width="4" height="14" rx="2" fill="#6366F1" />
    <rect x="18" y="2" width="4" height="16" rx="2" fill="#4338CA" />
    <rect x="26" y="0" width="4" height="18" rx="2" fill="#312E81" />
  </svg>
);

// Mini SVG Line Chart for Profit/Loss
const MiniLineChart = () => (
  <svg width="32" height="20" viewBox="0 0 32 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <polyline points="0,18 8,10 16,14 24,4 32,8" fill="none" stroke="#22C55E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="24" cy="4" r="2" fill="#22C55E" />
  </svg>
);

const SummarySection: React.FC = () => (
  <section className="mb-6">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <StatCard
        title="(ROAS) عائد الإنفاق الإعلاني"
        value="350"
        icon={
          <img
            src={'../../assets/Chart2.svg'}
            alt="stat-icon"
            className="w-10 h-10 md:w-12 md:h-12 lg:w-15 lg:h-15"
          />
        }
      />
      <StatCard
        title="المبيعات"
        value="350"
        icon={
          <img
            src={'../../assets/Frame.svg'}
            alt="stat-icon"
            className="w-10 h-10 md:w-12 md:h-12 lg:w-15 lg:h-15"
          />
        }
      />
      <StatCard
        title="الطلبات"
        value="321"
        icon={
          <img
            src={'../../assets/Group 41.svg'}
            alt="stat-icon"
            className="w-10 h-10 md:w-12 md:h-12 lg:w-15 lg:h-15"
          />
        }
      />
      <StatCard
        title="الأرباح / الخسائر"
        value="350.40"
        icon={
          <img
            src={'../../assets/Icon2.svg'}
            alt="bar-chart"
            className="w-10 h-10 md:w-12 md:h-12 lg:w-15 lg:h-15"
          />
        }
        specialCard={true}
      />
    </div>
  </section>
);

export default SummarySection; 