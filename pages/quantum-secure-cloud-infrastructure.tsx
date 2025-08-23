import React from 'react';
import { motion } from 'framer-motion';
import { Cloud, Shield, Lock, Zap, Users, Target, ArrowRight, Check, Star, Globe, Cpu, Network } from 'lucide-react';
import SEO from '../components/SEO';

<<<<<<< HEAD
const QuantumSecureCloudInfrastructure: React.FC = () => {
  const features = [
    "Quantum-resistant encryption protocols",
    "Post-quantum cryptography implementation",
    "Quantum key distribution (QKD)",
    "Quantum-secure authentication systems",
    "Quantum-resistant digital signatures",
    "Quantum-safe communication channels",
    "Quantum-resistant hash functions",
    "Quantum-secure access controls",
    "Quantum-resistant certificate management",
    "Quantum-safe data transmission"
  ];

  const benefits = [
    "Future-proof security against quantum attacks",
    "Unbreakable encryption standards",
    "Compliance with quantum security regulations",
    "Enhanced data protection",
    "Competitive security advantage"
  ];

  const pricing = {
    starter: "$1,499/month",
    professional: "$2,999/month",
    enterprise: "Custom pricing"
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <SEO 
        title="Quantum-Secure Cloud Infrastructure 2045 | Zion Tech Group"
        description="Future-proof cloud infrastructure with quantum-resistant encryption and post-quantum cryptography for ultimate security."
        keywords={["quantum-secure cloud", "post-quantum cryptography", "quantum-resistant encryption", "cloud security", "quantum key distribution"]}
      />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 via-teal-900/20 to-cyan-900/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.1),transparent_50%)]"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center">
                <Cloud className="w-10 h-10 text-white" />
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
              Quantum-Secure Cloud Infrastructure 2045
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Future-proof your cloud infrastructure with quantum-resistant encryption, post-quantum cryptography, 
              and quantum key distribution for ultimate security against emerging quantum threats.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold rounded-xl hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 shadow-2xl shadow-emerald-500/25"
              >
                Start Free Trial
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-emerald-500/50 text-emerald-400 font-semibold rounded-xl hover:bg-emerald-500/10 transition-all duration-300"
              >
                Schedule Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Quantum-Secure Features
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Advanced security features designed to protect against current and future quantum computing threats.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-800/50 border border-emerald-500/20 rounded-xl p-6 hover:border-emerald-500/40 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center mb-4">
                  <Check className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Choose Quantum-Secure Cloud?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Pricing Plans
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Choose the perfect plan for your quantum-secure cloud infrastructure needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.entries(pricing).map(([plan, price], index) => (
              <motion.div
                key={plan}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-gray-800/50 border rounded-xl p-8 ${
                  plan === 'professional' 
                    ? 'border-emerald-500/50 bg-emerald-900/20' 
                    : 'border-gray-600/50'
                }`}
              >
                <h3 className="text-2xl font-bold mb-4 capitalize">{plan}</h3>
                <div className="text-4xl font-bold mb-6">{price}</div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold rounded-lg hover:from-emerald-600 hover:to-teal-600 transition-all duration-300"
                >
                  Get Started
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready for Quantum-Secure Cloud?
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
              Future-proof your cloud infrastructure with quantum-resistant security that protects against emerging threats.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold rounded-xl hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 shadow-2xl shadow-emerald-500/25"
            >
              Secure Your Cloud Today
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default QuantumSecureCloudInfrastructure;
=======
export default function QuantumSecureCloudInfrastructure() {
	return (
		<ServiceLanding
			title="Quantum-Secure Cloud Infrastructure"
			description="Future-proof your cloud with PQC, encrypted networking, and key management designed to resist quantum attacks."
			subtitle="Protect data beyond the quantum horizon"
			pricePerMonthUSD={5999}
			implementationWeeks="6-10 weeks"
			roiNote="Meet emerging PQC compliance and safeguard long-lived data"
			features={[
				"PQC algorithms for data at-rest and in-transit",
				"Hybrid crypto transition plans",
				"HSM/KMS integrations and key rotation",
				"Zero Trust + PQC reference designs",
				"Threat modeling and validation",
				"NIST PQC roadmap alignment]}
			]}
			industries={["Financial Services", "Healthcare", "Government"]}
			url="https://ziontechgroup.com/quantum-secure-cloud-infrastructure"
		/>
	);
}
>>>>>>> 4e26761e9808218b595a40eae6dfbc7c204b5906
