import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function ResourcesPage() {
  const resourceCategories = [
    {
      title: 'AI & Automation Tools',
      description: 'Essential tools and platforms for building autonomous systems',
      resources: [
        {
          name: 'TensorFlow',
          description: 'Open-source machine learning framework for building and training AI models',
          link: 'https://tensorflow.org',
          type: 'Framework',
          difficulty: 'Intermediate'
        },
        {
          name: 'PyTorch',
          description: 'Deep learning framework with dynamic computational graphs and GPU acceleration',
          link: 'https://pytorch.org',
          type: 'Framework',
          difficulty: 'Intermediate'
        },
        {
          name: 'AutoML',
          description: 'Automated machine learning tools for rapid model development',
          link: 'https://automl.org',
          type: 'Tool',
          difficulty: 'Beginner'
        },
        {
          name: 'MLflow',
          description: 'Platform for managing the complete machine learning lifecycle',
          link: 'https://mlflow.org',
          type: 'Platform',
          difficulty: 'Intermediate'
        },
        {
          name: 'Kubeflow',
          description: 'Machine learning toolkit for Kubernetes',
          link: 'https://kubeflow.org',
          type: 'Platform',
          difficulty: 'Advanced'
        }
      ]
    },
    {
      title: 'Cloud & Infrastructure',
      description: 'Cloud platforms and infrastructure tools for scalable automation',
      resources: [
        {
          name: 'AWS SageMaker',
          description: 'Fully managed machine learning service for building, training, and deploying models',
          link: 'https://aws.amazon.com/sagemaker',
          type: 'Platform',
          difficulty: 'Intermediate'
        },
        {
          name: 'Google Cloud AI',
          description: 'AI and machine learning services on Google Cloud Platform',
          link: 'https://cloud.google.com/ai',
          type: 'Platform',
          difficulty: 'Intermediate'
        },
        {
          name: 'Azure Machine Learning',
          description: 'Enterprise-grade machine learning service for building and deploying models',
          link: 'https://azure.microsoft.com/services/machine-learning',
          type: 'Platform',
          difficulty: 'Intermediate'
        },
        {
          name: 'Terraform',
          description: 'Infrastructure as code tool for managing cloud resources',
          link: 'https://terraform.io',
          type: 'Tool',
          difficulty: 'Intermediate'
        },
        {
          name: 'Docker',
          description: 'Containerization platform for consistent deployment environments',
          link: 'https://docker.com',
          type: 'Tool',
          difficulty: 'Beginner'
        }
      ]
    },
    {
      title: 'Data & Analytics',
      description: 'Tools for data processing, analysis, and visualization',
      resources: [
        {
          name: 'Apache Spark',
          description: 'Unified analytics engine for large-scale data processing',
          link: 'https://spark.apache.org',
          type: 'Framework',
          difficulty: 'Advanced'
        },
        {
          name: 'Pandas',
          description: 'Data manipulation and analysis library for Python',
          link: 'https://pandas.pydata.org',
          type: 'Library',
          difficulty: 'Beginner'
        },
        {
          name: 'Tableau',
          description: 'Business intelligence and data visualization platform',
          link: 'https://tableau.com',
          type: 'Platform',
          difficulty: 'Beginner'
        },
        {
          name: 'Apache Kafka',
          description: 'Distributed streaming platform for real-time data processing',
          link: 'https://kafka.apache.org',
          type: 'Platform',
          difficulty: 'Advanced'
        },
        {
          name: 'Elasticsearch',
          description: 'Search and analytics engine for all types of data',
          link: 'https://elastic.co',
          type: 'Platform',
          difficulty: 'Intermediate'
        }
      ]
    },
    {
      title: 'Robotics & IoT',
      description: 'Tools and platforms for physical automation and IoT systems',
      resources: [
        {
          name: 'ROS (Robot Operating System)',
          description: 'Open-source robotics middleware for building robot applications',
          link: 'https://ros.org',
          type: 'Framework',
          difficulty: 'Advanced'
        },
        {
          name: 'Arduino',
          description: 'Open-source electronics platform for building IoT devices',
          link: 'https://arduino.cc',
          type: 'Platform',
          difficulty: 'Beginner'
        },
        {
          name: 'Raspberry Pi',
          description: 'Single-board computer for IoT and automation projects',
          link: 'https://raspberrypi.org',
          type: 'Hardware',
          difficulty: 'Beginner'
        },
        {
          name: 'Node-RED',
          description: 'Flow-based programming tool for wiring IoT devices',
          link: 'https://nodered.org',
          type: 'Tool',
          difficulty: 'Beginner'
        },
        {
          name: 'MQTT',
          description: 'Lightweight messaging protocol for IoT communication',
          link: 'https://mqtt.org',
          type: 'Protocol',
          difficulty: 'Intermediate'
        }
      ]
    },
    {
      title: 'Learning Resources',
      description: 'Educational materials, courses, and documentation',
      resources: [
        {
          name: 'Coursera ML Course',
          description: 'Machine Learning course by Andrew Ng from Stanford University',
          link: 'https://coursera.org/learn/machine-learning',
          type: 'Course',
          difficulty: 'Beginner'
        },
        {
          name: 'Fast.ai',
          description: 'Practical deep learning for coders with free courses',
          link: 'https://fast.ai',
          type: 'Course',
          difficulty: 'Intermediate'
        },
        {
          name: 'Papers With Code',
          description: 'Latest machine learning papers with code implementations',
          link: 'https://paperswithcode.com',
          type: 'Research',
          difficulty: 'Advanced'
        },
        {
          name: 'Towards Data Science',
          description: 'Medium publication for data science and machine learning articles',
          link: 'https://towardsdatascience.com',
          type: 'Blog',
          difficulty: 'All Levels'
        },
        {
          name: 'GitHub',
          description: 'Platform for discovering and contributing to open-source projects',
          link: 'https://github.com',
          type: 'Platform',
          difficulty: 'All Levels'
        }
      ]
    }
  ];

  const caseStudies = [
    {
      title: 'Autonomous Manufacturing Success Story',
      company: 'Global Manufacturing Corp',
      description: 'How AI automation increased production efficiency by 40% while reducing costs by 25%',
      metrics: ['40% efficiency increase', '25% cost reduction', '99.9% uptime'],
      link: '/case-studies'
    },
    {
      title: 'Smart City Infrastructure',
      company: 'Metro City Government',
      description: 'Implementation of autonomous traffic management systems reducing congestion by 30%',
      metrics: ['30% congestion reduction', '20% fuel savings', 'Improved air quality'],
      link: '/case-studies'
    },
    {
      title: 'Healthcare Automation',
      company: 'Regional Medical Center',
      description: 'AI-powered diagnostic systems improving accuracy and reducing wait times',
      metrics: ['95% diagnostic accuracy', '50% faster diagnosis', 'Improved patient outcomes'],
      link: '/case-studies'
    }
  ];

  const upcomingEvents = [
    {
      title: 'AI Automation Summit 2025',
      date: 'March 15-17, 2025',
      location: 'San Francisco, CA',
      description: 'Join industry leaders for three days of insights into the future of autonomous systems',
      registration: 'https://example.com/ai-summit-2025'
    },
    {
      title: 'Quantum AI Workshop',
      date: 'April 5, 2025',
      location: 'Virtual Event',
      description: 'Hands-on workshop exploring quantum computing applications in AI automation',
      registration: 'https://example.com/quantum-workshop'
    },
    {
      title: 'Sustainable Automation Conference',
      date: 'May 20-22, 2025',
      location: 'Austin, TX',
      description: 'Learn how autonomous systems are driving environmental sustainability',
      registration: 'https://example.com/sustainable-automation'
    }
  ];

  return (
    <>
      <Head>
        <title>Resources | Zion Tech Group - AI & Automation Tools & Learning</title>
        <meta name="description" content="Discover essential tools, platforms, and learning resources for AI automation and autonomous systems. From frameworks to courses, find everything you need to build the future." />
        <meta property="og:title" content="Resources | Zion Tech Group - AI & Automation Tools & Learning" />
        <meta property="og:description" content="Discover essential tools, platforms, and learning resources for AI automation and autonomous systems." />
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
                Everything you need to build, deploy, and scale autonomous systems. From cutting-edge tools to comprehensive learning resources, 
                discover the building blocks of the automated future.
              </p>
            </header>

            {/* Resource Categories */}
            <section className="mb-20">
              <h2 className="text-3xl font-bold mb-12 text-center text-white">Essential Tools & Platforms</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                {resourceCategories.map((category, index) => (
                  <div key={index} className="bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-6 border border-white/20 hover:border-cyan-400/30 transition-all duration-300">
                    <h3 className="text-xl font-bold mb-3 text-cyan-400">{category.title}</h3>
                    <p className="text-white/70 mb-6">{category.description}</p>
                    <div className="space-y-4">
                      {category.resources.map((resource, resourceIndex) => (
                        <div key={resourceIndex} className="p-4 bg-white/5 rounded-lg border border-white/10">
                          <div className="flex items-start justify-between mb-2">
                            <h4 className="font-semibold text-white">{resource.name}</h4>
                            <div className="flex gap-2">
                              <span className="px-2 py-1 bg-cyan-400/20 text-cyan-400 text-xs rounded-full border border-cyan-400/30">
                                {resource.type}
                              </span>
                              <span className="px-2 py-1 bg-purple-400/20 text-purple-400 text-xs rounded-full border border-purple-400/30">
                                {resource.difficulty}
                              </span>
                            </div>
                          </div>
                          <p className="text-white/70 text-sm mb-3">{resource.description}</p>
                          <a 
                            href={resource.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors"
                          >
                            Learn More →
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Case Studies */}
            <section className="mb-20">
              <h2 className="text-3xl font-bold mb-12 text-center text-white">Success Stories & Case Studies</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {caseStudies.map((study, index) => (
                  <div key={index} className="bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-6 border border-white/20 hover:border-cyan-400/30 transition-all duration-300">
                    <div className="mb-4">
                      <span className="px-3 py-1 bg-green-400/20 text-green-400 text-sm rounded-full border border-green-400/30">
                        Success Story
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-white">{study.title}</h3>
                    <p className="text-white/60 text-sm mb-3">{study.company}</p>
                    <p className="text-white/80 mb-4">{study.description}</p>
                    <div className="mb-4">
                      {study.metrics.map((metric, metricIndex) => (
                        <span key={metricIndex} className="inline-block px-2 py-1 bg-cyan-400/20 text-cyan-400 text-xs rounded-full border border-cyan-400/30 mr-2 mb-2">
                          {metric}
                        </span>
                      ))}
                    </div>
                    <Link 
                      href={study.link}
                      className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
                    >
                      Read Full Case Study →
                    </Link>
                  </div>
                ))}
              </div>
            </section>

            {/* Upcoming Events */}
            <section className="mb-20">
              <h2 className="text-3xl font-bold mb-12 text-center text-white">Upcoming Events & Workshops</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {upcomingEvents.map((event, index) => (
                  <div key={index} className="bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-6 border border-white/20 hover:border-cyan-400/30 transition-all duration-300">
                    <div className="mb-4">
                      <span className="px-3 py-1 bg-purple-400/20 text-purple-400 text-sm rounded-full border border-purple-400/30">
                        Event
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-white">{event.title}</h3>
                    <div className="flex items-center gap-2 text-white/60 text-sm mb-2">
                      <span>📅</span>
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-white/60 text-sm mb-4">
                      <span>📍</span>
                      <span>{event.location}</span>
                    </div>
                    <p className="text-white/80 mb-4">{event.description}</p>
                    <a 
                      href={event.registration} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-block px-4 py-2 bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-fuchsia-500 transition-all duration-300"
                    >
                      Register Now
                    </a>
                  </div>
                ))}
              </div>
            </section>

            {/* Newsletter Signup */}
            <section className="mb-20">
              <div className="bg-gradient-to-r from-cyan-400/10 to-fuchsia-400/10 rounded-2xl p-8 border border-cyan-400/20">
                <div className="text-center max-w-3xl mx-auto">
                  <h2 className="text-3xl font-bold mb-4 text-white">Stay Updated with AI Automation</h2>
                  <p className="text-white/80 mb-6">
                    Get the latest insights, tools, and trends in autonomous systems delivered to your inbox. 
                    Join thousands of professionals staying ahead of the automation curve.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                    <input 
                      type="email" 
                      placeholder="Enter your email address"
                      className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-cyan-400"
                    />
                    <button className="px-6 py-3 bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-fuchsia-500 transition-all duration-300">
                      Subscribe
                    </button>
                  </div>
                  <p className="text-white/60 text-sm mt-3">
                    No spam, unsubscribe at any time. We respect your privacy.
                  </p>
                </div>
              </div>
            </section>

            {/* Contact CTA */}
            <section className="text-center">
              <h2 className="text-3xl font-bold mb-6 text-white">Need Help Getting Started?</h2>
              <p className="text-white/80 mb-8 max-w-2xl mx-auto">
                Our team of AI automation experts is here to help you navigate the complex landscape of 
                autonomous systems and find the right solutions for your organization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-fuchsia-500 transition-all duration-300"
                >
                  Schedule a Consultation
                </Link>
                <Link 
                  href="/services"
                  className="px-8 py-4 bg-white/10 text-white font-semibold rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  Explore Our Services
                </Link>
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
}