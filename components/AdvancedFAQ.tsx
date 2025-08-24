import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronDown, 
  Search, 
  HelpCircle, 
  Lightbulb, 
  Shield, 
  Zap,
  Brain,
  Cloud,
  Code,
  Smartphone,
  Database,
  Rocket
} from 'lucide-react';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'technical' | 'pricing' | 'support' | 'security' | 'innovation';
  tags: string[];
}

const faqData: FAQItem[] = [
  {
    id: 'ai-capabilities',
    question: 'What AI and machine learning capabilities do you offer?',
    answer: 'We provide comprehensive AI solutions including natural language processing, computer vision, predictive analytics, and custom machine learning models. Our expertise covers TensorFlow, PyTorch, and cloud AI services from AWS, Azure, and Google Cloud. We can build AI-powered applications for automation, data analysis, and intelligent decision-making systems.',
    category: 'technical',
    tags: ['AI', 'Machine Learning', 'TensorFlow', 'Predictive Analytics']
  },
  {
    id: 'cloud-migration',
    question: 'How do you handle cloud migration and modernization?',
    answer: 'Our cloud migration process follows industry best practices: assessment and planning, architecture design, data migration, application refactoring, testing, and go-live support. We specialize in AWS, Azure, and Google Cloud platforms, implementing microservices, containerization with Docker/Kubernetes, and automated CI/CD pipelines for seamless transitions.',
    category: 'technical',
    tags: ['Cloud Migration', 'AWS', 'Azure', 'Kubernetes', 'CI/CD']
  },
  {
    id: 'project-timeline',
    question: 'What is the typical timeline for a custom software project?',
    answer: 'Project timelines vary based on complexity: simple applications (2-4 months), medium complexity (4-8 months), and enterprise solutions (8-18 months). We use agile methodologies with 2-week sprints, providing regular updates and milestone deliveries. Complex projects are broken into phases for better risk management and faster time-to-value.',
    category: 'general',
    tags: ['Project Management', 'Agile', 'Timeline', 'Sprints']
  },
  {
    id: 'pricing-structure',
    question: 'How do you structure pricing for different project types?',
    answer: 'We offer flexible pricing models: fixed-price for well-defined projects, time-and-materials for evolving requirements, and retainer-based for ongoing support. Pricing depends on project scope, technology stack, team size, and timeline. We provide detailed quotes with transparent cost breakdowns and can accommodate various budget ranges.',
    category: 'pricing',
    tags: ['Pricing', 'Fixed Price', 'Time & Materials', 'Retainer']
  },
  {
    id: 'security-standards',
    question: 'What security standards and compliance do you maintain?',
    answer: 'We maintain SOC 2 Type II compliance, implement OWASP security guidelines, and follow industry best practices for data protection. Our security measures include encryption at rest and in transit, regular security audits, penetration testing, and compliance with GDPR, HIPAA, and other relevant regulations based on project requirements.',
    category: 'security',
    tags: ['Security', 'SOC 2', 'OWASP', 'GDPR', 'HIPAA']
  },
  {
    id: 'support-maintenance',
    question: 'What ongoing support and maintenance do you provide?',
    answer: 'We offer comprehensive support packages including 24/7 monitoring, regular updates, security patches, performance optimization, and technical support. Support levels range from basic maintenance to premium packages with dedicated support teams, SLA guarantees, and proactive issue resolution.',
    category: 'support',
    tags: ['Support', 'Maintenance', 'Monitoring', 'SLA']
  },
  {
    id: 'technology-stack',
    question: 'What modern technology stack do you use?',
    answer: 'Our technology stack includes Next.js 13+, React 18, TypeScript, Node.js, Python, and cloud-native technologies. We use modern databases (PostgreSQL, MongoDB), message queues (Kafka, Redis), and containerization (Docker, Kubernetes). We stay current with emerging technologies and can recommend the best stack for your specific needs.',
    category: 'technical',
    tags: ['Next.js', 'React', 'TypeScript', 'Python', 'Cloud Native']
  },
  {
    id: 'innovation-approach',
    question: 'How do you stay innovative and ahead of technology trends?',
    answer: 'We maintain innovation through continuous learning, research partnerships, technology conferences, and dedicated R&D initiatives. Our team regularly explores emerging technologies like AI/ML, blockchain, IoT, and edge computing. We invest in cutting-edge tools and methodologies to deliver future-proof solutions.',
    category: 'innovation',
    tags: ['Innovation', 'R&D', 'Emerging Tech', 'Future-Proof']
  },
  {
    id: 'team-expertise',
    question: 'What expertise does your development team have?',
    answer: 'Our team includes senior developers, architects, DevOps engineers, and specialists in AI/ML, cloud computing, and cybersecurity. We have 10+ years of experience across industries including fintech, healthcare, e-commerce, and enterprise software. Our team regularly upskills and maintains certifications in relevant technologies.',
    category: 'general',
    tags: ['Team', 'Expertise', 'Experience', 'Certifications']
  },
  {
    id: 'quality-assurance',
    question: 'How do you ensure code quality and testing standards?',
    answer: 'We implement comprehensive testing strategies including unit tests, integration tests, end-to-end testing, and automated testing pipelines. We use tools like Jest, Cypress, and Selenium, maintain 90%+ code coverage, and follow clean code principles. Our QA process includes code reviews, automated testing, and manual testing phases.',
    category: 'technical',
    tags: ['Testing', 'Quality', 'Automation', 'Code Coverage']
  }
];

