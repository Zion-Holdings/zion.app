import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface AnalyticsData {
  visitors: number;
  conversions: number;
  revenue: number;
  bounceRate: number;
  avgSessionDuration: number;
  topPages: Array<{ page: string; views: number }>;
  trafficSources: Array<{ source: string; percentage: number }>;
  deviceTypes: Array<{ device: string; percentage: number }>;
}

export function AdvancedAnalytics() {
  const [analyticsData, setAnalyticsData] = useState<AnalyticsData>({
    visitors: 0,
    conversions: 0,
    revenue: 0,
    bounceRate: 0,
    avgSessionDuration: 0,
    topPages: [],
    trafficSources: [],
    deviceTypes: []
  });

  const [timeRange, setTimeRange] = useState('7d');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    const fetchData = async () => {
      setIsLoading(true);
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setAnalyticsData({
        visitors: Math.floor(Math.random() * 10000) + 5000,
        conversions: Math.floor(Math.random() * 500) + 100,
        revenue: Math.floor(Math.random() * 50000) + 10000,
        bounceRate: Math.random() * 30 + 20,
        avgSessionDuration: Math.floor(Math.random() * 300) + 120,
        topPages: [
          { page: '/', views: Math.floor(Math.random() * 5000) + 2000 },
          { page: '/services', views: Math.floor(Math.random() * 3000) + 1500 },
          { page: '/contact', views: Math.floor(Math.random() * 2000) + 1000 },
          { page: '/about', views: Math.floor(Math.random() * 1500) + 800 },
          { page: '/pricing', views: Math.floor(Math.random() * 1000) + 500 }
        ],
        trafficSources: [
          { source: 'Organic Search', percentage: 45 },
          { source: 'Direct', percentage: 25 },
          { source: 'Social Media', percentage: 20 },
          { source: 'Referral', percentage: 10 }
        ],
        deviceTypes: [
          { device: 'Desktop', percentage: 60 },
          { device: 'Mobile', percentage: 35 },
          { device: 'Tablet', percentage: 5 }
        ]
      });
      
      setIsLoading(false);
    };

    fetchData();
  }, [timeRange]);

  const formatNumber = (num: number) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
    return num.toString();
  };

  const formatCurrency = (num: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(num);
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-zion-cyan"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6 p-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-zion-blue mb-4">
          Advanced Analytics Dashboard
        </h2>
        <p className="text-zion-slate-light text-lg">
          Real-time insights and performance metrics
        </p>
        
        {/* Time Range Selector */}
        <div className="flex justify-center mt-4 space-x-2">
          {['1d', '7d', '30d', '90d'].map((range) => (
            <button
              key={range}
              onClick={() => setTimeRange(range)}
              className={`px-4 py-2 rounded-lg transition-colors ${
                timeRange === range
                  ? 'bg-zion-cyan text-white'
                  : 'bg-zion-slate/10 text-zion-slate-light hover:bg-zion-slate/20'
              }`}
            >
              {range}
            </button>
          ))}
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="p-6 bg-gradient-to-br from-zion-blue/20 to-zion-purple/20 border border-zion-blue/30 rounded-xl"
        >
          <div className="text-2xl font-bold text-zion-blue">
            {formatNumber(analyticsData.visitors)}
          </div>
          <div className="text-zion-slate-light text-sm">Total Visitors</div>
          <div className="text-zion-cyan text-xs mt-2">+12.5% vs last period</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="p-6 bg-gradient-to-br from-zion-purple/20 to-zion-cyan/20 border border-zion-purple/30 rounded-xl"
        >
          <div className="text-2xl font-bold text-zion-purple">
            {formatNumber(analyticsData.conversions)}
          </div>
          <div className="text-zion-slate-light text-sm">Conversions</div>
          <div className="text-zion-cyan text-xs mt-2">+8.3% vs last period</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="p-6 bg-gradient-to-br from-zion-cyan/20 to-zion-blue/20 border border-zion-cyan/30 rounded-xl"
        >
          <div className="text-2xl font-bold text-zion-cyan">
            {formatCurrency(analyticsData.revenue)}
          </div>
          <div className="text-zion-slate-light text-sm">Revenue</div>
          <div className="text-zion-cyan text-xs mt-2">+15.7% vs last period</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="p-6 bg-gradient-to-br from-zion-slate/20 to-zion-blue/20 border border-zion-slate/30 rounded-xl"
        >
          <div className="text-2xl font-bold text-zion-slate-light">
            {analyticsData.bounceRate.toFixed(1)}%
          </div>
          <div className="text-zion-slate-light text-sm">Bounce Rate</div>
          <div className="text-red-400 text-xs mt-2">-2.1% vs last period</div>
        </motion.div>
      </div>

      {/* Detailed Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Pages */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="p-6 bg-white/5 backdrop-blur-sm border border-zion-slate/20 rounded-xl"
        >
          <h3 className="text-xl font-semibold text-zion-slate-light mb-4">
            Top Pages
          </h3>
          <div className="space-y-3">
            {analyticsData.topPages.map((page, index) => (
              <div key={page.page} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                    index === 0 ? 'bg-yellow-500 text-black' :
                    index === 1 ? 'bg-gray-400 text-black' :
                    index === 2 ? 'bg-amber-600 text-white' : 'bg-zion-slate/20 text-zion-slate-light'
                  }`}>
                    {index + 1}
                  </div>
                  <span className="text-zion-slate-light">{page.page}</span>
                </div>
                <span className="text-zion-cyan font-semibold">
                  {formatNumber(page.views)}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Traffic Sources */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
          className="p-6 bg-white/5 backdrop-blur-sm border border-zion-slate/20 rounded-xl"
        >
          <h3 className="text-xl font-semibold text-zion-slate-light mb-4">
            Traffic Sources
          </h3>
          <div className="space-y-4">
            {analyticsData.trafficSources.map((source) => (
              <div key={source.source}>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-zion-slate-light">{source.source}</span>
                  <span className="text-zion-cyan font-semibold">{source.percentage}%</span>
                </div>
                <div className="w-full bg-zion-slate/20 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-zion-cyan to-zion-purple h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${source.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Device Types */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="p-6 bg-white/5 backdrop-blur-sm border border-zion-slate/20 rounded-xl"
      >
        <h3 className="text-xl font-semibold text-zion-slate-light mb-4">
          Device Types
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {analyticsData.deviceTypes.map((device) => (
            <div key={device.device} className="text-center">
              <div className="text-3xl font-bold text-zion-cyan mb-2">
                {device.percentage}%
              </div>
              <div className="text-zion-slate-light">{device.device}</div>
              <div className="mt-2">
                <div className="w-full bg-zion-slate/20 rounded-full h-3">
                  <div
                    className="bg-gradient-to-r from-zion-blue to-zion-purple h-3 rounded-full transition-all duration-1000"
                    style={{ width: `${device.percentage}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Performance Insights */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="p-6 bg-gradient-to-r from-zion-blue/10 to-zion-purple/10 border border-zion-blue/20 rounded-xl"
      >
        <h3 className="text-xl font-semibold text-zion-slate-light mb-4">
          Performance Insights
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-zion-cyan font-semibold mb-2">Optimization Opportunities</h4>
            <ul className="text-zion-slate text-sm space-y-1">
              <li>• Mobile conversion rate can be improved by 15%</li>
              <li>• Page load speed optimization needed for /services</li>
              <li>• A/B testing recommended for pricing page</li>
            </ul>
          </div>
          <div>
            <h4 className="text-zion-purple font-semibold mb-2">Key Achievements</h4>
            <ul className="text-zion-slate text-sm space-y-1">
              <li>• 25% increase in organic traffic</li>
              <li>• 18% improvement in session duration</li>
              <li>• 12% reduction in bounce rate</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
}