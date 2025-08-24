export default function ITServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 text-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-blue-600 py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">💻 IT Services & Solutions</h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Comprehensive IT infrastructure, cloud solutions, and digital transformation services 
            to modernize your business and drive operational excellence.
          </p>
          <div className="mt-8">
            <a href="tel:+13024640950" className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors mr-4">
              Call Now: +1 302 464 0950
            </a>
            <a href="mailto:kleber@ziontechgroup.com" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors">
              Get IT Consultation
            </a>
          </div>
        </div>
      </div>

      {/* Contact Info Banner */}
      <div className="bg-zinc-800 py-4">
        <div className="container mx-auto px-6 text-center text-sm">
          <span className="mr-8">📱 +1 302 464 0950</span>
          <span className="mr-8">✉️ kleber@ziontechgroup.com</span>
          <span>📍 364 E Main St STE 1008, Middletown DE 19709</span>
        </div>
      </div>

      {/* IT Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Cloud Infrastructure */}
            <div className="bg-zinc-800 rounded-xl p-8 border border-zinc-700">
              <div className="text-4xl mb-6">☁️</div>
              <h2 className="text-3xl font-bold mb-4">Cloud Infrastructure</h2>
              <p className="text-zinc-300 mb-6 text-lg">
                Design, deploy, and optimize cloud infrastructure on AWS, Azure, and Google Cloud. 
                From migration to ongoing management, we ensure your cloud journey is seamless and cost-effective.
              </p>
              
              <div className="space-y-4 mb-8">
                <h3 className="text-xl font-semibold text-green-400">Services Include:</h3>
                <ul className="space-y-2 text-zinc-300">
                  <li>• Cloud architecture design and planning</li>
                  <li>• Migration from on-premises to cloud</li>
                  <li>• Multi-cloud and hybrid cloud solutions</li>
                  <li>• Cost optimization and resource management</li>
                  <li>• Disaster recovery and backup strategies</li>
                  <li>• 24/7 cloud infrastructure monitoring</li>
                </ul>
              </div>

              <div className="bg-zinc-700 rounded-lg p-6 mb-6">
                <h4 className="text-lg font-semibold mb-4">Pricing Structure</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span>Consulting Rate</span>
                    <span className="text-green-400 font-semibold">$150/hour</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Project Range</span>
                    <span className="text-yellow-400 font-semibold">$5K - $50K</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Monthly Management</span>
                    <span className="text-green-400 font-semibold">$2K - $10K</span>
                  </div>
                  <div className="text-sm text-zinc-400 mt-2">
                    Free initial cloud assessment | Custom pricing for enterprise
                  </div>
                </div>
              </div>

              <a href="https://ziontechgroup.com/cloud-services" className="block w-full text-center bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition-colors">
                Learn More About Cloud Infrastructure
              </a>
            </div>

            {/* DevOps & CI/CD */}
            <div className="bg-zinc-800 rounded-xl p-8 border border-zinc-700">
              <div className="text-4xl mb-6">🚀</div>
              <h2 className="text-3xl font-bold mb-4">DevOps & CI/CD</h2>
              <p className="text-zinc-300 mb-6 text-lg">
                Accelerate your software delivery with automated deployment pipelines, 
                infrastructure as code, and DevOps culture implementation that drives innovation.
              </p>
              
              <div className="space-y-4 mb-8">
                <h3 className="text-xl font-semibold text-green-400">Services Include:</h3>
                <ul className="space-y-2 text-zinc-300">
                  <li>• CI/CD pipeline design and implementation</li>
                  <li>• Infrastructure as Code (Terraform, CloudFormation)</li>
                  <li>• Container orchestration (Kubernetes, Docker)</li>
                  <li>• Monitoring and observability setup</li>
                  <li>• DevOps culture transformation</li>
                  <li>• Automated testing and quality gates</li>
                </ul>
              </div>

              <div className="bg-zinc-700 rounded-lg p-6 mb-6">
                <h4 className="text-lg font-semibold mb-4">Pricing Structure</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span>Consulting Rate</span>
                    <span className="text-green-400 font-semibold">$175/hour</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Project Range</span>
                    <span className="text-yellow-400 font-semibold">$8K - $75K</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Monthly Support</span>
                    <span className="text-green-400 font-semibold">$3K - $15K</span>
                  </div>
                  <div className="text-sm text-zinc-400 mt-2">
                    Free DevOps maturity assessment | Training included
                  </div>
                </div>
              </div>

              <a href="https://ziontechgroup.com/devops" className="block w-full text-center bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition-colors">
                Learn More About DevOps & CI/CD
              </a>
            </div>

            {/* Cybersecurity */}
            <div className="bg-zinc-800 rounded-xl p-8 border border-zinc-700">
              <div className="text-4xl mb-6">🛡️</div>
              <h2 className="text-3xl font-bold mb-4">Cybersecurity</h2>
              <p className="text-zinc-300 mb-6 text-lg">
                Protect your business with comprehensive cybersecurity solutions including security audits, 
                penetration testing, compliance frameworks, and incident response planning.
              </p>
              
              <div className="space-y-4 mb-8">
                <h3 className="text-xl font-semibold text-green-400">Services Include:</h3>
                <ul className="space-y-2 text-zinc-300">
                  <li>• Security assessments and penetration testing</li>
                  <li>• Compliance frameworks (SOC2, ISO27001, HIPAA)</li>
                  <li>• Security architecture design and review</li>
                  <li>• Incident response planning and training</li>
                  <li>• Security awareness and training programs</li>
                  <li>• Threat intelligence and monitoring</li>
                </ul>
              </div>

              <div className="bg-zinc-700 rounded-lg p-6 mb-6">
                <h4 className="text-lg font-semibold mb-4">Pricing Structure</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span>Consulting Rate</span>
                    <span className="text-green-400 font-semibold">$200/hour</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Project Range</span>
                    <span className="text-yellow-400 font-semibold">$10K - $100K</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Monthly Security</span>
                    <span className="text-green-400 font-semibold">$5K - $25K</span>
                  </div>
                  <div className="text-sm text-zinc-400 mt-2">
                    Free security assessment | Compliance roadmap included
                  </div>
                </div>
              </div>

              <a href="https://ziontechgroup.com/cybersecurity" className="block w-full text-center bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition-colors">
                Learn More About Cybersecurity
              </a>
            </div>

            {/* Data Engineering */}
            <div className="bg-zinc-800 rounded-xl p-8 border border-zinc-700">
              <div className="text-4xl mb-6">📈</div>
              <h2 className="text-3xl font-bold mb-4">Data Engineering</h2>
              <p className="text-zinc-300 mb-6 text-lg">
                Build robust data pipelines, warehousing solutions, and ETL processes that transform 
                raw data into actionable business intelligence and insights.
              </p>
              
              <div className="space-y-4 mb-8">
                <h3 className="text-xl font-semibold text-green-400">Services Include:</h3>
                <ul className="space-y-2 text-zinc-300">
                  <li>• Data pipeline design and implementation</li>
                  <li>• Data warehouse architecture and design</li>
                  <li>• ETL/ELT process development</li>
                  <li>• Real-time data streaming solutions</li>
                  <li>• Data quality and governance</li>
                  <li>• Business intelligence and reporting</li>
                </ul>
              </div>

              <div className="bg-zinc-700 rounded-lg p-6 mb-6">
                <h4 className="text-lg font-semibold mb-4">Pricing Structure</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span>Consulting Rate</span>
                    <span className="text-green-400 font-semibold">$160/hour</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Project Range</span>
                    <span className="text-yellow-400 font-semibold">$15K - $150K</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Monthly Maintenance</span>
                    <span className="text-green-400 font-semibold">$3K - $20K</span>
                  </div>
                  <div className="text-sm text-zinc-400 mt-2">
                    Free data assessment | Custom analytics solutions
                  </div>
                </div>
              </div>

              <a href="https://ziontechgroup.com/data-engineering" className="block w-full text-center bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition-colors">
                Learn More About Data Engineering
              </a>
            </div>

            {/* API Development */}
            <div className="bg-zinc-800 rounded-xl p-8 border border-zinc-700">
              <div className="text-4xl mb-6">🔌</div>
              <h2 className="text-3xl font-bold mb-4">API Development</h2>
              <p className="text-zinc-300 mb-6 text-lg">
                Design and develop robust APIs, microservices architecture, and API gateway solutions 
                that enable seamless integration and data exchange between systems.
              </p>
              
              <div className="space-y-4 mb-8">
                <h3 className="text-xl font-semibold text-green-400">Services Include:</h3>
                <ul className="space-y-2 text-zinc-300">
                  <li>• RESTful API design and development</li>
                  <li>• GraphQL API implementation</li>
                  <li>• Microservices architecture design</li>
                  <li>• API gateway and management</li>
                  <li>• API documentation and testing</li>
                  <li>• Performance optimization and scaling</li>
                </ul>
              </div>

              <div className="bg-zinc-700 rounded-lg p-6 mb-6">
                <h4 className="text-lg font-semibold mb-4">Pricing Structure</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span>Consulting Rate</span>
                    <span className="text-green-400 font-semibold">$140/hour</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Project Range</span>
                    <span className="text-yellow-400 font-semibold">$8K - $80K</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Monthly Support</span>
                    <span className="text-green-400 font-semibold">$2K - $12K</span>
                  </div>
                  <div className="text-sm text-zinc-400 mt-2">
                    Free API assessment | Documentation included
                  </div>
                </div>
              </div>

              <a href="https://ziontechgroup.com/api-development" className="block w-full text-center bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition-colors">
                Learn More About API Development
              </a>
            </div>

            {/* Digital Transformation */}
            <div className="bg-zinc-800 rounded-xl p-8 border border-zinc-700">
              <div className="text-4xl mb-6">🔄</div>
              <h2 className="text-3xl font-bold mb-4">Digital Transformation</h2>
              <p className="text-zinc-300 mb-6 text-lg">
                Guide your organization through end-to-end digital transformation with strategic consulting, 
                legacy system modernization, and change management expertise.
              </p>
              
              <div className="space-y-4 mb-8">
                <h3 className="text-xl font-semibold text-green-400">Services Include:</h3>
                <ul className="space-y-2 text-zinc-300">
                  <li>• Digital strategy and roadmap development</li>
                  <li>• Legacy system modernization</li>
                  <li>• Change management and training</li>
                  <li>• Process optimization and automation</li>
                  <li>• Technology stack evaluation</li>
                  <li>• ROI measurement and analytics</li>
                </ul>
              </div>

              <div className="bg-zinc-700 rounded-lg p-6 mb-6">
                <h4 className="text-lg font-semibold mb-4">Pricing Structure</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span>Consulting Rate</span>
                    <span className="text-green-400 font-semibold">$250/hour</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Project Range</span>
                    <span className="text-yellow-400 font-semibold">$25K - $500K</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Monthly Advisory</span>
                    <span className="text-green-400 font-semibold">$10K - $50K</span>
                  </div>
                  <div className="text-sm text-zinc-400 mt-2">
                    Free transformation assessment | Strategic roadmap included
                  </div>
                </div>
              </div>

              <a href="https://ziontechgroup.com/digital-transformation" className="block w-full text-center bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition-colors">
                Learn More About Digital Transformation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* IT Service Delivery Process */}
      <section className="py-20 bg-zinc-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">⚡ IT Service Delivery Process</h2>
            <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
              Our proven methodology ensures successful project delivery, on-time completion, and maximum value for your investment
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-xl font-semibold mb-3">Discovery</h3>
              <p className="text-zinc-300">Comprehensive analysis of your current IT infrastructure, requirements, and business objectives.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-xl font-semibold mb-3">Strategy</h3>
              <p className="text-zinc-300">Develop detailed project plan, architecture design, and implementation roadmap.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-xl font-semibold mb-3">Implementation</h3>
              <p className="text-zinc-300">Agile development and deployment with continuous testing and quality assurance.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">4</div>
              <h3 className="text-xl font-semibold mb-3">Optimization</h3>
              <p className="text-zinc-300">Performance tuning, monitoring setup, and ongoing support and maintenance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">🛠️ Technology Stack</h2>
            <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
              We leverage cutting-edge technologies and proven frameworks to deliver robust, scalable, and future-proof solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-zinc-800 rounded-xl p-6 border border-zinc-700">
              <h3 className="text-xl font-semibold mb-4 text-green-400">Cloud & Infrastructure</h3>
              <ul className="space-y-2 text-zinc-300">
                <li>• AWS, Azure, Google Cloud</li>
                <li>• Kubernetes, Docker, Terraform</li>
                <li>• Ansible, Jenkins, GitLab CI</li>
                <li>• Prometheus, Grafana, ELK Stack</li>
              </ul>
            </div>
            
            <div className="bg-zinc-800 rounded-xl p-6 border border-zinc-700">
              <h3 className="text-xl font-semibold mb-4 text-green-400">Development & APIs</h3>
              <ul className="space-y-2 text-zinc-300">
                <li>• Node.js, Python, Java, .NET</li>
                <li>• React, Angular, Vue.js</li>
                <li>• REST, GraphQL, gRPC</li>
                <li>• PostgreSQL, MongoDB, Redis</li>
              </ul>
            </div>
            
            <div className="bg-zinc-800 rounded-xl p-6 border border-zinc-700">
              <h3 className="text-xl font-semibold mb-4 text-green-400">Security & Compliance</h3>
              <ul className="space-y-2 text-zinc-300">
                <li>• OWASP, NIST, ISO27001</li>
                <li>• Penetration testing tools</li>
                <li>• SIEM, IDS/IPS solutions</li>
                <li>• Compliance automation tools</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Modernize Your IT Infrastructure?</h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how our IT services can transform your technology landscape, 
            improve efficiency, and drive business growth through digital innovation.
          </p>
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="tel:+13024640950" className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-colors text-lg">
                📞 Call +1 302 464 0950
              </a>
              <a href="mailto:kleber@ziontechgroup.com" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors text-lg">
                ✉️ Schedule IT Consultation
              </a>
            </div>
            <p className="text-green-100 text-sm">
              📍 364 E Main St STE 1008, Middletown DE 19709 | 🌐 https://ziontechgroup.com
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}