const categories = [
  { id: 'all', label: 'All Questions', icon: HelpCircle, color: 'from-blue-500 to-purple-500' },
  { id: 'general', label: 'General', icon: Lightbulb, color: 'from-yellow-500 to-orange-500' },
  { id: 'technical', label: 'Technical', icon: Code, color: 'from-blue-500 to-cyan-500' },
  { id: 'pricing', label: 'Pricing', icon: Zap, color: 'from-green-500 to-emerald-500' },
  { id: 'support', label: 'Support', icon: Shield, color: 'from-purple-500 to-pink-500' },
  { id: 'security', label: 'Security', icon: Shield, color: 'from-red-500 to-orange-500' },
  { id: 'innovation', label: 'Innovation', icon: Rocket, color: 'from-indigo-500 to-purple-500' }
];

const AdvancedFAQ: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());

  const filteredFAQs = faqData.filter(faq => {
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });

  const toggleItem = (itemId: string) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(itemId)) {
      newExpanded.delete(itemId);
    } else {
      newExpanded.add(itemId);
    }
    setExpandedItems(newExpanded);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Find answers to common questions about our services, technology stack, 
            and development process. Can&apos;t find what you&apos;re looking for? Contact us directly.
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto mb-12"
        >
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search questions, answers, or tags..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-gray-800/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-blue-500/50 transition-all duration-300"
            />
          </div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => {
            const Icon = category.icon;
            const isActive = selectedCategory === category.id;
            
            return (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  isActive
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 border border-white/20'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon className="w-4 h-4" />
                {category.label}
              </motion.button>
            );
          })}
        </motion.div>

        {/* FAQ Items */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto space-y-4"
        >
          <AnimatePresence>
            {filteredFAQs.map((faq) => {
              const isExpanded = expandedItems.has(faq.id);
              
              return (
                <motion.div
                  key={faq.id}
                  variants={itemVariants}
                  layout
                  className="group"
                >
                  <motion.div
                    className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 overflow-hidden backdrop-blur-sm cursor-pointer"
                    whileHover={{ 
                      y: -2,
                      transition: { duration: 0.3 }
                    }}
                    onClick={() => toggleItem(faq.id)}
                  >
                    {/* Question Header */}
                    <div className="p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                            {faq.question}
                          </h3>
                          
                          {/* Tags */}
                          <div className="flex flex-wrap gap-2 mb-4">
                            {faq.tags.map((tag, index) => (
                              <span
                                key={index}
                                className="px-3 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-full border border-gray-600/50"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        {/* Expand/Collapse Icon */}
                        <motion.div
                          animate={{ rotate: isExpanded ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                          className="ml-4 flex-shrink-0"
                        >
                          <ChevronDown className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors duration-300" />
                        </motion.div>
                      </div>
                    </div>

                    {/* Answer */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden border-t border-gray-700/50"
                        >
                          <div className="p-6 pt-0">
                            <p className="text-gray-300 leading-relaxed text-lg">
                              {faq.answer}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl border border-blue-500/30 p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Still Have Questions?
            </h3>
            <p className="text-gray-300 mb-6">
              Our team is here to help! Get in touch with us for personalized answers 
              and expert guidance on your technology needs.
            </p>
            <motion.a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-500/50"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Our Team
              <ChevronDown className="ml-2 h-5 w-5 rotate-[-90deg]" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AdvancedFAQ;