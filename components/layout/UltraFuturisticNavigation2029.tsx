import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Phone, 
  Mail, 
  MapPin,
  Rocket,
  Brain,
  Atom,
  Shield,
  Zap,
  Globe,
  Code,
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
  Book,
  Activity,
  Play,
  Mail as MailIcon,
  Phone as PhoneIcon,
  MapPin as MapPinIcon,
  Filter,
  Grid,
  List,
  ChevronUp,
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
  Crown,
  Infinity,
  X as XIcon,
  AlertTriangle,
  Info,
  Zap as ZapIcon,
  Shield as ShieldIcon,
  Users as UsersIcon,
  Globe as GlobeIcon,
  Cpu as CpuIcon,
  Database as DatabaseIcon,
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
  Book as BookIcon,
  Activity as ActivityIcon,
  Database as DatabaseIcon2,
  Play as PlayIcon,
  Mail as MailIcon2,
  Phone as PhoneIcon2,
  MapPin as MapPinIcon2,
  Filter as FilterIcon,
  Grid as GridIcon,
  List as ListIcon,
  ChevronDown as ChevronDownIcon,
  ChevronUp as ChevronUpIcon,
  Sparkles as SparklesIcon,
  FlaskConical as FlaskConicalIcon,
  Dna as DnaIcon,
  Car as CarIcon,
  Leaf as LeafIcon,
  Factory as FactoryIcon,
  Truck as TruckIcon,
  Microscope as MicroscopeIcon,
  GraduationCap as GraduationCapIcon,
  ShieldCheck as ShieldCheckIcon,
  Brain as BrainIcon,
  Atom as AtomIcon,
  Globe2 as Globe2Icon,
  Bot as BotIcon,
  ChevronRight as ChevronRightIcon
} from 'lucide-react';

const UltraFuturisticNavigation2029: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const mainNavigation = [
    { name: 'Home', href: '/', icon: Rocket },
    { name: 'Services', href: '/services', icon: Code },
    { name: 'AI Solutions', href: '/ai-services', icon: Brain },
    { name: 'Quantum Tech', href: '/quantum-services', icon: Atom },
    { name: 'Space Tech', href: '/space-technology', icon: Globe },
    { name: 'About', href: '/about', icon: Info },
    { name: 'Contact', href: '/contact', icon: MessageSquare }
  ];

  const serviceCategories = [
    {
      name: 'AI & Machine Learning',
      icon: Brain,
      description: 'Advanced AI solutions and machine learning platforms',
      services: ['AI Consciousness Platform', 'Neural Network Architectures', 'Machine Learning Automation']
    },
    {
      name: 'Quantum Computing',
      icon: Atom,
      description: 'Quantum algorithms and computing solutions',
      services: ['Quantum Cryptography', 'Quantum Machine Learning', 'Quantum Optimization']
    },
    {
      name: 'Space Technology',
      icon: Rocket,
      description: 'Space exploration and satellite technologies',
      services: ['Autonomous Space Mining', 'Satellite Communication', 'Space Resource Extraction']
    },
    {
      name: 'Biotechnology',
      icon: Dna,
      description: 'Advanced biotech and genetic engineering',
      services: ['Quantum Biotech Synthesis', 'Genetic Engineering Platform', 'Drug Discovery AI']
    },
    {
      name: 'Cybersecurity',
      icon: Shield,
      description: 'Next-generation security solutions',
      services: ['Quantum Internet Security', 'AI Threat Detection', 'Zero-Trust Architecture']
    },
    {
      name: 'Cloud & Infrastructure',
      icon: Cloud,
      description: 'Scalable cloud and infrastructure solutions',
      services: ['Quantum Cloud Platform', 'Edge Computing', 'Serverless Architecture']
    }
  ];

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-gradient-to-r from-cyan-900 via-purple-900 to-pink-900 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center items-center gap-6 text-sm">
          <div className="flex items-center space-x-2">
            <Phone className="w-4 h-4 text-cyan-400" />
            <span>{contactInfo.mobile}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Mail className="w-4 h-4 text-purple-400" />
            <span>{contactInfo.email}</span>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin className="w-4 h-4 text-pink-400" />
            <span className="text-xs">{contactInfo.address}</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/90 backdrop-blur-xl border-b border-cyan-500/30' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center space-x-3"
            >
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl flex items-center justify-center">
                <Rocket className="w-6 h-6 text-white" />
              </div>
              <div className="text-xl font-bold text-white">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Zion Tech Group
                </span>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {mainNavigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center space-x-2 group"
                >
                  <item.icon className="w-4 h-4 group-hover:text-cyan-400 transition-colors" />
                  <span>{item.name}</span>
                </Link>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-medium hover:from-cyan-600 hover:to-blue-600 transition-all duration-200"
              >
                Get Started
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 border border-cyan-400 text-cyan-400 rounded-lg font-medium hover:bg-cyan-400 hover:text-black transition-all duration-200"
              >
                Contact Sales
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className="text-white p-2"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </motion.button>
            </div>
          </div>

          {/* Service Categories Dropdown */}
          <div className="hidden lg:block">
            <div className="grid grid-cols-6 gap-4 py-6 border-t border-gray-700/50">
              {serviceCategories.map((category) => (
                <div
                  key={category.name}
                  className="group cursor-pointer"
                  onMouseEnter={() => setActiveDropdown(category.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <div className="text-center p-4 rounded-lg bg-gray-900/50 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 group-hover:bg-gray-800/50">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                      <category.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-sm font-semibold text-white mb-2">{category.name}</h3>
                    <p className="text-xs text-gray-400 mb-3">{category.description}</p>
                    <div className="space-y-1">
                      {category.services.slice(0, 2).map((service) => (
                        <div key={service} className="text-xs text-cyan-400 bg-black/30 rounded px-2 py-1">
                          {service}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden fixed top-20 left-0 right-0 bg-black/95 backdrop-blur-xl border-b border-cyan-500/30 z-40 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              {mainNavigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center space-x-3 text-white hover:text-cyan-400 transition-colors duration-200 p-3 rounded-lg hover:bg-gray-800/50"
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.name}</span>
                </Link>
              ))}
              
              <div className="pt-4 border-t border-gray-700">
                <div className="grid grid-cols-2 gap-4">
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-medium text-center"
                  >
                    Get Started
                  </motion.button>
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 border border-cyan-400 text-cyan-400 rounded-lg font-medium text-center"
                  >
                    Contact Sales
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Spacer for fixed navigation */}
      <div className="h-20"></div>
    </>
  );
};

export default UltraFuturisticNavigation2029;