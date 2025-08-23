import React from 'react';
import Layout from '../../components/layout/Layout';
import { 
  Heart, Brain, Shield, Zap, BarChart3, Cpu, Users, Target,
  CheckCircle, ArrowRight, Star, TrendingUp, Award, Clock
} from 'lucide-react';

const HealthcareSolutionsPage: React.FC = () => {
  const solutions = [
    {
      title: 'AI-Powered Diagnostics',
      description: 'Advanced diagnostic systems using artificial intelligence',
      icon: Brain,
      features: [
        'Medical image analysis',
        'Symptom assessment',
        'Disease prediction',
        'Treatment recommendations'
      ]
    },
    {
      title: 'Healthcare Automation',
      description: 'Streamline healthcare operations with intelligent automation',
      icon: Cpu,
      features: [
        'Patient management systems',
        'Appointment scheduling',
        'Medical record automation',
        'Billing optimization'
      ]
    },
    {
      title: 'Data Security & Compliance',
      description: 'HIPAA-compliant healthcare data protection',
      icon: Shield,
      features: [
        'Patient data encryption',
        'Access control systems',
        'Audit trails',
        'Compliance monitoring'
      ]
    },
    {
      title: 'Telemedicine Platforms',
      description: 'Advanced virtual healthcare delivery systems',
      icon: Users,
      features: [
        'Video consultations',
        'Remote monitoring',
        'Digital prescriptions',
        'Health tracking apps'
      ]
    }
  ];

  const benefits = [
    {
      title: 'Improved Accuracy',
      description: 'AI-powered diagnostics reduce human error',
      icon: Target
    },
    {
      title: 'Faster Results',
      description: 'Quick diagnosis and treatment planning',
      icon: Zap
    },
    {
      title: 'Cost Reduction',
      description: 'Lower healthcare costs through efficiency',
      icon: TrendingUp
    },
    {
      title: 'Better Outcomes',
      description: 'Enhanced patient care and recovery',
      icon: Award
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-black text-white relative z-10">

        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="mb-8">
              <Heart className="mx-auto h-20 w-20 text-red-400 mb-6" />
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Healthcare & Biotech
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
                Revolutionizing healthcare with AI-powered solutions that improve 
                diagnosis, treatment, and patient outcomes.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Transform Healthcare
              </button>
              <button className="border border-red-400 text-red-400 hover:bg-red-400 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Healthcare Demo
              </button>
            </div>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Healthcare Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive technology solutions for modern healthcare
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {solutions.map((solution, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-red-400/50 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-red-500/20 rounded-xl mr-4">
                      <solution.icon className="h-8 w-8 text-red-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">{solution.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-6">{solution.description}</p>
                  <ul className="space-y-3">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <Star className="h-5 w-5 text-red-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Healthcare Benefits
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Real improvements that impact patient care
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="p-4 bg-red-500/20 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                    <benefit.icon className="h-10 w-10 text-red-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Healthcare?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the healthcare revolution and improve patient outcomes with 
              cutting-edge AI technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                Start Healthcare Journey
              </button>
              <button className="border border-red-400 text-red-400 hover:bg-red-400 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                Healthcare Assessment
              </button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default HealthcareSolutionsPage;