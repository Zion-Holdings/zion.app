import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const Products: NextPage = () => {
  const products = [
    {
      title: "ZionAI Platform",
      description: "Enterprise-grade artificial intelligence platform for predictive analytics, natural language processing, and machine learning workflows.",
      category: "AI & Machine Learning",
      features: [
        "Advanced ML Model Training",
        "Real-time Data Processing",
        "Custom Algorithm Development",
        "Scalable Infrastructure",
        "API Integration Ready",
        "Enterprise Security"
      ],
      pricing: "Custom Pricing",
      image: "/products/zion-ai-platform.jpg",
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "CloudSync Pro",
      description: "Comprehensive cloud migration and management solution for enterprises looking to modernize their infrastructure.",
      category: "Cloud Solutions",
      features: [
        "Multi-Cloud Management",
        "Automated Migration",
        "Cost Optimization",
        "Security Compliance",
        "24/7 Monitoring",
        "Disaster Recovery"
      ],
      pricing: "Starting at $2,500/month",
      image: "/products/cloudsync-pro.jpg",
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "BlockChain Suite",
      description: "Complete blockchain development and deployment solution for secure, transparent business operations.",
      category: "Blockchain",
      features: [
        "Smart Contract Development",
        "DeFi Application Support",
        "NFT Marketplace Tools",
        "Supply Chain Tracking",
        "Regulatory Compliance",
        "Cross-Chain Integration"
      ],
      pricing: "Custom Pricing",
      image: "/products/blockchain-suite.jpg",
      color: "from-green-500 to-green-600"
    },
    {
      title: "DataViz Analytics",
      description: "Powerful business intelligence and data visualization platform that transforms complex data into actionable insights.",
      category: "Data Analytics",
      features: [
        "Interactive Dashboards",
        "Real-time Reporting",
        "Predictive Analytics",
        "Data Integration",
        "Custom Visualizations",
        "Mobile Access"
      ],
      pricing: "Starting at $1,200/month",
      image: "/products/dataviz-analytics.jpg",
      color: "from-red-500 to-red-600"
    },
    {
      title: "WebFlow Studio",
      description: "Modern web development platform for creating responsive, high-performance websites and web applications.",
      category: "Web Development",
      features: [
        "Drag & Drop Builder",
        "Responsive Templates",
        "SEO Optimization",
        "Performance Monitoring",
        "E-commerce Integration",
        "Content Management"
      ],
      pricing: "Starting at $99/month",
      image: "/products/webflow-studio.jpg",
      color: "from-indigo-500 to-indigo-600"
    },
    {
      title: "MobileDev Kit",
      description: "Comprehensive mobile application development toolkit for iOS and Android platforms.",
      category: "Mobile Development",
      features: [
        "Cross-Platform Development",
        "Native Performance",
        "UI/UX Components",
        "Testing Tools",
        "App Store Deployment",
        "Analytics Integration"
      ],
      pricing: "Starting at $299/month",
      image: "/products/mobiledev-kit.jpg",
      color: "from-pink-500 to-pink-600"
    }
  ];

  const categories = [
    "All Products",
    "AI & Machine Learning",
    "Cloud Solutions",
    "Blockchain",
    "Data Analytics",
    "Web Development",
    "Mobile Development"
  ];

  return (
    <>
      <Head>
        <title>Our Products - Zion Tech Group</title>
        <meta name="description" content="Explore Zion Tech Group's innovative technology products including AI platforms, cloud solutions, blockchain tools, and development kits designed for modern businesses." />
        <meta name="keywords" content="technology products, AI platform, cloud solutions, blockchain tools, data analytics, web development, mobile development" />
      </Head>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">Our Products</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Innovative technology solutions designed to transform your business operations and drive digital innovation
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                className="px-6 py-3 bg-white border border-gray-300 rounded-lg hover:bg-blue-50 hover:border-blue-300 transition-colors"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className={`bg-gradient-to-r ${product.color} p-6 rounded-t-xl`}>
                  <div className="text-center">
                    <div className="w-20 h-20 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <span className="text-white text-3xl font-bold">{product.title.charAt(0)}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{product.title}</h3>
                    <span className="inline-block bg-white/20 text-white px-3 py-1 rounded-full text-sm">
                      {product.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-gray-600 mb-6">{product.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {product.features.slice(0, 4).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-600 text-sm">
                          <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <div className="text-2xl font-bold text-gray-900">{product.pricing}</div>
                  </div>
                  
                  <div className="flex gap-3">
                    <Link href="/contact" className={`flex-1 bg-gradient-to-r ${product.color} text-white px-4 py-3 rounded-lg font-medium text-center hover:opacity-90 transition-opacity`}>
                      Get Started
                    </Link>
                    <Link href="/contact" className="flex-1 border border-gray-300 text-gray-700 px-4 py-3 rounded-lg font-medium text-center hover:bg-gray-50 transition-colors">
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Comparison */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Product Comparison</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Compare our products to find the perfect solution for your business needs
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Features</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">ZionAI Platform</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">CloudSync Pro</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">DataViz Analytics</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-900">Starting Price</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-600">Custom</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-600">$2,500/month</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-600">$1,200/month</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-900">24/7 Support</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-600">✓</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-600">✓</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-600">✓</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-900">API Access</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-600">✓</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-600">✓</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-600">✓</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-900">Customization</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-600">Full</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-600">High</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-600">Medium</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Seamless Integration</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our products integrate with your existing technology stack and popular platforms
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔌</span>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900">REST APIs</h3>
              <p className="text-gray-600">Standard REST APIs for easy integration</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">☁️</span>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900">Cloud Native</h3>
              <p className="text-gray-600">Built for modern cloud environments</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔒</span>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900">Enterprise Security</h3>
              <p className="text-gray-600">Bank-level security and compliance</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📱</span>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900">Mobile Ready</h3>
              <p className="text-gray-600">Responsive design for all devices</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact our team to discuss your requirements and get a customized solution for your business.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Request Demo
            </Link>
            <Link href="/contact" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Get Pricing
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;