import React, { useState } from 'react';

export function FloatingContactButton() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Expanded Contact Panel */}
      {isExpanded && (
        <div className="mb-4 bg-zion-slate-dark border border-zion-blue-light rounded-lg p-4 shadow-2xl backdrop-blur-sm min-w-[280px]">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-white">Contact Us</h3>
            <button
              onClick={() => setIsExpanded(false)}
              className="text-zion-slate-light hover:text-white transition-colors"
            >
              ✕
            </button>
          </div>
          
          <div className="space-y-3 mb-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-zion-cyan/20 rounded-lg flex items-center justify-center">
                📱
              </div>
              <div>
                <p className="text-sm text-zion-slate-light">Phone</p>
                <a 
                  href="tel:+13024640950" 
                  className="text-zion-cyan hover:text-white transition-colors font-medium"
                >
                  +1 302 464 0950
                </a>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-zion-purple/20 rounded-lg flex items-center justify-center">
                ✉️
              </div>
              <div>
                <p className="text-sm text-zion-slate-light">Email</p>
                <a 
                  href="mailto:kleber@ziontechgroup.com" 
                  className="text-zion-cyan hover:text-white transition-colors font-medium"
                >
                  kleber@ziontechgroup.com
                </a>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-zion-cyan/20 rounded-lg flex items-center justify-center">
                🌐
              </div>
              <div>
                <p className="text-sm text-zion-slate-light">Website</p>
                <a 
                  href="https://ziontechgroup.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-zion-cyan hover:text-white transition-colors font-medium"
                >
                  ziontechgroup.com
                </a>
              </div>
            </div>
          </div>
          
          <div className="flex gap-2">
            <a
              href="mailto:kleber@ziontechgroup.com?subject=Service Inquiry"
              className="flex-1 px-4 py-2 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg text-sm font-medium text-center hover:shadow-neon transition-all duration-300"
            >
              Send Email
            </a>
            <a
              href="tel:+13024640950"
              className="flex-1 px-4 py-2 bg-zion-blue-light/20 text-zion-cyan border border-zion-cyan/30 rounded-lg text-sm font-medium text-center hover:bg-zion-blue-light/30 transition-all duration-300"
            >
              Call Now
            </a>
          </div>
        </div>
      )}
      
      {/* Floating Contact Button */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full shadow-2xl hover:shadow-neon transition-all duration-300 transform hover:scale-110 flex items-center justify-center text-white text-2xl"
        aria-label="Contact Us"
      >
        {isExpanded ? '✕' : '💬'}
      </button>
    </div>
  );
}