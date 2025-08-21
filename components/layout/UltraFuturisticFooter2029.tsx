import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Phone, Mail, MapPin, Globe, Rocket, Brain, Atom, 
  Shield, Users, Briefcase, BookOpen, MessageCircle, 
  Star, TrendingUp, Target, Layers, Cpu, Database, 
  Cloud, Lock, ShieldCheck, Earth, Factory, Car, 
  Building, GraduationCap, Scale, Palette, Camera, 
  Video, Music, Gamepad2, Heart, Leaf, Sun, Moon, 
  Wind, Droplets, Mountain, Code, Wrench, Smartphone, 
  BarChart3, Eye, CircuitBoard, Satellite, Dna, 
  Beaker, TestTube, Truck, Plane, Ship, Train, Bus, 
  ArrowRight, ExternalLink, Zap, Sparkles
} from 'lucide-react';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const serviceCategories = [
  {
    title: '🚀 2029 Revolutionary Innovations',
    icon: Rocket,
    services: [
      { name: 'AI Consciousness Evolution', href: '/ai-consciousness-evolution-2029' },
      { name: 'Quantum Biotech Synthesis', href: '/quantum-biotech-synthesis-2029' },
      { name: 'Autonomous Space Mining', href: '/autonomous-space-mining-2029' },
      { name: 'Quantum Internet Protocol', href: '/quantum-internet-protocol-2029' }
    ]
  },
  {
    title: '🧠 Advanced AI & Consciousness',
    icon: Brain,
    services: [
      { name: 'AI Climate Prediction', href: '/ai-climate-prediction-2029' },
      { name: 'AI Healthcare Diagnosis', href: '/ai-healthcare-diagnosis-2029' },
      { name: 'Brain-Computer Interface', href: '/brain-computer-interface-2029' },
      { name: 'AI Business Automation', href: '/ai-business-automation-2029' }
    ]
  },
  {
    title: '⚛️ Quantum Computing & Technology',
    icon: Atom,
    services: [
      { name: 'Quantum Financial Trading', href: '/quantum-financial-trading-2029' },
      { name: 'Quantum Robotics Platform', href: '/quantum-robotics-2029' },
      { name: 'Quantum Energy Optimization', href: '/quantum-energy-optimization-2029' },
      { name: 'Quantum IoT Platform', href: '/quantum-iot-platform-2029' }
    ]
  },
  {
    title: '🏙️ Smart Cities & Infrastructure',
    icon: Building,
    services: [
      { name: 'Autonomous Manufacturing AI', href: '/autonomous-manufacturing-ai-2029' },
      { name: 'Smart City Infrastructure', href: '/smart-city-infrastructure-management' },
      { name: 'Digital Twin Manufacturing', href: '/digital-twin-manufacturing-platform' },
      { name: 'IoT Energy Management', href: '/iot-energy-management-system' }
    ]
  },
  {
    title: '🌍 Metaverse & Digital Reality',
    icon: Globe,
    services: [
      { name: 'Metaverse Digital Reality', href: '/metaverse-digital-reality-2029' },
      { name: 'Virtual Event Hologram', href: '/virtual-event-hologram-platform' },
      { name: 'AI Multimodal Fusion', href: '/ai-multimodal-fusion-platform' },
      { name: 'Quantum Metaverse', href: '/quantum-metaverse' }
    ]
  },
  {
    title: '🔬 Biotechnology & Research',
    icon: Beaker,
    services: [
      { name: 'DNA Computing Platform', href: '/dna-computing-platform-2029' },
      { name: 'Biotech AI Research', href: '/biotech-ai-research-platform' },
      { name: 'AI Mental Health Companion', href: '/ai-mental-health-companion' },
      { name: 'Quantum Biotech Synthesis', href: '/quantum-biotech-synthesis-2029' }
    ]
  }
];

const quickLinks = [
  { name: 'About Us', href: '/about', icon: Users },
  { name: 'Services', href: '/services', icon: Briefcase },
  { name: 'Pricing', href: '/pricing', icon: Star },
  { name: 'Contact', href: '/contact', icon: MessageCircle },
  { name: 'Resources', href: '/resources', icon: BookOpen },
  { name: 'Blog', href: '/blog', icon: Globe },
  { name: 'Case Studies', href: '/case-studies', icon: Target },
  { name: 'Support', href: '/support', icon: Shield }
];

