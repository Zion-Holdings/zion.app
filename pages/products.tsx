import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const Products: NextPage = () => {
  const featuredProducts = [
    {
      name: "SmartDoc AI",
      description: "AI-powered document processing and automation platform that revolutionizes how businesses handle documents. Features intelligent OCR, automated data extraction, and workflow automation.",
      price: "$99/month",
      category: "AI Automation",
      features: [
        "Intelligent document processing",
        "Automated data extraction",
        "Workflow automation",
        "Multi-format support",
        "Cloud-based storage",
        "Real-time collaboration",
        "Advanced security",
        "API integration",
        "Custom templates",
        "Analytics dashboard"
      ],
      benefits: [
        "Reduce manual data entry by 80%",
        "Process documents 10x faster",
        "Improve accuracy to 99.9%",
        "Save 20+ hours per week"
      ],
      useCases: [
        "Invoice processing",
        "Contract analysis",
        "Form automation",
        "Document archiving"
      ],
      technology: ["AI/ML", "OCR", "Natural Language Processing", "Cloud Computing"],
      integrations: ["Salesforce", "QuickBooks", "Microsoft Office", "Google Workspace"],
      icon: "📄",
      color: "from-blue-500 to-cyan-600"
    },
    {
      name: "DataViz Pro",
      description: "Advanced business intelligence and data visualization platform that transforms complex data into actionable insights. Features interactive dashboards, real-time analytics, and predictive modeling.",
      price: "$149/month",
      category: "Business Intelligence",
      features: [
        "Interactive dashboards",
        "Real-time analytics",
        "Predictive modeling",
        "Data storytelling",
        "Custom visualizations",
        "Automated reporting",
        "Data connectors",
        "Mobile optimization",
        "Team collaboration",
        "Advanced filtering"
      ],
      benefits: [
        "Make data-driven decisions faster",
        "Identify trends and patterns",
        "Improve business performance",
        "Reduce reporting time by 70%"
      ],
      useCases: [
        "Sales analytics",
        "Marketing performance",
        "Financial reporting",
        "Operational metrics"
      ],
      technology: ["Data Analytics", "Machine Learning", "Visualization", "Real-time Processing"],
      integrations: ["Google Analytics", "HubSpot", "Salesforce", "Excel", "Slack"],
      icon: "📊",
      color: "from-green-500 to-emerald-600"
    },
    {
      name: "CloudSync Manager",
      description: "Multi-cloud management and optimization platform that provides unified control over all your cloud resources. Features cost optimization, performance monitoring, and automated scaling.",
      price: "$199/month",
      category: "Cloud Management",
      features: [
        "Multi-cloud management",
        "Cost optimization",
        "Performance monitoring",
        "Automated scaling",
        "Security compliance",
        "Resource scheduling",
        "Backup automation",
        "Disaster recovery",
        "API management",
        "Cost analytics"
      ],
      benefits: [
        "Reduce cloud costs by 30-50%",
        "Improve performance by 40%",
        "Ensure 99.9% uptime",
        "Simplify multi-cloud operations"
      ],
      useCases: [
        "Infrastructure management",
        "Cost optimization",
        "Performance monitoring",
        "Security compliance"
      ],
      technology: ["Cloud Computing", "DevOps", "Automation", "Monitoring"],
      integrations: ["AWS", "Azure", "Google Cloud", "Kubernetes", "Docker"],
      icon: "☁️",
      color: "from-purple-500 to-pink-600"
    }
  ];

  const additionalProducts = [
    {
      name: "AI Chatbot Suite",
      description: "Intelligent chatbot platform with natural language processing and multi-channel support.",
      price: "$79/month",
      category: "AI & Automation",
      icon: "🤖",
      color: "from-indigo-500 to-blue-600"
    },
    {
      name: "Security Sentinel",
      description: "Comprehensive cybersecurity platform with threat detection and automated response.",
      price: "$129/month",
      category: "Cybersecurity",
      icon: "🛡️",
      color: "from-red-500 to-orange-600"
    },
    {
      name: "Workflow Orchestrator",
      description: "Business process automation platform with visual workflow designer.",
      price: "$89/month",
      category: "Automation",
      icon: "⚡",
      color: "from-yellow-500 to-orange-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <Head>
        <title>Products - Zion Tech Group | Innovative Technology Solutions</title>
        <meta name="description" content="Discover our cutting-edge products designed to transform your business operations. From AI automation to cloud management, we have the solutions you need." />
        <meta name="keywords" content="AI products, business intelligence, cloud management, automation tools, technology solutions" />
      </Head>

      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Revolutionary Products
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
            Discover our suite of innovative products designed to transform your business operations. 
            Built with cutting-edge technology and designed for maximum impact.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
            <span>🚀 6+ Innovative Products</span>
            <span>⚡ Instant Setup</span>
            <span>🤖 AI-Powered</span>
            <span>💰 Competitive Pricing</span>
          </div>
        </div>

        {/* Featured Products */}
        <section className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Featured Products
          </h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                {/* Product Header */}
                <div className={`bg-gradient-to-r ${product.color} p-6 text-white`}>
                  <div className="text-4xl mb-3">{product.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                  <span className="inline-block bg-white/20 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {product.category}
                  </span>
                </div>

                {/* Product Content */}
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  
                  {/* Price */}
                  <div className="mb-6">
                    <span className="text-3xl font-bold text-gray-900">{product.price}</span>
                    <span className="text-gray-500 text-lg">/month</span>
                  </div>

                  {/* Key Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-700 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-center">
                          <span className="text-green-500 mr-2">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Benefits */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-700 mb-3">Key Benefits:</h4>
                    <ul className="space-y-2">
                      {product.benefits.map((benefit, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-center">
                          <span className="text-blue-500 mr-2">→</span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Use Cases */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-700 mb-3">Use Cases:</h4>
                    <div className="flex flex-wrap gap-2">
                      {product.useCases.map((useCase, idx) => (
                        <span key={idx} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs">
                          {useCase}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Technology */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-700 mb-3">Technology:</h4>
                    <div className="flex flex-wrap gap-2">
                      {product.technology.map((tech, idx) => (
                        <span key={idx} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Integrations */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-700 mb-3">Integrations:</h4>
                    <div className="flex flex-wrap gap-2">
                      {product.integrations.map((integration, idx) => (
                        <span key={idx} className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs">
                          {integration}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <a
                      href="/contact"
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-center py-3 px-4 rounded-lg font-medium transition-colors duration-200"
                    >
                      Get Started
                    </a>
                    <a
                      href="/contact"
                      className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 text-center py-3 px-4 rounded-lg font-medium transition-colors duration-200"
                    >
                      Request Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Additional Products */}
        <section className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            More Solutions
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {additionalProducts.map((product, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6">
                <div className={`bg-gradient-to-r ${product.color} w-16 h-16 rounded-lg flex items-center justify-center text-2xl text-white mb-4`}>
                  {product.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-3">{product.description}</p>
                <div className="mb-4">
                  <span className="text-2xl font-bold text-gray-900">{product.price}</span>
                  <span className="text-gray-500">/month</span>
                </div>
                <a
                  href="/contact"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white text-center py-2 px-4 rounded-lg font-medium transition-colors duration-200"
                >
                  Learn More
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Product Comparison */}
        <section className="mb-20">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
              Product Comparison
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-4 px-4 font-semibold text-gray-900">Feature</th>
                    <th className="text-center py-4 px-4 font-semibold text-gray-900">SmartDoc AI</th>
                    <th className="text-center py-4 px-4 font-semibold text-gray-900">DataViz Pro</th>
                    <th className="text-center py-4 px-4 font-semibold text-gray-900">CloudSync Manager</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4 font-medium text-gray-700">Starting Price</td>
                    <td className="py-3 px-4 text-center text-blue-600 font-semibold">$99/month</td>
                    <td className="py-3 px-4 text-center text-green-600 font-semibold">$149/month</td>
                    <td className="py-3 px-4 text-center text-purple-600 font-semibold">$199/month</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4 font-medium text-gray-700">Free Trial</td>
                    <td className="py-3 px-4 text-center">14 days</td>
                    <td className="py-3 px-4 text-center">14 days</td>
                    <td className="py-3 px-4 text-center">21 days</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4 font-medium text-gray-700">Setup Time</td>
                    <td className="py-3 px-4 text-center">15 minutes</td>
                    <td className="py-3 px-4 text-center">1 hour</td>
                    <td className="py-3 px-4 text-center">2-4 hours</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4 font-medium text-gray-700">API Access</td>
                    <td className="py-3 px-4 text-center">✓</td>
                    <td className="py-3 px-4 text-center">✓</td>
                    <td className="py-3 px-4 text-center">✓</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4 font-medium text-gray-700">Mobile App</td>
                    <td className="py-3 px-4 text-center">✓</td>
                    <td className="py-3 px-4 text-center">✓</td>
                    <td className="py-3 px-4 text-center">✓</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium text-gray-700">24/7 Support</td>
                    <td className="py-3 px-4 text-center">✓</td>
                    <td className="py-3 px-4 text-center">✓</td>
                    <td className="py-3 px-4 text-center">✓</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Choose the perfect product for your business needs and start transforming your operations today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300"
              >
                Get Started Today
              </a>
              <a
                href="tel:+13024640950"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300"
              >
                Call +1 302 464 0950
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Products;