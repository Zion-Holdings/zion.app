export default function SAASServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 text-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">🚀 Micro SAAS Services</h1>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            Ready-to-deploy software solutions for specific business needs. From marketplace platforms 
            to AI-powered tools, we deliver turnkey solutions that accelerate your digital transformation.
          </p>
          <div className="mt-8">
            <a href="tel:+13024640950" className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors mr-4">
              Call Now: +1 302 464 0950
            </a>
              <a href="mailto:kleber@ziontechgroup.com" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors">
              Get SAAS Demo
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

      {/* SAAS Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Zion Marketplace */}
            <div className="bg-zinc-800 rounded-xl p-8 border border-zinc-700">
              <div className="text-4xl mb-6">🛒</div>
              <h2 className="text-3xl font-bold mb-4">Zion Marketplace</h2>
              <p className="text-zinc-300 mb-6 text-lg">
                Complete marketplace solution with job boards, talent matching, project management, 
                and integrated payment processing for modern business ecosystems.
              </p>
              
              <div className="space-y-4 mb-8">
                <h3 className="text-xl font-semibold text-purple-400">Key Features:</h3>
                <ul className="space-y-2 text-zinc-300">
                  <li>• Multi-vendor marketplace platform</li>
                  <li>• Advanced job board and talent matching</li>
                  <li>• Project management and collaboration tools</li>
                  <li>• Integrated payment and escrow systems</li>
                  <li>• AI-powered recommendations</li>
                  <li>• Mobile-responsive design</li>
                </ul>
              </div>

              <div className="bg-zinc-700 rounded-lg p-6 mb-6">
                <h4 className="text-lg font-semibold mb-4">Pricing Plans</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span>Starter Plan</span>
                    <span className="text-green-400 font-semibold">$399/month</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Professional Plan</span>
                    <span className="text-green-400 font-semibold">$799/month</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Enterprise Plan</span>
                    <span className="text-green-400 font-semibold">$1,599/month</span>
                  </div>
                  <div className="text-sm text-zinc-400 mt-2">
                    Setup fee: $2,500 | Custom integrations available
                  </div>
                </div>
              </div>

              <a href="https://ziontechgroup.com/marketplace" className="block w-full text-center bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold transition-colors">
                Learn More About Zion Marketplace
              </a>
            </div>

            {/* Resume AI Builder */}
            <div className="bg-zinc-800 rounded-xl p-8 border border-zinc-700">
              <div className="text-4xl mb-6">📝</div>
              <h2 className="text-3xl font-bold mb-4">Resume AI Builder</h2>
              <p className="text-zinc-300 mb-6 text-lg">
                AI-powered resume creation, optimization, and ATS-friendly formatting with industry insights 
                and professional templates for career advancement.
              </p>
              
              <div className="space-y-4 mb-8">
                <h3 className="text-xl font-semibold text-purple-400">Key Features:</h3>
                <ul className="space-y-2 text-zinc-300">
                  <li>• AI-powered resume writing assistance</li>
                  <li>• ATS-optimized formatting</li>
                  <li>• Industry-specific templates</li>
                  <li>• Keyword optimization and suggestions</li>
                  <li>• Cover letter generation</li>
                  <li>• Resume analytics and tracking</li>
                </ul>
              </div>

              <div className="bg-zinc-700 rounded-lg p-6 mb-6">
                <h4 className="text-lg font-semibold mb-4">Pricing Plans</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span>Basic Plan</span>
                    <span className="text-green-400 font-semibold">$99/month</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Pro Plan</span>
                    <span className="text-green-400 font-semibold">$199/month</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Business Plan</span>
                    <span className="text-green-400 font-semibold">$399/month</span>
                  </div>
                  <div className="text-sm text-zinc-400 mt-2">
                    Setup fee: $500 | Unlimited resume creation
                  </div>
                </div>
              </div>

              <a href="https://ziontechgroup.com/resume-ai" className="block w-full text-center bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold transition-colors">
                Learn More About Resume AI Builder
              </a>
            </div>

            {/* Token Rewards System */}
            <div className="bg-zinc-800 rounded-xl p-8 border border-zinc-700">
              <div className="text-4xl mb-6">🪙</div>
              <h2 className="text-3xl font-bold mb-4">Token Rewards System</h2>
              <p className="text-zinc-300 mb-6 text-lg">
                Blockchain-based loyalty and rewards platform with gamification, community engagement, 
                and token economics for modern businesses and communities.
              </p>
              
              <div className="space-y-4 mb-8">
                <h3 className="text-xl font-semibold text-purple-400">Key Features:</h3>
                <ul className="space-y-2 text-zinc-300">
                  <li>• Custom token creation and management</li>
                  <li>• Gamified rewards and challenges</li>
                  <li>• Community engagement tools</li>
                  <li>• Multi-chain blockchain support</li>
                  <li>• Analytics and reporting dashboard</li>
                  <li>• API integration capabilities</li>
                </ul>
              </div>

              <div className="bg-zinc-700 rounded-lg p-6 mb-6">
                <h4 className="text-lg font-semibold mb-4">Pricing Plans</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span>Basic Plan</span>
                    <span className="text-green-400 font-semibold">$299/month</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Pro Plan</span>
                    <span className="text-green-400 font-semibold">$599/month</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Enterprise Plan</span>
                    <span className="text-green-400 font-semibold">$1,199/month</span>
                  </div>
                  <div className="text-sm text-zinc-400 mt-2">
                    Setup fee: $3,000 | Custom blockchain integration
                  </div>
                </div>
              </div>

              <a href="https://ziontechgroup.com/token-rewards" className="block w-full text-center bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold transition-colors">
                Learn More About Token Rewards System
              </a>
            </div>

            {/* KYC/AML Verification */}
            <div className="bg-zinc-800 rounded-xl p-8 border border-zinc-700">
              <div className="text-4xl mb-6">✅</div>
              <h2 className="text-3xl font-bold mb-4">KYC/AML Verification</h2>
              <p className="text-zinc-300 mb-6 text-lg">
                Compliance-ready identity verification and anti-money laundering screening system 
                with advanced fraud detection and regulatory compliance features.
              </p>
              
              <div className="space-y-4 mb-8">
                <h3 className="text-xl font-semibold text-purple-400">Key Features:</h3>
                <ul className="space-y-2 text-zinc-300">
                  <li>• Multi-factor identity verification</li>
                  <li>• Document authentication and validation</li>
                  <li>• AML screening and monitoring</li>
                  <li>• Regulatory compliance frameworks</li>
                  <li>• Real-time fraud detection</li>
                  <li>• Audit trail and reporting</li>
                </ul>
              </div>

              <div className="bg-zinc-700 rounded-lg p-6 mb-6">
                <h4 className="text-lg font-semibold mb-4">Pricing Plans</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span>Basic Plan</span>
                    <span className="text-green-400 font-semibold">$199/month</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Pro Plan</span>
                    <span className="text-green-400 font-semibold">$399/month</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Enterprise Plan</span>
                    <span className="text-green-400 font-semibold">$799/month</span>
                  </div>
                  <div className="text-sm text-zinc-400 mt-2">
                    Setup fee: $1,500 | Custom compliance rules
                  </div>
                </div>
              </div>

              <a href="https://ziontechgroup.com/kyc-aml" className="block w-full text-center bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold transition-colors">
                Learn More About KYC/AML Verification
              </a>
            </div>

            {/* DAO Governance Platform */}
            <div className="bg-zinc-800 rounded-xl p-8 border border-zinc-700">
              <div className="text-4xl mb-6">🗳️</div>
              <h2 className="text-3xl font-bold mb-4">DAO Governance Platform</h2>
              <p className="text-zinc-300 mb-6 text-lg">
                Decentralized governance tools with proposal creation, voting mechanisms, treasury management, 
                and community governance for modern organizations.
              </p>
              
              <div className="space-y-4 mb-8">
                <h3 className="text-xl font-semibold text-purple-400">Key Features:</h3>
                <ul className="space-y-2 text-zinc-300">
                  <li>• Proposal creation and management</li>
                  <li>• Multi-signature voting systems</li>
                  <li>• Treasury management and budgeting</li>
                  <li>• Community governance tools</li>
                  <li>• On-chain governance execution</li>
                  <li>• Analytics and reporting dashboard</li>
                </ul>
              </div>

              <div className="bg-zinc-700 rounded-lg p-6 mb-6">
                <h4 className="text-lg font-semibold mb-4">Pricing Plans</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span>Basic Plan</span>
                    <span className="text-green-400 font-semibold">$449/month</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Pro Plan</span>
                    <span className="text-green-400 font-semibold">$899/month</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Enterprise Plan</span>
                    <span className="text-green-400 font-semibold">$1,799/month</span>
                  </div>
                  <div className="text-sm text-zinc-400 mt-2">
                    Setup fee: $4,000 | Custom governance rules
                  </div>
                </div>
              </div>

              <a href="https://ziontechgroup.com/dao-governance" className="block w-full text-center bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold transition-colors">
                Learn More About DAO Governance Platform
              </a>
            </div>

            {/* Zion Academy */}
            <div className="bg-zinc-800 rounded-xl p-8 border border-zinc-700">
              <div className="text-4xl mb-6">🎓</div>
              <h2 className="text-3xl font-bold mb-4">Zion Academy</h2>
              <p className="text-zinc-300 mb-6 text-lg">
                Learning management system with AI-powered course creation, assessments, skill tracking, 
                and personalized learning paths for modern education and training.
              </p>
              
              <div className="space-y-4 mb-8">
                <h3 className="text-xl font-semibold text-purple-400">Key Features:</h3>
                <ul className="space-y-2 text-zinc-300">
                  <li>• AI-powered course creation</li>
                  <li>• Interactive assessments and quizzes</li>
                  <li>• Skill tracking and certification</li>
                  <li>• Personalized learning paths</li>
                  <li>• Video and multimedia support</li>
                  <li>• Progress analytics and reporting</li>
                </ul>
              </div>

              <div className="bg-zinc-700 rounded-lg p-6 mb-6">
                <h4 className="text-lg font-semibold mb-4">Pricing Plans</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span>Basic Plan</span>
                    <span className="text-green-400 font-semibold">$179/month</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Pro Plan</span>
                    <span className="text-green-400 font-semibold">$359/month</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Enterprise Plan</span>
                    <span className="text-green-400 font-semibold">$719/month</span>
                  </div>
                  <div className="text-sm text-zinc-400 mt-2">
                    Setup fee: $1,200 | Custom course templates
                  </div>
                </div>
              </div>

              <a href="https://ziontechgroup.com/academy" className="block w-full text-center bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold transition-colors">
                Learn More About Zion Academy
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SAAS Implementation Process */}
      <section className="py-20 bg-zinc-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">⚡ SAAS Implementation Process</h2>
            <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
              Our streamlined 5-step process ensures rapid deployment and maximum value from your SAAS investment
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="text-center">
              <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-xl font-semibold mb-3">Discovery</h3>
              <p className="text-zinc-300">Understand your business requirements and customize the SAAS solution accordingly.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-xl font-semibold mb-3">Customization</h3>
              <p className="text-zinc-300">Configure the platform with your branding, workflows, and business rules.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-xl font-semibold mb-3">Integration</h3>
              <p className="text-zinc-300">Connect with your existing systems and third-party applications.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">4</div>
              <h3 className="text-xl font-semibold mb-3">Training</h3>
              <p className="text-zinc-300">Comprehensive user training and documentation for your team.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">5</div>
              <h3 className="text-xl font-semibold mb-3">Launch</h3>
              <p className="text-zinc-300">Go-live with ongoing support and continuous optimization.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SAAS Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">🎯 Why Choose Our SAAS Solutions?</h2>
            <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
              Our micro SAAS services deliver immediate value with rapid deployment and proven ROI
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-zinc-800 rounded-xl p-6 border border-zinc-700 text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-3">Rapid Deployment</h3>
              <p className="text-zinc-300">Get up and running in days, not months. Our pre-built solutions require minimal customization.</p>
            </div>
            
            <div className="bg-zinc-800 rounded-xl p-6 border border-zinc-700 text-center">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-semibold mb-3">Cost Effective</h3>
              <p className="text-zinc-300">No large upfront investments. Pay-as-you-go pricing with predictable monthly costs.</p>
            </div>
            
            <div className="bg-zinc-800 rounded-xl p-6 border border-zinc-700 text-center">
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="text-xl font-semibold mb-3">Easy Maintenance</h3>
              <p className="text-zinc-300">We handle updates, security patches, and infrastructure management automatically.</p>
            </div>
            
            <div className="bg-zinc-800 rounded-xl p-6 border border-zinc-700 text-center">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-semibold mb-3">Mobile Ready</h3>
              <p className="text-zinc-300">All solutions are mobile-responsive and work seamlessly across all devices.</p>
            </div>
            
            <div className="bg-zinc-800 rounded-xl p-6 border border-zinc-700 text-center">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-semibold mb-3">Enterprise Security</h3>
              <p className="text-zinc-300">Bank-level security with SOC2 compliance, encryption, and regular security audits.</p>
            </div>
            
            <div className="bg-zinc-800 rounded-xl p-6 border border-zinc-700 text-center">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-semibold mb-3">Analytics & Insights</h3>
              <p className="text-zinc-300">Built-in analytics and reporting to track performance and optimize operations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Deploy Your SAAS Solution?</h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how our micro SAAS services can solve your specific business challenges 
            and accelerate your digital transformation journey.
          </p>
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="tel:+13024640950" className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-purple-50 transition-colors text-lg">
                📞 Call +1 302 464 0950
              </a>
              <a href="mailto:kleber@ziontechgroup.com" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors text-lg">
                ✉️ Schedule SAAS Demo
              </a>
            </div>
            <p className="text-purple-100 text-sm">
              📍 364 E Main St STE 1008, Middletown DE 19709 | 🌐 https://ziontechgroup.com
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}