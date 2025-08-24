
import Head from 'next/head';
import Link from 'next/link';
import EnhancedLayout from '../../components/layout/EnhancedLayout';

const Services = () => {
  const services = [
    {
      title: "AI Development",
      description: "Custom AI solutions and machine learning models for your business needs.",
      icon: "🤖",
      href: "/services/ai-development",
      features: ["Machine Learning Models", "Natural Language Processing", "Computer Vision", "Predictive Analytics"]
    },
    {
      title: "Cloud Services",
      description: "Scalable cloud solutions and infrastructure design for modern applications.",
      icon: "☁️",
      href: "/services/cloud-services",
      features: ["Cloud Migration", "Infrastructure Design", "DevOps Automation", "Scalability Solutions"]
    },
    {
      title: "Blockchain Solutions",
      description: "Innovative blockchain technology for secure and transparent business processes.",
      icon: "🔗",
      href: "/services/blockchain",
      features: ["Smart Contracts", "DeFi Applications", "Supply Chain Solutions", "Digital Identity"]
    },
    {
      title: "Data Analytics",
      description: "Transform your data into actionable insights with advanced analytics.",
      icon: "📊",
      href: "/services/data-analytics",
      features: ["Business Intelligence", "Data Visualization", "Predictive Modeling", "Real-time Analytics"]
    },
    {
      title: "Web Development",
      description: "Modern, responsive web applications built with cutting-edge technologies.",
      icon: "🌐",
      href: "/services/web-development",
      features: ["React/Next.js", "Full-Stack Development", "E-commerce Solutions", "Progressive Web Apps"]
    },
    {
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications for iOS and Android.",
      icon: "📱",
      href: "/services/mobile-development",
      features: ["iOS Development", "Android Development", "Cross-Platform Apps", "App Store Optimization"]
    }
  ];

  return (
    <EnhancedLayout>
      <Head>
        <title>Our Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive technology services including AI development, cloud solutions, blockchain, and more. Transform your business with Zion Tech Group." />
      </Head>
      
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Our Technology Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide cutting-edge technology solutions to help businesses innovate, 
            scale, and succeed in the digital age.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <ul className="text-sm text-gray-500 mb-6 space-y-1">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <Link href={service.href} className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Learn More
              </Link>
            </div>
          ))}
        </div>
        
        <div className="bg-blue-900 text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-blue-100 mb-6">
            Let's discuss how our technology services can transform your business.
          </p>
          <Link href="/contact" className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Contact Us Today
          </Link>
        </div>
      </main>
    </EnhancedLayout>
  );
};

export default Services;