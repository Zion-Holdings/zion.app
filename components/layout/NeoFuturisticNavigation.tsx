import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Menu, X, Phone, Mail, Sparkles, Rocket, Grid, DollarSign } from 'lucide-react';
import Button from '../ui/Button';

const navLinks: { name: string; href: string }[] = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Solutions', href: '/solutions' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'AI Services', href: '/ai-services' },
  { name: 'IT Services', href: '/it-services' },
  { name: 'Resources', href: '/resources' },
  { name: 'Contact', href: '/contact' }
];

export default function NeoFuturisticNavigation() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handler = () => setOpen(false);
    router.events.on('routeChangeStart', handler);
    return () => {
      router.events.off('routeChangeStart', handler);
    };
  }, [router.events]);

  const contact = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com'
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 blur-xl" />
        <nav className="relative mx-auto max-w-7xl px-4 py-3 border-b border-gray-700/50 bg-black/60 backdrop-blur-xl rounded-b-2xl">
          <div className="flex items-center justify-between">
            {/* Brand */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 blur-md opacity-40" />
              </div>
              <div className="leading-tight">
                <div className="text-white font-bold text-lg">Zion Tech Group</div>
                <div className="text-xs text-gray-400">Revolutionary Technology</div>
              </div>
            </Link>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-300 hover:text-cyan-400 transition-colors text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Actions */}
            <div className="hidden lg:flex items-center gap-3">
              <a href={`tel:${contact.mobile.replace(/[^+\d]/g, '')}`} className="text-cyan-400 hover:text-white flex items-center gap-2 text-sm">
                <Phone className="w-4 h-4" /> {contact.mobile}
              </a>
              <a href={`mailto:${contact.email}`} className="text-purple-400 hover:text-white flex items-center gap-2 text-sm">
                <Mail className="w-4 h-4" /> {contact.email}
              </a>
              <Button href="/services" className="hidden xl:inline-flex bg-gradient-to-r from-cyan-500 to-blue-600 text-white">
                <Grid className="w-4 h-4 mr-2" /> Explore
              </Button>
              <Button href="/pricing" variant="secondary" className="hidden xl:inline-flex">
                <DollarSign className="w-4 h-4 mr-2" /> Pricing
              </Button>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setOpen((v) => !v)}
              className="lg:hidden p-2 rounded-lg border border-gray-700/50 text-gray-300 hover:text-white hover:border-cyan-500/60"
              aria-label="Toggle menu"
            >
              {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile menu */}
          {open && (
            <div className="mt-4 lg:hidden">
              <div className="grid grid-cols-1 gap-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block px-4 py-3 rounded-lg bg-gray-900/60 border border-gray-700/50 text-gray-200 hover:border-cyan-500/50 hover:text-white"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2">
                <Button href="/services" className="w-full">
                  <Rocket className="w-4 h-4 mr-2" /> Explore Services
                </Button>
                <Button href="/contact" variant="outline" className="w-full">
                  Contact Us
                </Button>
              </div>

              <div className="mt-4 flex flex-col gap-2 text-sm">
                <a href={`tel:${contact.mobile.replace(/[^+\d]/g, '')}`} className="flex items-center gap-2 text-cyan-400">
                  <Phone className="w-4 h-4" /> {contact.mobile}
                </a>
                <a href={`mailto:${contact.email}`} className="flex items-center gap-2 text-purple-400">
                  <Mail className="w-4 h-4" /> {contact.email}
                </a>
              </div>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}

