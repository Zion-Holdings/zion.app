import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata = {
  title: 'File Analyzer | Zion Tech Group',
  description: 'Inspect file metadata, structure, and content summaries online.',
};

export default function FileAnalyzerPage() {
  return (
    <div className='min-h-screen bg-slate-950 text-white'>
      <Navigation />
      <main className='container-page py-16'>
        <h1 className='text-4xl font-bold text-white mb-4'>File Analyzer</h1>
        <p className='text-slate-300 mb-6'>Analyze file types, metadata, and structure without uploading sensitive data.</p>
        <div className='flex flex-col sm:flex-row gap-4'>
          <Link href='/tools/' className='btn-primary'>Browse Tools</Link>
          <Link href='/contact/' className='btn-secondary'>Contact Us</Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
