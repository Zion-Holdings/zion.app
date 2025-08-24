import Link from "next/link";

export const metadata = {
  title: "AI Automation Services - Zion Tech Group",
  description: "Transform your business with intelligent AI automation solutions. Streamline operations, reduce costs, and enhance productivity with our cutting-edge automation technology.",
  keywords: "AI automation, business process automation, intelligent automation, workflow automation, Zion Tech Group",
};

export default function AIAutomationServicesPage() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">AI Automation Services</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Transform your business operations with intelligent automation that learns, adapts, and scales with your needs.
          </p>
        </div>

        {/* Overview Section */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Intelligent Automation for the Modern Enterprise</h2>
              <p className="text-lg text-gray-300 mb-6">
                Our AI automation services combine machine learning, natural language processing, and robotic process automation 
                to create intelligent systems that handle complex business processes with human-like understanding.
              </p>
              <p className="text-lg text-gray-300 mb-8">
                From customer service to supply chain management, our solutions adapt to your business needs and continuously 
                improve performance through advanced analytics and feedback loops.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-primary">
                  Get Started
                </Link>
                <Link href="/case-studies" className="btn-secondary">
                  View Case Studies
                </Link>
              </div>
            </div>
            <div className="card bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-blue-500/30 p-8">
              <h3 className="text-2xl font-bold mb-4">Key Benefits</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  24/7 operational efficiency
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Reduced operational costs by 40-60%
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Improved accuracy and compliance
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Scalable and adaptive solutions
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Our AI Automation Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Process Automation */}
            <div className="card group">
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-500/30 transition-colors">
                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Process Automation</h3>
              <p className="text-gray-400 mb-4">
                Automate repetitive business processes with intelligent workflows that adapt to changing conditions.
              </p>
              <Link href="/ai-autonomous-business-process-automation" className="text-blue-400 hover:text-blue-300 transition-colors text-sm">
                Learn More →
              </Link>
            </div>

            {/* Document Processing */}
            <div className="card group">
              <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-500/30 transition-colors">
                <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Document Processing</h3>
              <p className="text-gray-400 mb-4">
                Extract, classify, and process documents automatically with advanced OCR and NLP capabilities.
              </p>
              <Link href="/ai-content-generation" className="text-green-400 hover:text-green-300 transition-colors text-sm">
                Learn More →
              </Link>
            </div>

            {/* Customer Service Automation */}
            <div className="card group">
              <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-500/30 transition-colors">
                <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Customer Service Automation</h3>
              <p className="text-gray-400 mb-4">
                Provide instant, intelligent customer support with AI-powered chatbots and automated response systems.
              </p>
              <Link href="/ai-assistant" className="text-purple-400 hover:text-purple-300 transition-colors text-sm">
                Learn More →
              </Link>
            </div>

            {/* Data Analytics Automation */}
            <div className="card group">
              <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-yellow-500/30 transition-colors">
                <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Data Analytics Automation</h3>
              <p className="text-gray-400 mb-4">
                Automate data collection, processing, and analysis to generate actionable insights in real-time.
              </p>
              <Link href="/ai-business-intelligence" className="text-yellow-400 hover:text-yellow-300 transition-colors text-sm">
                Learn More →
              </Link>
            </div>

            {/* Supply Chain Automation */}
            <div className="card group">
              <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-red-500/30 transition-colors">
                <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Supply Chain Automation</h3>
              <p className="text-gray-400 mb-4">
                Optimize inventory management, demand forecasting, and logistics with intelligent automation.
              </p>
              <Link href="/ai-autonomous-logistics" className="text-red-400 hover:text-red-300 transition-colors text-sm">
                Learn More →
              </Link>
            </div>

            {/* Compliance Automation */}
            <div className="card group">
              <div className="w-12 h-12 bg-indigo-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-indigo-500/30 transition-colors">
                <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Compliance Automation</h3>
              <p className="text-gray-400 mb-4">
                Ensure regulatory compliance with automated monitoring, reporting, and audit trail systems.
              </p>
              <Link href="/ai-compliance-automation" className="text-indigo-400 hover:text-indigo-300 transition-colors text-sm">
                Learn More →
              </Link>
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Advanced Technology Stack</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card text-center p-6">
              <h4 className="font-semibold mb-2">Machine Learning</h4>
              <p className="text-sm text-gray-400">Advanced ML algorithms for pattern recognition and prediction</p>
            </div>
            <div className="card text-center p-6">
              <h4 className="font-semibold mb-2">Natural Language Processing</h4>
              <p className="text-sm text-gray-400">Understanding and processing human language naturally</p>
            </div>
            <div className="card text-center p-6">
              <h4 className="font-semibold mb-2">Computer Vision</h4>
              <p className="text-sm text-gray-400">Visual recognition and image processing capabilities</p>
            </div>
            <div className="card text-center p-6">
              <h4 className="font-semibold mb-2">Robotic Process Automation</h4>
              <p className="text-sm text-gray-400">Automating repetitive digital tasks and workflows</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="card bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-blue-500/30 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Ready to Automate Your Business?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Join hundreds of companies that have transformed their operations with our AI automation solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Start Your Automation Journey
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