import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function AISolutionsPage() {
  const aiSolutions = [
    {
      id: 'machine-learning',
      title: 'Machine Learning Solutions',
      description: 'Custom ML models for predictive analytics, pattern recognition, and intelligent decision making.',
      features: ['Predictive Analytics', 'Pattern Recognition', 'Anomaly Detection', 'Recommendation Systems'],
      icon: '🧠',
      category: 'Core AI',
      complexity: 'Advanced'
    },
    {
      id: 'natural-language-processing',
      title: 'Natural Language Processing',
      description: 'Advanced NLP solutions for text analysis, sentiment analysis, and language understanding.',
      features: ['Text Analysis', 'Sentiment Analysis', 'Language Translation', 'Chatbot Development'],
      icon: '💬',
      category: 'Language AI',
      complexity: 'Advanced'
    },
    {
      id: 'computer-vision',
      title: 'Computer Vision',
      description: 'Computer vision solutions for image recognition, object detection, and visual analytics.',
      features: ['Image Recognition', 'Object Detection', 'Facial Recognition', 'Quality Control'],
      icon: '👁️',
      category: 'Visual AI',
      complexity: 'Advanced'
    },
    {
      id: 'autonomous-systems',
      title: 'Autonomous Systems',
      description: 'Self-operating systems that can make decisions and take actions independently.',
      features: ['Decision Making', 'Self-Learning', 'Adaptive Behavior', 'Continuous Improvement'],
      icon: '🤖',
      category: 'Autonomy',
      complexity: 'Expert'
    },
    {
      id: 'predictive-analytics',
      title: 'Predictive Analytics',
      description: 'Data-driven insights that help predict future trends and behaviors.',
      features: ['Trend Analysis', 'Risk Assessment', 'Forecasting', 'Behavioral Prediction'],
      icon: '📊',
      category: 'Analytics',
      complexity: 'Intermediate'
    },
    {
      id: 'ai-automation',
      title: 'AI-Powered Automation',
      description: 'Intelligent automation that learns and improves over time.',
      features: ['Process Automation', 'Workflow Optimization', 'Intelligent Routing', 'Adaptive Workflows'],
      icon: '⚡',
      category: 'Automation',
      complexity: 'Intermediate'
    }
  ];

  const useCases = [
    {
      industry: 'Manufacturing',
      solutions: ['Quality Control', 'Predictive Maintenance', 'Supply Chain Optimization'],
      icon: '🏭'
    },
    {
      industry: 'Healthcare',
      solutions: ['Diagnostic Support', 'Patient Care Optimization', 'Drug Discovery'],
      icon: '🏥'
    },
    {
      industry: 'Finance',
      solutions: ['Fraud Detection', 'Risk Assessment', 'Algorithmic Trading'],
      icon: '💳'
    },
    {
      industry: 'Retail',
      solutions: ['Customer Segmentation', 'Inventory Management', 'Personalized Marketing'],
      icon: '🛍️'
    }
  ];

  const technologies = [
    'TensorFlow', 'PyTorch', 'Scikit-learn', 'OpenAI GPT', 'BERT', 'YOLO', 'Keras', 'Pandas'
  ];

  return (
    <>
      <Head>
        <title>AI Solutions | Zion Tech Group - Advanced AI & Machine Learning</title>
        <meta name="description" content="Explore Zion Tech Group's comprehensive AI solutions including machine learning, NLP, computer vision, and autonomous systems." />
        <meta property="og:title" content="AI Solutions | Zion Tech Group" />
        <meta property="og:description" content="Advanced AI solutions for machine learning, natural language processing, computer vision, and autonomous systems." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <section className="text-center mb-16">
            <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
              AI Solutions
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Cutting-edge artificial intelligence solutions that transform businesses and drive innovation
            </p>
          </section>

          <section className="mx-auto max-w-7xl">
            {/* AI Solutions Grid */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center text-cyan-400">Our AI Solutions</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {aiSolutions.map((solution, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 hover:bg-white/15 transition-all duration-300">
                    <div className="text-4xl mb-4">{solution.icon}</div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-3 py-1 bg-fuchsia-400/20 text-fuchsia-400 text-sm rounded-full">{solution.category}</span>
                      <span className="px-3 py-1 bg-blue-400/20 text-blue-400 text-sm rounded-full">{solution.complexity}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-white">{solution.title}</h3>
                    <p className="text-white/70 mb-4">{solution.description}</p>
                    <ul className="space-y-1 mb-4">
                      {solution.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-sm text-white/60 flex items-center">
                          <span className="text-cyan-400 mr-2">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link 
                      href={`/services#${solution.id}`}
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      Learn More <span className="ml-1">→</span>
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* Industry Use Cases */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center text-fuchsia-400">Industry Applications</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {useCases.map((useCase, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 text-center">
                    <div className="text-4xl mb-4">{useCase.icon}</div>
                    <h3 className="text-xl font-bold mb-4 text-white">{useCase.industry}</h3>
                    <ul className="space-y-2">
                      {useCase.solutions.map((solution, solutionIndex) => (
                        <li key={solutionIndex} className="text-sm text-white/70">
                          {solution}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center text-green-400">Technologies We Use</h2>
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8">
                <div className="flex flex-wrap justify-center gap-4">
                  {technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-4 py-2 bg-gradient-to-r from-cyan-400/20 to-fuchsia-400/20 text-white rounded-lg border border-white/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Success Stories */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center text-blue-400">AI Success Stories</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6">
                  <h3 className="text-xl font-bold mb-3 text-cyan-400">Manufacturing Excellence</h3>
                  <p className="text-white/70 mb-4">
                    Implemented computer vision and ML solutions that improved quality control by 85% and reduced defects by 60%.
                  </p>
                  <Link 
                    href="/case-studies#ai-automation-manufacturing"
                    className="text-fuchsia-400 hover:text-fuchsia-300 transition-colors"
                  >
                    Read Case Study →
                  </Link>
                </div>
                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6">
                  <h3 className="text-xl font-bold mb-3 text-fuchsia-400">Content Generation Scale</h3>
                  <p className="text-white/70 mb-4">
                    Built autonomous content generation systems that increased output by 10x while maintaining quality standards.
                  </p>
                  <Link 
                    href="/case-studies#content-generation-scale"
                    className="text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    Read Case Study →
                  </Link>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-cyan-400/20 to-fuchsia-400/20 backdrop-blur-xl rounded-2xl p-8 text-center">
              <h2 className="text-3xl font-bold mb-4 text-white">Ready to Harness the Power of AI?</h2>
              <p className="text-xl text-white/80 mb-6">
                Let our AI experts help you implement intelligent solutions that drive real business value
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  href="/contact"
                  className="px-8 py-3 bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white font-bold rounded-lg hover:from-cyan-500 hover:to-fuchsia-500 transition-all duration-200 transform hover:scale-105"
                >
                  Start Your AI Journey
                </Link>
                <Link 
                  href="/automation-insights"
                  className="px-8 py-3 bg-white/10 text-white font-bold rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-200"
                >
                  Explore Insights
                </Link>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}