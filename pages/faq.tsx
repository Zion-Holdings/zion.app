import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      question: "What is AI automation and how does it work?",
      answer: "AI automation combines artificial intelligence with automated processes to create systems that can learn, adapt, and operate independently. Our platform uses machine learning algorithms to analyze data, make decisions, and execute actions without human intervention, while continuously improving through experience."
    },
    {
      question: "How long does it take to implement AI automation?",
      answer: "Implementation time varies based on complexity and scope. Simple automation workflows can be deployed in 2-4 weeks, while comprehensive enterprise solutions typically take 3-6 months. We use agile methodologies to deliver value incrementally, with the first benefits often visible within the first month."
    },
    {
      question: "What industries do you serve?",
      answer: "We serve a wide range of industries including manufacturing, healthcare, financial services, retail, transportation, energy, and more. Our AI automation platform is designed to be industry-agnostic, with customizable solutions that can be adapted to specific sector requirements and compliance needs."
    },
    {
      question: "How do you ensure the security of AI systems?",
      answer: "Security is built into every layer of our platform. We implement enterprise-grade encryption, role-based access control, comprehensive audit logging, and regular security assessments. Our systems comply with SOC 2, GDPR, and other relevant standards, with continuous monitoring and threat detection."
    },
    {
      question: "Can AI automation replace human workers?",
      answer: "Our approach focuses on augmenting human capabilities, not replacing them. AI automation handles repetitive, time-consuming tasks, allowing humans to focus on creative problem-solving, strategic thinking, and high-value activities. We design systems for human-AI collaboration that enhances productivity and job satisfaction."
    },
    {
      question: "What kind of ROI can I expect from AI automation?",
      answer: "ROI varies by use case, but our clients typically see 200-500% returns within the first year. Common benefits include 40-60% reduction in operational costs, 3-5x improvement in process efficiency, and significant time savings. We provide detailed ROI analysis during the planning phase."
    },
    {
      question: "How do you handle data privacy and compliance?",
      answer: "We implement privacy-by-design principles with data minimization, encryption, and user consent controls. Our platform supports compliance with GDPR, CCPA, HIPAA, and other regulations. We provide comprehensive data governance tools and can work with your existing compliance frameworks."
    },
    {
      question: "What support and training do you provide?",
      answer: "We provide comprehensive onboarding, training programs, and ongoing support. This includes user training, technical documentation, 24/7 support for critical systems, and regular platform updates. We also offer certification programs for your team to become self-sufficient."
    },
    {
      question: "Can I integrate AI automation with my existing systems?",
      answer: "Yes, our platform is designed for seamless integration with existing enterprise systems. We support standard protocols, provide pre-built connectors for common platforms, and can develop custom integrations. Our API-first approach ensures compatibility with your current technology stack."
    },
    {
      question: "How do you ensure AI systems make ethical decisions?",
      answer: "We implement comprehensive ethical AI frameworks including bias detection, explainable AI, and human oversight capabilities. Our systems are designed with transparency, fairness, and accountability in mind. We regularly audit for bias and provide clear explanations of decision-making processes."
    },
    {
      question: "What happens if something goes wrong with the AI system?",
      answer: "Our systems include multiple safety mechanisms: human override capabilities, automatic escalation protocols, comprehensive monitoring, and fail-safe modes. We provide 24/7 monitoring with immediate alerting and rapid response procedures to ensure business continuity."
    },
    {
      question: "How do you stay current with AI technology advances?",
      answer: "We maintain a dedicated research team and partnerships with leading AI institutions. Our platform is continuously updated with the latest advances in machine learning, natural language processing, and automation technology. We regularly evaluate emerging technologies and integrate them when they provide clear value."
    }
  ];

  return (
    <>
      <Head>
        <title>FAQ | Zion Tech Group - AI Automation Questions & Answers</title>
        <meta name="description" content="Find answers to frequently asked questions about AI automation, our services, and how we can help transform your business." />
        <meta property="og:title" content="FAQ | Zion Tech Group" />
        <meta property="og:description" content="Find answers to frequently asked questions about AI automation and our services." />
        <meta name="twitter:card" content="summary_large_image" />
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
                Frequently Asked Questions
              </h1>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Find answers to common questions about AI automation, our services, and how we can help transform your business
              </p>
            </header>

            {/* FAQ Section */}
            <section className="mb-16">
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-xl rounded-xl border border-white/20 overflow-hidden">
                    <button
                      onClick={() => toggleItem(index)}
                      className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white/5 transition-colors duration-200"
                    >
                      <h3 className="text-lg font-semibold text-white pr-4">{faq.question}</h3>
                      <span className="text-cyan-400 text-xl transition-transform duration-200">
                        {openItems.includes(index) ? '−' : '+'}
                      </span>
                    </button>
                    {openItems.includes(index) && (
                      <div className="px-6 pb-4">
                        <p className="text-white/80 leading-relaxed">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* Additional Help */}
            <section className="mb-16">
              <div className="bg-gradient-to-r from-cyan-500/10 to-fuchsia-500/10 rounded-2xl p-8 border border-cyan-500/20 text-center">
                <h2 className="text-2xl font-bold mb-4 text-white">Still Have Questions?</h2>
                <p className="text-white/80 mb-6">
                  Can't find the answer you're looking for? Our team is here to help with any questions 
                  about AI automation or our services.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    href="/contact"
                    className="bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-500 hover:to-fuchsia-500 transition-all duration-300"
                  >
                    Contact Our Team
                  </Link>
                  <Link 
                    href="/resources"
                    className="px-6 py-3 border border-cyan-400/50 text-cyan-400 rounded-lg hover:bg-cyan-400/10 transition-all duration-300"
                  >
                    Browse Resources
                  </Link>
                </div>
              </div>
            </section>

            {/* Related Topics */}
            <section>
              <h2 className="text-2xl font-bold mb-8 text-center text-white">Related Topics</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Link href="/platform" className="bg-white/10 rounded-xl p-6 border border-white/20 hover:border-cyan-400/30 transition-all duration-300 text-center group">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">🤖</span>
                  </div>
                  <h3 className="text-lg font-semibold text-cyan-400 mb-2">Our Platform</h3>
                  <p className="text-white/80 text-sm">Learn about our AI automation technology</p>
                </Link>
                
                <Link href="/services" className="bg-white/10 rounded-xl p-6 border border-white/20 hover:border-fuchsia-400/30 transition-all duration-300 text-center group">
                  <div className="w-16 h-16 bg-gradient-to-br from-fuchsia-400 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">🚀</span>
                  </div>
                  <h3 className="text-lg font-semibold text-fuchsia-400 mb-2">Our Services</h3>
                  <p className="text-white/80 text-sm">Explore our comprehensive solutions</p>
                </Link>
                
                <Link href="/case-studies" className="bg-white/10 rounded-xl p-6 border border-white/20 hover:border-green-400/30 transition-all duration-300 text-center group">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-teal-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">📊</span>
                  </div>
                  <h3 className="text-lg font-semibold text-green-400 mb-2">Case Studies</h3>
                  <p className="text-white/80 text-sm">See real-world success stories</p>
                </Link>
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
}