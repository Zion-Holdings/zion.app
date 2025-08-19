import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function ReportsPage() {
  const reportCategories = [
    {
      title: "Automation Health",
      description: "Monitor the health and performance of all autonomous systems",
      icon: "📊",
      link: "/reports/automation-health",
      color: "blue"
    },
    {
      title: "Performance Metrics",
      description: "Track system performance, uptime, and optimization metrics",
      icon: "⚡",
      link: "/reports/performance",
      color: "green"
    },
    {
      title: "Security Reports",
      description: "View security audits, threat detection, and vulnerability reports",
      icon: "🔒",
      link: "/reports/security",
      color: "red"
    },
    {
      title: "Content Analytics",
      description: "Analyze content performance, engagement, and optimization",
      icon: "📈",
      link: "/reports/content",
      color: "purple"
    }
  ];

  const recentReports = [
    {
      title: "Weekly Performance Report",
      date: "2025-01-17",
      status: "Completed",
      type: "Performance"
    },
    {
      title: "Security Audit Report",
      date: "2025-01-16",
      status: "Completed",
      type: "Security"
    },
    {
      title: "Content Generation Report",
      date: "2025-01-15",
      status: "In Progress",
      type: "Content"
    }
  ];

  return (
    <>
      <Head>
        <title>Reports | Zion - System Analytics & Insights</title>
        <meta name="description" content="Access comprehensive reports on automation health, performance metrics, and system analytics." />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              System Reports
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Comprehensive insights into your autonomous systems, performance metrics, and operational health
            </p>
          </div>
        </div>

        {/* Report Categories */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Report Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reportCategories.map((category, index) => (
              <Link 
                key={index}
                href={category.link}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{category.title}</h3>
                <p className="text-gray-600 text-sm">{category.description}</p>
              </Link>
            ))}
          </div>

          {/* Recent Reports */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Recent Reports</h2>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900">Latest Activity</h3>
              </div>
              <div className="divide-y divide-gray-200">
                {recentReports.map((report, index) => (
                  <div key={index} className="px-6 py-4 hover:bg-gray-50 transition-colors">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold text-gray-900">{report.title}</h4>
                        <p className="text-sm text-gray-500">{report.date} • {report.type}</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        report.status === 'Completed' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {report.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="mt-20 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Quick Actions</h2>
            <div className="space-x-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
                Generate New Report
              </button>
              <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 px-8 rounded-lg transition-colors">
                Export All Reports
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}