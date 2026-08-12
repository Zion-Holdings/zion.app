import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata = {
  title: 'Deploy Drift Dashboard | Zion Tech Group',
  description: 'Deploy drift monitoring dashboard for CI/CD and release validation.',
};

export default function DeployDriftDashboardPage() {
  return (
    <div className='min-h-screen bg-slate-950 text-white'>
      <Navigation />
      <main className='container-page py-16'>
        <h1 className='text-4xl font-bold text-white mb-4'>Deploy Drift Dashboard</h1>
        <p className='text-slate-300 mb-6'>Monitor deployment drift, env mismatches, and rollout health in one place.</p>
        <div className='flex flex-col sm:flex-row gap-4'>
          <Link href='/services/' className='btn-primary'>Browse Services</Link>
          <Link href='/contact/' className='btn-secondary'>Contact Us</Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
