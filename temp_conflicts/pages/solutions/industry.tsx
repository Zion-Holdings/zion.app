import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  Factory, ArrowRight, CheckCircle, Zap, Target, Users, 
  TrendingUp, Globe, Cpu, Database, Star, Shield, Building2, Car
} from 'lucide-react';
import EnhancedNavigation from '../../components/EnhancedNavigation';
import EnhancedFooter from '../../components/EnhancedFooter';

export default function IndustrySolutionsPage() {
  const industries = [
    {
      title: "Financial Services",
      description: "AI-powered solutions for banking, insurance, and fintech companies",
      features: [
        "Fraud detection",
        "Risk assessment",
        "Compliance automation",
        "Customer insights"
      ],
      icon: Building2,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Healthcare",
      description: "Technology solutions for healthcare providers and pharmaceutical companies",
      features: [
        "Patient data analytics",
        "Drug discovery AI",
        "Telemedicine platforms",
        "Security compliance"
      ],
      icon: Shield,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Manufacturing",
      description: "Smart manufacturing solutions with IoT and AI integration",
      features: [
        "Predictive maintenance",
        "Quality control",
        "Supply chain optimization",
        "Automation systems"
      ],
      icon: Factory,
      color: "from-orange-500 to-red-500"
    }
  ];

  const benefits = [
    {
      icon: Target,
      title: "Industry Expertise",
      description: "Deep understanding of your industry's unique challenges and requirements"
    },
    {
      icon: Shield,
      title: "Compliance Ready",
      description: "Solutions designed to meet industry-specific regulations and standards"
    },
    {
      icon: Users,
      title: "Domain Knowledge",
      description: "Team with extensive experience in your industry vertical"
    },
    {
      icon: Star,
      title: "Best Practices",
      description: "Proven solutions based on industry best practices and standards"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      <Head>
        <title>Industry Specialized Solutions - Zion Tech Group</title>
        <meta name="description" content="Tailored technology solutions for specific industries including financial services, healthcare, manufacturing, and more." />
        <meta name="keywords" content="industry solutions, financial services, healthcare, manufacturing, specialized solutions, Zion Tech Group" />
        <meta property="og:title" content="Industry Specialized Solutions - Zion Tech Group" />
        <meta property="og:description" content="Tailored technology solutions for specific industries." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/solutions/industry" />
        <link rel="canonical" href="https://ziontechgroup.com/solutions/industry" />
      </Head>

      <EnhancedNavigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 p-5 mx-auto mb-8">
              <Factory className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-emerald-200 bg-clip-text text-transparent">
              Industry Specialized Solutions
            </h1>
            <p className="text-xl md:text-2xl text-white/70 max-w-4xl mx-auto mb-8">
              Tailored technology solutions designed specifically for your industry. 
              From financial services to healthcare, we understand your unique challenges.
            </p>
            <motion.a
              href="mailto:kleber@ziontechgroup.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-medium rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <span>Discuss Industry Needs</span>
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Industries Section */}
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
              Industry Solutions
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Specialized solutions designed for your industry's unique requirements
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 backdrop-blur-xl hover:border-emerald-400/30 transition-all duration-300 transform hover:scale-105"
              >
                <div className={`pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r ${industry.color.replace('from-', 'from-').replace('to-', 'to-')}/0 via-${industry.color.split('-')[1]}-400/10 to-${industry.color.split('-')[3]}-500/0 opacity-0 blur-2xl transition-opacity hover:opacity-100`} />
                
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${industry.color} p-4 mb-6`}>
                  <industry.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">{industry.title}</h3>
                <p className="text-white/70 mb-6">{industry.description}</p>
                
                <ul className="space-y-3 mb-6">
                  {industry.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                      <span className="text-white/80">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <motion.a
                  href="mailto:kleber@ziontechgroup.com"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="block w-full text-center px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-medium rounded-lg transition-all duration-300"
                >
                  Learn More
                </motion.a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
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
              Why Industry Specialized?
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Discover the advantages of our industry-focused approach
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-6 p-6 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10"
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 p-4 flex-shrink-0">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-white/70">{benefit.description}</p>
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
              Ready for Industry-Specific Solutions?
            </h2>
            <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
              Let's discuss how our industry expertise can solve your unique challenges
            </p>
            <motion.a
              href="mailto:kleber@ziontechgroup.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-medium rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <span>Discuss Industry Needs</span>
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </div>
      </section>

      <EnhancedFooter />
    </div>
  );
}