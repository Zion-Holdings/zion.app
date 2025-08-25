import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ChevronDown, 
  ChevronUp,
  Search,
  MessageSquare,
  Phone,
  Mail
} from 'lucide-react';

const FAQ: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [openCategories, setOpenCategories] = useState<string[]>(['general']);

  const toggleCategory = (category: string) => {
    setOpenCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const faqData = {
    general: {
      title: 'General Questions',
      icon: '🏢',
      questions: [
        {
          question: 'What is Zion Tech Group?',
          answer: 'Zion Tech Group is a leading technology company specializing in AI-powered solutions, cloud infrastructure, cybersecurity, and digital transformation services. We help businesses of all sizes leverage cutting-edge technology to achieve their goals.'
        },
        {
          question: 'Where is Zion Tech Group located?',
          answer: 'Our main office is located at 364 E Main St STE 1008, Middletown, DE 19709. We also provide remote services to clients worldwide.'
        },
        {
          question: 'What industries do you serve?',
          answer: 'We serve a wide range of industries including manufacturing, healthcare, finance, retail, education, and government sectors. Our solutions are adaptable to any industry that can benefit from digital transformation.'
        },
        {
          question: 'Do you work with small businesses?',
          answer: 'Yes! We work with businesses of all sizes, from startups to Fortune 500 companies. We offer scalable solutions that grow with your business.'
        }
      ]
    },
    ai: {
      title: 'AI & Machine Learning',
      icon: '🤖',
      questions: [
        {
          question: 'What AI services do you offer?',
          answer: 'We offer comprehensive AI services including custom machine learning models, natural language processing, computer vision, predictive analytics, and AI-powered business automation solutions.'
        },
        {
          question: 'How long does it take to implement AI solutions?',
          answer: 'Implementation time varies based on complexity. Simple AI integrations can take 2-4 weeks, while complex enterprise AI systems may take 3-6 months. We provide detailed timelines during consultation.'
        },
        {
          question: 'Do you provide AI training for staff?',
          answer: 'Yes, we offer comprehensive training programs to help your team understand and effectively use AI tools. This includes workshops, documentation, and ongoing support.'
        },
        {
          question: 'Can you integrate with existing AI tools?',
          answer: 'Absolutely! We specialize in integrating new AI solutions with existing systems and tools. We ensure seamless compatibility and minimal disruption to your current operations.'
        }
      ]
    },
    cloud: {
      title: 'Cloud & DevOps',
      icon: '☁️',
      questions: [
        {
          question: 'Which cloud platforms do you support?',
          answer: 'We support all major cloud platforms including AWS, Azure, Google Cloud, and hybrid cloud solutions. We help you choose the best platform for your specific needs.'
        },
        {
          question: 'What DevOps services do you provide?',
          answer: 'Our DevOps services include CI/CD pipeline setup, infrastructure as code, container orchestration, monitoring and logging, security automation, and performance optimization.'
        },
        {
          question: 'How do you ensure cloud security?',
          answer: 'We implement enterprise-grade security measures including identity and access management, encryption, network security, compliance frameworks, and regular security audits.'
        },
        {
          question: 'Can you help migrate from on-premise to cloud?',
          answer: 'Yes! We specialize in cloud migration strategies, including assessment, planning, execution, and optimization. We ensure minimal downtime and risk during migration.'
        }
      ]
    },
    cybersecurity: {
      title: 'Cybersecurity',
      icon: '🔒',
      questions: [
        {
          question: 'What cybersecurity services do you offer?',
          answer: 'We provide comprehensive cybersecurity services including security audits, threat detection, incident response, compliance management, penetration testing, and security awareness training.'
        },
        {
          question: 'Do you help with compliance requirements?',
          answer: 'Yes, we help businesses meet various compliance requirements including SOC2, GDPR, HIPAA, PCI-DSS, and industry-specific regulations. We provide ongoing compliance monitoring and reporting.'
        },
        {
          question: 'How quickly can you respond to security incidents?',
          answer: 'Our incident response team is available 24/7 and can respond to critical security incidents within 15 minutes. We provide immediate containment and recovery services.'
        },
        {
          question: 'Do you provide security training for employees?',
          answer: 'Yes, we offer comprehensive security awareness training programs to help your team recognize and prevent security threats. This includes phishing simulations and regular security updates.'
        }
      ]
    },
    pricing: {
      title: 'Pricing & Billing',
      icon: '💰',
      questions: [
        {
          question: 'How do you structure your pricing?',
          answer: 'We offer flexible pricing models including project-based pricing, monthly retainers, and pay-per-use options. Pricing depends on the scope, complexity, and duration of your project.'
        },
        {
          question: 'Do you offer free consultations?',
          answer: 'Yes, we provide free initial consultations to understand your needs and provide recommendations. This helps us create a tailored proposal for your specific requirements.'
        },
        {
          question: 'Are there hidden costs?',
          answer: 'No, we believe in transparent pricing. All costs are clearly outlined in our proposals, and we communicate any changes or additional requirements before proceeding.'
        },
        {
          question: 'Do you offer payment plans?',
          answer: 'Yes, we offer flexible payment plans for larger projects. We can structure payments to align with project milestones or your budget requirements.'
        }
      ]
    },
    support: {
      title: 'Support & Maintenance',
      icon: '🛠️',
      questions: [
        {
          question: 'What support do you provide after project completion?',
          answer: 'We provide comprehensive post-project support including maintenance, updates, troubleshooting, and ongoing optimization. We offer various support packages to meet your needs.'
        },
        {
          question: 'Is support available 24/7?',
          answer: 'Yes, we provide 24/7 support for critical issues. Enterprise clients have dedicated support teams, while standard clients have access to our support portal and emergency hotline.'
        },
        {
          question: 'How do you handle system updates?',
          answer: 'We provide proactive system updates and maintenance to ensure optimal performance and security. Updates are scheduled during low-traffic periods to minimize disruption.'
        },
        {
          question: 'Do you provide documentation and training?',
          answer: 'Yes, we provide comprehensive documentation, user manuals, and training materials for all solutions. We also offer hands-on training sessions for your team.'
        }
      ]
    }
  };

  const filteredFAQs = Object.entries(faqData).filter(([category, data]) => {
    if (!searchTerm) return true;
    const searchLower = searchTerm.toLowerCase();
    return data.questions.some(q => 
      q.question.toLowerCase().includes(searchLower) || 
      q.answer.toLowerCase().includes(searchLower)
    );
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Frequently Asked <span className="bg-gradient-to-r from-zion-cyan to-zion-purple-light bg-clip-text text-transparent">Questions</span>
          </h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
            Find answers to common questions about our services, pricing, and how we can help transform your business.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zion-slate-light" />
              <input
                type="text"
                placeholder="Search FAQs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20 backdrop-blur-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {filteredFAQs.map(([category, data]) => (
            <div key={category} className="mb-12">
              <button
                onClick={() => toggleCategory(category)}
                className="w-full flex items-center justify-between p-6 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:bg-white/15 transition-colors"
              >
                <div className="flex items-center">
                  <span className="text-2xl mr-4">{data.icon}</span>
                  <h2 className="text-2xl font-bold text-white">{data.title}</h2>
                </div>
                {openCategories.includes(category) ? (
                  <ChevronUp className="w-6 h-6 text-zion-cyan" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-zion-cyan" />
                )}
              </button>
              
              {openCategories.includes(category) && (
                <div className="mt-4 space-y-4">
                  {data.questions.map((item, index) => (
                    <div key={index} className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
                      <div className="p-6">
                        <h3 className="text-lg font-semibold text-white mb-3">
                          {item.question}
                        </h3>
                        <p className="text-zion-slate-light leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Still Have Questions?
          </h2>
          <p className="text-lg text-zion-slate-light mb-8">
            Can't find what you're looking for? Our team is here to help. 
            Get in touch with us for personalized assistance.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="flex justify-center mb-4">
                <MessageSquare className="w-12 h-12 text-zion-cyan" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Live Chat</h3>
              <p className="text-zion-slate-light text-sm mb-4">
                Chat with our support team in real-time
              </p>
              <button className="bg-zion-cyan hover:bg-zion-cyan-light text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                Start Chat
              </button>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="flex justify-center mb-4">
                <Phone className="w-12 h-12 text-zion-cyan" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
              <p className="text-zion-slate-light text-sm mb-4">
                Speak directly with our experts
              </p>
              <a 
                href="tel:+13024640950"
                className="inline-block bg-zion-cyan hover:bg-zion-cyan-light text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                Call Now
              </a>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="flex justify-center mb-4">
                <Mail className="w-12 h-12 text-zion-cyan" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
              <p className="text-zion-slate-light text-sm mb-4">
                Send us a detailed message
              </p>
              <Link 
                to="/contact"
                className="inline-block bg-zion-cyan hover:bg-zion-cyan-light text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                Send Email
              </Link>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-zion-cyan to-zion-purple rounded-lg p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-white/90 mb-6">
              Let's discuss your project requirements and create a custom solution for your business.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                to="/contact" 
                className="bg-white text-zion-cyan hover:bg-zion-slate-light px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Schedule Consultation
              </Link>
              <Link 
                to="/request-quote" 
                className="border border-white text-white hover:bg-white hover:text-zion-cyan px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;