import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { 
  ArrowRight, 
  Check, 
  Star, 
  Zap, 
  Shield, 
  Users, 
  Globe, 
  ExternalLink,
  TrendingUp,
  Clock,
  Target,
  Building,
  Rocket,
  Award,
  DollarSign,
  ChartBar,
  Lock,
  Cpu,
  Database,
  Cloud,
  Smartphone,
  Palette,
  Search,
  MessageSquare,
  FileText,
  Calendar,
  CreditCard,
  BarChart3,
  Settings,
  Zap as ZapIcon,
  Code,
  BookOpen,
  Activity,
  Database as DatabaseIcon,
  Play,
  Mail,
  Phone,
  MapPin,
  Sparkles,
  FlaskConical,
  Dna,
  Car,
  Leaf,
  Factory,
  Truck,
  Microscope,
  GraduationCap,
  ShieldCheck,
  Brain,
  Atom,
  Globe2,
  Bot,
  ChevronRight,
  Eye,
  Lightbulb,
  Target as TargetIcon,
  TrendingUp as TrendingUpIcon,
  Users as UsersIcon,
  Globe as GlobeIcon,
  Zap as ZapIcon2,
  Shield as ShieldIcon,
  Cpu as CpuIcon,
  Database as DatabaseIcon2,
  Cloud as CloudIcon,
  Smartphone as SmartphoneIcon,
  Palette as PaletteIcon,
  Search as SearchIcon,
  MessageSquare as MessageSquareIcon,
  FileText as FileTextIcon,
  Calendar as CalendarIcon,
  CreditCard as CreditCardIcon,
  BarChart3 as BarChart3Icon,
  Settings as SettingsIcon,
  Code as CodeIcon,
  BookOpen as BookOpenIcon,
  Activity as ActivityIcon,
  Play as PlayIcon,
  Mail as MailIcon,
  Phone as PhoneIcon,
  MapPin as MapPinIcon
} from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground';
import UltraFuturisticCard from '../components/ui/UltraFuturisticCard';
import { enhancedRealMicroSaasServices, getPopularServices, getServicesByCategory } from '../data/enhanced-real-micro-saas-services';
import { motion } from 'framer-motion';

