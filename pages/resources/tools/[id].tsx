import { useRouter } from 'next/router';
import Link from 'next/link';
import Head from 'next/head';

// Mock tools resource data
const toolResources = {
  'automation-assessment-tool': {
    id: 'automation-assessment-tool',
    title: 'Business Process Automation Assessment Tool',
    type: 'Tool',
    category: 'Assessment',
    description: 'A comprehensive tool to evaluate your business processes and identify automation opportunities for maximum ROI.',
    features: [
      'Process complexity analysis',
      'ROI calculation framework',
      'Technology stack recommendations',
      'Implementation roadmap generator',
      'Risk assessment matrix'
    ],
    benefits: [
      'Identify high-impact automation opportunities',
      'Calculate potential cost savings',
      'Prioritize projects by ROI',
      'Reduce implementation risks',
      'Streamline decision-making process'
    ],
    howToUse: `
      <h3>Step 1: Process Mapping</h3>
      <p>Document your current business processes, including inputs, outputs, and decision points.</p>
      
      <h3>Step 2: Complexity Assessment</h3>
      <p>Rate each process on complexity, frequency, and error rates to identify automation candidates.</p>
      
      <h3>Step 3: ROI Calculation</h3>
      <p>Use our built-in calculator to estimate time savings, cost reductions, and implementation costs.</p>
      
      <h3>Step 4: Technology Selection</h3>
      <p>Get personalized recommendations based on your industry, budget, and technical requirements.</p>
      
      <h3>Step 5: Implementation Planning</h3>
      <p>Generate a detailed roadmap with timelines, milestones, and resource requirements.</p>
    `,
    author: 'Zion App Team',
    publishDate: '2025-01-17',
    tags: ['Automation', 'Assessment', 'ROI', 'Process Improvement', 'Planning'],
    downloadUrl: '/downloads/automation-assessment-tool.xlsx',
    demoUrl: '/tools/automation-assessment-demo',
    relatedResources: ['process-mapping-guide', 'roi-calculator']
  },
  'process-mapping-guide': {
    id: 'process-mapping-guide',
    title: 'Process Mapping & Documentation Guide',
    type: 'Tool',
    category: 'Documentation',
    description: 'Step-by-step guide and templates for mapping business processes to identify automation opportunities.',
    features: [
      'Process mapping templates',
      'Standard notation guide',
      'Documentation best practices',
      'Collaboration frameworks',
      'Version control guidelines'
    ],
    benefits: [
      'Standardize process documentation',
      'Improve team collaboration',
      'Identify process inefficiencies',
      'Facilitate automation planning',
      'Ensure compliance requirements'
    ],
    howToUse: `
      <h3>Step 1: Template Selection</h3>
      <p>Choose the appropriate template based on your process type and complexity level.</p>
      
      <h3>Step 2: Stakeholder Identification</h3>
      <p>Identify all stakeholders involved in the process and their roles and responsibilities.</p>
      
      <h3>Step 3: Process Documentation</h3>
      <p>Document each step, decision point, and handoff using standard notation.</p>
      
      <h3>Step 4: Validation</h3>
      <p>Review the process map with stakeholders to ensure accuracy and completeness.</p>
      
      <h3>Step 5: Analysis</h3>
      <p>Analyze the process for bottlenecks, redundancies, and automation opportunities.</p>
    `,
    author: 'Zion App Team',
    publishDate: '2025-01-15',
    tags: ['Process Mapping', 'Documentation', 'Templates', 'Collaboration', 'Analysis'],
    downloadUrl: '/downloads/process-mapping-guide.pdf',
    demoUrl: '/tools/process-mapping-demo',
    relatedResources: ['automation-assessment-tool', 'roi-calculator']
  }
};

export default function ToolResourceDetail() {
  const router = useRouter();
  const { id } = router.query;
  
  const tool = toolResources[id as keyof typeof toolResources];

  if (!tool) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Tool Not Found</h1>
            <p className="text-xl mb-8">The tool you're looking for doesn't exist.</p>
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
        <title>{tool.title} - Tool | Zion App</title>
        <meta name="description" content={tool.description} />
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
              <Link href="/resources/tools" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                Tools
              </Link>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 bg-green-600/20 border border-green-500/30 rounded-full text-green-400 text-sm font-medium mb-6">
                {tool.type}
              </span>
              <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-green-300 bg-clip-text text-transparent">
                {tool.title}
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                {tool.description}
              </p>
              <div className="flex items-center justify-center gap-6 text-lg text-gray-300">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                  {tool.author}
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                  {tool.publishDate}
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                  {tool.category}
                </span>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-3 justify-center mb-12">
              {tool.tags.map((tag, index) => (
                <span key={index} className="px-4 py-2 bg-white/10 border border-white/20 rounded-full text-sm">
                  {tag}
                </span>
              ))}
            </div>

            {/* Features & Benefits */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                <h3 className="text-2xl font-bold mb-4 text-cyan-400">Key Features</h3>
                <ul className="space-y-3">
                  {tool.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-green-400 mt-1">✓</span>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                <h3 className="text-2xl font-bold mb-4 text-purple-400">Benefits</h3>
                <ul className="space-y-3">
                  {tool.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-blue-400 mt-1">→</span>
                      <span className="text-gray-300">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* How to Use */}
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 mb-12">
              <h3 className="text-3xl font-bold mb-6 text-center text-yellow-400">How to Use This Tool</h3>
              <div 
                className="prose prose-invert prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: tool.howToUse }}
              />
            </div>

            {/* Download & Demo */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                <h3 className="text-2xl font-bold mb-4 text-cyan-400">Download Tool</h3>
                <p className="text-gray-300 mb-4">Get the complete tool with all templates and instructions.</p>
                <a 
                  href={tool.downloadUrl} 
                  className="inline-block px-6 py-3 bg-cyan-600 hover:bg-cyan-700 rounded-lg font-semibold transition-colors"
                  download
                >
                  Download Now
                </a>
              </div>
              
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                <h3 className="text-2xl font-bold mb-4 text-green-400">Try Demo</h3>
                <p className="text-gray-300 mb-4">Experience the tool in action with our interactive demo.</p>
                <Link 
                  href={tool.demoUrl}
                  className="inline-block px-6 py-3 bg-green-600 hover:bg-green-700 rounded-lg font-semibold transition-colors"
                >
                  Launch Demo
                </Link>
              </div>
            </div>

            {/* Related Tools */}
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 mb-12">
              <h3 className="text-2xl font-bold mb-4 text-purple-400">Related Tools</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {tool.relatedResources.map((relatedId, index) => {
                  const related = toolResources[relatedId as keyof typeof toolResources];
                  if (!related) return null;
                  return (
                    <Link 
                      key={index}
                      href={`/resources/tools/${related.id}`}
                      className="block p-4 bg-white/5 hover:bg-white/10 rounded-lg transition-colors border border-white/10"
                    >
                      <h4 className="font-semibold text-white">{related.title}</h4>
                      <p className="text-sm text-gray-400">{related.category}</p>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <div className="bg-gradient-to-r from-green-600/20 to-blue-600/20 backdrop-blur-xl rounded-2xl p-8 border border-green-500/30">
                <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h3>
                <p className="text-lg text-gray-300 mb-6">
                  Start using our tools today to identify automation opportunities and accelerate your digital transformation.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/resources" className="px-8 py-4 bg-green-600 hover:bg-green-700 rounded-lg font-semibold transition-colors">
                    Browse All Tools
                  </Link>
                  <Link href="/contact" className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg font-semibold transition-colors">
                    Get Custom Tools
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