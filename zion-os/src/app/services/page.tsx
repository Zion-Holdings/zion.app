export default function ServicesPage() {
  const services = [
    {
      category: "AI Business Intelligence",
      services: [
        {
          title: "AI Business Intelligence Suite",
          description: "Comprehensive business intelligence platform powered by advanced AI algorithms for data-driven decision making.",
          features: ["Predictive Analytics", "Real-time Dashboards", "Custom Reporting", "Data Visualization"]
        },
        {
          title: "AI Analytics Copilot",
          description: "Intelligent analytics assistant that helps business users discover insights and create reports.",
          features: ["Natural Language Queries", "Automated Insights", "Smart Recommendations", "Collaborative Analysis"]
        }
      ]
    },
    {
      category: "Autonomous Systems",
      services: [
        {
          title: "AI Autonomous Business Manager",
          description: "Self-managing AI system that autonomously handles business operations and decision-making processes.",
          features: ["Process Automation", "Decision Engine", "Performance Monitoring", "Continuous Learning"]
        },
        {
          title: "AI Autonomous Ecosystem Manager",
          description: "Intelligent system for managing complex business ecosystems and partner relationships.",
          features: ["Partner Management", "Resource Optimization", "Risk Assessment", "Growth Planning"]
        }
      ]
    },
    {
      category: "AI Development & Testing",
      services: [
        {
          title: "AI Code Generation Enterprise",
          description: "Enterprise-grade AI-powered code generation and development assistance platform.",
          features: ["Multi-language Support", "Code Review", "Testing Automation", "Security Scanning"]
        },
        {
          title: "AI Autonomous Testing",
          description: "Intelligent testing system that autonomously creates, executes, and maintains test suites.",
          features: ["Test Case Generation", "Automated Execution", "Defect Detection", "Regression Testing"]
        }
      ]
    },
    {
      category: "AI Research & Innovation",
      services: [
        {
          title: "AI Consciousness Evolution Platform",
          description: "Advanced research platform for exploring AI consciousness and cognitive evolution.",
          features: ["Cognitive Modeling", "Consciousness Simulation", "Ethical AI Research", "Neuroscience Integration"]
        },
        {
          title: "AI Autonomous Research Assistant",
          description: "Intelligent research companion that autonomously conducts research and analysis.",
          features: ["Literature Review", "Data Analysis", "Hypothesis Generation", "Report Writing"]
        }
      ]
    },
    {
      category: "Industry-Specific Solutions",
      services: [
        {
          title: "AI Autonomous Healthcare Physician",
          description: "AI-powered healthcare assistant for medical diagnosis, treatment planning, and patient care.",
          features: ["Diagnostic Support", "Treatment Recommendations", "Patient Monitoring", "Medical Research"]
        },
        {
          title: "AI Autonomous Legal Counsel",
          description: "Intelligent legal assistant for contract analysis, legal research, and compliance monitoring.",
          features: ["Contract Review", "Legal Research", "Compliance Checking", "Risk Assessment"]
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="gradient-text">AI Services</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Comprehensive AI-powered solutions designed to transform your business operations, 
            enhance decision-making, and drive innovation across all industries.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          {services.map((category, categoryIndex) => (
            <div key={categoryIndex} className="space-y-8">
              <h2 className="text-3xl font-bold text-white text-center mb-12">
                {category.category}
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {category.services.map((service, serviceIndex) => (
                  <div 
                    key={serviceIndex}
                    className="bg-slate-800/50 rounded-xl p-8 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 card-hover"
                  >
                    <h3 className="text-2xl font-semibold text-white mb-4">
                      {service.title}
                    </h3>
                    <p className="text-slate-300 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="space-y-3">
                      <h4 className="text-lg font-medium text-white mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center space-x-3 text-slate-300">
                            <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-6">
                      <a 
                        href="/contact" 
                        className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 transform hover:scale-105"
                      >
                        Learn More
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="mt-20 py-16 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Let's discuss how our AI services can help you achieve your business goals 
            and stay ahead of the competition.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-white text-slate-900 hover:bg-slate-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              Get Started Today
            </a>
            <a 
              href="/solutions" 
              className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200"
            >
              View Solutions
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}