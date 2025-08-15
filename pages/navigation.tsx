import Link from 'next/link';

export default function MainNavigation() {
  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/explore', label: 'Explore' },
    { href: '/automation', label: 'Automation' },
    { href: '/components', label: 'Components' },
    { href: '/reports', label: 'Reports' }
  ];

  const reportCategories = [
    { href: '/reports/insights', label: 'Insights' },
    { href: '/reports/dossiers', label: 'Dossiers' },
    { href: '/reports/tutorials', label: 'Tutorials' },
    { href: '/reports/whitepapers', label: 'Whitepapers' },
    { href: '/reports/blueprints', label: 'Blueprints' },
    { href: '/reports/playbooks', label: 'Playbooks' },
    { href: '/reports/patterns', label: 'Patterns' },
    { href: '/reports/guides', label: 'Guides' },
    { href: '/reports/cases', label: 'Case Studies' },
    { href: '/reports/updates', label: 'Updates' }
  ];

  return (
    <nav className="bg-slate-900/50 backdrop-blur-sm border-b border-white/10">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-cyan-400">
            Zion Tech Group
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link 
                key={item.href}
                href={item.href} 
                className="text-white/80 hover:text-cyan-400 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        
        {/* Report Categories Sub-navigation */}
        <div className="mt-4 pb-2 border-t border-white/10 pt-4">
          <div className="flex flex-wrap gap-4 text-sm">
            {reportCategories.map((category) => (
              <Link 
                key={category.href}
                href={category.href} 
                className="text-white/60 hover:text-cyan-400 transition-colors"
              >
                {category.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}