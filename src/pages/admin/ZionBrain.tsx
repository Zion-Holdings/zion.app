import { SEO } from '@/components/SEO';
import { Header } from '@/components/Header';
import { ProtectedRoute } from '@/components/ProtectedRoute';
import { ZionBrainDashboard } from '@/components/admin/zion-brain';

export default function ZionBrain() {
  return (
    <ProtectedRoute adminOnly={true}>
      <SEO title="Zion Brain - Admin" description="Manage prompt routing and reflex rules" />
      <Header />
      <main className="min-h-screen bg-background p-6">
        <ZionBrainDashboard />
      </main>
    </ProtectedRoute>
  );
}
