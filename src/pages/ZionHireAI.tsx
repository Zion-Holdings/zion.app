import { SEO } from '@/components/SEO';

const ZionHireAI = () => {
  const aiCategories = [
    {
      title: "AI Engineers",
      description: "Machine learning engineers, data scientists, and AI researchers",
      skills: ["Python", "TensorFlow", "PyTorch", "MLOps", "NLP"],
      icon: "🤖"
    },
    {
      title: "Data Scientists",
      description: "Experts in data analysis, statistics, and predictive modeling",
      skills: ["R", "Python", "SQL", "Statistics", "Data Visualization"],
      icon: "📊"
    },
    {
      title: "ML Ops Engineers",
      description: "Specialists in deploying and maintaining ML models",
      skills: ["Docker", "Kubernetes", "AWS", "Azure", "CI/CD"],
      icon: "⚙️"
    },
    {
      title: "AI Product Managers",
      description: "Leaders who bridge business and AI technology",
      skills: ["Product Strategy", "AI Ethics", "Stakeholder Management", "Agile"],
      icon: "🎯"
    }
  ];

  const aiServices = [
    {
      title: "AI Talent Assessment",
      description: "Advanced algorithms evaluate technical skills, experience, and cultural fit",
      features: ["Skill verification", "Portfolio analysis", "Cultural alignment", "Performance prediction"]
    },
    {
      title: "Smart Matching",
      description: "AI-powered algorithms match the best candidates to your specific requirements",
      features: ["Requirement analysis", "Candidate ranking", "Skill gap analysis", "Success prediction"]
    },
    {
      title: "Continuous Learning",
      description: "Our AI system continuously improves based on hiring outcomes and feedback",
      features: ["Performance tracking", "Feedback integration", "Algorithm optimization", "Success metrics"]
    }
  ];

  const successMetrics = [
    {
      metric: "95%",
      label: "Hiring Success Rate",
      description: "Candidates placed successfully in their roles"
    },
    {
      metric: "60%",
      label: "Faster Hiring",
      description: "Reduced time-to-hire compared to traditional methods"
    },
    {
      metric: "40%",
      label: "Cost Reduction",
      description: "Lower hiring costs through better matching"
    },
    {
      metric: "90%",
      label: "Retention Rate",
      description: "Higher employee retention after 12 months"
    }
  ];

  const howItWorks = [
    {
      step: "1",
      title: "Define Requirements",
      description: "Tell us about your project needs, team culture, and technical requirements"
    },
    {
      step: "2",
      title: "AI Analysis",
      description: "Our AI analyzes your requirements and searches our talent database"
    },
    {
      step: "3",
      title: "Smart Matching",
      description: "Get a curated list of top candidates ranked by fit and availability"
    },
    {
      step: "4",
      title: "Connect & Hire",
      description: "Interview matched candidates and hire the perfect fit for your team"
    }
  ];

  return (
    <>
      <SEO 
        title="ZionHireAI - AI-Powered Talent Matching"
        description="Revolutionize your hiring with ZionHireAI. Our AI-powered platform matches you with the perfect tech talent using advanced algorithms and machine learning."
        canonical="/zion-hire-ai"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
        <main className="pt-12">
          <div className="container mx-auto px-4 py-16">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                ZionHireAI
              </h1>
              <p className="text-2xl text-blue-200 mb-4">
                AI-Powered Talent Matching
              </p>
              <p className="text-xl text-blue-100 max-w-4xl mx-auto">
                Revolutionize your hiring process with our advanced AI algorithms that match you with the perfect tech talent. 
                Faster, smarter, and more accurate than traditional hiring methods.
              </p>
            </div>

            {/* AI Categories */}
            <div className="mb-20">
              <h2 className="text-3xl font-semibold text-white text-center mb-12">
                AI Talent Categories
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                {aiCategories.map((category, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-6 hover:bg-white/20 transition-colors duration-200">
                    <div className="text-4xl mb-4 text-center">{category.icon}</div>
                    <h3 className="text-xl font-semibold text-white mb-3 text-center">
                      {category.title}
                    </h3>
                    <p className="text-blue-100 mb-4 text-sm text-center">
                      {category.description}
                    </p>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {category.skills.map((skill, skillIndex) => (
                        <span 
                          key={skillIndex}
                          className="bg-blue-600/30 text-blue-200 px-2 py-1 rounded-full text-xs"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* AI Services */}
            <div className="mb-20">
              <h2 className="text-3xl font-semibold text-white text-center mb-12">
                How Our AI Works
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {aiServices.map((service, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-6 text-center">
                    <h3 className="text-xl font-semibold text-white mb-4">
                      {service.title}
                    </h3>
                    <p className="text-blue-100 mb-4 text-sm">
                      {service.description}
                    </p>
                    <ul className="space-y-2 text-left">
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

            {/* Success Metrics */}
            <div className="mb-20">
              <h2 className="text-3xl font-semibold text-white text-center mb-12">
                Proven Results
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                {successMetrics.map((metric, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-6 text-center">
                    <div className="text-4xl font-bold text-blue-400 mb-2">
                      {metric.metric}
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {metric.label}
                    </h3>
                    <p className="text-blue-100 text-sm">
                      {metric.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* How It Works */}
            <div className="mb-20">
              <h2 className="text-3xl font-semibold text-white text-center mb-12">
                How It Works
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                {howItWorks.map((step, index) => (
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

            {/* Features Grid */}
            <div className="mb-20">
              <h2 className="text-3xl font-semibold text-white text-center mb-12">
                Key Features
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">🎯 Precision Matching</h3>
                  <p className="text-blue-100 text-sm">
                    Our AI analyzes hundreds of data points to find the perfect match for your specific needs.
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">⚡ Speed & Efficiency</h3>
                  <p className="text-blue-100 text-sm">
                    Get qualified candidates in hours, not weeks. Reduce your time-to-hire significantly.
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">🔒 Quality Assurance</h3>
                  <p className="text-blue-100 text-sm">
                    Every candidate is pre-vetted and verified. Maintain high hiring standards with confidence.
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">📊 Data-Driven Insights</h3>
                  <p className="text-blue-100 text-sm">
                    Get detailed analytics and insights to optimize your hiring process continuously.
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">🌍 Global Talent Pool</h3>
                  <p className="text-blue-100 text-sm">
                    Access top tech talent from around the world. No geographical limitations.
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">🔄 Continuous Learning</h3>
                  <p className="text-blue-100 text-sm">
                    Our AI system improves with every hire, getting smarter and more accurate over time.
                  </p>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-8 text-center">
                <h2 className="text-3xl font-semibold text-white mb-4">
                  Ready to Transform Your Hiring?
                </h2>
                <p className="text-blue-100 mb-6 text-lg">
                  Experience the future of talent acquisition with ZionHireAI. Get started today and see the difference AI-powered hiring can make.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/contact"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-medium transition-colors duration-200 text-lg"
                  >
                    Get Started with ZionHireAI
                  </a>
                  <a
                    href="/request-quote"
                    className="border border-white/30 hover:bg-white/10 text-white px-8 py-4 rounded-lg font-medium transition-colors duration-200 text-lg"
                  >
                    Request Demo
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

export default ZionHireAI;