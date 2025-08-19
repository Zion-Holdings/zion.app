import { useRouter } from 'next/router';
import Link from 'next/link';
import Head from 'next/head';

// Mock case study data - in a real app this would come from an API or CMS
const caseStudies = {
  'ai-automation-success': {
    id: 'ai-automation-success',
    title: 'AI-Powered Automation Success Story',
    company: 'TechCorp Solutions',
    industry: 'Technology',
    challenge: 'Manual processes were consuming 40+ hours per week and causing delays in customer service.',
    solution: 'Implemented intelligent automation workflows using AI and machine learning algorithms.',
    results: [
      'Reduced manual processing time by 85%',
      'Improved customer response time from 24 hours to 2 hours',
      'Increased team productivity by 60%',
      'ROI of 300% within 6 months'
    ],
    technologies: ['AI/ML', 'RPA', 'Workflow Automation', 'API Integration'],
    duration: '4 months',
    teamSize: '8 developers + 2 business analysts'
  },
  'digital-transformation': {
    id: 'digital-transformation',
    title: 'Complete Digital Transformation Journey',
    company: 'Global Manufacturing Inc.',
    industry: 'Manufacturing',
    challenge: 'Legacy systems were preventing growth and causing operational inefficiencies across 12 locations.',
    solution: 'End-to-end digital transformation including cloud migration, process automation, and data analytics.',
    results: [
      'Unified operations across all locations',
      'Reduced operational costs by 35%',
      'Improved supply chain visibility by 90%',
      'Enhanced decision-making with real-time analytics'
    ],
    technologies: ['Cloud Computing', 'IoT', 'Data Analytics', 'Process Automation'],
    duration: '18 months',
    teamSize: '15 developers + 5 architects + 10 business users'
  },
  'startup-scaling': {
    id: 'startup-scaling',
    title: 'Startup Scaling from 0 to 100K Users',
    company: 'InnovateStart',
    industry: 'SaaS',
    challenge: 'Rapid user growth was overwhelming manual processes and causing system crashes.',
    solution: 'Built scalable infrastructure and automated user onboarding, support, and analytics systems.',
    results: [
      'Successfully handled 100K+ concurrent users',
      'Automated 95% of user onboarding',
      'Reduced support tickets by 70%',
      'Achieved 99.9% uptime'
    ],
    technologies: ['Microservices', 'Auto-scaling', 'CI/CD', 'Monitoring'],
    duration: '6 months',
    teamSize: '6 developers + 2 DevOps engineers'
  }
};

export default function CaseStudyDetail() {
  const router = useRouter();
  const { id } = router.query;
  
  const caseStudy = caseStudies[id as keyof typeof caseStudies];

  if (!caseStudy) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Case Study Not Found</h1>
            <p className="text-xl mb-8">The case study you're looking for doesn't exist.</p>
            <Link href="/case-studies" className="px-6 py-3 bg-cyan-600 hover:bg-cyan-700 rounded-lg transition-colors">
              Back to Case Studies
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{caseStudy.title} - Case Study | Zion App</title>
        <meta name="description" content={`${caseStudy.company} case study: ${caseStudy.challenge}`} />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
        {/* Navigation */}
        <nav className="border-b border-white/10 bg-white/5 backdrop-blur-xl">
          <div className="container mx-auto px-4 py-4">
            <Link href="/" className="text-cyan-400 hover:text-cyan-300 transition-colors">
              ← Back to Home
            </Link>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 bg-cyan-600/20 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-medium mb-6">
                Case Study
              </span>
              <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-cyan-300 bg-clip-text text-transparent">
                {caseStudy.title}
              </h1>
              <div className="flex items-center justify-center gap-6 text-lg text-gray-300">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                  {caseStudy.company}
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                  {caseStudy.industry}
                </span>
              </div>
            </div>

            {/* Challenge & Solution */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-4 text-red-400">The Challenge</h3>
                <p className="text-lg text-gray-300 leading-relaxed">{caseStudy.challenge}</p>
              </div>
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-4 text-green-400">Our Solution</h3>
                <p className="text-lg text-gray-300 leading-relaxed">{caseStudy.solution}</p>
              </div>
            </div>

            {/* Results */}
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 mb-16">
              <h3 className="text-3xl font-bold mb-6 text-center text-yellow-400">Results & Impact</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {caseStudy.results.map((result, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <span className="text-2xl text-green-400">✓</span>
                    <p className="text-lg text-gray-300">{result}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Details */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 text-center">
                <h4 className="text-xl font-bold mb-3 text-cyan-400">Technologies</h4>
                <div className="space-y-2">
                  {caseStudy.technologies.map((tech, index) => (
                    <span key={index} className="inline-block px-3 py-1 bg-cyan-600/20 border border-cyan-500/30 rounded-full text-cyan-400 text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 text-center">
                <h4 className="text-xl font-bold mb-3 text-purple-400">Duration</h4>
                <p className="text-2xl font-bold text-white">{caseStudy.duration}</p>
              </div>
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 text-center">
                <h4 className="text-xl font-bold mb-3 text-green-400">Team Size</h4>
                <p className="text-2xl font-bold text-white">{caseStudy.teamSize}</p>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <div className="bg-gradient-to-r from-cyan-600/20 to-purple-600/20 backdrop-blur-xl rounded-2xl p-8 border border-cyan-500/30">
                <h3 className="text-2xl font-bold mb-4">Ready to Start Your Success Story?</h3>
                <p className="text-lg text-gray-300 mb-6">
                  Let's discuss how we can help transform your business with intelligent automation.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact" className="px-8 py-4 bg-cyan-600 hover:bg-cyan-700 rounded-lg font-semibold transition-colors">
                    Get Started
                  </Link>
                  <Link href="/case-studies" className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg font-semibold transition-colors">
                    View More Case Studies
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}