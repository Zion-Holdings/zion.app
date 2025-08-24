import React, { useState, useEffect } from 'react';
import { TrendingUp, Users, DollarSign, Activity, Eye, MousePointer, Clock, Target, BarChart3, PieChart, LineChart } from 'lucide-react';

interface AnalyticsData {
  visitors: number;
  pageViews: number;
  conversionRate: number;
  revenue: number;
  bounceRate: number;
  avgSessionDuration: number;
  topPages: Array<{ name: string; views: number; change: number }>;
  trafficSources: Array<{ source: string; percentage: number; color: string }>;
  hourlyTraffic: Array<{ hour: string; visitors: number }>;
  deviceBreakdown: Array<{ device: string; percentage: number; color: string }>;
}

const mockData: AnalyticsData = {
  visitors: 12450,
  pageViews: 45678,
  conversionRate: 3.2,
  revenue: 125000,
  bounceRate: 42.5,
  avgSessionDuration: 245,
  topPages: [
    { name: 'Home', views: 12500, change: 12.5 },
    { name: 'Services', views: 8900, change: 8.2 },
    { name: 'About', views: 6700, change: -2.1 },
    { name: 'Contact', views: 5400, change: 15.7 }
  ],
  trafficSources: [
    { source: 'Organic Search', percentage: 45, color: '#06b6d4' },
    { source: 'Direct', percentage: 25, color: '#7c3aed' },
    { source: 'Social Media', percentage: 20, color: '#10b981' },
    { source: 'Referral', percentage: 10, color: '#f59e0b' }
  ],
  hourlyTraffic: [
    { hour: '00:00', visitors: 120 }, { hour: '02:00', visitors: 80 },
    { hour: '04:00', visitors: 60 }, { hour: '06:00', visitors: 150 },
    { hour: '08:00', visitors: 450 }, { hour: '10:00', visitors: 890 },
    { hour: '12:00', visitors: 1200 }, { hour: '14:00', visitors: 1100 },
    { hour: '16:00', visitors: 950 }, { hour: '18:00', visitors: 800 },
    { hour: '20:00', visitors: 600 }, { hour: '22:00', visitors: 300 }
  ],
  deviceBreakdown: [
    { device: 'Desktop', percentage: 65, color: '#06b6d4' },
    { device: 'Mobile', percentage: 30, color: '#7c3aed' },
    { device: 'Tablet', percentage: 5, color: '#10b981' }
  ]
};

