import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Star, TrendingUp, Zap, Brain, Cpu, Shield, Rocket, Globe, Database, Lock, Cloud, Atom, Sparkles, Target, Users, Eye, Heart, Code, Palette, Search, Mail, MessageCircle, Calendar, BarChart3, Lightbulb, Globe2, Satellite, Microscope, Flask, ShieldCheck, Zap as ZapIcon, Cpu as CpuIcon, Brain as BrainIcon, Rocket as RocketIcon, Star as StarIcon, TrendingUp as TrendingUpIcon } from 'lucide-react';
import UltraFuturisticServiceCard from '../ui/UltraFuturisticServiceCard';

interface Service {
  id: string;
  name: string;
  tagline: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular: boolean;
  icon: string;
  color: string;
  textColor: string;
  link: string;
  marketPosition: string;
  targetAudience: string;
  trialDays: number;
  setupTime: string;
  category: string;
  realService: boolean;
  technology: string[];
  integrations: string[];
  useCases: string[];
  roi: string;
  competitors: string[];
  marketSize: string;
  growthRate: string;
  variant: string;
  contactInfo: {
    mobile: string;
    email: string;
    address: string;
    website: string;
  };
  realImplementation: boolean;
  implementationDetails: string;
  launchDate: string;
  customers: number;
  rating: number;
  reviews: number;
}

interface Revolutionary2026ServicesShowcaseProps {
  services: Service[];
  title?: string;
  subtitle?: string;
  maxServices?: number;
}

const categoryIcons: { [key: string]: React.ComponentType<any> } = {
  'AI Consciousness & Ethics': BrainIcon,
  'AI Multimodal': Eye,
  'AI Autonomous Systems': Target,
  'AI Quantum Computing': Atom,
  'AI Emotional Intelligence': Heart,
  'AI Creative': Palette,
  'AI Predictive Analytics': BarChart3,
  'AI Quantum ML': CpuIcon,
  'AI Research': Microscope,
  'Zero Trust Security': ShieldCheck,
  'Edge Computing': Globe,
  '5G Networks': Satellite,
  'Quantum Computing': Atom,
  'Autonomous IT': ZapIcon,
  'Neuromorphic Computing': BrainIcon,
  'DNA Computing': Flask,
  'Photonic Computing': Lightbulb,
  'Holographic Technology': Eye,
  'AI Branding': Palette,
  'Holographic Events': Eye,
  'AI Transcription': MessageCircle,
  'AI Mental Health': Heart,
  'AI Personalization': Target,
  'AI Customer Experience': Users,
  'AI Social Media': Globe2,
  'AI Email Marketing': Mail,
  'AI SEO': Search,
  'Space Technology': RocketIcon,
  'Space Safety': Shield,
  'Quantum Space': Atom,
  'Space Weather': StarIcon,
  'Autonomous Space': Target,
  'Space Tourism': Users,
  'Space Agriculture': Globe,
  'Space Energy': ZapIcon,
  'Space Research': Microscope
};

