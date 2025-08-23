import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function FAQPage() {
  const [openCategory, setOpenCategory] = useState<string | null>('general');

  const faqData = {
    general: [
      {
        question: "What is Zion Tech Group?",
        answer: "Zion Tech Group is a leading technology company specializing in AI development, automation systems, and cutting-edge technology solutions. We help organizations transform their operations through intelligent automation and artificial intelligence."
      },
      {
        question: "What industries do you serve?",
        answer: "We serve a wide range of industries including healthcare, finance, manufacturing, retail, transportation, energy, and more. Our AI and automation solutions are adaptable to any sector that can benefit from intelligent process optimization."
      },
      {
        question: "How long has Zion Tech Group been in business?",
        answer: "Zion Tech Group has been at the forefront of AI and automation technology for several years, consistently delivering innovative solutions and staying ahead of industry trends."
      },
      {
        question: "Do you work with startups and small businesses?",
        answer: "Yes, we work with organizations of all sizes, from startups to Fortune 500 companies. We tailor our solutions to meet the specific needs and budget constraints of each client."
      }
    ],
    ai: [
      {
        question: "What types of AI solutions do you offer?",
        answer: "We offer comprehensive AI solutions including machine learning models, natural language processing, computer vision, predictive analytics, autonomous systems, and custom AI applications tailored to specific business needs."
      },
      {
        question: "How do you ensure AI models are ethical and unbiased?",
        answer: "We implement comprehensive AI ethics frameworks, conduct bias testing, use diverse training data, and provide explainable AI solutions. We also follow industry best practices and regulatory guidelines for responsible AI development."
      },
      {
        question: "Can you integrate AI with our existing systems?",
        answer: "Absolutely. We specialize in seamless integration with existing infrastructure, whether it's legacy systems, cloud platforms, or hybrid environments. Our team ensures minimal disruption during implementation."
      },
      {
        question: "How long does it take to implement AI solutions?",
        answer: "Implementation timelines vary based on complexity, ranging from 8-12 weeks for proof-of-concept projects to 6-12 months for enterprise-wide deployments. We provide detailed timelines during the planning phase."
      }
    ],
    automation: [
      {
        question: "What automation services do you provide?",
        answer: "We offer end-to-end automation services including process automation, workflow optimization, robotic process automation (RPA), smart workflows, and autonomous systems that can operate with minimal human intervention."
      },
      {
        question: "How do you measure automation success?",
        answer: "We track multiple metrics including cost savings, time reduction, error reduction, productivity improvements, and ROI. We provide comprehensive dashboards and reporting to monitor performance."
      },
      {
        question: "Can automation work with our current processes?",
        answer: "Yes, we analyze your current processes and design automation solutions that enhance rather than replace existing workflows. We ensure seamless integration and minimal disruption to operations."
      },
      {
        question: "What happens if automation fails?",
        answer: "We implement robust error handling, monitoring systems, and fallback procedures. Our solutions include automated alerting and human oversight capabilities to ensure business continuity."
      }
    ],
    implementation: [
      {
        question: "What is your implementation process?",
        answer: "Our process includes assessment & strategy (4-6 weeks), proof of concept (8-12 weeks), pilot implementation (12-16 weeks), and scale & optimize (ongoing). Each phase has clear deliverables and milestones."
      },
      {
        question: "Do you provide training for our team?",
        answer: "Yes, we provide comprehensive training programs for your team, including technical training, user adoption strategies, and ongoing support to ensure successful implementation and long-term success."
      },
      {
        question: "What support do you offer after implementation?",
        answer: "We provide ongoing support including monitoring, maintenance, updates, troubleshooting, and continuous optimization. We offer various support tiers to meet your specific needs."
      },
      {
        question: "How do you handle data security and privacy?",
        answer: "We implement enterprise-grade security measures including encryption, access controls, audit logging, and compliance with data protection regulations. Security is built into every aspect of our solutions."
      }
    ],
    pricing: [
      {
        question: "How do you structure your pricing?",
        answer: "Our pricing is project-based and depends on scope, complexity, and timeline. We provide detailed proposals with transparent pricing and can work with various budget constraints."
      },
      {
        question: "Do you offer payment plans?",
        answer: "Yes, we offer flexible payment options including milestone-based payments, subscription models for ongoing services, and customized payment plans to meet your financial requirements."
      },
      {
        question: "What's included in your pricing?",
        answer: "Our pricing includes development, implementation, testing, training, documentation, and initial support. We provide detailed breakdowns so you know exactly what you're getting."
      },
      {
        question: "Do you offer maintenance packages?",
        answer: "Yes, we offer various maintenance and support packages to ensure your systems continue running optimally. These can be customized to your specific needs and budget."
      }
    ],
    technical: [
      {
        question: "What technologies do you use?",
        answer: "We use cutting-edge technologies including TensorFlow, PyTorch, cloud platforms (AWS, Azure, GCP), container orchestration, MLOps tools, and custom frameworks developed in-house."
      },
      {
        question: "Can you work with our existing tech stack?",
        answer: "Absolutely. We're technology-agnostic and can work with your existing infrastructure, whether it's on-premises, cloud-based, or hybrid. We ensure compatibility and optimal performance."
      },
      {
        question: "How do you handle scalability?",
        answer: "We design all solutions with scalability in mind, using cloud-native architectures, auto-scaling capabilities, and performance optimization techniques to handle growth and increased demand."
      },
      {
        question: "What about disaster recovery and backup?",
        answer: "We implement comprehensive disaster recovery and backup solutions including automated backups, redundant systems, and recovery procedures to ensure business continuity in any scenario."
      }
    ]
  };

  const categories = [
    { id: 'general', name: 'General Questions', icon: '🏢' },
    { id: 'ai', name: 'AI & Machine Learning', icon: '🤖' },
    { id: 'automation', name: 'Automation Systems', icon: '⚡' },
    { id: 'implementation', name: 'Implementation', icon: '🚀' },
    { id: 'pricing', name: 'Pricing & Plans', icon: '💰' },
    { id: 'technical', name: 'Technical Details', icon: '🔧' }
  ];

  return (
    <>
      <Head>
        <title>FAQ - Frequently Asked Questions | Zion Tech Group</title>
        <meta name="description" content="Find answers to common questions about AI, automation, implementation, pricing, and Zion Tech Group's services." />
        <meta property="og:title" content="FAQ - Frequently Asked Questions - Zion Tech Group" />
        <meta property="og:description" content="Common questions about AI, automation, and our services." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <div className="max-w-6xl mx-auto">
            <nav className="mb-8">
              <Link href="/" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                ← Back to Home
              </Link>
            </nav>
            
            <header className="text-center mb-16">
              <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
                Frequently Asked Questions
              </h1>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Find answers to common questions about our AI and automation services, 
                implementation process, and how we can help transform your business.
              </p>
            </header>

            {/* Category Navigation */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setOpenCategory(category.id)}
                  className={`px-6 py-3 rounded-lg border transition-all duration-300 flex items-center gap-2 ${
                    openCategory === category.id
                      ? 'bg-cyan-400 text-white border-cyan-400'
                      : 'bg-white/10 text-white border-white/20 hover:bg-white/20 hover:border-cyan-400/50'
                  }`}
                >
                  <span className="text-lg">{category.icon}</span>
                  {category.name}
                </button>
              ))}
            </div>

            {/* FAQ Content */}
            <div className="space-y-6">
              {faqData[openCategory as keyof typeof faqData]?.map((item, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
                  <h3 className="text-xl font-bold mb-4 text-cyan-400">{item.question}</h3>
                  <p className="text-white/80 leading-relaxed">{item.answer}</p>
                </div>
              ))}
            </div>

            {/* Additional Help Section */}
            <section className="mt-20 text-center">
              <div className="bg-gradient-to-r from-cyan-400/20 to-fuchsia-400/20 rounded-2xl p-12 border border-cyan-400/30">
                <h2 className="text-3xl font-bold mb-6 text-white">Still Have Questions?</h2>
                <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
                  Can't find the answer you're looking for? Our team of experts is here to help. 
                  Contact us for personalized assistance and detailed information about our services.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    href="/contact" 
                    className="bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-500 hover:to-fuchsia-500 transition-all duration-300"
                  >
                    Contact Our Team
                  </Link>
                  <Link 
                    href="/ai-implementation-guide" 
                    className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300"
                  >
                    View Implementation Guide
                  </Link>
                </div>
              </div>
            </section>

            {/* Quick Links */}
            <section className="mt-16">
              <h2 className="text-2xl font-bold mb-8 text-center text-white">Quick Links</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Link href="/services" className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-cyan-400/30 transition-all duration-300 text-center">
                  <div className="text-3xl mb-3">🛠️</div>
                  <h3 className="text-lg font-semibold text-white mb-2">Our Services</h3>
                  <p className="text-white/70 text-sm">Explore our comprehensive AI and automation solutions</p>
                </Link>
                <Link href="/ai-insights" className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-cyan-400/30 transition-all duration-300 text-center">
                  <div className="text-3xl mb-3">📊</div>
                  <h3 className="text-lg font-semibold text-white mb-2">AI Insights</h3>
                  <p className="text-white/70 text-sm">Stay updated with industry trends and insights</p>
                </Link>
                <Link href="/case-studies" className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-cyan-400/30 transition-all duration-300 text-center">
                  <div className="text-3xl mb-3">📈</div>
                  <h3 className="text-lg font-semibold text-white mb-2">Case Studies</h3>
                  <p className="text-white/70 text-sm">See how we've helped other organizations succeed</p>
                </Link>
                <Link href="/blog" className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-cyan-400/30 transition-all duration-300 text-center">
                  <div className="text-3xl mb-3">📝</div>
                  <h3 className="text-lg font-semibold text-white mb-2">Blog</h3>
                  <p className="text-white/70 text-sm">Read our latest insights and technical articles</p>
                </Link>
                <Link href="/resources" className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-cyan-400/30 transition-all duration-300 text-center">
                  <div className="text-3xl mb-3">📚</div>
                  <h3 className="text-lg font-semibold text-white mb-2">Resources</h3>
                  <p className="text-white/70 text-sm">Access whitepapers, guides, and tools</p>
                </Link>
                <Link href="/about" className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-cyan-400/30 transition-all duration-300 text-center">
                  <div className="text-3xl mb-3">🏢</div>
                  <h3 className="text-lg font-semibold text-white mb-2">About Us</h3>
                  <p className="text-white/70 text-sm">Learn more about our company and mission</p>
                </Link>
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
}