export function AnalyticsDashboard() {
  const [data, setData] = useState<AnalyticsData>(mockData);
  const [timeRange, setTimeRange] = useState<'24h' | '7d' | '30d' | '90d'>('7d');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Simulate real-time data updates
    const interval = setInterval(() => {
      setData(prev => ({
        ...prev,
        visitors: prev.visitors + Math.floor(Math.random() * 10 - 5),
        pageViews: prev.pageViews + Math.floor(Math.random() * 50 - 25),
        conversionRate: Math.max(0, prev.conversionRate + (Math.random() * 0.2 - 0.1))
      }));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const formatNumber = (num: number) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
    return num.toString();
  };

  const formatCurrency = (num: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(num);
  };

  const getChangeColor = (change: number) => {
    return change >= 0 ? 'text-zion-emerald' : 'text-red-500';
  };

  const getChangeIcon = (change: number) => {
    return change >= 0 ? '↗' : '↘';
  };

  if (!isVisible) {
    return (
      <button
        onClick={() => setIsVisible(true)}
        className="fixed bottom-4 left-20 p-3 bg-zion-emerald hover:bg-zion-emerald-light text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50"
        title="Show Analytics Dashboard"
      >
        <BarChart3 className="w-5 h-5" />
      </button>
    );
  }

  return (
    <div className="fixed inset-4 bg-white dark:bg-zion-slate border border-zion-slate-light rounded-lg shadow-2xl z-50 overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between p-6 border-b border-zion-slate-light bg-gradient-to-r from-zion-emerald/10 to-zion-cyan/10">
        <div className="flex items-center gap-3">
          <BarChart3 className="w-6 h-6 text-zion-emerald" />
          <h2 className="text-2xl font-bold text-zion-slate">Analytics Dashboard</h2>
        </div>
        <div className="flex items-center gap-4">
          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value as any)}
            className="px-3 py-2 border border-zion-slate-light rounded-lg bg-white dark:bg-zion-slate text-zion-slate focus:ring-2 focus:ring-zion-emerald focus:border-transparent"
          >
            <option value="24h">Last 24 Hours</option>
            <option value="7d">Last 7 Days</option>
            <option value="30d">Last 30 Days</option>
            <option value="90d">Last 90 Days</option>
          </select>
          <button
            onClick={() => setIsVisible(false)}
            className="text-zion-slate-light hover:text-zion-slate transition-colors"
          >
            ×
          </button>
        </div>
      </div>

      <div className="p-6 overflow-y-auto h-full">
        {/* Key Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-gradient-to-br from-zion-cyan/10 to-zion-blue/10 p-6 rounded-xl border border-zion-cyan/20">
            <div className="flex items-center justify-between mb-4">
              <Users className="w-8 h-8 text-zion-cyan" />
              <span className="text-2xl font-bold text-zion-cyan">{formatNumber(data.visitors)}</span>
            </div>
            <h3 className="text-zion-slate-light mb-2">Total Visitors</h3>
            <div className="flex items-center gap-2 text-sm">
              <span className={getChangeColor(12.5)}>{getChangeIcon(12.5)} +12.5%</span>
              <span className="text-zion-slate-light">vs last period</span>
            </div>
          </div>

          <div className="bg-gradient-to-br from-zion-purple/10 to-zion-cyan/10 p-6 rounded-xl border border-zion-purple/20">
            <div className="flex items-center justify-between mb-4">
              <Eye className="w-8 h-8 text-zion-purple" />
              <span className="text-2xl font-bold text-zion-purple">{formatNumber(data.pageViews)}</span>
            </div>
            <h3 className="text-zion-slate-light mb-2">Page Views</h3>
            <div className="flex items-center gap-2 text-sm">
              <span className={getChangeColor(8.2)}>{getChangeIcon(8.2)} +8.2%</span>
              <span className="text-zion-slate-light">vs last period</span>
            </div>
          </div>

          <div className="bg-gradient-to-br from-zion-emerald/10 to-zion-gold/10 p-6 rounded-xl border border-zion-emerald/20">
            <div className="flex items-center justify-between mb-4">
              <Target className="w-8 h-8 text-zion-emerald" />
              <span className="text-2xl font-bold text-zion-emerald">{data.conversionRate}%</span>
            </div>
            <h3 className="text-zion-slate-light mb-2">Conversion Rate</h3>
            <div className="flex items-center gap-2 text-sm">
              <span className={getChangeColor(3.1)}>{getChangeIcon(3.1)} +3.1%</span>
              <span className="text-zion-slate-light">vs last period</span>
            </div>
          </div>

          <div className="bg-gradient-to-br from-zion-gold/10 to-zion-orange/10 p-6 rounded-xl border border-zion-gold/20">
            <div className="flex items-center justify-between mb-4">
              <DollarSign className="w-8 h-8 text-zion-gold" />
              <span className="text-2xl font-bold text-zion-gold">{formatCurrency(data.revenue)}</span>
            </div>
            <h3 className="text-zion-slate-light mb-2">Revenue</h3>
            <div className="flex items-center gap-2 text-sm">
              <span className={getChangeColor(15.7)}>{getChangeIcon(15.7)} +15.7%</span>
              <span className="text-zion-slate-light">vs last period</span>
            </div>
          </div>
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Traffic Sources Pie Chart */}
          <div className="bg-white dark:bg-zion-slate border border-zion-slate-light rounded-xl p-6">
            <h3 className="text-lg font-semibold text-zion-slate mb-4 flex items-center gap-2">
              <PieChart className="w-5 h-5 text-zion-cyan" />
              Traffic Sources
            </h3>
            <div className="space-y-4">
              {data.trafficSources.map((source, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div 
                      className="w-4 h-4 rounded-full"
                      style={{ backgroundColor: source.color }}
                    ></div>
                    <span className="text-zion-slate">{source.source}</span>
                  </div>
                  <span className="font-semibold text-zion-slate">{source.percentage}%</span>
                </div>
              ))}
            </div>
          </div>

          {/* Device Breakdown */}
          <div className="bg-white dark:bg-zion-slate border border-zion-slate-light rounded-xl p-6">
            <h3 className="text-lg font-semibold text-zion-slate mb-4 flex items-center gap-2">
              <MousePointer className="w-5 h-5 text-zion-purple" />
              Device Breakdown
            </h3>
            <div className="space-y-4">
              {data.deviceBreakdown.map((device, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-zion-slate">{device.device}</span>
                    <span className="font-semibold text-zion-slate">{device.percentage}%</span>
                  </div>
                  <div className="w-full bg-zion-slate-light/20 rounded-full h-2">
                    <div
                      className="h-2 rounded-full transition-all duration-500"
                      style={{ 
                        width: `${device.percentage}%`,
                        backgroundColor: device.color
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Top Pages & Hourly Traffic */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Top Pages */}
          <div className="bg-white dark:bg-zion-slate border border-zion-slate-light rounded-xl p-6">
            <h3 className="text-lg font-semibold text-zion-slate mb-4 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-zion-emerald" />
              Top Pages
            </h3>
            <div className="space-y-4">
              {data.topPages.map((page, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-zion-slate-light/5 rounded-lg">
                  <div>
                    <h4 className="font-medium text-zion-slate">{page.name}</h4>
                    <p className="text-sm text-zion-slate-light">{formatNumber(page.views)} views</p>
                  </div>
                  <span className={`text-sm font-medium ${getChangeColor(page.change)}`}>
                    {getChangeIcon(page.change)} {Math.abs(page.change)}%
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Hourly Traffic */}
          <div className="bg-white dark:bg-zion-slate border border-zion-slate-light rounded-xl p-6">
            <h3 className="text-lg font-semibold text-zion-slate mb-4 flex items-center gap-2">
              <Clock className="w-5 h-5 text-zion-gold" />
              Hourly Traffic
            </h3>
            <div className="h-48 flex items-end justify-between gap-1">
              {data.hourlyTraffic.map((hour, index) => (
                <div key={index} className="flex-1 flex flex-col items-center">
                  <div
                    className="w-full bg-gradient-to-t from-zion-cyan to-zion-blue rounded-t transition-all duration-500 hover:from-zion-cyan-light hover:to-zion-blue-light"
                    style={{ 
                      height: `${(hour.visitors / Math.max(...data.hourlyTraffic.map(h => h.visitors))) * 100}%`
                    }}
                  ></div>
                  <span className="text-xs text-zion-slate-light mt-2 transform -rotate-45 origin-left">
                    {hour.hour}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}