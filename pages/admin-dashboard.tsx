import React, { useState, useEffect, useCallback } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useAuth } from '../src/contexts/AuthContext';
import RealTimeMonitor from '../components/admin/RealTimeMonitor';
import SystemHealthMonitor from '../components/admin/SystemHealthMonitor';

const AdminDashboard: NextPage = () => {
  const router = useRouter();
  const { user, loading } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    if (!loading && !user) {
      router.push('/auth/login');
    }
  }, [user, loading, router]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <>
      <Head>
        <title>Admin Dashboard - Zion App</title>
        <meta name="description" content="Admin dashboard for system monitoring and management" />
      </Head>
      
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Admin Dashboard</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white shadow rounded-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Real-Time Monitor</h2>
              <RealTimeMonitor 
                data={{ status: 'online', uptime: '99.9%' }}
                onRefresh={() => {}}
                isLoading={false}
              />
            </div>
            
            <div className="bg-white shadow rounded-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">System Health</h2>
              <SystemHealthMonitor 
                systemHealth={{
                  cpuUsage: 45,
                  memoryUsage: 60,
                  diskUsage: 30,
                  networkUsage: 25,
                  timestamp: new Date().toISOString(),
                  activeAgents: 12,
                  totalAgents: 15,
                  systemHealth: 'healthy'
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;