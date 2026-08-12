import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata = {
  title: 'Healthcare Solutions | Zion Tech Group',
  description: 'Healthcare IT, AI, compliance, and automation solutions for providers and payers.',
};

export default function HealthcareSolutionsPage() {
  return (
    <div className='min-h-screen bg-slate-950 text-white'>
      <Navigation />
      <main className='container-page py-16'>
        <h1 className='text-4xl font-bold text-white mb-4'>Healthcare Solutions</h1>
        <p className='text-slate-300 mb-6'>Purpose-built solutions for healthcare organizations, including HIPAA-ready AI, cloud, and security services.</p>
        <div className='flex flex-col sm:flex-row gap-4'>
          <Link href='/services/' className='btn-primary'>Browse Services</Link>
          <Link href='/contact/' className='btn-secondary'>Contact Us</Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
