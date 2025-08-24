import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function AIGlossaryPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const glossaryData = {
    'AI Fundamentals': [
      {
        term: 'Artificial Intelligence (AI)',
        definition: 'The simulation of human intelligence in machines that are programmed to think and learn like humans.',
        examples: 'Machine learning, natural language processing, computer vision'
      },
      {
        term: 'Machine Learning (ML)',
        definition: 'A subset of AI that enables systems to automatically learn and improve from experience without being explicitly programmed.',
        examples: 'Predictive models, recommendation systems, fraud detection'
      },
      {
        term: 'Deep Learning',
        definition: 'A subset of machine learning that uses neural networks with multiple layers to model and understand complex patterns.',
        examples: 'Image recognition, speech processing, autonomous vehicles'
      },
      {
        term: 'Neural Network',
        definition: 'A computing system inspired by biological neural networks, consisting of interconnected nodes that process information.',
        examples: 'Convolutional neural networks, recurrent neural networks'
      }
    ],
    'Automation & RPA': [
      {
        term: 'Robotic Process Automation (RPA)',
        definition: 'Technology that uses software robots to automate repetitive, rule-based digital tasks.',
        examples: 'Data entry, invoice processing, customer service responses'
      },
      {
        term: 'Workflow Automation',
        definition: 'The automation of business processes and workflows to improve efficiency and reduce manual intervention.',
        examples: 'Approval processes, document routing, task assignments'
      },
      {
        term: 'Intelligent Process Automation (IPA)',
        definition: 'Combines RPA with AI capabilities to handle more complex, cognitive tasks.',
        examples: 'Document analysis, decision making, process optimization'
      },
      {
        term: 'Business Process Management (BPM)',
        definition: 'A systematic approach to making an organization\'s workflow more effective, efficient, and capable of adapting to changing environments.',
        examples: 'Process modeling, optimization, monitoring'
      }
    ],
    'Data & Analytics': [
      {
        term: 'Big Data',
        definition: 'Extremely large datasets that can be analyzed computationally to reveal patterns, trends, and associations.',
        examples: 'Social media data, sensor data, transaction records'
      },
      {
        term: 'Data Mining',
        definition: 'The process of discovering patterns and relationships in large datasets using statistical and machine learning techniques.',
        examples: 'Market basket analysis, customer segmentation, fraud detection'
      },
      {
        term: 'Predictive Analytics',
        definition: 'The use of statistical techniques and machine learning to analyze current and historical facts to make predictions about future events.',
        examples: 'Sales forecasting, risk assessment, demand planning'
      },
      {
        term: 'Business Intelligence (BI)',
        definition: 'Technologies, tools, and practices for collecting, integrating, analyzing, and presenting business information.',
        examples: 'Dashboards, reports, data visualization'
      }
    ],
    'Cloud & Infrastructure': [
      {
        term: 'Cloud Computing',
        definition: 'The delivery of computing services over the internet, including servers, storage, databases, networking, and software.',
        examples: 'AWS, Azure, Google Cloud Platform'
      },
      {
        term: 'Edge Computing',
        definition: 'A distributed computing paradigm that brings computation and data storage closer to the location where it is needed.',
        examples: 'IoT devices, autonomous vehicles, smart cities'
      },
      {
        term: 'Containerization',
        definition: 'A lightweight alternative to full machine virtualization that involves encapsulating an application and its dependencies.',
        examples: 'Docker, Kubernetes, microservices'
      },
      {
        term: 'Serverless Computing',
        definition: 'A cloud computing execution model where the cloud provider automatically manages the allocation of machine resources.',
        examples: 'AWS Lambda, Azure Functions, Google Cloud Functions'
      }
    ],
    'AI Ethics & Governance': [
      {
        term: 'Algorithmic Bias',
        definition: 'Systematic and repeatable errors in a computer system that create unfair outcomes, such as privileging one arbitrary group of users over others.',
        examples: 'Discriminatory hiring algorithms, biased loan approval systems'
      },
      {
        term: 'Explainable AI (XAI)',
        definition: 'AI systems that can explain their reasoning, decision-making processes, and recommendations in human-understandable terms.',
        examples: 'Interpretable machine learning models, transparent decision systems'
      },
      {
        term: 'AI Governance',
        definition: 'The framework of rules, policies, and procedures that ensure AI systems are developed and deployed responsibly.',
        examples: 'Ethics committees, compliance frameworks, audit procedures'
      },
      {
        term: 'Responsible AI',
        definition: 'The practice of designing, developing, and deploying AI systems in a way that is ethical, transparent, and accountable.',
        examples: 'Fairness testing, privacy protection, human oversight'
      }
    ],
    'Emerging Technologies': [
      {
        term: 'Quantum Computing',
        definition: 'A type of computation that harnesses quantum mechanical phenomena to process information in ways that classical computers cannot.',
        examples: 'Cryptography, optimization problems, drug discovery'
      },
      {
        term: 'Generative AI',
        definition: 'AI systems that can generate new content, such as text, images, audio, or video, based on training data.',
        examples: 'ChatGPT, DALL-E, music generation systems'
      },
      {
        term: 'Computer Vision',
        definition: 'A field of AI that trains computers to interpret and understand visual information from the world.',
        examples: 'Facial recognition, object detection, medical imaging'
      },
      {
        term: 'Natural Language Processing (NLP)',
        definition: 'A branch of AI that helps computers understand, interpret, and manipulate human language.',
        examples: 'Chatbots, language translation, sentiment analysis'
      }
    ]
  };

  const allTerms = Object.values(glossaryData).flat();
  
  const filteredTerms = allTerms.filter(term => {
    const matchesSearch = term.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         term.definition.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || 
                           Object.keys(glossaryData).includes(selectedCategory);
    return matchesSearch && matchesCategory;
  });

  const categories = ['all', ...Object.keys(glossaryData)];

  return (
    <>
      <Head>
        <title>AI & Automation Glossary | Zion Tech Group</title>
        <meta name="description" content="Comprehensive glossary of AI, machine learning, automation, and technology terms. Understand key concepts and definitions in the world of artificial intelligence." />
        <meta property="og:title" content="AI & Automation Glossary - Zion Tech Group" />
        <meta property="og:description" content="Comprehensive glossary of AI and automation terms and definitions." />
        <meta name="twitter:card" content="summary_large_image" />
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
                AI & Automation Glossary
              </h1>
              <p className="text-xl text-white/80 max-w-4xl mx-auto">
                A comprehensive reference guide to key terms, concepts, and definitions 
                in artificial intelligence, machine learning, and automation technology.
              </p>
            </header>

            {/* Search and Filter */}
            <div className="mb-12">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1">
                  <input
                    type="text"
                    placeholder="Search terms and definitions..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-cyan-400/50 transition-colors"
                  />
                </div>
                <div className="md:w-64">
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-cyan-400/50 transition-colors"
                  >
                    <option value="all">All Categories</option>
                    {Object.keys(glossaryData).map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Results Count */}
            <div className="mb-8">
              <p className="text-white/60">
                Found {filteredTerms.length} term{filteredTerms.length !== 1 ? 's' : ''}
                {searchTerm && ` matching "${searchTerm}"`}
                {selectedCategory !== 'all' && ` in ${selectedCategory}`}
              </p>
            </div>

            {/* Glossary Terms */}
            <div className="space-y-6">
              {filteredTerms.map((term, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
                  <h3 className="text-2xl font-bold mb-4 text-cyan-400">{term.term}</h3>
                  <p className="text-white/80 mb-4 text-lg leading-relaxed">{term.definition}</p>
                  <div className="bg-white/5 rounded-lg p-4">
                    <h4 className="text-sm font-semibold text-cyan-300 mb-2">Examples:</h4>
                    <p className="text-white/70 text-sm">{term.examples}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* No Results */}
            {filteredTerms.length === 0 && (
              <div className="text-center py-16">
                <div className="text-6xl mb-6">🔍</div>
                <h3 className="text-2xl font-bold text-white mb-4">No terms found</h3>
                <p className="text-white/60 mb-8">
                  Try adjusting your search terms or category filter
                </p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('all');
                  }}
                  className="px-6 py-3 bg-cyan-400 text-white rounded-lg hover:bg-cyan-500 transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            )}

            {/* Category Overview */}
            <section className="mt-20">
              <h2 className="text-3xl font-bold mb-12 text-center text-white">Browse by Category</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {Object.entries(glossaryData).map(([category, terms]) => (
                  <div key={category} className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-cyan-400/30 transition-all duration-300">
                    <h3 className="text-xl font-bold mb-4 text-cyan-400">{category}</h3>
                    <p className="text-white/70 mb-4">
                      {terms.length} term{terms.length !== 1 ? 's' : ''} in this category
                    </p>
                    <ul className="space-y-2 text-sm text-white/60">
                      {terms.slice(0, 3).map((term, index) => (
                        <li key={index}>• {term.term}</li>
                      ))}
                      {terms.length > 3 && (
                        <li className="text-cyan-400">... and {terms.length - 3} more</li>
                      )}
                    </ul>
                    <button
                      onClick={() => {
                        setSelectedCategory(category);
                        setSearchTerm('');
                      }}
                      className="mt-4 px-4 py-2 bg-cyan-400/20 text-cyan-400 rounded-lg hover:bg-cyan-400/30 transition-colors text-sm"
                    >
                      View All Terms
                    </button>
                  </div>
                ))}
              </div>
            </section>

            {/* Call to Action */}
            <section className="mt-20 text-center">
              <div className="bg-gradient-to-r from-cyan-400/20 to-fuchsia-400/20 rounded-2xl p-12 border border-cyan-400/30">
                <h2 className="text-3xl font-bold mb-6 text-white">Ready to Learn More?</h2>
                <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
                  Explore our comprehensive resources to deepen your understanding of AI and automation, 
                  or contact our experts for personalized guidance.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    href="/ai-insights" 
                    className="bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-500 hover:to-fuchsia-500 transition-all duration-300"
                  >
                    Explore AI Insights
                  </Link>
                  <Link 
                    href="/contact" 
                    className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300"
                  >
                    Contact Our Experts
                  </Link>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
}