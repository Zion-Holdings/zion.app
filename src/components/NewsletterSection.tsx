import React, { useState } from 'react';
import { Mail, Send, Zap, Brain, Shield } from 'lucide-react';
import { GradientHeading } from '@/components/ui/GradientHeading';

export function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      console.log('Newsletter subscription:', email);
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Latest Tech Trends",
      description: "Stay ahead with cutting-edge technology insights"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI Innovations",
      description: "Discover the latest in artificial intelligence"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Security Updates",
      description: "Learn about cybersecurity best practices"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-zion-purple-dark to-zion-blue-dark relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-64 h-64 border border-zion-cyan/10 rounded-full opacity-30"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 border border-zion-purple/10 rotate-45 opacity-30"></div>
      </div>
      
      <div className="relative container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <GradientHeading size="4xl" className="mb-4">
            Stay Updated with Zion Tech
          </GradientHeading>
          <p className="text-zion-slate-light text-lg mb-8 max-w-2xl mx-auto">
            Get the latest insights on AI, cybersecurity, cloud computing, and emerging technologies. 
            Join thousands of tech professionals who trust Zion for industry knowledge.
          </p>
          
          <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-8">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zion-slate-light" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-zion-cyan/30 rounded-lg text-white placeholder-zion-slate-light focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20 transition-all duration-300"
                  required
                />
              </div>
              <button
                type="submit"
                className="px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-medium hover:from-zion-cyan-light hover:to-zion-purple-light transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                Subscribe
              </button>
            </div>
          </form>
          
          {isSubscribed && (
            <div className="text-zion-cyan text-center mb-6">
              Thank you for subscribing! Welcome to the Zion Tech community.
            </div>
          )}
          
          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center mx-auto mb-3">
                  <div className="text-white">
                    {feature.icon}
                  </div>
                </div>
                <h4 className="text-white font-semibold mb-2">{feature.title}</h4>
                <p className="text-zion-slate-light text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
          
          <p className="text-xs text-zion-slate-light mt-8">
            We respect your privacy. Unsubscribe at any time. No spam, ever.
          </p>
        </div>
      </div>
    </section>
  );
}