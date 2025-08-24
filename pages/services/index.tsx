import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const ServicesPage: NextPage = () => {
  const services = [
    // AI & Machine Learning Services
    {
      category: "AI & Machine Learning",
      services: [
        {
          name: "Custom AI Model Development",
          description: "Tailored machine learning models for your specific business needs. From predictive analytics to natural language processing.",
          features: ["Custom algorithm development", "Model training & optimization", "API integration", "Performance monitoring"],
          pricing: "$5,000 - $25,000",
          link: "https://ziontechgroup.com/services/ai-development",
          icon: "🤖"
        },
        {
          name: "AI-Powered Business Intelligence",
          description: "Transform your data into actionable insights with AI-driven analytics and reporting systems.",
          features: ["Real-time analytics", "Predictive modeling", "Custom dashboards", "Automated reporting"],
          pricing: "$3,000 - $15,000",
          link: "https://ziontechgroup.com/services/business-intelligence",
          icon: "📊"
        },
        {
          name: "Natural Language Processing Solutions",
          description: "Build intelligent chatbots, sentiment analysis tools, and language understanding systems.",
          features: ["Chatbot development", "Sentiment analysis", "Text classification", "Language translation"],
          pricing: "$2,500 - $12,000",
          link: "https://ziontechgroup.com/services/nlp-solutions",
          icon: "💬"
        }
      ]
    },
    // Cloud & Infrastructure Services
    {
      category: "Cloud & Infrastructure",
      services: [
        {
          name: "Cloud Migration & Architecture",
          description: "Seamless migration to cloud platforms with optimized architecture for scalability and performance.",
          features: ["Multi-cloud strategy", "Cost optimization", "Security implementation", "Performance tuning"],
          pricing: "$8,000 - $40,000",
          link: "https://ziontechgroup.com/services/cloud-migration",
          icon: "☁️"
        },
        {
          name: "DevOps & CI/CD Implementation",
          description: "Automate your development pipeline with modern DevOps practices and continuous integration.",
          features: ["Pipeline automation", "Infrastructure as code", "Monitoring & alerting", "Security scanning"],
          pricing: "$4,000 - $20,000",
          link: "https://ziontechgroup.com/services/devops",
          icon: "🔄"
        },
        {
          name: "Microservices Architecture",
          description: "Design and implement scalable microservices architecture for modern applications.",
          features: ["Service design", "API gateway setup", "Load balancing", "Service mesh implementation"],
          pricing: "$6,000 - $30,000",
          link: "https://ziontechgroup.com/services/microservices",
          icon: "🔧"
        }
      ]
    },
    // Web & Mobile Development
    {
      category: "Web & Mobile Development",
      services: [
        {
          name: "Full-Stack Web Applications",
          description: "Modern, responsive web applications built with cutting-edge technologies and best practices.",
          features: ["React/Next.js development", "Backend API development", "Database design", "Performance optimization"],
          pricing: "$10,000 - $50,000",
          link: "https://ziontechgroup.com/services/web-development",
          icon: "🌐"
        },
        {
          name: "Mobile App Development",
          description: "Native and cross-platform mobile applications for iOS and Android platforms.",
          features: ["Cross-platform development", "Native performance", "App store optimization", "Push notifications"],
          pricing: "$15,000 - $75,000",
          link: "https://ziontechgroup.com/services/mobile-development",
          icon: "📱"
        },
        {
          name: "Progressive Web Apps (PWA)",
          description: "Modern web applications that provide native app-like experience across all devices.",
          features: ["Offline functionality", "Push notifications", "App-like interface", "Cross-platform compatibility"],
          pricing: "$8,000 - $35,000",
          link: "https://ziontechgroup.com/services/pwa-development",
          icon: "⚡"
        }
      ]
    },
    // Data & Analytics Services
    {
      category: "Data & Analytics",
      services: [
        {
          name: "Data Pipeline Engineering",
          description: "Build robust data pipelines for collecting, processing, and analyzing large-scale data.",
          features: ["ETL pipeline design", "Real-time streaming", "Data quality monitoring", "Scalable architecture"],
          pricing: "$6,000 - $30,000",
          link: "https://ziontechgroup.com/services/data-pipelines",
          icon: "📈"
        },
        {
          name: "Database Design & Optimization",
          description: "Design and optimize databases for performance, scalability, and reliability.",
          features: ["Schema design", "Performance tuning", "Backup strategies", "Security implementation"],
          pricing: "$3,000 - $18,000",
          link: "https://ziontechgroup.com/services/database-design",
          icon: "🗄️"
        },
        {
          name: "Business Intelligence & Reporting",
          description: "Transform raw data into meaningful insights with interactive dashboards and reports.",
          features: ["Interactive dashboards", "Automated reporting", "Data visualization", "KPI tracking"],
          pricing: "$4,000 - $20,000",
          link: "https://ziontechgroup.com/services/business-intelligence",
          icon: "📊"
        }
      ]
    },
    // Security & Compliance
    {
      category: "Security & Compliance",
      services: [
        {
          name: "Security Auditing & Penetration Testing",
          description: "Comprehensive security assessments to identify and fix vulnerabilities in your systems.",
          features: ["Vulnerability assessment", "Penetration testing", "Security recommendations", "Compliance reporting"],
          pricing: "$5,000 - $25,000",
          link: "https://ziontechgroup.com/services/security-auditing",
          icon: "🔒"
        },
        {
          name: "Network Security Implementation",
          description: "Implement robust network security measures to protect your infrastructure.",
          features: ["Firewall configuration", "Intrusion detection", "VPN setup", "Security monitoring"],
          pricing: "$4,000 - $20,000",
          link: "https://ziontechgroup.com/services/network-security",
          icon: "🛡️"
        },
        {
          name: "Compliance & Governance",
          description: "Ensure your systems meet industry standards and regulatory requirements.",
          features: ["GDPR compliance", "SOC 2 preparation", "HIPAA compliance", "Security policies"],
          pricing: "$6,000 - $30,000",
          link: "https://ziontechgroup.com/services/compliance",
          icon: "📋"
        }
      ]
    },
    // Blockchain & Emerging Tech
    {
      category: "Blockchain & Emerging Tech",
      services: [
        {
          name: "Blockchain Development",
          description: "Build decentralized applications and smart contracts on various blockchain platforms.",
          features: ["Smart contract development", "DApp development", "Blockchain integration", "Token creation"],
          pricing: "$8,000 - $40,000",
          link: "https://ziontechgroup.com/services/blockchain",
          icon: "⛓️"
        },
        {
          name: "IoT Platform Development",
          description: "Create connected IoT solutions for smart devices and industrial applications.",
          features: ["Device connectivity", "Data collection", "Real-time monitoring", "Analytics dashboard"],
          pricing: "$10,000 - $50,000",
          link: "https://ziontechgroup.com/services/iot-platforms",
          icon: "🌐"
        },
        {
          name: "AR/VR Application Development",
          description: "Immersive augmented and virtual reality experiences for training and entertainment.",
          features: ["3D modeling", "Interactive experiences", "Cross-platform support", "Performance optimization"],
          pricing: "$15,000 - $75,000",
          link: "https://ziontechgroup.com/services/ar-vr",
          icon: "🥽"
        }
      ]
    },
    // Business Solutions
    {
      category: "Business Solutions",
      services: [
        {
          name: "Digital Transformation Consulting",
          description: "Strategic guidance for modernizing your business processes and technology stack.",
          features: ["Technology assessment", "Strategy development", "Implementation planning", "Change management"],
          pricing: "$150 - $300/hour",
          link: "https://ziontechgroup.com/services/digital-transformation",
          icon: "🚀"
        },
        {
          name: "Performance Optimization",
          description: "Optimize your applications and systems for maximum performance and user experience.",
          features: ["Performance analysis", "Code optimization", "Infrastructure tuning", "Monitoring setup"],
          pricing: "$3,000 - $20,000",
          link: "https://ziontechgroup.com/services/performance-optimization",
          icon: "⚡"
        },
        {
          name: "Quality Assurance & Testing",
          description: "Comprehensive testing services to ensure your applications meet quality standards.",
          features: ["Automated testing", "Manual testing", "Performance testing", "Security testing"],
          pricing: "$2,500 - $15,000",
          link: "https://ziontechgroup.com/services/quality-assurance",
          icon: "✅"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Head>
        <title>Our Services - Zion Tech Group | Comprehensive Technology Solutions</title>
        <meta name="description" content="Explore our comprehensive range of micro SAAS services, IT solutions, and AI development services. From custom AI models to cloud architecture, we deliver innovative technology solutions." />
        <meta name="keywords" content="AI development, cloud services, web development, mobile apps, blockchain, IoT, cybersecurity, digital transformation" />
      </Head>
      
      <main className="container mx-auto px-4 py-16">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Our Comprehensive Services
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Discover our extensive portfolio of micro SAAS services, cutting-edge IT solutions, and innovative AI services. 
            We help businesses of all sizes transform their digital presence and achieve technological excellence.
          </p>
        </div>

        {/* Services Grid */}
        <div className="space-y-16">
          {services.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                {category.category}
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.services.map((service, serviceIndex) => (
                  <div key={serviceIndex} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-blue-100">
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {service.name}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-800 mb-2">Key Features:</h4>
                      <ul className="space-y-1">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="text-sm text-gray-600 flex items-center">
                            <span className="text-green-500 mr-2">✓</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mb-4">
                      <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                        Starting at {service.pricing}
                      </span>
                    </div>
                    <Link 
                      href={service.link}
                      className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors w-full text-center"
                    >
                      Learn More
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 mt-16 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-6 opacity-90">
            Let's discuss how our services can transform your business. Get in touch with our experts today.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div>
              <h3 className="font-semibold mb-2">📱 Mobile</h3>
              <p>+1 302 464 0950</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">✉️ Email</h3>
              <p>kleber@ziontechgroup.com</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">📍 Address</h3>
              <p>364 E Main St STE 1008<br />Middletown DE 19709</p>
            </div>
          </div>
          <div className="flex justify-center gap-4">
            <Link 
              href="/contact"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Contact Us
            </Link>
            <Link 
              href="https://ziontechgroup.com"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Visit Website
            </Link>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Why Choose Zion Tech Group?
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold mb-2">Innovation First</h3>
              <p className="text-gray-600">Cutting-edge solutions using the latest technologies</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">💼</div>
              <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
              <p className="text-gray-600">Experienced professionals with proven track records</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
              <p className="text-gray-600">Quick turnaround times without compromising quality</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold mb-2">Ongoing Support</h3>
              <p className="text-gray-600">Continuous support and maintenance after delivery</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ServicesPage;