import React from 'react';
import Head from 'next/head';
import { 
  Heart, Brain, Shield, Zap, BarChart3, Cpu, 
  CheckCircle, ArrowRight, Star, TrendingUp, Award, Clock
} from 'lucide-react';
import UltraFuturisticBackground from '../../components/backgrounds/UltraFuturisticBackground2045';

const HealthcareSolutionsPage: React.FC = () => {
  const solutions = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: 'AI-Powered Diagnostics',
      description: 'Advanced diagnostic tools using machine learning and computer vision'
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: 'Healthcare Analytics Platform',
      description: 'Comprehensive data analytics for patient care optimization'
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: 'Biotech AI Research',
      description: 'AI-driven research tools for drug discovery and development'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Healthcare Cybersecurity',
      description: 'Advanced security solutions for medical data protection'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Telemedicine Platform',
      description: 'Secure and scalable telemedicine infrastructure'
    }
  ];

  const features = [
    {
      icon: <CheckCircle className="w-5 h-5" />,
      title: 'HIPAA Compliant',
      description: 'Full compliance with healthcare data regulations'
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: 'End-to-End Encryption',
      description: 'Military-grade security for sensitive medical data'
    },
    {
      icon: <TrendingUp className="w-5 h-5" />,
      title: 'Scalable Infrastructure',
      description: 'Built to handle growing healthcare demands'
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: '24/7 Support',
      description: 'Round-the-clock technical support and monitoring'
    }
  ];

  return (
    <>
      <Head>
        <title>Healthcare & Biotech Solutions | Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered healthcare and biotech solutions. Advanced diagnostics, analytics, and telemedicine platforms for the future of healthcare." />
        <meta name="keywords" content="healthcare AI, biotech, medical diagnostics, telemedicine, healthcare analytics, medical cybersecurity" />
        <meta property="og:title" content="Healthcare & Biotech Solutions | Zion Tech Group" />
        <meta property="og:description" content="Revolutionary AI-powered healthcare and biotech solutions for the future of medicine." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/solutions/healthcare" />
        <link rel="canonical" href="https://ziontechgroup.com/solutions/healthcare" />
      </Head>

      <UltraFuturisticBackground />

      <div className="min-h-screen bg-black text-white relative z-10">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="mb-8">
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-red-500/20 to-pink-500/20 border border-red-500/30 rounded-full text-red-400 text-sm font-medium mb-6">
                <Heart className="w-4 h-4" />
                <span>Healthcare & Biotech Solutions</span>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-red-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Revolutionizing Healthcare with AI
            </h1>
            
            <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-4xl mx-auto leading-relaxed">
              Transform patient care with cutting-edge AI-powered diagnostics, advanced analytics, and secure telemedicine platforms. 
              Join the future of healthcare technology.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-red-500 to-pink-500 text-white font-semibold rounded-xl hover:from-red-600 hover:to-pink-600 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-red-500/25">
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
                Our Healthcare Solutions
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Comprehensive AI-powered solutions designed to transform healthcare delivery and improve patient outcomes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solutions.map((solution, index) => (
                <div
                  key={index}
                  className="group p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300 hover:border-red-500/30"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-red-500/20 to-pink-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    {solution.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-red-400 transition-colors duration-300">
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
                Built with healthcare professionals in mind, our solutions prioritize security, compliance, and patient care.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-red-500/20 to-pink-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
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
              Ready to Transform Healthcare?
            </h2>
            <p className="text-xl text-white/70 mb-8">
              Join the healthcare revolution with our AI-powered solutions. 
              Let's build a healthier future together.
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-red-500 to-pink-500 text-white font-semibold rounded-xl hover:from-red-600 hover:to-pink-600 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-red-500/25">
              Get Started Today
            </button>
          </div>
        </section>
      </div>
    </>
  );
};

export default HealthcareSolutionsPage;