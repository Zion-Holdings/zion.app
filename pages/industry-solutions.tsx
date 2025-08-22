import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { Building, Heart, DollarSign, Factory, ShoppingCart, GraduationCap } from 'lucide-react';

export default function IndustrySolutions() {
  return (
    <>
      <Head>
        <title>Industry Solutions | Zion Tech Group</title>
        <meta name="description" content="Explore healthcare, financial, manufacturing, retail, education and more industry-focused solutions." />
        <link rel="canonical" href="https://ziontechgroup.com/industry-solutions" />
      </Head>

      <div className="min-h-screen bg-black text-white pt-24">
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-500/5 to-purple-600/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-red-500/5 to-blue-500/5 rounded-full blur-3xl" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-orange-500/20 to-pink-600/20 border border-orange-500/30 rounded-full text-orange-300 text-sm font-medium mb-6">
                <Building className="w-4 h-4 mr-2 text-orange-400" />
                Industry Solutions
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Purpose-Built Solutions for Your Industry
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Accelerate time-to-value with proven blueprints tailored for your sector.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {[
                { icon: <Heart className="w-6 h-6" />, title: 'Healthcare', href: '/healthcare-solutions', color: 'from-red-500 to-pink-600', desc: 'Clinical analytics, virtual care, and compliance' },
                { icon: <DollarSign className="w-6 h-6" />, title: 'Financial Services', href: '/financial-solutions', color: 'from-emerald-500 to-teal-600', desc: 'Risk, automation, and customer intelligence' },
                { icon: <Factory className="w-6 h-6" />, title: 'Manufacturing', href: '/manufacturing-ai-solutions', color: 'from-blue-500 to-indigo-600', desc: 'Predictive maintenance and quality' },
                { icon: <ShoppingCart className="w-6 h-6" />, title: 'Retail', href: '/retail-technology-solutions', color: 'from-orange-500 to-amber-600', desc: 'Personalization and omnichannel ops' },
                { icon: <GraduationCap className="w-6 h-6" />, title: 'Education', href: '/education-technology-solutions', color: 'from-yellow-500 to-orange-500', desc: 'LMS and learning analytics' },
                { icon: <Building className="w-6 h-6" />, title: 'Government', href: '/government-technology-solutions', color: 'from-cyan-500 to-blue-600', desc: 'Secure digital services' }
              ].map((card) => (
                <a
                  key={card.title}
                  href={card.href}
                  className="group relative rounded-2xl border border-cyan-500/30 p-6 bg-gradient-to-br from-gray-500/20 to-slate-500/20 hover:border-cyan-500/60 transition-all duration-300"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${card.color} flex items-center justify-center mb-4 text-white`}>{card.icon}</div>
                  <div className="text-xl font-semibold mb-2 group-hover:text-cyan-400 transition-colors">{card.title}</div>
                  <div className="text-sm text-gray-300 mb-4">{card.desc}</div>
                  <div className="text-cyan-400 text-sm">Explore →</div>
                </a>
              ))}
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}