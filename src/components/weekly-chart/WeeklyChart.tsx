import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { 
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import './WeeklyChart.scss';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface WeeklyChartProps {
  labels?: string[];
  profitData?: number[];
  orderData?: number[];
  profitColor?: string;
  orderColor?: string;
}

const WeeklyChart: React.FC<WeeklyChartProps> = ({
  labels = ['الثلاثاء', 'الإثنين', 'الأحد', 'السبت', 'الجمعة', 'الخميس', 'الأربعاء'],
  profitData = [900, 850, 900, 230, 800, 600, 850],
  orderData = [350, 200, 400, 380, 180, 850, 780],
  profitColor = '#2563eb',
  orderColor = '#cbd5e1'
}) => {
  const [activeTab, setActiveTab] = useState<string>('الأمس');
  
  const data = {
    labels,
    datasets: [
      {
        label: 'الأرباح',
        data: profitData,
        backgroundColor: profitColor,
        borderRadius: 4,
        barPercentage: 0.7,
      },
      {
        label: 'الطلبات',
        data: orderData,
        backgroundColor: orderColor,
        borderRadius: 4,
        barPercentage: 0.7,
      },
    ],
  };
  
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        rtl: true,
        textDirection: 'rtl'
      }
    },
    scales: {
      x: {
        grid: { display: false },
        stacked: false,
        ticks: {
          color: '#64748b',
          font: {
            size: 12
          }
        }
      },
      y: {
        grid: { color: '#f3f4f6' },
        beginAtZero: true,
        stacked: false,
        ticks: {
          color: '#64748b',
          font: {
            size: 12
          }
        }
      },
    },
  };

  return (
    <div className="bg-white rounded-3xl shadow-md p-6 rtl">
      <div className="weekly-chart-card">
        <div className="header-row">
          <div className="title text-right text-base lg:text-lg xl:text-xl 2xl:text-2xl">الرصيد الأسبوعي</div>
          <div className="tabs">
            <button 
              className={`tab ${activeTab === 'قبل يومين' ? 'active' : ''}`}
              onClick={() => setActiveTab('قبل يومين')}
            >
              قبل يومين
            </button>
            <button 
              className={`tab ${activeTab === 'الأمس' ? 'active' : ''}`}
              onClick={() => setActiveTab('الأمس')}
            >
              الأمس
            </button>
            <button 
              className={`tab ${activeTab === 'قبل يوم' ? 'active' : ''}`}
              onClick={() => setActiveTab('قبل يوم')}
            >
              قبل يوم
            </button>
          </div>
        </div>
        
        <div className="chart-area">
          <Bar data={data} options={options as any} />
        </div>
        
        <div className="legend">
          <div className="legend-item">
            <div className="dot profit"></div>
            <span>الأرباح</span>
          </div>
          <div className="legend-item">
            <div className="dot orders"></div>
            <span>الطلبات</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeeklyChart;