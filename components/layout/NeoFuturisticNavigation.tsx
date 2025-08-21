import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { 
  Menu, 
  X, 
  ChevronDown, 
  ChevronRight,
  Phone,
  Mail,
  MapPin,
  Globe,
  ArrowRight,
  Sparkles,
  Brain,
  Atom,
  Shield,
  DollarSign,
  FileText,
  BarChart3,
  MessageSquare,
  Truck,
  Users,
  Database,
  Cpu,
  Cloud,
  Play,
  Search,
  ShieldCheck,
  TrendingUp,
  Rocket,
  Zap,
  Check,
  Star,
  Clock,
  Target,
  Building,
  Award,
  ChartBar,
  Lock,
  Smartphone,
  Palette,
  Calendar,
  CreditCard,
  Settings,
  Code,
  BookOpen,
  Activity,
  Bot,
  ChevronRight as ChevronRightIcon,
  Eye,
  FlaskConical,
  Link as LinkIcon
} from 'lucide-react';
import Button from '../ui/Button';

export default function NeoFuturisticNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const router = useRouter();

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const closeMobileMenu = () => {
    setIsOpen(false);
    setActiveDropdown(null);
  };

  const isActive = (path: string) => router.pathname === path;

  const serviceCategories = [
    {
      name: 'Quantum Computing',
      description: 'Revolutionary quantum computing solutions',
      icon: <Atom className="w-5 h-5" />,
      color: 'from-purple-500 to-pink-500',
      services: [
        { name: 'Quantum AI Platform', description: 'AI-powered quantum computing', price: '$299/month', href: '/quantum-ai-cognitive' },
        { name: 'Quantum Optimization', description: 'Quantum algorithms for complex problems', price: '$199/month', href: '/quantum-ai-cognitive' },
        { name: 'Quantum Simulation', description: 'Advanced quantum simulations', price: '$399/month', href: '/space-technology' }
      ]
    },
    {
      name: 'AI & Machine Learning',
      description: 'Advanced artificial intelligence and ML platforms',
      icon: <Brain className="w-5 h-5" />,
      color: 'from-blue-500 to-cyan-500',
      services: [
        { name: 'AI Content Generator', description: 'Professional AI content creation', price: '$49/month', href: '/ai-content-generator' },
        { name: 'AI Analytics Platform', description: 'Advanced business intelligence', price: '$99/month', href: '/ai-data-analytics' },
        { name: 'AI Automation Suite', description: 'Complete business automation', price: '$149/month', href: '/automation' }
      ]
    },
    {
      name: 'Cybersecurity',
      description: 'Next-generation security solutions',
      icon: <Shield className="w-5 h-5" />,
      color: 'from-red-500 to-orange-500',
      services: [
        { name: 'Quantum Cybersecurity', description: 'Post-quantum era security', price: '$159/month', href: '/quantum-cybersecurity' },
        { name: 'AI Threat Detection', description: 'Intelligent security monitoring', price: '$89/month', href: '/security' },
        { name: 'Zero-Trust Platform', description: 'Advanced access control', price: '$129/month', href: '/security' }
      ]
    },
    {
      name: 'Blockchain & Web3',
      description: 'Future-proof blockchain and decentralized solutions',
      icon: <LinkIcon className="w-5 h-5" />,
      color: 'from-indigo-500 to-purple-500',
      services: [
        { name: 'Quantum Blockchain', description: 'Post-quantum blockchain platform', price: '$349/month', href: '/quantum-blockchain' },
        { name: 'DeFi Protocol Suite', description: 'Complete DeFi solutions', price: '$199/month', href: '/services?category=Blockchain%20%26%20Web3' },
        { name: 'NFT Marketplace', description: 'AI-curated NFT platform', price: '$99/month', href: '/services?category=Blockchain%20%26%20Web3' }
      ]
    },
    {
      name: 'IoT & Smart Cities',
      description: 'Connected devices and intelligent infrastructure',
      icon: <Globe className="w-5 h-5" />,
      color: 'from-teal-500 to-green-500',
      services: [
        { name: 'Quantum IoT Platform', description: 'Quantum-secured IoT solutions', price: '$199/month', href: '/quantum-iot' },
        { name: 'Smart City Suite', description: 'Complete urban intelligence', price: '$299/month', href: '/services?category=IoT%20%26%20Smart%20Cities' },
        { name: 'Industrial IoT', description: 'Manufacturing automation', price: '$249/month', href: '/autonomous-manufacturing' }
      ]
    },
    {
      name: 'Metaverse & VR/AR',
      description: 'Immersive digital experiences and virtual worlds',
      icon: <Eye className="w-5 h-5" />,
      color: 'from-pink-500 to-rose-500',
      services: [
        { name: 'Quantum Metaverse', description: 'Quantum-enhanced virtual reality', price: '$499/month', href: '/quantum-metaverse' },
        { name: 'VR Development', description: 'Complete VR platform', price: '$299/month', href: '/services?category=Metaverse%20%26%20VR/AR' },
        { name: 'AR Solutions', description: 'Augmented reality platform', price: '$199/month', href: '/services?category=Metaverse%20%26%20VR/AR' }
      ]
    },
    {
      name: 'Robotics & Automation',
      description: 'Intelligent automation and robotic systems',
      icon: <Cpu className="w-5 h-5" />,
      color: 'from-orange-500 to-red-500',
      services: [
        { name: 'Quantum Robotics', description: 'AI-powered robotics platform', price: '$799/month', href: '/quantum-robotics' },
        { name: 'Manufacturing AI', description: 'Autonomous manufacturing', price: '$199/month', href: '/autonomous-manufacturing' },
        { name: 'Service Robotics', description: 'Intelligent service automation', price: '$349/month', href: '/services?category=Robotics%20%26%20Automation' }
      ]
    },
    {
      name: 'Energy & Sustainability',
      description: 'Green technology and energy optimization',
      icon: <Zap className="w-5 h-5" />,
      color: 'from-yellow-500 to-orange-500',
      services: [
        { name: 'Quantum Energy', description: 'AI-optimized energy management', price: '$299/month', href: '/quantum-energy' },
        { name: 'Smart Grid', description: 'Intelligent energy distribution', price: '$199/month', href: '/services?category=Energy%20%26%20Sustainability' },
        { name: 'Sustainability AI', description: 'Environmental impact optimization', price: '$149/month', href: '/services?category=Energy%20%26%20Sustainability' }
      ]
    },
    {
      name: 'Financial Technology',
      description: 'Innovative fintech and trading solutions',
      icon: <DollarSign className="w-5 h-5" />,
      color: 'from-violet-500 to-purple-500',
      services: [
        { name: 'Quantum Trading', description: 'Quantum-enhanced algorithmic trading', price: '$899/month', href: '/quantum-financial-trading' },
        { name: 'AI Risk Management', description: 'Intelligent financial risk analysis', price: '$399/month', href: '/services?category=Financial%20Technology' },
        { name: 'Blockchain Finance', description: 'DeFi and blockchain solutions', price: '$199/month', href: '/quantum-blockchain' }
      ]
    },
    {
      name: 'Biotechnology & Healthcare',
      description: 'AI-powered healthcare and biotech solutions',
      icon: <FlaskConical className="w-5 h-5" />,
      color: 'from-emerald-500 to-teal-500',
      services: [
        { name: 'Biotech AI', description: 'AI-powered drug discovery', price: '$599/month', href: '/biotech-ai' },
        { name: 'Healthcare Analytics', description: 'Medical data intelligence', price: '$299/month', href: '/services?category=Biotechnology%20%26%20Healthcare' },
        { name: 'Genomic AI', description: 'Advanced genetic analysis', price: '$399/month', href: '/services?category=Biotechnology%20%26%20Healthcare' }
      ]
    }
  ];

  const companyInfo = [
    {
      name: 'About Zion Tech Group',
      description: 'Leading the global micro SaaS revolution',
      icon: <Rocket className="w-5 h-5" />,
      link: '/about'
    },
    {
      name: 'Careers',
      description: 'Join our revolutionary team',
      icon: <Star className="w-5 h-5" />,
      link: '/careers'
    },
    {
      name: 'News & Updates',
      description: 'Latest announcements and releases',
      icon: <TrendingUp className="w-5 h-5" />,
      link: '/news'
    },
    {
      name: 'Contact',
      description: 'Talk to our team 24/7',
      icon: <Phone className="w-5 h-5" />,
      link: '/contact'
    }
  ];

  const resources = [
    {
      name: 'Documentation',
      description: 'Comprehensive service guides',
      icon: <BookOpen className="w-5 h-5" />,
      link: '/docs'
    },
    {
      name: 'Blog & Insights',
      description: 'Latest technology trends',
      icon: <FileText className="w-5 h-5" />,
      link: '/blog'
    },
    {
      name: 'Case Studies',
      description: 'Success stories from clients',
      icon: <ChartBar className="w-5 h-5" />,
      link: '/case-studies'
    },
    {
      name: 'Resources',
      description: 'Guides, templates, and tools',
      icon: <Search className="w-5 h-5" />,
      link: '/resources'
    }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-black/80 backdrop-blur-md border-b border-gray-700/50' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
            </div>
            <div className="hidden sm:block">
              <div className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                Zion Tech Group
              </div>
              <div className="text-xs text-gray-400">Revolutionary Technology</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {/* Services Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-300 py-2"
                onClick={() => toggleDropdown('services')}
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                  activeDropdown === 'services' ? 'rotate-180' : ''
                }`} />
              </button>
              
              {activeDropdown === 'services' && (
                <div className="absolute top-full left-0 mt-2 w-[800px] bg-black/90 backdrop-blur-xl rounded-2xl border border-gray-700/50 shadow-2xl p-6">
                  <div className="grid grid-cols-2 gap-6">
                    {serviceCategories.map((category, index) => (
                      <div key={index} className="group">
                        <div className="flex items-center space-x-3 mb-3">
                          <div className={`p-2 rounded-lg bg-gradient-to-r ${category.color} bg-opacity-20`}>
                            {category.icon}
                          </div>
                          <div>
                            <h3 className="text-white font-semibold group-hover:text-cyan-400 transition-colors">
                              {category.name}
                            </h3>
                            <p className="text-gray-400 text-sm">{category.description}</p>
                          </div>
                        </div>
                        <div className="space-y-2">
                          {category.services.map((service, serviceIndex) => (
                            <div key={serviceIndex} className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-800/50 transition-colors">
                              <div>
                                <div className="text-white text-sm font-medium">{service.name}</div>
                                <div className="text-gray-400 text-xs">{service.description}</div>
                              </div>
                              <div className="text-cyan-400 text-sm font-semibold">{service.price}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 pt-6 border-t border-gray-700/50">
                    <div className="flex items-center justify-between">
                      <div className="text-gray-400 text-sm">
                        <span className="text-cyan-400 font-semibold">500+</span> Revolutionary Services Available
                      </div>
                      <Button href="/services" variant="quantum" size="sm">
                        View All Services
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Direct Links */}
            <Link
              href="/it-services"
              className="text-gray-300 hover:text-white transition-colors duration-300 py-2"
            >
              IT Services
            </Link>
            <Link
              href="/ai-services"
              className="text-gray-300 hover:text-white transition-colors duration-300 py-2"
            >
              AI Services
            </Link>
            <Link
              href="/micro-saas"
              className="text-gray-300 hover:text-white transition-colors duration-300 py-2"
            >
              Micro SaaS
            </Link>
            <Link
              href="/pricing"
              className="text-gray-300 hover:text-white transition-colors duration-300 py-2"
            >
              Pricing
            </Link>

            {/* Company Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-300 py-2"
                onClick={() => toggleDropdown('company')}
              >
                <span>Company</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                  activeDropdown === 'company' ? 'rotate-180' : ''
                }`} />
              </button>
              
              {activeDropdown === 'company' && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-black/90 backdrop-blur-xl rounded-2xl border border-gray-700/50 shadow-2xl p-6">
                  <div className="space-y-4">
                    {companyInfo.map((item, index) => (
                      <Link
                        key={index}
                        href={item.link}
                        className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-800/50 transition-colors group"
                        onClick={closeMobileMenu}
                      >
                        <div className="text-cyan-400 group-hover:text-cyan-300 transition-colors">
                          {item.icon}
                        </div>
                        <div>
                          <div className="text-white font-medium group-hover:text-cyan-400 transition-colors">
                            {item.name}
                          </div>
                          <div className="text-gray-400 text-sm">{item.description}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Resources Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-300 py-2"
                onClick={() => toggleDropdown('resources')}
              >
                <span>Resources</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                  activeDropdown === 'resources' ? 'rotate-180' : ''
                }`} />
              </button>
              
              {activeDropdown === 'resources' && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-black/90 backdrop-blur-xl rounded-2xl border border-gray-700/50 shadow-2xl p-6">
                  <div className="space-y-4">
                    {resources.map((item, index) => (
                      <Link
                        key={index}
                        href={item.link}
                        className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-800/50 transition-colors group"
                        onClick={closeMobileMenu}
                      >
                        <div className="text-purple-400 group-hover:text-purple-300 transition-colors">
                          {item.icon}
                        </div>
                        <div>
                          <div className="text-white font-medium group-hover:text-purple-400 transition-colors">
                            {item.name}
                          </div>
                          <div className="text-gray-400 text-sm">{item.description}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Contact Info */}
            <div className="relative group">
              <button
                className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-300 py-2"
                onClick={() => toggleDropdown('contact')}
              >
                <span>Contact</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                  activeDropdown === 'contact' ? 'rotate-180' : ''
                }`} />
              </button>
              
              {activeDropdown === 'contact' && (
                <div className="absolute top-full right-0 mt-2 w-80 bg-black/90 backdrop-blur-xl rounded-2xl border border-gray-700/50 shadow-2xl p-6">
                  <div className="space-y-4">
                    <div className="text-center mb-4">
                      <h3 className="text-white font-semibold text-lg">Get in Touch</h3>
                      <p className="text-gray-400 text-sm">Available 24/7 for your needs</p>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-800/50 transition-colors">
                        <Phone className="w-5 h-5 text-cyan-400" />
                        <div>
                          <div className="text-white font-medium">{contactInfo.mobile}</div>
                          <div className="text-gray-400 text-sm">Mobile</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-800/50 transition-colors">
                        <Mail className="w-5 h-5 text-purple-400" />
                        <div>
                          <div className="text-white font-medium">{contactInfo.email}</div>
                          <div className="text-gray-400 text-sm">Email</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-800/50 transition-colors">
                        <MapPin className="w-5 h-5 text-green-400" />
                        <div>
                          <div className="text-white font-medium text-sm">{contactInfo.address}</div>
                          <div className="text-gray-400 text-sm">Address</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-800/50 transition-colors">
                        <Globe className="w-5 h-5 text-blue-400" />
                        <div>
                          <div className="text-white font-medium">{contactInfo.website}</div>
                          <div className="text-gray-400 text-sm">Website</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="pt-4 border-t border-gray-700/50">
                      <Button href="/contact" variant="quantum" size="sm" className="w-full">
                        Contact Us Now
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* CTA Button */}
            <Button href="/services" variant="quantum" size="sm">
              Get Started
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-gray-300 hover:text-white transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-gray-700/50">
          <div className="max-w-7xl mx-auto px-4 py-6">
            <div className="space-y-6">
              {/* Services Section */}
              <div>
                <button
                  className="flex items-center justify-between w-full text-left text-white font-semibold mb-4"
                  onClick={() => toggleDropdown('mobile-services')}
                >
                  <span>Services</span>
                  <ChevronRight className={`w-5 h-5 transition-transform duration-300 ${
                    activeDropdown === 'mobile-services' ? 'rotate-90' : ''
                  }`} />
                </button>
                
                {activeDropdown === 'mobile-services' && (
                  <div className="ml-4 space-y-3">
                    {serviceCategories.map((category, index) => (
                      <div key={index} className="border-l-2 border-gray-700 pl-4">
                        <div className="text-cyan-400 font-medium mb-2">{category.name}</div>
                        <div className="text-gray-400 text-sm mb-2">{category.description}</div>
                        <div className="space-y-1">
                          {category.services.slice(0, 2).map((service, serviceIndex) => (
                            <div key={serviceIndex} className="text-xs text-gray-500">
                              • {service.name} - {service.price}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                    <div className="pt-3">
                      <Button href="/services" variant="quantum" size="sm" className="w-full">
                        View All Services
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                )}
              </div>

              {/* Company Section */}
              <div>
                <button
                  className="flex items-center justify-between w-full text-left text-white font-semibold mb-4"
                  onClick={() => toggleDropdown('mobile-company')}
                >
                  <span>Company</span>
                  <ChevronRight className={`w-5 h-5 transition-transform duration-300 ${
                    activeDropdown === 'mobile-company' ? 'rotate-90' : ''
                  }`} />
                </button>
                
                {activeDropdown === 'mobile-company' && (
                  <div className="ml-4 space-y-3">
                    {companyInfo.map((item, index) => (
                      <Link
                        key={index}
                        href={item.link}
                        className="block text-gray-300 hover:text-white transition-colors"
                        onClick={closeMobileMenu}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Resources Section */}
              <div>
                <button
                  className="flex items-center justify-between w-full text-left text-white font-semibold mb-4"
                  onClick={() => toggleDropdown('mobile-resources')}
                >
                  <span>Resources</span>
                  <ChevronRight className={`w-5 h-5 transition-transform duration-300 ${
                    activeDropdown === 'mobile-resources' ? 'rotate-90' : ''
                  }`} />
                </button>
                
                {activeDropdown === 'mobile-resources' && (
                  <div className="ml-4 space-y-3">
                    {resources.map((item, index) => (
                      <Link
                        key={index}
                        href={item.link}
                        className="block text-gray-300 hover:text-white transition-colors"
                        onClick={closeMobileMenu}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Contact Info */}
              <div className="pt-6 border-t border-gray-700/50">
                <div className="text-white font-semibold mb-4">Contact Information</div>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-cyan-400" />
                    <span className="text-gray-300">{contactInfo.mobile}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-purple-400" />
                    <span className="text-gray-300">{contactInfo.email}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300 text-sm">{contactInfo.address}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Globe className="w-5 h-5 text-blue-400" />
                    <span className="text-gray-300">{contactInfo.website}</span>
                  </div>
                </div>
                
                <div className="mt-6 space-y-3">
                  <Button href="/services" variant="quantum" size="lg" className="w-full">
                    Explore Services
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                  <Button href="/contact" variant="secondary" size="lg" className="w-full">
                    Contact Us
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}