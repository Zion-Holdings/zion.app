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
        <meta name="description" content="Transform your business with Zion Tech Group's cutting-edge micro SAAS services, quantum AI platforms, and autonomous systems. 500+ innovative solutions for the future." />
        <meta name="keywords" content="micro SAAS, AI services, quantum computing, autonomous systems, business automation, Zion Tech Group" />
        <meta property="og:title" content="Zion Tech Group - Revolutionary Micro SAAS Services" />
        <meta property="og:description" content="500+ cutting-edge micro SAAS services powered by quantum AI and autonomous systems." />
        <meta property="og:url" content="https://ziontechgroup.com" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://ziontechgroup.com" />
      </Head>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Revolutionary
              </span>
              <br />
              <span className="text-white">Micro SAAS Services</span>
            </h1>
            <p className="text-xl sm:text-2xl lg:text-3xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Transform your business with <span className="text-cyan-400 font-semibold">500+ cutting-edge solutions</span> powered by quantum AI, autonomous systems, and next-generation technology
            </p>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-12"
          >
            <UltraFuturisticCard variant="quantum" className="max-w-4xl mx-auto p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="flex flex-col items-center">
                  <Phone className="w-8 h-8 text-cyan-400 mb-3" />
                  <h3 className="text-lg font-semibold text-white mb-2">Mobile</h3>
                  <p className="text-gray-300">{contactInfo.mobile}</p>
                </div>
                <div className="flex flex-col items-center">
                  <Mail className="w-8 h-8 text-cyan-400 mb-3" />
                  <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                  <p className="text-gray-300">{contactInfo.email}</p>
                </div>
                <div className="flex flex-col items-center">
                  <MapPin className="w-8 h-8 text-cyan-400 mb-3" />
                  <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
                  <p className="text-gray-300 text-sm">{contactInfo.address}</p>
                </div>
              </div>
            </UltraFuturisticCard>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <Link href="/services">
              <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                <Rocket className="w-5 h-5 mr-2" />
                Explore Services
              </Button>
            </Link>
            <Link href="/contact">
              <Button className="bg-transparent border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 transform hover:scale-105">
                <MessageSquare className="w-5 h-5 mr-2" />
                Get Started
              </Button>
            </Link>
          </motion.div>

          {/* Key Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
          >
            {[
              { icon: Zap, title: 'Lightning Fast', desc: 'Setup in hours, not weeks' },
              { icon: Shield, title: 'Enterprise Security', desc: 'Bank-level protection' },
              { icon: TrendingUp, title: 'Proven ROI', desc: '200-1500% returns' },
              { icon: Globe, title: 'Global Scale', desc: 'Deploy anywhere instantly' }
            ].map((benefit, index) => (
              <UltraFuturisticCard key={index} variant="holographic" delay={index} className="text-center p-6">
                <benefit.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.desc}</p>
              </UltraFuturisticCard>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Showcase */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                500+ Revolutionary
              </span>
              <br />
              <span className="text-white">Micro SAAS Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From quantum AI platforms to autonomous manufacturing systems, discover the future of business technology
            </p>
          </motion.div>

          {/* Popular Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {popularServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <UltraFuturisticCard variant="neural" className="h-full">
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-3xl">{service.icon}</span>
                    {service.popular && (
                      <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full">
                        POPULAR
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                  <p className="text-gray-300 mb-4 line-clamp-3">{service.tagline}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-2xl font-bold text-cyan-400">
                      {service.price}
                      <span className="text-sm text-gray-400">{service.period}</span>
                    </div>
                    <div className="text-sm text-gray-400">
                      {service.trialDays} days free
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <p className="text-sm text-gray-400 mb-2">Key Features:</p>
                    <ul className="space-y-1">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-300">
                          <Check className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mt-auto">
                    <Link href={service.link}>
                      <Button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white py-3 rounded-lg transition-all duration-300 transform hover:scale-105">
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </div>
                </UltraFuturisticCard>
              </motion.div>
            ))}
          </div>

          {/* View All Services CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Link href="/services">
              <Button className="bg-transparent border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 transform hover:scale-105">
                View All 500+ Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Market Position & Advertising */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <UltraFuturisticCard variant="cyberpunk" className="p-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                  Market Leader
                </span>
                <br />
                <span className="text-white">in Micro SAAS Innovation</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Zion Tech Group leads the global micro SAAS revolution with patent-pending quantum AI and autonomous systems that deliver unprecedented business value.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {[
                { icon: Rocket, title: 'First-to-Market', desc: '40% more efficient than traditional solutions' },
                { icon: Award, title: 'Industry Recognition', desc: 'Award-winning innovation and excellence' },
                { icon: Globe, title: 'Global Deployment', desc: 'Trusted by businesses worldwide' },
                { icon: Shield, title: 'Enterprise Security', desc: 'Bank-level protection and compliance' },
                { icon: TrendingUp, title: 'Proven Results', desc: '1500%+ ROI in 18 months' },
                { icon: Clock, title: 'Lightning Setup', desc: 'Deploy in hours, not weeks' }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <item.icon className="w-12 h-12 text-orange-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-300">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Contact CTA */}
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready to revolutionize your business?
              </h3>
              <p className="text-gray-300 mb-6">
                Contact our expert team today for a personalized consultation
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link href={`tel:${contactInfo.mobile}`}>
                  <Button className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 transform hover:scale-105">
                    <Phone className="w-5 h-5 mr-2" />
                    Call Now
                  </Button>
                </Link>
                <Link href={`mailto:${contactInfo.email}`}>
                  <Button className="bg-transparent border-2 border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 transform hover:scale-105">
                    <Mail className="w-5 h-5 mr-2" />
                    Email Us
                  </Button>
                </Link>
              </div>
            </div>
          </UltraFuturisticCard>
        </div>
      </section>

      {/* Footer Contact */}
      <footer className="py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Zion Tech Group</h3>
              <p className="text-gray-300 mb-4">
                Leading the future of business technology with revolutionary micro SAAS services.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  <Globe className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  <Mail className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  <Phone className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-300">
                <p><Phone className="w-4 h-4 inline mr-2" />{contactInfo.mobile}</p>
                <p><Mail className="w-4 h-4 inline mr-2" />{contactInfo.email}</p>
                <p><MapPin className="w-4 h-4 inline mr-2" />{contactInfo.address}</p>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link href="/services" className="text-gray-300 hover:text-cyan-400 transition-colors">Services</Link></li>
                <li><Link href="/solutions" className="text-gray-300 hover:text-cyan-400 transition-colors">Solutions</Link></li>
                <li><Link href="/about" className="text-gray-300 hover:text-cyan-400 transition-colors">About</Link></li>
                <li><Link href="/contact" className="text-gray-300 hover:text-cyan-400 transition-colors">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Newsletter</h4>
              <p className="text-gray-300 mb-4">Stay updated with our latest innovations</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400"
                />
                <Button className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-r-lg">
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 Zion Tech Group. All rights reserved. | 
              <Link href="/privacy" className="ml-2 hover:text-cyan-400">Privacy Policy</Link> | 
              <Link href="/terms" className="ml-2 hover:text-cyan-400">Terms of Service</Link>
            </p>
          </div>
        </div>
      </footer>
    </UltraFuturisticBackground>
  );
}
