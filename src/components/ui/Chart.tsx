import React from 'react';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';

export interface ChartDataPoint {
  label: string;
  value: number;
  color?: string;
  metadata?: Record<string, any>;
}

export interface ChartProps {
  data: ChartDataPoint[];
  type: 'bar' | 'line' | 'pie' | 'area';
  title?: string;
  subtitle?: string;
  height?: number;
  showLegend?: boolean;
  showGrid?: boolean;
  animate?: boolean;
  className?: string;
}

export const Chart: React.FC<ChartProps> = ({
  data,
  type,
  title,
  subtitle,
  height = 300,
  showLegend = true,
  showGrid = true,
  animate = true,
  className = ''
}) => {
  const maxValue = Math.max(...data.map(d => d.value));
  const minValue = Math.min(...data.map(d => d.value));
  const range = maxValue - minValue;

  const defaultColors = [
    '#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6',
    '#06B6D4', '#84CC16', '#F97316', '#EC4899', '#6366F1'
  ];

  const getColor = (index: number, customColor?: string) => {
    return customColor || defaultColors[index % defaultColors.length];
  };

  const renderBarChart = () => (
    <div className="flex items-end justify-between h-full space-x-1">
      {data.map((point, index) => {
        const heightPercentage = range > 0 ? ((point.value - minValue) / range) * 100 : 50;
        return (
          <div key={point.label} className="flex flex-col items-center space-y-2">
            <div
              className="w-8 rounded-t transition-all duration-500 ease-out hover:opacity-80"
              style={{
                height: `${heightPercentage}%`,
                backgroundColor: getColor(index, point.color),
                minHeight: '20px'
              }}
            />
            <span className="text-xs text-gray-600 text-center max-w-16 truncate">
              {point.label}
            </span>
          </div>
        );
      })}
    </div>
  );

  const renderLineChart = () => (
    <svg className="w-full h-full" viewBox={`0 0 100 100`}>
      {showGrid && (
        <g className="text-gray-200">
          {[0, 25, 50, 75, 100].map(y => (
            <line key={y} x1="0" y1={y} x2="100" y2={y} stroke="currentColor" strokeWidth="0.5" />
          ))}
        </g>
      )}
      <polyline
        fill="none"
        stroke={getColor(0)}
        strokeWidth="2"
        points={data.map((point, index) => {
          const x = (index / (data.length - 1)) * 100;
          const y = range > 0 ? 100 - ((point.value - minValue) / range) * 100 : 50;
          return `${x},${y}`;
        }).join(' ')}
        className={animate ? 'animate-draw' : ''}
      />
    </svg>
  );

  const renderPieChart = () => {
    const total = data.reduce((sum, point) => sum + point.value, 0);
    let currentAngle = 0;

    return (
      <svg className="w-full h-full" viewBox="0 0 100 100">
        {data.map((point, index) => {
          const percentage = (point.value / total) * 100;
          const angle = (percentage / 100) * 360;
          const x1 = 50 + 40 * Math.cos((currentAngle * Math.PI) / 180);
          const y1 = 50 + 40 * Math.sin((currentAngle * Math.PI) / 180);
          const x2 = 50 + 40 * Math.cos(((currentAngle + angle) * Math.PI) / 180);
          const y2 = 50 + 40 * Math.sin(((currentAngle + angle) * Math.PI) / 180);
          
          const largeArcFlag = angle > 180 ? 1 : 0;
          
          const pathData = [
            `M 50 50`,
            `L ${x1} ${y1}`,
            `A 40 40 0 ${largeArcFlag} 1 ${x2} ${y2}`,
            'Z'
          ].join(' ');

          currentAngle += angle;

          return (
            <path
              key={point.label}
              d={pathData}
              fill={getColor(index, point.color)}
              className="transition-all duration-300 hover:opacity-80"
            />
          );
        })}
      </svg>
    );
  };

  const renderAreaChart = () => (
    <svg className="w-full h-full" viewBox={`0 0 100 100`}>
      {showGrid && (
        <g className="text-gray-200">
          {[0, 25, 50, 75, 100].map(y => (
            <line key={y} x1="0" y1={y} x2="100" y2={y} stroke="currentColor" strokeWidth="0.5" />
          ))}
        </g>
      )}
      <path
        fill={getColor(0, data[0]?.color)}
        fillOpacity="0.3"
        stroke={getColor(0, data[0]?.color)}
        strokeWidth="2"
        d={(() => {
          const points = data.map((point, index) => {
            const x = (index / (data.length - 1)) * 100;
            const y = range > 0 ? 100 - ((point.value - minValue) / range) * 100 : 50;
            return `${x},${y}`;
          });
          return `M ${points.join(' L ')} L ${points[points.length - 1].split(',')[0]},100 L 0,100 Z`;
        })()}
        className={animate ? 'animate-fade-in' : ''}
      />
    </svg>
  );

  const renderChart = () => {
    switch (type) {
      case 'bar':
        return renderBarChart();
      case 'line':
        return renderLineChart();
      case 'pie':
        return renderPieChart();
      case 'area':
        return renderAreaChart();
      default:
        return renderBarChart();
    }
  };

  const getTrendIcon = () => {
    if (data.length < 2) return <Minus className="w-4 h-4 text-gray-400" />;
    
    const firstValue = data[0]?.value || 0;
    const lastValue = data[data.length - 1]?.value || 0;
    
    if (lastValue > firstValue) {
      return <TrendingUp className="w-4 h-4 text-green-500" />;
    } else if (lastValue < firstValue) {
      return <TrendingDown className="w-4 h-4 text-red-500" />;
    } else {
      return <Minus className="w-4 h-4 text-gray-400" />;
    }
  };

  const getTrendText = () => {
    if (data.length < 2) return 'No trend data';
    
    const firstValue = data[0]?.value || 0;
    const lastValue = data[data.length - 1]?.value || 0;
    const change = lastValue - firstValue;
    const percentage = firstValue > 0 ? (change / firstValue) * 100 : 0;
    
    if (change > 0) {
      return `+${percentage.toFixed(1)}% from start`;
    } else if (change < 0) {
      return `${percentage.toFixed(1)}% from start`;
    } else {
      return 'No change from start';
    }
  };

  return (
    <div className={`bg-white rounded-lg shadow-sm border ${className}`}>
      {/* Header */}
      {(title || subtitle) && (
        <div className="px-6 py-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              {title && <h3 className="text-lg font-semibold text-gray-900">{title}</h3>}
              {subtitle && <p className="text-sm text-gray-600">{subtitle}</p>}
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              {getTrendIcon()}
              <span>{getTrendText()}</span>
            </div>
          </div>
        </div>
      )}

      {/* Chart */}
      <div className="p-6">
        <div style={{ height: `${height}px` }} className="relative">
          {renderChart()}
        </div>
      </div>

      {/* Legend */}
      {showLegend && (
        <div className="px-6 py-4 border-t border-gray-200">
          <div className="flex flex-wrap gap-4">
            {data.map((point, index) => (
              <div key={point.label} className="flex items-center space-x-2">
                <div
                  className="w-3 h-3 rounded"
                  style={{ backgroundColor: getColor(index, point.color) }}
                />
                <span className="text-sm text-gray-700">{point.label}</span>
                <span className="text-sm font-medium text-gray-900">{point.value}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};