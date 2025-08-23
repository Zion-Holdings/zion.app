import React from 'react';
import { motion } from 'framer-motion';
import { 
  Gamepad2, Eye, Globe, Users, Target, ArrowRight, 
  CheckCircle, Building, Rocket, Shield, Zap, Star,
  Palette, Music, Film, BookOpen, Cpu, Database,
  Cloud, Lock, Settings, Code, TrendingUp, Award
} from 'lucide-react';

export default function Metaverse() {
  const metaverseServices = [
    {
      title: 'Virtual World Creation',
      description: 'Design and build immersive 3D virtual environments for businesses, education, and entertainment.',
      icon: <Globe className="w-12 h-12 text-blue-400" />,
      features: [
        'Custom 3D Environment Design',
        'Interactive Virtual Spaces',
        'Real-time Rendering',
        'Multi-user Environments',
        'Cross-platform Compatibility',
        'Performance Optimization'
      ],
      useCases: [
        'Virtual Offices & Workspaces',
        'Educational Virtual Campuses',
        'Virtual Events & Conferences',
        'Virtual Shopping Experiences'
      ]
    },
    {
      title: 'Immersive Experiences',
      description: 'Create engaging VR/AR experiences that captivate users and drive engagement.',
      icon: <Eye className="w-12 h-12 text-purple-400" />,
      features: [
        'VR/AR Development',
        '360° Video Experiences',
        'Interactive Storytelling',
        'Spatial Audio Integration',
        'Haptic Feedback Systems',
        'Motion Tracking'
      ],
      useCases: [
        'Virtual Training & Simulation',
        'Interactive Marketing Campaigns',
        'Virtual Tourism & Exploration',
        'Immersive Gaming Experiences'
      ]
    },
    {
      title: 'Digital Twins',
      description: 'Build accurate digital replicas of physical assets and environments for monitoring and optimization.',
      icon: <Building className="w-12 h-12 text-green-400" />,
      features: [
        '3D Asset Scanning & Modeling',
        'Real-time Data Integration',
        'Predictive Analytics',
        'IoT Sensor Integration',
        'Performance Monitoring',
        'Predictive Maintenance'
      ],
      useCases: [
        'Smart City Planning',
        'Industrial Facility Management',
        'Building Information Modeling',
        'Infrastructure Monitoring'
      ]
    },
    {
      title: 'VR/AR Solutions',
      description: 'Develop cutting-edge virtual and augmented reality applications for various industries.',
      icon: <Gamepad2 className="w-12 h-12 text-orange-400" />,
      features: [
        'Mobile AR Applications',
        'VR Headset Applications',
        'Mixed Reality Solutions',
        'Gesture Recognition',
        'Voice Commands',
        'Eye Tracking'
      ],
      useCases: [
        'Remote Collaboration Tools',
        'Virtual Design Reviews',
        'AR-powered Maintenance',
        'Virtual Showrooms'
      ]
    },
    {
      title: 'Metaverse Platforms',
      description: 'Build scalable metaverse platforms that can host thousands of concurrent users.',
      icon: <Cpu className="w-12 h-12 text-cyan-400" />,
      features: [
        'Scalable Infrastructure',
        'Real-time Multiplayer',
        'User Authentication',
        'Content Management',
        'Analytics & Insights',
        'Monetization Systems'
      ],
      useCases: [
        'Virtual Social Platforms',
        'Virtual Commerce Platforms',
        'Virtual Learning Platforms',
        'Virtual Entertainment Venues'
      ]
    },
    {
      title: 'Digital Assets',
      description: 'Create and manage digital assets including NFTs, virtual goods, and digital collectibles.',
      icon: <Palette className="w-12 h-12 text-pink-400" />,
      features: [
        'NFT Creation & Management',
        'Digital Asset Marketplaces',
        'Blockchain Integration',
        'Smart Contract Development',
        'Digital Rights Management',
        'Asset Trading Systems'
      ],
      useCases: [
        'Virtual Real Estate',
        'Digital Art Galleries',
        'Virtual Fashion & Accessories',
        'Gaming Asset Marketplaces'
      ]
    }
  ];

  const industries = [
    {
      name: 'Real Estate',
      description: 'Virtual property tours, digital twins of buildings, and virtual real estate marketplaces.',
      icon: <Building className="w-8 h-8 text-blue-400" />,
      benefits: [
        'Virtual Property Tours',
        '3D Building Visualization',
        'Virtual Staging',
        'Remote Property Viewing'
      ]
    },
    {
      name: 'Education',
      description: 'Immersive learning environments, virtual classrooms, and interactive educational experiences.',
      icon: <BookOpen className="w-8 h-8 text-green-400" />,
      benefits: [
        'Virtual Classrooms',
        'Interactive Learning Modules',
        'Virtual Field Trips',
        '3D Educational Content'
      ]
    },
    {
      name: 'Healthcare',
      description: 'Virtual medical training, patient education, and therapeutic virtual environments.',
      icon: <Shield className="w-8 h-8 text-red-400" />,
      benefits: [
        'Medical Training Simulations',
        'Virtual Therapy Sessions',
        'Patient Education Tools',
        'Surgical Planning'
      ]
    },
    {
      name: 'Retail & E-commerce',
      description: 'Virtual shopping experiences, digital showrooms, and immersive product demonstrations.',
      icon: <TrendingUp className="w-8 h-8 text-purple-400" />,
      benefits: [
        'Virtual Shopping Malls',
        '3D Product Visualization',
        'Virtual Try-On Experiences',
        'Interactive Product Demos'
      ]
    },
    {
      name: 'Entertainment',
      description: 'Virtual concerts, gaming experiences, and immersive entertainment platforms.',
      icon: <Music className="w-8 h-8 text-yellow-400" />,
      benefits: [
        'Virtual Concert Venues',
        'Immersive Gaming Worlds',
        'Virtual Movie Theaters',
        'Interactive Storytelling'
      ]
    },
    {
      name: 'Manufacturing',
      description: 'Virtual factory tours, digital twins, and training simulations.',
      icon: <Settings className="w-8 h-8 text-cyan-400" />,
      benefits: [
        'Virtual Factory Tours',
        'Training Simulations',
        'Equipment Maintenance',
        'Process Optimization'
      ]
    }
  ];

  const technologyStack = [
    {
      category: '3D Graphics & Rendering',
      technologies: [
        'Unity 3D',
        'Unreal Engine',
        'Three.js',
        'WebGL',
        'OpenGL',
        'Vulkan'
      ]
    },
    {
      category: 'VR/AR Development',
      technologies: [
        'Oculus SDK',
        'HTC Vive SDK',
        'ARKit & ARCore',
        'WebXR',
        'SteamVR',
        'Mixed Reality Toolkit'
      ]
    },
    {
      category: 'Backend & Infrastructure',
      technologies: [
        'Node.js',
        'Python',
        'AWS/Azure/GCP',
        'Docker',
        'Kubernetes',
        'WebRTC'
      ]
    },
    {
      category: 'Blockchain & NFTs',
      technologies: [
        'Ethereum',
        'Polygon',
        'IPFS',
        'MetaMask',
        'Web3.js',
        'Solidity'
      ]
    }
  ];

  const developmentProcess = [
    {
      step: '01',
      title: 'Concept & Planning',
      description: 'Define the metaverse vision, user experience goals, and technical requirements.',
      icon: <Target className="w-8 h-8 text-blue-400" />
    },
    {
      step: '02',
      title: 'Design & Prototyping',
      description: 'Create 3D designs, user interfaces, and interactive prototypes for validation.',
      icon: <Palette className="w-8 h-8 text-purple-400" />
    },
    {
      step: '03',
      title: 'Development & Integration',
      description: 'Build the metaverse platform, integrate technologies, and implement features.',
      icon: <Code className="w-8 h-8 text-green-400" />
    },
    {
      step: '04',
      title: 'Testing & Optimization',
      description: 'Rigorous testing, performance optimization, and user experience refinement.',
      icon: <Settings className="w-8 h-8 text-orange-400" />
    },
    {
      step: '05',
      title: 'Deployment & Launch',
      description: 'Deploy to production, launch the metaverse, and provide ongoing support.',
      icon: <Rocket className="w-8 h-8 text-red-400" />
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-pink-900/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent mb-6"
          >
            Metaverse Development
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto mb-8"
          >
            Build immersive virtual worlds, create engaging experiences, and unlock the future of digital interaction with our metaverse development services.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <a href="#services" className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center space-x-2">
              <span>Explore Services</span>
              <ArrowRight className="w-5 h-5" />
            </a>
            <a href="/contact" className="border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300">
              Start Your Project
            </a>
          </motion.div>
        </div>
      </section>

      {/* Metaverse Services */}
      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              Our Metaverse Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive metaverse development solutions to bring your virtual world vision to life.
            </p>
          </motion.div>
          
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {metaverseServices.map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-900/50 p-8 rounded-2xl border border-gray-800 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="flex justify-center mb-6">{service.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-4 text-center">{service.title}</h3>
                <p className="text-gray-300 text-center mb-6">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-purple-400 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-pink-400 mb-3">Use Cases:</h4>
                  <ul className="space-y-2">
                    {service.useCases.map((useCase, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-gray-300">
                        <CheckCircle className="w-4 h-4 text-pink-400 flex-shrink-0" />
                        <span className="text-sm">{useCase}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              Industries We Transform
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our metaverse solutions are revolutionizing businesses across diverse industries.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="flex items-center space-x-3 mb-4">
                  {industry.icon}
                  <h3 className="text-xl font-semibold text-white">{industry.name}</h3>
                </div>
                <p className="text-gray-300 text-sm mb-4">{industry.description}</p>
                <ul className="space-y-2">
                  {industry.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center space-x-2 text-gray-300 text-sm">
                      <CheckCircle className="w-4 h-4 text-purple-400 flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              Technology Stack
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We leverage cutting-edge technologies to build robust and scalable metaverse solutions.
            </p>
          </motion.div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {technologyStack.map((category, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-900/50 p-8 rounded-2xl border border-gray-800"
              >
                <h3 className="text-2xl font-bold text-white mb-6">{category.category}</h3>
                <div className="grid grid-cols-2 gap-4">
                  {category.technologies.map((tech, idx) => (
                    <div key={idx} className="flex items-center space-x-2 text-gray-300">
                      <CheckCircle className="w-4 h-4 text-purple-400 flex-shrink-0" />
                      <span className="text-sm">{tech}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              Our Development Process
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A structured approach to building immersive metaverse experiences.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {developmentProcess.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-white">{step.step}</span>
                </div>
                <div className="flex justify-center mb-3">{step.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-3">{step.title}</h3>
                <p className="text-gray-300 text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We combine technical expertise with creative vision to deliver exceptional metaverse experiences.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Expert Team',
                description: 'Experienced developers, designers, and 3D artists with deep metaverse expertise.',
                icon: <Users className="w-12 h-12 text-blue-400" />
              },
              {
                title: 'Cutting-Edge Tech',
                description: 'Latest VR/AR technologies, 3D engines, and blockchain integration capabilities.',
                icon: <Star className="w-12 h-12 text-yellow-400" />
              },
              {
                title: 'Proven Results',
                description: 'Successfully delivered metaverse projects for diverse industries and use cases.',
                icon: <Award className="w-12 h-12 text-green-400" />
              },
              {
                title: 'Innovation Focus',
                description: 'Pioneering new approaches to virtual world creation and user experience design.',
                icon: <Zap className="w-12 h-12 text-purple-400" />
              }
            ].map((reason, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="flex justify-center mb-4">{reason.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{reason.title}</h3>
                <p className="text-gray-300 text-sm">{reason.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              Ready to Build Your Metaverse?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let's discuss how we can create immersive virtual experiences that transform your business and engage your audience.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/contact" className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center space-x-2">
                <span>Start Your Project</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <a href="/services" className="border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300">
                Explore All Services
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}