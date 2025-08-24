import Link from 'next/link';

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      title: 'Global Bank Reduces Fraud by 95% with AI-Powered Security',
      company: 'Fortune 500 Financial Institution',
      industry: 'Banking & Finance',
      challenge: 'The bank was facing increasing sophisticated fraud attempts, resulting in millions in losses annually and eroding customer trust.',
      solution: 'Implemented our AI-powered enterprise security platform with real-time threat detection and behavioral analysis.',
      results: [
        '95% reduction in fraudulent transactions',
        '$50M+ annual savings in fraud prevention',
        '99.9% accuracy in threat detection',
        'Real-time response to security incidents'
      ],
      technologies: ['AI Threat Detection', 'Behavioral Analysis', 'Machine Learning', 'Real-time Processing'],
      image: '/images/case-studies/bank-security.jpg'
    },
    {
      title: 'Manufacturing Giant Achieves 40% Cost Reduction with Autonomous AI',
      company: 'Global Manufacturing Corporation',
      industry: 'Manufacturing',
      challenge: 'The company struggled with inefficient production processes, high maintenance costs, and quality control issues.',
      solution: 'Deployed our AI autonomous business manager and manufacturing systems for predictive maintenance and process optimization.',
      results: [
        '40% reduction in operational costs',
        '60% improvement in production efficiency',
        '90% reduction in unplanned downtime',
        '25% increase in product quality'
      ],
      technologies: ['AI Autonomous Systems', 'Predictive Maintenance', 'Process Optimization', 'Quality Control'],
      image: '/images/case-studies/manufacturing-ai.jpg'
    },
    {
      title: 'Healthcare Provider Accelerates Drug Discovery by 10x',
      company: 'Leading Pharmaceutical Company',
      industry: 'Healthcare & Life Sciences',
      challenge: 'Traditional drug discovery methods were too slow and expensive, taking 10+ years and billions in investment.',
      solution: 'Implemented our quantum neural network platform and AI autonomous research assistant for drug discovery.',
      results: [
        '10x faster drug discovery process',
        '70% reduction in research costs',
        'Improved accuracy in molecular modeling',
        'Accelerated clinical trial design'
      ],
      technologies: ['Quantum Neural Networks', 'AI Research Assistant', 'Molecular Modeling', 'Drug Discovery'],
      image: '/images/case-studies/healthcare-ai.jpg'
    },
    {
      title: 'Retail Chain Boosts Revenue by 35% with AI-Powered Personalization',
      company: 'National Retail Chain',
      industry: 'Retail & E-commerce',
      challenge: 'The retail chain struggled with customer retention, inventory management, and personalized marketing.',
      solution: 'Deployed our AI business intelligence suite and content generation platform for customer analytics and marketing.',
      results: [
        '35% increase in revenue',
        '50% improvement in customer retention',
        '30% reduction in inventory costs',
        'Personalized marketing campaigns'
      ],
      technologies: ['AI Business Intelligence', 'Content Generation', 'Customer Analytics', 'Marketing Automation'],
      image: '/images/case-studies/retail-ai.jpg'
    },
    {
      title: 'Logistics Company Optimizes Routes and Reduces Costs by 45%',
      company: 'International Logistics Provider',
      industry: 'Logistics & Transportation',
      challenge: 'Complex routing problems, fuel costs, and delivery delays were impacting profitability and customer satisfaction.',
      solution: 'Implemented our AI autonomous decision engine and quantum computing solutions for route optimization.',
      results: [
        '45% reduction in transportation costs',
        '60% improvement in delivery times',
        '30% reduction in fuel consumption',
        'Real-time route optimization'
      ],
      technologies: ['AI Decision Engine', 'Quantum Computing', 'Route Optimization', 'Real-time Analytics'],
      image: '/images/case-studies/logistics-ai.jpg'
    },
    {
      title: 'Energy Company Achieves 99.9% Grid Reliability with AI',
      company: 'Major Energy Utility',
      industry: 'Energy & Utilities',
      challenge: 'Grid failures, inefficient energy distribution, and rising maintenance costs were affecting service quality.',
      solution: 'Deployed our AI autonomous systems for grid optimization, predictive maintenance, and energy trading.',
      results: [
        '99.9% grid reliability',
        '25% reduction in energy losses',
        '40% decrease in maintenance costs',
        'Optimized energy distribution'
      ],
      technologies: ['AI Autonomous Systems', 'Grid Optimization', 'Predictive Maintenance', 'Energy Trading'],
      image: '/images/case-studies/energy-ai.jpg'
    }
  ];

  const industries = [
    'All Industries',
    'Banking & Finance',
    'Manufacturing',
    'Healthcare & Life Sciences',
    'Retail & E-commerce',
    'Logistics & Transportation',
    'Energy & Utilities'
  ];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Case Studies</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Real-world examples of how Zion Tech Group's AI solutions have transformed businesses 
            across industries. Discover the measurable impact of our cutting-edge technology.
          </p>
        </div>

        {/* Industry Filter */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            {industries.map((industry, index) => (
              <button
                key={index}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  index === 0
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
                    : 'bg-black/20 text-gray-300 hover:bg-white/10 border border-white/10'
                }`}
              >
                {industry}
              </button>
            ))}
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {caseStudies.map((study, index) => (
            <div key={index} className="bg-black/20 p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-200">
              <div className="mb-6">
                <div className="text-sm text-purple-400 font-medium mb-2">{study.industry}</div>
                <h3 className="text-2xl font-bold text-white mb-2">{study.title}</h3>
                <div className="text-gray-400 text-sm mb-4">{study.company}</div>
              </div>

              <div className="space-y-4 mb-6">
                <div>
                  <h4 className="text-purple-400 font-medium mb-2">Challenge</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">{study.challenge}</p>
                </div>
                
                <div>
                  <h4 className="text-blue-400 font-medium mb-2">Solution</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">{study.solution}</p>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-green-400 font-medium mb-3">Results</h4>
                <ul className="space-y-2">
                  {study.results.map((result, resultIndex) => (
                    <li key={resultIndex} className="text-gray-300 text-sm flex items-center">
                      <span className="text-green-400 mr-2">✓</span>
                      {result}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="text-purple-400 font-medium mb-3">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {study.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-purple-900/30 text-purple-300 text-xs rounded-full border border-purple-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <Link
                href="/contact"
                className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 transform hover:scale-105"
              >
                Learn How We Can Help You
              </Link>
            </div>
          ))}
        </div>

        {/* Success Metrics */}
        <div className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 p-8 rounded-2xl border border-white/10 mb-20">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Collective Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">$2B+</div>
              <div className="text-gray-300">Total Value Generated</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">500+</div>
              <div className="text-gray-300">AI Models Deployed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">50+</div>
              <div className="text-gray-300">Enterprise Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">99.9%</div>
              <div className="text-gray-300">Client Satisfaction</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Write Your Success Story?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join the ranks of successful companies that have transformed their business with Zion Tech Group's AI solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105"
            >
              Start Your Transformation
            </Link>
            <Link
              href="/services"
              className="border border-white/20 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all duration-200"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}