import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, Zap, Shield, TrendingUp, Users, BarChart3, Target } from 'lucide-react';

const AIAutonomousBusinessPlatform: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI Autonomous Business Platform
          </h1>
          <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
            Transform your business operations with our cutting-edge AI platform that autonomously manages, 
            optimizes, and scales your business processes in real-time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/request-quote"
              className="inline-flex items-center px-8 py-4 bg-zion-cyan text-white font-semibold rounded-lg hover:bg-zion-cyan-light transition-colors"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 border-2 border-zion-cyan text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan hover:text-white transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
            Platform Capabilities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <Brain className="h-12 w-12 text-zion-cyan mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Autonomous Decision Making</h3>
              <p className="text-zion-slate-light">
                AI-powered decision engine that analyzes data and makes optimal business decisions 
                without human intervention.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <Zap className="h-12 w-12 text-zion-cyan mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Real-time Optimization</h3>
              <p className="text-zion-slate-light">
                Continuously monitor and optimize business processes, resources, and performance 
                in real-time for maximum efficiency.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <Shield className="h-12 w-12 text-zion-cyan mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Intelligent Security</h3>
              <p className="text-zion-slate-light">
                Advanced threat detection and prevention systems that protect your business 
                operations and data automatically.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <TrendingUp className="h-12 w-12 text-zion-cyan mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Predictive Analytics</h3>
              <p className="text-zion-slate-light">
                Forecast market trends, customer behavior, and business opportunities 
                with machine learning algorithms.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <Users className="h-12 w-12 text-zion-cyan mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Team Management</h3>
              <p className="text-zion-slate-light">
                Automatically assign tasks, manage workflows, and optimize team performance 
                based on skills and availability.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <BarChart3 className="h-12 w-12 text-zion-cyan mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Performance Insights</h3>
              <p className="text-zion-slate-light">
                Comprehensive dashboards and reports that provide deep insights into 
                business performance and areas for improvement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
            Business Applications
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Enterprise Operations</h3>
              <ul className="space-y-4 text-zion-slate-light">
                <li className="flex items-start">
                  <Target className="h-5 w-5 text-zion-cyan mr-3 mt-0.5 flex-shrink-0" />
                  <span>Automated resource allocation and capacity planning</span>
                </li>
                <li className="flex items-start">
                  <Target className="h-5 w-5 text-zion-cyan mr-3 mt-0.5 flex-shrink-0" />
                  <span>Intelligent supply chain optimization</span>
                </li>
                <li className="flex items-start">
                  <Target className="h-5 w-5 text-zion-cyan mr-3 mt-0.5 flex-shrink-0" />
                  <span>Automated quality control and compliance monitoring</span>
                </li>
                <li className="flex items-start">
                  <Target className="h-5 w-5 text-zion-cyan mr-3 mt-0.5 flex-shrink-0" />
                  <span>Predictive maintenance scheduling</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Customer Experience</h3>
              <ul className="space-y-4 text-zion-slate-light">
                <li className="flex items-start">
                  <Target className="h-5 w-5 text-zion-cyan mr-3 mt-0.5 flex-shrink-0" />
                  <span>Personalized customer journey optimization</span>
                </li>
                <li className="flex items-start">
                  <Target className="h-5 w-5 text-zion-cyan mr-3 mt-0.5 flex-shrink-0" />
                  <span>Intelligent customer support automation</span>
                </li>
                <li className="flex items-start">
                  <Target className="h-5 w-5 text-zion-cyan mr-3 mt-0.5 flex-shrink-0" />
                  <span>Dynamic pricing and offer optimization</span>
                </li>
                <li className="flex items-start">
                  <Target className="h-5 w-5 text-zion-cyan mr-3 mt-0.5 flex-shrink-0" />
                  <span>Customer churn prediction and prevention</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-zion-slate-light mb-8">
            Join the future of autonomous business operations with our AI platform.
          </p>
          <Link
            to="/request-quote"
            className="inline-flex items-center px-8 py-4 bg-zion-cyan text-white font-semibold rounded-lg hover:bg-zion-cyan-light transition-colors text-lg"
          >
            Start Your Transformation
            <ArrowRight className="ml-2 h-6 w-6" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AIAutonomousBusinessPlatform;