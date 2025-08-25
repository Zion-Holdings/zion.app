
import React from 'react';
import HeroSection from "../components/HeroSection";
import { AdvancedSearch } from "../components/AdvancedSearch";
import { InteractiveServiceShowcase } from "../components/InteractiveServiceShowcase";
import { InteractivePortfolio } from "../components/InteractivePortfolio";
import { PerformanceMonitor } from "../components/PerformanceMonitor";
import { AIChatAssistant } from "../components/AIChatAssistant";
import { AnalyticsDashboard } from "../components/AnalyticsDashboard";
import { CollaborationPlatform } from "../components/CollaborationPlatform";
import { ProjectManagementDashboard } from "../components/ProjectManagementDashboard";
import { AdvancedNotificationSystem } from "../components/AdvancedNotificationSystem";
import { AICodeGenerator } from "../components/AICodeGenerator";
import { AdvancedDataVisualization } from "../components/AdvancedDataVisualization";
import { AdvancedBusinessIntelligence } from "../components/AdvancedBusinessIntelligence";
import { AdvancedCollaborationPlatform } from "../components/AdvancedCollaborationPlatform";
import { AdvancedSecurityDashboard } from "../components/AdvancedSecurityDashboard";
import { AdvancedPerformanceMonitor } from "../components/AdvancedPerformanceMonitor";
import { AdvancedAICodeGenerator } from "../components/AdvancedAICodeGenerator";
import { AdvancedAIProjectManagement } from "../components/AdvancedAIProjectManagement";
import { AdvancedAICRM } from "../components/AdvancedAICRM";
import { AdvancedAIERP } from "../components/AdvancedAIERP";
import { AdvancedAISupplyChain } from "../components/AdvancedAISupplyChain";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Advanced Search Section */}
      <section className="py-16 bg-gradient-to-br from-zion-blue-light/5 to-zion-purple-light/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zion-slate mb-4">
              Find Your Perfect Tech Solution
            </h2>
            <p className="text-lg text-zion-slate-light max-w-2xl mx-auto">
              Use our AI-powered search to discover the exact services and technologies you need
            </p>
          </div>
          <AdvancedSearch />
        </div>
      </section>

      {/* Interactive Service Showcase */}
      <InteractiveServiceShowcase />
      
      {/* Interactive Portfolio */}
      <InteractivePortfolio />
      
      {/* Features Section */}
      <section className="py-16 bg-white dark:bg-zion-slate">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-lg text-zion-slate-light max-w-3xl mx-auto">
              We combine cutting-edge technology with proven expertise to deliver exceptional results
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-effect p-6 rounded-lg text-center group hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white text-2xl font-bold">🚀</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-zion-cyan">Innovation First</h3>
              <p className="text-muted-foreground">
                Stay ahead with the latest technologies and innovative solutions that drive growth.
              </p>
            </div>
            
            <div className="glass-effect p-6 rounded-lg text-center group hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-zion-purple to-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white text-2xl font-bold">⚡</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-zion-purple">Lightning Fast</h3>
              <p className="text-muted-foreground">
                Optimized performance and rapid delivery ensure your projects launch on time.
              </p>
            </div>
            
            <div className="glass-effect p-6 rounded-lg text-center group hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-zion-emerald to-zion-gold rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white text-2xl font-bold">🛡️</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-zion-emerald">Enterprise Security</h3>
              <p className="text-muted-foreground">
                Bank-grade security and compliance standards protect your valuable assets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Revolutionary Features Section */}
      <section className="py-16 bg-gradient-to-br from-zion-purple/5 to-zion-emerald/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zion-slate mb-4">
              Revolutionary Features
            </h2>
            <p className="text-lg text-zion-slate-light max-w-3xl mx-auto">
              Experience the future of technology with our groundbreaking capabilities
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-zion-slate p-8 rounded-2xl border border-zion-slate-light hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-zion-purple to-zion-cyan rounded-2xl flex items-center justify-center mb-6">
                <span className="text-white text-3xl">🎥</span>
              </div>
              <h3 className="text-2xl font-bold text-zion-slate mb-4">Real-Time Collaboration</h3>
              <p className="text-zion-slate-light mb-6">
                Advanced video conferencing with screen sharing, AI-powered meeting insights, and seamless team collaboration tools.
              </p>
              <ul className="space-y-2 text-zion-slate-light">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-zion-purple rounded-full"></span>
                  HD video & audio quality
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-zion-purple rounded-full"></span>
                  Screen sharing & recording
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-zion-purple rounded-full"></span>
                  AI meeting transcription
                </li>
              </ul>
            </div>
            
            <div className="bg-white dark:bg-zion-slate p-8 rounded-2xl border border-zion-slate-light hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-zion-emerald to-zion-gold rounded-2xl flex items-center justify-center mb-6">
                <span className="text-white text-3xl">📋</span>
              </div>
              <h3 className="text-2xl font-bold text-zion-slate mb-4">Project Management</h3>
              <p className="text-zion-slate-light mb-6">
                Comprehensive project tracking with Gantt charts, task management, and real-time progress monitoring.
              </p>
              <ul className="space-y-2 text-zion-slate-light">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-zion-emerald rounded-full"></span>
                  Gantt chart visualization
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-zion-emerald rounded-full"></span>
                  Team collaboration tools
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-zion-emerald rounded-full"></span>
                  Budget & timeline tracking
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Futuristic AI Features Section */}
      <section className="py-16 bg-gradient-to-br from-zion-cyan/5 to-zion-gold/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zion-slate mb-4">
              Futuristic AI Capabilities
            </h2>
            <p className="text-lg text-zion-slate-light max-w-3xl mx-auto">
              Experience the power of artificial intelligence with our cutting-edge tools and features
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-zion-slate p-6 rounded-2xl border border-zion-slate-light hover:shadow-xl transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-br from-zion-purple to-zion-cyan rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white text-3xl">🤖</span>
              </div>
              <h3 className="text-xl font-bold text-zion-slate mb-4">AI Code Generator</h3>
              <p className="text-zion-slate-light mb-4">
                Generate production-ready code in multiple programming languages using natural language descriptions.
              </p>
              <ul className="space-y-2 text-sm text-zion-slate-light">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-zion-purple rounded-full"></span>
                  Multi-language support
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-zion-purple rounded-full"></span>
                  Smart code suggestions
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-zion-purple rounded-full"></span>
                  Code history & favorites
                </li>
              </ul>
            </div>
            
            <div className="bg-white dark:bg-zion-slate p-6 rounded-2xl border border-zion-slate-light hover:shadow-xl transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-br from-zion-emerald to-zion-gold rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white text-3xl">📊</span>
              </div>
              <h3 className="text-xl font-bold text-zion-slate mb-4">Advanced Data Visualization</h3>
              <p className="text-zion-slate-light mb-4">
                Create stunning interactive charts with real-time data, multiple chart types, and customizable themes.
              </p>
              <ul className="space-y-2 text-sm text-zion-slate-light">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-zion-emerald rounded-full"></span>
                  5+ chart types
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-zion-emerald rounded-full"></span>
                  Real-time updates
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-zion-emerald rounded-full"></span>
                  Export capabilities
                </li>
              </ul>
            </div>
            
            <div className="bg-white dark:bg-zion-slate p-6 rounded-2xl border border-zion-slate-light hover:shadow-xl transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white text-3xl">💬</span>
              </div>
              <h3 className="text-xl font-bold text-zion-slate mb-4">AI Chat Assistant</h3>
              <p className="text-zion-slate-light mb-4">
                Intelligent conversational AI that provides instant support, answers questions, and guides users.
              </p>
              <ul className="space-y-2 text-sm text-zion-slate-light">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-zion-cyan rounded-full"></span>
                  Voice recognition
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-zion-cyan rounded-full"></span>
                  Context awareness
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-zion-cyan rounded-full"></span>
                  Multi-language support
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Capabilities Grid */}
      <section className="py-16 bg-gradient-to-br from-zion-cyan/5 to-zion-purple/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zion-slate mb-4">
              Advanced Capabilities
            </h2>
            <p className="text-lg text-zion-slate-light max-w-3xl mx-auto">
              Discover the cutting-edge features that set us apart from the competition
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white dark:bg-zion-slate p-6 rounded-xl border border-zion-cyan transition-all duration-300 group">
              <div className="w-12 h-12 bg-zion-cyan/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-zion-cyan text-xl">🤖</span>
              </div>
              <h3 className="font-semibold text-zion-slate mb-2">AI-Powered</h3>
              <p className="text-sm text-zion-slate-light">Machine learning algorithms that adapt and improve over time</p>
            </div>
            
            <div className="bg-white dark:bg-zion-slate p-6 rounded-xl border border-zion-purple transition-all duration-300 group">
              <div className="w-12 h-12 bg-zion-purple/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-zion-purple text-xl">🔒</span>
              </div>
              <h3 className="font-semibold text-zion-slate mb-2">Enterprise Security</h3>
              <p className="text-sm text-zion-slate-light">Bank-grade security with SOC 2 compliance and encryption</p>
            </div>
            
            <div className="bg-white dark:bg-zion-slate p-6 rounded-xl border border-zion-emerald transition-all duration-300 group">
              <div className="w-12 h-12 bg-zion-emerald/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-zion-emerald text-xl">📊</span>
              </div>
              <h3 className="font-semibold text-zion-slate mb-2">Real-time Analytics</h3>
              <p className="text-sm text-zion-slate-light">Live insights and performance monitoring for data-driven decisions</p>
            </div>
            
            <div className="bg-white dark:bg-zion-slate p-6 rounded-xl border border-zion-gold transition-all duration-300 group">
              <div className="w-12 h-12 bg-zion-gold/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-zion-gold text-xl">🌐</span>
              </div>
              <h3 className="font-semibold text-zion-slate mb-2">Global Scale</h3>
              <p className="text-sm text-zion-slate-light">Multi-region deployment with 99.9% uptime guarantee</p>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise-Grade Collaboration & Intelligence */}
      <section className="py-16 bg-gradient-to-br from-zion-emerald/5 to-zion-blue/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zion-slate mb-4">
              Enterprise-Grade Collaboration & Intelligence
            </h2>
            <p className="text-lg text-zion-slate-light max-w-3xl mx-auto">
              Transform your business operations with our advanced collaboration tools and AI-powered business intelligence
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Advanced Business Intelligence */}
            <div className="bg-white dark:bg-zion-slate p-8 rounded-2xl border border-zion-slate-light hover:shadow-xl transition-all duration-300 group">
              <div className="w-20 h-20 bg-gradient-to-br from-zion-emerald to-zion-blue rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white text-4xl">🧠</span>
              </div>
              <h3 className="text-2xl font-bold text-zion-slate mb-4">Advanced Business Intelligence</h3>
              <p className="text-zion-slate-light mb-6">
                AI-powered insights, predictive analytics, and real-time business metrics that drive strategic decision-making.
              </p>
              <ul className="space-y-3 text-zion-slate-light mb-6">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-zion-emerald rounded-full"></span>
                  Predictive analytics with 90%+ accuracy
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-zion-emerald rounded-full"></span>
                  Real-time KPI monitoring & alerts
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-zion-emerald rounded-full"></span>
                  AI-generated business insights
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-zion-emerald rounded-full"></span>
                  Automated reporting & dashboards
                </li>
              </ul>
              <div className="flex items-center gap-4">
                <span className="px-4 py-2 bg-zion-emerald/10 text-zion-emerald rounded-full text-sm font-medium">
                  Enterprise Ready
                </span>
                <span className="px-4 py-2 bg-zion-blue/10 text-zion-blue rounded-full text-sm font-medium">
                  SOC 2 Compliant
                </span>
              </div>
            </div>

            {/* Advanced Collaboration Platform */}
            <div className="bg-white dark:bg-zion-slate p-8 rounded-2xl border border-zion-slate-light hover:shadow-xl transition-all duration-300 group">
              <div className="w-20 h-20 bg-gradient-to-br from-zion-blue to-zion-purple rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white text-4xl">🤝</span>
              </div>
              <h3 className="text-2xl font-bold text-zion-slate mb-4">Advanced Collaboration Platform</h3>
              <p className="text-zion-slate-light mb-6">
                Enterprise-grade video conferencing, document collaboration, and team management tools for seamless remote work.
              </p>
              <ul className="space-y-3 text-zion-slate-light mb-6">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-zion-blue rounded-full"></span>
                  4K video conferencing with AI noise reduction
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-zion-blue rounded-full"></span>
                  Real-time document collaboration & editing
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-zion-blue rounded-full"></span>
                  Advanced meeting controls & recording
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-zion-blue rounded-full"></span>
                  Enterprise security & compliance features
                </li>
              </ul>
              <div className="flex items-center gap-4">
                <span className="px-4 py-2 bg-zion-blue/10 text-zion-blue rounded-full text-sm font-medium">
                  HD Quality
                </span>
                <span className="px-4 py-2 bg-zion-purple/10 text-zion-purple rounded-full text-sm font-medium">
                  End-to-End Encrypted
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-zion-blue-dark to-zion-slate">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="text-white group">
              <div className="text-3xl md:text-4xl font-bold text-zion-cyan mb-2 group-hover:scale-110 transition-transform duration-300">500+</div>
              <div className="text-zion-slate-light">Projects Completed</div>
            </div>
            <div className="text-white group">
              <div className="text-3xl md:text-4xl font-bold text-zion-purple mb-2 group-hover:scale-110 transition-transform duration-300">50+</div>
              <div className="text-zion-slate-light">Expert Developers</div>
            </div>
            <div className="text-white group">
              <div className="text-3xl md:text-4xl font-bold text-zion-emerald mb-2 group-hover:scale-110 transition-transform duration-300">99.9%</div>
              <div className="text-zion-slate-light">Uptime Guarantee</div>
            </div>
            <div className="text-white group">
              <div className="text-3xl md:text-4xl font-bold text-zion-gold mb-2 group-hover:scale-110 transition-transform duration-300">24/7</div>
              <div className="text-zion-slate-light">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-16 bg-white dark:bg-zion-slate">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zion-slate mb-4">
              Our Technology Stack
            </h2>
            <p className="text-lg text-zion-slate-light max-w-3xl mx-auto">
              Built with the latest technologies and frameworks for optimal performance and scalability
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: 'React', icon: '⚛️', color: 'from-blue-400 to-cyan-400' },
              { name: 'Node.js', icon: '🟢', color: 'from-green-400 to-emerald-400' },
              { name: 'Python', icon: '🐍', color: 'from-yellow-400 to-orange-400' },
              { name: 'AWS', icon: '☁️', color: 'from-orange-400 to-red-400' },
              { name: 'Docker', icon: '🐳', color: 'from-blue-500 to-indigo-500' },
              { name: 'TensorFlow', icon: '🧠', color: 'from-purple-400 to-pink-400' }
            ].map((tech, index) => (
              <div key={index} className="text-center group">
                <div className={`w-16 h-16 bg-gradient-to-br ${tech.color} rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-2xl">{tech.icon}</span>
                </div>
                <h3 className="font-medium text-zion-slate">{tech.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-zion-cyan/10 to-zion-purple/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-zion-slate mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg text-zion-slate-light mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help transform your business with cutting-edge technology solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan-light hover:to-zion-purple-light text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 hover:shadow-lg hover:shadow-zion-cyan/30 hover:-translate-y-1">
              Get Free Consultation
            </button>
            <button className="border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-3 rounded-lg font-medium transition-all duration-200">
              View Our Portfolio
            </button>
          </div>
        </div>
      </section>

                     {/* Floating Tools - Complete Futuristic Suite */}
               <PerformanceMonitor />
               <AIChatAssistant />
               <AnalyticsDashboard />
               <CollaborationPlatform />
               <ProjectManagementDashboard />
               <AdvancedNotificationSystem />
               <AICodeGenerator />
               <AdvancedDataVisualization />
               <AdvancedBusinessIntelligence />
               <AdvancedCollaborationPlatform />
               <AdvancedSecurityDashboard />
               <AdvancedPerformanceMonitor />
                               <AdvancedAICodeGenerator />
                <AdvancedAIProjectManagement />
                <AdvancedAICRM />
                <AdvancedAIERP />
                <AdvancedAISupplyChain />
    </div>
  );
}
