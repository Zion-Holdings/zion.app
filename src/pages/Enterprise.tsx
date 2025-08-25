import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Building2, Users, Shield, Globe, Zap, Award, ArrowRight, CheckCircle } from 'lucide-react';

export default function Enterprise() {
  return (
    <>
      <Helmet>
        <title>Enterprise Solutions - Zion Tech Group</title>
        <meta name="description" content="Enterprise-grade technology solutions for large organizations. Scalable, secure, and innovative solutions that drive business transformation." />
        <meta name="keywords" content="enterprise solutions, business transformation, scalable technology, Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/enterprise" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark">
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Enterprise</span> Solutions
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-light max-w-4xl mx-auto leading-relaxed">
              Enterprise-grade technology solutions designed for scale, security, and innovation. 
              Transform your organization with Zion Tech Group's comprehensive enterprise offerings.
            </p>
          </div>
        </section>

        {/* Enterprise Features */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Enterprise Features</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-zion-blue-light/20 rounded-xl p-6 border border-zion-purple/30 hover:border-zion-cyan/50 transition-all duration-300 hover:transform hover:scale-105">
                <Building2 className="w-12 h-12 text-zion-cyan mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Scalable Architecture</h3>
                <p className="text-zion-slate-light mb-4">
                  Built to grow with your business, handling increased load and complexity seamlessly.
                </p>
                <ul className="text-zion-slate-light text-sm space-y-1">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-zion-cyan mr-2" />
                    Auto-scaling capabilities
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-zion-cyan mr-2" />
                    Load balancing
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-zion-cyan mr-2" />
                    High availability
                  </li>
                </ul>
              </div>

              <div className="bg-zion-blue-light/20 rounded-xl p-6 border border-zion-purple/30 hover:border-zion-cyan/50 transition-all duration-300 hover:transform hover:scale-105">
                <Shield className="w-12 h-12 text-zion-cyan mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Enterprise Security</h3>
                <p className="text-zion-slate-light mb-4">
                  Multi-layered security with compliance standards and advanced threat protection.
                </p>
                <ul className="text-zion-slate-light text-sm space-y-1">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-zion-cyan mr-2" />
                    SOC 2 Type II compliance
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-zion-cyan mr-2" />
                    End-to-end encryption
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-zion-cyan mr-2" />
                    24/7 security monitoring
                  </li>
                </ul>
              </div>

              <div className="bg-zion-blue-light/20 rounded-xl p-6 border border-zion-purple/30 hover:border-zion-cyan/50 transition-all duration-300 hover:transform hover:scale-105">
                <Globe className="w-12 h-12 text-zion-cyan mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Global Deployment</h3>
                <p className="text-zion-slate-light mb-4">
                  Worldwide infrastructure ensuring low latency and high performance globally.
                </p>
                <ul className="text-zion-slate-light text-sm space-y-1">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-zion-cyan mr-2" />
                    Multi-region deployment
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-zion-cyan mr-2" />
                    CDN integration
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-zion-cyan mr-2" />
                    Local compliance
                  </li>
                </ul>
              </div>

              <div className="bg-zion-blue-light/20 rounded-xl p-6 border border-zion-purple/30 hover:border-zion-cyan/50 transition-all duration-300 hover:transform hover:scale-105">
                <Users className="w-12 h-12 text-zion-cyan mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Dedicated Support</h3>
                <p className="text-zion-slate-light mb-4">
                  Premium support with dedicated account managers and priority response times.
                </p>
                <ul className="text-zion-slate-light text-sm space-y-1">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-zion-cyan mr-2" />
                    Dedicated account manager
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-zion-cyan mr-2" />
                    1-hour response SLA
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-zion-cyan mr-2" />
                    24/7 phone support
                  </li>
                </ul>
              </div>

              <div className="bg-zion-blue-light/20 rounded-xl p-6 border border-zion-purple/30 hover:border-zion-cyan/50 transition-all duration-300 hover:transform hover:scale-105">
                <Zap className="w-12 h-12 text-zion-cyan mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Custom Integration</h3>
                <p className="text-zion-slate-light mb-4">
                  Seamless integration with your existing enterprise systems and workflows.
                </p>
                <ul className="text-zion-slate-light text-sm space-y-1">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-zion-cyan mr-2" />
                    API-first architecture
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-zion-cyan mr-2" />
                    SSO integration
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-zion-cyan mr-2" />
                    Custom workflows
                  </li>
                </ul>
              </div>

              <div className="bg-zion-blue-light/20 rounded-xl p-6 border border-zion-purple/30 hover:border-zion-cyan/50 transition-all duration-300 hover:transform hover:scale-105">
                <Award className="w-12 h-12 text-zion-cyan mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Performance Guarantee</h3>
                <p className="text-zion-slate-light mb-4">
                  SLA-backed performance guarantees ensuring your business runs smoothly.
                </p>
                <ul className="text-zion-slate-light text-sm space-y-1">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-zion-cyan mr-2" />
                    99.9% uptime SLA
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-zion-cyan mr-2" />
                    Performance monitoring
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-zion-cyan mr-2" />
                    Compensation for downtime
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Enterprise Solutions */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Enterprise Solutions</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-zion-blue-light/20 rounded-xl p-8 border border-zion-purple/30">
                <h3 className="text-2xl font-bold text-white mb-4">Digital Transformation</h3>
                <p className="text-zion-slate-light mb-6">
                  Comprehensive digital transformation services to modernize your business operations, 
                  improve efficiency, and drive innovation across all departments.
                </p>
                <Link to="/enterprise/digital-transformation" className="text-zion-cyan hover:text-zion-cyan-light flex items-center group">
                  Learn More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              <div className="bg-zion-blue-light/20 rounded-xl p-8 border border-zion-purple/30">
                <h3 className="text-2xl font-bold text-white mb-4">Cloud Migration</h3>
                <p className="text-zion-slate-light mb-6">
                  Strategic cloud migration services to move your infrastructure to the cloud, 
                  reducing costs and improving scalability while maintaining security.
                </p>
                <Link to="/enterprise/cloud-migration" className="text-zion-cyan hover:text-zion-cyan-light flex items-center group">
                  Learn More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              <div className="bg-zion-blue-light/20 rounded-xl p-8 border border-zion-purple/30">
                <h3 className="text-2xl font-bold text-white mb-4">Data Analytics</h3>
                <p className="text-zion-slate-light mb-6">
                  Advanced data analytics and business intelligence solutions to turn your data 
                  into actionable insights and drive data-driven decision making.
                </p>
                <Link to="/enterprise/data-analytics" className="text-zion-cyan hover:text-zion-cyan-light flex items-center group">
                  Learn More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              <div className="bg-zion-blue-light/20 rounded-xl p-8 border border-zion-purple/30">
                <h3 className="text-2xl font-bold text-white mb-4">Cybersecurity</h3>
                <p className="text-zion-slate-light mb-6">
                  Enterprise-grade cybersecurity solutions including threat detection, 
                  incident response, and compliance management to protect your business.
                </p>
                <Link to="/enterprise/cybersecurity" className="text-zion-cyan hover:text-zion-cyan-light flex items-center group">
                  Learn More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
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
                Ready to Scale Your Enterprise?
              </h2>
              <p className="text-lg text-zion-slate-light mb-8">
                Let our enterprise experts help you build a technology foundation that grows with your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/enterprise/contact"
                  className="bg-zion-cyan hover:bg-zion-cyan-light text-zion-blue-dark font-bold py-3 px-8 rounded-lg transition-colors"
                >
                  Contact Enterprise Sales
                </Link>
                <Link
                  to="/enterprise/demo"
                  className="bg-transparent hover:bg-zion-purple/20 text-zion-cyan border-2 border-zion-cyan font-bold py-3 px-8 rounded-lg transition-colors"
                >
                  Request Demo
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}