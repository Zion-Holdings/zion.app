import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const services = [
    { name: 'AI Development', href: '/services/ai-development', description: 'Custom AI solutions and ML models' },
    { name: 'Cloud Architecture', href: '/services/cloud-services', description: 'Scalable cloud infrastructure' },
    { name: 'Data Analytics', href: '/services/data-analytics', description: 'Business intelligence & insights' },
    { name: 'Blockchain Solutions', href: '/services/blockchain', description: 'Decentralized applications' },
    { name: 'IoT Platforms', href: '/services/iot-platforms', description: 'Connected device solutions' },
    { name: 'Web Development', href: '/services/web-development', description: 'Modern web applications' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">Z</span>
              </div>
              <span className="text-white font-bold text-xl">Zion Tech Group</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-white/80 hover:text-white transition-colors">
              Home
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative group">
              <button 
                className="flex items-center text-white/80 hover:text-white transition-colors"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                Services
                <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              
              {/* Services Dropdown Menu */}
              <div 
                className={`absolute top-full left-0 mt-2 w-80 bg-black/90 backdrop-blur-md border border-white/20 rounded-lg shadow-xl transition-all duration-300 ${
                  isServicesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                }`}
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <div className="p-4">
                  <div className="grid grid-cols-1 gap-3">
                    {services.map((service) => (
                      <Link
                        key={service.name}
                        href={service.href}
                        className="block p-3 rounded-lg hover:bg-white/10 transition-colors group"
                      >
                        <div>
                          <div className="font-medium text-white group-hover:text-blue-400 transition-colors">
                            {service.name}
                          </div>
                          <div className="text-sm text-white/60 group-hover:text-white/80 transition-colors">
                            {service.description}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <Link href="/about" className="text-white/80 hover:text-white transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-white/80 hover:text-white transition-colors">
              Contact
            </Link>
            
            <Link 
              href="/contact" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
            >
              Get Started
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="py-4 space-y-4 border-t border-white/10">
            <Link 
              href="/" 
              className="block text-white/80 hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            
            <div className="space-y-2">
              <div className="text-white/60 text-sm font-medium">Services</div>
              {services.map((service) => (
                <Link
                  key={service.name}
                  href={service.href}
                  className="block pl-4 text-white/80 hover:text-white transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {service.name}
                </Link>
              ))}
            </div>
            
            <Link 
              href="/about" 
              className="block text-white/80 hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              href="/contact" 
              className="block text-white/80 hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            
            <Link 
              href="/contact" 
              className="block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-medium text-center hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;