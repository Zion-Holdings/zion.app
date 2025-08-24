import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const SolutionsPage: NextPage = () => {
  const solutions = [
    // Healthcare Solutions
    {
      category: "Healthcare & Life Sciences",
      solutions: [
        {
          name: "AI-Powered Medical Imaging",
          description: "Advanced AI algorithms for medical image analysis, diagnosis assistance, and treatment planning.",
          useCases: ["Radiology departments", "Medical research", "Telemedicine platforms", "Clinical trials"],
          benefits: ["Improved diagnostic accuracy", "Faster diagnosis", "Reduced costs", "Better patient outcomes"],
          pricing: "$15,000 - $75,000",
          link: "https://ziontechgroup.com/solutions/healthcare-ai",
          icon: "🏥"
        },
        {
          name: "Healthcare Data Analytics Platform",
          description: "Comprehensive healthcare analytics solution for patient data, operational efficiency, and predictive insights.",
          useCases: ["Hospitals", "Clinics", "Health insurance", "Pharmaceutical companies"],
          benefits: ["Patient care optimization", "Operational efficiency", "Cost reduction", "Compliance management"],
          pricing: "$25,000 - $100,000",
          link: "https://ziontechgroup.com/solutions/healthcare-analytics",
          icon: "📊"
        },
        {
          name: "Telemedicine Platform",
          description: "Secure, HIPAA-compliant telemedicine solution with AI-powered triage and appointment scheduling.",
          useCases: ["Primary care", "Specialist consultations", "Mental health", "Rural healthcare"],
          benefits: ["Improved access to care", "Reduced travel costs", "Better patient engagement", "Scalable operations"],
          pricing: "$20,000 - $80,000",
          link: "https://ziontechgroup.com/solutions/telemedicine",
          icon: "💻"
        }
      ]
    },
    // Financial Services Solutions
    {
      category: "Financial Services & FinTech",
      solutions: [
        {
          name: "AI-Powered Risk Assessment",
          description: "Machine learning-based risk assessment and fraud detection for financial institutions.",
          useCases: ["Banks", "Credit unions", "Insurance companies", "Investment firms"],
          benefits: ["Reduced fraud losses", "Better risk management", "Compliance automation", "Improved customer experience"],
          pricing: "$30,000 - $120,000",
          link: "https://ziontechgroup.com/solutions/financial-risk-ai",
          icon: "🏦"
        },
        {
          name: "Blockchain Payment Solutions",
          description: "Secure, fast, and cost-effective blockchain-based payment and settlement systems.",
          useCases: ["Cross-border payments", "Supply chain finance", "Digital assets", "Smart contracts"],
          benefits: ["Faster settlements", "Lower transaction costs", "Enhanced security", "Transparency"],
          pricing: "$40,000 - $150,000",
          link: "https://ziontechgroup.com/solutions/blockchain-payments",
          icon: "⛓️"
        },
        {
          name: "RegTech Compliance Platform",
          description: "Automated regulatory compliance and reporting platform for financial institutions.",
          useCases: ["Anti-money laundering", "KYC verification", "Regulatory reporting", "Audit trails"],
          benefits: ["Automated compliance", "Reduced manual work", "Real-time monitoring", "Audit readiness"],
          pricing: "$35,000 - $100,000",
          link: "https://ziontechgroup.com/solutions/regtech-compliance",
          icon: "📋"
        }
      ]
    },
    // Manufacturing & Industry 4.0
    {
      category: "Manufacturing & Industry 4.0",
      solutions: [
        {
          name: "IoT Manufacturing Platform",
          description: "Comprehensive IoT solution for smart manufacturing, predictive maintenance, and quality control.",
          useCases: ["Production lines", "Quality control", "Predictive maintenance", "Supply chain management"],
          benefits: ["Reduced downtime", "Improved quality", "Cost optimization", "Real-time monitoring"],
          pricing: "$50,000 - $200,000",
          link: "https://ziontechgroup.com/solutions/iot-manufacturing",
          icon: "🏭"
        },
        {
          name: "AI Quality Control System",
          description: "Computer vision and AI-powered quality control for manufacturing processes.",
          useCases: ["Automotive", "Electronics", "Food processing", "Pharmaceuticals"],
          benefits: ["Zero defect production", "24/7 monitoring", "Cost reduction", "Quality consistency"],
          pricing: "$40,000 - $150,000",
          link: "https://ziontechgroup.com/solutions/ai-quality-control",
          icon: "🔍"
        },
        {
          name: "Digital Twin Platform",
          description: "Digital twin technology for manufacturing optimization and predictive analytics.",
          useCases: ["Process optimization", "Predictive maintenance", "Training simulation", "Performance analysis"],
          benefits: ["Process optimization", "Reduced costs", "Better decision making", "Risk mitigation"],
          pricing: "$60,000 - $250,000",
          link: "https://ziontechgroup.com/solutions/digital-twin",
          icon: "🔄"
        }
      ]
    },
    // Retail & E-commerce Solutions
    {
      category: "Retail & E-commerce",
      solutions: [
        {
          name: "AI-Powered Customer Analytics",
          description: "Advanced customer behavior analysis and personalized marketing automation platform.",
          useCases: ["Online retail", "Brick-and-mortar stores", "Marketplaces", "Subscription services"],
          benefits: ["Increased sales", "Better customer retention", "Personalized experiences", "Marketing optimization"],
          pricing: "$20,000 - $80,000",
          link: "https://ziontechgroup.com/solutions/retail-analytics",
          icon: "🛒"
        },
        {
          name: "Omnichannel Commerce Platform",
          description: "Unified commerce platform for seamless customer experience across all channels.",
          useCases: ["Multi-channel retail", "B2B commerce", "Marketplace operations", "Inventory management"],
          benefits: ["Unified customer experience", "Increased sales", "Operational efficiency", "Better inventory management"],
          pricing: "$35,000 - $120,000",
          link: "https://ziontechgroup.com/solutions/omnichannel-commerce",
          icon: "🔄"
        },
        {
          name: "AR/VR Shopping Experience",
          description: "Immersive shopping experiences with augmented and virtual reality technology.",
          useCases: ["Furniture retail", "Fashion", "Home improvement", "Automotive"],
          benefits: ["Enhanced customer engagement", "Reduced returns", "Better product visualization", "Competitive advantage"],
          pricing: "$45,000 - $180,000",
          link: "https://ziontechgroup.com/solutions/ar-vr-shopping",
          icon: "🥽"
        }
      ]
    },
    // Education & Training Solutions
    {
      category: "Education & Training",
      solutions: [
        {
          name: "AI-Powered Learning Platform",
          description: "Personalized learning platform with AI-driven content recommendations and adaptive assessments.",
          useCases: ["K-12 education", "Higher education", "Corporate training", "Professional development"],
          benefits: ["Personalized learning", "Better engagement", "Improved outcomes", "Scalable delivery"],
          pricing: "$25,000 - $100,000",
          link: "https://ziontechgroup.com/solutions/ai-learning",
          icon: "🎓"
        },
        {
          name: "Virtual Reality Training",
          description: "Immersive VR training solutions for high-risk industries and skill development.",
          useCases: ["Healthcare training", "Industrial safety", "Military training", "Skill development"],
          benefits: ["Safe training environment", "Cost-effective", "Realistic scenarios", "Better retention"],
          pricing: "$35,000 - $150,000",
          link: "https://ziontechgroup.com/solutions/vr-training",
          icon: "🥽"
        },
        {
          name: "Learning Analytics Dashboard",
          description: "Comprehensive analytics platform for tracking learning outcomes and performance metrics.",
          useCases: ["Educational institutions", "Training organizations", "Corporate L&D", "Government agencies"],
          benefits: ["Performance tracking", "Data-driven decisions", "ROI measurement", "Continuous improvement"],
          pricing: "$15,000 - $60,000",
          link: "https://ziontechgroup.com/solutions/learning-analytics",
          icon: "📊"
        }
      ]
    },
    // Government & Public Sector
    {
      category: "Government & Public Sector",
      solutions: [
        {
          name: "Smart City Platform",
          description: "Comprehensive smart city solution for urban planning, traffic management, and citizen services.",
          useCases: ["Urban planning", "Traffic management", "Public safety", "Citizen services"],
          benefits: ["Improved efficiency", "Better citizen experience", "Cost reduction", "Data-driven decisions"],
          pricing: "$100,000 - $500,000",
          link: "https://ziontechgroup.com/solutions/smart-city",
          icon: "🏙️"
        },
        {
          name: "Government Data Analytics",
          description: "Advanced analytics platform for government data analysis and decision support.",
          useCases: ["Policy analysis", "Resource allocation", "Performance monitoring", "Public reporting"],
          benefits: ["Better policy decisions", "Transparency", "Efficiency improvement", "Public trust"],
          pricing: "$50,000 - $200,000",
          link: "https://ziontechgroup.com/solutions/government-analytics",
          icon: "📊"
        },
        {
          name: "Digital Identity Platform",
          description: "Secure digital identity and authentication platform for government services.",
          useCases: ["Citizen services", "Voting systems", "Healthcare access", "Financial services"],
          benefits: ["Secure access", "Reduced fraud", "Better service delivery", "Cost savings"],
          pricing: "$75,000 - $300,000",
          link: "https://ziontechgroup.com/solutions/digital-identity",
          icon: "🆔"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50">
      <Head>
        <title>Industry Solutions - Zion Tech Group | Tailored Technology Solutions</title>
        <meta name="description" content="Discover industry-specific technology solutions for healthcare, finance, manufacturing, retail, education, and government sectors. Tailored solutions for your business needs." />
        <meta name="keywords" content="healthcare solutions, fintech, manufacturing 4.0, retail technology, education tech, government solutions, industry solutions" />
      </Head>
      
      <main className="container mx-auto px-4 py-16">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Industry-Specific Solutions
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            We deliver tailored technology solutions designed specifically for your industry. 
            From healthcare AI to smart manufacturing, our solutions address real business challenges 
            and drive measurable results.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="space-y-16">
          {solutions.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                {category.category}
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.solutions.map((solution, solutionIndex) => (
                  <div key={solutionIndex} className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-purple-100">
                    <div className="text-4xl mb-4">{solution.icon}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {solution.name}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {solution.description}
                    </p>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-800 mb-2">Use Cases:</h4>
                      <ul className="space-y-1">
                        {solution.useCases.map((useCase, useCaseIndex) => (
                          <li key={useCaseIndex} className="text-sm text-gray-600 flex items-center">
                            <span className="text-purple-500 mr-2">•</span>
                            {useCase}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-800 mb-2">Key Benefits:</h4>
                      <ul className="space-y-1">
                        {solution.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="text-sm text-gray-600 flex items-center">
                            <span className="text-green-500 mr-2">✓</span>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-4">
                      <span className="inline-block bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-semibold">
                        Starting at {solution.pricing}
                      </span>
                    </div>

                    <Link 
                      href={solution.link}
                      className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors w-full text-center"
                    >
                      Learn More
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Success Stories Section */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 mt-16 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Success Stories
          </h2>
          <p className="text-xl mb-6 opacity-90">
            See how our solutions have transformed businesses across industries
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div>
              <h3 className="font-semibold mb-2">🏥 Healthcare Provider</h3>
              <p>40% reduction in diagnostic time with AI-powered imaging</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">🏭 Manufacturing Company</h3>
              <p>60% decrease in downtime with IoT predictive maintenance</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">🏦 Financial Institution</h3>
              <p>80% reduction in fraud losses with AI risk assessment</p>
            </div>
          </div>
          <Link 
            href="/contact"
            className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            View Case Studies
          </Link>
        </div>

        {/* Custom Solutions Section */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Need a Custom Solution?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Can't find exactly what you need? Our expert team can design and develop 
            custom solutions tailored to your specific requirements and industry challenges.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="text-xl font-semibold mb-2">Custom Development</h3>
              <p className="text-gray-600">Tailored solutions built from the ground up</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🔗</div>
              <h3 className="text-xl font-semibold mb-2">System Integration</h3>
              <p className="text-gray-600">Seamless integration with existing systems</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-xl font-semibold mb-2">Training & Support</h3>
              <p className="text-gray-600">Comprehensive training and ongoing support</p>
            </div>
          </div>
          <Link 
            href="/contact"
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Discuss Custom Solutions
          </Link>
        </div>

        {/* Contact Section */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Let's discuss how our industry-specific solutions can address your unique challenges 
            and drive measurable business outcomes.
          </p>
          <div className="flex justify-center gap-4 mb-8">
            <Link 
              href="/contact"
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Schedule Consultation
            </Link>
            <Link 
              href="/contact"
              className="bg-transparent border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Request Demo
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6 text-sm text-gray-600">
            <div>
              <h3 className="font-semibold mb-2">📱 Mobile</h3>
              <p>+1 302 464 0950</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">✉️ Email</h3>
              <p>kleber@ziontechgroup.com</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">🌐 Website</h3>
              <p>https://ziontechgroup.com</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SolutionsPage;