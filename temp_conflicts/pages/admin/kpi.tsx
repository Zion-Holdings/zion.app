import dynamic from 'next/dynamic';

const KpiDashboard = dynamic(() => import('../../components/dashboard/KpiDashboard'), {
  ssr: false,
});

export default function AdminKpiPage() {
  return <KpiDashboard admin />;
}