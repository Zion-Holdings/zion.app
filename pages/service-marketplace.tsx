import type { NextPage } from 'next';
import Head from 'next/head';
import { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface Service {
  id: string;
  title: string;
  description: string;
  category: string;
  subcategory: string;
  provider: string;
  providerAvatar: string;
  providerRating: number;
  providerReviews: number;
  price: number;
  priceType: 'hourly' | 'fixed' | 'project';
  duration: string;
  skills: string[];
  tags: string[];
  location: string;
  availability: 'available' | 'busy' | 'unavailable';
  featured: boolean;
  verified: boolean;
  portfolio: PortfolioItem[];
  reviews: Review[];
  createdAt: Date;
  updatedAt: Date;
}

interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link?: string;
}

interface Review {
  id: string;
  reviewer: string;
  rating: number;
  comment: string;
  date: Date;
}

interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  subcategories: string[];
  serviceCount: number;
}

const ServiceMarketplacePage: NextPage = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);
  const [sortBy, setSortBy] = useState<'relevance' | 'price' | 'rating' | 'recent'>('relevance');
  const [filterVerified, setFilterVerified] = useState(false);
  const [filterFeatured, setFilterFeatured] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading service marketplace data
    setTimeout(() => {
      const mockCategories: Category[] = [
        {
          id: 'ai-development',
          name: 'AI Development',
          description: 'Artificial Intelligence and Machine Learning services',
          icon: '🤖',
          color: 'from-purple-500 to-pink-500',
          subcategories: ['Machine Learning', 'Deep Learning', 'Computer Vision', 'NLP', 'AI Consulting'],
          serviceCount: 45
        },
        {
          id: 'web-development',
          name: 'Web Development',
          description: 'Full-stack web development and frontend services',
          icon: '🌐',
          color: 'from-blue-500 to-cyan-500',
          subcategories: ['Frontend', 'Backend', 'Full-Stack', 'E-commerce', 'CMS'],
          serviceCount: 78
        },
        {
          id: 'mobile-development',
          name: 'Mobile Development',
          description: 'iOS and Android mobile application development',
          icon: '📱',
          color: 'from-green-500 to-emerald-500',
          subcategories: ['iOS', 'Android', 'React Native', 'Flutter', 'Cross-Platform'],
          serviceCount: 52
        },
        {
          id: 'cloud-services',
          name: 'Cloud Services',
          description: 'Cloud infrastructure and DevOps services',
          icon: '☁️',
          color: 'from-orange-500 to-red-500',
          subcategories: ['AWS', 'Azure', 'Google Cloud', 'DevOps', 'Infrastructure'],
          serviceCount: 34
        },
        {
          id: 'blockchain',
          name: 'Blockchain',
          description: 'Blockchain development and cryptocurrency services',
          icon: '⛓️',
          color: 'from-yellow-500 to-orange-500',
          subcategories: ['Smart Contracts', 'DeFi', 'NFTs', 'Cryptocurrency', 'DApps'],
          serviceCount: 28
        },
        {
          id: 'data-science',
          name: 'Data Science',
          description: 'Data analysis, visualization, and business intelligence',
          icon: '📊',
          color: 'from-indigo-500 to-purple-500',
          subcategories: ['Data Analysis', 'Business Intelligence', 'Data Visualization', 'Predictive Analytics', 'Big Data'],
          serviceCount: 41
        }
      ];

      const mockServices: Service[] = [
        {
          id: '1',
          title: 'AI Model Development & Training',
          description: 'Custom AI model development and machine learning implementation for enterprise applications. Specialized in computer vision, natural language processing, and predictive analytics.',
          category: 'AI Development',
          subcategory: 'Machine Learning',
          provider: 'Dr. Sarah Chen',
          providerAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
          providerRating: 4.9,
          providerReviews: 127,
          price: 150,
          priceType: 'hourly',
          duration: '2-4 weeks',
          skills: ['Python', 'TensorFlow', 'PyTorch', 'Computer Vision', 'NLP'],
          tags: ['AI', 'Machine Learning', 'Deep Learning', 'Computer Vision'],
          location: 'San Francisco, CA',
          availability: 'available',
          featured: true,
          verified: true,
          portfolio: [
            {
              id: '1',
              title: 'Medical Diagnosis AI System',
              description: 'Developed a computer vision system for early detection of medical conditions.',
              image: 'https://via.placeholder.com/300x200/4F46E5/FFFFFF?text=Medical+AI',
              technologies: ['Python', 'TensorFlow', 'OpenCV', 'Docker']
            }
          ],
          reviews: [
            {
              id: '1',
              reviewer: 'John Smith',
              rating: 5,
              comment: 'Exceptional AI development service. Sarah delivered exactly what we needed.',
              date: new Date('2024-01-15')
            }
          ],
          createdAt: new Date('2023-12-01'),
          updatedAt: new Date('2024-01-20')
        },
        {
          id: '2',
          title: 'Full-Stack Web Application',
          description: 'Complete web application development with modern technologies. React frontend, Node.js backend, and cloud deployment.',
          category: 'Web Development',
          subcategory: 'Full-Stack',
          provider: 'Alex Rodriguez',
          providerAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alex',
          providerRating: 4.8,
          providerReviews: 89,
          price: 120,
          priceType: 'hourly',
          duration: '4-6 weeks',
          skills: ['React', 'Node.js', 'TypeScript', 'MongoDB', 'AWS'],
          tags: ['Web Development', 'React', 'Node.js', 'Full-Stack'],
          location: 'Miami, FL',
          availability: 'available',
          featured: false,
          verified: true,
          portfolio: [
            {
              id: '2',
              title: 'E-commerce Platform',
              description: 'Built a complete e-commerce platform with payment integration.',
              image: 'https://via.placeholder.com/300x200/3B82F6/FFFFFF?text=E-commerce',
              technologies: ['React', 'Node.js', 'Stripe', 'MongoDB']
            }
          ],
          reviews: [
            {
              id: '2',
              reviewer: 'Emma Wilson',
              rating: 5,
              comment: 'Great communication and delivered on time. Highly recommended!',
              date: new Date('2024-01-10')
            }
          ],
          createdAt: new Date('2023-11-15'),
          updatedAt: new Date('2024-01-18')
        },
        {
          id: '3',
          title: 'iOS Mobile App Development',
          description: 'Native iOS application development with Swift and modern iOS frameworks. App Store optimization and deployment.',
          category: 'Mobile Development',
          subcategory: 'iOS',
          provider: 'Emma Thompson',
          providerAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emma',
          providerRating: 4.7,
          providerReviews: 156,
          price: 100,
          priceType: 'hourly',
          duration: '6-8 weeks',
          skills: ['Swift', 'iOS', 'Xcode', 'Core Data', 'App Store'],
          tags: ['Mobile Development', 'iOS', 'Swift', 'App Store'],
          location: 'Denver, CO',
          availability: 'busy',
          featured: true,
          verified: true,
          portfolio: [
            {
              id: '3',
              title: 'Fitness Tracking App',
              description: 'Developed a comprehensive fitness tracking application.',
              image: 'https://via.placeholder.com/300x200/10B981/FFFFFF?text=Fitness+App',
              technologies: ['Swift', 'Core Data', 'HealthKit', 'CloudKit']
            }
          ],
          reviews: [
            {
              id: '3',
              reviewer: 'Michael Brown',
              rating: 4,
              comment: 'Good work but had some delays. Overall satisfied with the result.',
              date: new Date('2024-01-05')
            }
          ],
          createdAt: new Date('2023-10-20'),
          updatedAt: new Date('2024-01-15')
        },
        {
          id: '4',
          title: 'AWS Cloud Infrastructure Setup',
          description: 'Complete AWS cloud infrastructure setup and optimization. Security, scalability, and cost optimization.',
          category: 'Cloud Services',
          subcategory: 'AWS',
          provider: 'David Park',
          providerAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=David',
          providerRating: 4.9,
          providerReviews: 203,
          price: 200,
          priceType: 'hourly',
          duration: '1-2 weeks',
          skills: ['AWS', 'Terraform', 'Docker', 'Kubernetes', 'Security'],
          tags: ['Cloud Services', 'AWS', 'DevOps', 'Infrastructure'],
          location: 'Seattle, WA',
          availability: 'available',
          featured: true,
          verified: true,
          portfolio: [
            {
              id: '4',
              title: 'Enterprise Cloud Migration',
              description: 'Migrated large enterprise to AWS with zero downtime.',
              image: 'https://via.placeholder.com/300x200/F59E0B/FFFFFF?text=Cloud+Migration',
              technologies: ['AWS', 'Terraform', 'Docker', 'Kubernetes']
            }
          ],
          reviews: [
            {
              id: '4',
              reviewer: 'Lisa Johnson',
              rating: 5,
              comment: 'Excellent cloud expertise. Saved us thousands in infrastructure costs.',
              date: new Date('2024-01-12')
            }
          ],
          createdAt: new Date('2023-09-10'),
          updatedAt: new Date('2024-01-20')
        },
        {
          id: '5',
          title: 'Smart Contract Development',
          description: 'Ethereum smart contract development for DeFi protocols and NFT marketplaces. Security audits and testing.',
          category: 'Blockchain',
          subcategory: 'Smart Contracts',
          provider: 'James Wilson',
          providerAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=James',
          providerRating: 4.8,
          providerReviews: 94,
          price: 180,
          priceType: 'hourly',
          duration: '3-4 weeks',
          skills: ['Solidity', 'Ethereum', 'Web3.js', 'Hardhat', 'Security'],
          tags: ['Blockchain', 'Smart Contracts', 'DeFi', 'Ethereum'],
          location: 'Austin, TX',
          availability: 'available',
          featured: false,
          verified: true,
          portfolio: [
            {
              id: '5',
              title: 'DeFi Lending Protocol',
              description: 'Built a decentralized lending protocol with automated interest rates.',
              image: 'https://via.placeholder.com/300x200/059669/FFFFFF?text=DeFi+Lending',
              technologies: ['Solidity', 'Ethereum', 'Web3.js', 'Hardhat']
            }
          ],
          reviews: [
            {
              id: '5',
              reviewer: 'Robert Davis',
              rating: 5,
              comment: 'Outstanding blockchain expertise. Delivered secure and efficient smart contracts.',
              date: new Date('2024-01-08')
            }
          ],
          createdAt: new Date('2023-11-05'),
          updatedAt: new Date('2024-01-16')
        },
        {
          id: '6',
          title: 'Data Analytics Dashboard',
          description: 'Comprehensive data analytics dashboard with real-time insights and business intelligence reporting.',
          category: 'Data Science',
          subcategory: 'Data Analysis',
          provider: 'Maria Garcia',
          providerAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Maria',
          providerRating: 4.6,
          providerReviews: 167,
          price: 90,
          priceType: 'hourly',
          duration: '2-3 weeks',
          skills: ['Python', 'Tableau', 'SQL', 'Machine Learning', 'Statistics'],
          tags: ['Data Science', 'Analytics', 'Business Intelligence', 'Dashboard'],
          location: 'Chicago, IL',
          availability: 'available',
          featured: false,
          verified: true,
          portfolio: [
            {
              id: '6',
              title: 'Business Intelligence Platform',
              description: 'Developed a comprehensive BI platform for enterprise analytics.',
              image: 'https://via.placeholder.com/300x200/6366F1/FFFFFF?text=BI+Platform',
              technologies: ['Python', 'Tableau', 'SQL', 'Power BI']
            }
          ],
          reviews: [
            {
              id: '6',
              reviewer: 'Jennifer Lee',
              rating: 4,
              comment: 'Good analytical skills. Helped us understand our data better.',
              date: new Date('2024-01-03')
            }
          ],
          createdAt: new Date('2023-12-15'),
          updatedAt: new Date('2024-01-14')
        }
      ];

      setCategories(mockCategories);
      setServices(mockServices);
      setLoading(false);
    }, 1000);
  }, []);

  const filteredServices = useMemo(() => {
    let filtered = services.filter(service => {
      // Category filter
      if (selectedCategory !== 'all' && service.category !== selectedCategory) return false;
      
      // Subcategory filter
      if (selectedSubcategory !== 'all' && service.subcategory !== selectedSubcategory) return false;
      
      // Search term filter
      if (searchTerm && !service.title.toLowerCase().includes(searchTerm.toLowerCase()) && 
          !service.description.toLowerCase().includes(searchTerm.toLowerCase()) &&
          !service.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()))) {
        return false;
      }
      
      // Price range filter
      if (service.price < priceRange[0] || service.price > priceRange[1]) return false;
      
      // Verified filter
      if (filterVerified && !service.verified) return false;
      
      // Featured filter
      if (filterFeatured && !service.featured) return false;
      
      return true;
    });

    // Sort services
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price':
          return a.price - b.price;
        case 'rating':
          return b.providerRating - a.providerRating;
        case 'recent':
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
        case 'relevance':
        default:
          // Relevance based on search term match and featured status
          const aScore = (a.featured ? 10 : 0) + (a.verified ? 5 : 0) + a.providerRating;
          const bScore = (b.featured ? 10 : 0) + (b.verified ? 5 : 0) + b.providerRating;
          return bScore - aScore;
      }
    });

    return filtered;
  }, [services, selectedCategory, selectedSubcategory, searchTerm, priceRange, filterVerified, filterFeatured, sortBy]);

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

  const getAvailabilityColor = (availability: string) => {
    switch (availability) {
      case 'available': return 'text-green-400 bg-green-500/20';
      case 'busy': return 'text-yellow-400 bg-yellow-500/20';
      case 'unavailable': return 'text-red-400 bg-red-500/20';
      default: return 'text-gray-400 bg-gray-500/20';
    }
  };

  const getAvailabilityIcon = (availability: string) => {
    switch (availability) {
      case 'available': return '🟢';
      case 'busy': return '🟡';
      case 'unavailable': return '🔴';
      default: return '⚪';
    }
  };

  if (loading) {
    return (
      <div className="relative z-10 container-responsive py-8">
        
        {/* Background Effects */}
        <div className="fixed inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-cyber-dark via-cyber-darker to-cyber-dark-blue opacity-90"></div>
          <div className="absolute inset-0 bg-holographic bg-[length:400%_400%] animate-holographic-shift opacity-10"></div>
        </div>
      
        <div className="text-center">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-300 shadow-lg">
            <svg className="animate-spin -ml-1 mr-3 h-6 w-6 text-purple-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <span className="text-lg font-medium">Loading Services...</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative z-10 container-responsive py-8">
      <Head>
        <title>Service Marketplace - Zion</title>
        <meta name="description" content="Comprehensive service marketplace with professional services in AI, web development, mobile apps, cloud services, blockchain, and data science" />
        <meta name="keywords" content="service marketplace, professional services, AI development, web development, mobile development, cloud services, blockchain, data science, Zion" />
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
              <Link href="/mobile-responsive" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Mobile
              </Link>
              <Link href="/seo-optimization" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                SEO
              </Link>
              <Link href="/multi-language" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Languages
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
            Service Marketplace
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover professional services from verified experts in AI development, 
            web development, mobile apps, cloud services, blockchain, and data science.
          </p>
        </div>

        {/* Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(selectedCategory === category.name ? 'all' : category.name)}
              className={`p-6 rounded-xl border transition-all duration-300 ${
                selectedCategory === category.name
                  ? 'bg-gradient-to-r from-purple-600/20 to-pink-600/20 border-purple-500/50'
                  : 'bg-white/5 border-white/10 hover:bg-white/10'
              }`}
            >
              <div className="text-center">
                <div className="text-4xl mb-3">{category.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{category.name}</h3>
                <p className="text-gray-300 text-sm mb-3">{category.description}</p>
                <div className="text-sm text-gray-400">{category.serviceCount} services</div>
              </div>
            </button>
          ))}
        </div>

        {/* Search and Filters */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
            <div className="lg:col-span-2">
              <input
                type="text"
                placeholder="Search services, skills, or providers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors"
              />
            </div>
            
            <div>
              <select
                value={selectedSubcategory}
                onChange={(e) => setSelectedSubcategory(e.target.value)}
                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors"
              >
                <option value="all">All Subcategories</option>
                {categories
                  .find(cat => cat.name === selectedCategory || selectedCategory === 'all')
                  ?.subcategories.map(sub => (
                    <option key={sub} value={sub}>{sub}</option>
                  ))}
              </select>
            </div>
            
            <div>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors"
              >
                <option value="relevance">Sort by Relevance</option>
                <option value="price">Sort by Price</option>
                <option value="rating">Sort by Rating</option>
                <option value="recent">Sort by Recent</option>
              </select>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-4 mt-4">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={filterVerified}
                onChange={(e) => setFilterVerified(e.target.checked)}
                className="rounded border-white/20 bg-white/10 text-purple-500 focus:ring-purple-500"
              />
              <span className="text-sm text-gray-300">Verified Only</span>
            </label>
            
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={filterFeatured}
                onChange={(e) => setFilterFeatured(e.target.checked)}
                className="rounded border-white/20 bg-white/10 text-purple-500 focus:ring-purple-500"
              />
              <span className="text-sm text-gray-300">Featured Only</span>
            </label>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <div key={service.id} className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-gradient-to-br hover:from-white/10 hover:to-white/20 transition-all duration-300 transform hover:scale-105">
              {/* Service Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white mb-2">{service.title}</h3>
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="text-sm text-gray-400">{service.category}</span>
                    <span className="text-gray-600">•</span>
                    <span className="text-sm text-gray-400">{service.subcategory}</span>
                  </div>
                </div>
                <div className="flex flex-col items-end space-y-2">
                  {service.featured && (
                    <span className="text-xs bg-yellow-500/20 text-yellow-300 px-2 py-1 rounded border border-yellow-500/30">
                      Featured
                    </span>
                  )}
                  {service.verified && (
                    <span className="text-green-400">✓</span>
                  )}
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                {service.description}
              </p>

              {/* Provider Info */}
              <div className="flex items-center space-x-3 mb-4">
                <Image 
                  src={service.providerAvatar}
                  alt={service.provider}
                  className="w-12 h-12 rounded-full border-2 border-purple-500/30"
                  width={48} 
                  height={48} 
                />
                <div className="flex-1">
                  <h4 className="text-white font-medium">{service.provider}</h4>
                  <div className="flex items-center space-x-2">
                    {renderStars(service.providerRating)}
                    <span className="text-sm text-gray-400">({service.providerReviews})</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center space-x-1">
                    <span className="text-sm">{getAvailabilityIcon(service.availability)}</span>
                    <span className={`text-xs px-2 py-1 rounded-full ${getAvailabilityColor(service.availability)}`}>
                      {service.availability}
                    </span>
                  </div>
                </div>
              </div>

              {/* Skills */}
              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {service.skills.slice(0, 3).map((skill, index) => (
                    <span key={index} className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded">
                      {skill}
                    </span>
                  ))}
                  {service.skills.length > 3 && (
                    <span className="text-xs text-gray-400">+{service.skills.length - 3} more</span>
                  )}
                </div>
              </div>

              {/* Price and Duration */}
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-lg font-bold text-green-400">${service.price}/hr</p>
                  <p className="text-sm text-gray-400">{service.duration}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-400">📍 {service.location}</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-3">
                <button className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 shadow-lg hover:shadow-purple-500/25 transform hover:scale-105">
                  View Details
                </button>
                <button className="border border-white/20 text-white hover:bg-white/10 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 backdrop-blur-sm">
                  Contact
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-xl p-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Need a Custom Service?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Can't find what you're looking for? Post a custom request and get matched 
              with the perfect service provider for your project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/post-request" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-purple-500/25 transform hover:scale-105">
                Post a Request
              </Link>
              <Link href="/user-profiles" className="border border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 backdrop-blur-sm">
                Browse Providers
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServiceMarketplacePage 