import React from 'react';
import { Link } from 'react-router-dom';
import { Download, Calendar, User, FileText, TrendingUp, Brain, Cloud, Shield, Zap, Globe } from 'lucide-react';

const WhitePapers = () => {
  const whitePapers = [
    {
      id: 1,
      title: "AI-Powered Business Transformation: A Comprehensive Guide",
      description: "Explore how artificial intelligence is revolutionizing business operations, from automation to decision-making processes. This white paper provides insights into implementing AI strategies that drive growth and efficiency.",
      category: "AI & Machine Learning",
      author: "Dr. Sarah Chen",
      publishDate: "2025-01-15",
      downloadCount: 1247,
      icon: <Brain className="w-6 h-6" />,
      downloadLink: "/white-papers/ai-business-transformation.pdf"
    },
    {
      id: 2,
      title: "The Future of Micro SAAS: Scaling Strategies for 2025",
      description: "Discover innovative approaches to scaling micro SAAS businesses in today's competitive landscape. Learn about customer acquisition, retention strategies, and sustainable growth models.",
      category: "Business Strategy",
      author: "Michael Rodriguez",
      publishDate: "2025-01-10",
      downloadCount: 892,
      icon: <TrendingUp className="w-6 h-6" />,
      downloadLink: "/white-papers/micro-saas-scaling-2025.pdf"
    },
    {
      id: 3,
      title: "Cloud-Native Security: Best Practices for Modern Applications",
      description: "Comprehensive guide to securing cloud-native applications in today's distributed computing environment. Covering authentication, authorization, data protection, and compliance requirements.",
      category: "Security & Compliance",
      author: "Alex Thompson",
      publishDate: "2025-01-08",
      downloadCount: 1563,
      icon: <Shield className="w-6 h-6" />,
      downloadLink: "/white-papers/cloud-native-security.pdf"
    },
    {
      id: 4,
      title: "Quantum Computing in Enterprise: Practical Applications and ROI",
      description: "Explore real-world applications of quantum computing in enterprise environments. Understand the business case, implementation challenges, and expected returns on investment.",
      category: "Emerging Technology",
      author: "Dr. Emily Watson",
      publishDate: "2025-01-05",
      downloadCount: 743,
      icon: <Zap className="w-6 h-6" />,
      downloadLink: "/white-papers/quantum-computing-enterprise.pdf"
    },
    {
      id: 5,
      title: "DevOps Transformation: From Theory to Practice",
      description: "A practical guide to implementing DevOps practices in organizations of all sizes. Learn about culture change, tool selection, automation strategies, and measuring success.",
      category: "DevOps & Engineering",
      author: "David Kim",
      publishDate: "2024-12-28",
      downloadCount: 1128,
      icon: <Cloud className="w-6 h-6" />,
      downloadLink: "/white-papers/devops-transformation.pdf"
    },
    {
      id: 6,
      title: "Global Digital Transformation: Case Studies from Leading Enterprises",
      description: "Real-world examples of successful digital transformation initiatives across different industries and regions. Learn from the experiences of companies that have successfully navigated the digital journey.",
      category: "Digital Transformation",
      author: "Lisa Anderson",
      publishDate: "2024-12-20",
      downloadCount: 967,
      icon: <Globe className="w-6 h-6" />,
      downloadLink: "/white-papers/global-digital-transformation.pdf"
    }
  ];

  const categories = [
    "All",
    "AI & Machine Learning",
    "Business Strategy",
    "Security & Compliance",
    "Emerging Technology",
    "DevOps & Engineering",
    "Digital Transformation"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              White Papers & Research
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Access in-depth research, industry insights, and technical expertise from our team of experts. 
              Download comprehensive white papers covering the latest trends in technology and business transformation.
            </p>
            
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    index === 0 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* White Papers Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {whitePapers.map((paper) => (
            <div key={paper.id} className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className="text-blue-600">
                  {paper.icon}
                </div>
                <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                  {paper.category}
                </span>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {paper.title}
              </h3>
              
              <p className="text-gray-600 mb-4 leading-relaxed">
                {paper.description}
              </p>
              
              <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    {paper.author}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {new Date(paper.publishDate).toLocaleDateString()}
                  </span>
                </div>
                <span className="flex items-center gap-1">
                  <Download className="w-4 h-4" />
                  {paper.downloadCount.toLocaleString()}
                </span>
              </div>
              
              <a
                href={paper.downloadLink}
                download
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-colors"
              >
                <FileText className="w-4 h-4" />
                Download White Paper
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Stay Updated with Latest Research
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Get notified when we publish new white papers and research insights. 
              Join our community of technology leaders and innovators.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                Contact Our Research Team
              </Link>
              <Link
                to="/blog"
                className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
              >
                Read Our Blog
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhitePapers;