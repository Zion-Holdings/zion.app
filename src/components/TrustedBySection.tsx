import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Globe, Shield, Zap } from 'lucide-react';

const companies = [
  { name: 'TechCorp', logo: <Building2 className="w-8 h-8" />, industry: 'Technology' },
  { name: 'GlobalNet', logo: <Globe className="w-8 h-8" />, industry: 'Telecommunications' },
  { name: 'SecureTech', logo: <Shield className="w-8 h-8" />, industry: 'Cybersecurity' },
  { name: 'InnovateLab', logo: <Zap className="w-8 h-8" />, industry: 'Research & Development' },
];

export const TrustedBySection: React.FC = () => {
  return (
    <section className="py-16 bg-zion-blue-dark/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Trusted by Leading Companies
          </h2>
          <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
            Join hundreds of organizations that rely on our expertise to drive innovation and growth
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {companies.map((company, index) => (
            <motion.div
              key={company.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="flex items-center justify-center mb-4">
                <div className="p-4 bg-zion-cyan/20 rounded-xl text-zion-cyan group-hover:bg-zion-cyan group-hover:text-white transition-all duration-300">
                  {company.logo}
                </div>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{company.name}</h3>
              <p className="text-sm text-zion-slate-light">{company.industry}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center space-x-2 text-zion-slate-light">
            <span>Join them today</span>
            <span className="text-zion-cyan">→</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};