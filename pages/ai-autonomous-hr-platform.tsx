import React from 'react';
import Head from 'next/head';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Users, Brain, Zap, CheckCircle, ArrowRight, 
  Target, Calendar, BarChart3, Heart, Shield
} from 'lucide-react';

const AIAutonomousHRPlatform: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>AI Autonomous HR Platform | Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI HR platform that manages recruitment, employee development, and workforce optimization autonomously. Transform human resources with intelligent automation." />
        <meta name="keywords" content="AI HR, autonomous HR, HR automation, AI recruitment, intelligent HR platform, workforce management" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-autonomous-hr-platform" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-red-500/10 to-pink-500/10" />
          <div className="relative z-10 max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/20 text-orange-400 rounded-full text-sm font-medium mb-6 border border-orange-500/30">
                <Users className="w-4 h-4" />
                AI People Management
              </div>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent mb-6">
                Autonomous HR Platform
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Revolutionary AI that manages recruitment, employee development, performance optimization, 
                and workforce planning autonomously while fostering human potential.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold rounded-full hover:from-orange-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2"
              >
                Transform HR with AI <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#features"
                className="px-8 py-4 border-2 border-orange-500 text-orange-400 font-semibold rounded-full hover:bg-orange-500 hover:text-black transition-all duration-300"
              >
                See Features
              </a>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Autonomous HR Capabilities
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                AI that doesn't just manage HR processes—it optimizes human potential and organizational growth
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Brain className="w-8 h-8 text-orange-400" />,
                  title: "Intelligent Recruitment",
                  description: "AI sources, screens, and interviews candidates autonomously, identifying the best talent matches"
                },
                {
                  icon: <Target className="w-8 h-8 text-red-400" />,
                  title: "Performance Optimization",
                  description: "Continuous performance monitoring and personalized development recommendations for each employee"
                },
                {
                  icon: <Calendar className="w-8 h-8 text-pink-400" />,
                  title: "Workforce Planning",
                  description: "Predictive analytics for workforce needs, skills gaps, and organizational restructuring"
                },
                {
                  icon: <BarChart3 className="w-8 h-8 text-purple-400" />,
                  title: "Employee Analytics",
                  description: "Deep insights into employee satisfaction, engagement, and productivity patterns"
                },
                {
                  icon: <Heart className="w-8 h-8 text-rose-400" />,
                  title: "Well-being Management",
                  description: "AI monitors employee well-being and proactively suggests interventions and support"
                },
                {
                  icon: <Shield className="w-8 h-8 text-amber-400" />,
                  title: "Compliance Automation",
                  description: "Automated compliance monitoring, reporting, and policy enforcement across all HR processes"
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-8 bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-2xl border border-gray-700/50 hover:border-orange-500/50 transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-4">
                    {feature.icon}
                    <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                  </div>
                  <p className="text-gray-300">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* HR Modules */}
        <section className="py-20 px-4 bg-black/30">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Complete HR Management Suite
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Integrated AI modules that handle every aspect of human resources
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white mb-4">Core HR Functions</h3>
                <div className="grid grid-cols-1 gap-4">
                  {[
                    'Talent acquisition and recruitment',
                    'Employee onboarding and orientation',
                    'Performance management and reviews',
                    'Learning and development planning',
                    'Compensation and benefits management',
                    'Time and attendance tracking',
                    'Employee relations and engagement',
                    'Succession planning and career paths'
                  ].map((function_item, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-gray-300">{function_item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white mb-4">AI Capabilities</h3>
                <div className="space-y-4">
                  {[
                    'Resume parsing and candidate scoring',
                    'Interview scheduling and video analysis',
                    'Skills gap analysis and training recommendations',
                    'Employee sentiment analysis from communications',
                    'Predictive turnover and retention modeling',
                    'Personalized career development paths',
                    'Automated policy compliance monitoring',
                    'Real-time workplace culture assessment'
                  ].map((capability, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Zap className="w-5 h-5 text-orange-400 mt-0.5" />
                      <span className="text-gray-300">{capability}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Recruitment Process */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                AI-Powered Recruitment Pipeline
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                End-to-end recruitment automation that finds and hires the best talent
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: "1",
                  title: "Job Analysis",
                  description: "AI analyzes role requirements and creates optimized job descriptions and candidate profiles"
                },
                {
                  step: "2",
                  title: "Candidate Sourcing",
                  description: "Autonomous sourcing from multiple platforms, databases, and professional networks"
                },
                {
                  step: "3",
                  title: "Screening & Assessment",
                  description: "AI conducts initial interviews, skills assessments, and cultural fit evaluations"
                },
                {
                  step: "4",
                  title: "Selection & Onboarding",
                  description: "Final candidate selection, offer negotiation, and automated onboarding process"
                }
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-6 bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-2xl border border-gray-700/50"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-300 text-sm">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Performance Metrics */}
        <section className="py-20 px-4 bg-black/30">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                HR Performance Results
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See the impact of autonomous HR management on organizational efficiency
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  metric: "75%",
                  label: "Faster Hiring",
                  description: "Reduction in time-to-hire through AI automation"
                },
                {
                  metric: "90%",
                  label: "Better Candidate Quality",
                  description: "Improvement in candidate-role fit accuracy"
                },
                {
                  metric: "85%",
                  label: "Employee Retention",
                  description: "Higher retention rates through predictive analytics"
                },
                {
                  metric: "60%",
                  label: "HR Cost Reduction",
                  description: "Lower HR operational costs through automation"
                }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-8 bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-2xl border border-gray-700/50"
                >
                  <div className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent mb-2">
                    {stat.metric}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{stat.label}</h3>
                  <p className="text-gray-300 text-sm">{stat.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                AI HR Platform Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that scales with your workforce
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Startup",
                  price: "$299",
                  period: "month",
                  description: "Perfect for small teams",
                  features: [
                    "Up to 50 employees",
                    "Basic recruitment automation",
                    "Performance tracking",
                    "Standard analytics",
                    "Email support"
                  ]
                },
                {
                  title: "Growth",
                  price: "$899",
                  period: "month",
                  description: "Ideal for scaling companies",
                  features: [
                    "Up to 500 employees",
                    "Advanced AI recruitment",
                    "Employee development planning",
                    "Predictive analytics",
                    "Priority support",
                    "Custom integrations"
                  ],
                  popular: true
                },
                {
                  title: "Enterprise",
                  price: "$2,999",
                  period: "month",
                  description: "For large organizations",
                  features: [
                    "Unlimited employees",
                    "Custom AI model training",
                    "Advanced workforce planning",
                    "White-label solutions",
                    "24/7 dedicated support",
                    "On-premise deployment"
                  ]
                }
              ].map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`p-8 rounded-2xl border transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-br from-orange-900/50 to-red-900/50 border-orange-500 scale-105'
                      : 'bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-gray-700/50 hover:border-orange-500/50'
                  }`}
                >
                  {plan.popular && (
                    <div className="text-center mb-4">
                      <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.title}</h3>
                    <div className="text-4xl font-bold text-white mb-2">
                      {plan.price}<span className="text-lg text-gray-400">/{plan.period}</span>
                    </div>
                    <p className="text-gray-300">{plan.description}</p>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-400" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="/contact"
                    className={`block w-full text-center py-3 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-orange-500 to-red-600 text-white hover:from-orange-600 hover:to-red-700'
                        : 'bg-gray-700 text-white hover:bg-gray-600'
                    }`}
                  >
                    Get Started
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Integration Section */}
        <section className="py-20 px-4 bg-black/30">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                HR System Integrations
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Connect with your existing HR tools and platforms seamlessly
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                'Workday', 'BambooHR', 'ADP', 'SAP SuccessFactors',
                'Oracle HCM', 'Cornerstone OnDemand', 'Greenhouse', 'Lever',
                'LinkedIn Talent', 'Indeed', 'ZipRecruiter', 'Glassdoor',
                'Slack', 'Microsoft Teams', 'Google Workspace', 'Office 365'
              ].map((integration, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="p-4 bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-xl border border-gray-700/50 text-center"
                >
                  <span className="text-gray-300 font-medium">{integration}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your HR?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join innovative organizations optimizing human potential with AI-powered HR management
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold rounded-full hover:from-orange-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2 justify-center"
                >
                  Start Free Trial <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="/services"
                  className="px-8 py-4 border-2 border-orange-500 text-orange-400 font-semibold rounded-full hover:bg-orange-500 hover:text-black transition-all duration-300"
                >
                  View All Services
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default AIAutonomousHRPlatform;