import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
const AboutPage: React.FC = () => {
  const values = [
    {
      icon: Brain,
      title: "Innovation First",
      description: "We push the boundaries of what's possible through cutting-edge technology and creative problem-solving.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Shield,
      title: "Trust & Security",
      description: "Building secure, reliable solutions that our clients can depend on for their most critical operations.",
      color: "from-red-500 to-orange-500"
    },
    {
      icon: Users,
      title: "Human-Centric",
      description: "Technology should serve humanity, enhancing human capabilities and improving quality of life.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "Creating solutions that address global challenges and benefit communities worldwide.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Rocket,
      title: "Excellence",
      description: "Maintaining the highest standards of quality and performance in everything we deliver.",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: Heart,
      title: "Integrity",
      description: "Operating with transparency, honesty, and ethical principles in all our business relationships.",
      color: "from-pink-500 to-rose-500"
=======
  Brain, Shield, Rocket, Cpu, Database, Atom, Target, Star, 
  Sparkles, Zap, Users, Award, Clock, CheckCircle, Globe, Code, Server,
  TrendingUp, BarChart3, Cloud, Network, Lightbulb, Flame, Zap as ZapIcon,
  ArrowRight, ChevronRight, MapPin, Mail, Phone, Globe as GlobeIcon
} from 'lucide-react';
import SmartHeader from '../components/SmartHeader';
import SmartFooter from '../components/SmartFooter';

export default function AboutPage() {
  const stats = [
    { number: '500+', label: 'Projects Delivered', icon: CheckCircle, color: 'from-blue-500 to-cyan-500' },
    { number: '50+', label: 'Enterprise Clients', icon: Users, color: 'from-purple-500 to-pink-500' },
    { number: '99.9%', label: 'Uptime Guarantee', icon: Shield, color: 'from-green-500 to-emerald-500' },
    { number: '24/7', label: 'Support Available', icon: Clock, color: 'from-orange-500 to-red-500' }
  ];

  const values = [
    {
      icon: Brain,
      title: 'Innovation First',
      description: 'We push the boundaries of what\'s possible, constantly exploring emerging technologies and creating breakthrough solutions.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Shield,
      title: 'Trust & Security',
      description: 'Security is at the core of everything we do. We build solutions that protect your business and data with quantum-resistant technology.',
      color: 'from-red-500 to-orange-500'
    },
    {
      icon: Rocket,
      title: 'Excellence',
      description: 'We strive for excellence in every project, delivering solutions that exceed expectations and drive measurable business value.',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: Users,
      title: 'Client Success',
      description: 'Your success is our success. We partner with you to understand your needs and deliver solutions that transform your business.',
      color: 'from-emerald-500 to-teal-500'
    }
  ];

  const technologies = [
    { name: 'Artificial Intelligence', icon: Brain, description: 'Advanced AI and machine learning solutions', color: 'from-purple-500 to-pink-500' },
    { name: 'Quantum Computing', icon: Atom, description: 'Quantum-powered computing and cryptography', color: 'from-blue-500 to-cyan-500' },
    { name: 'Cybersecurity', icon: Shield, description: 'Quantum-resistant security solutions', color: 'from-red-500 to-orange-500' },
    { name: 'Edge Computing', icon: Network, description: 'Intelligent edge orchestration platforms', color: 'from-yellow-500 to-orange-500' },
    { name: 'Space Technology', icon: Rocket, description: 'AI-powered space exploration solutions', color: 'from-indigo-500 to-purple-500' },
    { name: 'Biotechnology', icon: ZapIcon, description: 'Neural interfaces and biomedical innovations', color: 'from-pink-500 to-rose-500' }
  ];

  const team = [
    {
      name: 'Kleber',
      role: 'Founder & CEO',
      description: 'Visionary leader driving innovation in AI and quantum technologies',
      image: '/api/placeholder/150/150',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      name: 'AI Team',
      role: 'AI Research & Development',
      description: 'Expert engineers and researchers pushing the boundaries of artificial intelligence',
      image: '/api/placeholder/150/150',
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Quantum Team',
      role: 'Quantum Computing',
      description: 'Specialists in quantum algorithms and quantum-resistant cryptography',
      image: '/api/placeholder/150/150',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Security Team',
      role: 'Cybersecurity',
      description: 'Experts in threat detection and zero-trust security architectures',
      image: '/api/placeholder/150/150',
      color: 'from-red-500 to-orange-500'
    }
  ];

  const milestones = [
    {
      year: '2020',
      title: 'Company Founded',
      description: 'Zion Tech Group was established with a vision to revolutionize technology through AI and quantum computing.'
    },
    {
      year: '2021',
      title: 'First AI Solutions',
      description: 'Launched our first AI-powered business intelligence and automation solutions.'
    },
    {
      year: '2022',
      title: 'Quantum Breakthrough',
      description: 'Developed quantum-resistant cybersecurity solutions and quantum neural networks.'
    },
    {
      year: '2023',
      title: 'Space Technology',
      description: 'Expanded into space technology with AI-powered satellite management systems.'
    },
    {
      year: '2024',
      title: 'Global Expansion',
      description: 'Reached 50+ enterprise clients and expanded our service portfolio to 100+ solutions.'
    },
    {
      year: '2025',
      title: 'Future Vision',
      description: 'Continuing to push boundaries with autonomous AI systems and consciousness technology.'
    }
  ];

=======
import React from 'react';
import Head from 'next/head';
import Button from '../components/ui/Button';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <Head>
        <title>About | Zion Tech Group</title>
        <meta name="description" content="About Zion Tech Group: AI, micro SaaS, and enterprise IT innovators." />
        <link rel="canonical" href="https://ziontechgroup.com/about" />
      </Head>

      <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8 bg-black text-white">
        <div className="max-w-6xl mx-auto space-y-10">
          <header className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4">About Zion Tech Group</h1>
            <p className="text-gray-300 text-lg">We build real, outcome-oriented AI, micro SaaS, and enterprise IT solutions.</p>
          </header>

          <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-black/40 border border-gray-700/60">
              <div className="text-sm text-gray-400 mb-2">What we do</div>
              <div className="text-gray-200">200+ production-ready services across AI, DevOps, Security, Cloud, and Data.</div>
            </div>
            <div className="p-6 rounded-2xl bg-black/40 border border-gray-700/60">
              <div className="text-sm text-gray-400 mb-2">How we deliver</div>
              <div className="text-gray-200">Template-driven deployments, SLAs, clear pricing, and measurable ROI.</div>
            </div>
            <div className="p-6 rounded-2xl bg-black/40 border border-gray-700/60">
              <div className="text-sm text-gray-400 mb-2">Who we serve</div>
              <div className="text-gray-200">Startups to enterprises across healthcare, fintech, manufacturing, media, and public sector.</div>
            </div>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-black/40 border border-gray-700/60">
              <h2 className="text-2xl font-semibold mb-3">Contact</h2>
              <ul className="text-gray-300 space-y-2">
                <li>Mobile: <a className="text-cyan-300" href="tel:+13024640950">+1 302 464 0950</a></li>
                <li>E-mail: <a className="text-purple-300" href="mailto:kleber@ziontechgroup.com">kleber@ziontechgroup.com</a></li>
                <li>Address: <span className="text-gray-200">364 E Main St STE 1008 Middletown DE 19709</span></li>
                <li>Website: <a className="text-cyan-300" href="https://ziontechgroup.com">ziontechgroup.com</a></li>
              </ul>
            </div>
            <div className="p-6 rounded-2xl bg-black/40 border border-gray-700/60">
              <h2 className="text-2xl font-semibold mb-3">Get Started</h2>
              <p className="text-gray-300 mb-4">Book a consultation to map your roadmap to shipped outcomes.</p>
              <div className="flex gap-3">
                <Button href="/contact" className="bg-gradient-to-r from-cyan-600 to-blue-700 text-white">Talk to Sales</Button>
                <Button href="/pricing" variant="outline" className="border border-gray-600 text-gray-200">Pricing</Button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
