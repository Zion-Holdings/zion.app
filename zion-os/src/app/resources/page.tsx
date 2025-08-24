import Link from 'next/link';

export const metadata = {
  title: 'Resources - Zion Tech Group',
  description: 'Access valuable resources including whitepapers, case studies, webinars, and educational content from Zion Tech Group.',
};

export default function ResourcesPage() {
  const whitepapers = [
    {
      id: 'ai-consciousness-whitepaper',
      title: 'The Future of AI Consciousness: A Comprehensive Guide',
      description: 'Explore the latest research and developments in artificial consciousness and what it means for the future of AI.',
      category: 'AI Research',
      author: 'Dr. Emily Watson',
      date: '2024-01-15',
      pages: 45,
      downloadCount: 1247,
      image: '/resources/ai-consciousness-wp.jpg'
    },
    {
      id: 'quantum-computing-business',
      title: 'Quantum Computing in Business: Practical Applications and ROI',
      description: 'Learn how quantum computing is transforming business operations and how to calculate the return on investment.',
      category: 'Quantum Computing',
      author: 'Dr. Sarah Chen',
      date: '2024-01-10',
      pages: 38,
      downloadCount: 892,
      image: '/resources/quantum-business-wp.jpg'
    },
    {
      id: 'ai-autonomous-systems',
      title: 'Autonomous AI Systems: Implementation Guide for Enterprises',
      description: 'A comprehensive guide to implementing autonomous AI systems in enterprise environments.',
      category: 'AI Solutions',
      author: 'Dr. Kleber Santos',
      date: '2024-01-05',
      pages: 52,
      downloadCount: 1563,
      image: '/resources/autonomous-systems-wp.jpg'
    },
    {
      id: 'cybersecurity-ai',
      title: 'AI-Powered Cybersecurity: Defending Against Modern Threats',
      description: 'Understanding how AI is revolutionizing cybersecurity and protecting organizations from evolving threats.',
      category: 'Cybersecurity',
      author: 'Dr. James Wilson',
      date: '2023-12-20',
      pages: 41,
      downloadCount: 1102,
      image: '/resources/ai-cybersecurity-wp.jpg'
    }
  ];

  const caseStudies = [
    {
      id: 'financial-services-ai',
      title: 'AI Transformation in Financial Services: 300% ROI Achieved',
      description: 'How a major financial institution achieved significant returns through AI-powered process automation.',
      industry: 'Financial Services',
      results: '300% ROI, 60% cost reduction',
      duration: '18 months',
      image: '/resources/financial-ai-case.jpg'
    },
    {
      id: 'healthcare-quantum',
      title: 'Quantum Computing Accelerates Drug Discovery by 10x',
      description: 'A pharmaceutical company leverages quantum computing to dramatically speed up drug discovery processes.',
      industry: 'Healthcare',
      results: '10x faster discovery, 40% cost savings',
      duration: '24 months',
      image: '/resources/healthcare-quantum-case.jpg'
    },
    {
      id: 'manufacturing-autonomous',
      title: 'Autonomous AI Systems Revolutionize Manufacturing Operations',
      description: 'How a manufacturing company implemented autonomous AI systems to optimize production and quality control.',
      industry: 'Manufacturing',
      results: '25% efficiency increase, 90% defect reduction',
      duration: '12 months',
      image: '/resources/manufacturing-ai-case.jpg'
    },
    {
      id: 'retail-personalization',
      title: 'AI-Powered Personalization Drives 150% Revenue Growth',
      description: 'A retail company uses AI to deliver personalized customer experiences and drive significant revenue growth.',
      industry: 'Retail',
      results: '150% revenue growth, 80% customer satisfaction',
      duration: '15 months',
      image: '/resources/retail-ai-case.jpg'
    }
  ];

  const webinars = [
    {
      id: 'ai-future-business',
      title: 'The Future of AI in Business: What Leaders Need to Know',
      description: 'Join our experts for an in-depth discussion on how AI is reshaping business strategies and operations.',
      speaker: 'Dr. Kleber Santos',
      date: '2024-02-15',
      duration: '60 min',
      attendees: 1250,
      image: '/resources/ai-future-webinar.jpg'
    },
    {
      id: 'quantum-computing-primer',
      title: 'Quantum Computing Primer: From Theory to Practice',
      description: 'An educational session on quantum computing fundamentals and practical business applications.',
      speaker: 'Dr. Sarah Chen',
      date: '2024-02-10',
      duration: '90 min',
      attendees: 980,
      image: '/resources/quantum-primer-webinar.jpg'
    },
    {
      id: 'ai-ethics-responsibility',
      title: 'AI Ethics and Responsible Development',
      description: 'Exploring the ethical considerations and responsible practices in AI development and deployment.',
      speaker: 'Dr. Emily Watson',
      date: '2024-02-05',
      duration: '75 min',
      attendees: 1100,
      image: '/resources/ai-ethics-webinar.jpg'
    },
    {
      id: 'cybersecurity-trends',
      title: '2024 Cybersecurity Trends: AI vs. AI',
      description: 'Understanding the evolving cybersecurity landscape and how AI is being used by both defenders and attackers.',
      speaker: 'Dr. James Wilson',
      date: '2024-01-30',
      duration: '60 min',
      attendees: 1350,
      image: '/resources/cybersecurity-webinar.jpg'
    }
  ];

  const educationalContent = [
    {
      id: 'ai-fundamentals',
      title: 'AI Fundamentals: A Beginner\'s Guide',
      description: 'Start your AI journey with this comprehensive introduction to artificial intelligence concepts and applications.',
      level: 'Beginner',
      duration: '4 hours',
      modules: 8,
      image: '/resources/ai-fundamentals-course.jpg'
    },
    {
      id: 'quantum-basics',
      title: 'Quantum Computing Basics',
      description: 'Learn the fundamentals of quantum computing and understand how it differs from classical computing.',
      level: 'Intermediate',
      duration: '6 hours',
      modules: 10,
      image: '/resources/quantum-basics-course.jpg'
    },
    {
      id: 'machine-learning-practical',
      title: 'Practical Machine Learning Applications',
      description: 'Hands-on course on implementing machine learning solutions for real-world business problems.',
      level: 'Advanced',
      duration: '8 hours',
      modules: 12,
      image: '/resources/ml-practical-course.jpg'
    },
    {
      id: 'ai-strategy',
      title: 'AI Strategy for Business Leaders',
      description: 'Strategic framework for business leaders to develop and implement AI initiatives in their organizations.',
      level: 'Executive',
      duration: '3 hours',
      modules: 6,
      image: '/resources/ai-strategy-course.jpg'
    }
  ];

  const tools = [
    {
      id: 'ai-readiness-assessment',
      title: 'AI Readiness Assessment Tool',
      description: 'Evaluate your organization\'s readiness for AI implementation with our comprehensive assessment tool.',
      type: 'Interactive Tool',
      duration: '15 min',
      image: '/resources/ai-assessment-tool.jpg'
    },
    {
      id: 'quantum-calculator',
      title: 'Quantum Computing ROI Calculator',
      description: 'Calculate the potential return on investment for quantum computing projects in your industry.',
      type: 'Calculator',
      duration: '10 min',
      image: '/resources/quantum-calculator.jpg'
    },
    {
      id: 'ai-ethics-checklist',
      title: 'AI Ethics Checklist',
      description: 'Ensure your AI projects meet ethical standards with our comprehensive checklist and guidelines.',
      type: 'Checklist',
      duration: '5 min',
      image: '/resources/ai-ethics-checklist.jpg'
    },
    {
      id: 'cybersecurity-audit',
      title: 'Cybersecurity Risk Assessment',
      description: 'Assess your organization\'s cybersecurity posture and identify areas for improvement.',
      type: 'Assessment',
      duration: '20 min',
      image: '/resources/cybersecurity-audit.jpg'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Resources</h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Access valuable insights, research, and tools to accelerate your AI and 
            technology transformation journey.
          </p>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors duration-200">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">📄</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Whitepapers</h3>
              <p className="text-sm text-gray-600">In-depth research and insights</p>
            </div>
            
            <div className="text-center p-6 bg-purple-50 rounded-xl hover:bg-purple-100 transition-colors duration-200">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">📊</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Case Studies</h3>
              <p className="text-sm text-gray-600">Real-world success stories</p>
            </div>
            
            <div className="text-center p-6 bg-green-50 rounded-xl hover:bg-green-100 transition-colors duration-200">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🎥</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Webinars</h3>
              <p className="text-sm text-gray-600">Expert-led sessions</p>
            </div>
            
            <div className="text-center p-6 bg-orange-50 rounded-xl hover:bg-orange-100 transition-colors duration-200">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🛠️</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Tools</h3>
              <p className="text-sm text-gray-600">Interactive resources</p>
            </div>
          </div>
        </div>
      </section>

      {/* Whitepapers */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Whitepapers</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Deep insights and research findings from our team of experts
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whitepapers.map((paper, index) => (
              <div key={paper.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                  <span className="text-white text-4xl font-bold">
                    {paper.title.split(' ').slice(0, 2).map(word => word[0]).join('')}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                      {paper.category}
                    </span>
                    <span className="text-gray-500 text-sm">{paper.pages} pages</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{paper.title}</h3>
                  <p className="text-gray-600 mb-4">{paper.description}</p>
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-sm text-gray-500">
                      <p>By {paper.author}</p>
                      <p>{new Date(paper.date).toLocaleDateString()}</p>
                    </div>
                    <div className="text-right text-sm text-gray-500">
                      <p>{paper.downloadCount.toLocaleString()} downloads</p>
                    </div>
                  </div>
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors duration-200">
                    Download Whitepaper
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Case Studies</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real-world examples of how our solutions drive business transformation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <div key={study.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-200">
                <div className="h-48 bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center">
                  <span className="text-white text-4xl font-bold">
                    {study.title.split(' ').slice(0, 2).map(word => word[0]).join('')}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                      {study.industry}
                    </span>
                    <span className="text-gray-500 text-sm">{study.duration}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{study.title}</h3>
                  <p className="text-gray-600 mb-4">{study.description}</p>
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Key Results:</h4>
                    <p className="text-green-600 font-medium">{study.results}</p>
                  </div>
                  <Link
                    href={`/case-studies/${study.id}`}
                    className="block w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold text-center transition-colors duration-200"
                  >
                    Read Full Case Study
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Webinars */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Upcoming Webinars</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join our experts for live sessions on cutting-edge topics
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {webinars.map((webinar, index) => (
              <div key={webinar.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="h-48 bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center">
                  <span className="text-white text-4xl font-bold">
                    {webinar.title.split(' ').slice(0, 2).map(word => word[0]).join('')}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">
                      {webinar.duration}
                    </span>
                    <span className="text-gray-500 text-sm">{webinar.attendees.toLocaleString()} registered</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{webinar.title}</h3>
                  <p className="text-gray-600 mb-4">{webinar.description}</p>
                  <div className="mb-4">
                    <p className="text-sm text-gray-600">
                      <span className="font-medium">Speaker:</span> {webinar.speaker}
                    </p>
                    <p className="text-sm text-gray-600">
                      <span className="font-medium">Date:</span> {new Date(webinar.date).toLocaleDateString()}
                    </p>
                  </div>
                  <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold transition-colors duration-200">
                    Register Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Educational Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Educational Content</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Learn from our experts with comprehensive courses and training materials
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {educationalContent.map((course, index) => (
              <div key={course.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-200">
                <div className="h-32 bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">
                    {course.title.split(' ').slice(0, 2).map(word => word[0]).join('')}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-full">
                      {course.level}
                    </span>
                    <span className="text-gray-500 text-sm">{course.duration}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{course.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{course.description}</p>
                  <div className="mb-4">
                    <p className="text-sm text-gray-600">
                      <span className="font-medium">{course.modules} modules</span>
                    </p>
                  </div>
                  <button className="w-full bg-orange-600 hover:bg-orange-700 text-white py-2 rounded-lg font-semibold text-sm transition-colors duration-200">
                    Start Learning
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Tools */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Interactive Tools</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Practical tools and assessments to help you evaluate and plan your AI initiatives
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {tools.map((tool, index) => (
              <div key={tool.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="h-32 bg-gradient-to-br from-indigo-400 to-blue-500 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">
                    {tool.title.split(' ').slice(0, 2).map(word => word[0]).join('')}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded-full">
                      {tool.type}
                    </span>
                    <span className="text-gray-500 text-sm">{tool.duration}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{tool.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{tool.description}</p>
                  <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg font-semibold text-sm transition-colors duration-200">
                    Launch Tool
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Stay Updated with New Resources</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Get notified when we publish new whitepapers, case studies, and educational content.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <button className="bg-white text-blue-900 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors duration-200">
              Subscribe
            </button>
          </div>
          <p className="text-sm text-blue-200 mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Need More Specific Resources?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Can't find what you're looking for? Our team is here to help you find the right resources for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200"
            >
              Contact Our Team
            </Link>
            <Link
              href="/services"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}