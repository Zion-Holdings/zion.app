import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata = {
  title: 'Autonomous Media Prompt Studio | Zion Tech Group',
  description: 'Generate, refine, and manage media prompts at scale.',
};

export default function AutonomousMediaPromptStudioPage() {
  return (
    <div className='min-h-screen bg-slate-950 text-white'>
      <Navigation />
      <main className='container-page py-16'>
        <h1 className='text-4xl font-bold text-white mb-4'>Autonomous Media Prompt Studio</h1>
        <p className='text-slate-300 mb-6'>Structured prompt authoring for images, video, and audio workflows.</p>
        <div className='flex flex-col sm:flex-row gap-4'>
          <Link href='/services/' className='btn-primary'>Browse Services</Link>
          <Link href='/contact/' className='btn-secondary'>Contact Us</Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
