import React from 'react';
import SEO from '../../components/SEO';
import { motion } from 'framer-motion';
import { 
  Check, Star, FileText, Zap, Shield, TrendingUp,
  ArrowRight, Play, Clock, Award, Globe, Cpu, Eye, Users
} from 'lucide-react';

export default function IntelligentDocumentProcessingSuite() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
      <SEO 
        title="Intelligent Document Processing Suite - AI-Powered Document Understanding | Zion Tech Group"
        description="AI-powered document processing solution with 99.5% accuracy in data extraction, classification, and processing. Transform any document type into structured, actionable data."
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="text-6xl mb-6">📄</div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Intelligent Document Processing Suite
            </h1>
            <p className="text-xl md:text-2xl text-green-200 mb-8 max-w-4xl mx-auto">
              AI-powered document understanding, classification, and data extraction with 99.5% accuracy
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-lg text-xl font-semibold">
                $199/month
              </div>
              <div className="text-green-200 text-lg">
                14-day free trial • Setup in 2-3 days
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Revolutionary Document Intelligence
            </h2>
            <p className="text-xl text-green-200 max-w-3xl mx-auto">
              Transform any document type into structured, actionable data with unprecedented accuracy
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <FileText className="w-8 h-8" />,
                title: "Multi-Format Support",
                description: "Process PDFs, images, scanned documents, and more with universal compatibility"
              },
              {
                icon: <Eye className="w-8 h-8" />,
                title: "99.5% Accuracy",
                description: "Industry-leading accuracy in data extraction and document understanding"
              },
              {
                icon: <Cpu className="w-8 h-8" />,
                title: "Intelligent Classification",
                description: "AI automatically categorizes documents by type, content, and purpose"
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Custom Field Extraction",
                description: "Train the system to extract specific data fields relevant to your business"
              },
              {
                icon: <Globe className="w-8 h-8" />,
                title: "Multi-Language Support",
                description: "Process documents in multiple languages with native understanding"
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Compliance & Audit",
                description: "Complete audit trails and compliance monitoring for regulatory requirements"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-green-400/50 transition-all duration-300"
              >
                <div className="text-green-400 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-green-200">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Transform Document Processing
            </h2>
            <p className="text-xl text-green-200 max-w-3xl mx-auto">
              Eliminate manual data entry and unlock the value hidden in your documents
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="space-y-6">
                {[
                  "Reduce manual data entry by 90%",
                  "Process documents 75% faster",
                  "Eliminate human error in data extraction",
                  "Scale document processing without adding staff",
                  "Improve data quality and consistency",
                  "Enable real-time document insights"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Check className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-lg text-white">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 rounded-2xl p-8 border border-white/20"
            >
              <h3 className="text-2xl font-bold text-white mb-6">Performance Metrics</h3>
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <span className="text-green-200">Data Extraction Accuracy</span>
                  <span className="text-2xl font-bold text-green-400">99.5%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-green-200">Processing Speed</span>
                  <span className="text-2xl font-bold text-green-400">75% faster</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-green-200">Manual Entry Reduction</span>
                  <span className="text-2xl font-bold text-green-400">90%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-green-200">Customer Rating</span>
                  <div className="flex items-center">
                    <span className="text-2xl font-bold text-yellow-400 mr-2">4.9</span>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-5 h-5 ${i < 4 ? 'text-yellow-400 fill-current' : 'text-gray-400'}`} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Industry-Leading Use Cases
            </h2>
            <p className="text-xl text-green-200 max-w-3xl mx-auto">
              Proven solutions across multiple industries with measurable business impact
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Invoice Processing",
                description: "Automatically extract line items, amounts, and vendor information from invoices",
                icon: "💰",
                industry: "Finance & Accounting"
              },
              {
                title: "Claims Processing",
                description: "Process insurance claims, medical records, and legal documents with high accuracy",
                icon: "📋",
                industry: "Insurance & Healthcare"
              },
              {
                title: "Contract Analysis",
                description: "Extract key terms, dates, and obligations from legal contracts and agreements",
                icon: "⚖️",
                industry: "Legal & Compliance"
              },
              {
                title: "Compliance Reporting",
                description: "Automate regulatory reporting and compliance document processing",
                icon: "📊",
                industry: "Government & Regulated"
              },
              {
                title: "Form Processing",
                description: "Process application forms, surveys, and questionnaires automatically",
                icon: "📝",
                industry: "All Industries"
              },
              {
                title: "Receipt Management",
                description: "Extract expense data from receipts for automated expense reporting",
                icon: "🧾",
                industry: "Business Operations"
              }
            ].map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-green-400/50 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{useCase.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                <p className="text-green-200 mb-4">{useCase.description}</p>
                <div className="text-sm text-green-300 font-medium">{useCase.industry}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Advanced AI Technology Stack
            </h2>
            <p className="text-xl text-green-200 max-w-3xl mx-auto">
              Built with state-of-the-art AI and machine learning technologies for maximum accuracy
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: "TensorFlow", description: "Deep learning framework" },
              { name: "PyTorch", description: "Neural network engine" },
              { name: "OpenCV", description: "Computer vision processing" },
              { name: "Tesseract", description: "OCR engine" },
              { name: "FastAPI", description: "High-performance API" },
              { name: "React", description: "Modern user interface" },
              { name: "PostgreSQL", description: "Data storage" },
              { name: "Redis", description: "Caching layer" }
            ].map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-white/20">
                  <h3 className="text-lg font-semibold text-white mb-2">{tech.name}</h3>
                  <p className="text-sm text-green-200">{tech.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-green-200 max-w-3xl mx-auto">
              Start processing documents intelligently today with our comprehensive AI platform
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 rounded-2xl p-8 border border-green-400/50"
            >
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-white mb-4">Intelligent Document Processing Suite</h3>
                <div className="text-5xl font-bold text-white mb-2">$199</div>
                <div className="text-xl text-green-200">per month</div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="text-xl font-semibold text-white mb-4">What's Included:</h4>
                  <ul className="space-y-3">
                    {[
                      "Unlimited document processing",
                      "99.5% accuracy guarantee",
                      "Multi-format document support",
                      "Custom field extraction training",
                      "Multi-language processing",
                      "API access and integrations",
                      "Compliance and audit trails",
                      "24/7 technical support"
                    ].map((feature, index) => (
                      <li key={index} className="flex items-center space-x-3">
                        <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-green-200">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-white mb-4">Additional Benefits:</h4>
                  <ul className="space-y-3">
                    {[
                      "14-day free trial",
                      "Setup in 2-3 days",
                      "Training and onboarding",
                      "Custom model training",
                      "Performance optimization",
                      "Scalability planning",
                      "Compliance support",
                      "Dedicated success manager"
                    ].map((benefit, index) => (
                      <li key={index} className="flex items-center space-x-3">
                        <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-green-200">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="text-center">
                <button className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-lg text-xl font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105">
                  Start Free Trial
                </button>
                <p className="text-green-200 mt-4">No credit card required • Cancel anytime</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Document Processing?
            </h2>
            <p className="text-xl text-green-200 mb-8">
              Get in touch with our team to learn how Intelligent Document Processing Suite can revolutionize your document workflows
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-white/20">
                <div className="text-2xl mb-2">📱</div>
                <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                <p className="text-green-200">+1 302 464 0950</p>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-white/20">
                <div className="text-2xl mb-2">✉️</div>
                <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                <p className="text-green-200">kleber@ziontechgroup.com</p>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-white/20">
                <div className="text-2xl mb-2">📍</div>
                <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
                <p className="text-green-200">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 rounded-xl p-8 border border-green-400/50">
              <h3 className="text-2xl font-bold text-white mb-4">Why Choose Zion Tech Group?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Award className="w-5 h-5 text-yellow-400" />
                    <span className="text-green-200">Proven track record with 45+ customers</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Zap className="w-5 h-5 text-blue-400" />
                    <span className="text-green-200">Industry-leading 99.5% accuracy</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Shield className="w-5 h-5 text-green-400" />
                    <span className="text-green-200">Enterprise-grade security and compliance</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Users className="w-5 h-5 text-purple-400" />
                    <span className="text-green-200">Dedicated support and success team</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-orange-400" />
                    <span className="text-green-200">Rapid implementation and onboarding</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <TrendingUp className="w-5 h-5 text-green-400" />
                    <span className="text-green-200">Continuous AI model improvements</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}