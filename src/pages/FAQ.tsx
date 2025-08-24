import React from 'react';
import { SEO } from '@/components/SEO';
import { Footer } from '@/components/Footer';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Search } from 'lucide-react';

export default function FAQ() {
  const faqs = [
    {
      category: "General",
      questions: [
        {
          question: "What is Zion Tech Group?",
          answer: "Zion Tech Group is the world's first free marketplace dedicated to high-tech and artificial intelligence. We connect businesses with skilled AI professionals, tech services, and cutting-edge equipment."
        },
        {
          question: "Is Zion really free to use?",
          answer: "Yes! Zion is completely free to use. We don't charge any subscription fees or hidden costs. Our platform is designed to democratize access to AI and tech talent."
        },
        {
          question: "How do I get started on Zion?",
          answer: "Getting started is easy! Simply create an account, choose whether you're looking for services or offering them, and start exploring our marketplace. You can browse talent, post jobs, or list your services immediately."
        }
      ]
    },
    {
      category: "For Clients & Employers",
      questions: [
        {
          question: "How do I find the right AI talent?",
          answer: "Use our AI-powered matching system to find talent that fits your specific needs. You can also browse our talent directory, filter by skills and experience, and review portfolios before making a decision."
        },
        {
          question: "What types of services can I find on Zion?",
          answer: "Zion offers a wide range of services including AI development, machine learning, data science, software development, IT consulting, equipment sales, and specialized tech solutions."
        },
        {
          question: "How do I post a job or project?",
          answer: "Navigate to the 'Post Job' section, fill out the project requirements, set your budget, and publish. Qualified talent will be able to apply, and you can review applications to find the perfect match."
        }
      ]
    },
    {
      category: "For Talent & Creators",
      questions: [
        {
          question: "How do I create a compelling profile?",
          answer: "Focus on showcasing your specific skills, include examples of your work, highlight your experience with AI and tech projects, and make sure your portfolio demonstrates your expertise clearly."
        },
        {
          question: "What are the benefits of joining Zion?",
          answer: "Access to global opportunities, no platform fees, direct client connections, portfolio building tools, and the chance to work on cutting-edge AI and tech projects."
        },
        {
          question: "How do I get hired on Zion?",
          answer: "Complete your profile, showcase your best work, actively apply to relevant projects, maintain good communication with clients, and build a strong reputation through successful project completions."
        }
      ]
    },
    {
      category: "AI & Technology",
      questions: [
        {
          question: "What AI technologies are supported on Zion?",
          answer: "We support all major AI technologies including machine learning, deep learning, natural language processing, computer vision, robotics, and emerging AI applications across various industries."
        },
        {
          question: "Can I find specialized equipment on Zion?",
          answer: "Yes! Zion has a dedicated equipment marketplace where you can find and sell specialized hardware, servers, development kits, and other tech equipment needed for AI and tech projects."
        },
        {
          question: "How does Zion's AI matching work?",
          answer: "Our AI matching system analyzes project requirements and talent profiles to find the best matches based on skills, experience, availability, and project compatibility."
        }
      ]
    },
    {
      category: "Payment & Security",
      questions: [
        {
          question: "How do payments work on Zion?",
          answer: "Zion uses secure payment processing with escrow protection. Clients pay upfront, funds are held securely until project completion, and talent receives payment upon successful delivery."
        },
        {
          question: "Is my data secure on Zion?",
          answer: "Absolutely. We use enterprise-grade security measures, encryption, and follow industry best practices to protect your personal and business information."
        },
        {
          question: "What happens if there's a dispute?",
          answer: "Zion provides a dispute resolution system. Our team works with both parties to find a fair solution, and we have clear policies to protect both clients and talent."
        }
      ]
    },
    {
      category: "Support & Community",
      questions: [
        {
          question: "How can I get help if I need support?",
          answer: "Our support team is available through multiple channels: email at support@ziontechgroup.com, our help center, and community forums where you can connect with other users."
        },
        {
          question: "Does Zion offer training or resources?",
          answer: "Yes! We provide comprehensive resources including tutorials, best practices guides, community forums, and regular webinars to help you succeed on our platform."
        },
        {
          question: "Can I connect with other professionals on Zion?",
          answer: "Absolutely! Zion has a vibrant community where you can network, share knowledge, collaborate on projects, and build professional relationships with other AI and tech professionals."
        }
      ]
    }
  ];

  const [searchTerm, setSearchTerm] = React.useState('');
  const [activeCategory, setActiveCategory] = React.useState('all');

  const filteredFaqs = faqs.map(category => ({
    ...category,
    questions: category.questions.filter(q =>
      q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      q.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => 
    activeCategory === 'all' || 
    category.questions.length > 0
  );

  return (
    <>
      <SEO
        title="FAQ - Frequently Asked Questions | Zion Tech Group"
        description="Find answers to common questions about Zion Tech Group, the world's first free AI and tech marketplace. Learn how to use our platform, find talent, and get started."
        keywords="FAQ, help, support, Zion Tech Group, AI marketplace, tech services, questions, answers"
        canonical="https://ziontechgroup.com/faq"
      />
      
      <div className="min-h-screen bg-zion-blue-dark">
        {/* Hero Section */}
        <section className="pt-20 pb-16 bg-gradient-to-b from-zion-blue to-zion-blue-dark">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
              Find answers to the most common questions about Zion Tech Group and our AI marketplace platform.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
              <input
                type="text"
                placeholder="Search for answers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-zion-blue-light/20 border border-zion-purple/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-purple focus:border-transparent"
              />
            </div>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              <button
                onClick={() => setActiveCategory('all')}
                className={`px-6 py-2 rounded-full transition-colors ${
                  activeCategory === 'all'
                    ? 'bg-zion-purple text-white'
                    : 'bg-zion-blue-light/20 text-zion-slate-light hover:bg-zion-purple/20 hover:text-white'
                }`}
              >
                All Categories
              </button>
              {faqs.map((category) => (
                <button
                  key={category.category}
                  onClick={() => setActiveCategory(category.category)}
                  className={`px-6 py-2 rounded-full transition-colors ${
                    activeCategory === category.category
                      ? 'bg-zion-purple text-white'
                      : 'bg-zion-blue-light/20 text-zion-slate-light hover:bg-zion-purple/20 hover:text-white'
                  }`}
                >
                  {category.category}
                </button>
              ))}
            </div>

            {/* FAQ Accordion */}
            <div className="max-w-4xl mx-auto">
              {filteredFaqs.map((category) => (
                <div key={category.category} className="mb-12">
                  <h2 className="text-2xl font-bold text-zion-cyan mb-6 text-center">
                    {category.category}
                  </h2>
                  <Accordion type="single" collapsible className="space-y-4">
                    {category.questions.map((faq, index) => (
                      <AccordionItem
                        key={index}
                        value={`item-${category.category}-${index}`}
                        className="bg-zion-blue-light/10 border border-zion-purple/20 rounded-lg px-6"
                      >
                        <AccordionTrigger className="text-left text-white hover:text-zion-cyan py-4">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-zion-slate-light pb-4">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              ))}
            </div>

            {/* Still Have Questions */}
            <div className="text-center mt-16">
              <h3 className="text-2xl font-bold text-white mb-4">
                Still have questions?
              </h3>
              <p className="text-zion-slate-light mb-6">
                Can't find what you're looking for? Our support team is here to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-zion-purple text-white rounded-lg hover:bg-zion-purple-light transition-colors"
                >
                  Contact Support
                </a>
                <a
                  href="/help"
                  className="inline-flex items-center justify-center px-6 py-3 border border-zion-purple text-zion-purple rounded-lg hover:bg-zion-purple/10 transition-colors"
                >
                  Visit Help Center
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </>
  );
}