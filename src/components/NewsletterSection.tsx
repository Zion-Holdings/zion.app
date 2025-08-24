<<<<<<< HEAD
import React from 'react';

export const NewsletterSection: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-zion-purple to-zion-blue">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Stay Updated
        </h2>
        <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
          Get the latest news on tech innovations, AI breakthroughs, and exclusive offers from Zion Tech Group
        </p>
        
        <div className="max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-zion-blue-light bg-white/10 text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan"
            />
            <button className="px-6 py-3 bg-zion-cyan text-white font-semibold rounded-lg hover:bg-zion-cyan-light transition-colors">
              Subscribe
            </button>
          </div>
          <p className="text-sm text-zion-slate-light mt-3">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};
=======
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, CheckCircle } from 'lucide-react';

export function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubscribed(true);
    setIsLoading(false);
    setEmail('');
  };

  return (
    <section className="py-20 bg-gradient-to-br from-zion-purple via-zion-purple-dark to-zion-slate-dark relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 75%, currentColor 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-zion-cyan to-zion-blue mb-8">
            <Mail className="w-10 h-10 text-white" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Stay <span className="bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">Connected</span>
          </h2>
          <p className="text-zion-slate-light text-lg mb-8 max-w-2xl mx-auto">
            Get the latest updates on new services, tech insights, and exclusive offers delivered straight to your inbox
          </p>
          
          {!isSubscribed ? (
            <motion.form 
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-3 rounded-lg border border-zion-blue-light/30 bg-zion-blue-dark/50 text-white placeholder:text-zion-slate-light/50 focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent transition-colors"
                required
              />
              <button
                type="submit"
                disabled={isLoading || !email}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-zion-cyan to-zion-blue hover:from-zion-cyan-dark hover:to-zion-blue-dark text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isLoading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Subscribing...
                  </>
                ) : (
                  <>
                    Subscribe
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </motion.form>
          ) : (
            <motion.div 
              className="inline-flex items-center gap-3 bg-green-500/20 border border-green-500/30 text-green-400 px-6 py-3 rounded-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <CheckCircle className="w-5 h-5" />
              Successfully subscribed! Welcome to the Zion Tech Group community.
            </motion.div>
          )}
          
          <p className="text-zion-slate-light/70 text-sm mt-6">
            No spam, unsubscribe at any time. We respect your privacy.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
>>>>>>> f2b2fbcfb4f353ea65468110a1b8ef64d9d7cf73
