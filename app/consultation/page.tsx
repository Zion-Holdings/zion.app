'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Free Consultation | Zion Tech Group',
  description:
    'Book a free consultation with the Zion Tech Group team to discuss AI, automation, and enterprise IT solutions tailored to your business.',
  alternates: { canonical: '/consultation/' },
};

export default function ConsultationPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/contact/');
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900">
      <div className="max-w-xl mx-auto px-4 text-center">
        <h1 className="text-3xl font-bold text-white mb-4">Book a Free Consultation</h1>
        <p className="text-slate-300 mb-6">
          You are being redirected to our contact page where you can schedule a free consultation
          with the Zion Tech Group team. We&apos;ll discuss your AI, automation, and enterprise IT needs
          and tailor a solution that fits your business goals.
        </p>
        <p className="text-slate-400 mb-8 text-sm">
          Topics we cover: AI strategy, cloud migration, cybersecurity, managed IT, DevOps automation,
          and custom software development. No commitment required.
        </p>
        <Link
          href="/contact/"
          className="inline-flex items-center rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 text-sm font-semibold text-white hover:opacity-90 transition-opacity"
        >
          Continue to Contact Page
        </Link>
      </div>
    </div>
  );
}
