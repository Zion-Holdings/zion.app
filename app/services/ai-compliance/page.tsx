import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata = {
  title: 'AI Compliance | Zion Tech Group',
  description: 'AI governance, risk, and compliance services for regulated deployments.',
};

export default function AICompliancePage() {
  return (
    <div className='min-h-screen bg-slate-950 text-white'>
      <Navigation />
      <main className='container-page py-16'>
        <h1 className='text-4xl font-bold text-white mb-4'>AI Compliance</h1>
        <p className='text-slate-300 mb-6'>Governance, audit readiness, and compliance frameworks for AI systems.</p>
        <div className='flex flex-col sm:flex-row gap-4'>
          <Link href='/services/' className='btn-primary'>Browse Services</Link>
          <Link href='/contact/' className='btn-secondary'>Contact Us</Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
