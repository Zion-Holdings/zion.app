import { SEO } from '@/components/SEO';

const Analytics = () => {
  const analyticsServices = [
    {
      title: "Business Intelligence",
      description: "Transform raw data into actionable insights with powerful BI dashboards",
      icon: "📊",
      features: [
        "Interactive dashboards",
        "Real-time reporting",
        "KPI tracking",
        "Custom metrics"
      ]
    },
    {
      title: "Data Engineering",
      description: "Build robust data pipelines and infrastructure for scalable analytics",
      icon: "⚙️",
      features: [
        "ETL/ELT pipelines",
        "Data warehousing",
        "Data lake solutions",
        "API integrations"
      ]
    },
    {
      title: "Predictive Analytics",
      description: "Forecast future trends and behaviors using advanced ML algorithms",
      icon: "🔮",
      features: [
        "Trend forecasting",
        "Customer behavior analysis",
        "Risk assessment",
        "Demand planning"
      ]
    },
    {
      title: "Data Visualization",
      description: "Create compelling visual representations of complex data",
      icon: "🎨",
      features: [
        "Interactive charts",
        "Custom visualizations",
        "Storytelling dashboards",
        "Mobile-responsive views"
      ]
    },
    {
      title: "Real-time Analytics",
      description: "Monitor and analyze data as it happens for immediate insights",
      icon: "⚡",
      features: [
        "Live data streaming",
        "Real-time alerts",
        "Instant reporting",
        "Performance monitoring"
      ]
    },
    {
      title: "Advanced Analytics",
      description: "Leverage machine learning and AI for deeper data insights",
      icon: "🧠",
      features: [
        "Machine learning models",
        "Natural language processing",
        "Anomaly detection",
        "Pattern recognition"
      ]
    }
  ];

  const industrySolutions = [
    {
      industry: "Healthcare",
      description: "Patient analytics, clinical insights, and operational efficiency",
      icon: "🏥",
      useCases: ["Patient outcomes", "Resource optimization", "Clinical research"]
    },
    {
      industry: "Finance",
      description: "Risk assessment, fraud detection, and customer insights",
      icon: "🏦",
      useCases: ["Credit scoring", "Fraud prevention", "Investment analysis"]
    },
    {
      industry: "Retail",
      description: "Customer behavior, inventory optimization, and sales forecasting",
      icon: "🛍️",
      useCases: ["Customer segmentation", "Demand forecasting", "Price optimization"]
    },
    {
      industry: "Manufacturing",
      description: "Predictive maintenance, quality control, and supply chain optimization",
      icon: "🏭",
      useCases: ["Predictive maintenance", "Quality assurance", "Supply chain analytics"]
    },
    {
      industry: "Education",
      description: "Student performance, learning analytics, and institutional insights",
      icon: "🎓",
      useCases: ["Student success", "Curriculum optimization", "Resource planning"]
    },
    {
      industry: "Technology",
      description: "Product analytics, user behavior, and performance optimization",
      icon: "💻",
      useCases: ["User experience", "Product performance", "Technical metrics"]
    }
  ];

  const tools = [
    {
      name: "Tableau",
      description: "Interactive data visualization and business intelligence",
      icon: "📈"
    },
    {
      name: "Power BI",
      description: "Microsoft's business analytics and reporting platform",
      icon: "🔍"
    },
    {
      name: "Python",
      description: "Data analysis, machine learning, and statistical modeling",
      icon: "🐍"
    },
    {
      name: "R",
      description: "Statistical computing and graphics for data analysis",
      icon: "📊"
    },
    {
      name: "Apache Spark",
      description: "Big data processing and analytics engine",
      icon: "⚡"
    },
    {
      name: "Snowflake",
      description: "Cloud-native data warehouse for analytics",
      icon: "❄️"
    }
  ];

  const benefits = [
    {
      title: "Data-Driven Decisions",
      description: "Make informed decisions based on real data and insights",
      icon: "🎯"
    },
    {
      title: "Operational Efficiency",
      description: "Identify bottlenecks and optimize business processes",
      icon: "⚡"
    },
    {
      title: "Competitive Advantage",
      description: "Gain insights that give you an edge over competitors",
      icon: "🏆"
    },
    {
      title: "Cost Reduction",
      description: "Identify cost-saving opportunities and optimize resources",
      icon: "💰"
    },
    {
      title: "Customer Insights",
      description: "Understand customer behavior and improve satisfaction",
      icon: "👥"
    },
    {
      title: "Risk Mitigation",
      description: "Identify and address potential risks proactively",
      icon: "🛡️"
    }
  ];

  const process = [
    {
      step: "1",
      title: "Data Assessment",
      description: "Evaluate your current data infrastructure and identify opportunities"
    },
    {
      step: "2",
      title: "Strategy Development",
      description: "Create a comprehensive analytics strategy aligned with business goals"
    },
    {
      step: "3",
      title: "Implementation",
      description: "Build and deploy analytics solutions with best practices"
    },
    {
      step: "4",
      title: "Training & Adoption",
      description: "Train your team and ensure successful adoption of analytics tools"
    },
    {
      step: "5",
      title: "Ongoing Support",
      description: "Provide continuous support and optimization for long-term success"
    }
  ];

  return (
    <>
      <SEO 
        title="Data Analytics & Business Intelligence - Zion Tech Group"
        description="Transform your data into actionable insights with our comprehensive analytics and BI solutions. From data engineering to predictive analytics, we help you make data-driven decisions."
        canonical="/analytics"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
        <main className="pt-12">
          <div className="container mx-auto px-4 py-16">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Data Analytics & Business Intelligence
              </h1>
              <p className="text-xl text-blue-100 max-w-4xl mx-auto">
                Transform your raw data into actionable insights that drive business growth. 
                Our comprehensive analytics solutions help you make data-driven decisions 
                and stay ahead of the competition.
              </p>
            </div>

            {/* Analytics Services */}
            <div className="mb-20">
              <h2 className="text-3xl font-semibold text-white text-center mb-12">
                Our Analytics Services
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {analyticsServices.map((service, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-6 hover:bg-white/20 transition-colors duration-200">
                    <div className="text-4xl mb-4 text-center">{service.icon}</div>
                    <h3 className="text-xl font-semibold text-white mb-3 text-center">
                      {service.title}
                    </h3>
                    <p className="text-blue-100 mb-4 text-sm text-center">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-blue-200 text-sm flex items-center">
                          <span className="text-green-400 mr-2">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Industry Solutions */}
            <div className="mb-20">
              <h2 className="text-3xl font-semibold text-white text-center mb-12">
                Industry-Specific Solutions
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {industrySolutions.map((solution, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-6 hover:bg-white/20 transition-colors duration-200">
                    <div className="text-4xl mb-4 text-center">{solution.icon}</div>
                    <h3 className="text-xl font-semibold text-white mb-3 text-center">
                      {solution.industry}
                    </h3>
                    <p className="text-blue-100 mb-4 text-sm text-center">
                      {solution.description}
                    </p>
                    <div className="space-y-2">
                      {solution.useCases.map((useCase, useCaseIndex) => (
                        <div key={useCaseIndex} className="text-blue-200 text-sm flex items-center">
                          <span className="text-blue-400 mr-2">•</span>
                          {useCase}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools & Technologies */}
            <div className="mb-20">
              <h2 className="text-3xl font-semibold text-white text-center mb-12">
                Tools & Technologies
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {tools.map((tool, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-6 text-center hover:bg-white/20 transition-colors duration-200">
                    <div className="text-4xl mb-4">{tool.icon}</div>
                    <h3 className="text-xl font-semibold text-white mb-3">
                      {tool.name}
                    </h3>
                    <p className="text-blue-100 text-sm">
                      {tool.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div className="mb-20">
              <h2 className="text-3xl font-semibold text-white text-center mb-12">
                Why Choose Our Analytics Solutions?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {benefits.map((benefit, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-6 text-center hover:bg-white/20 transition-colors duration-200">
                    <div className="text-4xl mb-4">{benefit.icon}</div>
                    <h3 className="text-lg font-semibold text-white mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-blue-100 text-sm">
                      {benefit.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Process */}
            <div className="mb-20">
              <h2 className="text-3xl font-semibold text-white text-center mb-12">
                Our Analytics Process
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {process.map((step, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-6 text-center relative">
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                      {step.step}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3 mt-4">
                      {step.title}
                    </h3>
                    <p className="text-blue-100 text-sm">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div className="max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-8 text-center">
                <h2 className="text-3xl font-semibold text-white mb-4">
                  Ready to Transform Your Data?
                </h2>
                <p className="text-blue-100 mb-6 text-lg">
                  Let's discuss how our analytics solutions can help you unlock the full potential of your data 
                  and drive business growth through data-driven insights.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/contact"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-medium transition-colors duration-200 text-lg"
                  >
                    Start Analytics Discussion
                  </a>
                  <a
                    href="/request-quote"
                    className="border border-white/30 hover:bg-white/10 text-white px-8 py-4 rounded-lg font-medium transition-colors duration-200 text-lg"
                  >
                    Get Analytics Quote
                  </a>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Analytics;