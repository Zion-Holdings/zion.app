import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata = {
  title: 'JSON to TypeScript Converter | Zion Tech Group',
  description: 'Convert JSON to TypeScript interfaces online.',
};

export default function JSONToTypeScriptConverterPage() {
  return (
    <div className='min-h-screen bg-slate-950 text-white'>
      <Navigation />
      <main className='container-page py-16'>
        <h1 className='text-4xl font-bold text-white mb-4'>JSON to TypeScript Converter</h1>
        <p className='text-slate-300 mb-6'>Paste JSON and get TypeScript types and interfaces.</p>
        <div className='flex flex-col sm:flex-row gap-4'>
          <Link href='/tools/' className='btn-primary'>Browse Tools</Link>
          <Link href='/contact/' className='btn-secondary'>Contact Us</Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
