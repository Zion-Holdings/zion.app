import React from 'react';
import AdminLayout from '@/components/admin/AdminLayout';

export default function AdminDashboard() {
  return (
    <AdminLayout>
      <div className="space-y-4">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        <p>Select a section from the sidebar.</p>
      </div>
    </AdminLayout>
  );
}
