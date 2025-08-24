import React from 'react';
import Head from 'next/head';
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground';
import { Button } from '../components/ui/Button';
import { Server, CheckCircle, Database, Cloud } from 'lucide-react';

export default function EnterpriseITPage() {
  const solutions = [
    {
      icon: <Server className="w-8 h-8 text-blue-400" />,
      title: 'Infrastructure Management',
      description: 'Modernize and optimize your IT infrastructure',
      features: ['Cloud migration', 'Hybrid cloud solutions', 'Infrastructure automation']
    },
    {
      icon: <Database className="w-8 h-8 text-green-400" />,
      title: 'Data Management',
      description: 'Secure, scalable data solutions for enterprise',
      features: ['Data warehousing', 'Big data analytics', 'Data governance']
    },
    {
      icon: <Shield className="w-8 h-8 text-red-400" />,
      title: 'Cybersecurity',
      description: 'Comprehensive security for enterprise environments',
      features: ['Threat detection', 'Identity management', 'Compliance automation']
    },
    {
      icon: <Network className="w-8 h-8 text-purple-400" />,
      title: 'Network Solutions',
      description: 'High-performance networking infrastructure',
      features: ['SD-WAN', 'Network monitoring', 'Performance optimization']
    }
  ];

  const services = [
    {
      title: 'IT Strategy & Consulting',
      description: 'Strategic IT planning and digital transformation consulting',
      price: 'Starting at $25,000',
      features: ['Technology assessment', 'Roadmap development', 'Change management']
    },
    {
      title: 'Infrastructure Modernization',
      description: 'Legacy system modernization and cloud transformation',
      price: 'Starting at $50,000',
      features: ['System analysis', 'Migration planning', 'Implementation support']
    },
    {
      title: 'Managed IT Services',
      description: '24/7 IT operations and support services',
      price: 'Starting at $15,000/month',
      features: ['Proactive monitoring', 'Incident response', 'Performance optimization']
    }
  ];

  return (
    <UltraAdvancedFuturisticBackground>
      <Head>
        <title>Enterprise IT | Zion Tech Group</title>
        <meta name="description" content="Cloud, DevOps, data platforms, and SRE with cost, performance, and reliability in focus." />
        <link rel="canonical" href="https://ziontechgroup.com/enterprise-it" />
      </Head>
      <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-12">
          <header className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-600 mb-4">
              <Server className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4">Enterprise IT</h1>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">Ship secure, reliable platforms with measurable business outcomes.</p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="px-8 py-4">Get a Roadmap</Button>
              <Link href="/market-pricing" variant="outline" className="px-8 py-4">See Market Pricing</Button>
            </div>
          </header>

        {/* Solutions Overview */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Enterprise IT Solutions
              </h2>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                Comprehensive IT solutions designed for enterprise-scale operations
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {solutions.map((solution, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                  className="text-center p-6 bg-gray-800/50 rounded-xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300"
                >
                  <div className="flex justify-center mb-4">
                    {solution.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{solution.title}</h3>
                  <p className="text-gray-400 mb-4">{solution.description}</p>
                  <ul className="text-left space-y-2">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4 bg-black/30">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Enterprise IT Services
              </h2>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                Professional services to transform your enterprise IT environment
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
                  className="bg-gray-800/50 rounded-xl border border-gray-700/50 p-6 hover:border-blue-500/50 transition-all duration-300"
                >
                  <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-400 mb-4">{service.description}</p>
                  <div className="text-2xl font-bold text-blue-400 mb-4">{service.price}</div>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className="w-full block text-center px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-700 transition-all duration-200"
                  >
                    Get Started
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Enterprise IT?
              </h2>
              <p className="text-lg text-gray-400 mb-8">
                Let us help you build a modern, scalable, and secure IT infrastructure
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-700 transition-all duration-200 transform hover:scale-105"
              >
                Start Your Transformation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}