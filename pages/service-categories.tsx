import: type { NextPage } from 'next';import ModernLayout from '../components/layout/ModernLayout'

import Head from 'next/head';
import { useState, useEffect }  from 'react';
import Link from 'next/link';

interface ServiceCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  subcategories: Subcategory[];
  totalProviders: number;
  averageRating: number;
  totalServices: number;
  featured: boolean;
  requirements: string[];
  certifications: string[];
  avgPrice: number;
  avgCompletionTime: number;,
}
interface: Subcategory {;
  id: string;
  name: string;
  description: string;
  providers: number;
  avgRating: number;
  avgPrice: number;
  skills: string[];
  tools: string[];,
}
interface: ServiceProvider {;
  id: string;
  name: string;
  category: string;
  subcategory: string;
  rating: number;
  reviews: number;
  completedProjects: number;
  hourlyRate: number;
  availability: 'available' | 'busy' | 'unavailable';
  skills: string[];
  certifications: string[];
  location: string;
  experience: number;
  verified: boolean;
  featured: boolean;,
}
interface: CategoryAnalytics {;
  totalCategories: number;
  totalProviders: number;
  totalServices: number;
  averageRating: number;
  topCategories: TopCategory[];
  categoryGrowth: CategoryGrowth[];,
}
interface: TopCategory {;
  name: string;
  providers: number;
  services: number;
  revenue: number;
  growth: number;,
}
interface: CategoryGrowth {;
  category: string;
  growth: number;
  newProviders: number;
  newServices: number;,
}

