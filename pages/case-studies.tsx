import React from 'react';
import { motion } from 'framer-motion';
import { motion as motion2 } from 'framer-motion';
import { Brain, Rocket, Shield, Zap, Target, Award, Users, TrendingUp, CheckCircle, Star } from 'lucide-react';
import Layout from '../components/layout/Layout';

const caseStudies = [
  {
    id: 'ai-customer-success-platform',
    title: 'AI Customer Success Platform',
    company: 'TechCorp Solutions',
    industry: 'SaaS',
    challenge: 'High customer churn rate of 25% due to reactive support and lack of predictive insights',
    solution: 'Implemented AI-powered customer success platform with predictive churn modeling and proactive intervention',
    results: [
      'Reduced customer churn by 60%',
      'Increased customer lifetime value by 40%',
      'Improved customer satisfaction score from 7.2 to 9.1',
      'Automated 80% of routine customer interactions'
    ],
    metrics: {
      churnReduction: '60%',
      ltvIncrease: '40%',
      satisfactionImprovement: '26%',
      automationRate: '80%'
    },
    icon: <Brain className="w-8 h-8" />,
    color: 'text-cyan-400',
    bgColor: 'bg-cyan-400/10',
    borderColor: 'border-cyan-400/20'
  },
  {
    id: 'quantum-cybersecurity',
    title: 'Quantum Cybersecurity Platform',
    company: 'Global Financial Bank',
    industry: 'Financial Services',
    challenge: 'Increasing cyber threats and need for future-proof security against quantum attacks',
    solution: 'Deployed quantum-resistant encryption and AI-powered threat detection system',
    results: [
      'Zero security breaches in 18 months',
      '99.99% threat detection accuracy',
      'Reduced security incident response time by 85%',
      'Achieved SOC 2 Type II compliance in 6 months'
    ],
    metrics: {
      securityBreaches: '0',
      threatDetection: '99.99%',
      responseTimeReduction: '85%',
      complianceTime: '6 months'
    },
    icon: <Shield className="w-8 h-8" />,
    color: 'text-purple-400',
    bgColor: 'bg-purple-400/10',
    borderColor: 'border-purple-400/20'
  },
  {
    id: 'autonomous-manufacturing',
    title: 'Autonomous Manufacturing AI',
    company: 'Industrial Dynamics Inc.',
    industry: 'Manufacturing',
    challenge: 'Production inefficiencies and quality control issues causing 15% defect rate',
    solution: 'AI-powered autonomous manufacturing system with predictive maintenance and quality control',
    results: [
      'Reduced defect rate from 15% to 2%',
      'Increased production efficiency by 35%',
      'Reduced downtime by 70%',
      'Achieved 99.5% quality compliance rate'
    ],
    metrics: {
      defectReduction: '87%',
      efficiencyIncrease: '35%',
      downtimeReduction: '70%',
      qualityCompliance: '99.5%'
    },
    icon: <Rocket className="w-8 h-8" />,
    color: 'text-blue-400',
    bgColor: 'bg-blue-400/10',
    borderColor: 'border-blue-400/20'
  },
  {
    id: 'ai-financial-planning',
    title: 'AI Financial Planning Platform',
    company: 'Wealth Management Pro',
    industry: 'Financial Services',
    challenge: 'Manual financial planning processes taking 20+ hours per client with limited personalization',
    solution: 'AI-driven financial planning platform with automated analysis and personalized recommendations',
    results: [
      'Reduced planning time from 20+ hours to 2 hours',
      'Increased client portfolio by 150%',
      'Improved investment returns by 25%',
      'Achieved 95% client retention rate'
    ],
    metrics: {
      timeReduction: '90%',
      portfolioGrowth: '150%',
      returnImprovement: '25%',
      clientRetention: '95%'
    },
    icon: <Target className="w-8 h-8" />,
    color: 'text-green-400',
    bgColor: 'bg-green-400/10',
    borderColor: 'border-green-400/20'
  },
  {
    id: 'space-resource-mining',
    title: 'Space Resource Mining Platform',
    company: 'Asteroid Mining Corp',
    industry: 'Space Technology',
    challenge: 'Complex logistics and resource optimization for asteroid mining operations',
    solution: 'AI-powered space resource mining platform with autonomous navigation and resource optimization',
    results: [
      'Increased mining efficiency by 200%',
      'Reduced operational costs by 45%',
      'Achieved 99.9% mission success rate',
      'Discovered 3 new valuable resource deposits'
    ],
    metrics: {
      efficiencyIncrease: '200%',
      costReduction: '45%',
      missionSuccess: '99.9%',
      newDeposits: '3'
    },
    icon: <Zap className="w-8 h-8" />,
    color: 'text-yellow-400',
    bgColor: 'bg-yellow-400/10',
    borderColor: 'border-yellow-400/20'
  },
  {
    id: 'ai-hr-analytics',
    title: 'AI HR Analytics Platform',
    company: 'Global Talent Solutions',
    industry: 'Human Resources',
    challenge: 'High employee turnover and lack of data-driven HR decision making',
    solution: 'AI-powered HR analytics platform with predictive retention modeling and performance insights',
    results: [
      'Reduced employee turnover by 40%',
      'Improved hiring success rate by 65%',
      'Increased employee satisfaction by 30%',
      'Reduced HR operational costs by 35%'
    ],
    metrics: {
      turnoverReduction: '40%',
      hiringSuccess: '65%',
      satisfactionIncrease: '30%',
      costReduction: '35%'
    },
    icon: <Users className="w-8 h-8" />,
    color: 'text-pink-400',
    bgColor: 'bg-pink-400/10',
    borderColor: 'border-pink-400/20'
  }
];

