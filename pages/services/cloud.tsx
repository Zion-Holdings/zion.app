import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Cloud, Cpu, Database, Target, Zap, Users, CheckCircle, 
  ArrowRight, ChevronRight, Globe, Brain, Rocket, Shield
} from 'lucide-react';
import EnhancedNavigation from '../../components/EnhancedNavigation';
import EnhancedFooter from '../../components/EnhancedFooter';

export default function CloudInfrastructurePage() {
  const features = [
    {
      icon: Cloud,
      title: "Multi-Cloud Strategy",
      description: "Optimize costs and performance across multiple cloud providers",
      color: "from-emerald-500 to-teal-500"
    },
    {
      icon: Cpu,
      title: "DevOps & CI/CD",
      description: "Automated deployment pipelines and infrastructure as code",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Database,
      title: "Data Management",
      description: "Scalable data storage, processing, and analytics solutions",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Target,
      title: "Performance Optimization",
      description: "Cloud-native architecture and performance tuning",
      color: "from-red-500 to-orange-500"
    },
    {
      icon: Zap,
      title: "Serverless Computing",
      description: "Event-driven architecture and auto-scaling solutions",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Users,
      title: "Cloud Consulting",
      description: "Strategic cloud migration and optimization guidance",
      color: "from-indigo-500 to-purple-500"
    }
  ];

  const solutions = [
    {
      title: "Cloud Migration",
      description: "Seamless migration from on-premises to cloud infrastructure",
      icon: Cloud,
      examples: ["Assessment planning", "Data migration", "Application modernization"]
    },
    {
      title: "Container Orchestration",
      description: "Kubernetes and Docker container management solutions",
      icon: Cpu,
      examples: ["Cluster management", "Auto-scaling", "Service mesh"]
    },
    {
      title: "Edge Computing",
      description: "Distributed computing for low-latency applications",
      icon: Globe,
      examples: ["CDN optimization", "IoT integration", "Real-time processing"]
    },
    {
      title: "Disaster Recovery",
      description: "Business continuity and data protection solutions",
      icon: Shield,
      examples: ["Backup strategies", "Failover systems", "Recovery testing"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <Head>
        <title>Cloud Infrastructure Services — Zion Tech Group</title>
        <meta name="description" content="Transform your infrastructure with our cloud solutions. Multi-cloud strategy, DevOps automation, and scalable cloud-native architecture." />
        <meta property="og:title" content="Cloud Infrastructure Services — Zion Tech Group" />
        <meta property="og:description" content="Transform your infrastructure with our cloud solutions." />
        <link rel="canonical" href="https://ziontechgroup.com/services/cloud" />
      </Head>

      <EnhancedNavigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 p-5 mx-auto mb-8 flex items-center justify-center">
              <Cloud className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-emerald-100 bg-clip-text text-transparent">
              Cloud Infrastructure
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed">
              Transform your infrastructure with scalable cloud solutions that drive efficiency and innovation
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center"
          >
            <p className="text-lg text-white/70 max-w-3xl mx-auto mb-8">
              From multi-cloud strategy to DevOps automation, our cloud solutions enable organizations to scale efficiently and focus on innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2">
                Cloud Assessment
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="px-8 py-4 border border-white/20 hover:border-white/40 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 backdrop-blur-sm bg-white/5 hover:bg-white/10">
                Schedule Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-emerald-100 bg-clip-text text-transparent">
              Cloud Infrastructure Services
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Comprehensive cloud solutions designed to modernize and optimize your infrastructure
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl hover:border-emerald-400/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-emerald-400/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                <div className="relative z-10">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} p-4 mb-6 flex items-center justify-center`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-white">{feature.title}</h3>
                  <p className="text-white/70 leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-white/5 to-white/10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-emerald-100 bg-clip-text text-transparent">
              Cloud Solutions
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Tailored cloud solutions for every stage of your digital transformation journey
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl"
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 p-3 flex items-center justify-center">
                    <solution.icon className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{solution.title}</h3>
                    <p className="text-white/70">{solution.description}</p>
                  </div>
                </div>
                <div className="space-y-2">
                  {solution.examples.map((example, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                      <span className="text-white/80">{example}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-emerald-100 bg-clip-text text-transparent">
              Ready to Transform Your Infrastructure?
            </h2>
            <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
              Let's discuss how our cloud infrastructure solutions can modernize your technology stack and drive operational excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2">
                Start Cloud Migration
                <ArrowRight className="w-5 h-5" />
              </button>
              <Link href="/contact" className="px-8 py-4 border border-white/20 hover:border-white/40 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 backdrop-blur-sm bg-white/5 hover:bg-white/10">
                Contact Cloud Experts
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <EnhancedFooter />
    </div>
  );
}