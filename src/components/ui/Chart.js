import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';
export const Chart = ({ data, type, title, subtitle, height = 300, showLegend = true, showGrid = true, animate = true, className = '' }) => {
    const maxValue = Math.max(...data.map(d => d.value));
    const minValue = Math.min(...data.map(d => d.value));
    const range = maxValue - minValue;
    const defaultColors = [
        '#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6',
        '#06B6D4', '#84CC16', '#F97316', '#EC4899', '#6366F1'
    ];
    const getColor = (index, customColor) => {
        return customColor || defaultColors[index % defaultColors.length];
    };
    const renderBarChart = () => (_jsx("div", { className: "flex items-end justify-between h-full space-x-1", children: data.map((point, index) => {
            const heightPercentage = range > 0 ? ((point.value - minValue) / range) * 100 : 50;
            return (_jsxs("div", { className: "flex flex-col items-center space-y-2", children: [_jsx("div", { className: "w-8 rounded-t transition-all duration-500 ease-out hover:opacity-80", style: {
                            height: `${heightPercentage}%`,
                            backgroundColor: getColor(index, point.color),
                            minHeight: '20px'
                        } }), _jsx("span", { className: "text-xs text-gray-600 text-center max-w-16 truncate", children: point.label })] }, point.label));
        }) }));
    const renderLineChart = () => (_jsxs("svg", { className: "w-full h-full", viewBox: `0 0 100 100`, children: [showGrid && (_jsx("g", { className: "text-gray-200", children: [0, 25, 50, 75, 100].map(y => (_jsx("line", { x1: "0", y1: y, x2: "100", y2: y, stroke: "currentColor", strokeWidth: "0.5" }, y))) })), _jsx("polyline", { fill: "none", stroke: getColor(0), strokeWidth: "2", points: data.map((point, index) => {
                    const x = (index / (data.length - 1)) * 100;
                    const y = range > 0 ? 100 - ((point.value - minValue) / range) * 100 : 50;
                    return `${x},${y}`;
                }).join(' '), className: animate ? 'animate-draw' : '' })] }));
    const renderPieChart = () => {
        const total = data.reduce((sum, point) => sum + point.value, 0);
        let currentAngle = 0;
        return (_jsx("svg", { className: "w-full h-full", viewBox: "0 0 100 100", children: data.map((point, index) => {
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
                return (_jsx("path", { d: pathData, fill: getColor(index, point.color), className: "transition-all duration-300 hover:opacity-80" }, point.label));
            }) }));
    };
    const renderAreaChart = () => {
        var _a, _b;
        return (_jsxs("svg", { className: "w-full h-full", viewBox: `0 0 100 100`, children: [showGrid && (_jsx("g", { className: "text-gray-200", children: [0, 25, 50, 75, 100].map(y => (_jsx("line", { x1: "0", y1: y, x2: "100", y2: y, stroke: "currentColor", strokeWidth: "0.5" }, y))) })), _jsx("path", { fill: getColor(0, (_a = data[0]) === null || _a === void 0 ? void 0 : _a.color), fillOpacity: "0.3", stroke: getColor(0, (_b = data[0]) === null || _b === void 0 ? void 0 : _b.color), strokeWidth: "2", d: (() => {
                        const points = data.map((point, index) => {
                            const x = (index / (data.length - 1)) * 100;
                            const y = range > 0 ? 100 - ((point.value - minValue) / range) * 100 : 50;
                            return `${x},${y}`;
                        });
                        return `M ${points.join(' L ')} L ${points[points.length - 1].split(',')[0]},100 L 0,100 Z`;
                    })(), className: animate ? 'animate-fade-in' : '' })] }));
    };
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
        var _a, _b;
        if (data.length < 2)
            return _jsx(Minus, { className: "w-4 h-4 text-gray-400" });
        const firstValue = ((_a = data[0]) === null || _a === void 0 ? void 0 : _a.value) || 0;
        const lastValue = ((_b = data[data.length - 1]) === null || _b === void 0 ? void 0 : _b.value) || 0;
        if (lastValue > firstValue) {
            return _jsx(TrendingUp, { className: "w-4 h-4 text-green-500" });
        }
        else if (lastValue < firstValue) {
            return _jsx(TrendingDown, { className: "w-4 h-4 text-red-500" });
        }
        else {
            return _jsx(Minus, { className: "w-4 h-4 text-gray-400" });
        }
    };
    const getTrendText = () => {
        var _a, _b;
        if (data.length < 2)
            return 'No trend data';
        const firstValue = ((_a = data[0]) === null || _a === void 0 ? void 0 : _a.value) || 0;
        const lastValue = ((_b = data[data.length - 1]) === null || _b === void 0 ? void 0 : _b.value) || 0;
        const change = lastValue - firstValue;
        const percentage = firstValue > 0 ? (change / firstValue) * 100 : 0;
        if (change > 0) {
            return `+${percentage.toFixed(1)}% from start`;
        }
        else if (change < 0) {
            return `${percentage.toFixed(1)}% from start`;
        }
        else {
            return 'No change from start';
        }
    };
    return (_jsxs("div", { className: `bg-white rounded-lg shadow-sm border ${className}`, children: [(title || subtitle) && (_jsx("div", { className: "px-6 py-4 border-b border-gray-200", children: _jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { children: [title && _jsx("h3", { className: "text-lg font-semibold text-gray-900", children: title }), subtitle && _jsx("p", { className: "text-sm text-gray-600", children: subtitle })] }), _jsxs("div", { className: "flex items-center space-x-2 text-sm text-gray-600", children: [getTrendIcon(), _jsx("span", { children: getTrendText() })] })] }) })), _jsx("div", { className: "p-6", children: _jsx("div", { style: { height: `${height}px` }, className: "relative", children: renderChart() }) }), showLegend && (_jsx("div", { className: "px-6 py-4 border-t border-gray-200", children: _jsx("div", { className: "flex flex-wrap gap-4", children: data.map((point, index) => (_jsxs("div", { className: "flex items-center space-x-2", children: [_jsx("div", { className: "w-3 h-3 rounded", style: { backgroundColor: getColor(index, point.color) } }), _jsx("span", { className: "text-sm text-gray-700", children: point.label }), _jsx("span", { className: "text-sm font-medium text-gray-900", children: point.value })] }, point.label))) }) }))] }));
};
