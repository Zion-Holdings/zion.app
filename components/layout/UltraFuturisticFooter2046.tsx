import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Linkedin, 
  Twitter, 
  Github, 
  Youtube,
  Facebook,
  Instagram,
  Globe,
  ArrowUp,
  Heart,
  Zap,
  Shield,
  Brain,
  Atom,
  Cloud,
  Code,
  Database,
  BarChart3,
  Users,
  Building,
  Target,
  BookOpen,
  FileText,
  Video,
  MessageCircle,
  Briefcase,
  Award,
  Star,
  Sparkles,
  TrendingUp,
  Rocket,
  Cpu,
  Network,
  Server,
  HardDrive,
  Wifi,
  Smartphone,
  Monitor,
  Laptop,
  Tablet,
  Watch,
  Camera,
  Mic,
  Headphones,
  Gamepad2,
  Car,
  Plane,
  Ship,
  Train,
  Bus,
  Bike,
  Footprints,
  Activity,
  GlassWater,
  Dumbbell,
  HeartPulse,
  Pill,
  Stethoscope,
  Syringe,
  Thermometer,
  Bandage,
  EyeOff,
  Eye,
  Ear,
  ScanFace,
  Smile,
  Hand,
  BrainCircuit,
  CircuitBoard,
  Microchip,
  MemoryStick,
  Store,
  Power,
  Battery,
  Sun,
  Wind,
  Droplet,
  Flame,
  Earth,
  Moon,
  Space,
  Circle,
  Timer,
  Clock,
  Hourglass,
  CalendarDays,
  CalendarRange,
  CalendarCheck,
  CalendarX,
  CalendarPlus,
  CalendarMinus,
  CalendarClock,
  CalendarHeart,
  Calendar,
  Trophy,
  Gift,
  Music,
  Image,
  File,
  Folder,
  Lock,
  Key,
  CheckCircle,
  XCircle,
  PlusCircle,
  MinusCircle,
  Clock,
  CalendarHeartCircle,
  CalendarStarCircle,
  CalendarAwardCircle,
  CalendarTrophyCircle,
  CalendarGiftCircle,
  CalendarMusicCircle,
  CalendarVideoCircle,
  CalendarImageCircle,
  CalendarFileCircle,
  CalendarFolderCircle,
  CalendarDatabaseCircle,
  CalendarCloudCircle,
  CalendarServerCircle,
  CalendarNetworkCircle,
  CalendarSecurityCircle,
  CalendarLockCircle,
  CalendarKeyCircle,
  CalendarShieldCircle
} from 'lucide-react';

