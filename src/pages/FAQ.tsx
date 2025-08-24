import React from 'react';
import { SEO } from '@/components/SEO';
import * as Accordion from '@radix-ui/react-accordion';

const FAQ = () => {
  const faqData = [
    {
      category: "General",
      questions: [
        {
          question: "What is Zion Tech Group?",
          answer: "Zion Tech Group is a leading technology company specializing in AI development, web development, mobile applications, and comprehensive technology solutions. We help businesses transform their operations through cutting-edge technology."
        },
        {
          question: "Where is Zion Tech Group located?",
          answer: "We are headquartered in the United States and serve clients globally. Our team works remotely and can collaborate with clients from anywhere in the world."
        },
        {
          question: "What industries do you serve?",
          answer: "We serve a wide range of industries including healthcare, finance, education, retail, manufacturing, and more. Our technology solutions are adaptable to any industry's specific needs."
        }
      ]
    },
    {
      category: "For Businesses",
      questions: [
        {
          question: "How do I get started with Zion Tech Group?",
          answer: "Getting started is easy! Simply contact us through our website, email, or phone. We'll schedule a consultation to discuss your needs and provide a customized solution."
        },
        {
          question: "What is your typical project timeline?",
          answer: "Project timelines vary depending on complexity. Simple websites might take 2-4 weeks, while complex AI applications can take 3-6 months. We'll provide a detailed timeline during our initial consultation."
        },
        {
          question: "Do you provide ongoing support after project completion?",
          answer: "Yes! We offer various support packages including maintenance, updates, and technical support. We believe in building long-term partnerships with our clients."
        }
      ]
    },
    {
      category: "For Talent",
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
        }
      ]
    },
    {
      category: "Marketplace & Services",
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
        }
      ]
    },
    {
      category: "Technical Support",
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
        }
      ]
    },
    {
      category: "Community & Networking",
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
          question: "Do you offer mentorship programs?",
          answer: "We're committed to nurturing the next generation of tech talent. We offer mentorship programs for students and junior developers interested in technology careers."
        }
      ]
    }
  ];

  return (
    <>
      <SEO 
        title="FAQ - Frequently Asked Questions"
        description="Find answers to common questions about Zion Tech Group's services, processes, and technology solutions."
        canonical="/faq"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
        <main className="pt-12">
          <div className="container mx-auto px-4 py-16">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Frequently Asked Questions
              </h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Find answers to common questions about our services, processes, and how we can help transform your business with technology.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              {faqData.map((category, categoryIndex) => (
                <div key={categoryIndex} className="mb-12">
                  <h2 className="text-2xl font-semibold text-blue-200 mb-6 text-center">
                    {category.category}
                  </h2>
                  
                  <Accordion.Root type="single" collapsible className="space-y-4">
                    {category.questions.map((item, questionIndex) => (
                      <Accordion.Item 
                        key={questionIndex} 
                        value={`item-${categoryIndex}-${questionIndex}`}
                        className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20"
                      >
                        <Accordion.Header>
                          <Accordion.Trigger className="w-full px-6 py-4 text-left text-white hover:text-blue-200 transition-colors duration-200 flex items-center justify-between group">
                            <span className="font-medium">{item.question}</span>
                            <svg 
                              className="w-5 h-5 transform transition-transform duration-200 group-data-[state=open]:rotate-180" 
                              fill="none" 
                              stroke="currentColor" 
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </Accordion.Trigger>
                        </Accordion.Header>
                        
                        <Accordion.Content className="px-6 pb-4">
                          <div className="text-blue-100 leading-relaxed">
                            {item.answer}
                          </div>
                        </Accordion.Content>
                      </Accordion.Item>
                    ))}
                  </Accordion.Root>
                </div>
              ))}
            </div>

            <div className="text-center mt-16">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-8 max-w-2xl mx-auto">
                <h3 className="text-2xl font-semibold text-white mb-4">
                  Still have questions?
                </h3>
                <p className="text-blue-100 mb-6">
                  Can't find the answer you're looking for? Our team is here to help!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="/contact" 
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
                  >
                    Contact Us
                  </a>
                  <a 
                    href="/help-center" 
                    className="border border-white/30 hover:bg-white/10 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
                  >
                    Visit Help Center
                  </a>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default FAQ;