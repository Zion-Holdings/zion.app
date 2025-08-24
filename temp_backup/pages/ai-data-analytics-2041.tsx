import React from 'react';
import Layout from '../components/layout/Layout';
import { BarChart3, Sparkles, Zap, Target, Database, Clock, CheckCircle, Brain, TrendingUp, PieChart } from 'lucide-react';

export default function AIDataAnalytics2041() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-indigo-500/10 to-purple-500/10"></div>
          <div className="relative z-10 max-w-7xl mx-auto text-center">
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 border border-purple-500/30 rounded-full text-purple-300 text-sm mb-6">
                <Sparkles className="w-4 h-4" />
                Revolutionary 2041 Technology
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-purple-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  AI Data Analytics
                </span>
                <br />
                <span className="text-white">2041</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Experience the future of data analytics with AI systems that transform raw data into 
                actionable insights, predictive models, and strategic intelligence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105">
                  Analyze Data
                </button>
                <button className="px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-xl hover:bg-purple-400 hover:text-black transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Revolutionary Features
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Discover the cutting-edge capabilities that make AI Data Analytics 2041 the most 
                advanced analytics platform ever created.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Brain className="w-8 h-8" />,
                  title: "Cognitive Data Processing",
                  description: "AI systems that understand context, meaning, and relationships in data to provide deeper insights.",
                  color: "from-purple-500 to-indigo-500"
                },
                {
                  icon: <TrendingUp className="w-8 h-8" />,
                  title: "Predictive Modeling",
                  description: "Advanced machine learning algorithms that predict future trends, behaviors, and outcomes.",
                  color: "from-green-500 to-emerald-500"
                },
                {
                  icon: <BarChart3 className="w-8 h-8" />,
                  title: "Real-time Analytics",
                  description: "Instant data processing and analysis that delivers insights as events happen.",
                  color: "from-blue-500 to-cyan-500"
                },
                {
                  icon: <Database className="w-8 h-8" />,
                  title: "Big Data Processing",
                  description: "Handle massive datasets with lightning-fast processing and intelligent data management.",
                  color: "from-yellow-500 to-orange-500"
                },
                {
                  icon: <Zap className="w-8 h-8" />,
                  title: "Automated Insights",
                  description: "AI-generated insights that automatically identify patterns, anomalies, and opportunities.",
                  color: "from-red-500 to-pink-500"
                },
                {
                  icon: <PieChart className="w-8 h-8" />,
                  title: "Visual Intelligence",
                  description: "Intelligent data visualization that adapts to user preferences and highlights key insights.",
                  color: "from-cyan-500 to-blue-500"
                }
              ].map((feature, index) => (
                <div key={index} className="group p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105">
                  <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Analytics Capabilities */}
        <section className="py-20 px-4 bg-gradient-to-r from-purple-500/5 to-indigo-500/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Analytics Capabilities
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Comprehensive analytics solutions that cover every aspect of your data and business intelligence needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: "Descriptive Analytics", description: "Understand what happened with historical data analysis" },
                { name: "Diagnostic Analytics", description: "Discover why things happened with root cause analysis" },
                { name: "Predictive Analytics", description: "Forecast what will happen with AI-powered predictions" },
                { name: "Prescriptive Analytics", description: "Recommend actions with AI-driven decision support" },
                { name: "Text Analytics", description: "Extract insights from unstructured text and documents" },
                { name: "Sentiment Analysis", description: "Understand emotions and opinions in data" },
                { name: "Anomaly Detection", description: "Identify unusual patterns and outliers automatically" },
                { name: "Trend Analysis", description: "Track and forecast long-term patterns and changes" }
              ].map((capability, index) => (
                <div key={index} className="p-6 bg-white/5 border border-white/10 rounded-xl hover:border-purple-500/30 transition-all duration-300">
                  <h3 className="text-lg font-semibold text-white mb-2">{capability.name}</h3>
                  <p className="text-gray-400 text-sm">{capability.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Analytics Process */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                AI Analytics Process
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Understand how our AI systems transform raw data into actionable insights and strategic intelligence.
              </p>
            </div>

            <div className="space-y-8">
              {[
                {
                  phase: "Data Collection",
                  description: "Comprehensive data gathering from multiple sources, systems, and platforms",
                  features: ["Multi-source integration", "Real-time streaming", "Data validation"]
                },
                {
                  phase: "Data Preparation",
                  description: "AI-powered data cleaning, transformation, and preparation for analysis",
                  features: ["Data cleaning", "Feature engineering", "Quality assurance"]
                },
                {
                  phase: "AI Analysis",
                  description: "Advanced algorithms analyze data patterns, correlations, and insights",
                  features: ["Pattern recognition", "Correlation analysis", "Insight generation"]
                },
                {
                  phase: "Model Building",
                  description: "Machine learning models that learn from data and make predictions",
                  features: ["Algorithm selection", "Model training", "Validation & testing"]
                },
                {
                  phase: "Insight Delivery",
                  description: "Real-time delivery of insights through interactive dashboards and reports",
                  features: ["Interactive visualizations", "Automated reporting", "Mobile access"]
                }
              ].map((phase, index) => (
                <div key={index} className="flex flex-col lg:flex-row items-center gap-8 p-8 bg-gradient-to-r from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl">
                  <div className="lg:w-1/3 text-center lg:text-left">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full text-white text-2xl font-bold mb-4">
                      {index + 1}
                    </div>
                    <h3 className="text-2xl font-semibold text-white mb-3">{phase.phase}</h3>
                    <p className="text-gray-400">{phase.description}</p>
                  </div>
                  <div className="lg:w-2/3">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {phase.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-3 p-4 bg-white/5 border border-white/10 rounded-lg">
                          <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Data Types */}
        <section className="py-20 px-4 bg-gradient-to-r from-purple-500/5 to-indigo-500/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Data Types & Sources
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Comprehensive support for all types of data and sources to provide complete business intelligence.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  type: "Structured Data",
                  description: "Analyze databases, spreadsheets, and structured data sources with AI-powered insights.",
                  examples: ["SQL databases", "Excel files", "CSV data", "JSON documents"]
                },
                {
                  type: "Unstructured Data",
                  description: "Extract insights from text, documents, emails, and other unstructured content.",
                  examples: ["Text documents", "Emails", "Social media", "Web content"]
                },
                {
                  type: "Semi-structured Data",
                  description: "Process XML, HTML, and other semi-structured formats with intelligent parsing.",
                  examples: ["XML files", "HTML pages", "Log files", "API responses"]
                },
                {
                  type: "Real-time Data",
                  description: "Analyze streaming data and real-time events for instant insights.",
                  examples: ["IoT sensors", "Social feeds", "Transaction logs", "User activity"]
                },
                {
                  type: "Big Data",
                  description: "Handle massive datasets with distributed processing and intelligent optimization.",
                  examples: ["Data warehouses", "Data lakes", "Streaming platforms", "Cloud storage"]
                },
                {
                  type: "External Data",
                  description: "Integrate third-party data sources for comprehensive market and competitive intelligence.",
                  examples: ["Market data", "Weather data", "Economic indicators", "Social trends"]
                }
              ].map((dataType, index) => (
                <div key={index} className="p-8 bg-white/5 border border-white/10 rounded-2xl hover:border-purple-500/30 transition-all duration-300">
                  <h3 className="text-xl font-semibold text-white mb-4">{dataType.type}</h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">{dataType.description}</p>
                  <div className="space-y-2">
                    {dataType.examples.map((example, exampleIndex) => (
                      <div key={exampleIndex} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-purple-400 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{example}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industry Applications */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Industry Applications
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Discover how AI Data Analytics 2041 transforms industries across the globe.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  industry: "Finance",
                  description: "Risk assessment, fraud detection, and investment optimization with AI-powered analytics.",
                  applications: ["Risk modeling", "Fraud detection", "Portfolio optimization"]
                },
                {
                  industry: "Healthcare",
                  description: "Patient outcomes prediction, treatment optimization, and healthcare analytics.",
                  applications: ["Patient monitoring", "Treatment analysis", "Resource planning"]
                },
                {
                  industry: "Retail",
                  description: "Customer behavior analysis, inventory optimization, and sales forecasting.",
                  applications: ["Customer insights", "Demand forecasting", "Personalization"]
                },
                {
                  industry: "Manufacturing",
                  description: "Predictive maintenance, quality control, and supply chain optimization.",
                  applications: ["Equipment monitoring", "Quality analysis", "Supply optimization"]
                },
                {
                  industry: "Marketing",
                  description: "Campaign performance analysis, customer segmentation, and ROI optimization.",
                  applications: ["Performance tracking", "Audience insights", "Campaign optimization"]
                },
                {
                  industry: "Transportation",
                  description: "Route optimization, demand forecasting, and fleet management analytics.",
                  applications: ["Route planning", "Demand analysis", "Fleet optimization"]
                }
              ].map((industry, index) => (
                <div key={index} className="p-8 bg-white/5 border border-white/10 rounded-2xl hover:border-purple-500/30 transition-all duration-300">
                  <h3 className="text-xl font-semibold text-white mb-4">{industry.industry}</h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">{industry.description}</p>
                  <div className="space-y-2">
                    {industry.applications.map((app, appIndex) => (
                      <div key={appIndex} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-purple-400 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{app}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 px-4 bg-gradient-to-r from-purple-500/5 to-indigo-500/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Transform Your Business
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Discover the incredible benefits of implementing AI Data Analytics 2041 in your organization.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Better Decisions",
                  description: "Make data-driven decisions with confidence using AI-powered insights and predictions.",
                  icon: <Brain className="w-8 h-8" />,
                  color: "from-purple-500 to-indigo-500"
                },
                {
                  title: "Increased Efficiency",
                  description: "Automate data analysis and reporting to save time and improve productivity.",
                  icon: <Zap className="w-8 h-8" />,
                  color: "from-green-500 to-emerald-500"
                },
                {
                  title: "Competitive Advantage",
                  description: "Gain insights that competitors miss and identify opportunities for growth and innovation.",
                  icon: <Target className="w-8 h-8" />,
                  color: "from-blue-500 to-cyan-500"
                },
                {
                  title: "Cost Reduction",
                  description: "Identify inefficiencies and optimize operations to reduce costs and improve profitability.",
                  icon: <TrendingUp className="w-8 h-8" />,
                  color: "from-yellow-500 to-orange-500"
                }
              ].map((benefit, index) => (
                <div key={index} className="p-8 bg-white/5 border border-white/10 rounded-2xl hover:border-purple-500/30 transition-all duration-300">
                  <div className={`w-16 h-16 bg-gradient-to-r ${benefit.color} rounded-2xl flex items-center justify-center mb-6`}>
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{benefit.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Analyze Your Data?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Transform your business with AI-powered data analytics that deliver 
              actionable insights and strategic intelligence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-xl hover:bg-purple-400 hover:text-black transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}