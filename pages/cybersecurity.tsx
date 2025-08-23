import React from 'react';
import Head from 'next/head';
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground';
import { Button } from '../components/ui/Button';
import { Shield, CheckCircle, Lock, Activity } from 'lucide-react';

export default function CybersecurityPage() {
  const features = [
    'Zero Trust architectures and identity-first segmentation',
    'Cloud posture hardening, secrets management, and key rotation',
    'Threat detection, incident response playbooks, and tabletop exercises',
    'Compliance readiness: SOC 2, ISO 27001, HIPAA, GDPR',
  ];

  const complianceFrameworks = [
    {
      name: 'SOC2 Type II',
      description: 'Service Organization Control 2 compliance for data security',
      icon: <CheckCircle className="w-6 h-6 text-green-400" />
    },
    {
      name: 'ISO 27001',
      description: 'International standard for information security management',
      icon: <Shield className="w-6 h-6 text-blue-400" />
    },
    {
      name: 'GDPR',
      description: 'General Data Protection Regulation compliance',
      icon: <Globe className="w-6 h-6 text-purple-400" />
    },
    {
      name: 'HIPAA',
      description: 'Health Insurance Portability and Accountability Act compliance',
      icon: <Heart className="w-6 h-6 text-red-400" />
    }
  ];

  return (
    <UltraAdvancedFuturisticBackground>
      <Head>
        <title>Cybersecurity | Zion Tech Group</title>
        <meta name="description" content="Zero Trust designs, cloud posture hardening, incident response, and compliance readiness." />
        <link rel="canonical" href="https://ziontechgroup.com/cybersecurity" />
      </Head>
      <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-12">
          <header className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-600 mb-4">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4">Cybersecurity</h1>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">From strategy to operations: identity, data, networks, and workloads secured by design.</p>
            <div className="mt-2 text-sm text-gray-400">New: VAPT and MDM offerings below.</div>
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="px-8 py-4">Security Assessment</Button>
              <Link href="/market-pricing" variant="outline" className="px-8 py-4">See Market Pricing</Button>
            </div>
          </header>

          <section>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">Key Capabilities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.map((f) => (
                <div key={f} className="flex items-start gap-3 p-4 rounded-xl bg-black/40 border border-gray-700/60">
                  <CheckCircle className="w-5 h-5 text-emerald-400 mt-0.5" />
                  <span className="text-gray-200">{f}</span>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">Highlighted Solutions</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {solutions.map((s) => (
                <a key={s.name} href={s.href} className="p-6 rounded-2xl bg-black/40 border border-gray-700/60 hover:border-cyan-500/40 transition-colors">
                  <div className="text-gray-200 font-semibold mb-2">{s.name}</div>
                  <p className="text-gray-300 text-sm">Learn more</p>
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Security Services Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Comprehensive Security Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our cybersecurity services cover every aspect of digital security, from quantum-resistant encryption to autonomous threat response.
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {securityServices.map((service, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-900/50 border border-gray-700/50 rounded-2xl p-8 hover:border-red-500/50 transition-all duration-300 hover:transform hover:scale-105"
                  variants={fadeInUp}
                >
                  <div className="mb-6">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a 
                    href={service.href}
                    className="inline-flex items-center text-red-400 hover:text-red-300 transition-colors"
                  >
                    Learn More <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Security Capabilities */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Advanced Security Capabilities
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our security systems provide comprehensive protection across all digital assets and infrastructure.
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {securityCapabilities.map((category, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  variants={fadeInUp}
                >
                  <h3 className="text-2xl font-bold text-red-400 mb-6">{category.category}</h3>
                  <ul className="space-y-3">
                    {category.capabilities.map((capability, capIndex) => (
                      <li key={capIndex} className="text-gray-300">{capability}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Security Threats */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Modern Security Threats
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Understanding the evolving threat landscape is crucial for effective cybersecurity.
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {securityThreats.map((threat, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-900/50 border border-gray-700/50 rounded-2xl p-8"
                  variants={fadeInUp}
                >
                  <div className="flex items-center mb-6">
                    {threat.icon}
                    <h3 className="text-2xl font-bold text-white ml-4">{threat.threat}</h3>
                  </div>
                  <p className="text-gray-300">{threat.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Compliance Frameworks */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Compliance & Standards
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Meet industry standards and regulatory requirements with our compliance solutions.
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {complianceFrameworks.map((framework, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-900/50 border border-gray-700/50 rounded-2xl p-8 text-center"
                  variants={fadeInUp}
                >
                  <div className="mb-4">{framework.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{framework.name}</h3>
                  <p className="text-gray-300 text-sm">{framework.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-red-900/20 to-orange-900/20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Secure Your Digital Future
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Don't wait until it's too late. Protect your business with enterprise-grade cybersecurity solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact" 
                  className="px-8 py-4 bg-gradient-to-r from-red-500 to-orange-600 text-white rounded-lg font-semibold hover:from-red-600 hover:to-orange-700 transition-all duration-300"
                >
                  Get Security Assessment
                </a>
                <a 
                  href="/case-studies" 
                  className="px-8 py-4 border border-red-500/40 text-red-300 rounded-lg font-semibold hover:bg-red-500/10 transition-all duration-300"
                >
                  View Security Case Studies
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default CybersecurityPage;