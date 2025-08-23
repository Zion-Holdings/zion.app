import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { Search, Eye, Ear, Hand, Brain, CheckCircle, ArrowRight, Star, Zap, Globe, Shield, Users, Heart, AlertTriangle } from 'lucide-react';

const AccessibilityScanner: React.FC = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-violet-900/20 to-purple-900/20">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-violet-500/20 to-purple-500/20 border border-violet-500/30 rounded-full text-violet-300 text-sm mb-6">
                <Search className="w-4 h-4" />
                Accessibility Scanner
              </div>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
                Accessibility Scanner
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Test and improve your website's accessibility with our comprehensive scanning tool
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-violet-500 to-purple-500 text-white rounded-2xl font-semibold hover:shadow-2xl hover:shadow-violet-500/25 transition-all duration-300">
                  Start Scan
                </button>
                <button className="px-8 py-4 border border-violet-500/30 text-violet-300 rounded-2xl hover:bg-violet-500/10 transition-all duration-300">
                  Learn More
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Scanner Tool */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Scan Your Website
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Enter your website URL to receive a comprehensive accessibility report
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="p-8 bg-black/40 border border-violet-500/20 rounded-2xl"
              >
                <div className="mb-6">
                  <label className="block text-white font-semibold mb-3">Website URL</label>
                  <div className="flex gap-4">
                    <input
                      type="url"
                      placeholder="https://example.com"
                      className="flex-1 px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20"
                    />
                    <button className="px-8 py-3 bg-gradient-to-r from-violet-500 to-purple-500 text-white rounded-xl font-semibold hover:shadow-xl hover:shadow-violet-500/25 transition-all duration-300">
                      Scan Now
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    { label: "Scan Depth", value: "Comprehensive" },
                    { label: "Report Type", value: "Detailed" },
                    { label: "Turnaround", value: "< 5 minutes" }
                  ].map((info, index) => (
                    <div key={index} className="text-center p-4 bg-gray-800/30 rounded-xl">
                      <div className="text-sm text-gray-400 mb-1">{info.label}</div>
                      <div className="text-violet-400 font-semibold">{info.value}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* What We Scan */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                What We Scan
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Comprehensive accessibility testing across multiple dimensions
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Eye className="w-12 h-12 text-violet-400" />,
                  title: "Visual Accessibility",
                  description: "Test color contrast, text sizing, and visual elements",
                  checks: ["Color contrast ratios", "Text sizing options", "Image alt text", "Visual hierarchy"]
                },
                {
                  icon: <Ear className="w-12 h-12 text-purple-400" />,
                  title: "Auditory Accessibility",
                  description: "Verify audio content and multimedia accessibility",
                  checks: ["Audio descriptions", "Closed captions", "Transcripts", "Sound alerts"]
                },
                {
                  icon: <Hand className="w-12 h-12 text-pink-400" />,
                  title: "Motor Accessibility",
                  description: "Test keyboard navigation and input methods",
                  checks: ["Keyboard navigation", "Focus indicators", "Click targets", "Form accessibility"]
                },
                {
                  icon: <Brain className="w-12 h-12 text-indigo-400" />,
                  title: "Cognitive Accessibility",
                  description: "Evaluate content clarity and navigation",
                  checks: ["Language complexity", "Navigation clarity", "Error prevention", "Consistent design"]
                },
                {
                  icon: <Globe className="w-12 h-12 text-blue-400" />,
                  title: "Technical Standards",
                  description: "Verify compliance with accessibility standards",
                  checks: ["WCAG 2.1 AA", "Section 508", "ARIA implementation", "HTML semantics"]
                },
                {
                  icon: <Shield className="w-12 h-12 text-cyan-400" />,
                  title: "Mobile Accessibility",
                  description: "Test responsive design and touch interfaces",
                  checks: ["Touch targets", "Responsive design", "Mobile navigation", "Gesture support"]
                }
              ].map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-8 bg-black/40 border border-violet-500/20 rounded-2xl hover:border-violet-500/40 transition-all duration-300"
                >
                  <div className="mb-6">{category.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-4">{category.title}</h3>
                  <p className="text-gray-400 mb-6">{category.description}</p>
                  
                  <ul className="space-y-3">
                    {category.checks.map((check, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-gray-300">
                        <CheckCircle className="w-4 h-4 text-violet-400" />
                        {check}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Sample Report */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Sample Report
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                See what you'll get from our comprehensive accessibility scan
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {[
                {
                  title: "Accessibility Score",
                  score: "87/100",
                  status: "Good",
                  description: "Your website meets most accessibility requirements",
                  details: [
                    "Visual accessibility: 92%",
                    "Auditory accessibility: 85%",
                    "Motor accessibility: 89%",
                    "Cognitive accessibility: 82%"
                  ],
                  color: "from-green-500 to-emerald-500"
                },
                {
                  title: "Issues Found",
                  score: "12",
                  status: "Medium Priority",
                  description: "Several accessibility issues that should be addressed",
                  details: [
                    "Critical issues: 2",
                    "High priority: 4",
                    "Medium priority: 3",
                    "Low priority: 3"
                  ],
                  color: "from-orange-500 to-red-500"
                }
              ].map((report, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="p-8 bg-black/40 border border-violet-500/20 rounded-2xl"
                >
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{report.title}</h3>
                    <div className={`text-4xl font-bold bg-gradient-to-r ${report.color} bg-clip-text text-transparent mb-2`}>
                      {report.score}
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      report.status === "Good" 
                        ? "bg-green-500/20 text-green-400" 
                        : "bg-orange-500/20 text-orange-400"
                    }`}>
                      {report.status}
                    </span>
                  </div>

                  <p className="text-gray-400 mb-6">{report.description}</p>

                  <ul className="space-y-3">
                    {report.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-gray-300">
                        <CheckCircle className="w-4 h-4 text-violet-400" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features & Benefits */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Features & Benefits
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Why choose our accessibility scanner for your website
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <Zap className="w-8 h-8 text-violet-400" />,
                  title: "Fast Results",
                  description: "Get comprehensive reports in under 5 minutes"
                },
                {
                  icon: <Star className="w-8 h-8 text-purple-400" />,
                  title: "Accurate Testing",
                  description: "Industry-leading accuracy with detailed explanations"
                },
                {
                  icon: <Globe className="w-8 h-8 text-pink-400" />,
                  title: "Global Standards",
                  description: "Test against WCAG, Section 508, and more"
                },
                {
                  icon: <Heart className="w-8 h-8 text-indigo-400" />,
                  title: "User Focused",
                  description: "Prioritize issues that impact real users"
                },
                {
                  icon: <Shield className="w-8 h-8 text-blue-400" />,
                  title: "Secure Scanning",
                  description: "Your data is protected and never stored"
                },
                {
                  icon: <Users className="w-8 h-8 text-cyan-400" />,
                  title: "Expert Support",
                  description: "Get help understanding and fixing issues"
                },
                {
                  icon: <AlertTriangle className="w-8 h-8 text-yellow-400" />,
                  title: "Priority Ranking",
                  description: "Issues ranked by impact and difficulty"
                },
                {
                  icon: <CheckCircle className="w-8 h-8 text-green-400" />,
                  title: "Actionable Fixes",
                  description: "Step-by-step solutions for each issue"
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-6 bg-black/40 border border-violet-500/20 rounded-2xl hover:border-violet-500/40 transition-all duration-300 text-center"
                >
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-lg font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-400 text-sm">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Get Started */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Test Your Website?
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                Start your accessibility journey with a free comprehensive scan
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-violet-500 to-purple-500 text-white rounded-2xl font-semibold hover:shadow-2xl hover:shadow-violet-500/25 transition-all duration-300 flex items-center gap-2">
                  Start Free Scan
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="px-8 py-4 border border-violet-500/30 text-violet-300 rounded-2xl hover:bg-violet-500/10 transition-all duration-300">
                  View Sample Report
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default AccessibilityScanner;