import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata = {
  title: 'Autonomous Revenue Forecast Studio | Zion Tech Group',
  description: 'Autonomous revenue forecasting and pipeline analytics studio.',
};

export default function AutonomousRevenueForecastStudioPage() {
  return (
    <div className='min-h-screen bg-slate-950 text-white'>
      <Navigation />
      <main className='container-page py-16'>
        <h1 className='text-4xl font-bold text-white mb-4'>Autonomous Revenue Forecast Studio</h1>
        <p className='text-slate-300 mb-6'>Forecast revenue, analyze pipeline, and surface forecast risks automatically.</p>
        <div className='flex flex-col sm:flex-row gap-4'>
          <Link href='/services/' className='btn-primary'>Browse Services</Link>
          <Link href='/contact/' className='btn-secondary'>Contact Us</Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
