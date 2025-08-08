import Link from 'next/link';
import DashboardLayout from '../../components/layout/Layout';
import type { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const cookie = req.headers.cookie || '';
  const role = cookie.split(';').map(s => s.trim()).find(s => s.startsWith('zion_role='))?.split('=')[1];
  if (role !== 'superadmin') return { redirect: { destination: '/unauthorized', permanent: false } };
  return { props: {} };
};

export default function AutomationStatusPage() {
  return (
    <DashboardLayout>
      <div className="space-y-4">
        <h1 className="text-2xl font-semibold">Admin Automation Status</h1>
        <p className="text-gray-600 dark:text-gray-400">Monitor automation systems and reports.</p>
        <div>
          <Link href="/admin/feedback-insights"><a className="px-4 py-2 rounded bg-gray-900 text-white">Open Feedback Insights</a></Link>
        </div>
      </div>
    </DashboardLayout>
  );
}