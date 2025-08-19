import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

// Mock case study data - in a real app, this would come from an API or database
const caseStudies = {
  'ai-automation-manufacturing': {
    id: 'ai-automation-manufacturing',
    title: 'AI-Powered Manufacturing Automation',
    company: 'ManufactureTech Inc.',
    industry: 'Manufacturing',
    duration: '6 months',
    challenge: 'Manual quality control processes were slow, error-prone, and couldn\'t scale with production demands.',
    solution: 'Implemented computer vision AI systems for automated quality inspection with real-time defect detection.',
    results: [
      'Reduced defect rate by 85%',
      'Increased production speed by 40%',
      'Saved $2.3M annually in quality control costs',
      'Improved customer satisfaction scores by 92%'
    ],
    fullDescription: 'ManufactureTech Inc. faced significant challenges with their manual quality control processes. Their existing system relied on human inspectors who could only examine a small percentage of products, leading to quality issues and customer complaints. The company needed a solution that could scale with their growing production demands while maintaining or improving quality standards.',
    implementation: 'We deployed a comprehensive AI-powered quality control system that included computer vision cameras, machine learning models trained on thousands of defect examples, and automated sorting mechanisms. The system was integrated with their existing production line and provided real-time analytics and reporting.',
    outcomes: 'The transformation was remarkable. The AI system now inspects 100% of products with 99.7% accuracy, far exceeding human inspector performance. Production line speed increased by 40% as bottlenecks were eliminated, and the company saved $2.3M annually in quality control costs. Most importantly, customer satisfaction scores improved by 92%, leading to increased repeat business and market share.',
    technologies: ['Computer Vision AI', 'Machine Learning', 'IoT Sensors', 'Real-time Analytics', 'Automated Sorting Systems']
  },
  'cloud-migration-finance': {
    id: 'cloud-migration-finance',
    title: 'Secure Cloud Migration for Financial Services',
    company: 'SecureBank Financial',
    industry: 'Financial Services',
    duration: '12 months',
    challenge: 'Legacy on-premise systems were expensive to maintain, difficult to scale, and posed security risks.',
    solution: 'Migrated to a secure, compliant cloud infrastructure with automated security monitoring and compliance reporting.',
    results: [
      'Reduced infrastructure costs by 60%',
      'Improved system uptime to 99.99%',
      'Enhanced security compliance by 95%',
      'Reduced deployment time from weeks to hours'
    ],
    fullDescription: 'SecureBank Financial operated on legacy on-premise systems that were becoming increasingly expensive to maintain and difficult to scale. The systems also posed security risks and made compliance with financial regulations challenging. The bank needed a modern, secure, and compliant solution that could support their growth while meeting strict regulatory requirements.',
    implementation: 'We designed and implemented a secure cloud migration strategy that included private cloud infrastructure, automated security monitoring, compliance automation, and disaster recovery systems. The migration was conducted in phases to minimize business disruption and ensure data integrity.',
    outcomes: 'The cloud migration delivered exceptional results. Infrastructure costs were reduced by 60% while system performance and reliability improved dramatically. The new cloud-based systems achieved 99.99% uptime and enhanced security compliance by 95%. Deployment times were reduced from weeks to hours, enabling the bank to respond quickly to market changes and customer needs.',
    technologies: ['Private Cloud Infrastructure', 'Security Automation', 'Compliance Monitoring', 'Disaster Recovery', 'DevOps Automation']
  },
  'retail-automation': {
    id: 'retail-automation',
    title: 'Retail Automation & Customer Experience',
    company: 'SmartRetail Solutions',
    industry: 'Retail',
    duration: '8 months',
    challenge: 'Manual inventory management and customer service processes were inefficient and led to stockouts and poor customer experiences.',
    solution: 'Implemented AI-powered inventory management, automated customer service chatbots, and predictive analytics for demand forecasting.',
    results: [
      'Eliminated stockouts by 90%',
      'Improved customer satisfaction by 78%',
      'Reduced operational costs by 35%',
      'Increased sales conversion by 45%'
    ],
    fullDescription: 'SmartRetail Solutions struggled with inefficient manual processes that led to frequent stockouts, poor customer experiences, and high operational costs. Their inventory management was reactive rather than proactive, and customer service couldn\'t scale with demand. They needed an intelligent automation solution that could transform their operations.',
    implementation: 'We deployed a comprehensive retail automation platform that included AI-powered inventory management, intelligent chatbots for customer service, predictive analytics for demand forecasting, and automated reordering systems. The platform integrated with their existing POS and e-commerce systems.',
    outcomes: 'The automation transformation revolutionized their retail operations. Stockouts were virtually eliminated with 90% reduction, while customer satisfaction improved by 78% through faster, more accurate service. Operational costs decreased by 35%, and sales conversion increased by 45% due to better inventory availability and improved customer experiences.',
    technologies: ['AI Inventory Management', 'Chatbot Automation', 'Predictive Analytics', 'POS Integration', 'E-commerce Automation']
  }
};

