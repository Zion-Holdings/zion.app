import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '../components/ui/card';

const trustedCompanies = [
  {
    name: 'TechCorp',
    logo: '🚀',
    industry: 'Technology',
    testimonial: 'Zion Tech Group transformed our AI infrastructure completely.'
  },
  {
    name: 'SecureBank',
    logo: '🏦',
    industry: 'Finance',
    testimonial: 'Their cybersecurity solutions are unmatched in the industry.'
  },
  {
    name: 'CloudFlow',
    logo: '☁️',
    industry: 'Cloud Services',
    testimonial: 'Seamless cloud migration with zero downtime.'
  },
  {
    name: 'DataVault',
    logo: '💾',
    industry: 'Data Analytics',
    testimonial: 'Revolutionary insights through their AI-powered analytics.'
  },
  {
    name: 'InnovateLab',
    logo: '🔬',
    industry: 'Research',
    testimonial: 'Cutting-edge solutions that push the boundaries of possibility.'
  },
  {
    name: 'GlobalTech',
    logo: '🌍',
    industry: 'International',
    testimonial: 'World-class service with local expertise worldwide.'
  }
];

export function TrustedBySection() {
  return (
    <section className="py-20 bg-gradient-to-br from-zion-slate-800 to-zion-slate-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-zion-slate-300 max-w-3xl mx-auto">
            Join hundreds of companies worldwide who trust Zion Tech Group to deliver innovative solutions that drive growth and success.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trustedCompanies.map((company, index) => (
            <motion.div
              key={company.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full bg-zion-slate-700/50 border-zion-slate-600 hover:border-zion-cyan/50 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/20">
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <div className="text-4xl mb-2">{company.logo}</div>
                    <h3 className="text-xl font-bold text-white mb-1">
                      {company.name}
                    </h3>
                    <p className="text-zion-cyan text-sm font-medium">
                      {company.industry}
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <p className="text-zion-slate-300 italic">
                      "{company.testimonial}"
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl font-bold text-zion-cyan mb-2">99.9%</div>
              <div className="text-zion-slate-300">Uptime Guarantee</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-zion-purple mb-2">24/7</div>
              <div className="text-zion-slate-300">Expert Support</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-zion-cyan mb-2">ISO 27001</div>
              <div className="text-zion-slate-300">Security Certified</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-zion-purple mb-2">100%</div>
              <div className="text-zion-slate-300">Satisfaction Rate</div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10 rounded-2xl p-8 border border-zion-cyan/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Join the Future?
            </h3>
            <p className="text-zion-slate-300 mb-6 max-w-2xl mx-auto">
              Experience the power of cutting-edge technology solutions that have already transformed hundreds of businesses worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-semibold hover:from-zion-purple hover:to-zion-cyan transition-all duration-300 hover:shadow-xl hover:shadow-zion-cyan/25">
                Get Started Today
              </button>
              <button className="px-8 py-3 border border-zion-cyan text-zion-cyan rounded-lg font-semibold hover:bg-zion-cyan hover:text-white transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}