import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Brain, Zap, Shield, Globe, Users, Award, ArrowRight } from 'lucide-react';

export default function AISolutions() {
  return (
    <>
      <Helmet>
        <title>AI Solutions - Zion Tech Group</title>
        <meta name="description" content="Discover cutting-edge AI solutions for your business. From machine learning to natural language processing, Zion Tech Group offers comprehensive AI services." />
        <meta name="keywords" content="AI solutions, artificial intelligence, machine learning, NLP, computer vision, Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-solutions" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark">
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Solutions</span>
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-light max-w-4xl mx-auto leading-relaxed">
              Transform your business with cutting-edge artificial intelligence solutions. 
              From machine learning to natural language processing, we deliver the future of technology.
            </p>
          </div>
        </section>

        {/* AI Services Grid */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Our AI Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-zion-blue-light/20 rounded-xl p-6 border border-zion-purple/30 hover:border-zion-cyan/50 transition-all duration-300 hover:transform hover:scale-105">
                <Brain className="w-12 h-12 text-zion-cyan mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Machine Learning</h3>
                <p className="text-zion-slate-light mb-4">
                  Custom ML models for predictive analytics, recommendation systems, and data insights.
                </p>
                <Link to="/services/ml" className="text-zion-cyan hover:text-zion-cyan-light flex items-center group">
                  Learn More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              <div className="bg-zion-blue-light/20 rounded-xl p-6 border border-zion-purple/30 hover:border-zion-cyan/50 transition-all duration-300 hover:transform hover:scale-105">
                <Zap className="w-12 h-12 text-zion-cyan mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Natural Language Processing</h3>
                <p className="text-zion-slate-light mb-4">
                  Advanced NLP solutions for chatbots, sentiment analysis, and text processing.
                </p>
                <Link to="/services/nlp" className="text-zion-cyan hover:text-zion-cyan-light flex items-center group">
                  Learn More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              <div className="bg-zion-blue-light/20 rounded-xl p-6 border border-zion-purple/30 hover:border-zion-cyan/50 transition-all duration-300 hover:transform hover:scale-105">
                <Globe className="w-12 h-12 text-zion-cyan mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Computer Vision</h3>
                <p className="text-zion-slate-light mb-4">
                  Image recognition, object detection, and visual AI for various industries.
                </p>
                <Link to="/services/computer-vision" className="text-zion-cyan hover:text-zion-cyan-light flex items-center group">
                  Learn More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              <div className="bg-zion-blue-light/20 rounded-xl p-6 border border-zion-purple/30 hover:border-zion-cyan/50 transition-all duration-300 hover:transform hover:scale-105">
                <Shield className="w-12 h-12 text-zion-cyan mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">AI Security</h3>
                <p className="text-zion-slate-light mb-4">
                  Intelligent threat detection and cybersecurity powered by artificial intelligence.
                </p>
                <Link to="/services/ai-security" className="text-zion-cyan hover:text-zion-cyan-light flex items-center group">
                  Learn More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              <div className="bg-zion-blue-light/20 rounded-xl p-6 border border-zion-purple/30 hover:border-zion-cyan/50 transition-all duration-300 hover:transform hover:scale-105">
                <Users className="w-12 h-12 text-zion-cyan mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">AI Consulting</h3>
                <p className="text-zion-slate-light mb-4">
                  Strategic guidance for AI implementation and digital transformation.
                </p>
                <Link to="/services/ai-consulting" className="text-zion-cyan hover:text-zion-cyan-light flex items-center group">
                  Learn More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              <div className="bg-zion-blue-light/20 rounded-xl p-6 border border-zion-purple/30 hover:border-zion-cyan/50 transition-all duration-300 hover:transform hover:scale-105">
                <Award className="w-12 h-12 text-zion-cyan mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Custom AI Development</h3>
                <p className="text-zion-slate-light mb-4">
                  Tailored AI solutions designed specifically for your business needs.
                </p>
                <Link to="/services/custom-ai" className="text-zion-cyan hover:text-zion-cyan-light flex items-center group">
                  Learn More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
              Let's discuss how AI can transform your business. Contact our experts today.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-xl hover:from-zion-cyan-light hover:to-zion-purple-light transition-all duration-300 transform hover:scale-105"
            >
              Get Started <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}