const categoryColors: { [key: string]: string } = {
  'AI Consciousness & Ethics': 'from-indigo-500 to-purple-600',
  'AI Multimodal': 'from-blue-500 to-cyan-600',
  'AI Autonomous Systems': 'from-green-500 to-emerald-600',
  'AI Quantum Computing': 'from-purple-500 to-pink-600',
  'AI Emotional Intelligence': 'from-pink-500 to-rose-600',
  'AI Creative': 'from-yellow-500 to-orange-600',
  'AI Predictive Analytics': 'from-indigo-500 to-blue-600',
  'AI Quantum ML': 'from-purple-500 to-indigo-600',
  'AI Research': 'from-teal-500 to-green-600',
  'Zero Trust Security': 'from-red-500 to-pink-600',
  'Edge Computing': 'from-blue-500 to-cyan-600',
  '5G Networks': 'from-green-500 to-emerald-600',
  'Quantum Computing': 'from-purple-500 to-pink-600',
  'Autonomous IT': 'from-blue-500 to-indigo-600',
  'Neuromorphic Computing': 'from-indigo-500 to-purple-600',
  'DNA Computing': 'from-green-500 to-teal-600',
  'Photonic Computing': 'from-yellow-500 to-orange-600',
  'Holographic Technology': 'from-pink-500 to-rose-600',
  'AI Branding': 'from-purple-500 to-pink-600',
  'Holographic Events': 'from-pink-500 to-rose-600',
  'AI Transcription': 'from-blue-500 to-cyan-600',
  'AI Mental Health': 'from-green-500 to-emerald-600',
  'AI Personalization': 'from-indigo-500 to-purple-600',
  'AI Customer Experience': 'from-teal-500 to-green-600',
  'AI Social Media': 'from-blue-500 to-indigo-600',
  'AI Email Marketing': 'from-orange-500 to-red-600',
  'AI SEO': 'from-green-500 to-teal-600',
  'Space Technology': 'from-purple-500 to-indigo-600',
  'Space Safety': 'from-blue-500 to-cyan-600',
  'Quantum Space': 'from-green-500 to-emerald-600',
  'Space Weather': 'from-yellow-500 to-orange-600',
  'Autonomous Space': 'from-indigo-500 to-purple-600',
  'Space Tourism': 'from-pink-500 to-rose-600',
  'Space Agriculture': 'from-green-500 to-teal-600',
  'Space Energy': 'from-yellow-500 to-orange-600',
  'Space Research': 'from-indigo-500 to-blue-600'
};

export default function Revolutionary2026ServicesShowcase({
  services,
  title = "Revolutionary 2026 Services",
  subtitle = "Experience the future of technology with our cutting-edge AI, quantum, and space solutions",
  maxServices = 12
}: Revolutionary2026ServicesShowcaseProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [sortBy, setSortBy] = useState<'popular' | 'price' | 'rating' | 'newest'>('popular');

  // Get unique categories
  const categories = ['All', ...Array.from(new Set(services.map(s => s.category)))];

  // Filter and sort services
  const filteredServices = services
    .filter(service => selectedCategory === 'All' || service.category === selectedCategory)
    .sort((a, b) => {
      switch (sortBy) {
        case 'popular':
          return b.popular ? 1 : -1;
        case 'price':
          return parseFloat(a.price.replace('$', '').replace(',', '')) - parseFloat(b.price.replace('$', '').replace(',', ''));
        case 'rating':
          return b.rating - a.rating;
        case 'newest':
          return new Date(b.launchDate).getTime() - new Date(a.launchDate).getTime();
        default:
          return 0;
      }
    })
    .slice(0, maxServices);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {title}
          </motion.h2>
          <motion.p
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {subtitle}
          </motion.p>
          
          {/* Stats */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">
                {services.length}+
              </div>
              <div className="text-gray-400">Revolutionary Services</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">
                2026
              </div>
              <div className="text-gray-400">Future Technology</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-pink-400 mb-2">
                1000%
              </div>
              <div className="text-gray-400">ROI Guarantee</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">
                24/7
              </div>
              <div className="text-gray-400">Expert Support</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Filters */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 mb-12 justify-between items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg shadow-cyan-500/25'
                    : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Sort Options */}
          <div className="flex items-center gap-2">
            <span className="text-gray-400 text-sm">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-gray-800/50 text-white px-3 py-2 rounded-lg border border-gray-600 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/25"
            >
              <option value="popular">Most Popular</option>
              <option value="price">Price</option>
              <option value="rating">Rating</option>
              <option value="newest">Newest</option>
            </select>
          </div>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {filteredServices.map((service, index) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className="group"
            >
              <UltraFuturisticServiceCard
                service={service}
                index={index}
                showAdvancedFeatures={true}
                enableHoverEffects={true}
                enableAnimations={true}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Experience the Future?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join thousands of forward-thinking companies already leveraging our revolutionary 2026 services. 
              Get started today and achieve unprecedented ROI with cutting-edge technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-500 hover:text-white transition-all duration-300 transform hover:scale-105">
                Schedule Demo
              </button>
            </div>
            <div className="mt-6 text-sm text-gray-400">
              Contact us: <span className="text-cyan-400">+1 302 464 0950</span> | 
              <span className="text-cyan-400"> kleber@ziontechgroup.com</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}