import React from 'react';

interface Stat {
  label: string;
  value: string | number;
  change?: string;
  changeType?: 'positive' | 'negative';
}

interface InteractiveStatsProps {
  stats: Stat[];
  className?: string;
}

const InteractiveStats: React.FC<InteractiveStatsProps> = ({ stats, className = '' }) => {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ${className}`}>
      {stats.map((stat, index) => (
        <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">{stat.label}</p>
              <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
            </div>
            {stat.change && (
              <div className={`text-sm font-medium ${
                stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
              }`}>
                {stat.change}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default InteractiveStats;
