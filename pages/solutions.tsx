import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  Brain, Shield, Rocket, Cpu, Database, Globe, 
  Users, Target, Star, CheckCircle, TrendingUp, Zap, ArrowRight
} from 'lucide-react';
import EnhancedNavigation from '../components/EnhancedNavigation';
import EnhancedFooter from '../components/EnhancedFooter';

export default function SolutionsPage() {
  const solutions = [
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Transform your business with intelligent automation and predictive analytics",
      features: ["Predictive analytics", "Natural language processing", "Computer vision", "Recommendation engines"],
      color: "from-purple-500 to-pink-500",
      link: "/ai-business-intelligence",
      benefits: ["40% revenue increase", "60% faster decision-making", "25% cost reduction"]
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Protect your digital assets with quantum-resistant security solutions",
      features: ["Quantum-resistant encryption", "AI threat detection", "Zero-trust architecture", "Compliance management"],
      color: "from-red-500 to-orange-500",
      link: "/quantum-cybersecurity",
      benefits: ["90% threat reduction", "99.99% uptime", "Full compliance"]
    },
    {
      icon: Rocket,
      title: "Space Technology",
      description: "Leverage satellite data and space resources for business innovation",
      features: ["Satellite optimization", "Space resource intelligence", "Earth observation", "Orbital analytics"],
      color: "from-indigo-500 to-purple-500",
      link: "/space-technology",
      benefits: ["30% yield increase", "Real-time monitoring", "Global coverage"]
    },
    {
      icon: Cpu,
      title: "Edge Computing",
      description: "Deploy intelligent applications at the edge for real-time performance",
      features: ["Edge orchestration", "IoT management", "Real-time processing", "Distributed intelligence"],
      color: "from-emerald-500 to-teal-500",
      link: "/edge-computing-orchestration",
      benefits: ["80% latency reduction", "Real-time insights", "Scalable infrastructure"]
    },
    {
      icon: Database,
      title: "Data Analytics",
      description: "Turn your data into actionable insights with advanced analytics",
      features: ["Big data processing", "Real-time analytics", "Data visualization", "Business intelligence"],
      color: "from-blue-500 to-cyan-500",
      link: "/ai-business-intelligence",
      benefits: ["95% prediction accuracy", "Real-time dashboards", "Automated reporting"]
    },
    {
      icon: Globe,
      title: "Digital Transformation",
      description: "Modernize your business with cutting-edge technology solutions",
      features: ["Process automation", "Cloud migration", "Legacy modernization", "Change management"],
      color: "from-orange-500 to-red-500",
      link: "/solutions",
      benefits: ["45% efficiency gains", "Modern infrastructure", "Future-ready systems"]
    }
  ];

  const industries = [
    {
      name: "Financial Services",
      description: "AI-powered risk assessment, fraud detection, and portfolio optimization",
      icon: TrendingUp,
      solutions: ["AI Analytics", "Quantum Security", "Real-time Processing"],
      caseStudy: "40% improvement in investment decisions"
    },
    {
      name: "Healthcare",
      description: "Patient data security, medical imaging AI, and healthcare analytics",
      icon: Shield,
      solutions: ["Cybersecurity", "AI Diagnostics", "Data Analytics"],
      caseStudy: "Zero security breaches in 18 months"
    },
    {
      name: "Manufacturing",
      description: "IoT integration, predictive maintenance, and quality control systems",
      icon: Cpu,
      solutions: ["Edge Computing", "Predictive Analytics", "IoT Management"],
      caseStudy: "45% reduction in production downtime"
    },
    {
      name: "Retail & E-commerce",
      description: "Customer analytics, inventory optimization, and personalized experiences",
      icon: Users,
      solutions: ["AI Analytics", "Real-time Processing", "Customer Insights"],
      caseStudy: "35% increase in conversion rates"
    },
    {
      name: "Agriculture",
      description: "Satellite monitoring, precision farming, and crop optimization",
      icon: Globe,
      solutions: ["Space Technology", "AI Analytics", "IoT Sensors"],
      caseStudy: "30% increase in crop yields"
    },
    {
      name: "Education & Research",
      description: "AI research tools, educational platforms, and data analysis systems",
      icon: Brain,
      solutions: ["AI Research Assistant", "Data Analytics", "Cloud Platforms"],
      caseStudy: "80% reduction in research time"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Assessment",
      description: "We analyze your current technology landscape, business challenges, and strategic objectives to understand your needs.",
      icon: Target,
      color: "from-blue-500 to-cyan-500"
    },
    {
      step: "02",
      title: "Solution Design",
      description: "Our experts design a customized solution architecture that aligns with your business goals and technical requirements.",
      icon: Brain,
      color: "from-purple-500 to-pink-500"
    },
    {
      step: "03",
      title: "Implementation",
      description: "We implement the solution with minimal disruption to your operations, ensuring smooth deployment and integration.",
      icon: Cpu,
      color: "from-green-500 to-emerald-500"
    },
    {
      step: "04",
      title: "Optimization & Support",
      description: "Continuous monitoring, optimization, and support to ensure your solution delivers maximum value and performance.",
      icon: Zap,
      color: "from-orange-500 to-red-500"
    }
  ];

  const technologies = [
    { name: "Machine Learning & AI", count: 45, icon: Brain },
    { name: "Cybersecurity", count: 38, icon: Shield },
    { name: "Cloud Computing", count: 42, icon: Globe },
    { name: "IoT & Edge Computing", count: 28, icon: Cpu },
    { name: "Data Analytics", count: 35, icon: Database },
    { name: "Space Technology", count: 15, icon: Rocket }
  ];

  return (
    <>
      <Head>
        <title>Technology Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive technology solutions for modern businesses. AI, cybersecurity, edge computing, space technology, and digital transformation services." />
        <meta name="keywords" content="technology solutions, AI solutions, cybersecurity, edge computing, space technology, digital transformation, Zion Tech Group" />
        <meta property="og:title" content="Technology Solutions - Zion Tech Group" />
        <meta property="og:description" content="Comprehensive technology solutions for modern businesses. AI, cybersecurity, edge computing, and more." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/solutions" />
      </Head>

      <EnhancedNavigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Technology
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                {" "}Solutions
              </span>
            </h1>
            <p className="text-xl text-white/70 max-w-4xl mx-auto leading-relaxed mb-8">
              Comprehensive technology solutions designed to transform your business operations, 
              enhance security, and drive innovation. From AI-powered analytics to quantum cybersecurity, 
              we deliver cutting-edge solutions that give you a competitive advantage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#solutions"
                className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 transform hover:scale-105"
              >
                Explore Solutions
              </a>
              <a
                href="/contact"
                className="border border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200"
              >
                Get Started
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Solutions Overview */}
      <section id="solutions" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Our Solutions</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Cutting-edge technology solutions designed to address your most complex business challenges.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-50 rounded-2xl p-8 hover:bg-slate-100 transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${solution.color} flex items-center justify-center mb-6`}>
                  <solution.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-4">{solution.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-6">{solution.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-slate-900 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {solution.features.map((feature) => (
                      <li key={feature} className="text-sm text-slate-600 flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-slate-900 mb-3">Business Impact:</h4>
                  <ul className="space-y-2">
                    {solution.benefits.map((benefit) => (
                      <li key={benefit} className="text-sm text-slate-600 flex items-center space-x-2">
                        <Star className="w-4 h-4 text-blue-500 flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <a
                  href={solution.link}
                  className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Industries We Serve</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our solutions are designed to work across all industries, delivering measurable results 
              and competitive advantages.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-6">
                  <industry.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-4">{industry.name}</h3>
                <p className="text-slate-600 leading-relaxed mb-6">{industry.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-slate-900 mb-3">Solutions:</h4>
                  <div className="flex flex-wrap gap-2">
                    {industry.solutions.map((solution) => (
                      <span key={solution} className="bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full">
                        {solution}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <p className="text-green-800 font-medium text-sm">Case Study: {industry.caseStudy}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Our Implementation Process</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              A proven methodology that ensures successful delivery and maximum value from your technology investment.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold`}>
                  {step.step}
                </div>
                
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center mx-auto mb-6`}>
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-4">{step.title}</h3>
                <p className="text-slate-600 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Technologies We Master</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Cutting-edge technologies that power our innovative solutions and drive business transformation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-8 text-center hover:bg-white/10 transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mx-auto mb-4">
                  <tech.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{tech.name}</h3>
                <div className="text-3xl font-bold text-blue-400">{tech.count}+ Projects</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Why Choose Zion Tech Group?</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We're not just another technology company. Here's what makes us different.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Expert Team</h3>
              <p className="text-slate-600">World-class engineers and researchers with decades of combined experience.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Proven Results</h3>
              <p className="text-slate-600">Track record of successful implementations across diverse industries.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Enterprise Security</h3>
              <p className="text-slate-600">Bank-level security with SOC 2 compliance and quantum-resistant encryption.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Global Support</h3>
              <p className="text-slate-600">24/7 support across multiple time zones with local expertise.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Let's discuss how our technology solutions can help you achieve your business goals 
              and stay ahead of the competition.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 transform hover:scale-105"
              >
                Get Started Today
              </a>
              <a
                href="/portfolio"
                className="border border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200"
              >
                View Our Work
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <EnhancedFooter />
    </>
  );
}