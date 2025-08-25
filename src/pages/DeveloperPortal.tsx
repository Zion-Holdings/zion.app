import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Code, BookOpen, Zap, Shield, Users, Globe, ArrowRight, Terminal, Database, FileCode, CheckCircle } from 'lucide-react';

export default function DeveloperPortal() {
  return (
    <>
      <Helmet>
        <title>Developer Portal - Zion Tech Group</title>
        <meta name="description" content="Access Zion Tech Group's developer resources, API documentation, SDKs, and tools to build powerful applications and integrations." />
        <meta name="keywords" content="developer portal, API documentation, SDKs, developer tools, Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/developers" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark">
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Developer</span> Portal
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-light max-w-4xl mx-auto leading-relaxed">
              Build the future with Zion Tech Group's comprehensive developer resources. 
              Access APIs, SDKs, documentation, and tools to create powerful applications.
            </p>
          </div>
        </section>

        {/* Quick Start */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Quick Start</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-zion-blue-light/20 rounded-xl p-6 border border-zion-purple/30 hover:border-zion-cyan/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="bg-zion-cyan/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Terminal className="w-8 h-8 text-zion-cyan" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 text-center">1. Get API Keys</h3>
                <p className="text-zion-slate-light text-center mb-4">
                  Sign up and get your API keys to start building with Zion's platform.
                </p>
                <Link to="/developers/api-keys" className="text-zion-cyan hover:text-zion-cyan-light flex items-center justify-center group">
                  Get Started <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              <div className="bg-zion-blue-light/20 rounded-xl p-6 border border-zion-purple/30 hover:border-zion-cyan/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="bg-zion-cyan/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-zion-cyan" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 text-center">2. Read Documentation</h3>
                <p className="text-zion-slate-light text-center mb-4">
                  Explore our comprehensive API documentation and integration guides.
                </p>
                <Link to="/developers/docs" className="text-zion-cyan hover:text-zion-cyan-light flex items-center justify-center group">
                  View Docs <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              <div className="bg-zion-blue-light/20 rounded-xl p-6 border border-zion-purple/30 hover:border-zion-cyan/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="bg-zion-cyan/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Code className="w-8 h-8 text-zion-cyan" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 text-center">3. Start Building</h3>
                <p className="text-zion-slate-light text-center mb-4">
                  Use our SDKs and tools to build your first integration or application.
                </p>
                <Link to="/developers/sdks" className="text-zion-cyan hover:text-zion-cyan-light flex items-center justify-center group">
                  Explore SDKs <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Developer Resources */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Developer Resources</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-zion-blue-light/20 rounded-xl p-6 border border-zion-purple/30 hover:border-zion-cyan/50 transition-all duration-300 hover:transform hover:scale-105">
                <FileCode className="w-12 h-12 text-zion-cyan mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">API Reference</h3>
                <p className="text-zion-slate-light mb-4">
                  Complete API documentation with examples, endpoints, and response formats.
                </p>
                <Link to="/developers/api-reference" className="text-zion-cyan hover:text-zion-cyan-light flex items-center group">
                  View API Docs <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              <div className="bg-zion-blue-light/20 rounded-xl p-6 border border-zion-purple/30 hover:border-zion-cyan/50 transition-all duration-300 hover:transform hover:scale-105">
                <Code className="w-12 h-12 text-zion-cyan mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">SDKs & Libraries</h3>
                <p className="text-zion-slate-light mb-4">
                  Official SDKs for popular programming languages and frameworks.
                </p>
                <Link to="/developers/sdks" className="text-zion-cyan hover:text-zion-cyan-light flex items-center group">
                  Browse SDKs <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              <div className="bg-zion-blue-light/20 rounded-xl p-6 border border-zion-purple/30 hover:border-zion-cyan/50 transition-all duration-300 hover:transform hover:scale-105">
                <BookOpen className="w-12 h-12 text-zion-cyan mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Tutorials</h3>
                <p className="text-zion-slate-light mb-4">
                  Step-by-step guides and tutorials to help you get started quickly.
                </p>
                <Link to="/developers/tutorials" className="text-zion-cyan hover:text-zion-cyan-light flex items-center group">
                  Start Learning <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              <div className="bg-zion-blue-light/20 rounded-xl p-6 border border-zion-purple/30 hover:border-zion-cyan/50 transition-all duration-300 hover:transform hover:scale-105">
                <Database className="w-12 h-12 text-zion-cyan mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Code Samples</h3>
                <p className="text-zion-slate-light mb-4">
                  Ready-to-use code examples and sample applications.
                </p>
                <Link to="/developers/code-samples" className="text-zion-cyan hover:text-zion-cyan-light flex items-center group">
                  View Samples <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              <div className="bg-zion-blue-light/20 rounded-xl p-6 border border-zion-purple/30 hover:border-zion-cyan/50 transition-all duration-300 hover:transform hover:scale-105">
                <Shield className="w-12 h-12 text-zion-cyan mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Authentication</h3>
                <p className="text-zion-slate-light mb-4">
                  Learn about our authentication methods and security best practices.
                </p>
                <Link to="/developers/auth" className="text-zion-cyan hover:text-zion-cyan-light flex items-center group">
                  Security Guide <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              <div className="bg-zion-blue-light/20 rounded-xl p-6 border border-zion-purple/30 hover:border-zion-cyan/50 transition-all duration-300 hover:transform hover:scale-105">
                <Users className="w-12 h-12 text-zion-cyan mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Community</h3>
                <p className="text-zion-slate-light mb-4">
                  Connect with other developers and get help from our community.
                </p>
                <Link to="/developers/community" className="text-zion-cyan hover:text-zion-cyan-light flex items-center group">
                  Join Community <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* API Categories */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">API Categories</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-zion-blue-light/20 rounded-xl p-8 border border-zion-purple/30">
                <h3 className="text-2xl font-bold text-white mb-4">Marketplace APIs</h3>
                <p className="text-zion-slate-light mb-6">
                  Access our marketplace data, search products and services, manage listings, and process transactions.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-zion-slate-light">
                    <CheckCircle className="w-4 h-4 text-zion-cyan mr-2" />
                    Product & Service Management
                  </div>
                  <div className="flex items-center text-zion-slate-light">
                    <CheckCircle className="w-4 h-4 text-zion-cyan mr-2" />
                    Search & Discovery
                  </div>
                  <div className="flex items-center text-zion-slate-light">
                    <CheckCircle className="w-4 h-4 text-zion-cyan mr-2" />
                    Order Processing
                  </div>
                </div>
                <Link to="/developers/marketplace-apis" className="text-zion-cyan hover:text-zion-cyan-light flex items-center group">
                  Explore Marketplace APIs <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              <div className="bg-zion-blue-light/20 rounded-xl p-8 border border-zion-purple/30">
                <h3 className="text-2xl font-bold text-white mb-4">Talent APIs</h3>
                <p className="text-zion-slate-light mb-6">
                  Integrate with our talent platform to find, hire, and manage tech professionals.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-zion-slate-light">
                    <CheckCircle className="w-4 h-4 text-zion-cyan mr-2" />
                    Talent Search & Matching
                  </div>
                  <div className="flex items-center text-zion-slate-light">
                    <CheckCircle className="w-4 h-4 text-zion-cyan mr-2" />
                    Profile Management
                  </div>
                  <div className="flex items-center text-zion-slate-light">
                    <CheckCircle className="w-4 h-4 text-zion-cyan mr-2" />
                    Hiring Workflows
                  </div>
                </div>
                <Link to="/developers/talent-apis" className="text-zion-cyan hover:text-zion-cyan-light flex items-center group">
                  Explore Talent APIs <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto text-center">
            <div className="bg-zion-blue-light/20 rounded-2xl p-12 border border-zion-purple/30 max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Build Something Amazing?
              </h2>
              <p className="text-lg text-zion-slate-light mb-8">
                Join thousands of developers building the future with Zion Tech Group's platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/developers/signup"
                  className="bg-zion-cyan hover:bg-zion-cyan-light text-zion-blue-dark font-bold py-3 px-8 rounded-lg transition-colors"
                >
                  Get Developer Account
                </Link>
                <Link
                  to="/developers/contact"
                  className="bg-transparent hover:bg-zion-purple/20 text-zion-cyan border-2 border-zion-cyan font-bold py-3 px-8 rounded-lg transition-colors"
                >
                  Contact Developer Support
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}