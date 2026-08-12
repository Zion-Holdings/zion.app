import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata = {
  title: 'Autonomous Agent Skill Orchestrator | Zion Tech Group',
  description: 'Orchestrate autonomous agent skills and workflows across your stack.',
};

export default function AutonomousAgentSkillOrchestratorPage() {
  return (
    <div className='min-h-screen bg-slate-950 text-white'>
      <Navigation />
      <main className='container-page py-16'>
        <h1 className='text-4xl font-bold text-white mb-4'>Autonomous Agent Skill Orchestrator</h1>
        <p className='text-slate-300 mb-6'>Coordinate autonomous agents, skills, and tool access with policy guardrails.</p>
        <div className='flex flex-col sm:flex-row gap-4'>
          <Link href='/services/' className='btn-primary'>Browse Services</Link>
          <Link href='/contact/' className='btn-secondary'>Contact Us</Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
