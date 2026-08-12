import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata = {
  title: 'Autonomous RAG Knowledge Workspace | Zion Tech Group',
  description: 'RAG knowledge workspace for retrieval, grounding, and knowledge management.',
};

export default function AutonomousRAGKnowledgeWorkspacePage() {
  return (
    <div className='min-h-screen bg-slate-950 text-white'>
      <Navigation />
      <main className='container-page py-16'>
        <h1 className='text-4xl font-bold text-white mb-4'>Autonomous RAG Knowledge Workspace</h1>
        <p className='text-slate-300 mb-6'>Manage retrieval pipelines, grounding rules, and knowledge bases.</p>
        <div className='flex flex-col sm:flex-row gap-4'>
          <Link href='/services/' className='btn-primary'>Browse Services</Link>
          <Link href='/contact/' className='btn-secondary'>Contact Us</Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
