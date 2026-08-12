import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata = {
  title: 'Financial Services Solutions | Zion Tech Group',
  description: 'AI, IT, automation, and security solutions for banks, insurers, and fintechs.',
};

export default function FinancialServicesPage() {
  return (
    <div className='min-h-screen bg-slate-950 text-white'>
      <Navigation />
      <main className='container-page py-16'>
        <h1 className='text-4xl font-bold text-white mb-4'>Financial Services Solutions</h1>
        <p className='text-slate-300 mb-6'>Enterprise solutions for banking, insurance, and fintech — from AI risk analytics to secure cloud infrastructure.</p>
        <div className='flex flex-col sm:flex-row gap-4'>
          <Link href='/services/' className='btn-primary'>Browse Services</Link>
          <Link href='/contact/' className='btn-secondary'>Contact Us</Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
