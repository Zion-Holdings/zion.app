import React from 'react';
import { Link } from 'react-router-dom';
import { Code, Brain, Zap, Users, Target, Shield, Cpu, Globe, Rocket, Star, ArrowRight, CheckCircle, Play, BookOpen, Database, Cloud, Lock, BarChart3, Settings, Monitor, GitBranch } from 'lucide-react';

export default function AIAutonomousCodeReview() {
  const features = [
    {
      icon: Code,
      title: 'Intelligent Code Analysis',
      description: 'AI-powered code review that identifies bugs, security vulnerabilities, and optimization opportunities'
    },
    {
      icon: Brain,
      title: 'Learning & Adaptation',
      description: 'Continuously learns from your codebase to provide increasingly accurate and relevant feedback'
    },
    {
      icon: Zap,
      title: 'Real-time Review',
      description: 'Instant feedback as you code with suggestions for improvements and best practices'
    },
    {
      icon: Shield,
      title: 'Security Scanning',
      description: 'Automated detection of security vulnerabilities, dependency issues, and compliance violations'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Streamlined code review process with AI assistance for faster, more thorough reviews'
    },
    {
      icon: Cpu,
      title: 'Multi-language Support',
      description: 'Support for all major programming languages and frameworks'
    }
  ];

  const capabilities = [
    {
      title: 'Code Quality Analysis',
      description: 'Automated assessment of code quality, complexity, and maintainability',
      icon: Code
    },
    {
      title: 'Security Vulnerability Detection',
      description: 'Identify security issues, SQL injection, XSS, and other common vulnerabilities',
      icon: Shield
    },
    {
      title: 'Performance Optimization',
      description: 'Suggestions for improving code performance and efficiency',
      icon: Zap
    },
    {
      title: 'Best Practices Enforcement',
      description: 'Ensure adherence to coding standards and industry best practices',
      icon: GitBranch
    }
  ];

  const benefits = [
    'Reduce code review time by 70%',
    'Improve code quality by 40%',
    'Detect security issues early',
    'Ensure consistent coding standards',
    'Accelerate development cycles',
    'Reduce production bugs by 60%'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <Code className="w-8 h-8 text-cyan-400" />
              <span className="text-cyan-400 font-semibold">AI Autonomous Code Review</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Code Review
              <br />
              <span className="text-white">Reimagined</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your code review process with AI that understands your codebase, 
              identifies issues instantly, and helps your team write better code.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105">
                <Play className="w-5 h-5 inline mr-2" />
                Try Demo
              </button>
              <button className="px-8 py-4 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-200">
                <BookOpen className="w-5 h-5 inline mr-2" />
                Learn More
              </button>
            </div>
          </div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Advanced Code Review Features
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              AI-powered insights that transform how you review and improve code
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Comprehensive Code Analysis
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              From security to performance, our AI covers every aspect of code quality
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {capabilities.map((capability, index) => {
              const Icon = capability.icon;
              return (
                <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3">{capability.title}</h3>
                      <p className="text-gray-400">{capability.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose AI Code Review?
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Transform your development process with measurable improvements
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              {benefits.slice(0, 3).map((benefit, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <CheckCircle className="w-6 h-6 text-cyan-400 flex-shrink-0" />
                  <span className="text-lg text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
            <div className="space-y-6">
              {benefits.slice(3).map((benefit, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <CheckCircle className="w-6 h-6 text-cyan-400 flex-shrink-0" />
                  <span className="text-lg text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Revolutionize Code Review?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Join development teams that are already writing better code with AI assistance
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105 inline-flex items-center"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/case-studies"
              className="px-8 py-4 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-200"
            >
              View Developer Success Stories
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}