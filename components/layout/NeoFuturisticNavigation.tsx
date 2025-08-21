import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Menu, X, Zap, Brain, Cloud, Shield, Rocket, Atom, Bot, Globe, BarChart3, Phone, Mail, MapPin } from 'lucide-react';

const NeoFuturisticNavigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/', icon: <Zap className="w-4 h-4" /> },
    { name: 'All Services', href: '/all-services', icon: <Cloud className="w-4 h-4" /> },
    { name: 'Services', href: '/services', icon: <Cloud className="w-4 h-4" />, dropdown: [
      { name: 'AI & Machine Learning', href: '/services?category=AI%20%26%20Machine%20Learning', icon: <Brain className="w-4 h-4" /> },
      { name: 'Cloud & Infrastructure', href: '/services?category=Cloud%20%26%20Infrastructure', icon: <Cloud className="w-4 h-4" /> },
      { name: 'Cybersecurity', href: '/services?category=Cybersecurity', icon: <Shield className="w-4 h-4" /> },
      { name: 'Analytics & BI', href: '/services?category=Analytics%20%26%20Business%20Intelligence', icon: <BarChart3 className="w-4 h-4" /> },
      { name: 'Quantum Computing', href: '/services?category=Quantum%20Computing', icon: <Atom className="w-4 h-4" /> },
    ]},
    { name: 'IT Services', href: '/it-services', icon: <Globe className="w-4 h-4" /> },
    { name: 'AI Services', href: '/ai-services', icon: <Brain className="w-4 h-4" /> },
    { name: 'Micro SaaS', href: '/micro-saas', icon: <Bot className="w-4 h-4" /> },
    { name: 'Pricing', href: '/pricing', icon: <BarChart3 className="w-4 h-4" /> },
    { name: 'About', href: '/about', icon: <Shield className="w-4 h-4" /> },
    { name: 'Contact', href: '/contact', icon: <Rocket className="w-4 h-4" /> },
  ];

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709'
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top contact bar */}
      <div className="hidden md:block bg-black/60 backdrop-blur-xl border-b border-gray-700/40">
        <div className="max-w-7xl mx-auto px-4 py-2 text-xs text-gray-300">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <a href={`tel:${contactInfo.mobile.replace(/[^+\d]/g, '')}`} className="flex items-center gap-2 hover:text-white"><Phone className="w-3 h-3 text-cyan-400" />{contactInfo.mobile}</a>
              <a href={`mailto:${contactInfo.email}`} className="flex items-center gap-2 hover:text-white"><Mail className="w-3 h-3 text-purple-400" />{contactInfo.email}</a>
              <a href={`https://maps.google.com/?q=${encodeURIComponent(contactInfo.address)}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white"><MapPin className="w-3 h-3 text-emerald-400" />{contactInfo.address}</a>
            </div>
            <div className="hidden lg:flex items-center gap-4 text-gray-400">
              <span>99.99% uptime</span>
              <span>Free trials available</span>
              <span>24/7 AI support</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className={`${scrolled ? 'bg-black/90 backdrop-blur-xl border-b border-cyan-500/20 shadow-2xl shadow-cyan-500/10' : 'bg-transparent'} transition-all`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-cyan-500 via-blue-600 to-purple-600 rounded-2xl flex items-center justify-center">
                  <Zap className="w-6 h-6 md:w-7 md:h-7 text-white" />
                </div>
                <div className="absolute inset-0 rounded-2xl blur-xl bg-gradient-to-br from-cyan-500 via-blue-600 to-purple-600 opacity-40" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">Zion Tech Group</span>
                <span className="hidden md:block text-[10px] tracking-widest text-gray-400">REVOLUTIONARY AI & QUANTUM SOLUTIONS</span>
              </div>
            </Link>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <div key={item.name} className="relative group">
                  <Link href={item.href} className="flex items-center gap-2 px-4 py-3 text-gray-300 hover:text-white rounded-xl hover:bg-white/5 transition-all">
                    <span className="text-cyan-400">{item.icon}</span>
                    <span className="relative font-medium">
                      {item.name}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 group-hover:w-full transition-all" />
                    </span>
                  </Link>
                  {item.dropdown && (
                    <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all absolute top-full left-0 mt-2 w-80 bg-black/95 backdrop-blur-xl border border-cyan-500/20 rounded-2xl shadow-2xl">
                      <div className="p-4 space-y-1">
                        {item.dropdown.map((d: any) => (
                          <Link key={d.name} href={d.href} className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 text-gray-300 hover:text-white">
                            <span className="text-cyan-400">{d.icon}</span>
                            <span className="font-medium">{d.name}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="hidden lg:block">
              <Link href="/contact" className="relative bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white px-6 py-3 rounded-2xl font-semibold hover:shadow-2xl hover:shadow-cyan-500/20 transition-all">
                <span className="relative z-10 flex items-center gap-2"><Rocket className="w-4 h-4" /> Get Started</span>
                <span className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-600 via-blue-700 to-purple-700 opacity-0 hover:opacity-100 transition-opacity" />
              </Link>
            </div>

            {/* Mobile button */}
            <div className="lg:hidden">
              <button onClick={() => setIsOpen(!isOpen)} className="p-2 rounded-xl text-gray-300 hover:text-white hover:bg-white/5 transition-colors">
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden bg-black/98 backdrop-blur-2xl border-t border-cyan-500/20">
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <div key={item.name}>
                <Link href={item.href} onClick={() => setIsOpen(false)} className="flex items-center gap-3 text-gray-300 hover:text-white py-3 px-3 rounded-xl hover:bg-white/5">
                  <span className="text-cyan-400">{item.icon}</span>
                  <span className="font-medium">{item.name}</span>
                </Link>
                {item.dropdown && (
                  <div className="ml-8 mt-1 space-y-1">
                    {item.dropdown.map((d: any) => (
                      <Link key={d.name} href={d.href} onClick={() => setIsOpen(false)} className="flex items-center gap-3 py-2 px-3 rounded-lg hover:bg-white/5 text-gray-400 hover:text-gray-200">
                        <span className="text-cyan-400">{d.icon}</span>
                        <span className="text-sm">{d.name}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-3 border-t border-gray-700">
              <Link href="/contact" onClick={() => setIsOpen(false)} className="block w-full text-center bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white py-3 rounded-2xl font-semibold">
                <span className="inline-flex items-center gap-2 justify-center"><Rocket className="w-4 h-4" /> Get Started</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default NeoFuturisticNavigation;