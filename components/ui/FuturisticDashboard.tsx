import React, { useState, useEffect , useCallback } from 'react';

interface DashboardMetric {
  id: string;
  title: string;
  value: string | number;
  change: number;
  icon: string;
  color: 'blue' | 'purple' | 'pink' | 'green';
}

interface DashboardChart {
  id: string;
  title: string;
  data: number[];
  labels: string[];
  type: 'line' | 'bar' | 'area';
  color: 'blue' | 'purple' | 'pink' | 'green';
}

interface FuturisticDashboardProps {
  title: string;
  description: string;
  metrics: DashboardMetric[];
  charts: DashboardChart[];
  className?: string;
}

const FuturisticDashboard: React.FC<FuturisticDashboardProps> = ({
  title,
  description,
  metrics,
  charts,
  className = ''
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const colorClasses = {
    blue: {
      bg: 'bg-gradient-to-r from-neon-blue to-blue-600',
      text: 'text-neon-blue',
      border: 'border-neon-blue',
      glow: 'shadow-neon-blue'
    },
    purple: {
      bg: 'bg-gradient-to-r from-neon-purple to-purple-600',
      text: 'text-neon-purple',
      border: 'border-neon-purple',
      glow: 'shadow-neon-purple'
    },
    pink: {
      bg: 'bg-gradient-to-r from-neon-pink to-pink-600',
      text: 'text-neon-pink',
      border: 'border-neon-pink',
      glow: 'shadow-neon-pink'
    },
    green: {
      bg: 'bg-gradient-to-r from-neon-green to-green-600',
      text: 'text-neon-green',
      border: 'border-neon-green',
      glow: 'shadow-neon-green'
    }
  };

  const renderChart = (chart: DashboardChart) => {
    const maxValue = Math.max(...chart.data);
    const colorClass = colorClasses[chart.color];

    return (
      <div key={chart.id} className="glass-dark border border-neon-blue/20 rounded-xl p-6 hover border-neon-blue/40 transition-all duration-300">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-white font-semibold>{chart.title}</h3>
          <div className={`w-3 h-3 rounded-full ${colorClass.bg}`}></div>
        </div>
        
        <div className="relative h-32">
          {chart.type === 'line' && (
            <svg className="w-full h-full viewBox= 0 0 100 40">
              <defs>
                <linearGradient id={`gradient-${chart.id}`} x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor={chart.color === 'blue' ? '#00d4ff' : chart.color === 'purple' ? '#8b5cf6' : chart.color === 'pink' ? '#ec4899' : '#10b981'} stopOpacity="0.8> </stop offset="0%" stopColor={chart.color === 'blue' ? '#00d4ff' : chart.color === 'purple' ? '#8b5cf6' : chart.color === 'pink' ? '#ec4899' : '#10b981'} stopOpacity="0.8"><stop offset="100%" stopColor={chart.color === 'blue' ? '#00d4ff' : chart.color === 'purple' ? '#8b5cf6' : chart.color === 'pink' ? '#ec4899' : '#10b981'} stopOpacity="0.1> </stop offset="100%" stopColor={chart.color === 'blue' ? '#00d4ff' : chart.color === 'purple' ? '#8b5cf6' : chart.color === 'pink' ? '#ec4899' : '#10b981'} stopOpacity="0.1"></linearGradient>
              </defs>
              <path
                d={chart.data.map((value, index) => {
                  const x = (index / (chart.data.length - 1)) * 100;
                  const y = 40 - (value / maxValue) * 40;
                  return `${index === 0 ? 'M' : 'L'} ${x} ${y}`;
                }).join(' ')}
                stroke={chart.color === 'blue' ? '#00d4ff' : chart.color === 'purple' ? '#8b5cf6' : chart.color === 'pink' ? '#ec4899' : '#10b981'}
                strokeWidth="2"
                fill="none"
                className=animate-pulse />
              <path
                d={`M 0 40 ${chart.data.map((value, index) => {
                  const x = (index / (chart.data.length - 1)) * 100;
                  const y = 40 - (value / maxValue) * 40;
                  return `L ${x} ${y}`;
                }).join(' ')} L 100 40 Z`}
                fill={`url(#gradient-${chart.id})`}
              />
            </svg>
          )}
          
          {chart.type === 'bar' && ("
            <div className=""flex items-end justify-between h-full space-x-1">
              {chart.data.map((value, index) => (
                <div key={index} className="flex-1 flex flex-col items-center>
                  <div
                    className={`w-full rounded-t transition-all duration-1000 ease-out ${
                      colorClass.bg
                    }`}
                    style={{
                      height: `${(value / maxValue) * 100}%`,
                      animationDelay: `${index * 100}ms`
                    }}
                  ></div>
                  <span className="text-xs text-gray-400 mt-1>{chart.labels[index]}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className={`min-h-screen cyber-bg ${className}`}>
      {/* Background Effects */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-cyber-dark via-cyber-darker to-cyber-dark-blue opacity-90></div>
        <div className="absolute inset-0 bg-holographic bg-[length 400%_400%] animate-holographic-shift opacity-10></div>
      </div>

      <div className="relative z-10 container-responsive py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-responsive-4xl lg text-responsive-5xl font-bold text-white mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple>
              {title}
            </span>
          </h1>
          <p className="text-responsive-lg text-gray-400 max-w-3xl mx-auto>
            {description}
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md grid-cols-2 lg grid-cols-4 gap-6 mb-12">
          {metrics.map((metric, index) => {
            const colorClass = colorClasses[metric.color];
            return (
              <div
                key={metric.id}
                className={`glass-dark border border-neon-blue/20 rounded-xl p-6 hover:border-neon-blue/40 transition-all duration-500 transform hover:scale-105 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center justify-between mb-4>
                  <div className={`w-12 h-12 rounded-lg ${colorClass.bg} flex items-center justify-center text-2xl text-white`}>
                    {metric.icon}
                  </div>
                  <div className={`text-sm font-semibold ${
                    metric.change >= 0 ? 'text-neon-green' : 'text-red-400'
                  }`}>
                    {metric.change >= 0 ? '+' : ''},
    {metric.change}%
                  </div>
                </div>
                
                <div>
                  <h3 className="text-gray-400 text-sm font-medium mb-1>{metric.title}</h3>
                  <p className="text-white text-2xl font-bold>{metric.value}</p>
                </div>

                {/* Animated Border */}
                <div className={`absolute inset-0 rounded-xl border-2 border-transparent hover:${colorClass.border} transition-all duration-300`}></div>
              </div>
            );
          })}
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg grid-cols-2 gap-6>
          {charts.map((chart, index) => (
            <div
              key={chart.id}
              className={`${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              } transition-all duration-500`}
              style={{ animationDelay: `${(index + metrics.length) * 100}ms` }}
            >
              {renderChart(chart)}
            </div>
          ))}
        </div>

        {/* Floating Elements */}
        <div className="fixed top-20 right-20 w-32 h-32 bg-neon-blue/10 rounded-full blur-3xl animate-pulse></div>
        <div className=fixed bottom-20 left-20 w-48 h-48 bg-neon-purple/10 rounded-full blur-3xl animate-pulse style={{ animationDelay: '1s' }}></div>
        <div className=""fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-neon-pink/5 rounded-full blur-3xl animate-pulse style={{ animationDelay: '2s' }}></div>
      </div>
    </div>
  );
};

export default FuturisticDashboard;