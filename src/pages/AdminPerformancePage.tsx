import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
import { useAuth } from '@/hooks/useAuth';
import { useRouter } from 'next/router';
import AdminLayout from '@/components/admin/AdminLayout';

const DevDashboard = dynamic(() => import('@/pages/dev/dashboard'), {
  loading: () => (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto" />
        <p className="mt-2 text-gray-600">Loading metrics...</p>
      </div>
    </div>
  ),
  ssr: false,
});

const allowedRoles = ['founder', 'admin', 'finance'];

export default function AdminPerformancePage() {
  const { user, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading) {
      if (!user) {
        router.replace('/login');
      } else if (!allowedRoles.includes((user.role as string) || '')) {
        router.replace('/admin');
      }
    }
  }, [user, isLoading, router]);

  if (isLoading || !user) {
    return (
      <AdminLayout>
        <div className="flex justify-center items-center h-screen">
          <p className="text-lg">Checking access...</p>
        </div>
      </AdminLayout>
    );
  }

  if (!allowedRoles.includes((user.role as string) || '')) {
    return (
      <AdminLayout>
        <div className="flex flex-col justify-center items-center h-screen text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-4">Access Denied</h1>
          <button onClick={() => router.push('/admin')} className="mt-4 bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700">
            Go to Admin Dashboard
          </button>
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <DevDashboard />
    </AdminLayout>
  );
}
