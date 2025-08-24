import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { useNavigation } from '../hooks/useNavigation';

interface DropdownMenuProps {
  trigger: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

interface DropdownItem {
  label: string;
  href: string;
  description: string;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ trigger, children, className = '' }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
      <div className="cursor-pointer">
        {trigger}
      </div>
      {isOpen && (
        <div className={`absolute top-full left-0 mt-2 w-80 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg shadow-xl z-50 ${className}`}>
          <div className="py-2">
            {children}
          </div>
        </div>
      )}
    </div>
  );
};



export default function SmartHeader() {
  const { isLoading } = useNavigation();
  const [mobileOpen, setMobileOpen] = useState(false);

  // Main navigation structure
  const mainNavigation = useMemo(() => [
    {
      id: 'home',
      label: '🏠 Home',
      href: '/',
      priority: 1
    },
    {
      id: 'about',
      label: 'ℹ️ About',
      href: '/about',
      priority: 2
    },
    {
      id: 'services',
      label: '🚀 Services',
      href: '/services',
      priority: 3,
      isDropdown: true
    },
    {
      id: 'solutions',
      label: '💡 Solutions',
      href: '/solutions',
      priority: 4,
      isDropdown: true
    },
    {
      id: 'resources',
      label: '📚 Resources',
      href: '#',
      priority: 5,
      isDropdown: true
    },
    {
      id: 'company',
      label: '🏢 Company',
      href: '#',
      priority: 6,
      isDropdown: true
    },
    {
      id: 'contact',
      label: '📞 Contact',
      href: '/contact',
      priority: 7
    }
  ], []);

  // Services dropdown items
  const servicesDropdown = [
    { label: 'AI & Machine Learning', href: '/services', description: 'Custom AI models and NLP solutions' },
    { label: 'Quantum Computing', href: '/quantum-neural-network-platform', description: 'Quantum AI and algorithms' },
    { label: 'Cloud & Infrastructure', href: '/services', description: 'Cloud migration and DevOps' },
    { label: 'Web & Mobile Development', href: '/services', description: 'Full-stack applications' },
    { label: 'Data Analytics', href: '/services', description: 'Business intelligence and insights' },
    { label: 'Cybersecurity', href: '/services', description: 'Advanced security solutions' }
  ];

  // Solutions dropdown items
  const solutionsDropdown = [
    { label: 'Healthcare Solutions', href: '/solutions', description: 'AI-powered medical diagnostics' },
    { label: 'Financial Solutions', href: '/solutions', description: 'Quantum-secure trading platforms' },
    { label: 'Manufacturing AI', href: '/solutions', description: 'Industry 4.0 automation' },
    { label: 'Retail Technology', href: '/solutions', description: 'Personalized shopping experiences' },
    { label: 'Government Tech', href: '/solutions', description: 'Secure public sector solutions' }
  ];

  // Resources dropdown items
  const resourcesDropdown = [
    { label: 'Documentation', href: '/docs', description: 'Technical guides and API references' },
    { label: 'Blog & Insights', href: '/blog', description: 'Latest AI and tech insights' },
    { label: 'Case Studies', href: '/case-studies', description: 'Success stories and implementations' },
    { label: 'Whitepapers', href: '/whitepaper-builder', description: 'Research and technical papers' },
    { label: 'Webinars', href: '#', description: 'Educational sessions and demos' }
  ];

  // Company dropdown items
  const companyDropdown = [
    { label: 'About Us', href: '/about', description: 'Our mission and values' },
    { label: 'Team', href: '/team', description: 'Meet our experts' },
    { label: 'Partners', href: '/partners', description: 'Partnership opportunities' },
    { label: 'Careers', href: '/careers', description: 'Join our team' },
    { label: 'News & Updates', href: '/blog', description: 'Company announcements' }
  ];

  if (isLoading) {
    return (
      <header className="sticky top-0 z-50">
        <div className="backdrop-blur supports-[backdrop-filter]:bg-black/30 bg-black/50 border-b border-white/10">
          <nav className="mx-auto max-w-7xl px-6">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-20 h-6 bg-white/20 rounded animate-pulse"></div>
              </div>
              <div className="hidden md:flex items-center gap-6">
                {[...Array(7)].map((_, i) => (
                  <div key={i} className="w-16 h-4 bg-white/20 rounded animate-pulse"></div>
                ))}
              </div>
            </div>
          </nav>
        </div>
      </header>
    );
  }

  return (
    <header className="sticky top-0 z-50">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:left-3 focus:top-3 rounded bg-white px-3 py-2 text-slate-900">
        Skip to content
      </a>
      <div className="backdrop-blur supports-[backdrop-filter]:bg-black/30 bg-black/50 border-b border-white/10">
        <nav className="mx-auto max-w-7xl px-6">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-3">
              <Link href="/" className="inline-flex items-center gap-2">
                <span className="text-xl font-extrabold tracking-wide bg-gradient-to-r from-fuchsia-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-neon">
                  Zion Tech Group
                </span>
              </Link>
              <span className="hidden text-xs text-white/60 sm:inline">
                AI • Quantum • Innovation
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden items-center gap-6 md:flex">
              {mainNavigation.map((item) => {
                if (item.isDropdown) {
                  let dropdownItems: DropdownItem[];
                  let dropdownTitle: string;
                  let dropdownDescription: string;

                  switch (item.id) {
                    case 'services':
                      dropdownItems = servicesDropdown;
                      dropdownTitle = 'Our Services';
                      dropdownDescription = 'AI, quantum computing, and technology solutions';
                      break;
                    case 'solutions':
                      dropdownItems = solutionsDropdown;
                      dropdownTitle = 'Industry Solutions';
                      dropdownDescription = 'Tailored solutions for your industry';
                      break;
                    case 'resources':
                      dropdownItems = resourcesDropdown;
                      dropdownTitle = 'Resources';
                      dropdownDescription = 'Documentation, insights, and learning materials';
                      break;
                    case 'company':
                      dropdownItems = companyDropdown;
                      dropdownTitle = 'Company';
                      dropdownDescription = 'About Zion Tech Group';
                      break;
                    default:
                      dropdownItems = [];
                      dropdownTitle = '';
                      dropdownDescription = '';
                  }

                  return (
                    <DropdownMenu key={item.id} trigger={
                      <span className="text-white/80 hover:text-white transition-colors cursor-pointer">
                        {item.label}
                      </span>
                    }>
                      <div className="px-3 py-2 border-b border-white/20 mb-2">
                        <h3 className="text-white font-semibold text-sm">{dropdownTitle}</h3>
                        <p className="text-white/60 text-xs">{dropdownDescription}</p>
                      </div>
                      {dropdownItems.map((dropdownItem, idx) => (
                        <Link 
                          key={idx} 
                          href={dropdownItem.href}
                          className="block px-4 py-3 text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                        >
                          <div className="font-medium">{dropdownItem.label}</div>
                          <div className="text-xs text-white/60">{dropdownItem.description}</div>
                        </Link>
                      ))}
                    </DropdownMenu>
                  );
                }

                return (
                  <Link 
                    key={item.id} 
                    href={item.href}
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="text-white/80 hover:text-white transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileOpen && (
            <div className="md:hidden py-4 border-t border-white/20">
              <div className="space-y-2">
                {mainNavigation.map((item) => (
                  <Link
                    key={item.id}
                    href={item.href}
                    className="block px-4 py-2 text-white/80 hover:text-white hover:bg-white/10 transition-colors rounded"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}