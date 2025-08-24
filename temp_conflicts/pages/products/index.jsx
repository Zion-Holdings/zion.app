
import Head from 'next/head';
import Link from 'next/link';
import EnhancedLayout from '../../components/layout/EnhancedLayout';

const Products = () => {
  const products = [
    {
      title: "ZionAI Platform",
      description: "Enterprise-grade AI platform for building, deploying, and managing machine learning models at scale.",
      category: "Artificial Intelligence",
      features: ["AutoML Capabilities", "Model Versioning", "Real-time Inference", "Advanced Analytics"],
      pricing: "Custom Pricing",
      image: "🤖",
      href: "/products/zion-ai-platform"
    },
    {
      title: "CloudSync Pro",
      description: "Comprehensive cloud migration and management platform for enterprise infrastructure.",
      category: "Cloud Solutions",
      features: ["Multi-cloud Support", "Cost Optimization", "Security Compliance", "Automated Scaling"],
      pricing: "Starting at $2,999/month",
      image: "☁️",
      href: "/products/cloudsync-pro"
    },
    {
      title: "BlockChain Suite",
      description: "Complete blockchain development and deployment platform for enterprise applications.",
      category: "Blockchain",
      features: ["Smart Contract Templates", "DeFi Tools", "Supply Chain Integration", "Digital Identity"],
      pricing: "Starting at $1,999/month",
      image: "🔗",
      href: "/products/blockchain-suite"
    },
    {
      title: "DataViz Analytics",
      description: "Advanced data visualization and business intelligence platform for data-driven decision making.",
      category: "Data Analytics",
      features: ["Interactive Dashboards", "Real-time Data", "Predictive Modeling", "Custom Reports"],
      pricing: "Starting at $999/month",
      image: "📊",
      href: "/products/dataviz-analytics"
    },
    {
      title: "DevOps Hub",
      description: "Integrated development and operations platform for continuous integration and deployment.",
      category: "DevOps",
      features: ["CI/CD Pipelines", "Container Management", "Monitoring & Alerting", "Security Scanning"],
      pricing: "Starting at $799/month",
      image: "⚙️",
      href: "/products/devops-hub"
    },
    {
      title: "SecureNet Gateway",
      description: "Next-generation cybersecurity platform with advanced threat detection and prevention.",
      category: "Cybersecurity",
      features: ["Threat Intelligence", "Zero Trust Architecture", "Compliance Reporting", "24/7 Monitoring"],
      pricing: "Starting at $1,499/month",
      image: "🛡️",
      href: "/products/securenet-gateway"
    }
  ];

  const categories = ["All", "Artificial Intelligence", "Cloud Solutions", "Blockchain", "Data Analytics", "DevOps", "Cybersecurity"];

  return (
    <EnhancedLayout>
      <Head>
        <title>Our Products - Zion Tech Group</title>
        <meta name="description" content="Explore Zion Tech Group's innovative technology products including AI platforms, cloud solutions, blockchain tools, and more. Transform your business with our cutting-edge products." />
      </Head>
      
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Our Technology Products
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our suite of innovative technology products designed to accelerate 
            your digital transformation and drive business growth.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                category === "All" 
                  ? "bg-blue-600 text-white" 
                  : "bg-white text-gray-700 hover:bg-blue-50 border border-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {products.map((product, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-6">
                <div className="text-4xl mb-4">{product.image}</div>
                <div className="mb-2">
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                    {product.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{product.title}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-medium text-gray-900 mb-2">Key Features:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <span className="text-green-500 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-4">
                  <span className="text-lg font-semibold text-blue-600">{product.pricing}</span>
                </div>
                
                <Link href={product.href} className="block w-full text-center bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Enterprise Solutions */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Enterprise Solutions</h2>
            <p className="text-xl text-gray-600">
              Custom-built solutions tailored to your specific business needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🏢</div>
              <h3 className="text-lg font-semibold mb-2">Custom Development</h3>
              <p className="text-gray-600">
                Tailored solutions built specifically for your business requirements
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="text-lg font-semibold mb-2">Integration Services</h3>
              <p className="text-gray-600">
                Seamless integration with your existing systems and workflows
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-lg font-semibold mb-2">Training & Support</h3>
              <p className="text-gray-600">
                Comprehensive training and ongoing support for your team
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-blue-900 text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-blue-100 mb-6">
            Schedule a demo or consultation to see how our products can transform your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Request Demo
            </Link>
            <Link href="/contact" className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors">
              Contact Sales
            </Link>
          </div>
        </div>
      </main>
    </EnhancedLayout>
  );
};

export default Products;