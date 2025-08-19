import { useRouter } from 'next/router';
import Link from 'next/link';
import Head from 'next/head';

// Mock case study resource data
const caseStudyResources = {
  'ai-automation-guide': {
    id: 'ai-automation-guide',
    title: 'Complete Guide to AI-Powered Automation',
    type: 'Case Study',
    category: 'Technology',
    description: 'A comprehensive analysis of how AI automation transformed business processes at TechCorp Solutions, including implementation strategies and ROI metrics.',
    content: `
      <h2>Executive Summary</h2>
      <p>This case study examines the successful implementation of AI-powered automation at TechCorp Solutions, a mid-size technology company facing operational challenges due to manual processes.</p>
      
      <h2>Background</h2>
      <p>TechCorp Solutions was experiencing significant bottlenecks in their customer service operations, with manual ticket processing taking an average of 40+ hours per week. This was causing delays in customer response times and reducing overall team productivity.</p>
      
      <h2>Challenges Identified</h2>
      <ul>
        <li>Manual ticket categorization and routing</li>
        <li>Repetitive data entry tasks</li>
        <li>Inconsistent response times</li>
        <li>Limited scalability during peak periods</li>
      </ul>
      
      <h2>Solution Implemented</h2>
      <p>We developed a comprehensive AI automation solution that included:</p>
      <ul>
        <li>Intelligent ticket classification using machine learning</li>
        <li>Automated response generation for common queries</li>
        <li>Smart routing based on agent expertise and workload</li>
        <li>Integration with existing CRM and helpdesk systems</li>
      </ul>
      
      <h2>Results Achieved</h2>
      <ul>
        <li><strong>85% reduction</strong> in manual processing time</li>
        <li><strong>Customer response time</strong> improved from 24 hours to 2 hours</li>
        <li><strong>60% increase</strong> in team productivity</li>
        <li><strong>300% ROI</strong> within 6 months</li>
      </ul>
      
      <h2>Key Learnings</h2>
      <p>The success of this implementation demonstrated the importance of:</p>
      <ul>
        <li>Thorough process analysis before automation</li>
        <li>Gradual rollout with continuous feedback</li>
        <li>Team training and change management</li>
        <li>Regular performance monitoring and optimization</li>
      </ul>
    `,
    author: 'Zion App Team',
    publishDate: '2025-01-17',
    tags: ['AI', 'Automation', 'Customer Service', 'ROI', 'Process Improvement'],
    downloadUrl: '/downloads/ai-automation-case-study.pdf',
    relatedResources: ['digital-transformation-guide', 'startup-scaling-guide']
  },
  'digital-transformation-guide': {
    id: 'digital-transformation-guide',
    title: 'Digital Transformation: A Manufacturing Success Story',
    type: 'Case Study',
    category: 'Manufacturing',
    description: 'How Global Manufacturing Inc. achieved operational excellence through comprehensive digital transformation across 12 locations.',
    content: `
      <h2>Executive Summary</h2>
      <p>This case study explores the end-to-end digital transformation journey of Global Manufacturing Inc., a multinational manufacturing company with operations across 12 locations.</p>
      
      <h2>Background</h2>
      <p>Global Manufacturing Inc. was struggling with legacy systems that prevented growth and caused operational inefficiencies. Each location operated independently with different processes and systems, making it difficult to achieve economies of scale.</p>
      
      <h2>Challenges Identified</h2>
      <ul>
        <li>Fragmented operations across locations</li>
        <li>Legacy systems preventing innovation</li>
        <li>Limited visibility into supply chain operations</li>
        <li>Inconsistent quality control processes</li>
      </ul>
      
      <h2>Solution Implemented</h2>
      <p>We implemented a comprehensive digital transformation strategy including:</p>
      <ul>
        <li>Cloud migration and infrastructure modernization</li>
        <li>Unified ERP system across all locations</li>
        <li>IoT sensors for real-time monitoring</li>
        <li>Advanced analytics and reporting dashboards</li>
        <li>Automated quality control processes</li>
      </ul>
      
      <h2>Results Achieved</h2>
      <ul>
        <li><strong>Unified operations</strong> across all 12 locations</li>
        <li><strong>35% reduction</strong> in operational costs</li>
        <li><strong>90% improvement</strong> in supply chain visibility</li>
        <li><strong>Enhanced decision-making</strong> with real-time analytics</li>
      </ul>
    `,
    author: 'Zion App Team',
    publishDate: '2025-01-15',
    tags: ['Digital Transformation', 'Manufacturing', 'Cloud Migration', 'IoT', 'Analytics'],
    downloadUrl: '/downloads/digital-transformation-case-study.pdf',
    relatedResources: ['ai-automation-guide', 'startup-scaling-guide']
  }
};

