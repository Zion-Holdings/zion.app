import Link from 'next/link';

export const metadata = {
  title: 'Case Studies - Zion Tech Group',
  description: 'Explore real-world case studies of how Zion Tech Group has transformed businesses with AI-powered solutions and autonomous systems.',
};

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      title: 'Global Manufacturing Corporation',
      subtitle: 'AI-Powered Production Optimization',
      industry: 'Manufacturing',
      challenge: 'A global manufacturing company was struggling with production inefficiencies, quality control issues, and supply chain disruptions that were costing millions annually.',
      solution: 'Implemented our AI Autonomous Business Manager and AI Autonomous Decision Engine to optimize production planning, quality control, and supply chain management.',
      results: [
        '35% increase in production efficiency',
        '28% reduction in quality control issues',
        '42% improvement in supply chain reliability',
        '$12M annual cost savings',
        '24/7 autonomous operation'
      ],
      technologies: ['AI Autonomous Systems', 'Predictive Analytics', 'Computer Vision', 'IoT Integration'],
      duration: '6 months',
      team: '8 AI specialists, 3 domain experts'
    },
    {
      title: 'Healthcare Network',
      subtitle: 'AI-Driven Patient Care & Research',
      industry: 'Healthcare',
      challenge: 'A major healthcare network needed to improve patient diagnosis accuracy, streamline research processes, and reduce administrative overhead while maintaining quality of care.',
      solution: 'Deployed our AI Autonomous Research Assistant and AI Autonomous Healthcare Physician systems to enhance diagnostic capabilities and research efficiency.',
      results: [
        '23% improvement in diagnostic accuracy',
        '40% faster research project completion',
        '30% reduction in administrative costs',
        'Improved patient outcomes',
        'Enhanced research collaboration'
      ],
      technologies: ['AI Research Assistant', 'Medical AI', 'Natural Language Processing', 'Predictive Analytics'],
      duration: '8 months',
      team: '12 AI specialists, 8 healthcare professionals'
    },
    {
      title: 'Financial Services Group',
      subtitle: 'Quantum-Powered Trading & Risk Management',
      industry: 'Finance',
      challenge: 'A leading financial services group required advanced risk assessment capabilities, real-time trading optimization, and fraud detection systems to stay competitive in volatile markets.',
      solution: 'Implemented our Quantum Financial Trading platform and AI Autonomous Decision Engine for real-time risk assessment and trading optimization.',
      results: [
        '45% improvement in risk assessment accuracy',
        '38% increase in trading performance',
        '99.7% fraud detection rate',
        'Real-time market analysis',
        'Enhanced compliance reporting'
      ],
      technologies: ['Quantum Computing', 'AI Decision Engine', 'Real-time Analytics', 'Blockchain Security'],
      duration: '10 months',
      team: '15 AI specialists, 6 quantum experts, 4 financial analysts'
    },
    {
      title: 'Retail Chain',
      subtitle: 'AI-Enhanced Customer Experience & Operations',
      industry: 'Retail',
      challenge: 'A national retail chain was experiencing declining customer satisfaction, inventory management issues, and inefficient marketing campaigns that were impacting revenue growth.',
      solution: 'Deployed our AI Content Marketing Automation, AI Business Intelligence Suite, and AI Autonomous Business Manager to transform customer experience and operations.',
      results: [
        '52% increase in customer satisfaction scores',
        '31% improvement in inventory turnover',
        '28% increase in marketing ROI',
        'Personalized customer experiences',
        'Optimized pricing strategies'
      ],
      technologies: ['AI Marketing Automation', 'Business Intelligence', 'Predictive Analytics', 'Customer Analytics'],
      duration: '7 months',
      team: '10 AI specialists, 5 retail experts, 3 marketing professionals'
    },
    {
      title: 'Technology Startup',
      subtitle: 'AI-Powered DevOps & Infrastructure',
      industry: 'Technology',
      challenge: 'A rapidly growing technology startup was struggling with deployment bottlenecks, infrastructure scaling issues, and development workflow inefficiencies that were slowing product development.',
      solution: 'Implemented our Autonomous DevOps Platform and Advanced IT Infrastructure Services to automate deployment processes and optimize infrastructure management.',
      results: [
        '85% reduction in deployment time',
        '60% improvement in infrastructure efficiency',
        '99.9% uptime achievement',
        'Automated scaling capabilities',
        'Enhanced development productivity'
      ],
      technologies: ['Autonomous DevOps', 'Cloud Infrastructure', 'Automation', 'Performance Optimization'],
      duration: '5 months',
      team: '6 AI specialists, 4 DevOps engineers, 2 infrastructure experts'
    },
    {
      title: 'Research Institution',
      subtitle: 'AI-Enhanced Scientific Discovery',
      industry: 'Research & Development',
      challenge: 'A prestigious research institution needed to accelerate scientific discovery, improve collaboration between research teams, and optimize resource allocation across multiple projects.',
      solution: 'Deployed our AI Autonomous Research Assistant and AI Autonomous Ecosystem Manager to streamline research processes and enhance collaboration.',
      results: [
        '50% acceleration in research timeline',
        '35% improvement in collaboration efficiency',
        '40% better resource utilization',
        'Enhanced cross-disciplinary research',
        'Improved publication quality'
      ],
      technologies: ['AI Research Assistant', 'Ecosystem Management', 'Collaboration Tools', 'Data Analytics'],
      duration: '9 months',
      team: '14 AI specialists, 6 research coordinators, 3 domain experts'
    }
  ];

  const industries = [
    'All Industries',
    'Manufacturing',
    'Healthcare',
    'Finance',
    'Retail',
    'Technology',
    'Research & Development'
  ];

  const technologies = [
    'All Technologies',
    'AI Autonomous Systems',
    'Quantum Computing',
    'Business Intelligence',
    'Cybersecurity',
    'DevOps & Infrastructure',
    'Content & Marketing'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Case Studies</h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Real-world transformations powered by Zion Tech Group's AI solutions. 
            Discover how we've helped organizations achieve remarkable results.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-600 font-medium">Successful Projects</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">$200M+</div>
              <div className="text-gray-600 font-medium">Value Generated</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">15+</div>
              <div className="text-gray-600 font-medium">Industries Served</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">99.9%</div>
              <div className="text-gray-600 font-medium">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore detailed case studies of how our AI solutions have transformed businesses 
              across various industries and delivered measurable results.
            </p>
          </div>
          
          <div className="space-y-12">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="p-8">
                  <div className="flex flex-col lg:flex-row gap-8">
                    {/* Left Column - Content */}
                    <div className="flex-1">
                      <div className="mb-4">
                        <span className="inline-block bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                          {study.industry}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{study.title}</h3>
                      <p className="text-lg text-blue-600 font-medium mb-4">{study.subtitle}</p>
                      
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">The Challenge</h4>
                          <p className="text-gray-600">{study.challenge}</p>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Our Solution</h4>
                          <p className="text-gray-600">{study.solution}</p>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Key Results</h4>
                          <ul className="space-y-1">
                            {study.results.map((result, resultIndex) => (
                              <li key={resultIndex} className="text-sm text-gray-600 flex items-center">
                                <span className="text-green-500 mr-2">✓</span>
                                {result}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    {/* Right Column - Details */}
                    <div className="lg:w-80 space-y-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {study.technologies.map((tech, techIndex) => (
                            <span key={techIndex} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Project Details</h4>
                        <div className="space-y-2 text-sm text-gray-600">
                          <div className="flex justify-between">
                            <span>Duration:</span>
                            <span className="font-medium">{study.duration}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Team Size:</span>
                            <span className="font-medium">{study.team}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="pt-4">
                        <Link
                          href={`/case-studies/${study.title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}`}
                          className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center py-3 rounded-lg font-semibold transition-colors duration-200"
                        >
                          View Full Case Study
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear directly from the organizations that have transformed their operations with our AI solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-xl p-8">
              <div className="text-2xl text-blue-600 mb-4">"</div>
              <p className="text-lg text-gray-700 mb-6 italic">
                "Zion Tech Group's AI solutions transformed our manufacturing operations completely. 
                The results exceeded our expectations, and the ROI was achieved within the first year."
              </p>
              <div>
                <div className="font-semibold text-gray-900">Sarah Johnson</div>
                <div className="text-blue-600">CTO, Global Manufacturing Corp</div>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-8">
              <div className="text-2xl text-blue-600 mb-4">"</div>
              <p className="text-lg text-gray-700 mb-6 italic">
                "The AI research assistant has accelerated our scientific discoveries by 50%. 
                It's like having an entire research team working 24/7 without fatigue."
              </p>
              <div>
                <div className="font-semibold text-gray-900">Dr. Michael Chen</div>
                <div className="text-blue-600">Research Director, Healthcare Network</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Success Methodology</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Proven approach that ensures successful AI implementation and measurable business outcomes
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Discovery</h3>
              <p className="text-gray-600">Deep understanding of your business challenges, goals, and current infrastructure</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Strategy</h3>
              <p className="text-gray-600">Custom AI solution design aligned with your business objectives and timeline</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Implementation</h3>
              <p className="text-gray-600">Agile development with regular checkpoints and stakeholder collaboration</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">4</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Optimization</h3>
              <p className="text-gray-600">Continuous monitoring, improvement, and support to maximize ROI</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Write Your Success Story?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join the organizations that have already transformed their operations with our AI-powered solutions. 
            Let's discuss how we can help you achieve similar results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200"
            >
              Start Your Project
            </Link>
            <Link
              href="/services"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}