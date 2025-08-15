import React, { useState, useEffect, useRef } from 'react';

interface DataPoint {
  label: string;
  value: number;
  category?: string;
  timestamp?: Date;
  metadata?: any;
}

interface ChartConfig {
  type: 'line' | 'bar' | 'pie' | 'area' | 'scatter' | 'radar';
  title: string;
  xAxis?: string;
  yAxis?: string;
  colorScheme?: string[];
  showLegend?: boolean;
  showGrid?: boolean;
  animate?: boolean;
}

interface DataSet {
  id: string;
  name: string;
  data: DataPoint[];
  color?: string;
  type?: string;
}

interface AdvancedDataVisualizationProps {
  datasets: DataSet[];
  config: ChartConfig;
  height?: number;
  width?: number;
  onDataPointClick?: (point: DataPoint, dataset: DataSet) => void;
  onChartUpdate?: (chartData: any) => void;
}

const AdvancedDataVisualization: React.FC<AdvancedDataVisualizationProps> = ({
  datasets,
  config,
  height = 400,
  width = 800,
  onDataPointClick,
  onChartUpdate
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [hoveredPoint, setHoveredPoint] = useState<DataPoint | null>(null);
  const [selectedPoints, setSelectedPoints] = useState<Set<string>>(new Set());
  const [zoomLevel, setZoomLevel] = useState(1);
  const [panOffset, setPanOffset] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  // Color schemes
  const colorSchemes = {
    default: ['#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6', '#06B6D4'],
    warm: ['#F97316', '#EF4444', '#F59E0B', '#EAB308', '#84CC16', '#22C55E'],
    cool: ['#3B82F6', '#8B5CF6', '#06B6D4', '#10B981', '#84CC16', '#EAB308'],
    pastel: ['#FEF3C7', '#FEE2E2', '#DBEAFE', '#D1FAE5', '#F3E8FF', '#FED7AA']
  };

  const colors = colorSchemes[config.colorScheme as keyof typeof colorSchemes] || colorSchemes.default;

  useEffect(() => {
    if (canvasRef.current) {
      drawChart();
    }
  }, [datasets, config, zoomLevel, panOffset, selectedPoints]);

  const drawChart = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear canvas
    ctx.clearRect(0, 0, width, height);

    // Apply zoom and pan transformations
    ctx.save();
    ctx.translate(panOffset.x, panOffset.y);
    ctx.scale(zoomLevel, zoomLevel);

    // Calculate chart dimensions
    const margin = { top: 60, right: 40, bottom: 60, left: 60 };
    const chartWidth = (width - margin.left - margin.right) / zoomLevel;
    const chartHeight = (height - margin.top - margin.bottom) / zoomLevel;

    // Find data ranges
    const allValues = datasets.flatMap(dataset => dataset.data.map(point => point.value));
    const minValue = Math.min(...allValues);
    const maxValue = Math.max(...allValues);
    const valueRange = maxValue - minValue;

    // Draw title
    ctx.font = 'bold 18px Arial';
    ctx.fillStyle = '#1F2937';
    ctx.textAlign = 'center';
    ctx.fillText(config.title, width / 2 / zoomLevel, margin.top / zoomLevel);

    // Draw grid
    if (config.showGrid) {
      drawGrid(ctx, margin, chartWidth, chartHeight, minValue, maxValue);
    }

    // Draw chart based on type
    switch (config.type) {
      case 'line':
        drawLineChart(ctx, margin, chartWidth, chartHeight, minValue, maxValue);
        break;
      case 'bar':
        drawBarChart(ctx, margin, chartWidth, chartHeight, minValue, maxValue);
        break;
      case 'pie':
        drawPieChart(ctx, margin, chartWidth, chartHeight);
        break;
      case 'area':
        drawAreaChart(ctx, margin, chartWidth, chartHeight, minValue, maxValue);
        break;
      case 'scatter':
        drawScatterChart(ctx, margin, chartWidth, chartHeight, minValue, maxValue);
        break;
      case 'radar':
        drawRadarChart(ctx, margin, chartWidth, chartHeight, minValue, maxValue);
        break;
    }

    // Draw axes
    drawAxes(ctx, margin, chartWidth, chartHeight, minValue, maxValue);

    // Draw legend
    if (config.showLegend) {
      drawLegend(ctx, margin, chartWidth, chartHeight);
    }

    ctx.restore();

    // Notify parent component
    if (onChartUpdate) {
      onChartUpdate({
        type: config.type,
        datasets,
        config,
        zoomLevel,
        panOffset
      });
    }
  };

  const drawGrid = (
    ctx: CanvasRenderingContext2D,
    margin: { top: number; right: number; bottom: number; left: number },
    chartWidth: number,
    chartHeight: number,
    minValue: number,
    maxValue: number
  ) => {
    ctx.strokeStyle = '#E5E7EB';
    ctx.lineWidth = 0.5;

    // Vertical grid lines
    const xStep = chartWidth / 10;
    for (let i = 0; i <= 10; i++) {
      const x = margin.left + i * xStep;
      ctx.beginPath();
      ctx.moveTo(x, margin.top);
      ctx.lineTo(x, margin.top + chartHeight);
      ctx.stroke();
    }

    // Horizontal grid lines
    const yStep = chartHeight / 8;
    for (let i = 0; i <= 8; i++) {
      const y = margin.top + i * yStep;
      ctx.beginPath();
      ctx.moveTo(margin.left, y);
      ctx.lineTo(margin.left + chartWidth, y);
      ctx.stroke();
    }
  };

  const drawLineChart = (
    ctx: CanvasRenderingContext2D,
    margin: { top: number; right: number; bottom: number; left: number },
    chartWidth: number,
    chartHeight: number,
    minValue: number,
    maxValue: number
  ) => {
    datasets.forEach((dataset, datasetIndex) => {
      const color = dataset.color || colors[datasetIndex % colors.length];
      
      ctx.strokeStyle = color;
      ctx.lineWidth = 3;
      ctx.fillStyle = color;

      ctx.beginPath();
      dataset.data.forEach((point, pointIndex) => {
        const x = margin.left + (pointIndex / (dataset.data.length - 1)) * chartWidth;
        const y = margin.top + chartHeight - ((point.value - minValue) / (maxValue - minValue)) * chartHeight;

        if (pointIndex === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }

        // Draw data points
        if (selectedPoints.has(`${dataset.id}-${pointIndex}`)) {
          ctx.fillStyle = '#1F2937';
          ctx.beginPath();
          ctx.arc(x, y, 6, 0, 2 * Math.PI);
          ctx.fill();
        } else {
          ctx.fillStyle = color;
          ctx.beginPath();
          ctx.arc(x, y, 4, 0, 2 * Math.PI);
          ctx.fill();
        }
      });

      ctx.stroke();
    });
  };

  const drawBarChart = (
    ctx: CanvasRenderingContext2D,
    margin: { top: number; right: number; bottom: number; left: number },
    chartWidth: number,
    chartHeight: number,
    minValue: number,
    maxValue: number
  ) => {
    const barWidth = chartWidth / (datasets[0]?.data.length || 1) / datasets.length;
    const barSpacing = barWidth * 0.1;

    datasets.forEach((dataset, datasetIndex) => {
      const color = dataset.color || colors[datasetIndex % colors.length];
      
      dataset.data.forEach((point, pointIndex) => {
        const x = margin.left + pointIndex * (chartWidth / (dataset.data.length - 1)) + datasetIndex * barWidth;
        const barHeight = ((point.value - minValue) / (maxValue - minValue)) * chartHeight;
        const y = margin.top + chartHeight - barHeight;

        ctx.fillStyle = color;
        ctx.fillRect(x, y, barWidth - barSpacing, barHeight);

        // Highlight selected bars
        if (selectedPoints.has(`${dataset.id}-${pointIndex}`)) {
          ctx.strokeStyle = '#1F2937';
          ctx.lineWidth = 2;
          ctx.strokeRect(x, y, barWidth - barSpacing, barHeight);
        }
      });
    });
  };

  const drawPieChart = (
    ctx: CanvasRenderingContext2D,
    margin: { top: number; right: number; bottom: number; left: number },
    chartWidth: number,
    chartHeight: number
  ) => {
    const centerX = margin.left + chartWidth / 2;
    const centerY = margin.top + chartHeight / 2;
    const radius = Math.min(chartWidth, chartHeight) / 3;

    const totalValue = datasets[0]?.data.reduce((sum, point) => sum + point.value, 0) || 0;
    let currentAngle = -Math.PI / 2;

    datasets[0]?.data.forEach((point, index) => {
      const sliceAngle = (point.value / totalValue) * 2 * Math.PI;
      const color = colors[index % colors.length];

      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.arc(centerX, centerY, radius, currentAngle, currentAngle + sliceAngle);
      ctx.closePath();
      ctx.fill();

      // Draw labels
      const labelAngle = currentAngle + sliceAngle / 2;
      const labelRadius = radius * 1.2;
      const labelX = centerX + Math.cos(labelAngle) * labelRadius;
      const labelY = centerY + Math.sin(labelAngle) * labelRadius;

      ctx.fillStyle = '#1F2937';
      ctx.font = '12px Arial';
      ctx.textAlign = 'center';
      ctx.fillText(point.label, labelX, labelY);

      currentAngle += sliceAngle;
    });
  };

  const drawAreaChart = (
    ctx: CanvasRenderingContext2D,
    margin: { top: number; right: number; bottom: number; left: number },
    chartWidth: number,
    chartHeight: number,
    minValue: number,
    maxValue: number
  ) => {
    datasets.forEach((dataset, datasetIndex) => {
      const color = dataset.color || colors[datasetIndex % colors.length];
      
      ctx.fillStyle = color + '40'; // Add transparency
      ctx.beginPath();
      
      dataset.data.forEach((point, pointIndex) => {
        const x = margin.left + (pointIndex / (dataset.data.length - 1)) * chartWidth;
        const y = margin.top + chartHeight - ((point.value - minValue) / (maxValue - minValue)) * chartHeight;

        if (pointIndex === 0) {
          ctx.moveTo(x, margin.top + chartHeight);
        }
        ctx.lineTo(x, y);
        
        if (pointIndex === dataset.data.length - 1) {
          ctx.lineTo(x, margin.top + chartHeight);
        }
      });

      ctx.closePath();
      ctx.fill();

      // Draw line on top
      ctx.strokeStyle = color;
      ctx.lineWidth = 2;
      ctx.beginPath();
      dataset.data.forEach((point, pointIndex) => {
        const x = margin.left + (pointIndex / (dataset.data.length - 1)) * chartWidth;
        const y = margin.top + chartHeight - ((point.value - minValue) / (maxValue - minValue)) * chartHeight;

        if (pointIndex === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      });
      ctx.stroke();
    });
  };

  const drawScatterChart = (
    ctx: CanvasRenderingContext2D,
    margin: { top: number; right: number; bottom: number; left: number },
    chartWidth: number,
    chartHeight: number,
    minValue: number,
    maxValue: number
  ) => {
    datasets.forEach((dataset, datasetIndex) => {
      const color = dataset.color || colors[datasetIndex % colors.length];
      
      dataset.data.forEach((point, pointIndex) => {
        const x = margin.left + (pointIndex / (dataset.data.length - 1)) * chartWidth;
        const y = margin.top + chartHeight - ((point.value - minValue) / (maxValue - minValue)) * chartHeight;

        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(x, y, 6, 0, 2 * Math.PI);
        ctx.fill();

        // Highlight selected points
        if (selectedPoints.has(`${dataset.id}-${pointIndex}`)) {
          ctx.strokeStyle = '#1F2937';
          ctx.lineWidth = 2;
          ctx.stroke();
        }
      });
    });
  };

  const drawRadarChart = (
    ctx: CanvasRenderingContext2D,
    margin: { top: number; right: number; bottom: number; left: number },
    chartWidth: number,
    chartHeight: number,
    minValue: number,
    maxValue: number
  ) => {
    const centerX = margin.left + chartWidth / 2;
    const centerY = margin.top + chartHeight / 2;
    const radius = Math.min(chartWidth, chartHeight) / 3;

    // Draw radar grid
    ctx.strokeStyle = '#E5E7EB';
    ctx.lineWidth = 0.5;
    
    for (let i = 1; i <= 5; i++) {
      const currentRadius = (radius * i) / 5;
      ctx.beginPath();
      ctx.arc(centerX, centerY, currentRadius, 0, 2 * Math.PI);
      ctx.stroke();
    }

    // Draw data
    datasets.forEach((dataset, datasetIndex) => {
      const color = dataset.color || colors[datasetIndex % colors.length];
      
      ctx.strokeStyle = color;
      ctx.lineWidth = 3;
      ctx.fillStyle = color + '20';
      
      ctx.beginPath();
      dataset.data.forEach((point, pointIndex) => {
        const angle = (pointIndex / dataset.data.length) * 2 * Math.PI - Math.PI / 2;
        const valueRadius = ((point.value - minValue) / (maxValue - minValue)) * radius;
        const x = centerX + Math.cos(angle) * valueRadius;
        const y = centerY + Math.sin(angle) * valueRadius;

        if (pointIndex === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      });
      ctx.closePath();
      ctx.stroke();
      ctx.fill();
    });
  };

  const drawAxes = (
    ctx: CanvasRenderingContext2D,
    margin: { top: number; right: number; bottom: number; left: number },
    chartWidth: number,
    chartHeight: number,
    minValue: number,
    maxValue: number
  ) => {
    ctx.strokeStyle = '#374151';
    ctx.lineWidth = 2;
    ctx.fillStyle = '#374151';
    ctx.font = '12px Arial';

    // X-axis
    ctx.beginPath();
    ctx.moveTo(margin.left, margin.top + chartHeight);
    ctx.lineTo(margin.left + chartWidth, margin.top + chartHeight);
    ctx.stroke();

    // Y-axis
    ctx.beginPath();
    ctx.moveTo(margin.left, margin.top);
    ctx.lineTo(margin.left, margin.top + chartHeight);
    ctx.stroke();

    // X-axis labels
    if (datasets[0]?.data) {
      datasets[0].data.forEach((point, index) => {
        const x = margin.left + (index / (datasets[0].data.length - 1)) * chartWidth;
        ctx.textAlign = 'center';
        ctx.fillText(point.label, x, margin.top + chartHeight + 20);
      });
    }

    // Y-axis labels
    for (let i = 0; i <= 5; i++) {
      const y = margin.top + chartHeight - (i / 5) * chartHeight;
      const value = minValue + (i / 5) * (maxValue - minValue);
      ctx.textAlign = 'right';
      ctx.fillText(value.toFixed(1), margin.left - 10, y + 4);
    }
  };

  const drawLegend = (
    ctx: CanvasRenderingContext2D,
    margin: { top: number; right: number; bottom: number; left: number },
    chartWidth: number,
    chartHeight: number
  ) => {
    const legendX = margin.left + chartWidth + 20;
    const legendY = margin.top;
    const legendItemHeight = 20;

    datasets.forEach((dataset, index) => {
      const color = dataset.color || colors[index % colors.length];
      const y = legendY + index * legendItemHeight;

      // Color indicator
      ctx.fillStyle = color;
      ctx.fillRect(legendX, y, 15, 15);

      // Dataset name
      ctx.fillStyle = '#374151';
      ctx.font = '12px Arial';
      ctx.textAlign = 'left';
      ctx.fillText(dataset.name, legendX + 20, y + 12);
    });
  };

  const handleMouseMove = (event: React.MouseEvent<HTMLCanvasElement>) => {
    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect) return;

    const x = (event.clientX - rect.left - panOffset.x) / zoomLevel;
    const y = (event.clientY - rect.top - panOffset.y) / zoomLevel;

    // Find closest data point
    let closestPoint: DataPoint | null = null;
    let closestDistance = Infinity;

    datasets.forEach(dataset => {
      dataset.data.forEach((point, index) => {
        const margin = { top: 60, right: 40, bottom: 60, left: 60 };
        const chartWidth = (width - margin.left - margin.right) / zoomLevel;
        const chartHeight = (height - margin.top - margin.bottom) / zoomLevel;

        let pointX: number, pointY: number;

        if (config.type === 'pie' || config.type === 'radar') {
          const centerX = margin.left + chartWidth / 2;
          const centerY = margin.top + chartHeight / 2;
          const radius = Math.min(chartWidth, chartHeight) / 3;

          if (config.type === 'pie') {
            const totalValue = dataset.data.reduce((sum, p) => sum + p.value, 0);
            const angle = (index / dataset.data.length) * 2 * Math.PI - Math.PI / 2;
            const valueRadius = (point.value / totalValue) * radius;
            pointX = centerX + Math.cos(angle) * valueRadius;
            pointY = centerY + Math.sin(angle) * valueRadius;
          } else {
            const angle = (index / dataset.data.length) * 2 * Math.PI - Math.PI / 2;
            const valueRadius = point.value / Math.max(...dataset.data.map(p => p.value)) * radius;
            pointX = centerX + Math.cos(angle) * valueRadius;
            pointY = centerY + Math.sin(angle) * valueRadius;
          }
        } else {
          pointX = margin.left + (index / (dataset.data.length - 1)) * chartWidth;
          pointY = margin.top + chartHeight - (point.value / Math.max(...allValues)) * chartHeight;
        }

        const distance = Math.sqrt((x - pointX) ** 2 + (y - pointY) ** 2);
        if (distance < closestDistance && distance < 20) {
          closestDistance = distance;
          closestPoint = point;
        }
      });
    });

    setHoveredPoint(closestPoint);
  };

  const handleClick = (event: React.MouseEvent<HTMLCanvasElement>) => {
    if (hoveredPoint) {
      const dataset = datasets.find(ds => ds.data.includes(hoveredPoint));
      if (dataset && onDataPointClick) {
        onDataPointClick(hoveredPoint, dataset);
      }
    }
  };

  const handleWheel = (event: React.WheelEvent<HTMLCanvasElement>) => {
    event.preventDefault();
    const delta = event.deltaY > 0 ? 0.9 : 1.1;
    const newZoom = Math.max(0.5, Math.min(3, zoomLevel * delta));
    setZoomLevel(newZoom);
  };

  const handleMouseDown = (event: React.MouseEvent<HTMLCanvasElement>) => {
    setIsDragging(true);
    setDragStart({ x: event.clientX - panOffset.x, y: event.clientY - panOffset.y });
  };

  const handleMouseMoveDrag = (event: React.MouseEvent<HTMLCanvasElement>) => {
    if (isDragging) {
      setPanOffset({
        x: event.clientX - dragStart.x,
        y: event.clientY - dragStart.y
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const resetView = () => {
    setZoomLevel(1);
    setPanOffset({ x: 0, y: 0 });
  };

  return (
    <div className="relative">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-medium text-gray-900">{config.title}</h3>
        <div className="flex items-center space-x-2">
          <button
            onClick={resetView}
            className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded hover:bg-gray-200 transition-colors"
          >
            Reset View
          </button>
          <span className="text-sm text-gray-500">
            Zoom: {Math.round(zoomLevel * 100)}%
          </span>
        </div>
      </div>

      <div className="relative border border-gray-200 rounded-lg overflow-hidden">
        <canvas
          ref={canvasRef}
          width={width}
          height={height}
          className="cursor-crosshair"
          onMouseMove={handleMouseMove}
          onClick={handleClick}
          onWheel={handleWheel}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMoveDrag}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        />

        {/* Tooltip */}
        {hoveredPoint && (
          <div
            className="absolute bg-white border border-gray-200 rounded-lg shadow-lg p-3 text-sm pointer-events-none z-10"
            style={{
              left: hoveredPoint.timestamp ? '50%' : 'auto',
              top: hoveredPoint.timestamp ? 'auto' : '50%',
              transform: hoveredPoint.timestamp ? 'translateX(-50%)' : 'translateY(-50%)'
            }}
          >
            <div className="font-medium">{hoveredPoint.label}</div>
            <div className="text-gray-600">Value: {hoveredPoint.value}</div>
            {hoveredPoint.category && (
              <div className="text-gray-600">Category: {hoveredPoint.category}</div>
            )}
            {hoveredPoint.timestamp && (
              <div className="text-gray-600">
                Time: {hoveredPoint.timestamp.toLocaleString()}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Chart Controls */}
      <div className="mt-4 flex items-center justify-between text-sm text-gray-600">
        <div>
          <span className="font-medium">Type:</span> {config.type}
          {config.xAxis && (
            <>
              <span className="mx-2">•</span>
              <span className="font-medium">X:</span> {config.xAxis}
            </>
          )}
          {config.yAxis && (
            <>
              <span className="mx-2">•</span>
              <span className="font-medium">Y:</span> {config.yAxis}
            </>
          )}
        </div>
        <div>
          <span className="font-medium">Datasets:</span> {datasets.length}
          <span className="mx-2">•</span>
          <span className="font-medium">Points:</span> {datasets.reduce((sum, ds) => sum + ds.data.length, 0)}
        </div>
      </div>
    </div>
  );
};

export default AdvancedDataVisualization;