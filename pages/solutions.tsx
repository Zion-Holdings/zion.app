import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const Solutions: NextPage = () => {
  const industrySolutions = [
    {
      industry: "Healthcare",
      description: "Digital transformation solutions for healthcare providers, including patient management systems, telemedicine platforms, and compliance management.",
      icon: "🏥",
      color: "from-blue-500 to-blue-600",
      solutions: [
        "Electronic Health Records (EHR)",
        "Telemedicine Platforms",
        "Patient Portal Systems",
        "Compliance Management",
        "Medical Device Integration",
        "Healthcare Analytics"
      ],
      benefits: [
        "Improved patient care and outcomes",
        "Enhanced operational efficiency",
        "Regulatory compliance",
        "Secure data management"
      ]
    },
    {
      industry: "Finance",
      description: "Secure, scalable financial technology solutions including payment processing, risk management, and regulatory compliance systems.",
      icon: "💳",
      color: "from-green-500 to-green-600",
      solutions: [
        "Payment Processing Systems",
        "Risk Management Platforms",
        "Regulatory Compliance Tools",
        "Fraud Detection Systems",
        "Financial Analytics",
        "Blockchain Solutions"
      ],
      benefits: [
        "Enhanced security and fraud prevention",
        "Regulatory compliance",
        "Improved customer experience",
        "Operational cost reduction"
      ]
    },
    {
      industry: "E-commerce",
      description: "Complete e-commerce solutions including online stores, inventory management, and customer relationship management systems.",
      icon: "🛒",
      color: "from-purple-500 to-purple-600",
      solutions: [
        "Online Store Platforms",
        "Inventory Management",
        "Customer Relationship Management",
        "Payment Gateway Integration",
        "Analytics and Reporting",
        "Mobile Commerce Apps"
      ],
      benefits: [
        "Increased online sales",
        "Improved customer experience",
        "Streamlined operations",
        "Better inventory control"
      ]
    },
    {
      industry: "Manufacturing",
      description: "Industry 4.0 solutions including IoT integration, predictive maintenance, and supply chain optimization.",
      icon: "🏭",
      color: "from-orange-500 to-orange-600",
      solutions: [
        "IoT Device Integration",
        "Predictive Maintenance",
        "Supply Chain Management",
        "Quality Control Systems",
        "Production Analytics",
        "Smart Factory Solutions"
      ],
      benefits: [
        "Reduced downtime and maintenance costs",
        "Improved production efficiency",
        "Better quality control",
        "Optimized supply chain"
      ]
    },
    {
      industry: "Education",
      description: "Digital learning platforms and educational technology solutions for schools, universities, and corporate training.",
      icon: "🎓",
      color: "from-indigo-500 to-indigo-600",
      solutions: [
        "Learning Management Systems",
        "Virtual Classrooms",
        "Student Information Systems",
        "Assessment Platforms",
        "Content Management",
        "Analytics and Reporting"
      ],
      benefits: [
        "Enhanced learning experiences",
        "Improved student engagement",
        "Better administrative efficiency",
        "Data-driven insights"
      ]
    },
    {
      industry: "Real Estate",
      description: "Property management and real estate technology solutions including listing platforms, CRM systems, and analytics tools.",
      icon: "🏠",
      color: "from-red-500 to-red-600",
      solutions: [
        "Property Listing Platforms",
        "Customer Relationship Management",
        "Property Management Systems",
        "Market Analytics",
        "Virtual Tours",
        "Transaction Management"
      ],
      benefits: [
        "Increased property visibility",
        "Better lead management",
        "Improved customer service",
        "Market insights and trends"
      ]
    }
  ];

  const caseStudies = [
    {
      title: "Healthcare Provider Digital Transformation",
      industry: "Healthcare",
      description: "Implemented a comprehensive EHR system for a regional hospital network, improving patient care and operational efficiency.",
      results: [
        "30% reduction in administrative overhead",
        "Improved patient satisfaction scores",
        "Enhanced data security and compliance"
      ],
      technologies: ["React", "Node.js", "PostgreSQL", "AWS"]
    },
    {
      title: "E-commerce Platform Modernization",
      industry: "Retail",
      description: "Redesigned and modernized an existing e-commerce platform, resulting in significant improvements in user experience and sales.",
      results: [
        "45% increase in conversion rates",
        "60% improvement in page load times",
        "Enhanced mobile user experience"
      ],
      technologies: ["Next.js", "TypeScript", "MongoDB", "Vercel"]
    },
    {
      title: "Manufacturing IoT Integration",
      industry: "Manufacturing",
      description: "Implemented IoT sensors and predictive maintenance systems for a manufacturing facility, reducing downtime and improving efficiency.",
      results: [
        "25% reduction in unplanned downtime",
        "15% improvement in production efficiency",
        "Predictive maintenance cost savings"
      ],
      technologies: ["Python", "TensorFlow", "AWS IoT", "React Native"]
    }
  ];

  return (
    <>
      <Head>
        <title>Industry Solutions - Zion Tech Group</title>
        <meta name="description" content="Explore Zion Tech Group's industry-specific technology solutions for healthcare, finance, e-commerce, manufacturing, education, and real estate sectors." />
        <meta name="keywords" content="industry solutions, healthcare technology, financial technology, e-commerce solutions, manufacturing IoT, educational technology, real estate technology" />
      </Head>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">Industry Solutions</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Tailored technology solutions designed specifically for your industry's unique challenges and opportunities
          </p>
        </div>
      </section>

      {/* Industry Solutions Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Solutions by Industry</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We understand the unique challenges of different industries and provide customized solutions that drive real business value
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industrySolutions.map((solution, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className={`bg-gradient-to-r ${solution.color} p-6 rounded-t-xl`}>
                  <div className="text-center">
                    <div className="text-6xl mb-4">{solution.icon}</div>
                    <h3 className="text-2xl font-bold text-white">{solution.industry}</h3>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-gray-600 mb-6">{solution.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Solutions:</h4>
                    <ul className="space-y-2">
                      {solution.solutions.slice(0, 4).map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-center text-gray-600 text-sm">
                          <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Business Benefits:</h4>
                    <ul className="space-y-2">
                      {solution.benefits.slice(0, 2).map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-gray-600 text-sm">
                          <svg className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link href="/contact" className={`inline-block bg-gradient-to-r ${solution.color} text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity w-full text-center`}>
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real-world examples of how our solutions have transformed businesses across different industries
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
                <div className="mb-4">
                  <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    {study.industry}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{study.title}</h3>
                <p className="text-gray-600 mb-6">{study.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Results:</h4>
                  <ul className="space-y-2">
                    {study.results.map((result, resultIndex) => (
                      <li key={resultIndex} className="flex items-center text-gray-600 text-sm">
                        <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {study.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <Link href="/contact" className="text-blue-600 hover:text-blue-700 font-medium">
                  Read Full Case Study →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Process */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Solution Development Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology that ensures successful implementation and maximum business value
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Discovery & Analysis</h3>
              <p className="text-gray-600">Deep dive into your business processes, challenges, and objectives</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Solution Design</h3>
              <p className="text-gray-600">Custom architecture and solution design tailored to your needs</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Development & Testing</h3>
              <p className="text-gray-600">Agile development with continuous testing and quality assurance</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Deployment & Support</h3>
              <p className="text-gray-600">Smooth deployment with ongoing support and optimization</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Technology Stack</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We use cutting-edge technologies to build robust, scalable, and future-proof solutions
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚛️</span>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900">Frontend</h3>
              <p className="text-gray-600">React, Next.js, TypeScript, Tailwind CSS</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔧</span>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900">Backend</h3>
              <p className="text-gray-600">Node.js, Python, Java, .NET Core</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🗄️</span>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900">Databases</h3>
              <p className="text-gray-600">PostgreSQL, MongoDB, Redis, MySQL</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">☁️</span>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900">Cloud</h3>
              <p className="text-gray-600">AWS, Azure, Google Cloud, Kubernetes</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss your industry-specific challenges and create a customized solution that drives real business value.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Get Started
            </Link>
            <Link href="/services" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Solutions;
