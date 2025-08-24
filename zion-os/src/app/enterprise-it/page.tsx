import Link from "next/link";

export const metadata = {
  title: "Enterprise IT Services - Zion Tech Group",
  description: "Comprehensive enterprise IT infrastructure solutions including cloud migration, DevOps automation, and scalable technology infrastructure.",
  keywords: "enterprise IT, infrastructure, cloud migration, DevOps, IT consulting, Zion Tech Group",
};

export default function EnterpriseITPage() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Enterprise IT Services</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Transform your enterprise technology infrastructure with scalable, secure, and innovative IT solutions 
            designed for modern business needs.
          </p>
        </div>

        {/* Overview Section */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Modern Enterprise Infrastructure</h2>
              <p className="text-lg text-gray-300 mb-6">
                Our Enterprise IT services provide comprehensive technology solutions that enable organizations 
                to scale efficiently, reduce operational costs, and maintain competitive advantage in the digital economy.
              </p>
              <p className="text-lg text-gray-300 mb-8">
                From cloud migration to DevOps automation, we help enterprises build resilient, scalable, 
                and future-ready technology foundations that support business growth and innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-primary">
                  Get IT Assessment
                </Link>
                <Link href="/case-studies" className="btn-secondary">
                  View Case Studies
                </Link>
              </div>
            </div>
            <div className="card bg-gradient-to-r from-green-600/20 to-blue-600/20 border-green-500/30 p-8">
              <h3 className="text-2xl font-bold mb-4">IT Capabilities</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  Cloud infrastructure design
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  DevOps automation
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  Security integration
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  Performance optimization
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Enterprise IT Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Cloud Infrastructure */}
            <div className="card group">
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-500/30 transition-colors">
                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Cloud Infrastructure</h3>
              <p className="text-gray-400 mb-4">
                Design and implement scalable cloud infrastructure solutions that optimize performance and reduce costs.
              </p>
              <ul className="text-sm text-gray-300 space-y-1 mb-4">
                <li>• Multi-cloud strategy</li>
                <li>• Infrastructure as Code</li>
                <li>• Auto-scaling solutions</li>
                <li>• Cost optimization</li>
              </ul>
            </div>

            {/* DevOps Automation */}
            <div className="card group">
              <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-500/30 transition-colors">
                <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">DevOps Automation</h3>
              <p className="text-gray-400 mb-4">
                Streamline development and operations with automated CI/CD pipelines and infrastructure management.
              </p>
              <ul className="text-sm text-gray-300 space-y-1 mb-4">
                <li>• CI/CD pipelines</li>
                <li>• Automated testing</li>
                <li>• Infrastructure automation</li>
                <li>• Monitoring & alerting</li>
              </ul>
            </div>

            {/* Data Center Modernization */}
            <div className="card group">
              <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-500/30 transition-colors">
                <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Data Center Modernization</h3>
              <p className="text-gray-400 mb-4">
                Transform legacy data centers with modern, efficient infrastructure and virtualization technologies.
              </p>
              <ul className="text-sm text-gray-300 space-y-1 mb-4">
                <li>• Virtualization</li>
                <li>• Storage optimization</li>
                <li>• Network modernization</li>
                <li>• Energy efficiency</li>
              </ul>
            </div>

            {/* Network Infrastructure */}
            <div className="card group">
              <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-yellow-500/30 transition-colors">
                <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Network Infrastructure</h3>
              <p className="text-gray-400 mb-4">
                Design and implement high-performance, secure network infrastructure for enterprise environments.
              </p>
              <ul className="text-sm text-gray-300 space-y-1 mb-4">
                <li>• SD-WAN solutions</li>
                <li>• Network security</li>
                <li>• Load balancing</li>
                <li>• Traffic optimization</li>
              </ul>
            </div>

            {/* IT Consulting */}
            <div className="card group">
              <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-red-500/30 transition-colors">
                <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">IT Strategy & Consulting</h3>
              <p className="text-gray-400 mb-4">
                Strategic IT consulting to align technology with business objectives and drive digital transformation.
              </p>
              <ul className="text-sm text-gray-300 space-y-1 mb-4">
                <li>• Technology roadmap</li>
                <li>• Digital transformation</li>
                <li>• IT governance</li>
                <li>• Risk assessment</li>
              </ul>
            </div>

            {/* Managed Services */}
            <div className="card group">
              <div className="w-12 h-12 bg-indigo-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-indigo-500/30 transition-colors">
                <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Managed IT Services</h3>
              <p className="text-gray-400 mb-4">
                Comprehensive managed IT services including monitoring, maintenance, and 24/7 support.
              </p>
              <ul className="text-sm text-gray-300 space-y-1 mb-4">
                <li>• 24/7 monitoring</li>
                <li>• Proactive maintenance</li>
                <li>• Help desk support</li>
                <li>• Performance optimization</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Technology Stack</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card text-center p-6">
              <h4 className="font-semibold mb-2">Cloud Platforms</h4>
              <p className="text-sm text-gray-400">AWS, Azure, Google Cloud, hybrid solutions</p>
            </div>
            <div className="card text-center p-6">
              <h4 className="font-semibold mb-2">Infrastructure</h4>
              <p className="text-sm text-gray-400">Kubernetes, Docker, Terraform, Ansible</p>
            </div>
            <div className="card text-center p-6">
              <h4 className="font-semibold mb-2">Monitoring</h4>
              <p className="text-sm text-gray-400">Prometheus, Grafana, ELK Stack</p>
            </div>
            <div className="card text-center p-6">
              <h4 className="font-semibold mb-2">Security</h4>
              <p className="text-sm text-gray-400">Zero-trust, encryption, access control</p>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Enterprise IT Services?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card bg-gradient-to-r from-blue-600/20 to-green-600/20 border-blue-500/30">
              <h3 className="text-xl font-bold mb-3">Scalability</h3>
              <p className="text-gray-300 text-sm">
                Build infrastructure that grows with your business needs, from startup to enterprise scale.
              </p>
            </div>
            <div className="card bg-gradient-to-r from-green-600/20 to-blue-600/20 border-green-500/30">
              <h3 className="text-xl font-bold mb-3">Cost Optimization</h3>
              <p className="text-gray-300 text-sm">
                Reduce IT costs through automation, cloud optimization, and efficient resource management.
              </p>
            </div>
            <div className="card bg-gradient-to-r from-purple-600/20 to-pink-600/20 border-purple-500/30">
              <h3 className="text-xl font-bold mb-3">Security First</h3>
              <p className="text-gray-300 text-sm">
                Built-in security measures and compliance with industry standards and regulations.
              </p>
            </div>
            <div className="card bg-gradient-to-r from-yellow-600/20 to-orange-600/20 border-yellow-500/30">
              <h3 className="text-xl font-bold mb-3">24/7 Support</h3>
              <p className="text-gray-300 text-sm">
                Round-the-clock monitoring, support, and maintenance to ensure your systems run smoothly.
              </p>
            </div>
            <div className="card bg-gradient-to-r from-red-600/20 to-pink-600/20 border-red-500/30">
              <h3 className="text-xl font-bold mb-3">Innovation</h3>
              <p className="text-gray-300 text-sm">
                Stay ahead with cutting-edge technologies and best practices in enterprise IT.
              </p>
            </div>
            <div className="card bg-gradient-to-r from-indigo-600/20 to-purple-600/20 border-indigo-500/30">
              <h3 className="text-xl font-bold mb-3">Expert Team</h3>
              <p className="text-gray-300 text-sm">
                Experienced IT professionals with deep expertise in enterprise infrastructure and operations.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="card bg-gradient-to-r from-green-600/20 to-blue-600/20 border-green-500/30 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your IT Infrastructure?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our enterprise IT services can help you build a modern, scalable, and secure technology foundation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Get IT Assessment
              </Link>
              <Link href="/case-studies" className="btn-secondary">
                View Success Stories
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}