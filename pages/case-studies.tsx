import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  TrendingUp, Users, Globe, Brain, Zap, Shield, 
  CheckCircle, ArrowRight, BarChart3, Award, Clock, DollarSign
} from 'lucide-react';

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      id: 1,
      title: "AI-Powered Healthcare Diagnostics Platform",
      client: "Global Healthcare Consortium",
      industry: "Healthcare",
      challenge: "Traditional diagnostic methods were time-consuming and often resulted in delayed treatment decisions, leading to poorer patient outcomes.",
      solution: "Developed an AI-powered diagnostic platform that analyzes medical images, patient data, and symptoms to provide accurate diagnoses in real-time.",
      results: [
        "95% accuracy in disease detection",
        "60% reduction in diagnosis time",
        "40% improvement in treatment outcomes",
        "Scaled to serve 50+ hospitals globally"
      ],
      technologies: ["AI/ML", "Computer Vision", "Cloud Computing", "Healthcare APIs"],
      image: "/images/case-studies/healthcare-diagnostics.jpg"
    },
    {
      id: 2,
      title: "Quantum Financial Trading System",
      client: "Fortune 500 Investment Bank",
      industry: "Financial Services",
      challenge: "Traditional trading algorithms couldn't process market data fast enough to capitalize on microsecond opportunities, resulting in missed profits.",
      solution: "Built a quantum-classical hybrid trading system that leverages quantum computing for complex market analysis and classical computing for execution.",
      results: [
        "300% increase in trading efficiency",
        "25% improvement in portfolio returns",
        "99.9% system uptime",
        "Real-time risk assessment"
      ],
      technologies: ["Quantum Computing", "AI/ML", "High-Frequency Trading", "Risk Management"],
      image: "/images/case-studies/quantum-trading.jpg"
    },
    {
      id: 3,
      title: "Autonomous Cybersecurity Operations Center",
      client: "Major Defense Contractor",
      industry: "Defense & Security",
      challenge: "Manual threat detection and response was too slow to protect against sophisticated cyber attacks, leaving critical systems vulnerable.",
      solution: "Implemented an autonomous cybersecurity operations center with AI-powered threat detection, automated response, and predictive analytics.",
      results: [
        "90% reduction in response time",
        "99.5% threat detection accuracy",
        "Zero successful breaches in 18 months",
        "24/7 autonomous operation"
      ],
      technologies: ["AI/ML", "Cybersecurity", "Automation", "Threat Intelligence"],
      image: "/images/case-studies/cybersecurity-ops.jpg"
    },
    {
      id: 4,
      title: "Smart Manufacturing IoT Platform",
      client: "Global Manufacturing Corporation",
      industry: "Manufacturing",
      challenge: "Inefficient production processes, unplanned downtime, and quality control issues were costing millions annually in lost productivity.",
      solution: "Deployed a comprehensive IoT platform with AI-powered predictive maintenance, real-time monitoring, and automated quality control.",
      results: [
        "35% reduction in unplanned downtime",
        "20% increase in production efficiency",
        "50% improvement in product quality",
        "$15M annual cost savings"
      ],
      technologies: ["IoT", "AI/ML", "Predictive Analytics", "Cloud Computing"],
      image: "/images/case-studies/smart-manufacturing.jpg"
    },
    {
      id: 5,
      title: "Space Resource Mining Platform",
      client: "Space Exploration Company",
      industry: "Space Technology",
      challenge: "Manual space operations were expensive, risky, and limited in scope, preventing efficient resource extraction from asteroids and lunar surfaces.",
      solution: "Developed an autonomous space resource mining platform with AI navigation, robotic mining systems, and real-time resource analysis.",
      results: [
        "80% reduction in mission costs",
        "10x increase in resource extraction efficiency",
        "Autonomous operation in deep space",
        "Successful extraction of rare earth elements"
      ],
      technologies: ["AI/ML", "Robotics", "Space Technology", "Autonomous Systems"],
      image: "/images/case-studies/space-mining.jpg"
    },
    {
      id: 6,
      title: "Metaverse Commerce Platform",
      client: "Leading E-commerce Company",
      industry: "Retail & E-commerce",
      challenge: "Traditional e-commerce couldn't provide immersive shopping experiences, leading to lower engagement and conversion rates.",
      solution: "Built a comprehensive metaverse commerce platform with 3D virtual stores, AI-powered personalization, and blockchain-based transactions.",
      results: [
        "150% increase in customer engagement",
        "40% improvement in conversion rates",
        "25% reduction in return rates",
        "$50M in virtual asset sales"
      ],
      technologies: ["Metaverse", "AI/ML", "Blockchain", "3D Graphics"],
      image: "/images/case-studies/metaverse-commerce.jpg"
    }
  ];

  const industries = [
    "All Industries",
    "Healthcare",
    "Financial Services",
    "Defense & Security",
    "Manufacturing",
    "Space Technology",
    "Retail & E-commerce"
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-600 bg-clip-text text-transparent mb-6">
                Success Stories
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Discover how Zion Tech Group's revolutionary technologies have transformed 
                businesses across industries and delivered exceptional results.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Industry Filter */}
        <section className="py-10 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-wrap justify-center gap-4"
            >
              {industries.map((industry, index) => (
                <button
                  key={industry}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    industry === "All Industries"
                      ? "bg-gradient-to-r from-purple-500 to-pink-600 text-white"
                      : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-700 hover:border-gray-600"
                  }`}
                >
                  {industry}
                </button>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">Featured Case Studies</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Real-world examples of how our innovative solutions drive business transformation.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.map((study, index) => (
                <motion.article
                  key={study.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700 rounded-2xl overflow-hidden hover:border-gray-600 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="h-48 bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
                    <div className="text-center">
                      <Award className="w-16 h-16 text-gray-500 mx-auto mb-2" />
                      <p className="text-gray-400 text-sm">Case Study Image</p>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-3 py-1 bg-purple-500/20 text-purple-400 text-xs font-semibold rounded-full">
                        {study.industry}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">
                      {study.title}
                    </h3>
                    
                    <p className="text-gray-400 text-sm mb-3">
                      <strong>Client:</strong> {study.client}
                    </p>
                    
                    <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                      {study.challenge}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {study.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <a 
                      href={`/case-studies/${study.id}`}
                      className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors font-semibold"
                    >
                      Read Full Case Study <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Results Showcase */}
        <section className="py-20 px-4 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">Impact & Results</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Our solutions consistently deliver measurable business value and transformative results.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { metric: "95%", label: "Average Accuracy Improvement", icon: <CheckCircle className="w-8 h-8 text-green-400" /> },
                { metric: "60%", label: "Average Time Reduction", icon: <Clock className="w-8 h-8 text-blue-400" /> },
                { metric: "40%", label: "Average Cost Savings", icon: <DollarSign className="w-8 h-8 text-yellow-400" /> },
                { metric: "99.9%", label: "System Reliability", icon: <Shield className="w-8 h-8 text-purple-400" /> }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.9 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="flex justify-center mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-4xl font-bold text-white mb-2">{stat.metric}</div>
                  <p className="text-gray-300 text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Overview */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">Our Approach</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                We follow a proven methodology to ensure successful project delivery and exceptional results.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { step: "1", title: "Discovery", description: "Deep dive into your business challenges and objectives" },
                { step: "2", title: "Strategy", description: "Develop comprehensive solution architecture and roadmap" },
                { step: "3", title: "Implementation", description: "Execute with precision using cutting-edge technologies" },
                { step: "4", title: "Optimization", description: "Continuous improvement and performance optimization" }
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.3 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-300 text-sm">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-purple-900/20 to-pink-900/20">
          <div className="container mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.7 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss how our revolutionary technologies can drive similar results 
                for your organization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact?service=Case-Study-Consultation"
                  className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
                >
                  Schedule a Consultation
                </a>
                <a 
                  href="/services"
                  className="px-8 py-4 border border-purple-500 text-purple-400 font-semibold rounded-xl hover:bg-purple-500/10 transition-all duration-300"
                >
                  Explore Our Services
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}