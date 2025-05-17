import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import './DoughnutChartCard.scss';

interface LegendItem {
  label: string;
  value: string;
  color: string;
}

interface DoughnutChartCardProps {
  title: string;
  data: number[];
  labels: string[];
  colors: string[];
  centerLabel: string;
  percentage?: string;
  percentageColor?: string;
  arrowDirection?: 'up' | 'down';
  legends?: LegendItem[];
  subLabel?: string;
  date?: string;
}

const DoughnutChartCard: React.FC<DoughnutChartCardProps> = ({
  title,
  data,
  labels,
  colors,
  centerLabel,
  percentage,
  percentageColor = '#22c55e',
  arrowDirection = 'up',
  subLabel,
  date,
}) => {

  const chartData = {
    labels,
    datasets: [
      {
        data,
        backgroundColor: colors,
        borderWidth: 0,
      },
    ],
  };

  const options = {
    cutout: '70%',
    plugins: {
      legend: { display: false },
      tooltip: { enabled: true },
    },
    maintainAspectRatio: false,
  };

  return (
    <div className="grid grid-rows-3 gap-1 shadow-md rounded-3xl" dir='rtl'>
      <div className="row-span-2">
        <div className="bg-white rounded-t-3xl p-5 h-full relative">
          <div className="flex flex-col gap-y-2 mb-3">
            <span className='text-[#1B2559] font-semibold text-base lg:text-lg xl:text-xl'>
              {title}
            </span>
            <span className='text-[#6B7280] font-bold text-sm'>
              {date}
            </span>
          </div>
          <div className={'doughnut-card__chart-container'}>
            <Doughnut data={chartData} options={options} />
            <div className={'doughnut-card__center-label'}>
              <span className={'doughnut-card__center-value'}>{centerLabel}</span>
              {percentage && (
                <span
                  className={'doughnut-card__percentage'}
                  style={{ color: percentageColor }}
                >
                  {arrowDirection === 'up' ? '▲' : '▼'} {percentage}
                </span>
              )}
              {subLabel && <span className={'doughnut-card__sub-label'}>{subLabel}</span>}
            </div>
          </div>
        </div>
      </div>
      <div className="row-span-1">
        <div className="bg-white rounded-b-3xl px-5 py-6 h-full">
          {labels.length > 0 && labels.map((label, idx) => (
            <span className="text-[#6B7280] text-sm md:text-base lg:text-lg font-bold flex items-center gap-2 mb-2">
              <span className="inline-block w-[12px] h-[12px] rounded-[4px]" style={{backgroundColor: colors[idx]}}></span>
              {label}: <span className='text-black'>1062.69</span> <img src="/Riyal.svg" alt="riyal" className='w-4 h-4 riyal-img' loading='lazy' />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DoughnutChartCard; 