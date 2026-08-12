import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata = {
  title: 'PDF Generator | Zion Tech Group',
  description: 'Generate PDF documents from structured data and templates.',
};

export default function PDFGeneratorPage() {
  return (
    <div className='min-h-screen bg-slate-950 text-white'>
      <Navigation />
      <main className='container-page py-16'>
        <h1 className='text-4xl font-bold text-white mb-4'>PDF Generator</h1>
        <p className='text-slate-300 mb-6'>Create PDFs from templates, markdown, or structured JSON inputs.</p>
        <div className='flex flex-col sm:flex-row gap-4'>
          <Link href='/tools/' className='btn-primary'>Browse Tools</Link>
          <Link href='/contact/' className='btn-secondary'>Contact Us</Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
