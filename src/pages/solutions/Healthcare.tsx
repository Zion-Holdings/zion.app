import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Brain, Shield, Users, Activity, Stethoscope, Microscope, Pill } from 'lucide-react';

const HealthcareSolutions = () => {
  const solutions = [
    {
      title: 'AI-Powered Patient Care',
      description: 'Intelligent patient monitoring and care management systems.',
      features: [
        'Real-time patient monitoring',
        'Predictive health analytics',
        'Automated care protocols',
        'Patient engagement tools',
        'Care coordination platform'
      ],
      icon: Heart,
      href: '/services/ai-autonomous-systems'
    },
    {
      title: 'Medical Imaging AI',
      description: 'Advanced AI for diagnostic imaging and analysis.',
      features: [
        'Radiology image analysis',
        'Pathology detection',
        '3D imaging reconstruction',
        'Automated reporting',
        'Quality assurance tools'
      ],
      icon: Microscope,
      href: '/services/ai-autonomous-systems'
    },
    {
      title: 'Drug Discovery Platform',
      description: 'AI-driven pharmaceutical research and development.',
      features: [
        'Molecular modeling',
        'Target identification',
        'Clinical trial optimization',
        'Drug repurposing',
        'Safety prediction'
      ],
      icon: Pill,
      href: '/services/quantum-technology'
    },
    {
      title: 'Healthcare Compliance',
      description: 'Automated compliance management for healthcare regulations.',
      features: [
        'HIPAA compliance',
        'FDA regulations',
        'Audit automation',
        'Risk assessment',
        'Document management'
      ],
      icon: Shield,
      href: '/services/cybersecurity'
    }
  ];

  const benefits = [
    {
      title: 'Improved Patient Outcomes',
      description: 'AI-driven insights lead to better diagnosis and treatment.',
      icon: Activity
    },
    {
      title: 'Operational Efficiency',
      description: 'Streamlined workflows reduce costs and improve care delivery.',
      icon: Users
    },
    {
      title: 'Enhanced Security',
      description: 'HIPAA-compliant solutions protect patient data.',
      icon: Shield
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Header Section */}
      <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-6">
            Healthcare AI Solutions
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Revolutionizing healthcare with cutting-edge AI technology. Improve patient outcomes, 
            streamline operations, and ensure compliance with our comprehensive healthcare solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Schedule Healthcare Demo
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black font-semibold rounded-lg transition-all duration-300"
            >
              Get Healthcare Quote
            </Link>
          </div>
        </div>
      </div>

      {/* Core Solutions */}
      <div className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Healthcare AI Solutions
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => {
              const Icon = solution.icon;
              return (
                <div key={index} className="bg-gray-800/30 rounded-2xl p-8 border border-gray-700 hover:border-cyan-400/50 transition-all duration-300">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center mr-4">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold">{solution.title}</h3>
                  </div>
                  
                  <p className="text-gray-300 mb-6">{solution.description}</p>
                  
                  <ul className="space-y-3 mb-6">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to={solution.href}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
                  >
                    Learn More
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Benefits for Healthcare Organizations
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl p-12 border border-cyan-500/30">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Transform Healthcare with AI
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join leading healthcare organizations using our AI solutions to improve patient care and operational efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Schedule Healthcare Demo
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black font-semibold rounded-lg transition-all duration-300"
              >
                Contact Healthcare Team
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthcareSolutions;