
import { motion } from 'framer-motion';
import { Home, Search, User, Menu, X } from 'lucide-react';
import { useState } from 'react';

export function BottomNavigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { icon: <Home className="w-5 h-5" />, label: 'Home', href: '/' },
    { icon: <Search className="w-5 h-5" />, label: 'Search', href: '/search' },
    { icon: <User className="w-5 h-5" />, label: 'Profile', href: '/profile' },
  ];

  return (
    <>
      {/* Mobile Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden">
        <div className="bg-gradient-to-r from-zion-blue-dark to-zion-slate-dark border-t border-zion-blue-light/30 backdrop-blur-sm">
          <div className="flex items-center justify-around px-4 py-3">
            {navigationItems.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                className="flex flex-col items-center gap-1 text-zion-slate-light hover:text-zion-cyan transition-colors duration-200"
                whileTap={{ scale: 0.95 }}
              >
                {item.icon}
                <span className="text-xs font-medium">{item.label}</span>
              </motion.a>
            ))}
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex flex-col items-center gap-1 text-zion-slate-light hover:text-zion-cyan transition-colors duration-200"
              whileTap={{ scale: 0.95 }}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              <span className="text-xs font-medium">Menu</span>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <motion.div
          className="fixed inset-0 z-40 lg:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsMenuOpen(false)}
          />
          
          {/* Menu Content */}
          <motion.div
            className="absolute bottom-20 left-4 right-4 bg-gradient-to-br from-zion-blue-dark to-zion-slate-dark rounded-xl border border-zion-blue-light/30 p-6"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
          >
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white mb-4">Quick Access</h3>
              
              <div className="grid grid-cols-2 gap-3">
                <a href="/services" className="flex items-center gap-3 p-3 rounded-lg bg-zion-blue/20 hover:bg-zion-blue/30 transition-colors duration-200">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-zion-cyan to-zion-blue flex items-center justify-center">
                    <Search className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-white font-medium">Services</span>
                </a>
                
                <a href="/talent" className="flex items-center gap-3 p-3 rounded-lg bg-zion-blue/20 hover:bg-zion-blue/30 transition-colors duration-200">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-zion-purple to-zion-purple-dark flex items-center justify-center">
                    <User className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-white font-medium">Talent</span>
                </a>
                
                <a href="/about" className="flex items-center gap-3 p-3 rounded-lg bg-zion-blue/20 hover:bg-zion-blue/30 transition-colors duration-200">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
                    <Home className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-white font-medium">About</span>
                </a>
                
                <a href="/contact" className="flex items-center gap-3 p-3 rounded-lg bg-zion-blue/20 hover:bg-zion-blue/30 transition-colors duration-200">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center">
                    <Menu className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-white font-medium">Contact</span>
                </a>
              </div>
              
              <div className="pt-4 border-t border-zion-blue-light/30">
                <button className="w-full bg-gradient-to-r from-zion-cyan to-zion-blue text-white py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                  Get Started
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}