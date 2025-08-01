import type { NextPage } from 'next'
import Head from 'next/head'
import { useState, useEffect, useRef, useCallback } from 'react'
import Link from 'next/link'

const Home: NextPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [email, setEmail] = useState('')
  const [currentSection, setCurrentSection] = useState(0)
  const [isLoading, setIsLoading] = useState(false)
  const observerRef = useRef<IntersectionObserver | null>(null)
  const [visibleSections, setVisibleSections] = useState<Set<number>>(new Set())
  const [displayedSections, setDisplayedSections] = useState<any[]>([])
  const [nextSectionId, setNextSectionId] = useState(9)

  const handleWaitlistSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Waitlist signup:', email)
    setEmail('')
  }

  // Base sections data
  const baseSections = [
    {
      id: 0,
      type: 'hero',
      title: 'Zion - The First Free AI-Powered Marketplace',
      subtitle: 'High-Tech Products • IT Services • AI Talents • Innovation • Equipment',
      description: 'The first free AI-powered marketplace for high-tech products, on-demand IT services, AI talents, innovation, and equipment.',
      cta: 'Start Trading Now',
      ctaLink: '/auth/signup',
      secondaryCta: 'Explore Marketplace',
      secondaryCtaLink: '/marketplace',
      bgClass: 'bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900'
    },
    {
      id: 1,
      type: 'marketplace-overview',
      title: 'Marketplace Categories',
      items: [
        { title: 'IT Services', description: 'Professional IT consulting and development', link: '/services', icon: '💻', color: 'from-blue-500 to-cyan-500' },
        { title: 'AI Talents', description: 'Expert AI developers and consultants', link: '/talents', icon: '🤖', color: 'from-purple-500 to-pink-500' },
        { title: 'Equipment', description: 'High-performance computing hardware', link: '/equipment', icon: '⚙️', color: 'from-green-500 to-emerald-500' },
        { title: 'Innovation', description: 'Cutting-edge technology solutions', link: '/products', icon: '🚀', color: 'from-orange-500 to-red-500' }
      ],
      bgClass: 'bg-gradient-to-br from-slate-800 to-slate-900'
    },
    {
      id: 2,
      type: 'featured-services',
      title: 'Featured IT Services',
      items: [
        { title: 'AI Development', description: 'Custom AI solutions and machine learning', link: '/services/ai-model-development', price: '$150-500/hr', rating: 4.9 },
        { title: 'Cloud Migration', description: 'Seamless cloud infrastructure setup', link: '/services/cloud-migration-services', price: '$2000-15000', rating: 4.8 },
        { title: 'Security Auditing', description: 'Comprehensive security assessments', link: '/services/security-auditing', price: '$1000-8000', rating: 4.9 },
        { title: 'Performance Optimization', description: 'System and application optimization', link: '/services/performance-optimization', price: '$800-3000', rating: 4.7 }
      ],
      bgClass: 'bg-gradient-to-br from-purple-900 to-slate-900'
    },
    {
      id: 3,
      type: 'featured-talents',
      title: 'Top AI Talents',
      items: [
        { name: 'Dr. Sarah Chen', specialization: 'Machine Learning Expert', experience: '8+ years', rating: 4.9, link: '/talents' },
        { name: 'Alex Rodriguez', specialization: 'Deep Learning Specialist', experience: '6+ years', rating: 4.8, link: '/talents' },
        { name: 'Dr. Michael Kim', specialization: 'AI Research Scientist', experience: '10+ years', rating: 4.9, link: '/talents' },
        { name: 'Emma Thompson', specialization: 'Computer Vision Engineer', experience: '5+ years', rating: 4.7, link: '/talents' }
      ],
      bgClass: 'bg-gradient-to-br from-slate-900 to-purple-900'
    },
    {
      id: 4,
      type: 'featured-equipment',
      title: 'Premium Equipment',
      items: [
        { name: 'GPU Clusters', description: 'High-performance computing for AI workloads', price: '$5000-50000', link: '/equipment' },
        { name: 'Quantum Computers', description: 'Next-generation quantum processing', price: '$100000+', link: '/equipment' },
        { name: 'Edge Computing Devices', description: 'IoT and edge processing solutions', price: '$1000-10000', link: '/equipment' },
        { name: 'Data Storage Systems', description: 'Enterprise-grade storage solutions', price: '$2000-25000', link: '/equipment' }
      ],
      bgClass: 'bg-gradient-to-br from-green-900 to-slate-900'
    },
    {
      id: 5,
      type: 'blog-highlights',
      title: 'Latest Insights',
      items: [
        { title: 'Digital Transformation Strategies', excerpt: 'How AI is revolutionizing enterprise operations', link: '/blog/digital-transformation-strategies', category: 'Strategy' },
        { title: 'Cybersecurity in the Age of AI', excerpt: 'Protecting your business with AI-powered security', link: '/blog/cybersecurity-in-the-age-of-ai', category: 'Security' },
        { title: 'Machine Learning in Healthcare', excerpt: 'AI applications transforming healthcare delivery', link: '/blog/machine-learning-in-healthcare', category: 'Healthcare' },
        { title: 'Blockchain for Supply Chain', excerpt: 'Transparent and secure supply chain management', link: '/blog/blockchain-for-supply-chain-management', category: 'Blockchain' }
      ],
      bgClass: 'bg-gradient-to-br from-blue-900 to-slate-900'
    },
    {
      id: 6,
      type: 'chat-services',
      title: 'AI Chat Services',
      items: [
        { title: 'Business Intelligence Chat', description: 'Get insights from your data', link: '/services/business-intelligence-chat', icon: '📊' },
        { title: 'Security Auditing Chat', description: 'AI-powered security analysis', link: '/services/security-auditing-chat', icon: '🔒' },
        { title: 'System Administration Chat', description: 'Expert system management advice', link: '/services/system-administration-chat', icon: '⚙️' },
        { title: 'Edge AI Implementation', description: 'Edge computing solutions', link: '/services/edge-ai-implementation', icon: '🌐' }
      ],
      bgClass: 'bg-gradient-to-br from-indigo-900 to-slate-900'
    },
    {
      id: 7,
      type: 'company-info',
      title: 'About Zion',
      items: [
        { title: 'Our Mission', description: 'Democratizing access to high-tech solutions', link: '/about' },
        { title: 'Contact Us', description: 'Get in touch with our team', link: '/contact' },
        { title: 'Request Quote', description: 'Get a custom quote for your project', link: '/quote-request' },
        { title: 'Admin Dashboard', description: 'Manage your marketplace presence', link: '/admin-dashboard' }
      ],
      bgClass: 'bg-gradient-to-br from-slate-900 to-purple-900'
    },
    {
      id: 8,
      type: 'waitlist',
      title: 'Join the Waitlist',
      description: 'Be among the first to experience the future of AI-powered marketplace. Sign up for early access and exclusive benefits.',
      bgClass: 'bg-gradient-to-br from-purple-600/20 to-pink-600/20'
    }
  ]

  // Initialize displayed sections with base sections
  useEffect(() => {
    setDisplayedSections(baseSections)
  }, [baseSections])

  // Generate additional sections for infinite scroll
  const generateAdditionalSections = () => {
    const additionalSections = []
    const sectionTypes = [
      {
        type: 'featured-services',
        title: 'Advanced IT Solutions',
        items: [
          { title: 'Blockchain Development', description: 'Decentralized applications and smart contracts', link: '/services/blockchain-development', price: '$200-600/hr', rating: 4.8 },
          { title: 'IoT Integration', description: 'Internet of Things implementation', link: '/services/iot-integration', price: '$150-400/hr', rating: 4.7 },
          { title: 'Data Analytics', description: 'Big data processing and insights', link: '/services/data-analytics', price: '$180-450/hr', rating: 4.9 },
          { title: 'DevOps Automation', description: 'CI/CD pipeline optimization', link: '/services/devops-automation', price: '$120-350/hr', rating: 4.6 }
        ],
        bgClass: 'bg-gradient-to-br from-cyan-900 to-slate-900'
      },
      {
        type: 'featured-talents',
        title: 'Expert Consultants',
        items: [
          { name: 'Dr. Lisa Wang', specialization: 'Quantum Computing Expert', experience: '12+ years', rating: 4.9, link: '/talents' },
          { name: 'James Wilson', specialization: 'Blockchain Architect', experience: '7+ years', rating: 4.8, link: '/talents' },
          { name: 'Dr. Elena Petrova', specialization: 'Data Scientist', experience: '9+ years', rating: 4.9, link: '/talents' },
          { name: 'David Park', specialization: 'Cloud Solutions Architect', experience: '8+ years', rating: 4.7, link: '/talents' }
        ],
        bgClass: 'bg-gradient-to-br from-emerald-900 to-slate-900'
      },
      {
        type: 'featured-equipment',
        title: 'Advanced Hardware',
        items: [
          { name: 'AI Training Rigs', description: 'Specialized hardware for machine learning', price: '$8000-75000', link: '/equipment' },
          { name: 'Network Infrastructure', description: 'High-speed networking equipment', price: '$3000-20000', link: '/equipment' },
          { name: 'Security Appliances', description: 'Enterprise security solutions', price: '$5000-30000', link: '/equipment' },
          { name: 'Monitoring Systems', description: 'Real-time monitoring and alerting', price: '$2000-15000', link: '/equipment' }
        ],
        bgClass: 'bg-gradient-to-br from-orange-900 to-slate-900'
      },
      {
        type: 'blog-highlights',
        title: 'Industry Trends',
        items: [
          { title: 'AI Ethics and Governance', excerpt: 'Building responsible AI systems', link: '/blog/ai-ethics-and-governance', category: 'Ethics' },
          { title: 'Edge Computing Revolution', excerpt: 'Processing data closer to the source', link: '/blog/edge-computing-revolution', category: 'Technology' },
          { title: 'Sustainable Tech Solutions', excerpt: 'Green technology for the future', link: '/blog/sustainable-tech-solutions', category: 'Sustainability' },
          { title: 'Digital Twin Technology', excerpt: 'Virtual replicas of physical systems', link: '/blog/digital-twin-technology', category: 'Innovation' }
        ],
        bgClass: 'bg-gradient-to-br from-teal-900 to-slate-900'
      },
      {
        type: 'chat-services',
        title: 'Specialized AI Chat',
        items: [
          { title: 'Financial Analysis Chat', description: 'AI-powered financial insights', link: '/services/financial-analysis-chat', icon: '💰' },
          { title: 'Legal Tech Chat', description: 'Legal technology consultation', link: '/services/legal-tech-chat', icon: '⚖️' },
          { title: 'Healthcare AI Chat', description: 'Medical technology advice', link: '/services/healthcare-ai-chat', icon: '🏥' },
          { title: 'Education Tech Chat', description: 'Educational technology solutions', link: '/services/education-tech-chat', icon: '🎓' }
        ],
        bgClass: 'bg-gradient-to-br from-violet-900 to-slate-900'
      }
    ]

    // Generate 3-5 additional sections
    const numSections = Math.floor(Math.random() * 3) + 3
    for (let i = 0; i < numSections; i++) {
      const sectionType = sectionTypes[i % sectionTypes.length]
      additionalSections.push({
        id: nextSectionId + i,
        ...sectionType
      })
    }

    return additionalSections
  }

  // Load more sections when reaching the end
  const loadMoreSections = useCallback(async () => {
    if (isLoading) return

    setIsLoading(true)
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 800))
    
    const newSections = generateAdditionalSections()
    setDisplayedSections(prev => [...prev, ...newSections])
    setNextSectionId(prev => prev + newSections.length)
    
    setIsLoading(false)
  }, [isLoading, nextSectionId])

  // Intersection Observer for infinite scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = parseInt(entry.target.getAttribute('data-section-id') || '0')
            setVisibleSections(prev => new Set(Array.from(prev).concat([sectionId])))
          }
        })
      },
      { threshold: 0.1 }
    )

    observerRef.current = observer

    // Observe all sections
    const sectionElements = document.querySelectorAll('[data-section-id]')
    sectionElements.forEach((el) => observer.observe(el))

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [displayedSections])

  // Scroll handler for infinite scroll
  const handleScroll = useCallback(() => {
    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 1000) {
      loadMoreSections()
    }
  }, [loadMoreSections])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  const renderSection = (section: any) => {
    switch (section.type) {
      case 'hero':
        return (
          <div className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-pink-900/20"></div>
            <div className="absolute inset-0 opacity-30">
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                backgroundSize: '60px 60px'
              }}></div>
            </div>
            
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
              <div className="text-center">
                <div className="mb-8">
                  <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm font-medium mb-6">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    The First Free AI-Powered Marketplace
                  </div>
                </div>
                
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                  Zion
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400">
                    High-Tech Marketplace
                  </span>
                </h1>
                
                <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
                  {section.description}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
                  <Link href={section.ctaLink} className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-purple-500/25 transform hover:scale-105">
                    {section.cta}
                  </Link>
                  <Link href={section.secondaryCtaLink} className="border border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 backdrop-blur-sm">
                    {section.secondaryCta}
                  </Link>
                </div>
                
                {/* Stats */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2">500+</div>
                    <div className="text-gray-400">AI Talents</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2">1000+</div>
                    <div className="text-gray-400">IT Services</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2">200+</div>
                    <div className="text-gray-400">Equipment Items</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2">50K+</div>
                    <div className="text-gray-400">Users</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )

      case 'marketplace-overview':
        return (
          <div className="py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  {section.title}
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Explore our comprehensive marketplace with cutting-edge technology solutions
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {section.items.map((item: any, index: number) => (
                  <Link key={index} href={item.link} className="group">
                    <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-gradient-to-br hover:from-white/10 hover:to-white/20 transition-all duration-300 transform hover:scale-105">
                      <div className={`text-4xl mb-4 bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                        {item.icon}
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                      <p className="text-gray-300">{item.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )

      case 'featured-services':
        return (
          <div className="py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  {section.title}
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Professional IT services delivered by certified experts
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {section.items.map((item: any, index: number) => (
                  <Link key={index} href={item.link} className="group">
                    <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-gradient-to-br hover:from-white/10 hover:to-white/20 transition-all duration-300 transform hover:scale-105">
                      <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                      <p className="text-gray-300 mb-4">{item.description}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-purple-400 font-semibold">{item.price}</span>
                        <div className="flex items-center">
                          <span className="text-yellow-400">★</span>
                          <span className="text-white ml-1">{item.rating}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )

      case 'featured-talents':
        return (
          <div className="py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  {section.title}
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Connect with top AI experts and technology professionals
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {section.items.map((item: any, index: number) => (
                  <Link key={index} href={item.link} className="group">
                    <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-gradient-to-br hover:from-white/10 hover:to-white/20 transition-all duration-300 transform hover:scale-105">
                      <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
                        {item.name.charAt(0)}
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">{item.name}</h3>
                      <p className="text-purple-400 font-semibold mb-2">{item.specialization}</p>
                      <p className="text-gray-300 text-sm mb-3">{item.experience}</p>
                      <div className="flex items-center">
                        <span className="text-yellow-400">★</span>
                        <span className="text-white ml-1">{item.rating}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )

      case 'featured-equipment':
        return (
          <div className="py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  {section.title}
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  High-performance computing equipment and technology hardware
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {section.items.map((item: any, index: number) => (
                  <Link key={index} href={item.link} className="group">
                    <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-gradient-to-br hover:from-white/10 hover:to-white/20 transition-all duration-300 transform hover:scale-105">
                      <h3 className="text-xl font-bold text-white mb-3">{item.name}</h3>
                      <p className="text-gray-300 mb-4">{item.description}</p>
                      <div className="text-green-400 font-semibold">{item.price}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )

      case 'blog-highlights':
        return (
          <div className="py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  {section.title}
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Stay updated with the latest technology trends and insights
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {section.items.map((item: any, index: number) => (
                  <Link key={index} href={item.link} className="group">
                    <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-gradient-to-br hover:from-white/10 hover:to-white/20 transition-all duration-300 transform hover:scale-105">
                      <div className="text-xs text-purple-400 font-semibold mb-2">{item.category}</div>
                      <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
                      <p className="text-gray-300 text-sm">{item.excerpt}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )

      case 'chat-services':
        return (
          <div className="py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  {section.title}
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  AI-powered chat services for instant expert advice
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {section.items.map((item: any, index: number) => (
                  <Link key={index} href={item.link} className="group">
                    <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-gradient-to-br hover:from-white/10 hover:to-white/20 transition-all duration-300 transform hover:scale-105">
                      <div className="text-3xl mb-4">{item.icon}</div>
                      <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                      <p className="text-gray-300">{item.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )

      case 'company-info':
        return (
          <div className="py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  {section.title}
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Learn more about Zion and connect with our team
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {section.items.map((item: any, index: number) => (
                  <Link key={index} href={item.link} className="group">
                    <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-gradient-to-br hover:from-white/10 hover:to-white/20 transition-all duration-300 transform hover:scale-105">
                      <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                      <p className="text-gray-300">{item.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )

      case 'waitlist':
        return (
          <div className="py-24">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                {section.title}
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                {section.description}
              </p>
              
              <form onSubmit={handleWaitlistSubmit} className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="flex-1 px-6 py-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors"
                    required
                  />
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-purple-500/25 transform hover:scale-105"
                  >
                    Join Waitlist
                  </button>
                </div>
              </form>
              
              <p className="text-sm text-gray-400 mt-4">
                No spam, ever. Unsubscribe at any time.
              </p>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Head>
        <title>Zion - The First Free AI-Powered Marketplace</title>
        <meta name="description" content="Zion - The first free AI-powered marketplace for high-tech products, on-demand IT services, AI talents, innovation, and equipment." />
        <meta name="keywords" content="AI marketplace, IT services, AI talents, equipment, innovation, Zion" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Navigation */}
      <nav className="bg-black/20 backdrop-blur-md border-b border-white/10 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-bold text-white">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Zion</span>
                </h1>
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/marketplace" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Marketplace
              </Link>
              <Link href="/services" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Services
              </Link>
              <Link href="/talents" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Talents
              </Link>
              <Link href="/equipment" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Equipment
              </Link>
              <Link href="/products" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Products
              </Link>
              <Link href="/blog" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Blog
              </Link>
              <Link href="/about" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                About
              </Link>
              <Link href="/auth/login" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Login
              </Link>
              <Link href="/auth/signup" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 shadow-lg hover:shadow-purple-500/25">
                Join Zion Now
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-300 hover:text-white focus:outline-none focus:text-white"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-black/90 backdrop-blur-md border-t border-white/10">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <Link href="/marketplace" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                  Marketplace
                </Link>
                <Link href="/services" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                  Services
                </Link>
                <Link href="/talents" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                  Talents
                </Link>
                <Link href="/equipment" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                  Equipment
                </Link>
                <Link href="/products" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                  Products
                </Link>
                <Link href="/blog" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                  Blog
                </Link>
                <Link href="/about" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                  About
                </Link>
                <Link href="/auth/login" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                  Login
                </Link>
                <Link href="/auth/signup" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white block px-3 py-2 rounded-md text-base font-medium">
                  Join Zion Now
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      <main className="flex-1">
        {/* Infinite Scroll Sections */}
        {displayedSections.map((section) => (
          <section
            key={section.id}
            data-section-id={section.id}
            className={`${section.bgClass} transition-opacity duration-500 ${
              visibleSections.has(section.id) ? 'opacity-100' : 'opacity-50'
            }`}
          >
            {renderSection(section)}
          </section>
        ))}

        {/* Loading indicator */}
        {isLoading && (
          <div className="py-12 text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-purple-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Loading more content...
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-black/40 backdrop-blur-md border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Zion</span>
              </h3>
              <p className="text-gray-400">
                The first free AI-powered marketplace for high-tech products, on-demand IT services, AI talents, innovation, and equipment.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Marketplace</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
                <li><Link href="/talents" className="hover:text-white transition-colors">Talents</Link></li>
                <li><Link href="/equipment" className="hover:text-white transition-colors">Equipment</Link></li>
                <li><Link href="/products" className="hover:text-white transition-colors">Products</Link></li>
                <li><Link href="/marketplace" className="hover:text-white transition-colors">Marketplace</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
                <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                <li><Link href="/quote-request" className="hover:text-white transition-colors">Request Quote</Link></li>
                <li><Link href="/admin-dashboard" className="hover:text-white transition-colors">Admin</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/auth/login" className="hover:text-white transition-colors">Login</Link></li>
                <li><Link href="/auth/signup" className="hover:text-white transition-colors">Sign Up</Link></li>
                <li><Link href="/dashboard" className="hover:text-white transition-colors">Dashboard</Link></li>
                <li><Link href="/analytics" className="hover:text-white transition-colors">Analytics</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Zion. All rights reserved. | The First Free AI-Powered Marketplace</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home
