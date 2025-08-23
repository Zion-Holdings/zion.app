import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function ResourcesPage() {
  const resourceCategories = [
    {
      title: 'AI & Machine Learning',
      description: 'Essential resources for understanding and implementing AI automation',
      resources: [
        {
          name: 'TensorFlow Documentation',
          description: 'Comprehensive guide to Google\'s open-source machine learning framework',
          url: 'https://www.tensorflow.org/',
          type: 'Documentation',
          difficulty: 'Intermediate'
        },
        {
          name: 'PyTorch Tutorials',
          description: 'Deep learning framework tutorials and examples',
          url: 'https://pytorch.org/tutorials/',
          type: 'Tutorials',
          difficulty: 'Beginner'
        },
        {
          name: 'Scikit-learn User Guide',
          description: 'Machine learning library for Python with practical examples',
          url: 'https://scikit-learn.org/stable/user_guide.html',
          type: 'Documentation',
          difficulty: 'Beginner'
        },
        {
          name: 'Fast.ai Course',
          description: 'Practical deep learning for coders',
          url: 'https://course.fast.ai/',
          type: 'Course',
          difficulty: 'Intermediate'
        },
        {
          name: 'Andrew Ng\'s Machine Learning Course',
          description: 'Stanford\'s foundational machine learning course on Coursera',
          url: 'https://www.coursera.org/learn/machine-learning',
          type: 'Course',
          difficulty: 'Beginner'
        }
      ]
    },
    {
      title: 'Automation & DevOps',
      description: 'Tools and practices for building reliable automation systems',
      resources: [
        {
          name: 'GitHub Actions Documentation',
          description: 'Automate your workflow with GitHub Actions',
          url: 'https://docs.github.com/en/actions',
          type: 'Documentation',
          difficulty: 'Intermediate'
        },
        {
          name: 'Jenkins User Handbook',
          description: 'Open source automation server for building, testing, and deploying',
          url: 'https://www.jenkins.io/doc/book/',
          type: 'Documentation',
          difficulty: 'Intermediate'
        },
        {
          name: 'Docker Documentation',
          description: 'Containerization platform for consistent deployment',
          url: 'https://docs.docker.com/',
          type: 'Documentation',
          difficulty: 'Beginner'
        },
        {
          name: 'Kubernetes Documentation',
          description: 'Container orchestration platform for automated deployment',
          url: 'https://kubernetes.io/docs/',
          type: 'Documentation',
          difficulty: 'Advanced'
        },
        {
          name: 'Terraform Documentation',
          description: 'Infrastructure as code tool for cloud automation',
          url: 'https://www.terraform.io/docs',
          type: 'Documentation',
          difficulty: 'Intermediate'
        }
      ]
    },
    {
      title: 'Cloud & Infrastructure',
      description: 'Cloud platforms and infrastructure automation resources',
      resources: [
        {
          name: 'AWS Well-Architected Framework',
          description: 'Best practices for building secure, high-performing cloud applications',
          url: 'https://aws.amazon.com/architecture/well-architected/',
          type: 'Framework',
          difficulty: 'Intermediate'
        },
        {
          name: 'Google Cloud Architecture Framework',
          description: 'Google Cloud best practices and architectural guidance',
          url: 'https://cloud.google.com/architecture/framework',
          type: 'Framework',
          difficulty: 'Intermediate'
        },
        {
          name: 'Azure Architecture Center',
          description: 'Microsoft Azure architectural patterns and best practices',
          url: 'https://docs.microsoft.com/en-us/azure/architecture/',
          type: 'Documentation',
          difficulty: 'Intermediate'
        },
        {
          name: 'Hashicorp Learn',
          description: 'Tutorials and guides for cloud infrastructure tools',
          url: 'https://learn.hashicorp.com/',
          type: 'Tutorials',
          difficulty: 'Beginner'
        },
        {
          name: 'Cloud Native Computing Foundation',
          description: 'Open source projects for cloud-native applications',
          url: 'https://www.cncf.io/',
          type: 'Organization',
          difficulty: 'All Levels'
        }
      ]
    },
    {
      title: 'Security & Compliance',
      description: 'Cybersecurity and compliance resources for autonomous systems',
      resources: [
        {
          name: 'OWASP Top 10',
          description: 'Critical web application security risks and prevention',
          url: 'https://owasp.org/www-project-top-ten/',
          type: 'Security Guide',
          difficulty: 'Intermediate'
        },
        {
          name: 'NIST Cybersecurity Framework',
          description: 'Framework for improving critical infrastructure cybersecurity',
          url: 'https://www.nist.gov/cyberframework',
          type: 'Framework',
          difficulty: 'Advanced'
        },
        {
          name: 'SANS Security Resources',
          description: 'Information security training and resources',
          url: 'https://www.sans.org/',
          type: 'Training',
          difficulty: 'All Levels'
        },
        {
          name: 'CIS Controls',
          description: 'Critical security controls for effective cyber defense',
          url: 'https://www.cisecurity.org/controls/',
          type: 'Security Guide',
          difficulty: 'Intermediate'
        },
        {
          name: 'ISO 27001 Information Security',
          description: 'International standard for information security management',
          url: 'https://www.iso.org/isoiec-27001-information-security.html',
          type: 'Standard',
          difficulty: 'Advanced'
        }
      ]
    },
    {
      title: 'Sustainability & Green Tech',
      description: 'Resources for building environmentally conscious automation systems',
      resources: [
        {
          name: 'Green Software Foundation',
          description: 'Building a trusted ecosystem for green software',
          url: 'https://greensoftware.foundation/',
          type: 'Organization',
          difficulty: 'All Levels'
        },
        {
          name: 'Climate Action Tech',
          description: 'Community of technologists working on climate solutions',
          url: 'https://climateaction.tech/',
          type: 'Community',
          difficulty: 'All Levels'
        },
        {
          name: 'Sustainable Digital Infrastructure Alliance',
          description: 'Promoting sustainable digital infrastructure practices',
          url: 'https://sdialliance.org/',
          type: 'Organization',
          difficulty: 'All Levels'
        },
        {
          name: 'Green Web Foundation',
          description: 'Making the web green through sustainable hosting',
          url: 'https://www.thegreenwebfoundation.org/',
          type: 'Organization',
          difficulty: 'All Levels'
        },
        {
          name: 'Energy Star for Data Centers',
          description: 'Energy efficiency program for data center facilities',
          url: 'https://www.energystar.gov/buildings/benchmark/verify_results',
          type: 'Program',
          difficulty: 'Intermediate'
        }
      ]
    },
    {
      title: 'Research & Innovation',
      description: 'Cutting-edge research and innovation in AI automation',
      resources: [
        {
          name: 'arXiv',
          description: 'Open access repository for scientific papers in computer science',
          url: 'https://arxiv.org/',
          type: 'Research Papers',
          difficulty: 'Advanced'
        },
        {
          name: 'Papers With Code',
          description: 'Latest machine learning papers with code implementations',
          url: 'https://paperswithcode.com/',
          type: 'Research Papers',
          difficulty: 'Advanced'
        },
        {
          name: 'Google AI Research',
          description: 'Latest research and publications from Google AI',
          url: 'https://ai.google/research/',
          type: 'Research',
          difficulty: 'Advanced'
        },
        {
          name: 'OpenAI Research',
          description: 'Research papers and technical reports from OpenAI',
          url: 'https://openai.com/research/',
          type: 'Research',
          difficulty: 'Advanced'
        },
        {
          name: 'MIT Technology Review',
          description: 'Insights into emerging technologies and their impact',
          url: 'https://www.technologyreview.com/',
          type: 'News & Analysis',
          difficulty: 'All Levels'
        }
      ]
    }
  ];

  const toolsAndPlatforms = [
    {
      name: 'Hugging Face',
      description: 'Leading platform for natural language processing and machine learning',
      url: 'https://huggingface.co/',
      category: 'AI/ML Platform'
    },
    {
      name: 'Weights & Biases',
      description: 'Experiment tracking and model management for machine learning',
      url: 'https://wandb.ai/',
      category: 'MLOps'
    },
    {
      name: 'MLflow',
      description: 'Open source platform for the complete machine learning lifecycle',
      url: 'https://mlflow.org/',
      category: 'MLOps'
    },
    {
      name: 'Kubeflow',
      description: 'Machine learning toolkit for Kubernetes',
      url: 'https://www.kubeflow.org/',
      category: 'MLOps'
    },
    {
      name: 'Apache Airflow',
      description: 'Platform to programmatically author, schedule, and monitor workflows',
      url: 'https://airflow.apache.org/',
      category: 'Workflow Automation'
    },
    {
      name: 'Prefect',
      description: 'Modern workflow orchestration tool for data and ML pipelines',
      url: 'https://www.prefect.io/',
      category: 'Workflow Automation'
    },
    {
      name: 'Grafana',
      description: 'Open source analytics and monitoring solution',
      url: 'https://grafana.com/',
      category: 'Monitoring'
    },
    {
      name: 'Prometheus',
      description: 'Open source monitoring system and time series database',
      url: 'https://prometheus.io/',
      category: 'Monitoring'
    }
  ];

  const learningPaths = [
    {
      title: 'AI Automation Fundamentals',
      description: 'Essential concepts and skills for AI automation',
      duration: '8-12 weeks',
      difficulty: 'Beginner',
      topics: [
        'Machine Learning Basics',
        'Python Programming',
        'Data Analysis',
        'Basic Automation Concepts',
        'Cloud Fundamentals'
      ]
    },
    {
      title: 'Advanced AI Automation',
      description: 'Deep dive into sophisticated automation systems',
      duration: '12-16 weeks',
      difficulty: 'Intermediate',
      topics: [
        'Deep Learning',
        'Neural Networks',
        'Advanced ML Algorithms',
        'System Architecture',
        'Performance Optimization'
      ]
    },
    {
      title: 'Enterprise AI Automation',
      description: 'Building scalable automation solutions for large organizations',
      duration: '16-20 weeks',
      difficulty: 'Advanced',
      topics: [
        'Distributed Systems',
        'Security & Compliance',
        'Scalability Patterns',
        'DevOps Integration',
        'Business Strategy'
      ]
    }
  ];

  return (
    <>
      <Head>
        <title>Resources | Zion Tech Group - AI & Automation Learning Hub</title>
        <meta name="description" content="Comprehensive resources for AI automation, machine learning, and autonomous systems. Find tools, tutorials, courses, and research materials." />
        <meta property="og:title" content="Resources | Zion Tech Group - AI & Automation Learning Hub" />
        <meta property="og:description" content="Comprehensive resources for AI automation, machine learning, and autonomous systems." />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <div className="max-w-7xl mx-auto">
            <nav className="mb-8">
              <Link href="/" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                ← Back to Home
              </Link>
            </nav>
            
            <header className="text-center mb-16">
              <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
                AI & Automation Resources
              </h1>
              <p className="text-xl text-white/80 max-w-4xl mx-auto">
                Comprehensive collection of tools, tutorials, courses, and research materials to help you master 
                AI automation and autonomous systems
              </p>
            </header>

            {/* Learning Paths */}
            <section className="mb-20">
              <h2 className="text-3xl font-bold mb-8 text-center text-white">Learning Paths</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {learningPaths.map((path, index) => (
                  <div key={index} className="bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-8 border border-white/20 hover:border-cyan-400/30 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-4">
                      <span className={`px-3 py-1 text-sm rounded-full border ${
                        path.difficulty === 'Beginner' ? 'bg-green-400/20 text-green-400 border-green-400/30' :
                        path.difficulty === 'Intermediate' ? 'bg-yellow-400/20 text-yellow-400 border-yellow-400/30' :
                        'bg-red-400/20 text-red-400 border-red-400/30'
                      }`}>
                        {path.difficulty}
                      </span>
                      <span className="text-white/60 text-sm">{path.duration}</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-white">{path.title}</h3>
                    <p className="text-white/80 mb-6">{path.description}</p>
                    <div className="space-y-2">
                      {path.topics.map((topic, topicIndex) => (
                        <div key={topicIndex} className="flex items-center gap-2 text-white/70">
                          <span className="text-cyan-400">•</span>
                          <span>{topic}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Tools and Platforms */}
            <section className="mb-20">
              <h2 className="text-3xl font-bold mb-8 text-center text-white">Essential Tools & Platforms</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {toolsAndPlatforms.map((tool, index) => (
                  <div key={index} className="bg-gradient-to-br from-white/10 to-white/5 rounded-xl p-6 border border-white/20 hover:border-cyan-400/30 transition-all duration-300">
                    <div className="mb-3">
                      <span className="px-2 py-1 bg-cyan-400/20 text-cyan-400 text-xs rounded-full border border-cyan-400/30">
                        {tool.category}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-white">{tool.name}</h3>
                    <p className="text-white/70 text-sm mb-4">{tool.description}</p>
                    <a 
                      href={tool.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors"
                    >
                      Visit Platform →
                    </a>
                  </div>
                ))}
              </div>
            </section>

            {/* Resource Categories */}
            <section className="mb-20">
              <h2 className="text-3xl font-bold mb-8 text-center text-white">Resource Categories</h2>
              <div className="space-y-12">
                {resourceCategories.map((category, index) => (
                  <div key={index} className="bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-8 border border-white/20">
                    <div className="mb-8">
                      <h3 className="text-2xl font-bold mb-3 text-white">{category.title}</h3>
                      <p className="text-white/80">{category.description}</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {category.resources.map((resource, resourceIndex) => (
                        <div key={resourceIndex} className="bg-gradient-to-br from-white/5 to-white/0 rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300">
                          <div className="flex items-center gap-2 mb-3">
                            <span className={`px-2 py-1 text-xs rounded-full border ${
                              resource.type === 'Documentation' ? 'bg-blue-400/20 text-blue-400 border-blue-400/30' :
                              resource.type === 'Course' ? 'bg-green-400/20 text-green-400 border-green-400/30' :
                              resource.type === 'Tutorials' ? 'bg-purple-400/20 text-purple-400 border-purple-400/30' :
                              resource.type === 'Framework' ? 'bg-orange-400/20 text-orange-400 border-orange-400/30' :
                              'bg-gray-400/20 text-gray-400 border-gray-400/30'
                            }`}>
                              {resource.type}
                            </span>
                            <span className={`px-2 py-1 text-xs rounded-full border ${
                              resource.difficulty === 'Beginner' ? 'bg-green-400/20 text-green-400 border-green-400/30' :
                              resource.difficulty === 'Intermediate' ? 'bg-yellow-400/20 text-yellow-400 border-yellow-400/30' :
                              resource.difficulty === 'Advanced' ? 'bg-red-400/20 text-red-400 border-red-400/30' :
                              'bg-gray-400/20 text-gray-400 border-gray-400/30'
                            }`}>
                              {resource.difficulty}
                            </span>
                          </div>
                          <h4 className="text-lg font-semibold mb-2 text-white">{resource.name}</h4>
                          <p className="text-white/70 text-sm mb-4">{resource.description}</p>
                          <a 
                            href={resource.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors"
                          >
                            Access Resource →
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Call to Action */}
            <section className="text-center">
              <div className="bg-gradient-to-r from-cyan-400/10 to-fuchsia-400/10 rounded-2xl p-12 border border-cyan-400/20">
                <h2 className="text-3xl font-bold mb-4 text-white">Ready to Start Learning?</h2>
                <p className="text-white/80 mb-8 max-w-2xl mx-auto">
                  Whether you're just beginning your AI automation journey or looking to advance your skills, 
                  our team of experts is here to help you succeed.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    href="/contact" 
                    className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-fuchsia-500 transition-all duration-300"
                  >
                    Get Expert Guidance
                  </Link>
                  <Link 
                    href="/blog" 
                    className="px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300"
                  >
                    Explore Our Blog
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </Layout>
  );
};

export default ResourcesPage;