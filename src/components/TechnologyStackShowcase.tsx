import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  Database, 
  Cloud, 
  Shield, 
  Brain, 
  Smartphone,
  Globe,
  Zap,
  Star,
  ExternalLink,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

interface Technology {
  id: string;
  name: string;
  category: string;
  description: string;
  icon: string;
  expertise: number;
  useCases: string[];
  benefits: string[];
  website: string;
  color: string;
}

const technologies: Technology[] = [
  {
    id: 'react',
    name: 'React & Next.js',
    category: 'Frontend',
    description: 'Modern React ecosystem with server-side rendering and static generation',
    icon: '⚛️',
    expertise: 95,
    useCases: ['Single Page Applications', 'E-commerce Platforms', 'Admin Dashboards'],
    benefits: ['Fast Performance', 'SEO Optimized', 'Component Reusability'],
    website: 'https://reactjs.org',
    color: 'text-blue-400'
  },
  {
    id: 'nodejs',
    name: 'Node.js & Python',
    category: 'Backend',
    description: 'Scalable server-side development with modern JavaScript and Python',
    icon: '🐍',
    expertise: 90,
    useCases: ['API Development', 'Microservices', 'Data Processing'],
    benefits: ['High Performance', 'Rich Ecosystem', 'Cross-platform'],
    website: 'https://nodejs.org',
    color: 'text-green-400'
  },
  {
    id: 'aws',
    name: 'AWS & Azure',
    category: 'Cloud',
    description: 'Enterprise-grade cloud infrastructure and services',
    icon: '☁️',
    expertise: 92,
    useCases: ['Cloud Migration', 'Serverless Architecture', 'Data Storage'],
    benefits: ['Global Scale', 'Cost Optimization', 'Security First'],
    website: 'https://aws.amazon.com',
    color: 'text-orange-400'
  },
  {
    id: 'docker',
    name: 'Docker & Kubernetes',
    category: 'DevOps',
    description: 'Containerization and orchestration for scalable deployments',
    icon: '🐳',
    expertise: 88,
    useCases: ['Microservices', 'CI/CD Pipelines', 'Scalable Infrastructure'],
    benefits: ['Consistent Deployments', 'Easy Scaling', 'Portability'],
    website: 'https://docker.com',
    color: 'text-blue-400'
  },
  {
    id: 'tensorflow',
    name: 'TensorFlow & PyTorch',
    category: 'AI/ML',
    description: 'Advanced machine learning and deep learning frameworks',
    icon: '🤖',
    expertise: 94,
    useCases: ['Predictive Analytics', 'Computer Vision', 'Natural Language Processing'],
    benefits: ['State-of-the-art Models', 'Production Ready', 'Community Support'],
    website: 'https://tensorflow.org',
    color: 'text-purple-400'
  },
  {
    id: 'blockchain',
    name: 'Blockchain & Web3',
    category: 'Emerging Tech',
    description: 'Decentralized applications and blockchain solutions',
    icon: '⛓️',
    expertise: 85,
    useCases: ['Smart Contracts', 'DeFi Applications', 'NFT Platforms'],
    benefits: ['Transparency', 'Security', 'Innovation'],
    website: 'https://ethereum.org',
    color: 'text-cyan-400'
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    category: 'Development',
    description: 'Type-safe JavaScript for robust application development',
    icon: '🔷',
    expertise: 93,
    useCases: ['Enterprise Applications', 'Large Codebases', 'Team Development'],
    benefits: ['Type Safety', 'Better IDE Support', 'Reduced Bugs'],
    website: 'https://typescriptlang.org',
    color: 'text-blue-500'
  },
  {
    id: 'postgresql',
    name: 'PostgreSQL & MongoDB',
    category: 'Database',
    description: 'Relational and NoSQL databases for different data needs',
    icon: '🗄️',
    expertise: 89,
    useCases: ['Data Storage', 'Analytics', 'Real-time Applications'],
    benefits: ['ACID Compliance', 'Scalability', 'Flexibility'],
    website: 'https://postgresql.org',
    color: 'text-green-500'
  },
  {
    id: 'graphql',
    name: 'GraphQL',
    category: 'API',
    description: 'Modern API query language for efficient data fetching',
    icon: '🔺',
    expertise: 87,
    useCases: ['Mobile Applications', 'Real-time Dashboards', 'Microservices'],
    benefits: ['Efficient Queries', 'Type Safety', 'Real-time Updates'],
    website: 'https://graphql.org',
    color: 'text-pink-400'
  },
  {
    id: 'redis',
    name: 'Redis & Elasticsearch',
    category: 'Caching & Search',
    description: 'High-performance caching and search solutions',
    icon: '🔍',
    expertise: 86,
    useCases: ['Session Management', 'Full-text Search', 'Real-time Analytics'],
    benefits: ['Lightning Fast', 'Scalable', 'Feature Rich'],
    website: 'https://redis.io',
    color: 'text-red-400'
  },
  {
    id: 'jenkins',
    name: 'Jenkins & GitHub Actions',
    category: 'CI/CD',
    description: 'Automated build, test, and deployment pipelines',
    icon: '⚙️',
    expertise: 91,
    useCases: ['Automated Testing', 'Continuous Deployment', 'Quality Assurance'],
    benefits: ['Automation', 'Quality Gates', 'Faster Releases'],
    website: 'https://jenkins.io',
    color: 'text-yellow-400'
  },
  {
    id: 'terraform',
    name: 'Terraform & Ansible',
    category: 'Infrastructure',
    description: 'Infrastructure as code and configuration management',
    icon: '🏗️',
    expertise: 88,
    useCases: ['Infrastructure Provisioning', 'Configuration Management', 'Multi-cloud'],
    benefits: ['Version Control', 'Reproducible', 'Scalable'],
    website: 'https://terraform.io',
    color: 'text-purple-500'
  }
];

