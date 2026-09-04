import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata = {
  title: 'Autonomous Conversion Copilot | Zion Tech Group',
  description: 'AI-powered conversion copilot for funnel optimization and revenue acceleration.',
};

export default function AutonomousConversionCopilotPage() {
  return (
    <div className='min-h-screen bg-slate-950 text-white'>
      <Navigation />
      <main className='container-page py-16'>
        <h1 className='text-4xl font-bold text-white mb-4'>Autonomous Conversion Copilot</h1>
        <p className='text-slate-300 mb-6'>Boost conversions with autonomous copy, offers, and funnel optimization.</p>
        <div className='flex flex-col sm:flex-row gap-4'>
          <Link href='/services/' className='btn-primary'>Browse Services</Link>
          <Link href='/contact/' className='btn-secondary'>Contact Us</Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
