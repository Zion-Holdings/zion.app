import React from 'react';
import Head from 'next/head';
import { 
  DollarSign, Brain, Shield, Zap, BarChart3, Cpu, 
  CheckCircle, ArrowRight, Star, TrendingUp, Award, Clock
} from 'lucide-react';
import UltraFuturisticBackground from '../../components/backgrounds/UltraFuturisticBackground2045';

const FinancialSolutionsPage: React.FC = () => {
  const solutions = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: 'AI Financial Intelligence',
      description: 'Advanced AI algorithms for financial analysis and decision making'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Quantum Financial Trading',
      description: 'Quantum computing-powered trading algorithms and risk management'
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: 'Financial Analytics Platform',
      description: 'Comprehensive data analytics for financial institutions'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Blockchain Infrastructure',
      description: 'Secure blockchain solutions for financial transactions'
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: 'RegTech Solutions',
      description: 'Automated regulatory compliance and reporting systems'
    }
  ];

  const features = [
    {
      icon: <CheckCircle className="w-5 h-5" />,
      title: 'Regulatory Compliant',
      description: 'Full compliance with financial regulations and standards'
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: 'Bank-Grade Security',
      description: 'Military-grade encryption and security protocols'
    },
    {
      icon: <TrendingUp className="w-5 h-5" />,
      title: 'Real-Time Processing',
      description: 'Ultra-fast transaction processing and analytics'
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: '24/7 Monitoring',
      description: 'Round-the-clock system monitoring and support'
    }
  ];

  return (
    <>
      <Head>
        <title>Financial Services Solutions | Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI and quantum-powered financial solutions. Advanced trading algorithms, analytics, and blockchain infrastructure for the future of finance." />
        <meta name="keywords" content="financial AI, quantum trading, fintech, blockchain, regtech, financial analytics" />
        <meta property="og:title" content="Financial Services Solutions | Zion Tech Group" />
        <meta property="og:description" content="Revolutionary AI and quantum-powered financial solutions for the future of finance." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/solutions/financial" />
        <link rel="canonical" href="https://ziontechgroup.com/solutions/financial" />
      </Head>

      <UltraFuturisticBackground />

      <div className="min-h-screen bg-black text-white relative z-10">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="mb-8">
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-full text-green-400 text-sm font-medium mb-6">
                <DollarSign className="w-4 h-4" />
                <span>Financial Services Solutions</span>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Revolutionizing Finance with AI & Quantum
            </h1>
            
            <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-4xl mx-auto leading-relaxed">
              Transform financial services with cutting-edge AI algorithms, quantum computing, and blockchain technology. 
              Join the future of fintech innovation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold rounded-xl hover:from-green-600 hover:to-emerald-600 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-green-500/25">
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
                Our Financial Solutions
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Comprehensive AI and quantum-powered solutions designed to transform financial services and drive innovation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solutions.map((solution, index) => (
                <div
                  key={index}
                  className="group p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300 hover:border-green-500/30"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    {solution.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-green-400 transition-colors duration-300">
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
                Built with financial professionals in mind, our solutions prioritize security, compliance, and performance.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
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
              Ready to Transform Finance?
            </h2>
            <p className="text-xl text-white/70 mb-8">
              Join the financial revolution with our AI and quantum-powered solutions. 
              Let's build a more efficient financial future together.
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold rounded-xl hover:from-green-600 hover:to-emerald-600 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-green-500/25">
              Get Started Today
            </button>
          </div>
        </section>
      </div>
    </>
  );
};

export default FinancialSolutionsPage;