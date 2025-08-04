import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface NavigationItem {
  name: string;
  href: string;
  icon: string;
  description: string;
}

const FuturisticNavigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      let current = '';
      
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - 200) {
          current = section.getAttribute('id') || '';
        }
      });
      
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems: NavigationItem[] = [
    {
      name: 'Marketplace',
      href: '/marketplace',
      icon: '🛍️',
      description: 'Explore AI-powered services and products'
    },
    {
      name: 'Talent Directory',
      href: '/talent-directory',
      icon: '👥',
      description: 'Connect with top AI professionals'
    },
    {
      name: 'Project Management',
      href: '/project-management',
      icon: '📊',
      description: 'Manage your AI projects efficiently'
    },
    {
      name: 'Equipment Rental',
      href: '/equipment-rental',
      icon: '🔧',
      description: 'Rent cutting-edge AI hardware'
    },
    {
      name: 'Service Requests',
      href: '/service-request-system',
      icon: '📝',
      description: 'Submit and track service requests'
    },
    {
      name: 'Real-time Chat',
      href: '/real-time-chat',
      icon: '💬',
      description: 'Instant communication platform'
    },
    {
      name: 'Review System',
      href: '/review-system',
      icon: '⭐',
      description: 'Rate and review services'
    },
    {
      name: 'User Profiles',
      href: '/user-profiles',
      icon: '👤',
      description: 'Manage your professional profile'
    }
  ];

  return (
    <>
      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Navigation Sidebar */}
      <nav className={`fixed left-0 top-0 h-full z-50 transition-all duration-500 ease-in-out ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } lg:translate-x-0 lg:relative lg:z-auto`}>
        <div className="h-full w-80 bg-gradient-to-b from-cyber-dark via-cyber-darker to-cyber-dark-blue border-r border-neon-blue/20 backdrop-blur-xl">
          {/* Header */}
          <div className="p-6 border-b border-neon-blue/20">
            <div className="flex items-center justify-between">
              <Link href="/" className="flex items-center space-x-3 group">
                <div className="w-10 h-10 bg-gradient-to-r from-neon-blue to-neon-purple rounded-lg flex items-center justify-center neon-glow">
                  <span className="text-white text-xl font-bold">Z</span>
                </div>
                <div>
                  <h1 className="text-white font-bold text-lg">Zion</h1>
                  <p className="text-neon-blue text-xs">AI Marketplace</p>
                </div>
              </Link>
              <button
                onClick={() => setIsOpen(false)}
                className="lg:hidden p-2 text-white hover:text-neon-blue transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Navigation Items */}
          <div className="p-4 space-y-2">
            {navigationItems.map((item) => {
              const isActive = router.pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`group relative block p-4 rounded-xl transition-all duration-300 ${
                    isActive
                      ? 'bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 border border-neon-blue/40 neon-glow'
                      : 'hover:bg-glass-dark border border-transparent hover:border-neon-blue/20'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {/* Holographic Background Effect */}
                  <div className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                    isActive ? 'opacity-100' : ''
                  }`}>
                    <div className="absolute inset-0 bg-holographic bg-[length:200%_200%] animate-holographic-shift opacity-20 rounded-xl"></div>
                  </div>

                  <div className="relative z-10 flex items-center space-x-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center text-2xl transition-all duration-300 ${
                      isActive
                        ? 'bg-gradient-to-r from-neon-blue to-neon-purple text-white shadow-neon-blue'
                        : 'bg-glass text-gray-300 group-hover:text-white group-hover:bg-gradient-to-r group-hover:from-neon-blue/20 group-hover:to-neon-purple/20'
                    }`}>
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className={`font-semibold transition-colors duration-300 ${
                        isActive ? 'text-white' : 'text-gray-300 group-hover:text-white'
                      }`}>
                        {item.name}
                      </h3>
                      <p className={`text-sm transition-colors duration-300 ${
                        isActive ? 'text-neon-blue' : 'text-gray-500 group-hover:text-gray-400'
                      }`}>
                        {item.description}
                      </p>
                    </div>
                    {isActive && (
                      <div className="w-2 h-2 bg-neon-blue rounded-full animate-pulse"></div>
                    )}
                  </div>

                  {/* Neon Border Effect */}
                  <div className={`absolute inset-0 rounded-xl border-2 transition-all duration-300 ${
                    isActive
                      ? 'border-neon-blue shadow-neon-blue'
                      : 'border-transparent group-hover:border-neon-blue/30'
                  }`}></div>
                </Link>
              );
            })}
          </div>

          {/* Footer */}
          <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-neon-blue/20">
            <div className="text-center">
              <p className="text-gray-400 text-xs mb-2">Powered by AI</p>
              <div className="flex justify-center space-x-2">
                <div className="w-2 h-2 bg-neon-blue rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-neon-purple rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-2 h-2 bg-neon-pink rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="lg:hidden fixed top-4 left-4 z-50 p-3 bg-gradient-to-r from-neon-blue to-neon-purple rounded-lg text-white neon-glow"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </>
  );
};

export default FuturisticNavigation; 