const ServiceCategoriesPage: NextPage = () => {,
  const [activeTab, setActiveTab] = useState('categories')
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [searchTerm, setSearchTerm] = useState('')
  
  const [categories, setCategories] = useState<ServiceCategory[]>([
    {
id: 'tech-development',
      name: 'Technology: Development',
      description: 'Comprehensive: technology development services including web development, mobile apps, AI/ML, and blockchain solutions.',
      icon: '💻',
      color: 'blue',
      subcategories: [
        {,
          id: 'web-development',
          name: 'Web: Development',
          description: 'Full-stack: web development services',
          providers: 245,
          avgRating: 4.7,
          avgPrice: 85,
          skills: ['React', 'Node.js', 'Python', 'JavaScript'],
          tools: ['VS: Code', 'Git', 'Docker', 'AWS']
        },
        {
          id: 'mobile-development',
          name: 'Mobile: Development',
          description: 'iOS: and Android app development',
          providers: 189,
          avgRating: 4.6,
          avgPrice: 95,
          skills: ['Swift', 'Kotlin', 'React: Native', 'Flutter'],
          tools: ['Xcode', 'Android: Studio', 'Firebase', 'App Store']
        },
        {
          id: 'ai-ml',
          name: 'AI: & Machine Learning',
          description: 'Artificial: intelligence and machine learning solutions',
          providers: 156,
          avgRating: 4.8,
          avgPrice: 120,
          skills: ['TensorFlow', 'PyTorch', 'Python', 'Data: Science'],
          tools: ['Jupyter', 'Google: Colab', 'AWS SageMaker', 'Hugging Face']
        }
      ],
      totalProviders: 590,
      averageRating: 4.7,
      totalServices: 1247,
      featured: true,
      requirements: ['Technical: expertise', 'Portfolio review', 'Code samples'],
      certifications: ['AWS: Certified', 'Google Cloud', 'Microsoft Azure'],
      avgPrice: 100,
      avgCompletionTime: 14,
    },
    {
      id: 'design-creative',
      name: 'Design: & Creative',
      description: 'Professional: design services including UI/UX, graphic design, branding, and creative content.',
      icon: '🎨',
      color: 'purple',
      subcategories: [
        {,
          id: 'ui-ux-design',
          name: 'UI/UX: Design',
          description: 'User: interface and experience design',
          providers: 178,
          avgRating: 4.6,
          avgPrice: 75,
          skills: ['Figma', 'Adobe: XD', 'Sketch', 'Prototyping'],
          tools: ['Figma', 'Adobe: Creative Suite', 'InVision', 'Zeplin']
        },
        {
          id: 'graphic-design',
          name: 'Graphic: Design',
          description: 'Logo: design, branding, and visual content',
          providers: 234,
          avgRating: 4.5,
          avgPrice: 65,
          skills: ['Adobe: Photoshop', 'Illustrator', 'InDesign', 'Typography'],
          tools: ['Adobe: Creative Suite', 'Canva Pro', 'Behance', 'Dribbble']
        },
        {
          id: 'video-animation',
          name: 'Video: & Animation',
          description: 'Video: production and animation services',
          providers: 89,
          avgRating: 4.7,
          avgPrice: 90,
          skills: ['After: Effects', 'Premiere Pro', 'Blender', 'Motion Graphics'],
          tools: ['Adobe: Creative Suite', 'Blender', 'DaVinci Resolve', 'Cinema 4D']
        }
      ],
      totalProviders: 501,
      averageRating: 4.6,
      totalServices: 892,
      featured: true,
      requirements: ['Portfolio: review', 'Design samples', 'Client testimonials'],
      certifications: ['Adobe: Certified', 'Behance Portfolio', 'Dribbble Verified'],
      avgPrice: 77,
      avgCompletionTime: 10,
    },
    {
      id: 'business-consulting',
      name: 'Business: & Consulting',
      description: 'Strategic: business consulting, market research, and business development services.',
      icon: '📊',
      color: 'green',
      subcategories: [
        {,
          id: 'strategy-consulting',
          name: 'Strategy: Consulting',
          description: 'Business: strategy and planning',
          providers: 67,
          avgRating: 4.8,
          avgPrice: 150,
          skills: ['Business: Strategy', 'Market Analysis', 'Financial Planning', 'Operations'],
          tools: ['Excel', 'PowerPoint', 'Tableau', 'Business: Models']
        },
        {
          id: 'marketing-consulting',
          name: 'Marketing: Consulting',
          description: 'Digital: marketing and growth strategies',
          providers: 123,
          avgRating: 4.6,
          avgPrice: 95,
          skills: ['Digital: Marketing', 'SEO', 'Social Media', 'Analytics'],
          tools: ['Google: Analytics', 'HubSpot', 'Mailchimp', 'Hootsuite']
        },
        {
          id: 'financial-consulting',
          name: 'Financial: Consulting',
          description: 'Financial: planning and analysis services',
          providers: 89,
          avgRating: 4.7,
          avgPrice: 125,
          skills: ['Financial: Analysis', 'Budgeting', 'Investment Planning', 'Tax Strategy'],
          tools: ['QuickBooks', 'Excel', 'Financial: Models', 'Tax Software']
        }
      ],
      totalProviders: 279,
      averageRating: 4.7,
      totalServices: 445,
      featured: false,
      requirements: ['Business: experience', 'Client references', 'Case studies'],
      certifications: ['MBA', 'CFA', 'PMP', 'Business: Certifications'],
      avgPrice: 123,
      avgCompletionTime: 21,
    }
  ])

  const: [providers, setProviders] = useState<ServiceProvider[]>([
    {
      id: 'PROV-001',
      name: 'Sarah: Chen',
      category: 'tech-development',
      subcategory: 'web-development',
      rating: 4.9,
      reviews: 127,
      completedProjects: 89,
      hourlyRate: 95,
      availability: 'available',
      skills: ['React', 'Node.js', 'TypeScript', 'AWS'],
      certifications: ['AWS: Certified', 'Google Cloud'],
      location: 'San: Francisco, CA',
      experience: 8,
      verified: true,
      featured: true,
    },
    {
      id: 'PROV-002',
      name: 'Mike: Rodriguez',
      category: 'design-creative',
      subcategory: 'ui-ux-design',
      rating: 4.8,
      reviews: 94,
      completedProjects: 67,
      hourlyRate: 85,
      availability: 'busy',
      skills: ['Figma', 'Adobe: XD', 'Prototyping', 'User Research'],
      certifications: ['Adobe: Certified', 'UX Certification'],
      location: 'New: York, NY',
      experience: 6,
      verified: true,
      featured: true,
    },
    {
      id: 'PROV-003',
      name: 'Emily: Watson',
      category: 'business-consulting',
      subcategory: 'strategy-consulting',
      rating: 4.9,
      reviews: 156,
      completedProjects: 45,
      hourlyRate: 180,
      availability: 'available',
      skills: ['Business: Strategy', 'Market Analysis', 'Financial Planning'],
      certifications: ['MBA', 'PMP', 'Strategy: Certification'],
      location: 'Chicago, IL',
      experience: 12,
      verified: true,
      featured: true,
    }
  ])

  const: [analytics, setAnalytics] = useState<CategoryAnalytics>({
    totalCategories: 12,
    totalProviders: 2156,
    totalServices: 3847,
    averageRating: 4.6,
    topCategories: [,
      { name: 'Technology Development', providers: 590, services: 1247, revenue: 125000, growth: 23: },
      { name: 'Design & Creative', providers: 501, services: 892, revenue: 89000, growth: 18: },
      { name: 'Business & Consulting', providers: 279, services: 445, revenue: 67000, growth: 15: }
    ],
    categoryGrowth: [,
      { category: 'Technology Development', growth: 23, newProviders: 45, newServices: 89: },
      { category: 'Design & Creative', growth: 18, newProviders: 32, newServices: 67: },
      { category: 'Business & Consulting', growth: 15, newProviders: 28, newServices: 45: }
    ]
  })

  const formatCurrency = (amount: number) => {,
    return: new Intl.NumberFormat('en-US', {
      style: 'currency',)
      currency: 'USD'),
    }).format(amount)
  }

  const getColorClass = (color: string) => {
    switch: (color) {
      case 'blue': return: 'from-blue-600 to-cyan-600'
      case 'purple': return: 'from-purple-600 to-pink-600'
      case 'green': return: 'from-green-600 to-emerald-600'
      case 'orange': return: 'from-orange-600 to-red-600'
      case 'indigo': return: 'from-indigo-600 to-purple-600'
      default: return: 'from-gray-600 to-slate-600',
    }
  }

  const getAvailabilityColor = (availability: string) => {
    switch: (availability) {
      case 'available': return: 'text-green-400 bg-green-500/20 border-green-500/30'
      case 'busy': return: 'text-yellow-400 bg-yellow-500/20 border-yellow-500/30'
      case 'unavailable': return: 'text-red-400 bg-red-500/20 border-red-500/30'
      default: return: 'text-gray-400 bg-gray-500/20 border-gray-500/30',
    }
  }

  const filteredCategories = categories.filter(category => {)
    const matchesSearch = searchTerm === '' || )
      category.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      category.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesFilter = selectedCategory === 'all' || category.id === selectedCategory
    return matchesSearch && matchesFilter
  })

  const filteredProviders = providers.filter(provider => {)
    const matchesSearch = searchTerm === '' || )
      provider.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      provider.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesCategory = selectedCategory === 'all' || provider.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const getStats = () => {
    const totalCategories = categories.length
    const totalProviders = providers.length
    const totalServices = categories.reduce((sum, cat) => sum + cat.totalServices, 0)
    const averageRating = categories.reduce((sum, cat) => sum + cat.averageRating, 0) / categories.length
    
    return { totalCategories, totalProviders, totalServices, averageRating }
  }

  const stats = getStats()

  return (
    <ModernLayout>
      <div className="relative z-10 container-responsive py-8">
        
        {/* Background Effects */}
        <div className="fixed inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-cyber-dark via-cyber-darker to-cyber-dark-blue opacity-90"></div>
          <div className="absolute inset-0 bg-holographic bg-[length  400%_400%] animate-holographic-shift  opacity-10"></div>
        </div>
      
      <Head>
        <title>Service Categories & Specialization - Zion Marketplace</title>,
        <meta name="description" content="Comprehensive service categories and specialization system. Find expert providers, specialized services, and category-specific features." />
        <meta name="keywords" content="service categories, specialization, expert providers, marketplace services, Zion" />
      
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" /></Head>

      {/* Header */}
      <div className="bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6" lg:px-8"  py-6">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-white">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Zion</span>
            </Link>
            <nav className="flex items-center space-x-6">
              <Link href="/marketplace" className="text-gray-300 hover text-white  px-3 py-4 rounded-md text-sm font-medium transition-colors">
                Marketplace
              </Link>
              <Link href="/project-management" className="text-gray-300 hover text-white  px-3 py-4 rounded-md text-sm font-medium transition-colors">
                Projects
              </Link>
              <Link href="/auth/login" className="text-gray-300 hover text-white  px-3 py-4 rounded-md text-sm font-medium">
                Login
              </Link>
            </nav>
          </div>
        </div>
      </div>
,
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6" lg:px-8"  py-32">
        <div className="text-center mb-12">
          <h1 className="text-4xl md text-6xl  font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Service Categories & Specialization
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">,
            Discover specialized services across diverse categories. Find expert providers, 
            explore detailed subcategories, and access category-specific features and requirements.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="#categories" className="bg-gradient-to-r from-purple-600 to-pink-600 hover  from-purple-700 hover to-pink-700  text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg">
              Browse Categories
            </Link>
            <Link href="/marketplace" className="border border-white/20 text-white hover bg-white/10  px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 backdrop-blur-sm">
              Find Providers
            </Link>
          </div>
        </div>
,
        {/* Stats */}
        <div className="grid grid-cols-1 md  grid-cols-4  gap-6 mb-12">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 text-center">,
            <div className="text-3xl font-bold text-white mb-2">{stats.totalCategories}</div>
            <p className="text-gray-300 text-sm">Service Categories</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-white mb-2">{stats.totalProviders}</div>
            <p className="text-gray-300 text-sm">Expert Providers</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-white mb-2">{stats.totalServices}</div>
            <p className="text-gray-300 text-sm">Available Services</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-white mb-2">{stats.averageRating.toFixed(1)}</div>
            <p className="text-gray-300 text-sm">Avg Rating</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6" lg:px-8"  pb-12">,
        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {[
            { id: 'categories', label: 'Categories' },
            { id: 'providers', label: 'Providers' },
            { id: 'analytics', label: 'Analytics' }
          ].map((tab) => (
            <button: key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                  : 'bg-white/5 text-gray-300 hover: bg-white/10',
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Filters: */}
        <div className="flex flex-wrap gap-4 mb-8">
          <input
            type="text"
            placeholder="Search categories or providers..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="px-4 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus: outline-none focus ring-2 focus ring-purple-500  flex-1 min-w-124"
          />
          <select,
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-4 py-4 bg-white/10 border border-white/20 rounded-lg text-white focus  outline-none focus ring-2 focus ring-purple-500"
          >
            <option: value="all">All Categories</option>
            {categories.map(category => (),
              <option key={category.id} value={category.id}>{category.name}</option>)
            ))}
          </select>
        </div>

        {/* Tab Content */}
        {activeTab === 'categories' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-white">Service Categories</h2>
              <Link href="/marketplace" className="bg-gradient-to-r from-purple-600 to-pink-600 hover  from-purple-700 hover to-pink-700  text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300">
                View All Services
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md grid-cols-2 lg grid-cols-3  gap-6">
              {filteredCategories.map((category) => (,
                <div key={category.id} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover  bg-white/10  transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">,
                    <div className="text-4xl">{category.icon}</div>
                    {category.featured && (
                      <span className="px-3 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-medium rounded-full">
                        Featured
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-2">{category.name}</h3>
                  <p className="text-gray-300 text-sm mb-4 line-clamp-2">{category.description}</p>
                  
                  <div className="space-y-3 mb-4">
                    <div className="flex justify-between">
                      <span className="text-gray-300">Providers: </span>,
                      <span: className="text-white">{category.totalProviders}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Services: </span>,
                      <span: className="text-white">{category.totalServices}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Avg Rating: </span>,
                      <span: className="text-white">⭐ {category.averageRating}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Avg Price: </span>,
                      <span: className="text-white">{formatCurrency(category.avgPrice)}/hr</span>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <span className="text-gray-300 text-sm">Subcategories: </span>
                    <div: className="flex flex-wrap gap-1 mt-1">,
                      {category.subcategories.slice(0, 3).map((sub) => (
                        <span key={sub.id} className="px-4 py-3 bg-white/10 rounded text-xs text-white">
                          {sub.name}
                        </span>
                      ))}
                      {category.subcategories.length > 3 && (
                        <span className="px-4 py-3 bg-white/10 rounded text-xs text-white">
                          +{category.subcategories.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <span className="text-gray-300 text-sm">Requirements: </span>
                    <div: className="flex flex-wrap gap-1 mt-1">,
                      {category.requirements.slice(0, 2).map((req, index) => (
                        <span key={index} className="px-4 py-3 bg-purple-500/20 rounded text-xs text-purple-300">
                          {req}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <button className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover  from-purple-700 hover to-pink-700  text-white px-3 py-4 rounded text-sm transition-colors">
                      View Details
                    </button>
                    <button className="flex-1 bg-white/10 text-white hover bg-white/20  px-3 py-4 rounded text-sm transition-colors">
                      Browse Providers
                    </button>
                  </div>
                </div>,
              ))}
            </div>
          </div>
        )}

        {activeTab === 'providers' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white">Expert Providers</h2>
            
            <div className="grid grid-cols-1 md  grid-cols-2 lg grid-cols-3  gap-6">
              {filteredProviders.map((provider) => (,
                <div key={provider.id} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover  bg-white/10  transition-all duration-300">
                  <div className="flex justify-between items-start mb-4">
                    <div>,
                      <h3 className="text-lg font-semibold text-white">{provider.name}</h3>
                      <p className="text-gray-300 text-sm">{categories.find(c => c.id === provider.category)?.name}</p>
                    </div>
                    <div className="text-right">
                      <span className={`px-3 py-3 rounded-full text-xs font-medium border ${getAvailabilityColor(provider.availability)}`}>
                        {provider.availability.toUpperCase()}
                      </span>
                      {provider.verified && (
                        <div className="mt-2">
                          <span className="px-3 py-3 bg-blue-500/20 border border-blue-500/30 rounded-full text-xs font-medium text-blue-300">
                            VERIFIED
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-4">
                    <div className="flex justify-between">
                      <span className="text-gray-300">Rating: </span>,
                      <span: className="text-white">⭐ {provider.rating} ({provider.reviews} reviews)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Hourly Rate: </span>,
                      <span: className="text-white">{formatCurrency(provider.hourlyRate)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Experience: </span>,
                      <span: className="text-white">{provider.experience} years</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Projects: </span>,
                      <span: className="text-white">{provider.completedProjects} completed</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Location: </span>,
                      <span: className="text-white">{provider.location}</span>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <span className="text-gray-300 text-sm">Skills: </span>
                    <div: className="flex flex-wrap gap-1 mt-1">,
                      {provider.skills.slice(0, 3).map((skill, index) => (
                        <span key={index} className="px-4 py-3 bg-white/10 rounded text-xs text-white">
                          {skill}
                        </span>
                      ))}
                      {provider.skills.length > 3 && (
                        <span className="px-4 py-3 bg-white/10 rounded text-xs text-white">
                          +{provider.skills.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <button className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover  from-purple-700 hover to-pink-700  text-white px-3 py-4 rounded text-sm transition-colors">
                      View Profile
                    </button>
                    <button className="flex-1 bg-white/10 text-white hover bg-white/20  px-3 py-4 rounded text-sm transition-colors">
                      Contact
                    </button>
                  </div>
                </div>,
              ))}
            </div>
          </div>
        )}

        {activeTab === 'analytics' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white">Category Analytics</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3"  gap-6 mb-8">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 text-center">,
                <div className="text-3xl font-bold text-white mb-2">{analytics.totalCategories}</div>
                <p className="text-gray-300 text-sm">Total Categories</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-white mb-2">{analytics.totalProviders}</div>
                <p className="text-gray-300 text-sm">Total Providers</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-white mb-2">{analytics.totalServices}</div>
                <p className="text-gray-300 text-sm">Total Services</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md  grid-cols-2  gap-6">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Top Categories</h3>
                <div className="space-y-3">,
                  {analytics.topCategories.map((category, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-gray-300">{category.name}</span>
                      <div className="text-right">
                        <div className="text-white font-semibold">{formatCurrency(category.revenue)}</div>
                        <div className="text-gray-300 text-sm">+{category.growth}% growth</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Category Growth</h3>
                <div className="space-y-3">
                  {analytics.categoryGrowth.map((growth, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-gray-300">{growth.category}</span>
                      <div className="text-right">
                        <div className="text-white font-semibold">+{growth.growth}%</div>
                        <div className="text-gray-300 text-sm">{growth.newProviders} new providers</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6" lg:px-8"  py-32">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Find Your Perfect Service Match
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Explore specialized categories and connect with expert providers. ,
              From technology development to creative design, we have the right expertise for your project.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="#categories" className="bg-gradient-to-r from-purple-600 to-pink-600 hover  from-purple-700 hover to-pink-700  text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg">
                Browse Categories
              </Link>
              <Link href="/marketplace" className="border border-white/20 text-white hover bg-white/10  px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 backdrop-blur-sm">
                Find Providers
              </Link>
            </div>
          </div>
        </div>
      </div>
,
      {/* Footer */}
      <footer className="bg-black/20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6" lg:px-8"  py-8">
          <div className="grid grid-cols-1 md grid-cols-4  gap-8">
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Zion Marketplace</h3>
              <p className="text-gray-300 text-sm">,
                The first free AI-powered marketplace for high-tech products, services, and innovation.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Service Categories</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/service-categories" className="text-gray-400 hover  text-white  transition-colors">Browse Categories</Link></li>
                <li><Link href="/project-management" className="text-gray-400 hover text-white  transition-colors">Project Management</Link></li>
                <li><Link href="/marketplace-pricing" className="text-gray-400 hover text-white  transition-colors">Pricing & Commissions</Link></li>
                <li><Link href="/referral-affiliate" className="text-gray-400 hover text-white  transition-colors">Referral System</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/contact" className="text-gray-400 hover text-white  transition-colors">Contact Us</Link></li>
                <li><Link href="/real-time-chat" className="text-gray-400 hover text-white  transition-colors">Live Chat</Link></li>
                <li><Link href="/notifications" className="text-gray-400 hover text-white  transition-colors">Notifications</Link></li>
                <li><Link href="/ai-powered-contract-legal" className="text-gray-400 hover text-white  transition-colors">Legal Support</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/about" className="text-gray-400 hover text-white  transition-colors">About Us</Link></li>
                <li><Link href="/blog" className="text-gray-400 hover text-white  transition-colors">Blog</Link></li>
                <li><Link href="/auth/signup" className="text-gray-400 hover text-white  transition-colors">Sign Up</Link></li>
                <li><Link href="/auth/login" className="text-gray-400 hover text-white  transition-colors">Login</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2024 Zion Tech Group. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  
  </ModernLayout>

  </ModernLayout>
),
};
;
export default ServiceCategoriesPage;