import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function CaseStudyResourcePage() {
  const router = useRouter();
  const { id } = router.query;

  // Case studies data - this should match the data in resources.tsx
  const caseStudies = [
    {
      id: 'ai-automation-manufacturing',
      title: 'AI-Powered Manufacturing Automation',
      company: 'Global Manufacturing Corp',
      industry: 'Manufacturing',
      results: '40% increase in production efficiency, 60% reduction in downtime',
      description: 'How we implemented autonomous AI systems to revolutionize manufacturing processes.',
      fullContent: `
        <h2>Executive Summary</h2>
        <p>This case study demonstrates how autonomous AI systems can transform traditional manufacturing operations, 
        delivering significant improvements in efficiency, quality, and cost reduction.</p>
        
        <h2>Background</h2>
        <p>Global Manufacturing Corp was facing significant challenges with their traditional manufacturing processes. 
        High downtime, inefficient production scheduling, and quality control issues were impacting their bottom line 
        and preventing them from meeting growing customer demands.</p>
        
        <h2>Challenge</h2>
        <p>The company needed to modernize their manufacturing operations while maintaining high quality standards 
        and reducing operational costs. They required a solution that could adapt to changing production demands, 
        minimize human intervention, and provide real-time insights into their operations.</p>
        
        <h2>Solution</h2>
        <p>We implemented a comprehensive AI automation system that included:</p>
        <ul>
          <li><strong>Predictive Maintenance:</strong> AI algorithms that predict equipment failures before they occur</li>
          <li><strong>Real-time Production Optimization:</strong> Dynamic scheduling and resource allocation</li>
          <li><strong>Automated Quality Control:</strong> Computer vision systems for defect detection</li>
          <li><strong>Intelligent Scheduling:</strong> AI-powered production planning and optimization</li>
        </ul>
        
        <h2>Implementation</h2>
        <p>The system was deployed in phases over 6 months:</p>
        <ul>
          <li><strong>Phase 1:</strong> Infrastructure setup and data collection</li>
          <li><strong>Phase 2:</strong> Core AI algorithms deployment</li>
          <li><strong>Phase 3:</strong> Integration with existing systems</li>
          <li><strong>Phase 4:</strong> Training and optimization</li>
        </ul>
        
        <h2>Results</h2>
        <p>The implementation delivered exceptional results:</p>
        <ul>
          <li><strong>40% increase in production efficiency</strong> - Streamlined processes and reduced bottlenecks</li>
          <li><strong>60% reduction in downtime</strong> - Predictive maintenance prevented equipment failures</li>
          <li><strong>25% improvement in quality control</strong> - AI-powered inspection systems caught defects early</li>
          <li><strong>30% reduction in operational costs</strong> - Optimized resource allocation and reduced waste</li>
        </ul>
        
        <h2>Key Learnings</h2>
        <p>This project revealed several important insights:</p>
        <ul>
          <li>AI systems require high-quality data for optimal performance</li>
          <li>Human oversight remains crucial for complex decision-making</li>
          <li>Gradual implementation reduces resistance and improves adoption</li>
          <li>Continuous monitoring and optimization is essential for long-term success</li>
        </ul>
        
        <h2>Conclusion</h2>
        <p>The AI automation implementation at Global Manufacturing Corp demonstrates the transformative potential 
        of autonomous systems in traditional industries. The results exceeded expectations and positioned the company 
        as a leader in smart manufacturing.</p>
      `
    },
    {
      id: 'content-generation-scale',
      title: 'Scaling Content Generation 10x',
      company: 'Digital Marketing Agency',
      industry: 'Marketing',
      results: '10x increase in content output, 85% improvement in engagement',
      description: 'Transforming content creation through autonomous AI systems.',
      fullContent: `
        <h2>Executive Summary</h2>
        <p>This case study explores how autonomous AI systems can revolutionize content creation, enabling 
        marketing agencies to scale their operations dramatically while maintaining quality and creativity.</p>
        
        <h2>Background</h2>
        <p>A leading digital marketing agency was struggling to scale their content creation capabilities. 
        Their manual processes were limiting growth and preventing them from taking on new clients. The creative 
        team was overwhelmed, and content quality was beginning to suffer under the pressure.</p>
        
        <h2>Challenge</h2>
        <p>The agency needed to dramatically increase their content production capacity while maintaining 
        high quality standards and creative excellence. They required a solution that could handle multiple 
        content types and formats, adapt to different client needs, and maintain consistency across all outputs.</p>
        
        <h2>Solution</h2>
        <p>We implemented an autonomous content generation system that included:</p>
        <ul>
          <li><strong>AI-powered Content Creation:</strong> Natural language generation for various content types</li>
          <li><strong>Automated Research:</strong> AI systems that gather and verify information</li>
          <li><strong>Intelligent Content Optimization:</strong> SEO and engagement optimization algorithms</li>
          <li><strong>Human Oversight:</strong> Creative directors review and refine AI-generated content</li>
        </ul>
        
        <h2>Implementation</h2>
        <p>The system was deployed in 4 months with comprehensive training:</p>
        <ul>
          <li><strong>Month 1:</strong> System setup and content analysis</li>
          <li><strong>Month 2:</strong> AI training and content generation</li>
          <li><strong>Month 3:</strong> Integration and workflow optimization</li>
          <li><strong>Month 4:</strong> Team training and full deployment</li>
        </ul>
        
        <h2>Results</h2>
        <p>The transformation was remarkable:</p>
        <ul>
          <li><strong>10x increase in content output</strong> - From 50 to 500 pieces per month</li>
          <li><strong>85% improvement in engagement</strong> - AI-optimized content performed significantly better</li>
          <li><strong>70% reduction in production time</strong> - Automated workflows accelerated delivery</li>
          <li><strong>95% client satisfaction</strong> - Higher quality and faster delivery improved client relationships</li>
        </ul>
        
        <h2>Key Learnings</h2>
        <p>This project revealed several important insights:</p>
        <ul>
          <li>AI enhances human creativity rather than replacing it</li>
          <li>Quality control processes are essential for AI-generated content</li>
          <li>Client education about AI capabilities improves acceptance</li>
          <li>Continuous learning systems improve content quality over time</li>
        </ul>
        
        <h2>Conclusion</h2>
        <p>The AI content generation system transformed the agency's operations, enabling unprecedented scale 
        while maintaining creative excellence. The system continues to learn and improve, positioning the agency 
        for continued growth and success.</p>
      `
    },
    {
      id: 'cloud-infrastructure-optimization',
      title: 'Cloud Infrastructure Optimization',
      company: 'E-commerce Platform',
      industry: 'Technology',
      results: '50% reduction in cloud costs, 99.9% uptime achieved',
      description: 'Building self-healing, auto-scaling cloud infrastructure.',
      fullContent: `
        <h2>Executive Summary</h2>
        <p>This case study demonstrates how intelligent cloud infrastructure optimization can dramatically 
        reduce costs while improving performance and reliability for high-traffic applications.</p>
        
        <h2>Background</h2>
        <p>A growing e-commerce platform was experiencing skyrocketing cloud costs and frequent outages. 
        Their infrastructure was not scaling efficiently with their business growth, leading to poor customer 
        experience and high operational expenses.</p>
        
        <h2>Challenge</h2>
        <p>The platform needed to optimize their cloud infrastructure for cost, performance, and reliability. 
        They required a solution that could automatically adapt to traffic patterns, prevent outages, and 
        optimize resource allocation in real-time.</p>
        
        <h2>Solution</h2>
        <p>We designed and implemented a comprehensive cloud optimization system:</p>
        <ul>
          <li><strong>Auto-scaling Infrastructure:</strong> Intelligent resource allocation based on demand</li>
          <li><strong>Self-healing Systems:</strong> Automatic failure detection and recovery</li>
          <li><strong>Cost Optimization:</strong> AI algorithms for resource cost management</li>
          <li><strong>Performance Monitoring:</strong> Real-time metrics and alerting systems</li>
        </ul>
        
        <h2>Implementation</h2>
        <p>The project was completed in 8 months with careful planning:</p>
        <ul>
          <li><strong>Months 1-2:</strong> Infrastructure analysis and design</li>
          <li><strong>Months 3-4:</strong> Core optimization systems deployment</li>
          <li><strong>Months 5-6:</strong> Integration and testing</li>
          <li><strong>Months 7-8:</strong> Gradual migration and optimization</li>
        </ul>
        
        <h2>Results</h2>
        <p>The optimization delivered outstanding results:</p>
        <ul>
          <li><strong>50% reduction in cloud costs</strong> - Intelligent resource allocation eliminated waste</li>
          <li><strong>99.9% uptime achieved</strong> - Self-healing systems prevented outages</li>
          <li><strong>3x improvement in performance</strong> - Optimized infrastructure handled traffic spikes</li>
          <li><strong>40% faster page load times</strong> - Optimized resource delivery improved user experience</li>
        </ul>
        
        <h2>Key Learnings</h2>
        <p>This project revealed several important insights:</p>
        <ul>
          <li>Gradual migration reduces risk and improves system stability</li>
          <li>Real-time monitoring is essential for optimization</li>
          <li>Cost optimization requires continuous monitoring and adjustment</li>
          <li>Self-healing systems significantly improve reliability</li>
        </ul>
        
        <h2>Conclusion</h2>
        <p>The cloud infrastructure optimization project transformed the platform's performance and cost structure. 
        The self-healing, auto-scaling infrastructure now supports continued business growth while maintaining 
        optimal performance and cost efficiency.</p>
      `
    }
  ];

  const caseStudy = caseStudies.find(study => study.id === id);

  if (!caseStudy) {
    return (
      <>
        <Head>
          <title>Case Study Resource Not Found | Zion Tech Group</title>
        </Head>
        <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
          <main className="container mx-auto px-6 py-12">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-6 text-white">Case Study Resource Not Found</h1>
              <p className="text-xl text-white/80 mb-8">
                The case study resource you're looking for doesn't exist.
              </p>
              <Link 
                href="/resources"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-500 hover:to-fuchsia-500 transition-all duration-300"
              >
                ← Back to Resources
              </Link>
            </div>
          </main>
        </div>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>{caseStudy.title} | Zion Tech Group - Case Study Resource</title>
        <meta name="description" content={caseStudy.description} />
        <meta property="og:title" content={`${caseStudy.title} | Zion Tech Group`} />
        <meta property="og:description" content={caseStudy.description} />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <div className="max-w-4xl mx-auto">
            <nav className="mb-8">
              <Link href="/resources" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                ← Back to Resources
              </Link>
            </nav>
            
            <header className="mb-12">
              <div className="mb-6">
                <span className="px-3 py-1 bg-cyan-400/20 text-cyan-400 text-sm rounded-full border border-cyan-400/30">
                  {caseStudy.industry}
                </span>
              </div>
              <h1 className="text-4xl font-bold mb-4 text-white">{caseStudy.title}</h1>
              <p className="text-xl text-cyan-400 font-semibold mb-2">{caseStudy.company}</p>
              <p className="text-white/80 text-lg">{caseStudy.description}</p>
            </header>
            
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 mb-8">
              <h2 className="text-2xl font-bold mb-4 text-white">Key Results</h2>
              <p className="text-green-400 font-semibold text-lg">{caseStudy.results}</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 mb-12">
              <div 
                className="prose prose-invert max-w-none"
                dangerouslySetInnerHTML={{ __html: caseStudy.fullContent }}
              />
            </div>
            
            <div className="text-center">
              <Link 
                href="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-500 hover:to-fuchsia-500 transition-all duration-300"
              >
                Get Started with Your Project
              </Link>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}