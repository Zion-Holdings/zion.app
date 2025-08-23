import React from 'react';
import Head from 'next/head';
import { 
  Cpu, Brain, Shield, Zap, BarChart3, Settings, 
  CheckCircle, ArrowRight, Star, TrendingUp, Award, Clock
} from 'lucide-react';
import UltraFuturisticBackground from '../../components/ui/UltraFuturisticBackground';

const ManufacturingSolutionsPage: React.FC = () => {
  const solutions = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: 'AI Manufacturing Optimization',
      description: 'Intelligent optimization of manufacturing processes and workflows'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'IoT Edge Computing Platform',
      description: 'Real-time monitoring and control of manufacturing equipment'
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: 'Smart Factory Analytics',
      description: 'Advanced analytics for predictive maintenance and quality control'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Manufacturing Cybersecurity',
      description: 'Industrial-grade security for connected manufacturing systems'
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: 'Digital Twin Platform',
      description: 'Virtual replicas for simulation and optimization'
    }
  ];

  const features = [
    {
      icon: <CheckCircle className="w-5 h-5" />,
      title: 'Industry 4.0 Ready',
      description: 'Built for the next generation of smart manufacturing'
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: 'Industrial Security',
      description: 'OT security protocols for manufacturing environments'
    },
    {
      icon: <TrendingUp className="w-5 h-5" />,
      title: 'Predictive Analytics',
      description: 'AI-powered insights for proactive maintenance'
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: 'Real-Time Monitoring',
      description: '24/7 visibility into manufacturing operations'
    }
  ];

  return (
    <>
      <Head>
        <title>Manufacturing Solutions | Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI and IoT-powered manufacturing solutions. Smart factory optimization, predictive analytics, and digital twin technology for Industry 4.0." />
        <meta name="keywords" content="manufacturing AI, smart factory, IoT manufacturing, Industry 4.0, predictive maintenance, digital twin" />
        <meta property="og:title" content="Manufacturing Solutions | Zion Tech Group" />
        <meta property="og:description" content="Revolutionary AI and IoT-powered manufacturing solutions for Industry 4.0." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/solutions/manufacturing" />
        <link rel="canonical" href="https://ziontechgroup.com/solutions/manufacturing" />
      </Head>

      <UltraFuturisticBackground>
        <div className="min-h-screen bg-black text-white relative z-10">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="mb-8">
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 border border-blue-500/30 rounded-full text-blue-400 text-sm font-medium mb-6">
                <Cpu className="w-4 h-4" />
                <span>Manufacturing Solutions</span>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Revolutionizing Manufacturing with AI & IoT
            </h1>
            
            <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-4xl mx-auto leading-relaxed">
              Transform manufacturing with cutting-edge AI optimization, IoT monitoring, and digital twin technology. 
              Join the Industry 4.0 revolution.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-indigo-600 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-blue-500/25">
                Get Started
              </button>
              <button className="px-8 py-4 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Our Manufacturing Solutions
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Comprehensive AI and IoT-powered solutions designed to transform manufacturing operations and drive efficiency.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solutions.map((solution, index) => (
                <div
                  key={index}
                  className="group p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300 hover:border-blue-500/30"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    {solution.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-blue-400 transition-colors duration-300">
                    {solution.title}
                  </h3>
                  <p className="text-white/70 leading-relaxed">
                    {solution.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Why Choose Our Solutions?
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Built with manufacturing professionals in mind, our solutions prioritize efficiency, security, and scalability.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-white">
                      {feature.title}
                    </h3>
                    <p className="text-white/70">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Manufacturing?
            </h2>
            <p className="text-xl text-white/70 mb-8">
              Join the Industry 4.0 revolution with our AI and IoT-powered solutions. 
              Let's build a more efficient manufacturing future together.
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-indigo-600 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-blue-500/25">
              Get Started Today
            </button>
          </div>
        </section>
        </div>
      </UltraFuturisticBackground>
    </>
  );
};

export default ManufacturingSolutionsPage;