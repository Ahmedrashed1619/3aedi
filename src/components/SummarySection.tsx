import React from 'react';
import StatCard from './stat-card/StatCard';

const SummarySection: React.FC = () => (
  <section className="mb-6">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <StatCard
        title="(ROAS) عائد الإنفاق الإعلاني"
        value="350"
        icon={
          <img
            src={'/Chart2.svg'}
            alt="stat-icon"
            className="w-10 h-10 md:w-12 md:h-12 lg:w-15 lg:h-15"
            loading='lazy'
          />
        }
      />
      <StatCard
        title="المبيعات"
        value="350"
        icon={
          <img
            src={'/Frame.svg'}
            alt="stat-icon"
            className="w-10 h-10 md:w-12 md:h-12 lg:w-15 lg:h-15"
            loading='lazy'
          />
        }
      />
      <StatCard
        title="الطلبات"
        value="321"
        icon={
          <img
            src={'/Group 41.svg'}
            alt="stat-icon"
            className="w-10 h-10 md:w-12 md:h-12 lg:w-15 lg:h-15"
            loading='lazy'
          />
        }
      />
      <StatCard
        title="الأرباح / الخسائر"
        value="350.40"
        icon={
          <img
            src={'/Icon2.svg'}
            alt="bar-chart"
            className="w-10 h-10 md:w-12 md:h-12 lg:w-15 lg:h-15"
            loading='lazy'
          />
        }
        specialCard={true}
      />
    </div>
  </section>
);

export default SummarySection; 