"use client";

export default function AIAutomationPage() {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">AI Workflow Automation</h1>
        <p className="text-xl opacity-80 max-w-3xl mx-auto">
          Transform your business processes with intelligent automation powered by cutting-edge AI technology
        </p>
      </div>

      {/* Service Overview */}
      <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-lg p-6 text-white">
        <h2 className="text-2xl font-bold mb-4">Why Choose AI Automation?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-3xl mb-2">⚡</div>
            <div className="font-semibold">10x Faster</div>
            <div className="text-sm opacity-90">Process execution speed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-2">💰</div>
            <div className="font-semibold">70% Cost Reduction</div>
            <div className="text-sm opacity-90">Operational expenses</div>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-2">🎯</div>
            <div className="font-semibold">99.9% Accuracy</div>
            <div className="text-sm opacity-90">Error-free operations</div>
          </div>
        </div>
      </div>

      {/* Service Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">Process Automation</h2>
          
          <div className="space-y-4">
            <div className="bg-zinc-900 border border-white/10 rounded-lg p-4">
              <h3 className="font-semibold mb-2">🤖 Document Processing</h3>
              <p className="text-sm opacity-80 mb-3">Automated document classification, extraction, and processing</p>
              <ul className="text-xs space-y-1 opacity-70">
                <li>• Invoice processing automation</li>
                <li>• Contract analysis and review</li>
                <li>• Form data extraction</li>
                <li>• Document routing and approval</li>
              </ul>
              <div className="mt-3 text-blue-400 text-sm">Starting at $499/month</div>
            </div>

            <div className="bg-zinc-900 border border-white/10 rounded-lg p-4">
              <h3 className="font-semibold mb-2">📧 Email & Communication</h3>
              <p className="text-sm opacity-80 mb-3">Intelligent email management and automated responses</p>
              <ul className="text-xs space-y-1 opacity-70">
                <li>• Smart email categorization</li>
                <li>• Automated response generation</li>
                <li>• Meeting scheduling automation</li>
                <li>• Customer inquiry routing</li>
              </ul>
              <div className="mt-3 text-blue-400 text-sm">Starting at $299/month</div>
            </div>

            <div className="bg-zinc-900 border border-white/10 rounded-lg p-4">
              <h3 className="font-semibold mb-2">📊 Data Analysis & Reporting</h3>
              <p className="text-sm opacity-80 mb-3">Automated data processing and insight generation</p>
              <ul className="text-xs space-y-1 opacity-70">
                <li>• Real-time data monitoring</li>
                <li>• Automated report generation</li>
                <li>• Anomaly detection</li>
                <li>• Predictive analytics</li>
              </ul>
              <div className="mt-3 text-blue-400 text-sm">Starting at $399/month</div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">Industry Solutions</h2>
          
          <div className="space-y-4">
            <div className="bg-zinc-900 border border-white/10 rounded-lg p-4">
              <h3 className="font-semibold mb-2">🏥 Healthcare Automation</h3>
              <p className="text-sm opacity-80 mb-3">Patient care optimization and administrative automation</p>
              <ul className="text-xs space-y-1 opacity-70">
                <li>• Appointment scheduling optimization</li>
                <li>• Medical record processing</li>
                <li>• Insurance claim automation</li>
                <li>• Patient communication workflows</li>
              </ul>
              <div className="mt-3 text-blue-400 text-sm">Starting at $799/month</div>
            </div>

            <div className="bg-zinc-900 border border-white/10 rounded-lg p-4">
              <h3 className="font-semibold mb-2">🏦 Financial Services</h3>
              <p className="text-sm opacity-80 mb-3">Compliance, risk management, and customer service automation</p>
              <ul className="text-xs space-y-1 opacity-70">
                <li>• Fraud detection automation</li>
                <li>• Compliance monitoring</li>
                <li>• Customer onboarding</li>
                <li>• Risk assessment workflows</li>
              </ul>
              <div className="mt-3 text-blue-400 text-sm">Starting at $999/month</div>
            </div>

            <div className="bg-zinc-900 border border-white/10 rounded-lg p-4">
              <h3 className="font-semibold mb-2">🏭 Manufacturing & Supply Chain</h3>
              <p className="text-sm opacity-80 mb-3">Production optimization and supply chain automation</p>
              <ul className="text-xs space-y-1 opacity-70">
                <li>• Quality control automation</li>
                <li>• Inventory optimization</li>
                <li>• Predictive maintenance</li>
                <li>• Supply chain monitoring</li>
              </ul>
              <div className="mt-3 text-blue-400 text-sm">Starting at $699/month</div>
            </div>
          </div>
        </div>
      </div>

      {/* Implementation Process */}
      <div className="bg-zinc-900 border border-white/10 rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-6 text-center">Implementation Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-2xl mb-2">🔍</div>
            <div className="font-semibold">Discovery</div>
            <div className="text-sm opacity-80">Process analysis & mapping</div>
          </div>
          <div className="text-center">
            <div className="text-2xl mb-2">📋</div>
            <div className="font-semibold">Design</div>
            <div className="text-sm opacity-80">Workflow architecture</div>
          </div>
          <div className="text-center">
            <div className="text-2xl mb-2">⚙️</div>
            <div className="font-semibold">Development</div>
            <div className="text-sm opacity-80">AI model training & integration</div>
          </div>
          <div className="text-center">
            <div className="text-2xl mb-2">🚀</div>
            <div className="font-semibold">Deployment</div>
            <div className="text-sm opacity-80">Testing & optimization</div>
          </div>
        </div>
      </div>

      {/* Pricing Tiers */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-center">Pricing Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-zinc-900 border border-white/10 rounded-lg p-6 text-center">
            <h3 className="text-xl font-semibold mb-2">Starter</h3>
            <div className="text-3xl font-bold mb-4">$299<span className="text-lg">/month</span></div>
            <ul className="text-sm space-y-2 mb-6 opacity-80">
              <li>• Up to 5 automated workflows</li>
              <li>• Basic AI models</li>
              <li>• Email support</li>
              <li>• Standard integrations</li>
            </ul>
            <a href="mailto:kleber@ziontechgroup.com?subject=AI Automation Starter Plan" className="block w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium transition-colors">
              Get Started
            </a>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-6 text-center text-white relative">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-semibold">
              Most Popular
            </div>
            <h3 className="text-xl font-semibold mb-2">Professional</h3>
            <div className="text-3xl font-bold mb-4">$799<span className="text-lg">/month</span></div>
            <ul className="text-sm space-y-2 mb-6 opacity-90">
              <li>• Up to 20 automated workflows</li>
              <li>• Advanced AI models</li>
              <li>• Priority support</li>
              <li>• Custom integrations</li>
              <li>• Analytics dashboard</li>
            </ul>
            <a href="mailto:kleber@ziontechgroup.com?subject=AI Automation Professional Plan" className="block w-full bg-white text-blue-600 py-2 px-4 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              Get Started
            </a>
          </div>

          <div className="bg-zinc-900 border border-white/10 rounded-lg p-6 text-center">
            <h3 className="text-xl font-semibold mb-2">Enterprise</h3>
            <div className="text-3xl font-bold mb-4">Custom</div>
            <ul className="text-sm space-y-2 mb-6 opacity-80">
              <li>• Unlimited workflows</li>
              <li>• Custom AI model training</li>
              <li>• 24/7 dedicated support</li>
              <li>• Full customization</li>
              <li>• On-premise deployment</li>
            </ul>
            <a href="mailto:kleber@ziontechgroup.com?subject=AI Automation Enterprise Plan" className="block w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium transition-colors">
              Contact Sales
            </a>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-8 text-white text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to Automate Your Business?</h2>
        <p className="opacity-90 mb-6 max-w-2xl mx-auto">
          Let our AI experts analyze your processes and create a customized automation strategy that will transform your operations.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:kleber@ziontechgroup.com?subject=AI Automation Consultation"
            className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Schedule Consultation
          </a>
          <a
            href="tel:+13024640950"
            className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
          >
            Call +1 302 464 0950
          </a>
        </div>
      </div>
    </div>
  );
}