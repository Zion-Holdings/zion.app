import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Server, Shield, Cloud, Database, Code, Users, Globe, ArrowRight, Zap } from 'lucide-react';

export default function ITServices() {
  return (
    <>
      <Helmet>
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including infrastructure, cybersecurity, cloud solutions, and digital transformation. Zion Tech Group delivers enterprise-grade technology solutions." />
        <meta name="keywords" content="IT services, infrastructure, cybersecurity, cloud solutions, digital transformation, Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/it-services" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark">
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              IT <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-light max-w-4xl mx-auto leading-relaxed">
              Comprehensive technology solutions that drive business growth and digital transformation. 
              From infrastructure to cybersecurity, we've got you covered.
            </p>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Our IT Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-zion-blue-light/20 rounded-xl p-6 border border-zion-purple/30 hover:border-zion-cyan/50 transition-all duration-300 hover:transform hover:scale-105">
                <Server className="w-12 h-12 text-zion-cyan mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Infrastructure Management</h3>
                <p className="text-zion-slate-light mb-4">
                  Complete infrastructure setup, monitoring, and maintenance for optimal performance.
                </p>
                <ul className="text-zion-slate-light text-sm mb-4 space-y-1">
                  <li>• Network Design & Implementation</li>
                  <li>• Server Management</li>
                  <li>• Data Center Operations</li>
                </ul>
                <Link to="/services/infrastructure" className="text-zion-cyan hover:text-zion-cyan-light flex items-center group">
                  Learn More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              <div className="bg-zion-blue-light/20 rounded-xl p-6 border border-zion-purple/30 hover:border-zion-cyan/50 transition-all duration-300 hover:transform hover:scale-105">
                <Shield className="w-12 h-12 text-zion-cyan mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Cybersecurity</h3>
                <p className="text-zion-slate-light mb-4">
                  Comprehensive security solutions to protect your business from cyber threats.
                </p>
                <ul className="text-zion-slate-light text-sm mb-4 space-y-1">
                  <li>• Security Audits & Assessments</li>
                  <li>• Threat Detection & Response</li>
                  <li>• Compliance Management</li>
                </ul>
                <Link to="/services/cybersecurity" className="text-zion-cyan hover:text-zion-cyan-light flex items-center group">
                  Learn More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              <div className="bg-zion-blue-light/20 rounded-xl p-6 border border-zion-purple/30 hover:border-zion-cyan/50 transition-all duration-300 hover:transform hover:scale-105">
                <Cloud className="w-12 h-12 text-zion-cyan mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Cloud Solutions</h3>
                <p className="text-zion-slate-light mb-4">
                  Cloud migration, optimization, and management for scalable business operations.
                </p>
                <ul className="text-zion-slate-light text-sm mb-4 space-y-1">
                  <li>• Cloud Migration Strategy</li>
                  <li>• Multi-Cloud Management</li>
                  <li>• Cost Optimization</li>
                </ul>
                <Link to="/services/cloud" className="text-zion-cyan hover:text-zion-cyan-light flex items-center group">
                  Learn More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              <div className="bg-zion-blue-light/20 rounded-xl p-6 border border-zion-purple/30 hover:border-zion-cyan/50 transition-all duration-300 hover:transform hover:scale-105">
                <Database className="w-12 h-12 text-zion-cyan mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Data Management</h3>
                <p className="text-zion-slate-light mb-4">
                  Data strategy, governance, and analytics to unlock business insights.
                </p>
                <ul className="text-zion-slate-light text-sm mb-4 space-y-1">
                  <li>• Data Strategy & Architecture</li>
                  <li>• Business Intelligence</li>
                  <li>• Data Governance</li>
                </ul>
                <Link to="/services/data-management" className="text-zion-cyan hover:text-zion-cyan-light flex items-center group">
                  Learn More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              <div className="bg-zion-blue-light/20 rounded-xl p-6 border border-zion-purple/30 hover:border-zion-cyan/50 transition-all duration-300 hover:transform hover:scale-105">
                <Code className="w-12 h-12 text-zion-cyan mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Software Development</h3>
                <p className="text-zion-slate-light mb-4">
                  Custom software solutions tailored to your business requirements.
                </p>
                <ul className="text-zion-slate-light text-sm mb-4 space-y-1">
                  <li>• Custom Applications</li>
                  <li>• API Development</li>
                  <li>• System Integration</li>
                </ul>
                <Link to="/services/software-development" className="text-zion-cyan hover:text-zion-cyan-light flex items-center group">
                  Learn More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              <div className="bg-zion-blue-light/20 rounded-xl p-6 border border-zion-purple/30 hover:border-zion-cyan/50 transition-all duration-300 hover:transform hover:scale-105">
                <Users className="w-12 h-12 text-zion-cyan mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">IT Consulting</h3>
                <p className="text-zion-slate-light mb-4">
                  Strategic technology consulting to align IT with business objectives.
                </p>
                <ul className="text-zion-slate-light text-sm mb-4 space-y-1">
                  <li>• Technology Strategy</li>
                  <li>• Digital Transformation</li>
                  <li>• Vendor Management</li>
                </ul>
                <Link to="/services/it-consulting" className="text-zion-cyan hover:text-zion-cyan-light flex items-center group">
                  Learn More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Why Choose Zion Tech Group?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-zion-cyan/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-zion-cyan" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Global Expertise</h3>
                <p className="text-zion-slate-light">
                  Access to world-class IT professionals from around the globe.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-zion-cyan/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-zion-cyan" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Proven Track Record</h3>
                <p className="text-zion-slate-light">
                  Successfully delivered IT solutions to businesses of all sizes.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-zion-cyan/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-zion-cyan" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Innovation Focus</h3>
                <p className="text-zion-slate-light">
                  Cutting-edge solutions using the latest technologies and best practices.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-zion-cyan/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-zion-cyan" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">24/7 Support</h3>
                <p className="text-zion-slate-light">
                  Round-the-clock support and monitoring for your IT infrastructure.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto text-center">
            <div className="bg-zion-blue-light/20 rounded-2xl p-12 border border-zion-purple/30 max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your IT Infrastructure?
              </h2>
              <p className="text-lg text-zion-slate-light mb-8">
                Let our IT experts help you build a robust, scalable, and secure technology foundation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/request-quote"
                  className="bg-zion-cyan hover:bg-zion-cyan-light text-zion-blue-dark font-bold py-3 px-8 rounded-lg transition-colors"
                >
                  Get IT Quote
                </Link>
                <Link
                  to="/contact"
                  className="bg-transparent hover:bg-zion-purple/20 text-zion-cyan border-2 border-zion-cyan font-bold py-3 px-8 rounded-lg transition-colors"
                >
                  Schedule Consultation
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}