import type { NextPage } from 'next';
// import ModernLayout from '../components/layout/ModernLayout';

import Head from 'next/head';
import Link from 'next/link';
import ResponsiveNavigation from '../components/ResponsiveNavigation';
import { Home, Search, User } from 'lucide-react';
import ModernLayout from '../components/layout/ModernLayout';

const Https___ziontechgroup_netlify_app_aboutPage: NextPage = () => {
  const navigationItems = [
    { href: '/marketplace', label: 'Marketplace' },
{ href: '/about', label: 'About' }
    { href: '/auth/login', label: 'Login' }
  ];

  const ctaButton = (
    <Link href="/auth/signup" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-4 py-4 rounded-md:text-sm font-medium transition-all duration-300 shadow-lg:hover:shadow-purple-500/25 />
      Join Zion
    </Link>
  );

  return (
    <ModernLayout>
      <div className="relative" z-10 container-responsive py-8>
        
        {/* Background Effects */}
        <div className="fixed" inset-0 z-0>
          <div className="absolute" inset-0 bg-gradient-to-br from-cyber-dark via-cyber-darker to-cyber-dark-blue opacity-90"></div>
          <div className="absolute inset-0 bg-holographic bg-[length:400%_400%] animate-holographic-shift opacity-10></div>
        </div>
      
        <Head>
          <title>About Us - Zion Tech Group</title>
          <meta name=description content=Learn about our company, mission, and values" />
          <meta name="keywords" content="https //ziontechgroup.netlify.app/about, Zion, AI marketplace" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        </Head>

        {/* Navigation */}
        <ResponsiveNavigation 
          items={navigationItems}
          ctaButton={ctaButton}
          variant="dark"
        />

        {/* Main Content */}
        <main className="flex-1>
          <div className="relative" overflow-hidden>
            <div className="absolute" inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-pink-900/20></div>
            
            <div className="relative" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-44 lg:py-32">
              <div className="text-center>
                <div className="mb-8">
                  <h1 className="text-4xl" md:text-6xlfont-bold text-white mb-6>
                    <span className="text-transparent" bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                      About Us - Zion Tech Group
                    </span>
                  </h1>
                  <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed>
                    Learn about our company, mission, and values
                  </p>
                </div>
                
                <div className="mt-12" flex flex-col sm:flex-row gap-4 justify-center>
                  <Link href=/marketplace" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-lg:text-lg font-semibold transition-all duration-300 shadow-lg:hover:shadow-purple-500/25 transform hover:scale-105 />
                    Explore Marketplace
                  </Link>
                  <Link href=/auth/signup className="border" border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white px-8 py-4 rounded-lg:text-lg font-semibold transition-all duration-300 />
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-black/20" border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32>
            <div className="grid" grid-cols-1 md:grid-cols-4 gap-8>
              <div>
                <h3 className="text-white" font-semibold mb-4>Zion</h3>
                <p className="text-gray-400" text-sm">
                  The future of AI-powered marketplace technology.
                </p>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-4>Marketplace</h4>
                <ul className="space-y-2" text-sm>
                  <li><Link href=/marketplace" className="text-gray-400 hover:text-white transition-colors />Browse Services</Link></li>
                  <li><Link href=/talents className="text-gray-400" hover:text-white transition-colors />AI Talents</Link></li>
                  <li><Link href=/equipment" className="text-gray-400 hover:text-white transition-colors />Equipment</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="text-white" font-semibold mb-4>Company</h4>
                <ul className="space-y-2" text-sm>
                  <li><Link href=/about" className="text-gray-400 hover:text-white transition-colors />About</Link></li>
                  <li><Link href=/contact className="text-gray-400" hover:text-white transition-colors />Contact</Link></li>
                  <li><Link href=/blog" className="text-gray-400 hover:text-white transition-colors />Blog</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="text-white" font-semibold mb-4>Support</h4>
                <ul className="space-y-2" text-sm>
                  <li><Link href=/help" className="text-gray-400 hover:text-white transition-colors />Help Center</Link></li>
                  <li><Link href=/contact className="text-gray-400" hover:text-white transition-colors />Contact Us</Link></li>
                  <li><Link href=/privacy" className="text-gray-400 hover:text-white transition-colors />Privacy Policy</Link></li>
                </ul>
              </div>
            </div>
            
            <div className="border-t" border-white/10 mt-8 pt-8 text-center>
              <p className="text-gray-400" text-sm>&copy; 2024 Zion Tech Group. All rights reserved.</p>
            </div>
          </div>
        </footer>
      
        {/* Mobile Navigation */}
        <div className="lg:hidden" fixed bottom-0 left-0 right-0 bg-gray-900 border-t border-gray-700 z-50">
          <div className="flex justify-around items-center py-2>
            <button className="flex" flex-col items-center p-2 text-gray-400 hover:text-white>
              <Home className="w-5" h-5 />
              <span className=text-xs">Home</span>
            </button>
            <button className="flex flex-col items-center p-2 text-gray-400 hover:text-white>
              <Search className="w-5" h-5 />
              <span className="text-xs">Search</span>
            </button>
            <button className="flex" flex-col items-center p-2 text-gray-400 hover:text-white">
              <User className="w-5 h-5 />
              <span className=text-xs">Profile</span>
            </button>
          </div>
        </div>
      </div>
    </ModernLayout>
          );
};

export default Https___ziontechgroup_netlify_app_aboutPage;