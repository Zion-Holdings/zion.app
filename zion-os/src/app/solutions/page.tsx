import Link from 'next/link';

export default function SolutionsPage() {
  const solutions = [
    {
      title: "AI Autonomous Business Operations",
      description: "Transform your business with self-managing AI systems that operate independently and optimize every aspect of your operations.",
      features: [
        "24/7 autonomous operation",
        "Real-time decision making",
        "Predictive analytics",
        "Cost optimization",
        "Scalable architecture"
      ],
      icon: "🤖",
      href: "/solutions/autonomous-business-operations"
    },
    {
      title: "Quantum Computing Solutions",
      description: "Leverage the power of quantum computing to solve complex problems that are impossible for classical computers.",
      features: [
        "Quantum algorithm optimization",
        "Financial modeling",
        "Drug discovery",
        "Climate prediction",
        "Cryptography"
      ],
      icon: "⚛️",
      href: "/solutions/quantum-computing"
    },
    {
      title: "AI-Powered Enterprise Security",
      description: "Next-generation security solutions that use AI to detect and prevent threats before they impact your business.",
      features: [
        "Threat detection",
        "Behavioral analysis",
        "Automated response",
        "Compliance monitoring",
        "Real-time protection"
      ],
      icon: "🔒",
      href: "/solutions/enterprise-security"
    },
    {
      title: "AI Content Creation Platform",
      description: "Revolutionize your content strategy with AI-powered tools that generate high-quality, engaging content at scale.",
      features: [
        "Multi-format content",
        "Brand voice consistency",
        "SEO optimization",
        "Performance analytics",
        "Workflow automation"
      ],
      icon: "✍️",
      href: "/solutions/content-creation"
    },
    {
      title: "AI Business Intelligence Suite",
      description: "Transform raw data into actionable insights with our comprehensive AI-powered business intelligence platform.",
      features: [
        "Advanced analytics",
        "Predictive modeling",
        "Interactive dashboards",
        "Data visualization",
        "Real-time reporting"
      ],
      icon: "📊",
      href: "/solutions/business-intelligence"
    },
    {
      title: "AI Research & Development Platform",
      description: "Accelerate innovation with our AI-powered research platform that streamlines discovery and development processes.",
      features: [
        "Literature analysis",
        "Hypothesis generation",
        "Experimental design",
        "Data interpretation",
        "Collaboration tools"
      ],
      icon: "🔬",
      href: "/solutions/research-development"
    }
  ];

  const caseStudies = [
    {
      title: "Global Manufacturing Optimization",
      company: "Fortune 500 Manufacturer",
      industry: "Manufacturing",
      challenge: "Complex supply chain optimization across 50+ countries",
      solution: "AI autonomous logistics system with quantum computing optimization",
      results: [
        "35% reduction in logistics costs",
        "40% improvement in delivery times",
        "25% increase in operational efficiency"
      ]
    },
    {
      title: "Financial Services AI Transformation",
      company: "International Bank",
      industry: "Financial Services",
      challenge: "Manual compliance monitoring and risk assessment",
      solution: "AI autonomous compliance and risk management platform",
      results: [
        "90% reduction in compliance errors",
        "60% faster risk assessment",
        "50% cost savings in operations"
      ]
    },
    {
      title: "Healthcare AI Implementation",
      company: "Regional Hospital Network",
      industry: "Healthcare",
      challenge: "Patient diagnosis accuracy and treatment planning",
      solution: "AI autonomous medical diagnosis and treatment optimization",
      results: [
        "95% diagnostic accuracy improvement",
        "30% reduction in treatment time",
        "40% increase in patient outcomes"
      ]
    }
  ];

  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="text-center mb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            AI Solutions That Transform
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover how our cutting-edge AI solutions are revolutionizing industries and driving unprecedented business growth. 
            From autonomous operations to quantum computing, we deliver results that exceed expectations.
          </p>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Our Core Solutions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-white/10 rounded-xl p-6 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105">
                <div className="text-4xl mb-4">{solution.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {solution.title}
                </h3>
                <p className="text-gray-300 mb-4">
                  {solution.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                      <svg className="w-4 h-4 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link 
                  href={solution.href} 
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium transition-colors"
                >
                  Learn More
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Success Stories
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-white/10 rounded-xl p-6">
                <div className="mb-4">
                  <span className="inline-block bg-blue-600/20 text-blue-300 text-xs font-medium px-2.5 py-0.5 rounded">
                    {study.industry}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {study.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  {study.company}
                </p>
                <div className="mb-4">
                  <h4 className="text-white font-medium mb-2">Challenge:</h4>
                  <p className="text-gray-300 text-sm mb-3">{study.challenge}</p>
                  <h4 className="text-white font-medium mb-2">Solution:</h4>
                  <p className="text-gray-300 text-sm">{study.solution}</p>
                </div>
                <div>
                  <h4 className="text-white font-medium mb-2">Results:</h4>
                  <ul className="space-y-1">
                    {study.results.map((result, resultIndex) => (
                      <li key={resultIndex} className="flex items-center text-gray-300 text-sm">
                        <svg className="w-3 h-3 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Our Implementation Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Discovery</h3>
              <p className="text-gray-300">We analyze your business needs and identify AI opportunities for maximum impact.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Strategy</h3>
              <p className="text-gray-300">We develop a comprehensive AI strategy tailored to your business objectives.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Implementation</h3>
              <p className="text-gray-300">Our expert team deploys and configures your AI solutions with precision.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Optimization</h3>
              <p className="text-gray-300">We continuously monitor and optimize your AI systems for peak performance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join the AI revolution and discover how our solutions can drive innovation, efficiency, and growth for your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 transform hover:scale-105">
              Start Your Transformation
            </Link>
            <Link href="/services" className="border border-white/20 hover:border-white/40 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 hover:bg-white/10">
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}