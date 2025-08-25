import React from 'react';
import { Link } from 'react-router-dom';

export default function AIBusinessSolutions() {
  const businessSolutions = [
    {
      category: 'Marketing & Sales',
      solutions: [
        {
          name: 'AI Marketing Automation',
          description: 'Automate marketing campaigns with intelligent targeting and optimization',
          features: ['Customer segmentation', 'Predictive analytics', 'Campaign optimization', 'ROI tracking'],
          icon: '📈'
        },
        {
          name: 'AI Sales Intelligence',
          description: 'Enhance sales performance with AI-powered insights and automation',
          features: ['Lead scoring', 'Sales forecasting', 'Pipeline optimization', 'Customer insights'],
          icon: '💼'
        }
      ]
    },
    {
      category: 'Operations & Supply Chain',
      solutions: [
        {
          name: 'AI Supply Chain Optimization',
          description: 'Optimize supply chain operations with predictive analytics',
          features: ['Demand forecasting', 'Inventory optimization', 'Route optimization', 'Risk management'],
          icon: '🚚'
        },
        {
          name: 'AI Process Automation',
          description: 'Streamline business processes with intelligent automation',
          features: ['Workflow automation', 'Document processing', 'Quality control', 'Performance monitoring'],
          icon: '⚙️'
        }
      ]
    },
    {
      category: 'Finance & Risk',
      solutions: [
        {
          name: 'AI Financial Analytics',
          description: 'Advanced financial analysis and risk assessment',
          features: ['Risk modeling', 'Fraud detection', 'Investment analysis', 'Regulatory compliance'],
          icon: '💰'
        },
        {
          name: 'AI Credit Scoring',
          description: 'Intelligent credit assessment and lending decisions',
          features: ['Credit risk analysis', 'Alternative data', 'Real-time scoring', 'Portfolio management'],
          icon: '🏦'
        }
      ]
    },
    {
      category: 'Customer Experience',
      solutions: [
        {
          name: 'AI Customer Service',
          description: '24/7 intelligent customer support and engagement',
          features: ['Chatbots', 'Voice assistants', 'Sentiment analysis', 'Personalized support'],
          icon: '🤖'
        },
        {
          name: 'AI Personalization',
          description: 'Deliver personalized experiences across all touchpoints',
          features: ['Recommendation engines', 'Dynamic pricing', 'Content personalization', 'Behavioral analysis'],
          icon: '🎯'
        }
      ]
    }
  ];

  const benefits = [
    {
      title: 'Increased Efficiency',
      description: 'Automate repetitive tasks and optimize workflows',
      metric: '40%',
      detail: 'Average efficiency improvement'
    },
    {
      title: 'Cost Reduction',
      description: 'Reduce operational costs through intelligent automation',
      metric: '30%',
      detail: 'Average cost savings'
    },
    {
      title: 'Better Decision Making',
      description: 'Data-driven insights for strategic decisions',
      metric: '60%',
      detail: 'Faster decision making'
    },
    {
      title: 'Enhanced Customer Experience',
      description: 'Personalized and responsive customer interactions',
      metric: '50%',
      detail: 'Customer satisfaction improvement'
    }
  ];

  const industries = [
    {
      name: 'Healthcare',
      applications: ['Patient diagnosis', 'Drug discovery', 'Medical imaging', 'Predictive healthcare']
    },
    {
      name: 'Manufacturing',
      applications: ['Predictive maintenance', 'Quality control', 'Supply chain optimization', 'Production planning']
    },
    {
      name: 'Retail',
      applications: ['Inventory management', 'Customer segmentation', 'Price optimization', 'Demand forecasting']
    },
    {
      name: 'Financial Services',
      applications: ['Risk assessment', 'Fraud detection', 'Portfolio management', 'Customer service']
    },
    {
      name: 'Transportation',
      applications: ['Route optimization', 'Fleet management', 'Predictive maintenance', 'Demand forecasting']
    },
    {
      name: 'Energy',
      applications: ['Grid optimization', 'Predictive maintenance', 'Energy trading', 'Sustainability analysis']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-6">
            AI Business Solutions
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Transform your business operations with cutting-edge AI solutions designed to 
            increase efficiency, reduce costs, and drive growth across all departments.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105">
              Get Business Assessment
            </button>
            <button className="px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/20 transition-all duration-300">
              Schedule Consultation
            </button>
          </div>
        </div>

        {/* Business Solutions Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-white mb-12">Comprehensive Business Solutions</h2>
          <div className="space-y-12">
            {businessSolutions.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h3 className="text-2xl font-bold text-cyan-400 mb-8 text-center">{category.category}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {category.solutions.map((solution, solutionIndex) => (
                    <div key={solutionIndex} className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300">
                      <div className="text-4xl mb-4">{solution.icon}</div>
                      <h4 className="text-xl font-bold text-cyan-400 mb-4">{solution.name}</h4>
                      <p className="text-gray-300 mb-6">{solution.description}</p>
                      <h5 className="text-lg font-semibold text-white mb-3">Key Features:</h5>
                      <ul className="space-y-2">
                        {solution.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-gray-300">
                            <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Business Benefits */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-white mb-12">Measurable Business Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/30 text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">{benefit.metric}</div>
                <h3 className="text-lg font-bold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300 mb-2 text-sm">{benefit.description}</p>
                <p className="text-cyan-300 text-sm font-semibold">{benefit.detail}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Industry Applications */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-white mb-12">Industry-Specific Applications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <div key={index} className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/30">
                <h3 className="text-xl font-bold text-cyan-400 mb-4">{industry.name}</h3>
                <ul className="space-y-2">
                  {industry.applications.map((application, appIndex) => (
                    <li key={appIndex} className="text-sm text-gray-300">
                      • {application}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Implementation Process */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-white mb-12">Implementation Process</h2>
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/30">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-cyan-400">1</span>
                </div>
                <h3 className="text-lg font-bold text-cyan-400 mb-2">Assessment</h3>
                <p className="text-gray-300 text-sm">Evaluate current processes and identify AI opportunities</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-cyan-400">2</span>
                </div>
                <h3 className="text-lg font-bold text-cyan-400 mb-2">Strategy</h3>
                <p className="text-gray-300 text-sm">Develop comprehensive AI implementation roadmap</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-cyan-400">3</span>
                </div>
                <h3 className="text-lg font-bold text-cyan-400 mb-2">Implementation</h3>
                <p className="text-gray-300 text-sm">Deploy AI solutions with expert guidance</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-cyan-400">4</span>
                </div>
                <h3 className="text-lg font-bold text-cyan-400 mb-2">Optimization</h3>
                <p className="text-gray-300 text-sm">Continuous improvement and performance monitoring</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl p-8 border border-cyan-500/30">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Transform Your Business?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join leading organizations that have already transformed their operations 
              with our AI business solutions and achieved remarkable results.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105"
              >
                Start Your AI Journey
              </Link>
              <Link
                to="/services"
                className="px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/20 transition-all duration-300"
              >
                Explore All Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}