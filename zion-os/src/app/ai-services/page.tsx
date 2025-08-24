import Link from "next/link";

export const metadata = {
  title: "AI Services - Zion Tech Group | Artificial Intelligence & Machine Learning Solutions",
  description: "Transform your business with Zion Tech Group's cutting-edge AI services including autonomous operations, business intelligence, content generation, and research automation.",
  keywords: "AI services, artificial intelligence, machine learning, autonomous business, business intelligence, content generation, Zion Tech Group",
};

export default function AIServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            AI & <span className="gradient-text">Machine Learning</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Harness the power of artificial intelligence to automate operations, 
            enhance decision-making, and create intelligent business processes.
          </p>
        </div>
      </section>

      {/* AI Services Overview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Transform Your Business with AI
              </h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Our AI solutions are designed to help businesses of all sizes leverage 
                the power of artificial intelligence to gain competitive advantages, 
                improve efficiency, and drive innovation.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                From autonomous business operations to intelligent content generation, 
                we provide end-to-end AI solutions that integrate seamlessly with 
                your existing infrastructure.
              </p>
            </div>
            <div className="card bg-gradient-to-br from-blue-600/20 to-purple-600/20 border-blue-500/30 p-8">
              <h3 className="text-2xl font-bold mb-4">Why Choose Our AI Services?</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Custom-built solutions for your specific needs
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Enterprise-grade security and compliance
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  24/7 support and maintenance
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Scalable solutions that grow with your business
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* AI Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600/10 to-purple-600/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our AI Solutions
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive AI services designed to address your most pressing business challenges
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Autonomous Business Operations */}
            <div className="card group">
              <div className="w-16 h-16 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-500/30 transition-colors">
                <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Autonomous Business Operations</h3>
              <p className="text-gray-400 mb-4">
                Automate complex business processes with AI-powered decision-making systems.
              </p>
              <ul className="space-y-2 mb-6 text-sm text-gray-300">
                <li>• Process automation & optimization</li>
                <li>• Intelligent workflow management</li>
                <li>• Predictive maintenance</li>
                <li>• Resource allocation optimization</li>
              </ul>
              <Link href="/ai-autonomous-business-operations" className="text-blue-400 hover:text-blue-300 text-sm font-medium">
                Learn More →
              </Link>
            </div>

            {/* Business Intelligence */}
            <div className="card group">
              <div className="w-16 h-16 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-500/30 transition-colors">
                <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Business Intelligence & Analytics</h3>
              <p className="text-gray-400 mb-4">
                Transform data into actionable insights with advanced AI analytics.
              </p>
              <ul className="space-y-2 mb-6 text-sm text-gray-300">
                <li>• Predictive analytics & forecasting</li>
                <li>• Real-time data processing</li>
                <li>• Customer behavior analysis</li>
                <li>• Performance optimization insights</li>
              </ul>
              <Link href="/ai-business-intelligence" className="text-purple-400 hover:text-purple-300 text-sm font-medium">
                Learn More →
              </Link>
            </div>

            {/* Content Generation */}
            <div className="card group">
              <div className="w-16 h-16 bg-green-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-500/30 transition-colors">
                <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">AI Content Generation</h3>
              <p className="text-gray-400 mb-4">
                Create high-quality, engaging content at scale with AI-powered tools.
              </p>
              <ul className="space-y-2 mb-6 text-sm text-gray-300">
                <li>• Automated content creation</li>
                <li>• Multi-language support</li>
                <li>• SEO optimization</li>
                <li>• Brand voice consistency</li>
              </ul>
              <Link href="/ai-content-generator" className="text-green-400 hover:text-green-300 text-sm font-medium">
                Learn More →
              </Link>
            </div>

            {/* Research Automation */}
            <div className="card group">
              <div className="w-16 h-16 bg-red-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-500/30 transition-colors">
                <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Research & Development</h3>
              <p className="text-gray-400 mb-4">
                Accelerate research with AI-powered data analysis and insights.
              </p>
              <ul className="space-y-2 mb-6 text-sm text-gray-300">
                <li>• Data mining & analysis</li>
                <li>• Pattern recognition</li>
                <li>• Hypothesis generation</li>
                <li>• Research optimization</li>
              </ul>
              <Link href="/ai-autonomous-research-assistant" className="text-red-400 hover:text-red-300 text-sm font-medium">
                Learn More →
              </Link>
            </div>

            {/* AI Agents */}
            <div className="card group">
              <div className="w-16 h-16 bg-yellow-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-yellow-500/30 transition-colors">
                <svg className="w-8 h-8 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">AI Agents & Assistants</h3>
              <p className="text-gray-400 mb-4">
                Deploy intelligent AI agents to handle complex tasks and interactions.
              </p>
              <ul className="space-y-2 mb-6 text-sm text-gray-300">
                <li>• Virtual assistants</li>
                <li>• Customer service bots</li>
                <li>• Task automation</li>
                <li>• Intelligent routing</li>
              </ul>
              <Link href="/ai-agents" className="text-yellow-400 hover:text-yellow-300 text-sm font-medium">
                Learn More →
              </Link>
            </div>

            {/* AI Governance */}
            <div className="card group">
              <div className="w-16 h-16 bg-indigo-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-indigo-500/30 transition-colors">
                <svg className="w-8 h-8 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">AI Governance & Ethics</h3>
              <p className="text-gray-400 mb-4">
                Ensure responsible AI deployment with governance frameworks.
              </p>
              <ul className="space-y-2 mb-6 text-sm text-gray-300">
                <li>• Ethical AI guidelines</li>
                <li>• Bias detection & mitigation</li>
                <li>• Transparency & explainability</li>
                <li>• Compliance frameworks</li>
              </ul>
              <Link href="/ai-governance" className="text-indigo-400 hover:text-indigo-300 text-sm font-medium">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* AI Technology Stack */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our AI Technology Stack
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Built on cutting-edge technologies and frameworks for maximum performance and scalability
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card text-center">
              <div className="w-16 h-16 bg-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-400">ML</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Machine Learning</h3>
              <p className="text-gray-400 text-sm">
                TensorFlow, PyTorch, Scikit-learn
              </p>
            </div>
            
            <div className="card text-center">
              <div className="w-16 h-16 bg-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-400">NLP</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Natural Language Processing</h3>
              <p className="text-gray-400 text-sm">
                GPT, BERT, Transformers
              </p>
            </div>
            
            <div className="card text-center">
              <div className="w-16 h-16 bg-green-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-400">CV</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Computer Vision</h3>
              <p className="text-gray-400 text-sm">
                OpenCV, YOLO, ResNet
              </p>
            </div>
            
            <div className="card text-center">
              <div className="w-16 h-16 bg-red-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-red-400">RL</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Reinforcement Learning</h3>
              <p className="text-gray-400 text-sm">
                Stable Baselines, Gym
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600/10 to-purple-600/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              AI Use Cases
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Real-world applications of our AI solutions across various industries
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card">
              <h3 className="text-xl font-semibold mb-3">Healthcare</h3>
              <p className="text-gray-400 mb-4">
                Medical image analysis, drug discovery, patient care optimization, and predictive diagnostics.
              </p>
            </div>
            
            <div className="card">
              <h3 className="text-xl font-semibold mb-3">Finance</h3>
              <p className="text-gray-400 mb-4">
                Fraud detection, risk assessment, algorithmic trading, and customer service automation.
              </p>
            </div>
            
            <div className="card">
              <h3 className="text-xl font-semibold mb-3">Manufacturing</h3>
              <p className="text-gray-400 mb-4">
                Predictive maintenance, quality control, supply chain optimization, and production planning.
              </p>
            </div>
            
            <div className="card">
              <h3 className="text-xl font-semibold mb-3">Retail</h3>
              <p className="text-gray-400 mb-4">
                Customer segmentation, demand forecasting, inventory management, and personalized marketing.
              </p>
            </div>
            
            <div className="card">
              <h3 className="text-xl font-semibold mb-3">Transportation</h3>
              <p className="text-gray-400 mb-4">
                Route optimization, autonomous vehicles, traffic prediction, and fleet management.
              </p>
            </div>
            
            <div className="card">
              <h3 className="text-xl font-semibold mb-3">Education</h3>
              <p className="text-gray-400 mb-4">
                Personalized learning, content generation, student performance analysis, and adaptive testing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="card bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-blue-500/30">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Harness the Power of AI?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our AI solutions can transform your business 
              and give you a competitive edge in the market.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary text-lg px-8 py-4">
                Get Started
              </Link>
              <Link href="/case-studies" className="btn-secondary text-lg px-8 py-4">
                View Case Studies
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}