const UltraFuturisticFooter2046: React.FC = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
    setIsVisible(true);
  }, []);

  // Footer sections with comprehensive organization
  const footerSections = [
    {
      title: 'Services',
      items: [
        { label: 'AI & Machine Learning', href: '/services?category=ai-ml', icon: Brain },
        { label: 'Quantum Computing', href: '/services?category=quantum', icon: Atom },
        { label: 'Cybersecurity', href: '/services?category=cybersecurity', icon: Shield },
        { label: 'Cloud Infrastructure', href: '/services?category=cloud', icon: Cloud },
        { label: 'DevOps & Automation', href: '/services?category=devops', icon: Code },
        { label: 'Data Analytics', href: '/services?category=data', icon: BarChart3 },
        { label: 'IoT & Edge Computing', href: '/services?category=iot', icon: Cpu },
        { label: 'Blockchain & FinTech', href: '/services?category=blockchain', icon: Database }
      ]
    },
    {
      title: 'Solutions',
      items: [
        { label: 'Enterprise', href: '/solutions/enterprise', icon: Building },
        { label: 'Financial Services', href: '/solutions/financial', icon: DollarSign },
        { label: 'Healthcare', href: '/solutions/healthcare', icon: HeartPulse },
        { label: 'Manufacturing', href: '/solutions/manufacturing', icon: Cpu },
        { label: 'Retail & E-commerce', href: '/solutions/retail', icon: ShoppingCart },
        { label: 'Education', href: '/solutions/education', icon: GraduationCap },
        { label: 'Government', href: '/solutions/government', icon: Building },
        { label: 'Energy & Utilities', href: '/solutions/energy', icon: Power }
      ]
    },
    {
      title: 'Products',
      items: [
        { label: 'Micro SAAS Platforms', href: '/products/micro-saas', icon: Cloud },
        { label: 'AI Tools & APIs', href: '/products/ai-tools', icon: Brain },
        { label: 'Security Products', href: '/products/security', icon: Shield },
        { label: 'DevOps Tools', href: '/products/devops', icon: Code },
        { label: 'Data Platforms', href: '/products/data', icon: Database },
        { label: 'IoT Solutions', href: '/products/iot', icon: Cpu },
        { label: 'Quantum Software', href: '/products/quantum', icon: Atom },
        { label: 'Edge Computing', href: '/products/edge', icon: Network }
      ]
    },
    {
      title: 'Resources',
      items: [
        { label: 'Documentation', href: '/docs', icon: FileText },
        { label: 'Blog', href: '/blog', icon: BookOpen },
        { label: 'Case Studies', href: '/case-studies', icon: BarChart3 },
        { label: 'White Papers', href: '/white-papers', icon: FileText },
        { label: 'Webinars', href: '/webinars', icon: Video },
        { label: 'Training', href: '/training', icon: GraduationCap },
        { label: 'Support', href: '/support', icon: MessageCircle },
        { label: 'API Reference', href: '/api', icon: Code }
      ]
    },
    {
      title: 'Company',
      items: [
        { label: 'About Us', href: '/about', icon: Building },
        { label: 'Leadership', href: '/leadership', icon: Users },
        { label: 'Careers', href: '/careers', icon: Briefcase },
        { label: 'Contact', href: '/contact', icon: MessageCircle },
        { label: 'News & Press', href: '/news', icon: FileText },
        { label: 'Partners', href: '/partners', icon: Users },
        { label: 'Investors', href: '/investors', icon: TrendingUp },
        { label: 'Sustainability', href: '/sustainability', icon: Leaf }
      ]
    }
  ];

  // Add missing icon components
  const DollarSign = ({ className }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
    </svg>
  );

  const ShoppingCart = ({ className }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
    </svg>
  );

  const Leaf = ({ className }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  );

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
      transition={{ duration: 0.8 }}
      className="bg-gradient-to-b from-black via-gray-900 to-black text-white relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/5 via-purple-500/5 to-pink-500/5" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
      </div>

      {/* Main Footer Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="mb-6"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl flex items-center justify-center">
                  <Zap className="w-7 h-7 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                    ZION TECH GROUP
                  </div>
                  <div className="text-sm text-gray-400">Future Technology Solutions</div>
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Leading the future of technology with cutting-edge AI, quantum computing, 
                and autonomous solutions that transform businesses and industries worldwide.
              </p>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-3"
            >
              <div className="flex items-center space-x-3 text-sm">
                <Phone className="w-4 h-4 text-cyan-400" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-start space-x-3 text-sm">
                <MapPin className="w-4 h-4 text-cyan-400 mt-0.5" />
                <span>364 E Main St STE 1008<br />Middletown DE 19709</span>
              </div>
            </motion.div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + index * 0.1 }}
              className="space-y-4"
            >
              <h3 className="text-lg font-semibold text-white border-b border-cyan-400/30 pb-2">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.items.map((item, itemIndex) => (
                  <motion.li
                    key={item.label}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 + itemIndex * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      className="flex items-center space-x-2 text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-300 group"
                    >
                      <item.icon className="w-3 h-3 group-hover:scale-110 transition-transform duration-300" />
                      <span>{item.label}</span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Middle Section - Stats & Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 p-8 bg-gradient-to-r from-cyan-400/10 via-purple-500/10 to-pink-500/10 rounded-2xl border border-cyan-400/20"
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-cyan-400 mb-2">3000+</div>
            <div className="text-sm text-gray-400">Revolutionary Services</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">99.99%</div>
            <div className="text-sm text-gray-400">Uptime Guarantee</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-pink-400 mb-2">24/7</div>
            <div className="text-sm text-gray-400">AI Support Available</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">250+</div>
            <div className="text-sm text-gray-400">Countries Served</div>
          </div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="border-t border-gray-800 pt-8"
        >
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <span>© {currentYear} Zion Tech Group. All rights reserved.</span>
              <span className="hidden sm:inline">|</span>
              <span className="hidden sm:inline">Made with</span>
              <Heart className="w-4 h-4 text-red-400 hidden sm:inline" />
              <span className="hidden sm:inline">for the future</span>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <Link
                href="https://linkedin.com"
                className="w-8 h-8 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-lg flex items-center justify-center hover:from-cyan-400/40 hover:to-blue-500/40 transition-all duration-300 group"
              >
                <Linkedin className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
              </Link>
              <Link
                href="https://twitter.com"
                className="w-8 h-8 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-lg flex items-center justify-center hover:from-cyan-400/40 hover:to-blue-500/40 transition-all duration-300 group"
              >
                <Twitter className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
              </Link>
              <Link
                href="https://github.com"
                className="w-8 h-8 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-lg flex items-center justify-center hover:from-cyan-400/40 hover:to-blue-500/40 transition-all duration-300 group"
              >
                <Github className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
              </Link>
              <Link
                href="https://youtube.com"
                className="w-8 h-8 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-lg flex items-center justify-center hover:from-cyan-400/40 hover:to-blue-500/40 transition-all duration-300 group"
              >
                <Youtube className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
              </Link>
            </div>
          </div>

          {/* Additional Links */}
          <div className="flex flex-wrap items-center justify-center space-x-6 mt-6 text-sm text-gray-400">
            <Link href="/privacy" className="hover:text-cyan-400 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-cyan-400 transition-colors">Terms of Service</Link>
            <Link href="/cookies" className="hover:text-cyan-400 transition-colors">Cookie Policy</Link>
            <Link href="/accessibility" className="hover:text-cyan-400 transition-colors">Accessibility</Link>
            <Link href="/sitemap" className="hover:text-cyan-400 transition-colors">Sitemap</Link>
          </div>
        </motion.div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8 }}
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-cyan-400/25 transition-all duration-300 hover:scale-110 z-50"
        style={{
          boxShadow: '0 0 20px rgba(0, 255, 255, 0.3)'
        }}
      >
        <ArrowUp className="w-5 h-5" />
      </motion.button>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Floating quantum particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400 rounded-full opacity-30"
            style={{
              left: `${20 + i * 15}%`,
              top: `${80 + i * 5}%`
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3]
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5
            }}
            style={{
              boxShadow: '0 0 10px rgba(0, 255, 255, 0.5)'
            }}
          />
        ))}

        {/* Energy waves */}
        <motion.div
          className="absolute bottom-0 left-0 w-full h-32"
          animate={{
            background: [
              'linear-gradient(to top, rgba(0, 255, 255, 0.1) 0%, transparent 100%)',
              'linear-gradient(to top, rgba(147, 51, 234, 0.1) 0%, transparent 100%)',
              'linear-gradient(to top, rgba(236, 72, 153, 0.1) 0%, transparent 100%)',
              'linear-gradient(to top, rgba(0, 255, 255, 0.1) 0%, transparent 100%)'
            ]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
    </motion.footer>
  );
};

export default UltraFuturisticFooter2046;