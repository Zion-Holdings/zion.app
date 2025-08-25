<<<<<<< HEAD
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const faqData = [
  {
    question: "What services does Zion Tech Group offer?",
    answer: "Zion Tech Group offers comprehensive IT services including AI solutions, micro-SaaS development, cloud computing, cybersecurity, and technology consulting. We help businesses of all sizes implement innovative technology solutions."
  },
  {
    question: "How can I get started with your services?",
    answer: "Getting started is easy! Simply contact us through our contact form, give us a call, or schedule a consultation. Our team will assess your needs and recommend the best solutions for your business."
  },
  {
    question: "Do you work with small businesses?",
    answer: "Absolutely! We work with businesses of all sizes, from startups to enterprise organizations. We believe that every business deserves access to cutting-edge technology solutions."
  },
  {
    question: "What is your typical project timeline?",
    answer: "Project timelines vary depending on the scope and complexity. Simple implementations might take a few weeks, while complex enterprise solutions could take several months. We'll provide a detailed timeline during our initial consultation."
  },
  {
    question: "Do you provide ongoing support?",
    answer: "Yes, we offer comprehensive ongoing support and maintenance services. We believe in building long-term partnerships with our clients and ensuring their technology continues to work optimally."
  },
  {
    question: "How do you ensure data security?",
    answer: "Data security is our top priority. We implement industry-standard security measures, follow best practices, and stay updated with the latest security protocols. We can also help you develop comprehensive security policies."
  },
  {
    question: "Can you help with legacy system integration?",
    answer: "Yes, we specialize in modernizing legacy systems and integrating them with new technologies. Our team has extensive experience in migration projects and can help you transition smoothly."
  },
  {
    question: "What industries do you serve?",
    answer: "We serve a wide range of industries including healthcare, finance, manufacturing, retail, education, and more. Our solutions are adaptable to meet the specific needs of any industry."
  },
  {
    question: "Do you offer training for our team?",
    answer: "Absolutely! We provide comprehensive training programs to ensure your team can effectively use and maintain the solutions we implement. This includes user training, technical training, and ongoing support."
  },
  {
    question: "How do you handle project changes?",
    answer: "We understand that project requirements can evolve. We have a flexible change management process that allows us to adapt to your changing needs while maintaining project quality and timeline."
  }
];

export function FAQ() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Find answers to common questions about our services, processes, and how we can help your business.
            </p>
          </div>

          <div className="space-y-4">
            <Accordion type="single" collapsible>
              {faqData.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-lg font-medium hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Still have questions?
            </h2>
            <p className="text-muted-foreground mb-6">
              Can't find the answer you're looking for? Our team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 transition-colors"
              >
                Contact Us
              </a>
              <a
                href="mailto:support@ziontechgroup.com"
                className="inline-flex items-center justify-center px-6 py-3 border border-primary text-base font-medium rounded-md text-primary bg-transparent hover:bg-primary/10 transition-colors"
              >
                Email Support
              </a>
=======
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronDown, 
  ChevronUp, 
  Search,
  MessageSquare,
  Clock,
  Shield,
  Brain,
  Cloud
} from 'lucide-react';

