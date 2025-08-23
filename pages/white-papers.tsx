import React from 'react';
import { motion } from 'framer-motion';
import { 
  Download, FileText, BookOpen, TrendingUp, 
  Brain, Shield, Rocket, Cpu, ArrowRight,
  Calendar, User, Clock, Eye
} from 'lucide-react';
import Layout from '../components/layout/Layout';
import Button from '../components/ui/Button';

const WhitePapers: React.FC = () => {
  const whitePapers = [
    {
      title: 'The Future of AI in Enterprise: 2025-2030',
      description: 'Comprehensive analysis of AI adoption trends, challenges, and opportunities in enterprise environments.',
      category: 'Artificial Intelligence',
      author: 'Dr. Sarah Chen',
      publishDate: 'January 2025',
      readTime: '15 min read',
      downloads: '2,847',
      icon: <Brain className="w-8 h-8 text-cyan-400" />,
      topics: ['AI Strategy', 'Enterprise Adoption', 'ROI Analysis', 'Implementation Guide']
    },
    {
      title: 'Quantum Computing: Breaking the Classical Barrier',
      description: 'Deep dive into quantum computing principles, applications, and business implications.',
      category: 'Quantum Computing',
      author: 'Prof. Michael Rodriguez',
      publishDate: 'December 2024',
      readTime: '20 min read',
      downloads: '1,923',
      icon: <Rocket className="w-8 h-8 text-purple-400" />,
      topics: ['Quantum Principles', 'Business Applications', 'Security Implications', 'Future Outlook']
    },
    {
      title: 'Cybersecurity in the Age of AI',
      description: 'How artificial intelligence is transforming cybersecurity and threat detection.',
      category: 'Cybersecurity',
      author: 'Alex Thompson',
      publishDate: 'November 2024',
      readTime: '18 min read',
      downloads: '3,156',
      icon: <Shield className="w-8 h-8 text-green-400" />,
      topics: ['AI Security', 'Threat Detection', 'Incident Response', 'Best Practices']
    },
    {
      title: 'Space Technology: The Next Frontier for Business',
      description: 'Exploring commercial space technology applications and investment opportunities.',
      category: 'Space Technology',
      author: 'Dr. Emily Watson',
      publishDate: 'October 2024',
      readTime: '22 min read',
      downloads: '1,234',
      icon: <Rocket className="w-8 h-8 text-blue-400" />,
      topics: ['Commercial Space', 'Satellite Technology', 'Investment Opportunities', 'Regulatory Landscape']
    },
    {
      title: 'Cloud-Native Architecture: Best Practices 2025',
      description: 'Modern cloud architecture patterns and implementation strategies for scalable applications.',
      category: 'Cloud Computing',
      author: 'David Kim',
      publishDate: 'September 2024',
      readTime: '25 min read',
      downloads: '4,567',
      icon: <Cpu className="w-8 h-8 text-orange-400" />,
      topics: ['Microservices', 'Containerization', 'Serverless', 'DevOps']
    },
    {
      title: 'Data Privacy and Compliance in the Digital Age',
      description: 'Navigating the complex landscape of data privacy regulations and compliance requirements.',
      category: 'Compliance',
      author: 'Lisa Martinez',
      publishDate: 'August 2024',
      readTime: '16 min read',
      downloads: '2,891',
      icon: <Shield className="w-8 h-8 text-red-400" />,
      topics: ['GDPR', 'CCPA', 'Data Governance', 'Privacy by Design']
    }
  ];

  const categories = ['All', 'Artificial Intelligence', 'Quantum Computing', 'Cybersecurity', 'Space Technology', 'Cloud Computing', 'Compliance'];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-cyan-900">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center mb-6">
              <BookOpen className="w-12 h-12 text-cyan-400 mr-3" />
              <h1 className="text-5xl md:text-6xl font-bold text-white">
                White Papers
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Access in-depth research, technical insights, and strategic guidance 
              from our team of industry experts and thought leaders.
            </p>
            <p className="text-lg text-gray-400">
              Download comprehensive white papers covering the latest trends in AI, 
              quantum computing, cybersecurity, and emerging technologies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* White Papers Grid */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Featured Research
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Discover insights that can transform your business strategy and 
              technology implementation.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whitePapers.map((paper, index) => (
              <motion.div
                key={paper.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 border border-gray-700/50 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    {paper.icon}
                    <span className="ml-2 text-sm text-cyan-400 font-medium">{paper.category}</span>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-gray-400">{paper.publishDate}</div>
                    <div className="text-xs text-gray-400">{paper.readTime}</div>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-white mb-3">{paper.title}</h3>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">{paper.description}</p>

                <div className="mb-4">
                  <div className="text-xs text-gray-500 mb-2">Key Topics:</div>
                  <div className="flex flex-wrap gap-2">
                    {paper.topics.map((topic, idx) => (
                      <span key={idx} className="px-2 py-1 bg-gray-700/50 text-xs text-gray-300 rounded">
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs text-gray-400 mb-4">
                  <span>By {paper.author}</span>
                  <span className="flex items-center">
                    <Eye className="w-3 h-3 mr-1" />
                    {paper.downloads} downloads
                  </span>
                </div>

                <Button 
                  href={`/contact?subject=White Paper: ${encodeURIComponent(paper.title)}`}
                  variant="quantum" 
                  size="sm" 
                  className="w-full"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download White Paper
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-20 bg-black/50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Need Custom Research?
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
              Our research team can conduct custom studies and analysis 
              tailored to your specific industry and business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" variant="quantum" size="lg" className="text-lg px-8 py-4">
                Request Custom Research
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button href="/resources" variant="outline" size="lg" className="text-lg px-8 py-4">
                View All Resources
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              Questions About Our Research?
            </h3>
            <p className="text-gray-400 mb-6">
              Contact our research team for detailed insights and custom analysis.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="mailto:kleber@ziontechgroup.com" 
                className="text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                kleber@ziontechgroup.com
              </a>
              <span className="text-gray-600">•</span>
              <a 
                href="tel:+13024640950" 
                className="text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                +1 (302) 464-0950
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default WhitePapers;