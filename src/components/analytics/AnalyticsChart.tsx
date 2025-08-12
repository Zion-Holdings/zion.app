import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Legend } from 'recharts';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";

// Define proper chart data interface
interface ChartDataPoint {
  name: string;
  value: number;
  fill?: string;
  [key: string]: string | number | undefined;
}

interface AnalyticsChartProps {
  title: string;
  description?: string;
  data: ChartDataPoint[];
  type?: 'line' | 'bar';
  dataKeys: string[];
  timeRange?: string;
  onTimeRangeChange?: (range: string) => void;
  height?: number;
}

export function AnalyticsChart({ 
  title, 
  description, 
  data, 
  type = 'line',
  dataKeys, 
  timeRange = '7d',
  onTimeRangeChange,
  height = 300
}: AnalyticsChartProps) {
  const [chartType, setChartType] = useState<'line' | 'bar'>(type);
  
  const colors = [
    '#8884d8', '#82ca9d', '#ffc658', '#ff8042', '#0088fe', 
    '#00C49F', '#FFBB28', '#FF8042', '#a4de6c', '#d0ed57'
  ];
  
  return (
    <Card className="bg-zion-blue-dark border-zion-blue-light overflow-hidden">
      <CardHeader className="pb-2">
        <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4">
          <div>
            <CardTitle className="text-white text-lg">{title}</CardTitle>
            {description && <CardDescription className="text-zion-slate-light">{description}</CardDescription>}
          </div>
          <div className="flex items-center gap-2">
            {onTimeRangeChange && (
              <Select value={timeRange} onValueChange={onTimeRangeChange}>
                <SelectTrigger className="w-24 h-8 text-xs bg-zion-blue border-zion-blue-light text-zion-slate-light">
                  <SelectValue placeholder="Time Range" />
                </SelectTrigger>
                <SelectContent className="bg-zion-blue-dark border-zion-blue-light text-zion-slate-light">
                  <SelectItem value="1d">1 Day</SelectItem>
                  <SelectItem value="7d">7 Days</SelectItem>
                  <SelectItem value="30d">30 Days</SelectItem>
                  <SelectItem value="90d">3 Months</SelectItem>
                  <SelectItem value="365d">1 Year</SelectItem>
                </SelectContent>
              </Select>
            )}
            <Select value={chartType} onValueChange={(value: 'line' | 'bar') => setChartType(value)}>
              <SelectTrigger className="w-24 h-8 text-xs bg-zion-blue border-zion-blue-light text-zion-slate-light">
                <SelectValue placeholder="Chart Type" />
              </SelectTrigger>
              <SelectContent className="bg-zion-blue-dark border-zion-blue-light text-zion-slate-light">
                <SelectItem value="line">Line</SelectItem>
                <SelectItem value="bar">Bar</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <div className="h-72 w-full p-4">
          <ResponsiveContainer width="100%" height={height}>
            {chartType === 'line' ? (
              <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 25 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#354151" />
                <XAxis 
                  dataKey="name" 
                  tick={{ fill: '#b1b9c6', fontSize: 12 }}
                  angle={-30}
                  textAnchor="end"
                  height={50}
                />
                <YAxis tick={{ fill: '#b1b9c6', fontSize: 12 }} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1a2332', 
                    borderColor: '#293445',
                    color: '#fff'
                  }} 
                />
                <Legend />
                {dataKeys.map((key, index) => (
                  <Line
                    key={key}
                    type="monotone"
                    dataKey={key}
                    stroke={colors[index % colors.length]}
                    activeDot={{ r: 8 }}
                    strokeWidth={2}
                  />
                ))}
              </LineChart>
            ) : (
              <BarChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 25 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#354151" />
                <XAxis 
                  dataKey="name" 
                  tick={{ fill: '#b1b9c6', fontSize: 12 }} 
                  angle={-30}
                  textAnchor="end"
                  height={50}
                />
                <YAxis tick={{ fill: '#b1b9c6', fontSize: 12 }} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1a2332', 
                    borderColor: '#293445',
                    color: '#fff'
                  }} 
                />
                <Legend />
                {dataKeys.map((key, index) => (
                  <Bar 
                    key={key}
                    dataKey={key} 
                    fill={colors[index % colors.length]} 
                    radius={[4, 4, 0, 0]}
                  />
                ))}
              </BarChart>
            )}
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
