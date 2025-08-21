import React, { useMemo } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import UltraFuturisticMatrixBackground from '../components/ui/UltraFuturisticMatrixBackground';
import UltraFuturisticServiceCard from '../components/ui/UltraFuturisticServiceCard';
import { enhancedRealMicroSaasServices } from '../data/enhanced-real-micro-saas-services';
import { additionalServices } from '../data/additional-services';

export default function MicroSaasPage() {
  const allServices = useMemo(() => (
    [...enhancedRealMicroSaasServices, ...additionalServices]
  ), []);

  return (
    <UltraFuturisticMatrixBackground>
      <Head>
        <title>Micro SaaS - Zion Tech Group</title>
        <meta name="description" content="Curated micro SaaS, IT, and AI services with transparent pricing and measurable ROI." />
        <link rel="canonical" href="https://ziontechgroup.com/micro-saas" />
      </Head>

      <section className="pt-24 pb-10 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-4">Micro SaaS</h1>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">Real, production-grade services across AI, cloud, analytics, and compliance. Built for impact, secured for scale.</p>
        </div>
      </section>

      <section className="py-8 px-4">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {allServices.slice(0, 12).map((service, index) => (
            <motion.div key={service.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.05 }} viewport={{ once: true }}>
              <UltraFuturisticServiceCard service={service} />
            </motion.div>
          ))}
        </div>
      </section>
    </UltraFuturisticMatrixBackground>
  );
}

