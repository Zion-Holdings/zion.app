import React, { useState } from 'react';
import Head from 'next/head';

export default function PlaygroundPage() {
  const [selectedDemo, setSelectedDemo] = useState('content-generation');
  const [demoInput, setDemoInput] = useState('');
  const [demoOutput, setDemoOutput] = useState('');

  const demos = [
    {
      id: 'content-generation',
      name: 'AI Content Generation',
      description: 'Generate content using our AI-powered system',
      icon: '✍️',
      placeholder: 'Enter a topic or description...'
    },
    {
      id: 'cloud-automation',
      name: 'Cloud Automation',
      description: 'Test autonomous cloud management features',
      icon: '☁️',
      placeholder: 'Enter cloud configuration...'
    },
    {
      id: 'devops-pipeline',
      name: 'DevOps Pipeline',
      description: 'Experience self-healing CI/CD workflows',
      icon: '🔄',
      placeholder: 'Enter deployment parameters...'
    },
    {
      id: 'security-scan',
      name: 'Security Scanner',
      description: 'Test automated security analysis',
      icon: '🔒',
      placeholder: 'Enter security test case...'
    }
  ];

  const runDemo = () => {
    if (!demoInput.trim()) return;

    // Simulate AI processing
    setDemoOutput('Processing...');
    
    setTimeout(() => {
      let output = '';
      switch (selectedDemo) {
        case 'content-generation':
          output = `Generated content for: "${demoInput}"\n\nHere's a comprehensive article about ${demoInput} that demonstrates our AI's ability to create engaging, informative content. The system automatically optimizes for SEO, maintains brand consistency, and adapts to your target audience.\n\nKey benefits of ${demoInput} include improved efficiency, cost savings, and enhanced user experience. Our autonomous content generation system ensures high-quality output while maintaining your brand voice and style guidelines.`;
          break;
        case 'cloud-automation':
          output = `Cloud automation initiated for: "${demoInput}"\n\n✅ Auto-scaling configuration applied\n✅ Load balancing optimized\n✅ Cost optimization algorithms activated\n✅ Performance monitoring enabled\n\nYour cloud infrastructure is now running autonomously with intelligent resource management and automatic scaling based on demand.`;
          break;
        case 'devops-pipeline':
          output = `DevOps pipeline executed for: "${demoInput}"\n\n🚀 Build process completed successfully\n🧪 Automated testing passed (100% coverage)\n🔍 Code quality analysis: Excellent\n📦 Deployment to staging environment\n✅ Health checks passed\n\nPipeline completed in 2.3 minutes with zero manual intervention.`;
          break;
        case 'security-scan':
          output = `Security scan completed for: "${demoInput}"\n\n🔍 Vulnerability assessment: Complete\n✅ No critical vulnerabilities found\n✅ Security best practices verified\n✅ Compliance checks passed\n🛡️ Threat detection: Active\n\nYour system security status: EXCELLENT (Score: 98/100)`;
          break;
        default:
          output = 'Demo completed successfully!';
      }
      setDemoOutput(output);
    }, 2000);
  };

  return (
    <>
      <Head>
        <title>Playground | Zion - Try AI & Automation</title>
        <meta name="description" content="Experience Zion's autonomous systems firsthand with interactive demos and live demonstrations." />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Zion Playground
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Experience autonomous automation firsthand with interactive demos and live demonstrations
            </p>
          </div>
        </div>

        {/* Demo Selection */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Choose Your Demo</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {demos.map((demo) => (
              <button
                key={demo.id}
                onClick={() => setSelectedDemo(demo.id)}
                className={`p-6 rounded-xl border-2 transition-all duration-300 ${
                  selectedDemo === demo.id
                    ? 'border-blue-500 bg-blue-50 shadow-lg'
                    : 'border-gray-200 bg-white hover:border-blue-300 hover:shadow-md'
                }`}
              >
                <div className="text-4xl mb-4">{demo.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{demo.name}</h3>
                <p className="text-gray-600 text-sm">{demo.description}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Interactive Demo */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="text-center mb-8">
              <div className="text-6xl mb-4">
                {demos.find(d => d.id === selectedDemo)?.icon}
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                {demos.find(d => d.id === selectedDemo)?.name}
              </h2>
              <p className="text-gray-600">
                {demos.find(d => d.id === selectedDemo)?.description}
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Input
                </label>
                <textarea
                  value={demoInput}
                  onChange={(e) => setDemoInput(e.target.value)}
                  placeholder={demos.find(d => d.id === selectedDemo)?.placeholder}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  rows={4}
                />
              </div>

              <div className="text-center">
                <button
                  onClick={runDemo}
                  disabled={!demoInput.trim()}
                  className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-semibold py-3 px-8 rounded-lg transition-colors"
                >
                  Run Demo
                </button>
              </div>

              {demoOutput && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Output
                  </label>
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                    <pre className="whitespace-pre-wrap text-sm text-gray-800 font-mono">
                      {demoOutput}
                    </pre>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Demo Features */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">What You Can Experience</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">AI Intelligence</h3>
              <p className="text-gray-600">
                See how our AI systems understand context, learn from interactions, and provide intelligent responses.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Real-time Processing</h3>
              <p className="text-gray-600">
                Experience the speed and efficiency of autonomous systems that process requests in real-time.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="text-4xl mb-4">🔄</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Continuous Learning</h3>
              <p className="text-gray-600">
                Watch as our systems improve with each interaction, demonstrating true autonomous behavior.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Experience More?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            The playground is just the beginning. Discover how Zion can transform your operations with autonomous automation.
          </p>
          <div className="space-x-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
              Get Started
            </button>
            <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 px-8 rounded-lg transition-colors">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </>
  );
}