export default function CaseStudyDetailPage() {
  const router = useRouter();
  const { id } = router.query;
  
  const caseStudy = caseStudies[id as keyof typeof caseStudies];

  if (!caseStudy) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Case Study Not Found</h1>
            <p className="text-white/80 mb-8">The requested case study could not be found.</p>
            <Link href="/case-studies" className="px-6 py-3 bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white rounded-lg font-semibold hover:from-cyan-500 hover:to-fuchsia-500 transition-all duration-300">
              Back to Case Studies
            </Link>
          </div>
        </main>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{caseStudy.title} - {caseStudy.company} | Zion Tech Group</title>
        <meta name="description" content={caseStudy.fullDescription} />
        <meta property="og:title" content={`${caseStudy.title} - ${caseStudy.company}`} />
        <meta property="og:description" content={caseStudy.fullDescription} />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <Link href="/case-studies" className="text-cyan-400 hover:text-cyan-300 transition-colors">
              ← Back to Case Studies
            </Link>
          </nav>

          {/* Header */}
          <header className="text-center mb-16">
            <div className="mb-6">
              <span className="px-4 py-2 bg-cyan-400/20 text-cyan-400 text-sm rounded-full border border-cyan-400/30">
                {caseStudy.industry}
              </span>
            </div>
            <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
              {caseStudy.title}
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto mb-4">
              {caseStudy.fullDescription}
            </p>
            <div className="text-cyan-400 font-semibold text-lg">
              {caseStudy.company}
            </div>
            <div className="text-white/60 text-sm mt-2">
              Project Duration: {caseStudy.duration}
            </div>
          </header>

          {/* Case Study Content */}
          <div className="max-w-4xl mx-auto">
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-cyan-400">The Challenge</h2>
              <p className="text-lg text-white/80">{caseStudy.challenge}</p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-fuchsia-400">Our Solution</h2>
              <p className="text-lg text-white/80 mb-6">{caseStudy.solution}</p>
              <p className="text-lg text-white/80">{caseStudy.implementation}</p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-green-400">Results & Outcomes</h2>
              <p className="text-lg text-white/80 mb-6">{caseStudy.outcomes}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {caseStudy.results.map((result, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                      <span className="text-white/90">{result}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-blue-400">Technologies Used</h2>
              <div className="flex flex-wrap gap-3">
                {caseStudy.technologies.map((tech, index) => (
                  <span key={index} className="px-4 py-2 bg-blue-400/20 text-blue-400 text-sm rounded-full border border-blue-400/30">
                    {tech}
                  </span>
                ))}
              </div>
            </section>

            {/* CTA */}
            <section className="text-center">
              <div className="bg-gradient-to-r from-cyan-500/10 to-fuchsia-500/10 rounded-2xl p-8 border border-cyan-500/20">
                <h2 className="text-2xl font-bold mb-4 text-white">Ready to Achieve Similar Results?</h2>
                <p className="text-white/80 mb-6">
                  Let's discuss how AI automation can transform your business operations and drive measurable results.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact" className="px-6 py-3 bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white rounded-lg font-semibold hover:from-cyan-500 hover:to-fuchsia-500 transition-all duration-300">
                    Get Started
                  </Link>
                  <Link href="/services" className="px-6 py-3 border border-white/20 text-white rounded-lg hover:border-cyan-400/50 transition-all duration-300">
                    Our Services
                  </Link>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
}