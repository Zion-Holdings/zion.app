import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function AdvancedITInfrastructureServicesPage() {
  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <Head>
        <title>Advanced IT Infrastructure Services | Zion Tech Group</title>
        <meta name="description" content="Enterprise-grade IT infrastructure solutions that scale with your business. From cloud migration to network optimization, we build the foundation for your digital success." />
        <link rel="canonical" href="https://ziontechgroup.com/advanced-it-infrastructure-services" />
      </Head>

      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
            Advanced IT Infrastructure Services
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Build a robust, scalable, and future-ready IT foundation that powers your business growth. Our enterprise-grade infrastructure solutions adapt to your needs and scale with your success.
          </p>
        </div>

        {/* Service Overview */}
        <div className="mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Foundation for Digital Success</h2>
              <p className="text-white/80 text-lg mb-6">
                Your IT infrastructure is the backbone of your digital operations. We design, build, and maintain enterprise-grade systems that ensure reliability, performance, and scalability.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-white/80">99.99% uptime guarantee</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-white/80">24/7 monitoring and support</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-white/80">Scalable architecture design</span>
                </div>
              </div>
            </div>
            <div className="p-8 rounded-xl bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30">
              <div className="text-6xl mb-4">🏗️</div>
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise-Grade Infrastructure</h3>
              <p className="text-white/80">
                Build on a solid foundation with infrastructure that grows with your business and adapts to changing needs.
              </p>
            </div>
          </div>
        </div>

        {/* Core Services */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Core Infrastructure Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 rounded-xl bg-black/40 border border-cyan-500/20">
              <div className="text-3xl mb-4">☁️</div>
              <h3 className="text-xl font-semibold text-white mb-3">Cloud Infrastructure</h3>
              <p className="text-white/70 mb-4">
                Design and implement cloud-native architectures with multi-cloud strategies and hybrid cloud solutions.
              </p>
              <ul className="text-white/60 text-sm space-y-1">
                <li>• AWS, Azure, GCP expertise</li>
                <li>• Cloud migration services</li>
                <li>• Multi-cloud management</li>
              </ul>
            </div>

            <div className="p-6 rounded-xl bg-black/40 border border-cyan-500/20">
              <div className="text-3xl mb-4">🌐</div>
              <h3 className="text-xl font-semibold text-white mb-3">Network Infrastructure</h3>
              <p className="text-white/70 mb-4">
                High-performance networking solutions with advanced routing, switching, and security capabilities.
              </p>
              <ul className="text-white/60 text-sm space-y-1">
                <li>• SDN implementation</li>
                <li>• Network optimization</li>
                <li>• Load balancing</li>
              </ul>
            </div>

            <div className="p-6 rounded-xl bg-black/40 border border-cyan-500/20">
              <div className="text-3xl mb-4">💾</div>
              <h3 className="text-xl font-semibold text-white mb-3">Storage Solutions</h3>
              <p className="text-white/70 mb-4">
                Enterprise storage systems with data protection, backup, and disaster recovery capabilities.
              </p>
              <ul className="text-white/60 text-sm space-y-1">
                <li>• SAN/NAS implementation</li>
                <li>• Data backup strategies</li>
                <li>• Disaster recovery</li>
              </ul>
            </div>

            <div className="p-6 rounded-xl bg-black/40 border border-cyan-500/20">
              <div className="text-3xl mb-4">🖥️</div>
              <h3 className="text-xl font-semibold text-white mb-3">Server Infrastructure</h3>
              <p className="text-white/70 mb-4">
                High-availability server solutions with virtualization, containerization, and orchestration.
              </p>
              <ul className="text-white/60 text-sm space-y-1">
                <li>• Virtualization platforms</li>
                <li>• Container orchestration</li>
                <li>• High availability</li>
              </ul>
            </div>

            <div className="p-6 rounded-xl bg-black/40 border border-cyan-500/20">
              <div className="text-3xl mb-4">🔒</div>
              <h3 className="text-xl font-semibold text-white mb-3">Security Infrastructure</h3>
              <p className="text-white/70 mb-4">
                Multi-layered security architecture with advanced threat protection and compliance features.
              </p>
              <ul className="text-white/60 text-sm space-y-1">
                <li>• Firewall implementation</li>
                <li>• IDS/IPS systems</li>
                <li>• Security monitoring</li>
              </ul>
            </div>

            <div className="p-6 rounded-xl bg-black/40 border border-cyan-500/20">
              <div className="text-3xl mb-4">📊</div>
              <h3 className="text-xl font-semibold text-white mb-3">Monitoring & Management</h3>
              <p className="text-white/70 mb-4">
                Comprehensive monitoring and management tools for proactive infrastructure management.
              </p>
              <ul className="text-white/60 text-sm space-y-1">
                <li>• Performance monitoring</li>
                <li>• Automated management</li>
                <li>• Proactive maintenance</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Technology Stack */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Technology Stack</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="p-6 rounded-xl bg-black/40 border border-cyan-500/20">
                <h3 className="text-xl font-semibold text-white mb-3">🔄 Virtualization & Containers</h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="text-white/70">
                    <div className="font-medium text-white">VMware</div>
                    <div className="text-white/60">vSphere, vCenter, ESXi</div>
                  </div>
                  <div className="text-white/70">
                    <div className="font-medium text-white">Docker</div>
                    <div className="text-white/60">Containers, Compose</div>
                  </div>
                  <div className="text-white/70">
                    <div className="font-medium text-white">Kubernetes</div>
                    <div className="text-white/60">Orchestration, K8s</div>
                  </div>
                  <div className="text-white/70">
                    <div className="font-medium text-white">Hyper-V</div>
                    <div className="text-white/60">Windows virtualization</div>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-xl bg-black/40 border border-cyan-500/20">
                <h3 className="text-xl font-semibold text-white mb-3">☁️ Cloud Platforms</h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="text-white/70">
                    <div className="font-medium text-white">AWS</div>
                    <div className="text-white/60">EC2, S3, RDS, Lambda</div>
                  </div>
                  <div className="text-white/70">
                    <div className="font-medium text-white">Azure</div>
                    <div className="text-white/60">VM, Storage, SQL</div>
                  </div>
                  <div className="text-white/70">
                    <div className="font-medium text-white">GCP</div>
                    <div className="text-white/60">Compute, Storage, BigQuery</div>
                  </div>
                  <div className="text-white/70">
                    <div className="font-medium text-white">Private Cloud</div>
                    <div className="text-white/60">OpenStack, VMware</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="p-6 rounded-xl bg-black/40 border border-cyan-500/20">
                <h3 className="text-xl font-semibold text-white mb-3">🖥️ Operating Systems</h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="text-white/70">
                    <div className="font-medium text-white">Linux</div>
                    <div className="text-white/60">Ubuntu, CentOS, RHEL</div>
                  </div>
                  <div className="text-white/70">
                    <div className="font-medium text-white">Windows Server</div>
                    <div className="text-white/60">2019, 2022, Core</div>
                  </div>
                  <div className="text-white/70">
                    <div className="font-medium text-white">Unix</div>
                    <div className="text-white/60">AIX, HP-UX, Solaris</div>
                  </div>
                  <div className="text-white/70">
                    <div className="font-medium text-white">BSD</div>
                    <div className="text-white/60">FreeBSD, OpenBSD</div>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-xl bg-black/40 border border-cyan-500/20">
                <h3 className="text-xl font-semibold text-white mb-3">🔧 Management Tools</h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="text-white/70">
                    <div className="font-medium text-white">Ansible</div>
                    <div className="text-white/60">Automation, Configuration</div>
                  </div>
                  <div className="text-white/70">
                    <div className="font-medium text-white">Terraform</div>
                    <div className="text-white/60">Infrastructure as Code</div>
                  </div>
                  <div className="text-white/70">
                    <div className="font-medium text-white">Puppet</div>
                    <div className="text-white/60">Configuration management</div>
                  </div>
                  <div className="text-white/70">
                    <div className="font-medium text-white">Chef</div>
                    <div className="text-white/60">Infrastructure automation</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Implementation Process */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Implementation Process</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Assessment & Planning</h3>
                  <p className="text-white/70">
                    Comprehensive analysis of current infrastructure, requirements gathering, and strategic planning for optimal solutions.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Design & Architecture</h3>
                  <p className="text-white/70">
                    Detailed infrastructure design with scalability, security, and performance considerations built into every component.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Implementation & Testing</h3>
                  <p className="text-white/70">
                    Phased implementation with comprehensive testing at each stage to ensure reliability and performance.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">4</div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Deployment & Migration</h3>
                  <p className="text-white/70">
                    Smooth deployment with minimal downtime, data migration, and system integration to ensure business continuity.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">5</div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Training & Documentation</h3>
                  <p className="text-white/70">
                    Comprehensive training for your team and detailed documentation for ongoing maintenance and operations.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-sm">6</div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Support & Optimization</h3>
                  <p className="text-white/70">
                    Ongoing support, monitoring, and optimization to ensure your infrastructure continues to meet evolving business needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Why Choose Our Infrastructure Services?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span className="text-white/80">99.99% uptime guarantee</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span className="text-white/80">24/7 monitoring and support</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span className="text-white/80">Scalable architecture design</span>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span className="text-white/80">Future-proof technology stack</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span className="text-white/80">Compliance-ready solutions</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span className="text-white/80">Cost optimization strategies</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center p-8 rounded-xl bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Build Your Digital Foundation?</h2>
          <p className="text-white/80 mb-6 max-w-2xl mx-auto">
            Transform your IT infrastructure with enterprise-grade solutions that scale with your business. Let's discuss how we can help you build a robust digital foundation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold transition-colors"
            >
              Get Started
            </Link>
            <Link 
              href="/pricing" 
              className="px-8 py-3 border border-blue-500 text-blue-400 hover:bg-blue-500/10 rounded-lg font-semibold transition-colors"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}