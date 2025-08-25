import React, { useState } from 'react';
import { Mail, Send, Sparkles, CheckCircle } from 'lucide-react';

export function FooterNewsletter() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubscribed(true);
      setIsLoading(false);
      setEmail('');
    }, 1500);
  };

  if (isSubscribed) {
    return (
      <section className="py-16 bg-gradient-to-r from-zion-slate-dark via-zion-slate to-zion-blue-dark">
        <div className="container mx-auto px-4 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 max-w-2xl mx-auto">
            <CheckCircle className="h-16 w-16 text-green-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-4">Welcome to the Future!</h2>
            <p className="text-lg text-zion-slate-light mb-6">
              Thank you for subscribing! You'll be the first to know about our latest innovations, 
              exclusive offers, and cutting-edge technology solutions.
            </p>
            <button
              onClick={() => setIsSubscribed(false)}
              className="bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan-light hover:to-zion-purple-light text-white px-6 py-3 rounded-lg font-medium transition-all duration-300"
            >
              Subscribe Another Email
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gradient-to-r from-zion-slate-dark via-zion-slate to-zion-blue-dark">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Sparkles className="h-8 w-8 text-zion-cyan" />
              <h2 className="text-4xl font-bold text-white">Stay Ahead of the Curve</h2>
              <Sparkles className="h-8 w-8 text-zion-cyan" />
            </div>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Get exclusive access to the latest AI innovations, micro SAAS solutions, and technology insights. 
              Join thousands of forward-thinking professionals who are already transforming their businesses.
            </p>
          </div>

          {/* Newsletter Form */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <div className="relative flex-1">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-zion-slate-light" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent transition-all duration-300"
                    required
                  />
                </div>
                <button
                  type="submit"
                  disabled={isLoading || !email}
                  className="bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan-light hover:to-zion-purple-light disabled:opacity-50 disabled:cursor-not-allowed text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2 min-w-[140px]"
                >
                  {isLoading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Subscribing...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      Subscribe
                    </>
                  )}
                </button>
              </div>
            </form>

            {/* Benefits */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl mb-2">🚀</div>
                <h3 className="font-semibold text-white mb-2">Early Access</h3>
                <p className="text-sm text-zion-slate-light">Be first to try new features</p>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-2">💡</div>
                <h3 className="font-semibold text-white mb-2">Expert Insights</h3>
                <p className="text-sm text-zion-slate-light">Weekly tech insights & tips</p>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-2">🎁</div>
                <h3 className="font-semibold text-white mb-2">Exclusive Offers</h3>
                <p className="text-sm text-zion-slate-light">Special discounts & deals</p>
              </div>
            </div>

            {/* Privacy Note */}
            <div className="mt-6 text-xs text-zion-slate-light/70">
              We respect your privacy. Unsubscribe at any time. No spam, ever.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}