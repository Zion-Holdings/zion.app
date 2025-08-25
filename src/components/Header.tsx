import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown, Zap, Brain, Cloud, Shield, Database, Cpu, Network, Eye, Leaf, Heart, Calendar, ShoppingCart, Building, Factory, Store, Car, Plane, Ship, Home, Hospital, GraduationCap, FileText, BarChart3, Users, CreditCard, MessageSquare, Camera, Video, Music, BookOpen, Target, TrendingUp, PieChart, Activity, Globe, Bot, Settings, Truck } from 'lucide-react';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      name: "Micro SAAS Services",
      path: "/micro-saas-services",
      icon: <Zap className="w-4 h-4" />,
      description: "Affordable software solutions for small businesses"
    },
    {
      name: "AI & Machine Learning",
      path: "/ai-services",
      icon: <Brain className="w-4 h-4" />,
      description: "Cutting-edge AI solutions for business automation"
    },
    {
      name: "Cloud & DevOps",
      path: "/cloud-devops",
      icon: <Cloud className="w-4 h-4" />,
      description: "Scalable cloud infrastructure and deployment"
    },
    {
      name: "Cybersecurity",
      path: "/cybersecurity",
      icon: <Shield className="w-4 h-4" />,
      description: "Advanced security and compliance solutions"
    },
    {
      name: "Blockchain Solutions",
      path: "/blockchain",
      icon: <Database className="w-4 h-4" />,
      description: "Distributed ledger and smart contract platforms"
    },
    {
      name: "IoT & Edge Computing",
      path: "/iot-edge",
      icon: <Network className="w-4 h-4" />,
      description: "Connected devices and real-time processing"
    },
    {
      name: "AR/VR & Immersive Tech",
      path: "/immersive-tech",
      icon: <Eye className="w-4 h-4" />,
      description: "Virtual and augmented reality experiences"
    },
    {
      name: "Green Tech & Sustainability",
      path: "/green-tech",
      icon: <Leaf className="w-4 h-4" />,
      description: "Environmental impact and ESG solutions"
    },
    {
      name: "Healthcare Tech",
      path: "/healthcare-tech",
      icon: <Heart className="w-4 h-4" />,
      description: "Digital health and medical technology"
    },
    {
      name: "Financial Technology",
      path: "/fintech",
      icon: <CreditCard className="w-4 h-4" />,
      description: "Quantum finance and digital banking"
    },
    {
      name: "Event Management",
      path: "/event-tech",
      icon: <Calendar className="w-4 h-4" />,
      description: "Smart event planning and management"
    },
    {
      name: "Supply Chain & Inventory",
      path: "/supply-chain",
      icon: <ShoppingCart className="w-4 h-4" />,
      description: "Intelligent logistics and inventory optimization"
    }
  ];

  const solutions = [
    {
      name: "Enterprise Solutions",
      path: "/enterprise",
      icon: <Building className="w-4 h-4" />,
      description: "Large-scale business transformation"
    },
    {
      name: "Startup Solutions",
      path: "/startup",
      icon: <Zap className="w-4 h-4" />,
      description: "Rapid growth and scaling solutions"
    },
    {
      name: "Manufacturing Tech",
      path: "/manufacturing",
      icon: <Factory className="w-4 h-4" />,
      description: "Industry 4.0 and smart manufacturing"
    },
    {
      name: "Retail Technology",
      path: "/retail-tech",
      icon: <Store className="w-4 h-4" />,
      description: "Omnichannel retail and e-commerce"
    },
    {
      name: "Transportation & Logistics",
      path: "/transportation",
      icon: <Truck className="w-4 h-4" />,
      description: "Smart mobility and supply chain"
    },
    {
      name: "Education Technology",
      path: "/edtech",
      icon: <GraduationCap className="w-4 h-4" />,
      description: "Digital learning and training platforms"
    }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-black/90 backdrop-blur-md border-b border-zion-cyan/20 shadow-2xl shadow-zion-cyan/10' 
        : 'bg-gradient-to-r from-black/80 via-zion-blue-dark/80 to-black/80 backdrop-blur-sm'
    }`}>
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan/5 via-zion-purple/5 to-zion-cyan/5 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(0,229,255,0.1),transparent_50%)] animate-float"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 group">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-cyan bg-clip-text text-transparent group-hover:animate-neon-pulse transition-all duration-300">
                    ZION TECH GROUP
                  </h1>
                  <p className="text-xs text-zion-slate-light -mt-1">Innovation • Technology • Future</p>
                </div>
              </div>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden xl:flex space-x-1">
            <Link to="/" className="nav-link">
              Home
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative group">
              <button 
                className="nav-link flex items-center space-x-1"
                onMouseEnter={() => setActiveDropdown('services')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <span>Services</span>
                <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
              </button>
              
              {activeDropdown === 'services' && (
                <div className="absolute top-full left-0 mt-2 w-96 bg-black/95 backdrop-blur-xl border border-zion-cyan/20 rounded-xl shadow-2xl shadow-zion-cyan/20 opacity-100 visible transition-all duration-300 z-50">
                  <div className="p-4">
                    <h3 className="text-zion-cyan font-semibold mb-3 text-sm uppercase tracking-wider">Our Services</h3>
                    <div className="grid grid-cols-1 gap-2">
                      {services.map((service) => (
                        <Link
                          key={service.path}
                          to={service.path}
                          className="flex items-center space-x-3 p-3 rounded-lg hover:bg-zion-cyan/10 transition-all duration-200 group"
                        >
                          <div className="text-zion-cyan group-hover:scale-110 transition-transform duration-200">
                            {service.icon}
                          </div>
                          <div>
                            <div className="text-white font-medium group-hover:text-zion-cyan transition-colors duration-200">
                              {service.name}
                            </div>
                            <div className="text-zion-slate-light text-xs">
                              {service.description}
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Solutions Dropdown */}
            <div className="relative group">
              <button 
                className="nav-link flex items-center space-x-1"
                onMouseEnter={() => setActiveDropdown('solutions')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <span>Solutions</span>
                <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
              </button>
              
              {activeDropdown === 'solutions' && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-black/95 backdrop-blur-xl border border-zion-cyan/20 rounded-xl shadow-2xl shadow-zion-cyan/20 opacity-100 visible transition-all duration-300 z-50">
                  <div className="p-4">
                    <h3 className="text-zion-cyan font-semibold mb-3 text-sm uppercase tracking-wider">Industry Solutions</h3>
                    <div className="grid grid-cols-1 gap-2">
                      {solutions.map((solution) => (
                        <Link
                          key={solution.path}
                          to={solution.path}
                          className="flex items-center space-x-3 p-3 rounded-lg hover:bg-zion-cyan/10 transition-all duration-200 group"
                        >
                          <div className="text-zion-cyan group-hover:scale-110 transition-transform duration-200">
                            {solution.icon}
                          </div>
                          <div>
                            <div className="text-white font-medium group-hover:text-zion-cyan transition-colors duration-200">
                              {solution.name}
                            </div>
                            <div className="text-zion-slate-light text-xs">
                              {solution.description}
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link to="/marketplace" className="nav-link">
              Marketplace
            </Link>
            <Link to="/about" className="nav-link">
              About
            </Link>
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
          </nav>
          
          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="outline" size="sm" className="border-zion-cyan/50 text-zion-cyan hover:bg-zion-cyan hover:text-black transition-all duration-300">
              Sign In
            </Button>
            <Button size="sm" className="bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan/90 hover:to-zion-purple/90 text-white shadow-lg shadow-zion-cyan/25 hover:shadow-xl hover:shadow-zion-cyan/30 transition-all duration-300">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-zion-cyan hover:bg-zion-cyan/10 transition-colors duration-200"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-t border-zion-cyan/20 shadow-2xl">
          <div className="px-4 py-6 space-y-4">
            <Link to="/" className="mobile-nav-link">Home</Link>
            
            <div className="space-y-2">
              <div className="text-zion-cyan font-semibold text-sm uppercase tracking-wider mb-2">Services</div>
              {services.slice(0, 6).map((service) => (
                <Link key={service.path} to={service.path} className="mobile-nav-link ml-4">
                  {service.name}
                </Link>
              ))}
            </div>
            
            <div className="space-y-2">
              <div className="text-zion-cyan font-semibold text-sm uppercase tracking-wider mb-2">Solutions</div>
              {solutions.slice(0, 4).map((solution) => (
                <Link key={solution.path} to={solution.path} className="mobile-nav-link ml-4">
                  {solution.name}
                </Link>
              ))}
            </div>
            
            <Link to="/marketplace" className="mobile-nav-link">Marketplace</Link>
            <Link to="/about" className="mobile-nav-link">About</Link>
            <Link to="/contact" className="mobile-nav-link">Contact</Link>
            
            <div className="pt-4 space-y-3">
              <Button variant="outline" className="w-full border-zion-cyan/50 text-zion-cyan">
                Sign In
              </Button>
              <Button className="w-full bg-gradient-to-r from-zion-cyan to-zion-purple text-white">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

// Add these styles to your CSS
const navLinkStyles = `
  nav-link {
    @apply px-4 py-2 text-zion-slate-light hover:text-zion-cyan transition-all duration-300 relative group font-medium;
  }
  
  nav-link::after {
    @apply content-[''] absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-zion-cyan to-zion-purple transition-all duration-300 transform -translate-x-1/2;
  }
  
  nav-link:hover::after {
    @apply w-full;
  }
  
  mobile-nav-link {
    @apply block py-2 text-zion-slate-light hover:text-zion-cyan transition-colors duration-200;
  }
`;