export default function CaseStudyResourceDetail() {
  const router = useRouter();
  const { id } = router.query;
  
  const resource = caseStudyResources[id as keyof typeof caseStudyResources];

  if (!resource) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Resource Not Found</h1>
            <p className="text-xl mb-8">The resource you're looking for doesn't exist.</p>
            <Link href="/resources" className="px-6 py-3 bg-cyan-600 hover:bg-cyan-700 rounded-lg transition-colors">
              Back to Resources
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{resource.title} - Resource | Zion App</title>
        <meta name="description" content={resource.description} />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
        {/* Navigation */}
        <nav className="border-b border-white/10 bg-white/5 backdrop-blur-xl">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center gap-4">
              <Link href="/resources" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                ← Back to Resources
              </Link>
              <span className="text-gray-400">/</span>
              <Link href="/resources/case-studies" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                Case Studies
              </Link>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 bg-blue-600/20 border border-blue-500/30 rounded-full text-blue-400 text-sm font-medium mb-6">
                {resource.type}
              </span>
              <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent">
                {resource.title}
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                {resource.description}
              </p>
              <div className="flex items-center justify-center gap-6 text-lg text-gray-300">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                  {resource.author}
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                  {resource.publishDate}
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                  {resource.category}
                </span>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-3 justify-center mb-12">
              {resource.tags.map((tag, index) => (
                <span key={index} className="px-4 py-2 bg-white/10 border border-white/20 rounded-full text-sm">
                  {tag}
                </span>
              ))}
            </div>

            {/* Content */}
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 mb-12">
              <div 
                className="prose prose-invert prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: resource.content }}
              />
            </div>

            {/* Download & Related */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                <h3 className="text-2xl font-bold mb-4 text-cyan-400">Download Resource</h3>
                <p className="text-gray-300 mb-4">Get the full case study in PDF format for offline reading and sharing.</p>
                <a 
                  href={resource.downloadUrl} 
                  className="inline-block px-6 py-3 bg-cyan-600 hover:bg-cyan-700 rounded-lg font-semibold transition-colors"
                  download
                >
                  Download PDF
                </a>
              </div>
              
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                <h3 className="text-2xl font-bold mb-4 text-purple-400">Related Resources</h3>
                <div className="space-y-3">
                  {resource.relatedResources.map((relatedId, index) => {
                    const related = caseStudyResources[relatedId as keyof typeof caseStudyResources];
                    if (!related) return null;
                    return (
                      <Link 
                        key={index}
                        href={`/resources/case-studies/${related.id}`}
                        className="block p-3 bg-white/5 hover:bg-white/10 rounded-lg transition-colors border border-white/10"
                      >
                        <h4 className="font-semibold text-white">{related.title}</h4>
                        <p className="text-sm text-gray-400">{related.category}</p>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center mt-12">
              <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-xl rounded-2xl p-8 border border-blue-500/30">
                <h3 className="text-2xl font-bold mb-4">Need More Resources?</h3>
                <p className="text-lg text-gray-300 mb-6">
                  Explore our complete library of case studies, guides, and tools to accelerate your business transformation.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/resources" className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors">
                    Browse All Resources
                  </Link>
                  <Link href="/contact" className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg font-semibold transition-colors">
                    Get Custom Help
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