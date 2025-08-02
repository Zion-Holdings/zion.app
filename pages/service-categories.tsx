import type { NextPage } from 'next'
import Head from 'next/head'
import { useState, useEffect, useMemo } from 'react'
import Link from 'next/link'

interface ServiceCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  subcategories: Subcategory[];
  serviceCount: number;
  averageRating: number;
  averagePrice: number;
  trending: boolean;
  featured: boolean;
}

interface Subcategory {
  id: string;
  name: string;
  description: string;
  serviceCount: number;
  averageRating: number;
  averagePrice: number;
  skills: string[];
  popularServices: PopularService[];
}

interface PopularService {
  id: string;
  name: string;
  provider: string;
  rating: number;
  price: number;
  currency: string;
  description: string;
}

interface CategoryStats {
  totalServices: number;
  totalProviders: number;
  averageRating: number;
  totalRevenue: number;
  growthRate: number;
}

const ServiceCategoriesPage: NextPage = () => {
  const [categories, setCategories] = useState<ServiceCategory[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState<'popular' | 'rating' | 'price' | 'recent'>('popular');
  const [filterTrending, setFilterTrending] = useState(false);
  const [filterFeatured, setFilterFeatured] = useState(false);
  const [categoryStats, setCategoryStats] = useState<CategoryStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading service categories data
    setTimeout(() => {
      const mockCategories: ServiceCategory[] = [
        {
          id: 'ai-development',
          name: 'AI Development',
          description: 'Artificial Intelligence and Machine Learning services for intelligent applications and automation.',
          icon: '🤖',
          color: 'from-purple-500 to-pink-500',
          serviceCount: 245,
          averageRating: 4.8,
          averagePrice: 150,
          trending: true,
          featured: true,
          subcategories: [
            {
              id: 'machine-learning',
              name: 'Machine Learning',
              description: 'Custom ML models and algorithms for data analysis and prediction.',
              serviceCount: 89,
              averageRating: 4.9,
              averagePrice: 180,
              skills: ['Python', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'Pandas'],
              popularServices: [
                {
                  id: '1',
                  name: 'Custom ML Model Development',
                  provider: 'Dr. Sarah Chen',
                  rating: 4.9,
                  price: 200,
                  currency: 'USD',
                  description: 'End-to-end machine learning model development and deployment.'
                },
                {
                  id: '2',
                  name: 'Predictive Analytics',
                  provider: 'AI Solutions Pro',
                  rating: 4.8,
                  price: 150,
                  currency: 'USD',
                  description: 'Advanced predictive analytics and forecasting solutions.'
                }
              ]
            },
            {
              id: 'computer-vision',
              name: 'Computer Vision',
              description: 'Image and video processing with AI-powered recognition systems.',
              serviceCount: 67,
              averageRating: 4.7,
              averagePrice: 160,
              skills: ['OpenCV', 'TensorFlow', 'PyTorch', 'Computer Vision', 'Image Processing'],
              popularServices: [
                {
                  id: '3',
                  name: 'Object Detection System',
                  provider: 'VisionTech Labs',
                  rating: 4.8,
                  price: 175,
                  currency: 'USD',
                  description: 'Real-time object detection and recognition systems.'
                }
              ]
            },
            {
              id: 'natural-language-processing',
              name: 'Natural Language Processing',
              description: 'Text analysis, language models, and conversational AI systems.',
              serviceCount: 54,
              averageRating: 4.8,
              averagePrice: 140,
              skills: ['NLP', 'BERT', 'GPT', 'Transformers', 'Text Analysis'],
              popularServices: [
                {
                  id: '4',
                  name: 'Chatbot Development',
                  provider: 'NLP Experts',
                  rating: 4.7,
                  price: 130,
                  currency: 'USD',
                  description: 'Intelligent chatbot and conversational AI systems.'
                }
              ]
            },
            {
              id: 'deep-learning',
              name: 'Deep Learning',
              description: 'Neural networks and deep learning architectures for complex AI tasks.',
              serviceCount: 78,
              averageRating: 4.9,
              averagePrice: 190,
              skills: ['Neural Networks', 'Deep Learning', 'TensorFlow', 'PyTorch', 'GPU Computing'],
              popularServices: [
                {
                  id: '5',
                  name: 'Neural Network Architecture',
                  provider: 'DeepMind Solutions',
                  rating: 4.9,
                  price: 200,
                  currency: 'USD',
                  description: 'Custom neural network architecture design and implementation.'
                }
              ]
            }
          ]
        },
        {
          id: 'web-development',
          name: 'Web Development',
          description: 'Full-stack web development services for modern, scalable applications.',
          icon: '🌐',
          color: 'from-blue-500 to-cyan-500',
          serviceCount: 456,
          averageRating: 4.6,
          averagePrice: 120,
          trending: false,
          featured: true,
          subcategories: [
            {
              id: 'frontend-development',
              name: 'Frontend Development',
              description: 'Modern user interfaces and interactive web applications.',
              serviceCount: 156,
              averageRating: 4.7,
              averagePrice: 110,
              skills: ['React', 'Vue.js', 'Angular', 'JavaScript', 'TypeScript'],
              popularServices: [
                {
                  id: '6',
                  name: 'React Application Development',
                  provider: 'Frontend Masters',
                  rating: 4.8,
                  price: 120,
                  currency: 'USD',
                  description: 'Modern React applications with TypeScript and best practices.'
                }
              ]
            },
            {
              id: 'backend-development',
              name: 'Backend Development',
              description: 'Server-side development and API creation for web applications.',
              serviceCount: 134,
              averageRating: 4.6,
              averagePrice: 130,
              skills: ['Node.js', 'Python', 'Java', 'PHP', 'Databases'],
              popularServices: [
                {
                  id: '7',
                  name: 'REST API Development',
                  provider: 'Backend Pro',
                  rating: 4.7,
                  price: 140,
                  currency: 'USD',
                  description: 'Scalable REST APIs with authentication and documentation.'
                }
              ]
            },
            {
              id: 'full-stack-development',
              name: 'Full-Stack Development',
              description: 'Complete web application development from frontend to backend.',
              serviceCount: 98,
              averageRating: 4.8,
              averagePrice: 150,
              skills: ['Full-Stack', 'React', 'Node.js', 'Databases', 'DevOps'],
              popularServices: [
                {
                  id: '8',
                  name: 'Full-Stack Web App',
                  provider: 'FullStack Solutions',
                  rating: 4.8,
                  price: 160,
                  currency: 'USD',
                  description: 'Complete web applications with modern architecture.'
                }
              ]
            },
            {
              id: 'e-commerce',
              name: 'E-commerce Development',
              description: 'Online store development and e-commerce platform solutions.',
              serviceCount: 68,
              averageRating: 4.5,
              averagePrice: 140,
              skills: ['E-commerce', 'Payment Integration', 'Inventory Management', 'Shopping Cart'],
              popularServices: [
                {
                  id: '9',
                  name: 'E-commerce Platform',
                  provider: 'E-commerce Experts',
                  rating: 4.6,
                  price: 150,
                  currency: 'USD',
                  description: 'Complete e-commerce platforms with payment processing.'
                }
              ]
            }
          ]
        },
        {
          id: 'mobile-development',
          name: 'Mobile Development',
          description: 'Native and cross-platform mobile application development services.',
          icon: '📱',
          color: 'from-green-500 to-emerald-500',
          serviceCount: 234,
          averageRating: 4.7,
          averagePrice: 130,
          trending: true,
          featured: false,
          subcategories: [
            {
              id: 'ios-development',
              name: 'iOS Development',
              description: 'Native iPhone and iPad application development.',
              serviceCount: 89,
              averageRating: 4.8,
              averagePrice: 140,
              skills: ['Swift', 'iOS', 'Xcode', 'Core Data', 'App Store'],
              popularServices: [
                {
                  id: '10',
                  name: 'iOS App Development',
                  provider: 'iOS Masters',
                  rating: 4.8,
                  price: 150,
                  currency: 'USD',
                  description: 'Native iOS applications with modern Swift and SwiftUI.'
                }
              ]
            },
            {
              id: 'android-development',
              name: 'Android Development',
              description: 'Native Android application development.',
              serviceCount: 76,
              averageRating: 4.6,
              averagePrice: 130,
              skills: ['Kotlin', 'Android', 'Android Studio', 'Jetpack', 'Google Play'],
              popularServices: [
                {
                  id: '11',
                  name: 'Android App Development',
                  provider: 'Android Pro',
                  rating: 4.7,
                  price: 140,
                  currency: 'USD',
                  description: 'Native Android applications with Kotlin and Material Design.'
                }
              ]
            },
            {
              id: 'cross-platform',
              name: 'Cross-Platform Development',
              description: 'Multi-platform mobile applications using React Native and Flutter.',
              serviceCount: 69,
              averageRating: 4.7,
              averagePrice: 120,
              skills: ['React Native', 'Flutter', 'Cross-Platform', 'Mobile UI/UX'],
              popularServices: [
                {
                  id: '12',
                  name: 'Cross-Platform App',
                  provider: 'Mobile Solutions',
                  rating: 4.7,
                  price: 130,
                  currency: 'USD',
                  description: 'Cross-platform mobile applications for iOS and Android.'
                }
              ]
            }
          ]
        },
        {
          id: 'cloud-services',
          name: 'Cloud Services',
          description: 'Cloud infrastructure, DevOps, and cloud-native application development.',
          icon: '☁️',
          color: 'from-orange-500 to-red-500',
          serviceCount: 189,
          averageRating: 4.8,
          averagePrice: 160,
          trending: true,
          featured: true,
          subcategories: [
            {
              id: 'aws-services',
              name: 'AWS Services',
              description: 'Amazon Web Services infrastructure and application development.',
              serviceCount: 67,
              averageRating: 4.9,
              averagePrice: 170,
              skills: ['AWS', 'EC2', 'S3', 'Lambda', 'CloudFormation'],
              popularServices: [
                {
                  id: '13',
                  name: 'AWS Infrastructure',
                  provider: 'Cloud Architects',
                  rating: 4.9,
                  price: 180,
                  currency: 'USD',
                  description: 'Complete AWS infrastructure setup and optimization.'
                }
              ]
            },
            {
              id: 'azure-services',
              name: 'Azure Services',
              description: 'Microsoft Azure cloud platform and services.',
              serviceCount: 45,
              averageRating: 4.7,
              averagePrice: 160,
              skills: ['Azure', 'Azure DevOps', 'Azure Functions', 'Cosmos DB'],
              popularServices: [
                {
                  id: '14',
                  name: 'Azure Migration',
                  provider: 'Azure Experts',
                  rating: 4.8,
                  price: 170,
                  currency: 'USD',
                  description: 'Enterprise migration to Microsoft Azure platform.'
                }
              ]
            },
            {
              id: 'devops',
              name: 'DevOps',
              description: 'DevOps practices, CI/CD pipelines, and infrastructure automation.',
              serviceCount: 77,
              averageRating: 4.8,
              averagePrice: 150,
              skills: ['Docker', 'Kubernetes', 'Jenkins', 'Terraform', 'CI/CD'],
              popularServices: [
                {
                  id: '15',
                  name: 'DevOps Automation',
                  provider: 'DevOps Pro',
                  rating: 4.8,
                  price: 160,
                  currency: 'USD',
                  description: 'Complete DevOps automation and CI/CD pipeline setup.'
                }
              ]
            }
          ]
        },
        {
          id: 'blockchain',
          name: 'Blockchain',
          description: 'Blockchain development, smart contracts, and cryptocurrency solutions.',
          icon: '⛓️',
          color: 'from-yellow-500 to-orange-500',
          serviceCount: 123,
          averageRating: 4.7,
          averagePrice: 180,
          trending: false,
          featured: false,
          subcategories: [
            {
              id: 'smart-contracts',
              name: 'Smart Contracts',
              description: 'Ethereum smart contract development and DeFi protocols.',
              serviceCount: 56,
              averageRating: 4.8,
              averagePrice: 190,
              skills: ['Solidity', 'Ethereum', 'Smart Contracts', 'DeFi', 'Web3.js'],
              popularServices: [
                {
                  id: '16',
                  name: 'Smart Contract Development',
                  provider: 'Blockchain Labs',
                  rating: 4.8,
                  price: 200,
                  currency: 'USD',
                  description: 'Secure smart contract development and auditing.'
                }
              ]
            },
            {
              id: 'defi-protocols',
              name: 'DeFi Protocols',
              description: 'Decentralized finance protocol development and integration.',
              serviceCount: 34,
              averageRating: 4.9,
              averagePrice: 220,
              skills: ['DeFi', 'Yield Farming', 'Liquidity Pools', 'AMM', 'Lending'],
              popularServices: [
                {
                  id: '17',
                  name: 'DeFi Protocol Development',
                  provider: 'DeFi Masters',
                  rating: 4.9,
                  price: 230,
                  currency: 'USD',
                  description: 'Complete DeFi protocol development and deployment.'
                }
              ]
            },
            {
              id: 'nft-development',
              name: 'NFT Development',
              description: 'Non-fungible token development and marketplace creation.',
              serviceCount: 33,
              averageRating: 4.6,
              averagePrice: 160,
              skills: ['NFTs', 'ERC-721', 'ERC-1155', 'IPFS', 'Marketplace'],
              popularServices: [
                {
                  id: '18',
                  name: 'NFT Marketplace',
                  provider: 'NFT Solutions',
                  rating: 4.7,
                  price: 170,
                  currency: 'USD',
                  description: 'Complete NFT marketplace development and deployment.'
                }
              ]
            }
          ]
        },
        {
          id: 'data-science',
          name: 'Data Science',
          description: 'Data analysis, business intelligence, and predictive analytics services.',
          icon: '📊',
          color: 'from-indigo-500 to-purple-500',
          serviceCount: 167,
          averageRating: 4.6,
          averagePrice: 140,
          trending: false,
          featured: false,
          subcategories: [
            {
              id: 'data-analysis',
              name: 'Data Analysis',
              description: 'Statistical analysis and data insights for business decisions.',
              serviceCount: 78,
              averageRating: 4.7,
              averagePrice: 130,
              skills: ['Python', 'R', 'SQL', 'Statistics', 'Data Visualization'],
              popularServices: [
                {
                  id: '19',
                  name: 'Business Intelligence',
                  provider: 'Data Analytics Pro',
                  rating: 4.7,
                  price: 140,
                  currency: 'USD',
                  description: 'Comprehensive business intelligence and analytics solutions.'
                }
              ]
            },
            {
              id: 'predictive-analytics',
              name: 'Predictive Analytics',
              description: 'Machine learning models for forecasting and prediction.',
              serviceCount: 45,
              averageRating: 4.8,
              averagePrice: 160,
              skills: ['Machine Learning', 'Predictive Modeling', 'Forecasting', 'Time Series'],
              popularServices: [
                {
                  id: '20',
                  name: 'Predictive Modeling',
                  provider: 'Analytics Experts',
                  rating: 4.8,
                  price: 170,
                  currency: 'USD',
                  description: 'Advanced predictive analytics and forecasting models.'
                }
              ]
            },
            {
              id: 'data-visualization',
              name: 'Data Visualization',
              description: 'Interactive dashboards and data visualization solutions.',
              serviceCount: 44,
              averageRating: 4.5,
              averagePrice: 120,
              skills: ['Tableau', 'Power BI', 'D3.js', 'Data Visualization', 'Dashboards'],
              popularServices: [
                {
                  id: '21',
                  name: 'Interactive Dashboards',
                  provider: 'Visualization Pro',
                  rating: 4.6,
                  price: 130,
                  currency: 'USD',
                  description: 'Interactive data visualization and dashboard development.'
                }
              ]
            }
          ]
        }
      ];

      const mockStats: CategoryStats = {
        totalServices: 1414,
        totalProviders: 567,
        averageRating: 4.7,
        totalRevenue: 2847500,
        growthRate: 15.4
      };

      setCategories(mockCategories);
      setCategoryStats(mockStats);
      setLoading(false);
    }, 1000);
  }, []);

  const filteredCategories = useMemo(() => {
    let filtered = categories.filter(category => {
      // Search term filter
      if (searchTerm && !category.name.toLowerCase().includes(searchTerm.toLowerCase()) && 
          !category.description.toLowerCase().includes(searchTerm.toLowerCase())) {
        return false;
      }
      
      // Trending filter
      if (filterTrending && !category.trending) return false;
      
      // Featured filter
      if (filterFeatured && !category.featured) return false;
      
      return true;
    });

    // Sort categories
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'rating':
          return b.averageRating - a.averageRating;
        case 'price':
          return b.averagePrice - a.averagePrice;
        case 'recent':
          return b.serviceCount - a.serviceCount;
        case 'popular':
        default:
          // Popular based on service count and rating
          const aScore = a.serviceCount * a.averageRating;
          const bScore = b.serviceCount * b.averageRating;
          return bScore - aScore;
      }
    });

    return filtered;
  }, [categories, searchTerm, filterTrending, filterFeatured, sortBy]);

  const selectedCategoryData = useMemo(() => {
    if (selectedCategory === 'all') return null;
    return categories.find(cat => cat.id === selectedCategory);
  }, [categories, selectedCategory]);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            className={`w-4 h-4 ${star <= rating ? 'text-yellow-400' : 'text-gray-300'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-300 shadow-lg">
            <svg className="animate-spin -ml-1 mr-3 h-6 w-6 text-purple-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <span className="text-lg font-medium">Loading Service Categories...</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Head>
        <title>Service Categories - Zion</title>
        <meta name="description" content="Browse professional service categories in AI, web development, mobile apps, cloud services, blockchain, and data science" />
        <meta name="keywords" content="service categories, AI development, web development, mobile development, cloud services, blockchain, data science, Zion" />
        <link rel="icon" href="/favicon.ico" />
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
              <Link href="/quote-requests" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Quotes
              </Link>
              <Link href="/talent-directory" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Talents
              </Link>
              <Link href="/service-marketplace" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Services
              </Link>
              <Link href="/auth/login" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Login
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Service Categories
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore professional service categories and discover expert providers 
            in AI development, web development, mobile apps, cloud services, blockchain, and data science.
          </p>
        </div>

        {/* Stats Overview */}
        {categoryStats && (
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-8">
            <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-sm border border-green-500/30 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-white mb-2">{categoryStats.totalServices.toLocaleString()}</div>
              <p className="text-green-300 text-sm">Total Services</p>
            </div>
            <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-sm border border-blue-500/30 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-white mb-2">{categoryStats.totalProviders.toLocaleString()}</div>
              <p className="text-blue-300 text-sm">Total Providers</p>
            </div>
            <div className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 backdrop-blur-sm border border-yellow-500/30 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-white mb-2">{categoryStats.averageRating}</div>
              <p className="text-yellow-300 text-sm">Avg Rating</p>
            </div>
            <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-500/30 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-white mb-2">{formatCurrency(categoryStats.totalRevenue)}</div>
              <p className="text-purple-300 text-sm">Total Revenue</p>
            </div>
            <div className="bg-gradient-to-br from-red-500/20 to-pink-500/20 backdrop-blur-sm border border-red-500/30 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-white mb-2">{categoryStats.growthRate}%</div>
              <p className="text-red-300 text-sm">Growth Rate</p>
            </div>
          </div>
        )}

        {/* Search and Filters */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
            <div className="lg:col-span-2">
              <input
                type="text"
                placeholder="Search service categories..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors"
              />
            </div>
            
            <div>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors"
              >
                <option value="popular">Sort by Popular</option>
                <option value="rating">Sort by Rating</option>
                <option value="price">Sort by Price</option>
                <option value="recent">Sort by Recent</option>
              </select>
            </div>
            
            <div className="flex space-x-4">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={filterTrending}
                  onChange={(e) => setFilterTrending(e.target.checked)}
                  className="rounded border-white/20 bg-white/10 text-purple-500 focus:ring-purple-500"
                />
                <span className="text-sm text-gray-300">Trending</span>
              </label>
              
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={filterFeatured}
                  onChange={(e) => setFilterFeatured(e.target.checked)}
                  className="rounded border-white/20 bg-white/10 text-purple-500 focus:ring-purple-500"
                />
                <span className="text-sm text-gray-300">Featured</span>
              </label>
            </div>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => (
            <div key={category.id} className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-gradient-to-br hover:from-white/10 hover:to-white/20 transition-all duration-300 transform hover:scale-105">
              {/* Category Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="text-3xl">{category.icon}</div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{category.name}</h3>
                    <div className="flex items-center space-x-2">
                      {renderStars(category.averageRating)}
                      <span className="text-sm text-gray-400">({category.averageRating})</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-end space-y-2">
                  {category.trending && (
                    <span className="text-xs bg-orange-500/20 text-orange-300 px-2 py-1 rounded border border-orange-500/30">
                      Trending
                    </span>
                  )}
                  {category.featured && (
                    <span className="text-xs bg-yellow-500/20 text-yellow-300 px-2 py-1 rounded border border-yellow-500/30">
                      Featured
                    </span>
                  )}
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-300 text-sm mb-4">
                {category.description}
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-4 text-center">
                <div>
                  <p className="text-sm text-gray-400">Services</p>
                  <p className="text-lg font-semibold text-blue-400">{category.serviceCount}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Avg Price</p>
                  <p className="text-lg font-semibold text-green-400">${category.averagePrice}/hr</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Subcategories</p>
                  <p className="text-lg font-semibold text-purple-400">{category.subcategories.length}</p>
                </div>
              </div>

              {/* Popular Subcategories */}
              <div className="mb-4">
                <p className="text-sm text-gray-400 mb-2">Popular Subcategories</p>
                <div className="space-y-2">
                  {category.subcategories.slice(0, 3).map((sub) => (
                    <div key={sub.id} className="flex items-center justify-between">
                      <span className="text-sm text-white">{sub.name}</span>
                      <span className="text-xs text-gray-400">{sub.serviceCount} services</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-3">
                <button 
                  onClick={() => setSelectedCategory(category.id)}
                  className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 shadow-lg hover:shadow-purple-500/25 transform hover:scale-105"
                >
                  Explore Category
                </button>
                <Link href={`/service-marketplace?category=${category.id}`} className="border border-white/20 text-white hover:bg-white/10 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 backdrop-blur-sm">
                  Browse Services
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-xl p-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Find Your Perfect Service
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Browse through our comprehensive service categories and connect with 
              verified professionals for your next project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/service-marketplace" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-purple-500/25 transform hover:scale-105">
                Browse Services
              </Link>
              <Link href="/talent-directory" className="border border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 backdrop-blur-sm">
                Browse Talents
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServiceCategoriesPage 