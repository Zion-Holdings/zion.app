import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function ToolResourcePage() {
  const router = useRouter();
  const { id } = router.query;

  // Tools data - this should match the data in resources.tsx
  const tools = [
    {
      id: 'automation-assessment',
      title: 'Automation Readiness Assessment',
      description: 'Evaluate your organization\'s readiness for AI automation implementation.',
      type: 'Interactive Tool',
      estimatedTime: '15 minutes',
      fullContent: `
        <h2>About This Tool</h2>
        <p>The Automation Readiness Assessment is designed to help organizations evaluate their current 
        capabilities and identify opportunities for AI automation implementation. This comprehensive assessment 
        covers technology infrastructure, organizational culture, and business processes.</p>
        
        <h2>What You'll Learn</h2>
        <p>This assessment will help you understand:</p>
        <ul>
          <li>Your current automation maturity level</li>
          <li>Areas where automation can provide the most value</li>
          <li>Potential challenges and how to address them</li>
          <li>Recommended next steps for your automation journey</li>
        </ul>
        
        <h2>Assessment Categories</h2>
        <p>The assessment covers several key areas:</p>
        <ul>
          <li><strong>Technology Infrastructure:</strong> Current systems, data quality, and technical capabilities</li>
          <li><strong>Organizational Culture:</strong> Change readiness, innovation mindset, and learning culture</li>
          <li><strong>Business Processes:</strong> Process maturity, standardization, and optimization opportunities</li>
          <li><strong>Data & Analytics:</strong> Data availability, quality, and analytical capabilities</li>
          <li><strong>Leadership & Strategy:</strong> Executive support, strategic alignment, and resource allocation</li>
        </ul>
        
        <h2>How to Use This Tool</h2>
        <p>To get the most accurate results:</p>
        <ol>
          <li>Set aside 15-20 minutes for the assessment</li>
          <li>Answer questions honestly based on your current situation</li>
          <li>Consider involving key stakeholders for broader perspective</li>
          <li>Review results with your team to develop action plans</li>
        </ol>
        
        <h2>Next Steps After Assessment</h2>
        <p>Once you complete the assessment, you'll receive:</p>
        <ul>
          <li>A detailed readiness score and analysis</li>
          <li>Specific recommendations for improvement</li>
          <li>Prioritized action items</li>
          <li>Resources and tools for implementation</li>
        </ul>
      `,
      features: [
        'Comprehensive evaluation framework',
        'Industry benchmarking',
        'Actionable recommendations',
        'Progress tracking',
        'Resource library access'
      ]
    },
    {
      id: 'ai-maturity-model',
      title: 'AI Maturity Model',
      description: 'Assess your current AI capabilities and plan your transformation journey.',
      type: 'Framework',
      estimatedTime: '30 minutes',
      fullContent: `
        <h2>About This Framework</h2>
        <p>The AI Maturity Model provides a structured approach to understanding and advancing your 
        organization's AI capabilities. This framework helps you identify where you are today and 
        create a roadmap for where you want to be tomorrow.</p>
        
        <h2>Maturity Levels</h2>
        <p>The framework defines five maturity levels:</p>
        <ul>
          <li><strong>Level 1 - Awareness:</strong> Basic understanding of AI concepts and potential</li>
          <li><strong>Level 2 - Experimentation:</strong> Small-scale AI projects and pilots</li>
          <li><strong>Level 3 - Adoption:</strong> Systematic AI implementation across functions</li>
          <li><strong>Level 4 - Optimization:</strong> Advanced AI systems with continuous improvement</li>
          <li><strong>Level 5 - Innovation:</strong> AI-driven business transformation and new capabilities</li>
        </ul>
        
        <h2>Assessment Dimensions</h2>
        <p>The maturity model evaluates several key dimensions:</p>
        <ul>
          <li><strong>Strategy & Leadership:</strong> AI vision, executive support, and strategic alignment</li>
          <li><strong>Technology & Infrastructure:</strong> AI platforms, data infrastructure, and technical capabilities</li>
          <li><strong>Data & Analytics:</strong> Data quality, governance, and analytical maturity</li>
          <li><strong>People & Skills:</strong> AI talent, training programs, and organizational capabilities</li>
          <li><strong>Processes & Governance:</strong> AI governance, risk management, and operational processes</li>
        </ul>
        
        <h2>Using the Framework</h2>
        <p>To effectively use this framework:</p>
        <ol>
          <li>Assess your current state across all dimensions</li>
          <li>Identify gaps between current and target maturity levels</li>
          <li>Prioritize improvement areas based on business impact</li>
          <li>Develop a phased transformation roadmap</li>
          <li>Track progress and adjust plans as needed</li>
        </ol>
        
        <h2>Benefits of the Framework</h2>
        <p>This framework provides several key benefits:</p>
        <ul>
          <li>Clear understanding of current AI capabilities</li>
          <li>Structured approach to AI transformation</li>
          <li>Prioritized improvement roadmap</li>
          <li>Progress tracking and measurement</li>
          <li>Stakeholder alignment and communication</li>
        </ul>
      `,
      features: [
        '5-level maturity framework',
        'Multi-dimensional assessment',
        'Gap analysis tools',
        'Transformation roadmap',
        'Progress tracking'
      ]
    },
    {
      id: 'performance-benchmark',
      title: 'Performance Benchmarking Tool',
      description: 'Compare your automation performance against industry standards.',
      type: 'Analytics Tool',
      estimatedTime: '20 minutes',
      fullContent: `
        <h2>About This Tool</h2>
        <p>The Performance Benchmarking Tool helps you compare your automation performance against 
        industry standards and best practices. This tool provides insights into how your organization 
        performs relative to peers and identifies opportunities for improvement.</p>
        
        <h2>Benchmarking Categories</h2>
        <p>The tool covers several performance categories:</p>
        <ul>
          <li><strong>Efficiency Metrics:</strong> Process automation rates, time savings, and cost reduction</li>
          <li><strong>Quality Metrics:</strong> Error rates, accuracy improvements, and customer satisfaction</li>
          <li><strong>Scalability Metrics:</strong> System performance, throughput, and capacity utilization</li>
          <li><strong>ROI Metrics:</strong> Investment returns, payback periods, and value creation</li>
          <li><strong>Innovation Metrics:</strong> New capabilities, competitive advantages, and market position</li>
        </ul>
        
        <h2>Industry Benchmarks</h2>
        <p>Compare your performance against:</p>
        <ul>
          <li><strong>Industry Averages:</strong> Sector-specific performance standards</li>
          <li><strong>Best-in-Class:</strong> Top-performing organizations in your industry</li>
          <li><strong>Peer Groups:</strong> Similar-sized organizations with comparable resources</li>
          <li><strong>Historical Trends:</strong> Performance evolution over time</li>
        </ul>
        
        <h2>How to Use This Tool</h2>
        <p>To get the most value from benchmarking:</p>
        <ol>
          <li>Collect accurate performance data for your organization</li>
          <li>Select relevant industry and peer group comparisons</li>
          <li>Analyze performance gaps and identify root causes</li>
          <li>Develop targeted improvement strategies</li>
          <li>Track progress and measure improvement over time</li>
        </ol>
        
        <h2>Interpreting Results</h2>
        <p>When analyzing benchmark results:</p>
        <ul>
          <li>Focus on trends and patterns rather than single data points</li>
          <li>Consider context and organizational differences</li>
          <li>Identify both strengths and improvement opportunities</li>
          <li>Prioritize actions based on business impact and feasibility</li>
          <li>Use results to drive continuous improvement initiatives</li>
        </ul>
        
        <h2>Action Planning</h2>
        <p>Based on benchmark results, develop action plans that include:</p>
        <ul>
          <li>Specific performance improvement targets</li>
          <li>Resource requirements and investment plans</li>
          <li>Implementation timelines and milestones</li>
          <li>Success metrics and measurement approaches</li>
          <li>Risk mitigation and contingency planning</li>
        </ul>
      `,
      features: [
        'Industry benchmark database',
        'Performance gap analysis',
        'Trend analysis tools',
        'Action planning framework',
        'Progress tracking'
      ]
    }
  ];

  const tool = tools.find(t => t.id === id);

  if (!tool) {
    return (
      <>
        <Head>
          <title>Tool Resource Not Found | Zion Tech Group</title>
        </Head>
        <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
          <main className="container mx-auto px-6 py-12">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-6 text-white">Tool Resource Not Found</h1>
              <p className="text-xl text-white/80 mb-8">
                The tool resource you're looking for doesn't exist.
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
        <title>{tool.title} | Zion Tech Group - Tool Resource</title>
        <meta name="description" content={tool.description} />
        <meta property="og:title" content={`${tool.title} | Zion Tech Group`} />
        <meta property="og:description" content={tool.description} />
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
                <span className="px-3 py-1 bg-green-400/20 text-green-400 text-sm rounded-full border border-green-400/30">
                  {tool.type}
                </span>
              </div>
              <h1 className="text-4xl font-bold mb-4 text-white">{tool.title}</h1>
              <p className="text-xl text-white/80 mb-4">{tool.description}</p>
              <div className="flex items-center gap-4 text-white/60">
                <span>Estimated time: {tool.estimatedTime}</span>
              </div>
            </header>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              <div className="lg:col-span-2">
                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
                  <div 
                    className="prose prose-invert max-w-none"
                    dangerouslySetInnerHTML={{ __html: tool.fullContent }}
                  />
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                  <h3 className="font-semibold text-green-400 text-lg mb-4">Key Features</h3>
                  <ul className="space-y-3">
                    {tool.features.map((feature, index) => (
                      <li key={index} className="text-white/80 flex items-center gap-3">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                  <h3 className="font-semibold text-blue-400 text-lg mb-4">Tool Details</h3>
                  <div className="space-y-3">
                    <div>
                      <span className="text-white/60 text-sm">Type:</span>
                      <p className="text-white font-medium">{tool.type}</p>
                    </div>
                    <div>
                      <span className="text-white/60 text-sm">Time Required:</span>
                      <p className="text-white font-medium">{tool.estimatedTime}</p>
                    </div>
                  </div>
                </div>
              </div>
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