export default function HomePage() {
  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const popularServices = getPopularServices().slice(0, 6);

  return (
    <UltraFuturisticBackground>
      <Head>
        <title>Zion Tech Group - Revolutionary Micro SAAS Services & AI Solutions</title>
        <meta name="description" content="Transform your business with 500+ cutting-edge micro SAAS services powered by quantum AI, autonomous systems, and revolutionary technology. First-to-market solutions with proven ROI." />
        <meta name="keywords" content="micro SAAS, AI services, quantum computing, autonomous systems, business automation, cybersecurity, fintech, healthcare analytics" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Zion Tech Group - Revolutionary Micro SAAS Services" />
        <meta property="og:description" content="500+ cutting-edge micro SAAS services powered by quantum AI and autonomous systems" />
        <meta property="og:url" content="https://ziontechgroup.com" />
        <meta property="og:type" content="website" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zion Tech Group - Revolutionary Micro SAAS Services" />
        <meta name="twitter:description" content="500+ cutting-edge micro SAAS services powered by quantum AI and autonomous systems" />
      </Head>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          {/* Main Headline */}
          <motion.h1 
            className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Revolutionary
            </span>
            <br />
            <span className="text-white">Micro SAAS Services</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p 
            className="text-xl sm:text-2xl lg:text-3xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Transform your business with <span className="text-cyan-400 font-semibold">500+ cutting-edge services</span> powered by 
            <span className="text-purple-400 font-semibold"> quantum AI</span>, 
            <span className="text-green-400 font-semibold"> autonomous systems</span>, and 
            <span className="text-pink-400 font-semibold"> revolutionary technology</span>
          </motion.p>

          {/* Key Benefits */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="flex items-center justify-center space-x-3 text-cyan-400">
              <Rocket className="w-6 h-6" />
              <span className="text-lg font-semibold">First-to-Market Solutions</span>
            </div>
            <div className="flex items-center justify-center space-x-3 text-purple-400">
              <Zap className="w-6 h-6" />
              <span className="text-lg font-semibold">Lightning-Fast Setup</span>
            </div>
            <div className="flex items-center justify-center space-x-3 text-green-400">
              <TrendingUp className="w-6 h-6" />
              <span className="text-lg font-semibold">Proven ROI</span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link href="/services">
              <Button 
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105"
              >
                Explore 500+ Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button 
                variant="outline"
                className="border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 transform hover:scale-105"
              >
                Get Started Today
                <Phone className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            className="text-center text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <p className="mb-2">
              <Phone className="inline w-4 h-4 mr-2" />
              {contactInfo.mobile}
            </p>
            <p className="mb-2">
              <Mail className="inline w-4 h-4 mr-2" />
              {contactInfo.email}
            </p>
            <p>
              <MapPin className="inline w-4 h-4 mr-2" />
              {contactInfo.address}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                500+ Revolutionary Services
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From quantum AI to autonomous systems, discover the future of business technology with our comprehensive suite of micro SAAS solutions
            </p>
          </motion.div>

          {/* Service Categories Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {[
              { icon: Brain, title: 'AI & Machine Learning', count: '150+', color: 'from-blue-500 to-indigo-600' },
              { icon: Atom, title: 'Quantum Computing', count: '75+', color: 'from-cyan-500 to-teal-600' },
              { icon: Shield, title: 'Cybersecurity', count: '100+', color: 'from-red-500 to-pink-600' },
              { icon: FlaskConical, title: 'Biomedical & Healthcare', count: '50+', color: 'from-emerald-500 to-green-600' },
              { icon: DollarSign, title: 'Financial Technology', count: '80+', color: 'from-green-500 to-emerald-600' },
              { icon: Globe, title: 'IoT & Edge Computing', count: '45+', color: 'from-indigo-500 to-purple-600' }
            ].map((category, index) => (
              <UltraFuturisticCard
                key={category.title}
                variant="quantum"
                className="text-center p-8"
                delay={index}
              >
                <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{category.title}</h3>
                <p className="text-3xl font-bold text-cyan-400 mb-4">{category.count}</p>
                <p className="text-gray-400">Cutting-edge solutions for modern businesses</p>
              </UltraFuturisticCard>
            ))}
          </motion.div>

          {/* Popular Services Showcase */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-8">
              Featured <span className="text-cyan-400">Revolutionary</span> Services
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {popularServices.map((service, index) => (
                <UltraFuturisticCard
                  key={service.id}
                  variant={index % 3 === 0 ? 'quantum' : index % 3 === 1 ? 'holographic' : 'neural'}
                  className="text-left p-6"
                  delay={index}
                >
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-3xl">{service.icon}</span>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-white">{service.price}</p>
                      <p className="text-sm text-gray-400">{service.period}</p>
                    </div>
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">{service.name}</h4>
                  <p className="text-gray-300 text-sm mb-4 line-clamp-2">{service.tagline}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-cyan-400 bg-cyan-400/10 px-2 py-1 rounded-full">
                      {service.category}
                    </span>
                    <Link href={service.link}>
                      <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-4 py-2 text-sm rounded-lg">
                        Learn More
                        <ArrowRight className="ml-1 w-4 h-4" />
                      </Button>
                    </Link>
                  </div>
                </UltraFuturisticCard>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <Link href="/services">
              <Button className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white px-10 py-4 text-xl font-semibold rounded-xl shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105">
                View All 500+ Services
                <ArrowRight className="ml-3 w-6 h-6" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Zion Tech Group */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900/50 via-purple-900/20 to-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Why Choose <span className="text-cyan-400">Zion Tech Group</span>?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We're not just another tech company. We're the pioneers of the future, delivering revolutionary solutions that transform industries.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {[
              { icon: Rocket, title: 'First-to-Market', description: 'Pioneering solutions that don\'t exist anywhere else' },
              { icon: Zap, title: 'Lightning Fast', description: 'Setup in hours, not months. Deploy instantly.' },
              { icon: Shield, title: 'Enterprise Security', description: 'Bank-level security with quantum encryption' },
              { icon: TrendingUp, title: 'Proven ROI', description: 'Average 300%+ ROI within 6 months' }
            ].map((feature, index) => (
              <UltraFuturisticCard
                key={feature.title}
                variant="cyberpunk"
                className="text-center p-6"
                delay={index}
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 text-sm">{feature.description}</p>
              </UltraFuturisticCard>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to <span className="text-cyan-400">Revolutionize</span> Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of forward-thinking companies already transforming their operations with our revolutionary micro SAAS services.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <Phone className="w-8 h-8 mx-auto mb-3 text-cyan-400" />
                <p className="text-white font-semibold">Call Us</p>
                <p className="text-gray-400">{contactInfo.mobile}</p>
              </div>
              <div className="text-center">
                <Mail className="w-8 h-8 mx-auto mb-3 text-purple-400" />
                <p className="text-white font-semibold">Email Us</p>
                <p className="text-gray-400">{contactInfo.email}</p>
              </div>
              <div className="text-center">
                <MapPin className="w-8 h-8 mx-auto mb-3 text-green-400" />
                <p className="text-white font-semibold">Visit Us</p>
                <p className="text-gray-400">{contactInfo.address}</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105">
                  Start Your Transformation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/services">
                <Button 
                  variant="outline"
                  className="border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 transform hover:scale-105"
                >
                  Explore Services
                  <Search className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </UltraFuturisticBackground>
  );
}
