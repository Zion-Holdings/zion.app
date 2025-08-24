import { useState, useEffect } from 'react';
import { SEO } from '@/components/SEO';
import * as Accordion from '@radix-ui/react-accordion';

const FAQ = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const faqData = [
    {
      category: "General",
      icon: "🏢",
      color: "from-blue-500/20 to-cyan-500/20",
      questions: [
        {
          question: "What is Zion Tech Group?",
          answer: "Zion Tech Group is a leading technology company specializing in AI development, web development, mobile applications, and comprehensive technology solutions. We help businesses transform their operations through cutting-edge technology."
        },
        {
          question: "Where is Zion Tech Group located?",
          answer: "We are headquartered in Middletown, Delaware, United States and serve clients globally. Our team works remotely and can collaborate with clients from anywhere in the world."
        },
        {
          question: "What industries do you serve?",
          answer: "We serve a wide range of industries including healthcare, finance, education, retail, manufacturing, and more. Our technology solutions are adaptable to any industry's specific needs."
        },
        {
          question: "How long has Zion Tech Group been in business?",
          answer: "Zion Tech Group was founded in 2014 and has been delivering innovative technology solutions for over 10 years. We have successfully completed 500+ projects across various industries."
        }
      ]
    },
    {
      category: "For Businesses",
      icon: "💼",
      color: "from-green-500/20 to-emerald-500/20",
      questions: [
        {
          question: "How do I get started with Zion Tech Group?",
          answer: "Getting started is easy! Simply contact us through our website, email (kleber@ziontechgroup.com), or phone (+1 302 464 0950). We'll schedule a consultation to discuss your needs and provide a customized solution."
        },
        {
          question: "What is your typical project timeline?",
          answer: "Project timelines vary depending on complexity. Simple websites might take 2-4 weeks, while complex AI applications can take 3-6 months. We'll provide a detailed timeline during our initial consultation."
        },
        {
          question: "Do you provide ongoing support after project completion?",
          answer: "Yes! We offer various support packages including maintenance, updates, and technical support. We believe in building long-term partnerships with our clients."
        },
        {
          question: "What is your pricing structure?",
          answer: "Our pricing is project-based and depends on the scope, complexity, and timeline. We offer transparent pricing with no hidden fees and can work within various budget ranges."
        }
      ]
    },
    {
      category: "For Talent",
      icon: "👥",
      color: "from-purple-500/20 to-pink-500/20",
      questions: [
        {
          question: "How can I join Zion Tech Group as a developer?",
          answer: "We're always looking for talented developers! Check our careers page for current openings, or send your resume and portfolio to our HR team. We value innovation, creativity, and technical excellence."
        },
        {
          question: "What technologies do you work with?",
          answer: "We work with a wide range of technologies including React, Node.js, Python, AI/ML frameworks, cloud platforms, and more. We encourage continuous learning and skill development."
        },
        {
          question: "Do you offer remote work opportunities?",
          answer: "Yes, we offer flexible remote work options. Our team is distributed globally, and we use modern collaboration tools to ensure effective communication and productivity."
        },
        {
          question: "What benefits do you offer employees?",
          answer: "We offer competitive salaries, health insurance, flexible work arrangements, professional development opportunities, and a collaborative work environment that fosters innovation."
        }
      ]
    },
    {
      category: "Marketplace & Services",
      icon: "🛍️",
      color: "from-orange-500/20 to-red-500/20",
      questions: [
        {
          question: "What services does Zion Tech Group offer?",
          answer: "We offer comprehensive technology services including AI development, web development, mobile app development, cloud solutions, cybersecurity, data analytics, and IT consulting."
        },
        {
          question: "Do you provide custom AI solutions?",
          answer: "Absolutely! We specialize in custom AI solutions including chatbots, machine learning models, predictive analytics, computer vision, and natural language processing tailored to your business needs."
        },
        {
          question: "Can you help with existing systems integration?",
          answer: "Yes, we have extensive experience integrating new solutions with existing systems. We ensure seamless integration while maintaining data integrity and system stability."
        },
        {
          question: "Do you offer micro-SaaS solutions?",
          answer: "Yes! We specialize in developing micro-SaaS applications that solve specific business problems. These are cost-effective, scalable solutions that can be deployed quickly."
        }
      ]
    },
    {
      category: "Technical Support",
      icon: "🔧",
      color: "from-cyan-500/20 to-blue-500/20",
      questions: [
        {
          question: "What kind of technical support do you provide?",
          answer: "We provide comprehensive technical support including 24/7 monitoring, troubleshooting, performance optimization, security updates, and emergency response for critical issues."
        },
        {
          question: "How do you handle security and data privacy?",
          answer: "Security is our top priority. We implement industry-standard security measures, comply with data protection regulations, and provide detailed security documentation for all projects."
        },
        {
          question: "Do you provide training for our team?",
          answer: "Yes, we offer comprehensive training programs to help your team understand and effectively use the technology solutions we implement. This includes user training and technical documentation."
        },
        {
          question: "What is your response time for support requests?",
          answer: "We typically respond to support requests within 2-4 hours during business hours. For critical issues, we provide immediate response and resolution."
        }
      ]
    },
    {
      category: "Community & Networking",
      icon: "🌐",
      color: "from-indigo-500/20 to-purple-500/20",
      questions: [
        {
          question: "Do you host community events?",
          answer: "Yes! We regularly host tech meetups, workshops, and networking events to bring together technology professionals and foster innovation in our community."
        },
        {
          question: "How can I stay updated with Zion Tech Group news?",
          answer: "Follow us on social media, subscribe to our newsletter, or check our blog regularly. We share industry insights, company updates, and technology trends."
        },
        {
          question: "Do you offer free consultations?",
          answer: "Yes, we offer free initial consultations to discuss your project requirements and provide guidance on the best approach for your business needs."
        },
        {
          question: "Can I visit your office?",
          answer: "Absolutely! We welcome visitors to our office in Middletown, Delaware. Please contact us to schedule a visit and we'll be happy to show you around and discuss potential collaborations."
        }
      ]
    }
  ];

  // Filter FAQ data based on search term and active category
  const filteredFAQData = faqData.filter(category => {
    if (activeCategory !== 'all' && category.category !== activeCategory) {
      return false;
    }
    
    if (searchTerm) {
      const hasMatchingQuestion = category.questions.some(q => 
        q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        q.answer.toLowerCase().includes(searchTerm.toLowerCase())
      );
      return hasMatchingQuestion;
    }
    
    return true;
  });

  const categories = [
    { id: 'all', label: 'All Categories', icon: '📚' },
    ...faqData.map(cat => ({ id: cat.category, label: cat.category, icon: cat.icon }))
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      <SEO 
        title="Frequently Asked Questions - Zion Tech Group"
        description="Find answers to common questions about Zion Tech Group's services, processes, and how we can help your business succeed with technology solutions."
        keywords="FAQ, frequently asked questions, Zion Tech Group, technology services, AI solutions, IT consulting"
      />

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
          <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-gradient">
                Frequently Asked Questions
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Find answers to common questions about our services, processes, and how we can help 
              your business succeed with cutting-edge technology solutions.
            </p>

            {/* Search and Filter */}
            <div className="max-w-4xl mx-auto space-y-6">
              {/* Search Input */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search questions and answers..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-lg"
                />
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                  🔍
                </div>
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap justify-center gap-3">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 flex items-center gap-2 ${
                      activeCategory === category.id
                        ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/30'
                        : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white border border-white/20'
                    }`}
                  >
                    <span>{category.icon}</span>
                    {category.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          {filteredFAQData.length === 0 ? (
            <div className="text-center py-20">
              <div className="text-6xl mb-6">🤔</div>
              <h3 className="text-2xl font-bold text-white mb-4">No questions found</h3>
              <p className="text-gray-300 mb-8">
                Try adjusting your search terms or browse all categories.
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setActiveCategory('all');
                }}
                className="bg-cyan-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-cyan-400 transition-colors"
              >
                View All Questions
              </button>
            </div>
          ) : (
            <div className="space-y-8">
              {filteredFAQData.map((category, categoryIndex) => (
                <div 
                  key={categoryIndex}
                  className={`bg-gradient-to-br ${category.color} rounded-2xl border border-white/20 overflow-hidden ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${categoryIndex * 0.1}s` }}
                >
                  {/* Category Header */}
                  <div className="p-6 border-b border-white/20">
                    <h2 className="text-2xl font-bold text-white flex items-center">
                      <span className="mr-3 text-3xl">{category.icon}</span>
                      {category.category}
                    </h2>
                  </div>

                  {/* Questions */}
                  <Accordion.Root type="single" collapsible className="divide-y divide-white/10">
                    {category.questions.map((item, questionIndex) => (
                      <Accordion.Item
                        key={questionIndex}
                        value={`${categoryIndex}-${questionIndex}`}
                        className="transition-all duration-200 hover:bg-white/5"
                      >
                        <Accordion.Header>
                          <Accordion.Trigger className="w-full px-6 py-4 text-left hover:bg-white/5 transition-colors duration-200 group">
                            <div className="flex items-center justify-between">
                              <h3 className="text-lg font-semibold text-white group-hover:text-cyan-300 transition-colors">
                                {item.question}
                              </h3>
                              <svg
                                className="w-5 h-5 text-gray-400 group-hover:text-cyan-300 transition-all duration-200 group-data-[state=open]:rotate-180"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                              </svg>
                            </div>
                          </Accordion.Trigger>
                        </Accordion.Header>
                        <Accordion.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                          <div className="px-6 pb-4">
                            <p className="text-gray-300 leading-relaxed">{item.answer}</p>
                          </div>
                        </Accordion.Content>
                      </Accordion.Item>
                    ))}
                  </Accordion.Root>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Still Have Questions Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl p-12 text-white">
            <h3 className="text-4xl font-bold mb-4">
              Still Have Questions?
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Can't find what you're looking for? Our team is here to help!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Contact Us
              </a>
              <a
                href="/request-quote"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-colors"
              >
                Get Free Quote
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;