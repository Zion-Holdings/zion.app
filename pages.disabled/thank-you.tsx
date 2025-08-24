import React from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircle, 
  Mail, 
  Clock, 
  Users, 
  ArrowRight,
  Home,
  Briefcase,
  Phone
} from 'lucide-react';
import Layout from '../components/layout/Layout';
import SEO from '../components/SEO';
import Link from 'next/link';

const ThankYouPage: React.FC = () => {
  const nextSteps = [
    {
      title: 'Confirmation Email',
      description: 'You\'ll receive a confirmation email within the next few minutes.',
      icon:

export default function Thank-youPage() {
  return (
    <Mail className="w-6 h-6" />,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Team Review',
      description: 'Our team will review your inquiry within 24 hours.',
      icon: <Users className="w-6 h-6" />,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Follow-up Call',
      description: 'We\'ll schedule a follow-up call to discuss your needs in detail.',
      icon: <Phone className="w-6 h-6" />,
      color: 'from-green-500 to-emerald-500'
    }
  ];

	return (
		<>
        <SEO title={pageTitle} description={pageDescription} url="/thank-you" />
        <section className="relative pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="container mx-auto px-4 max-w-2xl text-center">
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight gradient-text-cyan-purple">Thank you</h1>
        <p className="mt-4 text-gray-300">Your message has been received. Our team will get back to you shortly.</p>
        <div className="mt-8 flex items-center justify-center gap-4">
        <Link href="/" className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-white text-black font-semibold hover:bg-gray-200 transition-colors">Back to Home</Link>
        <Link href="/services" className="inline-flex items-center justify-center px-6 py-3 rounded-md border border-white/30 text-white font-semibold hover:bg-white/10 transition-colors">Explore Services</Link>
              </div>
              </div>
        </section>
        </>
	);
}

  );
}