import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata = {
  title: 'Autonomous Incident Commander | Zion Tech Group',
  description: 'Autonomous incident command for faster response, escalation, and recovery workflows.',
};

export default function AutonomousIncidentCommanderPage() {
  return (
    <div className='min-h-screen bg-slate-950 text-white'>
      <Navigation />
      <main className='container-page py-16'>
        <h1 className='text-4xl font-bold text-white mb-4'>Autonomous Incident Commander</h1>
        <p className='text-slate-300 mb-6'>Automate incident triage, escalation, and recovery playbooks.</p>
        <div className='flex flex-col sm:flex-row gap-4'>
          <Link href='/services/' className='btn-primary'>Browse Services</Link>
          <Link href='/contact/' className='btn-secondary'>Contact Us</Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
