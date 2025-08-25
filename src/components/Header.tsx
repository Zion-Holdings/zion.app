import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Search, 
  Phone, 
  Mail, 
  MapPin,
  Brain,
  Users,
  Target,
  Shield,
  Zap,
  Building,
  Cpu,
  Globe,
  Rocket,
  Star,
  ArrowRight
} from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { 
      path: '/', 
      label: 'Home', 
      icon: '🏠',
      description: 'Welcome to Zion Tech Group'
    },
    { 
      path: '/services', 
      label: 'Services', 
      icon: '🤖',
      description: 'Explore our comprehensive service offerings'
    },
    { 
      path: '/solutions/enterprise', 
      label: 'Solutions', 
      icon: '💼',
      description: 'Industry-specific solutions',
      hasDropdown: true
    },
    { 
      path: '/emerging-tech', 
      label: 'Emerging Tech', 
      icon: '🚀',
      description: 'Cutting-edge technology solutions'
    },
    { 
      path: '/pricing', 
      label: 'Pricing', 
      icon: '💰',
      description: 'Transparent pricing plans'
    },
    { 
      path: '/about', 
      label: 'About', 
      icon: 'ℹ️',
      description: 'Learn about our company'
    },
    { 
      path: '/careers', 
      label: 'Careers', 
      icon: '🚀',
      description: 'Join our team'
    },
    { 
      path: '/blog', 
      label: 'Blog', 
      icon: '📝',
      description: 'Latest insights and news'
    },
    { 
      path: '/case-studies', 
      label: 'Case Studies', 
      icon: '📊',
      description: 'Success stories and results'
    },
    { 
      path: '/help', 
      label: 'Help', 
      icon: '❓',
      description: 'Get help and support'
    },
    { 
      path: '/contact', 
      label: 'Contact', 
      icon: '📞',
      description: 'Get in touch with us'
    }
  ];

  const serviceCategories = [
    {
      title: 'AI & Machine Learning',
      icon: Brain,
      description: 'Intelligent solutions powered by artificial intelligence',
      services: [
        { name: 'AI Autonomous Systems', path: '/services/ai-autonomous-systems', description: 'Advanced autonomous AI systems' },
        { name: 'AI Research Assistant', path: '/ai-autonomous-research-assistant', description: 'AI-powered research automation' },
        { name: 'AI Business Intelligence', path: '/services#ai-bi', description: 'Advanced analytics and insights' },
        { name: 'AI Marketing Automation', path: '/services#ai-marketing', description: 'Smart marketing optimization' },
        { name: 'AI HR & Recruitment', path: '/services#ai-hr', description: 'Intelligent talent management' },
        { name: 'AI Legal Tech', path: '/services#ai-legal', description: 'Automated legal processes' }
      ]
    },
    {
      title: 'Quantum Technology',
      icon: Brain,
      description: 'Next-generation quantum computing solutions',
      services: [
        { name: 'Quantum Neural Networks', path: '/quantum-neural-network-platform', description: 'Quantum-powered neural networks' },
        { name: 'Quantum Computing', path: '/services/quantum-technology', description: 'Quantum computing platforms' },
        { name: 'Quantum-Safe Security', path: '/services#quantum-security', description: 'Future-proof quantum security' }
      ]
    },
    {
      title: 'Business Operations',
      icon: Building,
      description: 'Streamlined business process automation',
      services: [
        { name: 'Autonomous Business Platform', path: '/autonomous-business-operations-platform', description: 'Self-operating business systems' },
        { name: 'AI Asset Management', path: '/ai-powered-it-asset-management', description: 'Intelligent IT asset management' },
        { name: 'Business Intelligence', path: '/services#ai-bi', description: 'Advanced business analytics' }
      ]
    },
    {
      title: 'Cybersecurity',
      icon: Shield,
      description: 'Comprehensive security and compliance solutions',
      services: [
        { name: 'Cybersecurity Services', path: '/services/cybersecurity', description: 'Complete security solutions' },
        { name: 'SOC2 Compliance Automation', path: '/soc2-compliance-automation', description: 'Automated compliance management' },
        { name: 'Security Assessment', path: '/services#security-assessment', description: 'Security audit and testing' },
        { name: 'Compliance & Audit', path: '/services#compliance', description: 'Regulatory compliance support' }
      ]
    },
    {
      title: 'Cloud & Infrastructure',
      icon: Cpu,
      description: 'Scalable cloud solutions and infrastructure management',
      services: [
        { name: 'Cloud DevOps', path: '/cloud-devops', description: 'Cloud development and operations' },
        { name: 'IT Infrastructure', path: '/services/it-infrastructure', description: 'Complete IT infrastructure solutions' },
        { name: '5G Enterprise Solutions', path: '/5g-enterprise-solutions', description: 'High-speed 5G connectivity' },
        { name: 'Cloud Migration', path: '/services#cloud-migration', description: 'Seamless cloud transition' },
        { name: 'Network Infrastructure', path: '/services#network', description: 'Robust network solutions' },
        { name: 'Managed IT Services', path: '/services#managed-it', description: '24/7 IT support' }
      ]
    },
    {
      title: 'Emerging Technologies',
      icon: Rocket,
      description: 'Cutting-edge solutions for tomorrow\'s challenges',
      services: [
        { name: 'Emerging Technology', path: '/emerging-tech', description: 'Cutting-edge technology solutions' },
        { name: 'Blockchain Solutions', path: '/services#blockchain', description: 'Decentralized applications' },
        { name: 'IoT & Edge Computing', path: '/services#iot-edge', description: 'Connected device management' }
      ]
    }
  ];

  const solutionCategories = [
    {
      title: 'Enterprise Solutions',
      icon: Building,
      description: 'Large-scale business transformation',
      solutions: [
        { name: 'Digital Transformation', path: '/digital-transformation', description: 'Complete business modernization' },
        { name: 'Enterprise AI', path: '/solutions/enterprise', description: 'AI-powered enterprise solutions' },
        { name: 'Data Analytics', path: '/services#analytics', description: 'Business intelligence platform' }
      ]
    },
    {
      title: 'SMB Solutions',
      icon: Users,
      description: 'Scalable solutions for growing businesses',
      solutions: [
        { name: 'Micro SAAS', path: '/services/micro-saas-solutions', description: 'Custom software solutions' },
        { name: 'Cloud Migration', path: '/cloud-devops', description: 'Affordable cloud solutions' },
        { name: 'IT Support', path: '/services#it-support', description: 'Managed IT services' }
      ]
    },
    {
      title: 'Startup Solutions',
      icon: Rocket,
      description: 'Accelerate your startup growth',
      solutions: [
        { name: 'MVP Development', path: '/services#mvp', description: 'Rapid prototype development' },
        { name: 'AI Integration', path: '/ai-solutions', description: 'AI-powered features' },
        { name: 'Scalable Architecture', path: '/services#architecture', description: 'Growth-ready infrastructure' }
      ]
    }
  ];

  const handleDropdownToggle = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const closeDropdowns = () => {
    setActiveDropdown(null);
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-zion-blue-dark/95 backdrop-blur-md border-b border-zion-cyan/20 shadow-2xl shadow-zion-cyan/10' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Rocket className="w-7 h-7 text-white" />
              </div>
              <div className="absolute -inset-1 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-xl blur opacity-25 group-hover:opacity-40 transition-opacity duration-300"></div>
            </div>
            <div className="hidden md:block">
              <div className="text-2xl font-bold text-white group-hover:text-zion-cyan transition-colors">
                Zion Tech Group
              </div>
              <div className="text-xs text-zion-slate-light">Revolutionary Technology Solutions</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.path} className="relative">
                {item.hasDropdown ? (
                  <button
                    onClick={() => handleDropdownToggle(item.label.toLowerCase())}
                    className="flex items-center space-x-1 text-white hover:text-zion-cyan transition-colors py-2 px-3 rounded-lg hover:bg-white/10"
                  >
                    <span>{item.label}</span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                      activeDropdown === item.label.toLowerCase() ? 'rotate-180' : ''
                    }`} />
                  </button>
                ) : (
                  <Link
                    to={item.path}
                    className="text-white hover:text-zion-cyan transition-colors py-2 px-3 rounded-lg hover:bg-white/10"
                  >
                    {item.label}
                  </Link>
                )}

                {/* Services Dropdown */}
                {item.hasDropdown && item.label === 'Services' && activeDropdown === 'services' && (
                  <div className="absolute top-full left-0 mt-2 w-96 bg-zion-blue-dark/95 backdrop-blur-md border border-zion-cyan/20 rounded-xl shadow-2xl shadow-zion-cyan/25 p-6">
                    <div className="grid grid-cols-1 gap-4">
                      {serviceCategories.map((category) => (
                        <div key={category.title} className="group">
                          <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/10 transition-colors">
                            <div className="w-10 h-10 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center">
                              <category.icon className="w-5 h-5 text-white" />
                            </div>
                            <div className="flex-1">
                              <h4 className="font-semibold text-white group-hover:text-zion-cyan transition-colors">
                                {category.title}
                              </h4>
                              <p className="text-sm text-zion-slate-light">{category.description}</p>
                            </div>
                          </div>
                          <div className="ml-13 pl-4 border-l border-zion-cyan/20">
                            {category.services.map((service) => (
                              <Link
                                key={service.name}
                                to={service.path}
                                onClick={closeDropdowns}
                                className="block p-2 rounded-lg hover:bg-white/5 transition-colors"
                              >
                                <div className="font-medium text-white hover:text-zion-cyan transition-colors">
                                  {service.name}
                                </div>
                                <div className="text-sm text-zion-slate-light">{service.description}</div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 pt-4 border-t border-zion-cyan/20">
                      <Link
                        to="/services-showcase"
                        onClick={closeDropdowns}
                        className="flex items-center justify-center w-full bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan-light hover:to-zion-purple-light text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                      >
                        <span>View All Services</span>
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                )}

                {/* Solutions Dropdown */}
                {item.hasDropdown && item.label === 'Solutions' && activeDropdown === 'solutions' && (
                  <div className="absolute top-full left-0 mt-2 w-80 bg-zion-blue-dark/95 backdrop-blur-md border border-zion-cyan/20 rounded-xl shadow-2xl shadow-zion-cyan/25 p-6">
                    <div className="space-y-4">
                      {solutionCategories.map((category) => (
                        <div key={category.title} className="group">
                          <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/10 transition-colors">
                            <div className="w-10 h-10 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center">
                              <category.icon className="w-5 h-5 text-white" />
                            </div>
                            <div className="flex-1">
                              <h4 className="font-semibold text-white group-hover:text-zion-cyan transition-colors">
                                {category.title}
                              </h4>
                              <p className="text-sm text-zion-slate-light">{category.description}</p>
                            </div>
                          </div>
                          <div className="ml-13 pl-4 border-l border-zion-cyan/20">
                            {category.solutions.map((solution) => (
                              <Link
                                key={solution.name}
                                to={solution.path}
                                onClick={closeDropdowns}
                                className="block p-2 rounded-lg hover:bg-white/5 transition-colors"
                              >
                                <div className="font-medium text-white hover:text-zion-cyan transition-colors">
                                  {solution.name}
                                </div>
                                <div className="text-sm text-zion-slate-light">{solution.description}</div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-6">
            {/* Contact Info */}
            <div className="flex items-center space-x-4 text-zion-slate-light">
              <div className="flex items-center space-x-2 hover:text-zion-cyan transition-colors cursor-pointer">
                <Phone className="w-4 h-4" />
                <span className="text-sm">+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-2 hover:text-zion-cyan transition-colors cursor-pointer">
                <Mail className="w-4 h-4" />
                <span className="text-sm">kleber@ziontechgroup.com</span>
              </div>
            </div>

            {/* CTA Button */}
            <Link
              to="/contact"
              className="bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan-light hover:to-zion-purple-light text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-zion-cyan/25"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="lg:hidden p-2 text-white hover:text-zion-cyan transition-colors"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </header>
  );
}
