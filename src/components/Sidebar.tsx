import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, Home, Briefcase, Users, Phone, Mail, MapPin, Globe, Linkedin, Twitter, Facebook, Instagram, 
  Shield, Brain, Cpu, Zap, Rocket, Database, Cloud, Lock, Server, Code, BarChart3, 
  Settings, FileText, HelpCircle, MessageSquare, Star, Award, TrendingUp, Target, Eye, Wifi, Glasses, Bot, Building, Heart, DollarSign, Factory, ShoppingCart, GraduationCap, Activity, Atom
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const location = useLocation();

  // Close sidebar when route changes
  useEffect(() => {
    onClose();
  }, [location.pathname, onClose]);

  const navigationItems = [
    {
      title: 'Main',
      items: [
        { name: 'Home', path: '/', icon: Home, description: 'Welcome to Zion Tech Group' },
        { name: 'Services Overview', path: '/services', icon: Briefcase, description: 'All our services' },
        { name: 'Advanced Services', path: '/advanced-services', icon: Rocket, description: 'Cutting-edge solutions' },
        { name: 'About Us', path: '/about', icon: Users, description: 'Our story and mission' },
        { name: 'Contact', path: '/contact', icon: Phone, description: 'Get in touch' }
      ]
    },
    {
      title: 'AI & Machine Learning',
      items: [
        { name: 'AI Services', path: '/ai-services', icon: Brain, description: 'AI-powered solutions' },
        { name: 'Machine Learning', path: '/services?category=machine-learning', icon: Cpu, description: 'ML algorithms & models' },
        { name: 'Computer Vision', path: '/services?category=computer-vision', icon: Eye, description: 'Image & video analysis' },
        { name: 'Natural Language Processing', path: '/services?category=nlp', icon: MessageSquare, description: 'Text & speech AI' },
        { name: 'Predictive Analytics', path: '/services?category=predictive-analytics', icon: BarChart3, description: 'Data forecasting' }
      ]
    },
    {
      title: 'Cybersecurity & Security',
      items: [
        { name: 'Cybersecurity', path: '/cybersecurity', icon: Shield, description: 'Security solutions' },
        { name: 'Quantum Security', path: '/services?category=quantum-security', icon: Lock, description: 'Future-proof security' },
        { name: 'Threat Intelligence', path: '/services?category=threat-intelligence', icon: Target, description: 'Security monitoring' },
        { name: 'Compliance & Governance', path: '/services?category=compliance', icon: Award, description: 'Regulatory compliance' },
        { name: 'Penetration Testing', path: '/services?category=penetration-testing', icon: Zap, description: 'Security assessment' }
      ]
    },
    {
      title: 'Infrastructure & Cloud',
      items: [
        { name: 'Cloud Solutions', path: '/services?category=cloud', icon: Cloud, description: 'Cloud infrastructure' },
        { name: 'Edge Computing', path: '/edge-computing', icon: Server, description: 'Distributed computing' },
        { name: 'DevOps Automation', path: '/devops-automation', icon: Settings, description: 'CI/CD & automation' },
        { name: 'Database Management', path: '/services?category=database', icon: Database, description: 'Data infrastructure' },
        { name: 'Server Management', path: '/services?category=server-management', icon: Server, description: 'Infrastructure ops' }
      ]
    },
    {
      title: 'Emerging Technologies',
      items: [
        { name: 'Quantum Computing', path: '/quantum-computing', icon: Atom, description: 'Quantum solutions' },
        { name: 'Blockchain', path: '/blockchain', icon: Link, description: 'Distributed ledger tech' },
        { name: 'IoT Solutions', path: '/services?category=iot', icon: Wifi, description: 'Internet of Things' },
        { name: 'AR/VR Development', path: '/services?category=ar-vr', icon: Glasses, description: 'Immersive experiences' },
        { name: 'Robotics & Automation', path: '/services?category=robotics', icon: Bot, description: 'Automated systems' }
      ]
    },
    {
      title: 'Business Solutions',
      items: [
        { name: 'Micro SAAS', path: '/services?category=micro-saas', icon: Briefcase, description: 'Software as a Service' },
        { name: 'Business Intelligence', path: '/services?category=business-intelligence', icon: BarChart3, description: 'Data insights' },
        { name: 'API Management', path: '/api-management', icon: Code, description: 'API development' },
        { name: 'Digital Transformation', path: '/digital-transformation', icon: TrendingUp, description: 'Business modernization' },
        { name: 'Enterprise Solutions', path: '/enterprise', icon: Building, description: 'Large-scale solutions' }
      ]
    },
    {
      title: 'Industry Solutions',
      items: [
        { name: 'Healthcare AI', path: '/services?category=healthcare-ai', icon: Heart, description: 'Medical AI solutions' },
        { name: 'Financial Services', path: '/services?category=financial', icon: DollarSign, description: 'FinTech solutions' },
        { name: 'Manufacturing', path: '/services?category=manufacturing', icon: Factory, description: 'Industry 4.0' },
        { name: 'Retail & E-commerce', path: '/services?category=retail', icon: ShoppingCart, description: 'Digital commerce' },
        { name: 'Education Technology', path: '/services?category=education', icon: GraduationCap, description: 'EdTech solutions' }
      ]
    },
    {
      title: 'Support & Resources',
      items: [
        { name: 'Help Center', path: '/help', icon: HelpCircle, description: 'Support documentation' },
        { name: 'API Documentation', path: '/docs', icon: FileText, description: 'Developer resources' },
        { name: 'Contact Support', path: '/support', icon: MessageSquare, description: 'Get help' },
        { name: 'Status Page', path: '/status', icon: Activity, description: 'Service status' },
        { name: 'Training & Certification', path: '/training', icon: Award, description: 'Skill development' }
      ]
    }
  ];

  const contactInfo = [
    { icon: Phone, text: '+1 302 464 0950', href: 'tel:+13024640950' },
    { icon: Mail, text: 'kleber@ziontechgroup.com', href: 'mailto:kleber@ziontechgroup.com' },
    { icon: MapPin, text: '364 E Main St STE 1008 Middletown DE 19709', href: '#' }
  ];

  const socialLinks = [
    { icon: Linkedin, href: 'https://linkedin.com/company/ziontechgroup', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com/ziontechgroup', label: 'Twitter' },
    { icon: Facebook, href: 'https://facebook.com/ziontechgroup', label: 'Facebook' },
    { icon: Instagram, href: 'https://instagram.com/ziontechgroup', label: 'Instagram' }
  ];

  const sidebarVariants = {
    closed: {
      x: '-100%',
      transition: {
        type: 'spring' as const,
        stiffness: 300,
        damping: 30
      }
    },
    open: {
      x: 0,
      transition: {
        type: 'spring' as const,
        stiffness: 300,
        damping: 30
      }
    }
  };

  const overlayVariants = {
    closed: { opacity: 0 },
    open: { opacity: 1 }
  };

  return (
    <>
      {/* Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={overlayVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            onClick={onClose}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={sidebarVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed left-0 top-0 h-full w-96 max-w-[90vw] z-50 overflow-hidden"
          >
            {/* Futuristic Background */}
            <div className="absolute inset-0 futuristic-bg opacity-80"></div>
            <div className="absolute inset-0 cyber-grid-bg opacity-30"></div>
            
            {/* Neural Network Lines */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="neural-line" style={{ top: '20%', width: '60%', left: '20%', animationDelay: '0s' }}></div>
              <div className="neural-line" style={{ top: '40%', width: '40%', left: '10%', animationDelay: '1s' }}></div>
              <div className="neural-line" style={{ top: '60%', width: '70%', left: '15%', animationDelay: '2s' }}></div>
              <div className="neural-line" style={{ top: '80%', width: '50%', left: '25%', animationDelay: '3s' }}></div>
            </div>

            {/* Floating Quantum Elements */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="quantum-particle" style={{ top: '15%', left: '80%', animationDelay: '0s' }}></div>
              <div className="quantum-particle" style={{ top: '35%', left: '85%', animationDelay: '1s' }}></div>
              <div className="quantum-particle" style={{ top: '55%', left: '90%', animationDelay: '2s' }}></div>
              <div className="quantum-particle" style={{ top: '75%', left: '88%', animationDelay: '3s' }}></div>
            </div>

            <div className="relative h-full flex flex-col">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-zion-cyan/30">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-10 h-10 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center animate-quantum-float">
                      <span className="text-white font-bold text-xl">Z</span>
                    </div>
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-zion-cyan rounded-full animate-ping"></div>
                  </div>
                  <div>
                    <h2 className="text-xl font-bold neon-text">Zion Tech</h2>
                    <p className="text-sm text-zion-slate-light">Advanced Navigation</p>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 futuristic-card hover:bg-white/20 rounded-lg transition-colors group"
                >
                  <X className="w-5 h-5 text-zion-slate-light group-hover:neon-text transition-colors" />
                </button>
              </div>

              {/* Navigation Content */}
              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                {/* Main Navigation */}
                {navigationItems.map((section) => (
                  <div key={section.title} className="space-y-3">
                    <h3 className="text-sm font-semibold text-zion-cyan uppercase tracking-wider neon-text">
                      {section.title}
                    </h3>
                    <div className="space-y-2">
                      {section.items.map((item) => {
                        const Icon = item.icon;
                        const isActive = location.pathname === item.path;
                        
                        return (
                          <Link
                            key={item.name}
                            to={item.path}
                            className={`group block p-3 rounded-lg transition-all duration-200 ${
                              isActive
                                ? 'quantum-button shadow-lg shadow-zion-cyan/30'
                                : 'futuristic-card text-zion-slate-light hover:bg-white/20 hover:neon-text'
                            }`}
                          >
                            <div className="flex items-center gap-3">
                              <Icon className={`w-4 h-4 ${
                                isActive ? 'text-white' : 'text-zion-cyan group-hover:neon-text'
                              }`} />
                              <div className="flex-1">
                                <span className="font-medium">{item.name}</span>
                                <p className="text-xs text-zion-slate-light mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                  {item.description}
                                </p>
                              </div>
                              {isActive && (
                                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                              )}
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="border-t border-zion-cyan/30 p-6 space-y-4">
                {/* Contact Info */}
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-zion-cyan neon-text">Contact Info</h4>
                  {contactInfo.map((contact, index) => {
                    const Icon = contact.icon;
                    return (
                      <a
                        key={index}
                        href={contact.href}
                        className="flex items-center gap-2 text-xs text-zion-slate-light hover:neon-text transition-colors"
                      >
                        <Icon className="w-3 h-3" />
                        <span className="truncate">{contact.text}</span>
                      </a>
                    );
                  })}
                </div>

                {/* Social Links */}
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-zion-cyan neon-text">Follow Us</h4>
                  <div className="flex gap-2">
                    {socialLinks.map((social, index) => {
                      const Icon = social.icon;
                      return (
                        <a
                          key={index}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 futuristic-card hover:bg-white/20 rounded-lg transition-colors group"
                          aria-label={social.label}
                        >
                          <Icon className="w-4 h-4 text-zion-slate-light group-hover:neon-text transition-colors" />
                        </a>
                      );
                    })}
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="pt-4 border-t border-zion-cyan/20">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="futuristic-card p-3">
                      <div className="text-lg font-bold text-zion-cyan">500+</div>
                      <div className="text-xs text-zion-slate-light">Services</div>
                    </div>
                    <div className="futuristic-card p-3">
                      <div className="text-lg font-bold text-zion-cyan">99.9%</div>
                      <div className="text-xs text-zion-slate-light">Uptime</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}