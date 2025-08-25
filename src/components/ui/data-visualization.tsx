import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import { 
  Download,
  RefreshCw,
  Eye,
  EyeOff
} from 'lucide-react';
import { Button } from './button';
import { Select, SelectItem, SelectContent, SelectTrigger, SelectValue } from './select';

interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor?: string;
    borderColor?: string;
    borderWidth?: number;
  }[];
}

interface DataVisualizationProps {
  enabled?: boolean;
  data?: ChartData;
  chartType?: 'line' | 'bar' | 'pie' | 'area';
  height?: number;
  showControls?: boolean;
  onChartClick?: (data: { label: string; value: number; index: number }) => void;
  className?: string;
}

export function DataVisualization({
  enabled = true,
  data,
  chartType = 'line',
  height = 400,
  showControls = true,
  onChartClick,
  className = ''
}: DataVisualizationProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [currentChartType, setCurrentChartType] = useState(chartType);
  const [showLegend, setShowLegend] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);
  const [selectedDataPoint, setSelectedDataPoint] = useState<{ label: string; value: number; index: number } | null>(null);

  // Default data if none provided
  const defaultData: ChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Revenue',
        data: [12000, 13500, 14200, 15800, 17500, 19200],
        backgroundColor: 'rgba(59, 130, 246, 0.2)',
        borderColor: '#3b82f6',
        borderWidth: 2
      },
      {
        label: 'Users',
        data: [850, 920, 1010, 1120, 1280, 1420],
        backgroundColor: 'rgba(16, 185, 129, 0.2)',
        borderColor: '#10b981',
        borderWidth: 2
      }
    ]
  };

  const chartData = data || defaultData;

  // Chart rendering functions
  const renderLineChart = useCallback((ctx: CanvasRenderingContext2D, data: ChartData) => {
    const canvas = ctx.canvas;
    const width = canvas.width;
    const height = canvas.height;
    const padding = 40;

    // Clear canvas
    ctx.clearRect(0, 0, width, height);

    // Find data ranges
    const allData = data.datasets.flatMap(dataset => dataset.data);
    const minValue = Math.min(...allData);
    const maxValue = Math.max(...allData);
    const valueRange = maxValue - minValue;

    // Draw grid
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
    ctx.lineWidth = 1;
    
    // Vertical grid lines
    for (let i = 0; i <= data.labels.length; i++) {
      const x = padding + (i * (width - 2 * padding)) / data.labels.length;
      ctx.beginPath();
      ctx.moveTo(x, padding);
      ctx.lineTo(x, height - padding);
      ctx.stroke();
    }

    // Horizontal grid lines
    for (let i = 0; i <= 5; i++) {
      const y = padding + (i * (height - 2 * padding)) / 5;
      ctx.beginPath();
      ctx.moveTo(padding, y);
      ctx.lineTo(width - padding, y);
      ctx.stroke();
    }

    // Draw data lines
    data.datasets.forEach((dataset) => {
      ctx.strokeStyle = dataset.borderColor || '#3b82f6';
      ctx.lineWidth = dataset.borderWidth || 2;
      ctx.beginPath();

      dataset.data.forEach((value, index) => {
        const x = padding + (index * (width - 2 * padding)) / (data.labels.length - 1);
        const y = height - padding - ((value - minValue) / valueRange) * (height - 2 * padding);

        if (index === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      });

      ctx.stroke();
    });

    // Draw labels
    ctx.fillStyle = '#ffffff';
    ctx.font = '12px Inter';
    ctx.textAlign = 'center';
    
    data.labels.forEach((label, index) => {
      const x = padding + (index * (width - 2 * padding)) / (data.labels.length - 1);
      ctx.fillText(label, x, height - padding + 20);
    });
  }, []);

  const renderBarChart = useCallback((ctx: CanvasRenderingContext2D, data: ChartData) => {
    const canvas = ctx.canvas;
    const width = canvas.width;
    const height = canvas.height;
    const padding = 40;

    // Clear canvas
    ctx.clearRect(0, 0, width, height);

    // Find data ranges
    const allData = data.datasets.flatMap(dataset => dataset.data);
    const maxValue = Math.max(...allData);

    // Draw bars
    const barWidth = (width - 2 * padding) / (data.labels.length * data.datasets.length);
    
    data.datasets.forEach((dataset) => {
      dataset.data.forEach((value, index) => {
        const barHeight = ((value / maxValue) * (height - 2 * padding));
        const x = padding + (index * data.datasets.length + 0) * barWidth;
        const y = height - padding - barHeight;

        ctx.fillStyle = dataset.backgroundColor || 'rgba(59, 130, 246, 0.8)';
        ctx.fillRect(x, y, barWidth * 0.8, barHeight);
      });
    });

    // Draw labels
    ctx.fillStyle = '#ffffff';
    ctx.font = '12px Inter';
    ctx.textAlign = 'center';
    
    data.labels.forEach((label, index) => {
      const x = padding + (index * data.datasets.length + data.datasets.length / 2) * barWidth;
      ctx.fillText(label, x, height - padding + 20);
    });
  }, []);

  const renderPieChart = useCallback((ctx: CanvasRenderingContext2D, data: ChartData) => {
    const canvas = ctx.canvas;
    const width = canvas.width;
    const height = canvas.height;
    const centerX = width / 2;
    const centerY = height / 2;
    const radius = Math.min(width, height) / 3;

    // Clear canvas
    ctx.clearRect(0, 0, width, height);

    // Calculate total
    const total = data.datasets[0].data.reduce((sum, value) => sum + value, 0);

    // Draw pie slices
    let currentAngle = -Math.PI / 2;
    data.datasets[0].data.forEach((value, index) => {
      const sliceAngle = (value / total) * 2 * Math.PI;
      
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.arc(centerX, centerY, radius, currentAngle, currentAngle + sliceAngle);
      ctx.closePath();

      const colors = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6'];
      ctx.fillStyle = colors[index % colors.length];
      ctx.fill();

      currentAngle += sliceAngle;
    });
  }, []);

  const renderAreaChart = useCallback((ctx: CanvasRenderingContext2D, data: ChartData) => {
    const canvas = ctx.canvas;
    const width = canvas.width;
    const height = canvas.height;
    const padding = 40;

    // Clear canvas
    ctx.clearRect(0, 0, width, height);

    // Find data ranges
    const allData = data.datasets.flatMap(dataset => dataset.data);
    const minValue = Math.min(...allData);
    const maxValue = Math.max(...allData);
    const valueRange = maxValue - minValue;

    // Draw area
    data.datasets.forEach((dataset) => {
      ctx.fillStyle = dataset.backgroundColor || 'rgba(59, 130, 246, 0.3)';
      ctx.beginPath();

      dataset.data.forEach((value, index) => {
        const x = padding + (index * (width - 2 * padding)) / (data.labels.length - 1);
        const y = height - padding - ((value - minValue) / valueRange) * (height - 2 * padding);

        if (index === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      });

      // Close the area
      ctx.lineTo(width - padding, height - padding);
      ctx.lineTo(padding, height - padding);
      ctx.closePath();
      ctx.fill();
    });

    // Draw line on top
    data.datasets.forEach((dataset) => {
      ctx.strokeStyle = dataset.borderColor || '#3b82f6';
      ctx.lineWidth = dataset.borderWidth || 2;
      ctx.beginPath();

      dataset.data.forEach((value, index) => {
        const x = padding + (index * (width - 2 * padding)) / (data.labels.length - 1);
        const y = height - padding - ((value - minValue) / valueRange) * (height - 2 * padding);

        if (index === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      });

      ctx.stroke();
    });
  }, []);

  // Render chart based on type
  const renderChart = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    canvas.width = canvas.offsetWidth * 2;
    canvas.height = height * 2;
    ctx.scale(2, 2);

    // Set background
    ctx.fillStyle = 'rgba(30, 41, 59, 0.8)';
    ctx.fillRect(0, 0, canvas.width / 2, canvas.height / 2);

    // Render based on chart type
    switch (currentChartType) {
      case 'line':
        renderLineChart(ctx, chartData);
        break;
      case 'bar':
        renderBarChart(ctx, chartData);
        break;
      case 'pie':
        renderPieChart(ctx, chartData);
        break;
      case 'area':
        renderAreaChart(ctx, chartData);
        break;
    }
  }, [currentChartType, chartData, height, renderLineChart, renderBarChart, renderPieChart, renderAreaChart]);

  // Handle canvas click
  const handleCanvasClick = useCallback((event: React.MouseEvent<HTMLCanvasElement>) => {
    if (!onChartClick) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const clickX = event.clientX - rect.left;

    // Simple click detection - in a real implementation, you'd want more sophisticated hit testing
    const dataIndex = Math.floor((clickX - 40) / ((canvas.width / 2 - 80) / chartData.labels.length));
    
    if (dataIndex >= 0 && dataIndex < chartData.labels.length) {
      const value = chartData.datasets[0].data[dataIndex];
      const label = chartData.labels[dataIndex];
      
      onChartClick({ label, value, index: dataIndex });
      setSelectedDataPoint({ label, value, index: dataIndex });
    }
  }, [onChartClick, chartData]);

  // Refresh data
  const refreshData = useCallback(() => {
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 1000);
    renderChart();
  }, [renderChart]);

  // Export chart
  const exportChart = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const link = document.createElement('a');
    link.download = `chart-${currentChartType}-${new Date().toISOString().split('T')[0]}.png`;
    link.href = canvas.toDataURL();
    link.click();
  }, [currentChartType]);

  // Render chart when data or type changes
  useEffect(() => {
    if (enabled) {
      renderChart();
    }
  }, [enabled, chartData, currentChartType, renderChart]);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      if (enabled) {
        renderChart();
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [enabled, renderChart]);

  if (!enabled) return null;

  return (
    <motion.div 
      className={`bg-zion-blue-dark/60 backdrop-blur-sm border border-zion-blue-light/30 rounded-xl p-6 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-xl font-semibold text-white mb-2">Data Visualization</h3>
          <p className="text-zinc-300 text-sm">Interactive charts and analytics</p>
        </div>
        
        {showControls && (
          <div className="flex items-center gap-2">
            <Select
              value={currentChartType}
              onValueChange={(value) => setCurrentChartType(value as 'line' | 'bar' | 'pie' | 'area')}
            >
              <SelectTrigger className="border-zion-blue-light/30 text-zinc-300 bg-zion-blue-dark/40">
                <SelectValue placeholder="Select chart type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="line">Line Chart</SelectItem>
                <SelectItem value="bar">Bar Chart</SelectItem>
                <SelectItem value="pie">Pie Chart</SelectItem>
                <SelectItem value="area">Area Chart</SelectItem>
              </SelectContent>
            </Select>
            
            <Button
              size="sm"
              variant="outline"
              onClick={() => setShowLegend(!showLegend)}
              className="border-zion-blue-light/30 text-zinc-300 hover:text-white"
            >
              {showLegend ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </Button>
            
            <Button
              size="sm"
              variant="outline"
              onClick={refreshData}
              disabled={isAnimating}
              className="border-zion-blue-light/30 text-zinc-300 hover:text-white"
            >
              <RefreshCw className={`w-4 h-4 ${isAnimating ? 'animate-spin' : ''}`} />
            </Button>
            
            <Button
              size="sm"
              variant="outline"
              onClick={exportChart}
              className="border-zion-blue-light/30 text-zinc-300 hover:text-white"
            >
              <Download className="w-4 h-4" />
            </Button>
          </div>
        )}
      </div>

      {/* Chart Container */}
      <div className="relative">
        <canvas
          ref={canvasRef}
          className="w-full cursor-pointer"
          style={{ height: `${height}px` }}
          onClick={handleCanvasClick}
        />
        
        {/* Loading overlay */}
        {isAnimating && (
          <div className="absolute inset-0 bg-zion-blue-dark/50 flex items-center justify-center rounded-lg">
            <div className="text-zion-cyan">Refreshing...</div>
          </div>
        )}
      </div>

      {/* Legend */}
      {showLegend && (
        <div className="mt-6 flex flex-wrap gap-4">
          {chartData.datasets.map((dataset, index) => (
            <div key={index} className="flex items-center gap-2">
              <div 
                className="w-4 h-4 rounded"
                style={{ backgroundColor: dataset.backgroundColor || '#3b82f6' }}
              />
              <span className="text-sm text-zinc-300">{dataset.label}</span>
            </div>
          ))}
        </div>
      )}

      {/* Selected Data Point */}
      {selectedDataPoint && (
        <div className="mt-4 p-3 bg-zion-blue/20 border border-zion-blue-light/30 rounded-lg">
          <div className="text-sm text-zinc-300">
            <span className="font-medium">{selectedDataPoint.label}:</span> {selectedDataPoint.value.toLocaleString()}
          </div>
        </div>
      )}
    </motion.div>
  );
}