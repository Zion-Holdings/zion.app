import React from 'react';
import Layout from '../../components/layout/Layout';
import { Target, Zap, Users, TrendingUp, Cpu, Database, Star, Award, Building, Rocket } from 'lucide-react';

const BusinessSolutionsPage: React.FC = () => {
  const services = [
    {
      title: 'Micro SAAS Development',
      description: 'Custom software-as-a-service solutions for specific business needs',
      icon: Target,
      features: [
        'Custom SAAS applications',
        'Scalable architecture design',
        'User management systems',
        'Subscription billing integration'
      ]
    },
    {
      title: 'Business Process Automation',
      description: 'Streamline operations with intelligent automation solutions',
      icon: Zap,
      features: [
        'Workflow automation',
        'Process optimization',
        'Integration solutions',
        'Performance monitoring'
      ]
    },
    {
      title: 'Digital Transformation',
      description: 'Transform your business for the digital age',
      icon: TrendingUp,
      features: [
        'Technology assessment',
        'Implementation strategy',
        'Change management',
        'Training and support'
      ]
    },
    {
      title: 'Strategic Consulting',
      description: 'Expert guidance for technology decisions',
      icon: Users,
      features: [
        'Technology roadmaps',
        'Vendor selection',
        'Cost optimization',
        'Risk assessment'
      ]
    }
  ];

  const benefits = [
    {
      title: 'Increased Efficiency',
      description: 'Automate repetitive tasks and streamline workflows',
      icon: Zap
    },
    {
      title: 'Cost Reduction',
      description: 'Lower operational costs through automation',
      icon: TrendingUp
    },
    {
      title: 'Scalability',
      description: 'Grow your business without proportional cost increases',
      icon: Rocket
    },
    {
      title: 'Competitive Advantage',
      description: 'Stay ahead with cutting-edge technology',
      icon: Award
    }
  ];

  return (
    <Layout
      title="Business Solutions | Zion Tech Group"
      description="Transform your business with micro SAAS development, process automation, digital transformation, and strategic consulting. Drive growth and efficiency with cutting-edge technology solutions."
      keywords="business solutions, micro SAAS, process automation, digital transformation, consulting, Zion Tech Group"
      canonicalUrl="https://ziontechgroup.com/services/business-solutions"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="mb-8">
              <Target className="mx-auto h-20 w-20 text-emerald-400 mb-6" />
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Business Solutions
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
                Transform your business with innovative technology solutions that drive 
                growth, efficiency, and competitive advantage.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Transform Your Business
              </button>
              <button className="border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Free Consultation
              </button>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Business Solutions Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive solutions designed to drive business success
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-emerald-400/50 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-emerald-500/20 rounded-xl mr-4">
                      <service.icon className="h-8 w-8 text-emerald-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <Star className="h-5 w-5 text-emerald-400 mr-3 flex-shrink-0" />
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
                Business Benefits
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Real results that impact your bottom line
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="p-4 bg-emerald-500/20 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                    <benefit.icon className="h-10 w-10 text-emerald-400" />
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
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the digital revolution and position your business for success 
              in the modern marketplace.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                Start Transformation
              </button>
              <button className="border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                Strategy Session
              </button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default BusinessSolutionsPage;