const testimonials = [
  {
    quote: "Zion Tech Group's AI platform transformed our customer success operations. We've seen unprecedented improvements in retention and satisfaction.",
    author: "Sarah Johnson",
    position: "VP of Customer Success",
    company: "TechCorp Solutions",
    rating: 5
  },
  {
    quote: "The quantum cybersecurity solution exceeded our expectations. We now have the most secure infrastructure in the financial industry.",
    author: "Michael Chen",
    position: "CTO",
    company: "Global Financial Bank",
    rating: 5
  },
  {
    quote: "Our manufacturing efficiency has skyrocketed thanks to Zion Tech's autonomous AI system. The results speak for themselves.",
    author: "David Rodriguez",
    position: "Operations Director",
    company: "Industrial Dynamics Inc.",
    rating: 5
  }
];

export default function CaseStudies() {
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
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
                Case Studies
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Real-world success stories showcasing how our revolutionary AI, quantum computing, 
                and autonomous systems are transforming industries and driving unprecedented results.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats Overview */}
        <section className="py-16 px-4 bg-black/30">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
            >
              <div className="p-6">
                <div className="text-4xl font-bold text-cyan-400 mb-2">50+</div>
                <div className="text-gray-300">Successful Deployments</div>
              </div>
              <div className="p-6">
                <div className="text-4xl font-bold text-blue-400 mb-2">$2B+</div>
                <div className="text-gray-300">Value Generated</div>
              </div>
              <div className="p-6">
                <div className="text-4xl font-bold text-purple-400 mb-2">99.9%</div>
                <div className="text-gray-300">Success Rate</div>
              </div>
              <div className="p-6">
                <div className="text-4xl font-bold text-green-400 mb-2">24/7</div>
                <div className="text-gray-300">Autonomous Operation</div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-12">
              {caseStudies.map((study, index) => (
                <motion.article
                  key={study.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
                  className="group"
                >
                  <div className={`p-8 rounded-2xl border ${study.borderColor} bg-black/40 hover:bg-black/60 transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-cyan-500/10`}>
                    {/* Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${study.bgColor} ${study.color} ${study.borderColor} border`}>
                        {study.icon}
                        {study.industry}
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-gray-400">Client</div>
                        <div className="font-semibold text-white">{study.company}</div>
                      </div>
                    </div>

                    {/* Title */}
                    <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                      {study.title}
                    </h2>

                    {/* Challenge */}
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-gray-300 mb-2">Challenge</h3>
                      <p className="text-gray-400 leading-relaxed">{study.challenge}</p>
                    </div>

                    {/* Solution */}
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-gray-300 mb-2">Solution</h3>
                      <p className="text-gray-400 leading-relaxed">{study.solution}</p>
                    </div>

                    {/* Results */}
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-gray-300 mb-3">Results</h3>
                      <div className="grid grid-cols-2 gap-4">
                        {study.results.map((result, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                            <span>{result}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Key Metrics */}
                    <div className="grid grid-cols-2 gap-4 p-4 bg-gray-800/30 rounded-lg">
                      {Object.entries(study.metrics).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className="text-2xl font-bold text-cyan-400">{value}</div>
                          <div className="text-xs text-gray-400 capitalize">
                            {key.replace(/([A-Z])/g, ' $1').trim()}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 px-4 bg-black/30">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">Client Testimonials</h2>
              <p className="text-xl text-gray-300">Hear directly from our satisfied clients</p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.4 + index * 0.1 }}
                  className="p-8 bg-black/40 border border-gray-800 rounded-2xl hover:border-cyan-500/50 transition-all duration-300"
                >
                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-gray-300 mb-6 italic leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>

                  {/* Author */}
                  <div className="border-t border-gray-700 pt-4">
                    <div className="font-semibold text-white">{testimonial.author}</div>
                    <div className="text-sm text-gray-400">{testimonial.position}</div>
                    <div className="text-sm text-cyan-400">{testimonial.company}</div>
                  </div>
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
              transition={{ duration: 0.8, delay: 1.6 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Write Your Success Story?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Join the ranks of industry leaders who have transformed their operations with our revolutionary technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Start Your Transformation
                </a>
                <a
                  href="/services"
                  className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-full hover:bg-cyan-500 hover:text-black transition-all duration-300"
                >
                  Explore Our Solutions
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}