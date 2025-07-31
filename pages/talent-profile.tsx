import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'

const TalentProfile: NextPage = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Head>
        <title>Sarah Chen - AI Engineer | Zion</title>
        <meta name="description" content="Sarah Chen - Senior AI Engineer specializing in machine learning, computer vision, and deep learning. Available for remote and on-site projects." />
        <meta name="keywords" content="AI engineer, machine learning, computer vision, deep learning, Sarah Chen" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Navigation */}
      <nav className="bg-black/20 backdrop-blur-md border-b border-white/10 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="flex-shrink-0">
                <h1 className="text-2xl font-bold text-white">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Zion</span>
                </h1>
              </Link>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/marketplace" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Marketplace
              </Link>
              <Link href="/about" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                About
              </Link>
              <Link href="/auth/login" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Login
              </Link>
              <Link href="/auth/signup" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 shadow-lg hover:shadow-purple-500/25">
                Join Zion
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Profile Hero Card */}
          <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-3xl border border-white/10 p-8 mb-12">
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8">
              {/* Avatar and Basic Info */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                <div className="relative">
                  <div className="w-32 h-32 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center text-white text-4xl font-bold">
                    SC
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-slate-900 flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                
                <div className="text-center sm:text-left">
                  <h1 className="text-4xl font-bold text-white mb-2">Sarah Chen</h1>
                  <p className="text-2xl text-purple-300 mb-4">Senior AI Engineer</p>
                  <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                    <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm font-medium">
                      Available
                    </span>
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium">
                      Remote
                    </span>
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm font-medium">
                      Verified
                    </span>
                  </div>
                </div>
              </div>

              {/* Stats and CTA */}
              <div className="flex-1 flex flex-col lg:flex-row items-center lg:items-end gap-6">
                <div className="grid grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-2xl font-bold text-white">5+</div>
                    <div className="text-gray-400 text-sm">Years Experience</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">50+</div>
                    <div className="text-gray-400 text-sm">Projects Completed</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">4.9★</div>
                    <div className="text-gray-400 text-sm">Client Rating</div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => setIsContactModalOpen(true)}
                    className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-purple-500/25 transform hover:scale-105"
                  >
                    Hire Now
                  </button>
                  <button className="border border-white/20 text-white hover:bg-white/10 px-8 py-3 rounded-lg font-semibold transition-all duration-300 backdrop-blur-sm">
                    View Portfolio
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Skills and Experience */}
            <div className="lg:col-span-2 space-y-8">
              {/* Skills Section */}
              <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl border border-white/10 p-8">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <svg className="w-6 h-6 mr-3 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                  Skills & Expertise
                </h2>
                
                <div className="space-y-6">
                  {/* Technical Skills */}
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Technical Skills</h3>
                    <div className="flex flex-wrap gap-3">
                      {['Python', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'OpenCV', 'NLP', 'Computer Vision', 'Deep Learning', 'Machine Learning', 'AWS', 'Docker', 'Kubernetes'].map((skill) => (
                        <span key={skill} className="px-4 py-2 bg-white/10 text-white rounded-lg text-sm font-medium hover:bg-white/20 transition-colors">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* AI/ML Specializations */}
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-4">AI/ML Specializations</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-white/5 rounded-lg p-4">
                        <h4 className="text-purple-300 font-semibold mb-2">Computer Vision</h4>
                        <p className="text-gray-300 text-sm">Object detection, image segmentation, facial recognition, autonomous systems</p>
                      </div>
                      <div className="bg-white/5 rounded-lg p-4">
                        <h4 className="text-purple-300 font-semibold mb-2">Natural Language Processing</h4>
                        <p className="text-gray-300 text-sm">Text classification, sentiment analysis, language models, chatbots</p>
                      </div>
                      <div className="bg-white/5 rounded-lg p-4">
                        <h4 className="text-purple-300 font-semibold mb-2">Deep Learning</h4>
                        <p className="text-gray-300 text-sm">Neural networks, CNN, RNN, transformers, model optimization</p>
                      </div>
                      <div className="bg-white/5 rounded-lg p-4">
                        <h4 className="text-purple-300 font-semibold mb-2">MLOps</h4>
                        <p className="text-gray-300 text-sm">Model deployment, CI/CD, monitoring, scaling, infrastructure</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Projects Section */}
              <div className="bg-gradient-to-br from-green-500/10 to-blue-500/10 rounded-2xl border border-white/10 p-8">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <svg className="w-6 h-6 mr-3 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                  Featured Projects
                </h2>
                
                <div className="space-y-6">
                  <div className="bg-white/5 rounded-xl p-6">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-xl font-semibold text-white">Autonomous Vehicle Perception System</h3>
                      <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm">Completed</span>
                    </div>
                    <p className="text-gray-300 mb-4">
                      Developed a real-time object detection and tracking system for autonomous vehicles using YOLO and DeepSORT algorithms. Achieved 95% accuracy in adverse weather conditions.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">Python</span>
                      <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">TensorFlow</span>
                      <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">OpenCV</span>
                      <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">ROS</span>
                    </div>
                  </div>

                  <div className="bg-white/5 rounded-xl p-6">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-xl font-semibold text-white">AI-Powered Customer Service Chatbot</h3>
                      <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm">Completed</span>
                    </div>
                    <p className="text-gray-300 mb-4">
                      Built an intelligent chatbot using BERT and GPT models that handles customer inquiries with 90% resolution rate. Integrated with CRM systems and reduced support costs by 60%.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">Python</span>
                      <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">Transformers</span>
                      <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">NLP</span>
                      <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">FastAPI</span>
                    </div>
                  </div>

                  <div className="bg-white/5 rounded-xl p-6">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-xl font-semibold text-white">Medical Image Analysis Platform</h3>
                      <span className="px-3 py-1 bg-yellow-500/20 text-yellow-300 rounded-full text-sm">In Progress</span>
                    </div>
                    <p className="text-gray-300 mb-4">
                      Developing a deep learning platform for medical image analysis that can detect early signs of diseases with 98% accuracy. Using U-Net architecture for segmentation tasks.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">PyTorch</span>
                      <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">Medical Imaging</span>
                      <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">U-Net</span>
                      <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">DICOM</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Experience Section */}
              <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-2xl border border-white/10 p-8">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <svg className="w-6 h-6 mr-3 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.815-8.864-2.244M21 13.255v-3.51A23.931 23.931 0 0012 12c-3.183 0-6.22.815-8.864 2.244M21 13.255a23.931 23.931 0 01-9.864 2.244M21 13.255a23.931 23.931 0 00-9.864-2.244M12 15c-3.183 0-6.22-.815-8.864-2.244M12 15c3.183 0 6.22.815 8.864 2.244M12 15c-3.183 0-6.22.815-8.864-2.244M12 15c3.183 0 6.22-.815 8.864-2.244" />
                  </svg>
                  Professional Experience
                </h2>
                
                <div className="space-y-6">
                  <div className="bg-white/5 rounded-xl p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-white">Senior AI Engineer</h3>
                        <p className="text-purple-300">TechFlow Inc.</p>
                      </div>
                      <span className="text-gray-400 text-sm">2022 - Present</span>
                    </div>
                    <ul className="text-gray-300 space-y-2 text-sm">
                      <li>• Led development of computer vision systems for autonomous vehicles</li>
                      <li>• Managed team of 5 AI engineers and data scientists</li>
                      <li>• Improved model accuracy by 15% through advanced optimization techniques</li>
                      <li>• Implemented MLOps pipeline reducing deployment time by 70%</li>
                    </ul>
                  </div>

                  <div className="bg-white/5 rounded-xl p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-white">Machine Learning Engineer</h3>
                        <p className="text-purple-300">DataCorp Solutions</p>
                      </div>
                      <span className="text-gray-400 text-sm">2020 - 2022</span>
                    </div>
                    <ul className="text-gray-300 space-y-2 text-sm">
                      <li>• Developed NLP models for sentiment analysis and text classification</li>
                      <li>• Built recommendation systems with 40% improvement in user engagement</li>
                      <li>• Collaborated with product teams to integrate ML solutions</li>
                      <li>• Mentored junior developers and conducted technical workshops</li>
                    </ul>
                  </div>

                  <div className="bg-white/5 rounded-xl p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-white">Data Scientist</h3>
                        <p className="text-purple-300">InnovateAI</p>
                      </div>
                      <span className="text-gray-400 text-sm">2019 - 2020</span>
                    </div>
                    <ul className="text-gray-300 space-y-2 text-sm">
                      <li>• Analyzed large datasets to extract actionable insights</li>
                      <li>• Built predictive models for customer behavior analysis</li>
                      <li>• Created data visualization dashboards for stakeholders</li>
                      <li>• Contributed to research papers on deep learning applications</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Availability and Contact */}
            <div className="space-y-8">
              {/* Availability Section */}
              <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl border border-white/10 p-8">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <svg className="w-6 h-6 mr-3 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Availability
                </h2>
                
                <div className="space-y-4">
                  <div className="bg-white/5 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-white font-semibold">Current Status</span>
                      <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm">Available</span>
                    </div>
                    <p className="text-gray-300 text-sm">Ready for new projects starting immediately</p>
                  </div>

                  <div className="bg-white/5 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-white font-semibold">Work Type</span>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300 text-sm">Full-time</span>
                        <span className="text-green-300 text-sm">✓</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300 text-sm">Contract</span>
                        <span className="text-green-300 text-sm">✓</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300 text-sm">Freelance</span>
                        <span className="text-green-300 text-sm">✓</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/5 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-white font-semibold">Location</span>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300 text-sm">Remote</span>
                        <span className="text-green-300 text-sm">✓</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300 text-sm">On-site</span>
                        <span className="text-green-300 text-sm">✓</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300 text-sm">Hybrid</span>
                        <span className="text-green-300 text-sm">✓</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/5 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-white font-semibold">Hourly Rate</span>
                    </div>
                    <div className="text-center">
                      <span className="text-2xl font-bold text-white">$120</span>
                      <span className="text-gray-400 text-sm">/hour</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact & Hire CTA */}
              <div className="bg-gradient-to-br from-green-500/10 to-blue-500/10 rounded-2xl border border-white/10 p-8">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <svg className="w-6 h-6 mr-3 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Get In Touch
                </h2>
                
                <div className="space-y-4">
                  <button
                    onClick={() => setIsContactModalOpen(true)}
                    className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-green-500/25 transform hover:scale-105"
                  >
                    Hire Sarah Now
                  </button>
                  
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 text-gray-300">
                      <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span className="text-sm">sarah.chen@email.com</span>
                    </div>
                    <div className="flex items-center space-x-3 text-gray-300">
                      <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span className="text-sm">San Francisco, CA</span>
                    </div>
                    <div className="flex items-center space-x-3 text-gray-300">
                      <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                      </svg>
                      <span className="text-sm">LinkedIn: sarah-chen-ai</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Certifications */}
              <div className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 rounded-2xl border border-white/10 p-8">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <svg className="w-6 h-6 mr-3 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                  Certifications
                </h2>
                
                <div className="space-y-4">
                  <div className="bg-white/5 rounded-lg p-4">
                    <h3 className="text-white font-semibold mb-2">AWS Machine Learning Specialty</h3>
                    <p className="text-gray-300 text-sm">Amazon Web Services</p>
                    <p className="text-gray-400 text-xs">2023</p>
                  </div>
                  
                  <div className="bg-white/5 rounded-lg p-4">
                    <h3 className="text-white font-semibold mb-2">Google Cloud Professional ML Engineer</h3>
                    <p className="text-gray-300 text-sm">Google Cloud</p>
                    <p className="text-gray-400 text-xs">2022</p>
                  </div>
                  
                  <div className="bg-white/5 rounded-lg p-4">
                    <h3 className="text-white font-semibold mb-2">Deep Learning Specialization</h3>
                    <p className="text-gray-300 text-sm">Coursera - Andrew Ng</p>
                    <p className="text-gray-400 text-xs">2021</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Contact Modal */}
      {isContactModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-white/10 p-8 max-w-md w-full">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-white">Hire Sarah Chen</h3>
              <button
                onClick={() => setIsContactModalOpen(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-white text-sm font-medium mb-2">Project Type</label>
                <select className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500">
                  <option>Full-time Position</option>
                  <option>Contract Project</option>
                  <option>Freelance Work</option>
                  <option>Consultation</option>
                </select>
              </div>
              
              <div>
                <label className="block text-white text-sm font-medium mb-2">Project Duration</label>
                <select className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500">
                  <option>1-3 months</option>
                  <option>3-6 months</option>
                  <option>6-12 months</option>
                  <option>12+ months</option>
                </select>
              </div>
              
              <div>
                <label className="block text-white text-sm font-medium mb-2">Budget Range</label>
                <select className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500">
                  <option>$10K - $25K</option>
                  <option>$25K - $50K</option>
                  <option>$50K - $100K</option>
                  <option>$100K+</option>
                </select>
              </div>
              
              <div>
                <label className="block text-white text-sm font-medium mb-2">Message</label>
                <textarea 
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 h-32 resize-none"
                  placeholder="Describe your project requirements..."
                ></textarea>
              </div>
              
              <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-purple-500/25">
                Send Proposal
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-black/40 backdrop-blur-md border-t border-white/10 mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center text-gray-400">
            <p>&copy; 2024 Zion. All rights reserved. | AI-Powered Marketplace</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default TalentProfile
