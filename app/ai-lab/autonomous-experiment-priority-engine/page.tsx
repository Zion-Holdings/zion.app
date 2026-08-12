import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata = {
  title: 'Autonomous Experiment Priority Engine | Zion Tech Group',
  description: 'Prioritize experiments autonomously using impact, feasibility, and signal strength.',
};

export default function AutonomousExperimentPriorityEnginePage() {
  return (
    <div className='min-h-screen bg-slate-950 text-white'>
      <Navigation />
      <main className='container-page py-16'>
        <h1 className='text-4xl font-bold text-white mb-4'>Autonomous Experiment Priority Engine</h1>
        <p className='text-slate-300 mb-6'>Rank experiments by expected impact and execution cost.</p>
        <div className='flex flex-col sm:flex-row gap-4'>
          <Link href='/services/' className='btn-primary'>Browse Services</Link>
          <Link href='/contact/' className='btn-secondary'>Contact Us</Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
