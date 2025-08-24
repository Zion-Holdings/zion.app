import React, { useMemo } from 'react';
import Link from 'next/link';
import { useNavigation } from '../hooks/useNavigation';

export default function SmartFooter() {
  const { navigation, isLoading } = useNavigation();

  // Group services by category for footer display
  const servicesByCategory = useMemo(() => {
    if (!navigation) return [];

    const categoryMap = new Map<string, typeof navigation.services>();
    
    navigation.services.forEach(service => {
      if (service.category) {
        if (!categoryMap.has(service.category)) {
          categoryMap.set(service.category, []);
        }
        categoryMap.get(service.category)!.push(service);
      }
    });

    return Array.from(categoryMap.entries()).map(([categoryName, services]) => ({
      name: categoryName,
      services: services.sort((a, b) => (a.priority || 0) - (b.priority || 0))
    }));
  }, [navigation]);

  // Get popular services (top 6 by priority)
  const popularServices = useMemo(() => {
    if (!navigation) return [];
    return navigation.services
      .filter(service => service.status === 'active')
      .sort((a, b) => (a.priority || 0) - (b.priority || 0))
      .slice(0, 6);
  }, [navigation]);

  if (isLoading) {
    return (
      <footer className="border-t border-white/10 bg-black/30">
        <div className="mx-auto max-w-7xl px-6 py-10 text-sm text-white/70 grid gap-6 md:grid-cols-4">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="space-y-2">
              <div className="w-24 h-6 bg-white/20 rounded animate-pulse"></div>
              <div className="w-32 h-4 bg-white/20 rounded animate-pulse"></div>
              <div className="w-28 h-4 bg-white/20 rounded animate-pulse"></div>
            </div>
          ))}
        </div>
        <div className="border-t border-white/10">
          <div className="mx-auto max-w-7xl px-6 py-4 text-xs text-white/50 flex items-center justify-between">
            <div className="w-32 h-4 bg-white/20 rounded animate-pulse"></div>
            <div className="w-48 h-4 bg-white/20 rounded animate-pulse"></div>
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer className="border-t border-white/10 bg-black/30">
      <div className="mx-auto max-w-7xl px-6 py-10 text-sm text-white/70">
        {/* Main Footer Content */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-3">
            <div className="text-lg font-semibold text-white">Zion Tech Group</div>
            <p className="text-white/70">AI-driven, self-improving web platform</p>
            <p className="text-white/50">Continuous, safe improvements delivered to main.</p>
            
            {/* Quick Stats */}
            {navigation && (
              <div className="pt-4 space-y-2">
                <div className="text-xs text-white/40">
                  {navigation.services.length} AI Services Available
                </div>
                <div className="text-xs text-white/40">
                  {navigation.categories.length} Technology Categories
                </div>
                <div className="text-xs text-white/40">
                  Continuously updated by autonomous agents
                </div>
              </div>
            )}
          </div>

          {/* Auto-generated Services */}
          <div className="space-y-3">
            <h4 className="text-white font-semibold">Popular Services</h4>
            <ul className="space-y-2">
              {popularServices.map(service => (
                <li key={service.id}>
                  <Link 
                    href={service.href} 
                    className="hover:text-white transition-colors text-white/70 hover:text-white"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm">{service.label}</span>
                      {service.status && (
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          service.status === 'active' ? 'bg-green-500/20 text-green-300' :
                          service.status === 'beta' ? 'bg-yellow-500/20 text-yellow-300' :
                          'bg-blue-500/20 text-blue-300'
                        }`}>
                          {service.status}
                        </span>
                      )}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="pt-2">
              <Link href="/services" className="text-blue-400 hover:text-blue-300 text-xs">
                View All Services →
              </Link>
            </div>
          </div>

          {/* Auto-generated Categories */}
          <div className="space-y-3">
            <h4 className="text-white font-semibold">Categories</h4>
            <ul className="space-y-2">
              {navigation?.categories.map(category => (
                <li key={category.id}>
                  <Link 
                    href={`/category/${category.slug}`}
                    className="hover:text-white transition-colors text-white/70 hover:text-white"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm flex items-center gap-2">
                        <span>{category.icon}</span>
                        {category.name}
                      </span>
                      <span className="text-white/40 text-xs">{category.serviceCount}</span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="pt-2">
              <Link href="/explore" className="text-blue-400 hover:text-blue-300 text-xs">
                Explore All Categories →
              </Link>
            </div>
          </div>

          {/* Important Links & Resources */}
          <div className="space-y-3">
            <h4 className="text-white font-semibold">Resources</h4>
            <ul className="space-y-2">
              {navigation?.pages.slice(0, 6).map(page => (
                <li key={page.id}>
                  <Link 
                    href={page.href} 
                    className="hover:text-white transition-colors text-white/70 hover:text-white text-sm"
                  >
                    {page.label}
                  </Link>
                </li>
              ))}
            </ul>
            
            {/* External Links */}
            <div className="pt-4 space-y-2">
              <h5 className="text-white/60 text-xs font-medium">External Resources</h5>
              {navigation?.importantLinks.map(link => (
                <div key={link.id}>
                  <a 
                    href={link.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 text-sm"
                  >
                    {link.label}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Services Grid - Show all services organized by category */}
        {navigation && (
          <div className="mt-12 pt-8 border-t border-white/10">
            <h3 className="text-white font-semibold text-center mb-6">All AI Services</h3>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {servicesByCategory.map(({ name, services }) => (
                <div key={name} className="space-y-3">
                  <h4 className="text-white/80 font-medium text-sm border-b border-white/20 pb-2">
                    {name} ({services.length})
                  </h4>
                  <ul className="space-y-1">
                    {services.map(service => (
                      <li key={service.id}>
                        <Link 
                          href={service.href}
                          className="text-white/60 hover:text-white text-xs transition-colors flex items-center justify-between"
                        >
                          <span className="truncate">{service.label}</span>
                          {service.status && (
                            <span className={`px-1.5 py-0.5 rounded text-xs font-medium flex-shrink-0 ${
                              service.status === 'active' ? 'bg-green-500/20 text-green-300' :
                              service.status === 'beta' ? 'bg-yellow-500/20 text-yellow-300' :
                              'bg-blue-500/20 text-blue-300'
                            }`}>
                              {service.status}
                            </span>
                          )}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-4 text-xs text-white/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span>© {new Date().getFullYear()} Zion Tech Group. All rights reserved.</span>
          <div className="flex items-center gap-4">
            <span className="hidden sm:inline">Built with Next.js & Netlify • Tailwind UI</span>
            {navigation && (
              <span className="text-white/40">
                {navigation.services.length} Services • {navigation.categories.length} Categories
              </span>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}