export default function SolutionsPage() {
  const solutions = [
    {
      industry: "Healthcare",
      solutions: [
        {
          title: "AI-Powered Diagnostic Systems",
          description: "Advanced diagnostic tools that assist healthcare professionals with accurate and timely diagnoses.",
          benefits: ["Improved Accuracy", "Faster Diagnosis", "Reduced Errors", "Cost Savings"],
          icon: "🏥"
        },
        {
          title: "Autonomous Patient Monitoring",
          description: "24/7 patient monitoring systems that provide real-time health insights and early warning detection.",
          benefits: ["Continuous Monitoring", "Early Detection", "Reduced Readmissions", "Better Outcomes"],
          icon: "📊"
        }
      ]
    },
    {
      industry: "Finance",
      solutions: [
        {
          title: "AI Trading Platforms",
          description: "Intelligent trading systems that analyze market data and execute trades with precision.",
          benefits: ["Market Analysis", "Risk Management", "Automated Trading", "Portfolio Optimization"],
          icon: "📈"
        },
        {
          title: "Fraud Detection Systems",
          description: "Advanced fraud detection using machine learning to identify suspicious transactions in real-time.",
          benefits: ["Real-time Detection", "High Accuracy", "Cost Reduction", "Customer Protection"],
          icon: "🛡️"
        }
      ]
    },
    {
      industry: "Manufacturing",
      solutions: [
        {
          title: "Predictive Maintenance",
          description: "AI-powered systems that predict equipment failures and optimize maintenance schedules.",
          benefits: ["Reduced Downtime", "Cost Savings", "Extended Equipment Life", "Safety Improvement"],
          icon: "⚙️"
        },
        {
          title: "Quality Control Automation",
          description: "Computer vision systems that automatically inspect products for defects and quality issues.",
          benefits: ["Consistent Quality", "Faster Inspection", "Cost Reduction", "Data Insights"],
          icon: "🔍"
        }
      ]
    },
    {
      industry: "Retail",
      solutions: [
        {
          title: "Personalized Shopping Experience",
          description: "AI-driven recommendation engines that provide personalized product suggestions and experiences.",
          benefits: ["Increased Sales", "Customer Satisfaction", "Better Engagement", "Inventory Optimization"],
          icon: "🛍️"
        },
        {
          title: "Supply Chain Optimization",
          description: "Intelligent systems that optimize inventory management and supply chain operations.",
          benefits: ["Reduced Costs", "Better Forecasting", "Improved Efficiency", "Risk Mitigation"],
          icon: "📦"
        }
      ]
    },
    {
      industry: "Education",
      solutions: [
        {
          title: "Adaptive Learning Platforms",
          description: "Personalized learning systems that adapt to individual student needs and learning styles.",
          benefits: ["Personalized Learning", "Better Engagement", "Improved Outcomes", "Teacher Support"],
          icon: "🎓"
        },
        {
          title: "Intelligent Tutoring Systems",
          description: "AI tutors that provide personalized guidance and support to students.",
          benefits: ["24/7 Availability", "Personalized Support", "Progress Tracking", "Scalable Education"],
          icon: "🤖"
        }
      ]
    }
  ];

  const technologies = [
    {
      name: "Machine Learning",
      description: "Advanced algorithms that learn from data to make predictions and decisions.",
      icon: "🧠"
    },
    {
      name: "Natural Language Processing",
      description: "AI systems that understand and generate human language for better communication.",
      icon: "💬"
    },
    {
      name: "Computer Vision",
      description: "AI systems that can interpret and analyze visual information from images and videos.",
      icon: "👁️"
    },
    {
      name: "Robotic Process Automation",
      description: "Automation of repetitive tasks to improve efficiency and reduce human error.",
      icon: "⚡"
    },
    {
      name: "Predictive Analytics",
      description: "Data analysis techniques that predict future outcomes based on historical data.",
      icon: "🔮"
    },
    {
      name: "Edge Computing",
      description: "AI processing at the edge for faster response times and reduced latency.",
      icon: "🌐"
    }
  ];

  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Industry <span className="gradient-text">Solutions</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Tailored AI solutions designed for specific industries and use cases. 
            We transform businesses across healthcare, finance, manufacturing, retail, and education.
          </p>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="space-y-16">
          {solutions.map((industry, industryIndex) => (
            <div key={industryIndex} className="space-y-8">
              <h2 className="text-3xl font-bold text-white text-center mb-12">
                {industry.industry} Solutions
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {industry.solutions.map((solution, solutionIndex) => (
                  <div 
                    key={solutionIndex}
                    className="bg-slate-800/50 rounded-xl p-8 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 card-hover"
                  >
                    <div className="text-4xl mb-4">{solution.icon}</div>
                    <h3 className="text-2xl font-semibold text-white mb-4">
                      {solution.title}
                    </h3>
                    <p className="text-slate-300 mb-6 leading-relaxed">
                      {solution.description}
                    </p>
                    <div className="space-y-3">
                      <h4 className="text-lg font-medium text-white mb-3">Key Benefits:</h4>
                      <ul className="space-y-2">
                        {solution.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center space-x-3 text-slate-300">
                            <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                            <span>{benefit}</span>
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

      {/* Technologies Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Cutting-Edge Technologies
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              We leverage the latest AI technologies to deliver innovative solutions 
              that drive business transformation and competitive advantage.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, techIndex) => (
              <div 
                key={techIndex}
                className="bg-slate-700/50 rounded-xl p-6 border border-slate-600/50 hover:border-blue-500/50 transition-all duration-300 card-hover text-center"
              >
                <div className="text-4xl mb-4">{tech.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {tech.name}
                </h3>
                <p className="text-slate-300">
                  {tech.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Implement AI Solutions?
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Let's discuss how our industry-specific AI solutions can transform your business 
            and give you a competitive edge in your market.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-white text-slate-900 hover:bg-slate-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              Start Implementation
            </a>
            <a 
              href="/services" 
              className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200"
            >
              View Services
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}