const categories = ['All', 'Frontend', 'Backend', 'Cloud', 'DevOps', 'AI/ML', 'Database', 'API', 'Emerging Tech'];

export function TechnologyStackShowcase() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedTech, setSelectedTech] = useState<Technology | null>(null);

  const filteredTechnologies = technologies.filter(tech => 
    selectedCategory === 'All' || tech.category === selectedCategory
  );

  const expertiseLevel = (level: number) => {
    if (level >= 90) return { label: 'Expert', color: 'text-green-400' };
    if (level >= 80) return { label: 'Advanced', color: 'text-blue-400' };
    if (level >= 70) return { label: 'Intermediate', color: 'text-yellow-400' };
    return { label: 'Basic', color: 'text-gray-400' };
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Cutting-Edge Technology Stack
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            We leverage the latest technologies and frameworks to deliver innovative, scalable, and high-performance solutions.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-lg border transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-cyan-500/20 border-cyan-400/50 text-cyan-400'
                  : 'bg-white/10 border-white/20 text-white/80 hover:border-cyan-400/30 hover:text-cyan-300'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Technology Grid */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredTechnologies.map((tech, index) => (
                <motion.div
                  key={tech.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onClick={() => setSelectedTech(tech)}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 cursor-pointer hover:border-cyan-400/50 hover:bg-white/15 transition-all duration-300 hover:scale-105"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="text-2xl">{tech.icon}</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-white">{tech.name}</h3>
                      <p className="text-xs text-white/60">{tech.category}</p>
                    </div>
                    <div className="text-right">
                      <div className={`text-sm font-bold ${tech.color}`}>
                        {tech.expertise}%
                      </div>
                      <div className="text-xs text-white/60">
                        {expertiseLevel(tech.expertise).label}
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-white/80 mb-3">{tech.description}</p>
                  <div className="flex justify-between items-center">
                    <div className="w-full bg-white/20 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${tech.color.replace('text-', 'bg-')}`}
                        style={{ width: `${tech.expertise}%` }}
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Technology Details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {selectedTech ? (
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-4xl">{selectedTech.icon}</div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">{selectedTech.name}</h3>
                    <p className="text-white/60">{selectedTech.category}</p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-white/80 mb-6">{selectedTech.description}</p>

                {/* Expertise Level */}
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white/70">Expertise Level</span>
                    <span className={`font-bold ${selectedTech.color}`}>
                      {selectedTech.expertise}% - {expertiseLevel(selectedTech.expertise).label}
                    </span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-3">
                    <div 
                      className={`h-3 rounded-full ${selectedTech.color.replace('text-', 'bg-')}`}
                      style={{ width: `${selectedTech.expertise}%` }}
                    />
                  </div>
                </div>

                {/* Use Cases */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    Use Cases
                  </h4>
                  <div className="space-y-2">
                    {selectedTech.useCases.map((useCase, index) => (
                      <div key={index} className="flex items-center gap-2 text-white/80">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        <span className="text-sm">{useCase}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Benefits */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                    <Star className="w-5 h-5 text-yellow-400" />
                    Key Benefits
                  </h4>
                  <div className="space-y-2">
                    {selectedTech.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center gap-2 text-white/80">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                        <span className="text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <a
                    href={selectedTech.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 px-4 bg-white/10 border border-white/20 text-white rounded-lg hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Learn More
                  </a>
                  <button className="flex-1 py-3 px-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center gap-2">
                    <ArrowRight className="w-4 h-4" />
                    Get Quote
                  </button>
                </div>
              </div>
            ) : (
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-12 text-center">
                <div className="text-6xl mb-4">💻</div>
                <h3 className="text-xl font-semibold text-white mb-2">Select a Technology</h3>
                <p className="text-white/70">
                  Click on any technology from the left to see detailed information, use cases, and benefits.
                </p>
              </div>
            )}

            {/* Technology Stats */}
            <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-4 text-center">
                Technology Expertise Overview
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-1">
                    {Math.round(technologies.reduce((sum, tech) => sum + tech.expertise, 0) / technologies.length)}%
                  </div>
                  <div className="text-white/70 text-sm">Average Expertise</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-1">
                    {technologies.length}+
                  </div>
                  <div className="text-white/70 text-sm">Technologies</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-xl p-8">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Ready to Build with Cutting-Edge Tech?
            </h3>
            <p className="text-white/80 mb-6 max-w-2xl mx-auto">
              Our team of technology experts is ready to help you leverage these powerful tools 
              to create innovative solutions that drive your business forward.
            </p>
            <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center gap-2 mx-auto">
              <Code className="w-5 h-5" />
              Start Your Project
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}