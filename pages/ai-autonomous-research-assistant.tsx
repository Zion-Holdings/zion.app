import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  Brain, Search, BookOpen, Database, Zap, Globe, 
  ArrowRight, CheckCircle, Star, TrendingUp, Users
} from 'lucide-react';
import EnhancedNavigation from '../components/EnhancedNavigation';
import EnhancedFooter from '../components/EnhancedFooter';

export default function AIResearchAssistantPage() {
  const features = [
    {
      icon: Brain,
      title: "Autonomous Research",
      description: "AI-powered research that independently discovers, analyzes, and synthesizes information across multiple domains.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Search,
      title: "Intelligent Discovery",
      description: "Advanced algorithms that identify relevant research papers, data sources, and insights automatically.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: BookOpen,
      title: "Literature Analysis",
      description: "Comprehensive analysis of scientific literature with pattern recognition and knowledge extraction.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Database,
      title: "Knowledge Synthesis",
      description: "AI that connects disparate research findings and generates new hypotheses and insights.",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Zap,
      title: "Real-Time Updates",
      description: "Continuous monitoring of new research and automatic updates to knowledge bases.",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: Globe,
      title: "Cross-Domain Insights",
      description: "Bridging knowledge gaps between different scientific disciplines and research areas.",
      color: "from-yellow-500 to-orange-500"
    }
  ];

  const benefits = [
    "Accelerate research timelines by 80% with automated discovery and analysis",
    "Discover hidden connections and patterns across multiple research domains",
    "Reduce manual literature review time from weeks to hours",
    "Generate novel research hypotheses and identify research gaps",
    "Stay updated with the latest research developments automatically",
    "Collaborate with AI to enhance human research capabilities"
  ];

  const useCases = [
    {
      industry: "Academic Research",
      description: "Accelerating literature reviews, identifying research gaps, and generating new hypotheses",
      results: "80% reduction in literature review time, discovery of 15+ new research connections"
    },
    {
      industry: "Pharmaceutical Research",
      description: "Drug discovery research, clinical trial analysis, and medical literature synthesis",
      results: "60% faster drug target identification, comprehensive clinical evidence analysis"
    },
    {
      industry: "Technology Development",
      description: "Patent research, technology landscape analysis, and innovation opportunity identification",
      results: "40% improvement in innovation pipeline, faster technology assessment"
    },
    {
      industry: "Market Research",
      description: "Competitive intelligence, market trend analysis, and business opportunity research",
      results: "Real-time market insights, comprehensive competitive analysis"
    }
  ];

  const pricing = [
    {
      plan: "Researcher",
      price: "$299",
      period: "/month",
      description: "Individual researchers and small teams",
      features: [
        "Basic autonomous research",
        "Literature analysis",
        "Up to 100 research queries/month",
        "Email support",
        "Standard knowledge base"
      ],
      popular: false
    },
    {
      plan: "Research Team",
      price: "$799",
      period: "/month",
      description: "Research teams and academic departments",
      features: [
        "Everything in Researcher",
        "Advanced AI capabilities",
        "Unlimited research queries",
        "Priority support",
        "Custom knowledge bases",
        "Team collaboration tools",
        "API access"
      ],
      popular: true
    },
    {
      plan: "Enterprise",
      price: "Custom",
      period: "",
      description: "Large organizations and research institutions",
      features: [
        "Everything in Research Team",
        "Custom AI models",
        "Dedicated support team",
        "On-premise deployment",
        "Custom integrations",
        "SLA guarantees"
      ],
      popular: false
    }
  ];

  return (
    <>
      <Head>
        <title>AI Autonomous Research Assistant - Zion Tech Group</title>
        <meta name="description" content="Revolutionize your research with our AI autonomous research assistant. Automated literature analysis, knowledge discovery, and cross-domain insights." />
        <meta name="keywords" content="AI research assistant, autonomous research, literature analysis, knowledge discovery, research automation, Zion Tech Group" />
        <meta property="og:title" content="AI Autonomous Research Assistant - Zion Tech Group" />
        <meta property="og:description" content="Revolutionize your research with our AI autonomous research assistant." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/ai-autonomous-research-assistant" />
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
              AI Autonomous
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                {" "}Research Assistant
              </span>
            </h1>
            <p className="text-xl text-white/70 max-w-4xl mx-auto leading-relaxed mb-8">
              Transform the way you conduct research. Our AI autonomous research assistant independently 
              discovers, analyzes, and synthesizes information across multiple domains, accelerating 
              your research timeline and uncovering insights that would take months to discover manually.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 transform hover:scale-105"
              >
                Start Researching
              </a>
              <a
                href="#demo"
                className="border border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200"
              >
                Watch Demo
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Advanced AI Research Capabilities</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Cutting-edge AI technology that revolutionizes how research is conducted and knowledge is discovered.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-50 rounded-2xl p-8 hover:bg-slate-100 transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Why Choose AI Research Assistant?</h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                Our AI research assistant doesn't just help with research—it transforms the entire research process. 
                Experience unprecedented speed, depth, and insight in your research endeavors.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="text-slate-700">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Research Performance Metrics</h3>
              <div className="space-y-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">80%</div>
                  <div className="text-slate-600">Faster Research</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-600 mb-2">15+</div>
                  <div className="text-slate-600">New Connections</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-600 mb-2">24/7</div>
                  <div className="text-slate-600">Research Availability</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Research Applications</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              See how researchers across different industries are leveraging AI to accelerate their work and discover new insights.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.industry}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-50 rounded-2xl p-8 hover:bg-slate-100 transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{useCase.industry}</h3>
                <p className="text-slate-600 mb-4 leading-relaxed">{useCase.description}</p>
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <p className="text-green-800 font-medium">Results: {useCase.results}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">AI Research Technology Stack</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Advanced AI technologies and infrastructure that power our autonomous research capabilities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-8 text-center"
            >
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mx-auto mb-4">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Natural Language Processing</h3>
              <p className="text-white/70 text-sm">Advanced NLP for understanding and analyzing research papers</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-8 text-center"
            >
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center mx-auto mb-4">
                <Database className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Knowledge Graphs</h3>
              <p className="text-white/70 text-sm">Semantic knowledge representation for research insights</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-8 text-center"
            >
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Semantic Search</h3>
              <p className="text-white/70 text-sm">Intelligent search across research databases and literature</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-8 text-center"
            >
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Machine Learning</h3>
              <p className="text-white/70 text-sm">ML models for pattern recognition and insight generation</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-6">AI Research Plans</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Choose the plan that fits your research needs and AI capabilities requirements.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <motion.div
                key={plan.plan}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative bg-slate-50 rounded-2xl p-8 ${
                  plan.popular ? 'ring-2 ring-blue-500 transform scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.plan}</h3>
                  <div className="text-4xl font-bold text-slate-900 mb-2">
                    {plan.price}
                    <span className="text-lg text-slate-600">{plan.period}</span>
                  </div>
                  <p className="text-slate-600">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="/contact"
                  className="block w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white text-center py-3 rounded-xl font-medium transition-all duration-200 transform hover:scale-105"
                >
                  Get Started
                </a>
              </motion.div>
            ))}
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
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Revolutionize Your Research?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Experience the future of research with AI-powered autonomous discovery and analysis.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 transform hover:scale-105"
              >
                Start Free Trial
              </a>
              <a
                href="/contact"
                className="border border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200"
              >
                Schedule Demo
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <EnhancedFooter />
    </>
  );
}