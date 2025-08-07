import React from 'react';

interface Stat {
  value: number;
  label: string;
  icon: string;
  color: 'blue' | 'purple' | 'green' | 'pink';
  suffix?: string;
}

interface InteractiveStatsProps {
  stats: Stat[];
}

const InteractiveStats: React.FC<InteractiveStatsProps> = ({ stats }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300"
        >
          <div className="text-3xl mb-2">{stat.icon}</div>
          <div className="text-3xl font-bold text-white mb-1">
            {stat.value}{stat.suffix}
          </div>
          <div className="text-gray-300 text-sm">{stat.label}</div>
        </div>
      ))}
    </div>
  );
};

export default InteractiveStats;
