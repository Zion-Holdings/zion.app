import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Cpu, Shield, Zap, Cloud, Rocket, Target, Users, Award, Globe, Database, Atom } from 'lucide-react';

const EmergingTechServices = () => {
  const emergingTechs = [
    {
      title: 'Quantum Computing',
      description: 'Harness the power of quantum mechanics for unprecedented computational capabilities.',
      applications: [
        'Cryptography and security',
        'Drug discovery and materials science',
        'Financial modeling and optimization',
        'Machine learning acceleration'
      ],
      icon: Atom,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Artificial Intelligence',
      description: 'Advanced AI solutions including machine learning, deep learning, and neural networks.',
      applications: [
        'Predictive analytics',
        'Natural language processing',
        'Computer vision',
        'Autonomous systems'
      ],
      icon: Brain,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Blockchain & Web3',
      description: 'Decentralized technologies for secure, transparent, and trustless systems.',
      applications: [
        'Smart contracts and DeFi',
        'Supply chain transparency',
        'Digital identity management',
        'NFT and metaverse solutions'
      ],
      icon: Shield,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Internet of Things (IoT)',
      description: 'Connected devices and sensors for smart environments and data collection.',
      applications: [
        'Smart cities and infrastructure',
        'Industrial automation',
        'Healthcare monitoring',
        'Environmental sensing'
      ],
      icon: Cpu,
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const benefits = [
    {
      title: 'Competitive Advantage',
      description: 'Stay ahead of the competition with cutting-edge technology solutions.',
      icon: Rocket,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Innovation Leadership',
      description: 'Establish your organization as a technology leader and innovator.',
      icon: Award,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Future-Proofing',
      description: 'Prepare your business for the technological challenges of tomorrow.',
      icon: Target,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Operational Efficiency',
      description: 'Improve processes and productivity with advanced technology solutions.',
      icon: Zap,
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const industries = [
    {
      name: 'Healthcare',
      technologies: ['AI diagnostics', 'Quantum drug discovery', 'IoT patient monitoring', 'Blockchain health records'],
      icon: Shield
    },
    {
      name: 'Finance',
      technologies: ['Quantum trading algorithms', 'AI risk assessment', 'Blockchain payments', 'IoT fraud detection'],
      icon: Target
    },
    {
      name: 'Manufacturing',
      technologies: ['IoT smart factories', 'AI quality control', 'Quantum optimization', 'Blockchain supply chain'],
      icon: Cpu
    },
    {
      name: 'Energy',
      technologies: ['Smart grid IoT', 'AI energy optimization', 'Quantum materials', 'Blockchain energy trading'],
      icon: Zap
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Technology Assessment',
      description: 'Evaluate emerging technologies and their relevance to your business.',
      icon: Target
    },
    {
      step: '02',
      title: 'Strategy Development',
      description: 'Create a roadmap for emerging technology adoption and integration.',
      icon: Globe
    },
    {
      step: '03',
      title: 'Pilot Implementation',
      description: 'Test and validate emerging technology solutions in controlled environments.',
      icon: Rocket
    },
    {
      step: '04',
      title: 'Scale & Optimize',
      description: 'Expand successful pilots and continuously optimize performance.',
      icon: Award
    }
  ];

  return (
    <div className="min-h-screen bg-zion-blue-dark text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-zion-cyan/20 via-zion-purple/20 to-zion-blue-light/20"></div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Emerging{' '}
              <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Tech
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-light leading-relaxed mb-8">
              Explore the future of technology with our cutting-edge emerging tech solutions. 
              From quantum computing to AI, we bring tomorrow's technology to today's business.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-2xl hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300">
                Explore Technologies
              </button>
              <button className="px-8 py-4 border border-zion-cyan/30 text-zion-cyan font-semibold rounded-2xl hover:bg-zion-cyan hover:text-white transition-all duration-300">
                Schedule a Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">
              Why{' '}
              <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Emerging Tech
              </span>
            </h2>
            <p className="text-lg text-zion-slate-light max-w-2xl mx-auto">
              Stay ahead of the curve with cutting-edge technology solutions.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center p-6 rounded-2xl bg-zion-blue-dark/50 border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-zion-slate-light">{benefit.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Emerging Technologies */}
      <section className="py-20 bg-zion-blue-light/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">
              Emerging{' '}
              <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Technologies
              </span>
            </h2>
            <p className="text-lg text-zion-slate-light max-w-2xl mx-auto">
              Cutting-edge technologies that are shaping the future of business and society.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {emergingTechs.map((tech, index) => {
              const IconComponent = tech.icon;
              return (
                <motion.div
                  key={tech.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-8 rounded-2xl bg-zion-blue-dark/50 border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300"
                >
                  <div className={`w-20 h-20 bg-gradient-to-br ${tech.color} rounded-2xl flex items-center justify-center mb-6`}>
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">{tech.title}</h3>
                  <p className="text-zion-slate-light mb-6">{tech.description}</p>
                  <h4 className="text-lg font-semibold mb-4 text-zion-cyan">Applications:</h4>
                  <ul className="space-y-3">
                    {tech.applications.map((application, appIndex) => (
                      <li key={appIndex} className="flex items-center gap-3 text-zion-slate-light">
                        <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
                        {application}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">
              Industry{' '}
              <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Applications
              </span>
            </h2>
            <p className="text-lg text-zion-slate-light max-w-2xl mx-auto">
              How emerging technologies are transforming various industries.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industries.map((industry, index) => {
              const IconComponent = industry.icon;
              return (
                <motion.div
                  key={industry.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-6 rounded-2xl bg-zion-blue-dark/50 border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-zion-cyan">{industry.name}</h3>
                  <ul className="space-y-2">
                    {industry.technologies.map((technology, techIndex) => (
                      <li key={techIndex} className="flex items-center gap-2 text-zion-slate-light">
                        <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
                        {technology}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-zion-blue-light/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">
              Our{' '}
              <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Approach
              </span>
            </h2>
            <p className="text-lg text-zion-slate-light max-w-2xl mx-auto">
              A systematic approach to emerging technology adoption and implementation.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center p-6 rounded-2xl bg-zion-blue-dark/50 border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    {step.step}
                  </div>
                  <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-zion-slate-light">{step.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Explore the Future?
            </h2>
            <p className="text-lg text-zion-slate-light mb-8">
              Let us help you navigate the world of emerging technologies and 
              discover new opportunities for innovation and growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-2xl hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300">
                Start Exploring
              </button>
              <button className="px-8 py-4 border border-zion-cyan/30 text-zion-cyan font-semibold rounded-2xl hover:bg-zion-cyan hover:text-white transition-all duration-300">
                Schedule a Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default EmergingTechServices;