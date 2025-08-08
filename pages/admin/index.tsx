import AdminTable from '../../components/admin/AdminTable';

export default function AdminDashboard() {
  return (
    <div className="space-y-4">
      <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-slate-900 via-gray-700 to-zinc-700 p-6 text-white shadow">
        <h1 className="text-2xl font-semibold">Admin Dashboard</h1>
        <p className="opacity-90">Manage users, CVs, projects, services, job posts, and equipment.</p>
      </div>
      <AdminTable />
    </div>
  );
}