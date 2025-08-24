import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Sparkles, TrendingUp, Clock, Users, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';

export function EnhancedSearchSection() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const popularSearches = [
    'AI Engineers', 'Machine Learning', 'React Developers', 'Python Experts',
    'Data Scientists', 'DevOps Engineers', 'UI/UX Designers', 'Blockchain Developers'
  ];

  const trendingServices = [
    { name: 'AI Model Training', icon: <Sparkles className="h-4 w-4" />, count: '2.3k' },
    { name: 'Cloud Migration', icon: <TrendingUp className="h-4 w-4" />, count: '1.8k' },
    { name: 'Cybersecurity Audit', icon: <Users className="h-4 w-4" />, count: '1.5k' },
    { name: 'Mobile App Development', icon: <Briefcase className="h-4 w-4" />, count: '3.1k' }
  ];

  useEffect(() => {
    if (searchQuery.length > 2) {
      // Simulate AI-powered suggestions
      const filtered = popularSearches.filter(item => 
        item.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSuggestions(filtered.slice(0, 5));
    } else {
      setSuggestions([]);
    }
  }, [searchQuery]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    // Navigate to search results
    window.location.href = `/marketplace?q=${encodeURIComponent(query)}`;
  };

  return (
    <section className="relative py-20 bg-gradient-to-br from-zion-slate-dark via-zion-blue-dark to-zion-slate-dark overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-zion-purple/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-zion-cyan/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-zion-cyan/20 border border-zion-cyan/30 rounded-full backdrop-blur-sm">
            <Search className="h-4 w-4 text-zion-cyan" />
            <span className="text-zion-cyan text-sm font-medium">AI-Powered Search</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent mb-6">
            Find Exactly What You Need
          </h2>
          
          <p className="text-zion-slate-light text-lg md:text-xl max-w-3xl mx-auto">
            Our AI-powered search understands your requirements and connects you with the perfect talent, services, and equipment
          </p>
        </motion.div>

        {/* Enhanced search bar */}
        <motion.div 
          className="max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative">
            <div className="relative bg-zion-blue/10 border-2 border-zion-blue/20 rounded-2xl p-2 backdrop-blur-sm hover:border-zion-purple/30 focus-within:border-zion-cyan/50 transition-all duration-300">
              <div className="flex items-center gap-4 p-4">
                <Search className="h-6 w-6 text-zion-cyan flex-shrink-0" />
                <input
                  type="text"
                  placeholder="Search for AI engineers, services, equipment, or skills..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setTimeout(() => setIsFocused(false), 200)}
                  className="flex-1 bg-transparent text-white placeholder-zion-slate-light/60 text-lg outline-none"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-zion-purple/25"
                  onClick={() => handleSearch(searchQuery)}
                >
                  Search
                </motion.button>
              </div>
            </div>

            {/* AI-powered suggestions */}
            <AnimatePresence>
              {isFocused && suggestions.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute top-full left-0 right-0 mt-2 bg-zion-blue/95 border border-zion-blue/30 rounded-2xl backdrop-blur-xl shadow-2xl z-50"
                >
                  <div className="p-4">
                    <div className="text-zion-cyan text-sm font-medium mb-3 flex items-center gap-2">
                      <Sparkles className="h-4 w-4" />
                      AI Suggestions
                    </div>
                    {suggestions.map((suggestion, index) => (
                      <motion.button
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="w-full text-left p-3 rounded-xl hover:bg-zion-blue/30 transition-colors duration-200 text-white hover:text-zion-cyan"
                        onClick={() => handleSearch(suggestion)}
                      >
                        {suggestion}
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Popular searches */}
        <motion.div 
          className="max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-xl font-semibold text-white mb-6 text-center">Popular Searches</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {popularSearches.map((search, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 bg-zion-blue/20 border border-zion-blue/30 rounded-full text-zion-slate-light hover:bg-zion-purple/20 hover:border-zion-purple/40 hover:text-white transition-all duration-300"
                onClick={() => handleSearch(search)}
              >
                {search}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Trending services */}
        <motion.div 
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-xl font-semibold text-white mb-8 text-center">Trending Services</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {trendingServices.map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -8 }}
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link to={`/marketplace?q=${encodeURIComponent(service.name)}`}>
                  <div className="bg-zion-blue/10 border border-zion-blue/20 rounded-2xl p-6 text-center hover:border-zion-purple/30 hover:bg-zion-purple/10 transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-zion-purple/10">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-cyan-light rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      <div className="text-white">
                        {service.icon}
                      </div>
                    </div>
                    <h4 className="text-white font-medium mb-2 group-hover:text-zion-cyan transition-colors duration-300">
                      {service.name}
                    </h4>
                    <div className="flex items-center justify-center gap-2 text-zion-slate-light text-sm">
                      <Clock className="h-4 w-4" />
                      <span>{service.count} active</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}