export default function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      question: "What services does Zion Tech Group offer?",
      answer: "We offer comprehensive technology solutions including AI & Machine Learning, Cloud Infrastructure & DevOps, Cybersecurity & Compliance, Digital Transformation, Web & Mobile Development, and Data Analytics & BI. Our services are designed to transform businesses through innovative technology solutions.",
      category: "Services",
      icon: Brain
    },
    {
      question: "How quickly can you start working on my project?",
      answer: "We can typically begin project work within 1-2 weeks of initial consultation. For urgent projects, we offer expedited onboarding. The exact timeline depends on project complexity and our current capacity.",
      category: "Timeline",
      icon: Clock
    },
    {
      question: "What is your pricing structure?",
      answer: "We offer flexible pricing models including project-based pricing, hourly rates, and retainer agreements. Pricing varies based on project scope, complexity, and timeline. We provide detailed quotes after understanding your requirements.",
      category: "Pricing",
      icon: MessageSquare
    },
    {
      question: "Do you provide ongoing support after project completion?",
      answer: "Yes, we offer comprehensive post-launch support including maintenance, updates, monitoring, and 24/7 emergency support. We also provide training for your team to ensure smooth operation.",
      category: "Support",
      icon: Shield
    },
    {
      question: "What technologies do you specialize in?",
      answer: "We specialize in modern technologies including React, Node.js, Python, AWS, Azure, GCP, Docker, Kubernetes, TensorFlow, PyTorch, and various AI/ML frameworks. We stay current with emerging technologies.",
      category: "Technology",
      icon: Cloud
    },
    {
      question: "Can you work with existing systems and infrastructure?",
      answer: "Absolutely! We specialize in integrating with and modernizing existing systems. We can work with legacy systems, migrate data, and ensure seamless integration with new solutions.",
      category: "Integration",
      icon: Brain
    },
    {
      question: "What is your approach to project management?",
      answer: "We use agile methodologies with regular client communication, milestone reviews, and transparent project tracking. You'll have a dedicated project manager and access to our project management tools.",
      category: "Process",
      icon: Clock
    },
    {
      question: "Do you offer training for our team?",
      answer: "Yes, we provide comprehensive training programs for your team on new systems and technologies. This includes documentation, hands-on workshops, and ongoing support to ensure successful adoption.",
      category: "Training",
      icon: MessageSquare
    },
    {
      question: "What security measures do you implement?",
      answer: "We implement enterprise-grade security including encryption, secure coding practices, regular security audits, compliance with industry standards, and secure development lifecycle processes.",
      category: "Security",
      icon: Shield
    },
    {
      question: "Can you help with compliance and regulatory requirements?",
      answer: "Yes, we have extensive experience with various compliance frameworks including SOC 2, HIPAA, GDPR, and industry-specific regulations. We ensure all solutions meet your compliance requirements.",
      category: "Compliance",
      icon: Shield
    },
    {
      question: "What is your uptime guarantee?",
      answer: "We provide a 99.99% uptime guarantee for all cloud infrastructure and applications we manage. This includes proactive monitoring, automated failover, and rapid incident response.",
      category: "Reliability",
      icon: Cloud
    },
    {
      question: "How do you handle data privacy and protection?",
      answer: "We follow strict data privacy protocols including data encryption, access controls, regular security audits, and compliance with data protection regulations. Your data security is our top priority.",
      category: "Privacy",
      icon: Shield
    }
  ];

  const categories = ['All', 'Services', 'Timeline', 'Pricing', 'Support', 'Technology', 'Integration', 'Process', 'Training', 'Security', 'Compliance', 'Reliability', 'Privacy'];

  const filteredFaqs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = searchTerm === '' || faq.category === searchTerm;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
              Find answers to common questions about our services, processes, and how we can help transform your business.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-12">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/50" />
                <input
                  type="text"
                  placeholder="Search questions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 transition-colors"
                />
              </div>
>>>>>>> 516e4ee3bcbb9d3b0209b707c6b86a34fb0cacec
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSearchTerm(category === 'All' ? '' : category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    searchTerm === (category === 'All' ? '' : category)
                      ? 'bg-cyan-400 text-white'
                      : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
<<<<<<< HEAD
      </div>
=======
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {filteredFaqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 overflow-hidden"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
                >
                  <div className="flex items-start space-x-4">
                    <faq.icon className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">{faq.question}</h3>
                      <span className="inline-block px-3 py-1 bg-cyan-400/20 text-cyan-400 text-xs font-medium rounded-full">
                        {faq.category}
                      </span>
                    </div>
                  </div>
                  {openItems.includes(index) ? (
                    <ChevronUp className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  )}
                </button>
                
                <AnimatePresence>
                  {openItems.includes(index) && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6">
                        <p className="text-white/80 leading-relaxed">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {filteredFaqs.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <MessageSquare className="w-16 h-16 text-white/30 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">No questions found</h3>
              <p className="text-white/70">Try adjusting your search terms or browse all categories.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Still Have Questions?
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Can't find what you're looking for? Our team is here to help. Get in touch with us for personalized assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-cyan-400 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-400/25 transition-all duration-300 transform hover:scale-105"
              >
                Contact Us
              </a>
              <a
                href="tel:+13024640950"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300"
              >
                Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>
>>>>>>> 516e4ee3bcbb9d3b0209b707c6b86a34fb0cacec
    </div>
  );
}