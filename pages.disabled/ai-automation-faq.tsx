import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function AIAutomationFAQ() {
  const [openCategory, setOpenCategory] = useState<string | null>('general');

  const faqData = {
    general: [
      {
        question: 'What is AI automation and how does it work?',
        answer: 'AI automation combines artificial intelligence with automation technologies to create systems that can learn, adapt, and perform tasks without human intervention. These systems use machine learning algorithms to analyze data, make decisions, and continuously improve their performance over time. AI automation can handle complex tasks like data analysis, customer service, process optimization, and predictive maintenance.'
      },
      {
        question: 'How is AI automation different from traditional automation?',
        answer: 'Traditional automation follows predefined rules and workflows, while AI automation can learn from data and adapt to changing conditions. Traditional automation is rigid and requires manual updates, whereas AI automation can improve itself, handle exceptions, and make intelligent decisions based on patterns it discovers in data.'
      },
      {
        question: 'What types of businesses can benefit from AI automation?',
        answer: 'Virtually any business can benefit from AI automation, regardless of size or industry. Common applications include customer service, marketing, sales, operations, finance, and human resources. Small businesses can start with simple chatbots or email automation, while larger enterprises can implement complex predictive analytics and autonomous systems.'
      },
      {
        question: 'How long does it take to implement AI automation?',
        answer: 'Implementation time varies depending on complexity and scope. Simple automation (like chatbots) can be deployed in weeks, while complex enterprise systems may take 6-18 months. We typically break projects into phases, delivering value incrementally. The first phase usually provides ROI within 3-6 months.'
      }
    ],
    technical: [
      {
        question: 'What technical infrastructure is required for AI automation?',
        answer: 'Requirements depend on the solution complexity. Basic needs include cloud computing resources, data storage, and API integrations. More advanced systems may require specialized hardware, real-time data processing capabilities, and integration with existing enterprise systems. We can work with your current infrastructure and recommend upgrades as needed.'
      },
      {
        question: 'How do you ensure AI systems are secure and compliant?',
        answer: 'We implement multiple security layers including encryption, access controls, and regular security audits. Our systems comply with industry standards like GDPR, HIPAA, and SOC 2. We also provide transparency into AI decision-making processes and ensure data privacy through anonymization and secure data handling practices.'
      },
      {
        question: 'Can AI automation integrate with existing business systems?',
        answer: 'Yes, our AI automation solutions are designed to integrate seamlessly with existing systems. We use standard APIs, webhooks, and data connectors to integrate with CRM systems, ERP platforms, databases, and other business applications. We can also build custom integrations for proprietary systems.'
      },
      {
        question: 'How do you handle data quality and accuracy?',
        answer: 'We implement robust data validation, cleaning, and monitoring processes. Our systems can detect and flag data quality issues, and we use techniques like data lineage tracking and automated quality checks. We also provide tools for data governance and ensure compliance with data quality standards.'
      }
    ],
    business: [
      {
        question: 'What is the typical ROI for AI automation projects?',
        answer: 'ROI varies by project type and industry, but most clients see returns of 200-500% within the first year. Common benefits include 20-40% cost reduction, 30-60% efficiency improvements, and 24/7 operation capabilities. We provide detailed ROI projections during the planning phase and track actual results post-implementation.'
      },
      {
        question: 'How do you measure the success of AI automation?',
        answer: 'We establish clear KPIs and metrics before implementation, including efficiency gains, cost savings, accuracy improvements, and user satisfaction scores. Our systems provide real-time dashboards and automated reporting. We also conduct regular reviews to identify optimization opportunities and ensure continued value delivery.'
      },
      {
        question: 'What happens if the AI system makes a mistake?',
        answer: 'Our systems include multiple safety mechanisms: human oversight capabilities, fallback procedures, and confidence scoring. When systems are uncertain, they can escalate to human operators. We also implement continuous monitoring and alerting systems to quickly identify and address any issues.'
      },
      {
        question: 'How do you handle change management during implementation?',
        answer: 'We provide comprehensive change management support including training programs, communication strategies, and stakeholder engagement. We work closely with your team to ensure smooth transitions and address concerns. Our approach focuses on demonstrating value early and building confidence in the new systems.'
      }
    ],
    implementation: [
      {
        question: 'What is your implementation methodology?',
        answer: 'We follow a proven 4-phase approach: Discovery & Analysis, Strategy & Design, Development & Testing, and Deployment & Support. Each phase includes clear deliverables and milestones. We use agile methodologies and provide regular updates throughout the process. Our team works closely with yours to ensure alignment and success.'
      },
      {
        question: 'Do you provide training and support after implementation?',
        answer: 'Yes, we provide comprehensive training for your team on using and managing the AI systems. This includes technical training, best practices, and troubleshooting guidance. We also offer ongoing support through our help desk, regular maintenance, and optimization services.'
      },
      {
        question: 'Can you start with a small pilot project?',
        answer: 'Absolutely! We recommend starting with pilot projects to demonstrate value and build confidence. Pilots typically focus on one process or department and can be completed in 4-8 weeks. This approach allows you to see results quickly and learn before scaling to broader implementations.'
      },
      {
        question: 'What ongoing maintenance and updates are required?',
        answer: 'Our AI systems are designed to be largely self-maintaining, but we recommend regular reviews and updates. We provide monitoring services, performance optimization, and regular system updates. We also offer managed services where we handle all maintenance and optimization for you.'
      }
    ],
    future: [
      {
        question: 'How do you stay current with AI technology trends?',
        answer: 'We maintain active research partnerships with leading universities and technology companies. Our team regularly attends conferences, publishes research, and contributes to industry standards. We also invest heavily in R&D to develop cutting-edge solutions and stay ahead of emerging trends.'
      },
      {
        question: 'What emerging AI technologies should we be aware of?',
        answer: 'Key emerging technologies include quantum computing for AI, edge AI for real-time processing, federated learning for privacy-preserving AI, and autonomous AI systems. We\'re actively researching these areas and can help you prepare for future adoption. We also provide technology roadmaps to help plan your AI journey.'
      },
      {
        question: 'How do you ensure AI systems remain competitive over time?',
        answer: 'We implement continuous learning and improvement mechanisms in all our systems. This includes automatic model retraining, performance monitoring, and regular updates based on new data and requirements. We also provide upgrade paths to newer technologies as they become available.'
      },
      {
        question: 'What skills will our team need for the future of AI?',
        answer: 'Key skills include data literacy, basic AI concepts, and change management. We provide training programs to develop these skills and can help you build internal AI capabilities. We also offer ongoing education and certification programs to keep your team current with AI developments.'
      }
    ]
  };

  const categories = [
    { id: 'general', name: 'General Questions', icon: '❓' },
    { id: 'technical', name: 'Technical Details', icon: '⚙️' },
    { id: 'business', name: 'Business Impact', icon: '💼' },
    { id: 'implementation', name: 'Implementation', icon: '🚀' },
    { id: 'future', name: 'Future & Trends', icon: '🔮' }
  ];

  return (
    <>
      <Head>
        <title>AI Automation FAQ | Zion Tech Group - Common Questions & Answers</title>
        <meta name="description" content="Find answers to frequently asked questions about AI automation, implementation, and business impact. Comprehensive FAQ covering technical, business, and strategic aspects." />
        <meta property="og:title" content="AI Automation FAQ | Zion Tech Group - Common Questions & Answers" />
        <meta property="og:description" content="Find answers to frequently asked questions about AI automation, implementation, and business impact. Comprehensive FAQ covering technical, business, and strategic aspects." />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <div className="max-w-4xl mx-auto">
            <nav className="mb-8">
              <Link href="/" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                ← Back to Home
              </Link>
            </nav>
            
            <header className="text-center mb-16">
              <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
                AI Automation FAQ
              </h1>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Find answers to the most common questions about AI automation, implementation, and business impact
              </p>
            </header>

            {/* Category Navigation */}
            <div className="mb-12">
              <div className="flex flex-wrap gap-4 justify-center">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setOpenCategory(category.id)}
                    className={`px-6 py-3 rounded-lg border transition-all duration-300 flex items-center gap-2 ${
                      openCategory === category.id
                        ? 'bg-cyan-400/20 border-cyan-400 text-cyan-400'
                        : 'bg-white/10 border-white/20 text-white/80 hover:border-cyan-400/30 hover:text-cyan-400'
                    }`}
                  >
                    <span className="text-lg">{category.icon}</span>
                    {category.name}
                  </button>
                ))}
              </div>
            </div>

            {/* FAQ Content */}
            <div className="space-y-6">
              {faqData[openCategory as keyof typeof faqData]?.map((item, index) => (
                <div key={index} className="bg-gradient-to-br from-white/10 to-white/5 rounded-xl p-6 border border-white/20">
                  <h3 className="text-lg font-semibold mb-3 text-white">{item.question}</h3>
                  <p className="text-white/80 leading-relaxed">{item.answer}</p>
                </div>
              ))}
            </div>

            {/* Additional Help Section */}
            <section className="mt-20">
              <div className="bg-gradient-to-r from-cyan-400/10 to-fuchsia-400/10 rounded-2xl p-12 border border-cyan-400/20 text-center">
                <h2 className="text-3xl font-bold mb-6 text-white">Still Have Questions?</h2>
                <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                  Our AI automation experts are here to help. Get personalized answers and guidance for your specific needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    href="/contact" 
                    className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-fuchsia-500 transition-all duration-300"
                  >
                    Contact Our Experts
                  </Link>
                  <Link 
                    href="/ai-resources" 
                    className="px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300"
                  >
                    Explore Resources
                  </Link>
                </div>
              </div>
            </section>

            {/* Related Topics */}
            <section className="mt-20">
              <h2 className="text-3xl font-bold mb-12 text-center text-white">Related Topics</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Link 
                  href="/ai-automation-services" 
                  className="bg-gradient-to-br from-white/10 to-white/5 rounded-xl p-6 border border-white/20 hover:border-cyan-400/30 transition-all duration-300 group"
                >
                  <h3 className="text-lg font-semibold mb-2 text-white group-hover:text-cyan-400 transition-colors">
                    AI Automation Services
                  </h3>
                  <p className="text-white/70 text-sm">
                    Explore our comprehensive range of AI automation solutions and services.
                  </p>
                </Link>
                <Link 
                  href="/case-studies" 
                  className="bg-gradient-to-br from-white/10 to-white/5 rounded-xl p-6 border border-white/20 hover:border-cyan-400/30 transition-all duration-300 group"
                >
                  <h3 className="text-lg font-semibold mb-2 text-white group-hover:text-cyan-400 transition-colors">
                    Case Studies
                  </h3>
                  <p className="text-white/70 text-sm">
                    See real-world examples of AI automation success stories and results.
                  </p>
                </Link>
                <Link 
                  href="/blog" 
                  className="bg-gradient-to-br from-white/10 to-white/5 rounded-xl p-6 border border-white/20 hover:border-cyan-400/30 transition-all duration-300 group"
                >
                  <h3 className="text-lg font-semibold mb-2 text-white group-hover:text-cyan-400 transition-colors">
                    Blog & Insights
                  </h3>
                  <p className="text-white/70 text-sm">
                    Stay updated with the latest AI automation trends and insights.
                  </p>
                </Link>
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
}