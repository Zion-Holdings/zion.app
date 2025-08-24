import dynamic from 'next/dynamic';

const KpiDashboard = dynamic(() => import('../../components/dashboard/KpiDashboard'), {
  ssr: false,
});

export default function MetricsDashboardPage() {
  return

export default function MetricsPage() {
  return (
    <KpiDashboard admin={false} />;
}
  );
}