const socialLinks = [
  { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: ExternalLink },
  { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: ExternalLink },
  { name: 'GitHub', href: 'https://github.com/Zion-Holdings', icon: ExternalLink },
  { name: 'YouTube', href: 'https://youtube.com/@ziontechgroup', icon: ExternalLink }
];

const UltraFuturisticFooter2029: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-black via-purple-900/20 to-black border-t border-purple-500/30 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 py-16">
          {/* Top Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-xl flex items-center justify-center">
                  <Rocket className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                    Zion Tech Group
                  </h3>
                  <p className="text-sm text-gray-400">2029 Revolutionary Technology</p>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 max-w-md">
                Leading the future of technology with revolutionary AI, quantum computing, space technology, and emerging innovations that transform businesses and advance humanity.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-300">
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <a href={`tel:${contactInfo.mobile}`} className="hover:text-cyan-400 transition-colors">
                    {contactInfo.mobile}
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <a href={`mailto:${contactInfo.email}`} className="hover:text-cyan-400 transition-colors">
                    {contactInfo.email}
                  </a>
                </div>
                <div className="flex items-start space-x-3 text-gray-300">
                  <MapPin className="w-4 h-4 text-cyan-400 mt-0.5" />
                  <span>{contactInfo.address}</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                <Zap className="w-5 h-5 text-cyan-400 mr-2" />
                Quick Links
              </h4>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors group"
                    >
                      <link.icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                      <span>{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                <Globe className="w-5 h-5 text-cyan-400 mr-2" />
                Connect With Us
              </h4>
              <ul className="space-y-2">
                {socialLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors group"
                    >
                      <link.icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                      <span>{link.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Service Categories Grid */}
          <div className="mb-12">
            <h4 className="text-xl font-bold text-white mb-6 text-center">
              🚀 Our Revolutionary 2029 Technology Services
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {serviceCategories.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-purple-900/20 to-cyan-900/20 border border-purple-500/30 rounded-xl p-6 hover:border-purple-400/50 transition-all duration-300 group"
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <category.icon className="w-5 h-5 text-white" />
                    </div>
                    <h5 className="text-lg font-semibold text-white">{category.title}</h5>
                  </div>
                  
                  <ul className="space-y-2">
                    {category.services.map((service, serviceIndex) => (
                      <li key={serviceIndex}>
                        <Link
                          href={service.href}
                          className="flex items-center justify-between text-gray-300 hover:text-cyan-400 transition-colors group"
                        >
                          <span className="text-sm">{service.name}</span>
                          <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mb-12">
            <div className="bg-gradient-to-r from-purple-900/30 via-cyan-900/30 to-purple-900/30 border border-purple-500/30 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready to Experience the Future?
              </h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Transform your business with our revolutionary 2029 technology services. 
                From AI consciousness to quantum computing, we're building the future today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white px-8 py-4 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 inline-flex items-center justify-center"
                >
                  <Rocket className="w-5 h-5 mr-2" />
                  Get Started Today
                </Link>
                <Link
                  href="/pricing"
                  className="border border-purple-500/50 text-purple-400 hover:bg-purple-500/10 px-8 py-4 rounded-xl font-medium transition-all duration-300 inline-flex items-center justify-center"
                >
                  <Star className="w-5 h-5 mr-2" />
                  View Pricing
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-purple-500/30 bg-black/50">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <span>&copy; 2029 Zion Tech Group. All rights reserved.</span>
                <Link href="/privacy" className="hover:text-cyan-400 transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="hover:text-cyan-400 transition-colors">
                  Terms of Service
                </Link>
                <Link href="/cookies" className="hover:text-cyan-400 transition-colors">
                  Cookie Policy
                </Link>
              </div>
              
              <div className="flex items-center space-x-4 text-gray-400">
                <div className="flex items-center space-x-2">
                  <Sparkles className="w-4 h-4 text-cyan-400" />
                  <span className="text-sm">Leading Innovation</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="w-4 h-4 text-green-400" />
                  <span className="text-sm">Trusted Partner</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default UltraFuturisticFooter2029;