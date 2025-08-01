import type { NextPage } from 'next'
import Head from 'next/head'
import { useState, useEffect, useMemo } from 'react'
import Link from 'next/link'

interface Equipment {
  id: string;
  name: string;
  category: string;
  description: string;
  specifications: string[];
  dailyRate: number;
  weeklyRate: number;
  monthlyRate: number;
  availability: 'available' | 'rented' | 'maintenance';
  location: string;
  images: string[];
  rating: number;
  reviewCount: number;
  features: string[];
  included: string[];
  requirements: string[];
  provider: {
    name: string;
    rating: number;
    verified: boolean;
  };
}

interface RentalPeriod {
  startDate: string;
  endDate: string;
  days: number;
}

const EquipmentRentalPage: NextPage = () => {
  const [equipment, setEquipment] = useState<Equipment[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState<'price' | 'rating' | 'availability'>('availability');
  const [selectedEquipment, setSelectedEquipment] = useState<Equipment | null>(null);
  const [rentalPeriod, setRentalPeriod] = useState<RentalPeriod>({
    startDate: '',
    endDate: '',
    days: 0
  });
  const [loading, setLoading] = useState(true);

  const categories = [
    { id: 'all', name: 'All Equipment', icon: '⚙️' },
    { id: 'computing', name: 'Computing', icon: '💻' },
    { id: 'networking', name: 'Networking', icon: '🌐' },
    { id: 'storage', name: 'Storage', icon: '💾' },
    { id: 'security', name: 'Security', icon: '🔒' },
    { id: 'monitoring', name: 'Monitoring', icon: '📊' },
    { id: 'ai-training', name: 'AI Training', icon: '🤖' },
    { id: 'quantum', name: 'Quantum', icon: '⚛️' }
  ];

  useEffect(() => {
    // Simulate loading equipment data
    setTimeout(() => {
      const mockEquipment: Equipment[] = [
        {
          id: '1',
          name: 'NVIDIA DGX A100 System',
          category: 'ai-training',
          description: 'High-performance AI training system with 8x A100 GPUs, perfect for deep learning and machine learning workloads.',
          specifications: [
            '8x NVIDIA A100 80GB GPUs',
            '2x AMD EPYC 7742 CPUs',
            '1TB DDR4 Memory',
            '15TB NVMe Storage',
            'Mellanox HDR InfiniBand'
          ],
          dailyRate: 2500,
          weeklyRate: 15000,
          monthlyRate: 50000,
          availability: 'available',
          location: 'San Francisco, CA',
          images: ['/images/dgx-a100.jpg'],
          rating: 4.9,
          reviewCount: 127,
          features: [
            'Multi-GPU Training',
            'Distributed Computing',
            'High-Speed Interconnects',
            'Enterprise Support'
          ],
          included: [
            'Setup & Configuration',
            'Technical Support',
            'Documentation',
            'Training Materials'
          ],
          requirements: [
            'Valid Business License',
            'Security Clearance',
            'Insurance Coverage',
            'Technical Expertise'
          ],
          provider: {
            name: 'AI Compute Solutions',
            rating: 4.8,
            verified: true
          }
        },
        {
          id: '2',
          name: 'Quantum Computer - IBM Q System',
          category: 'quantum',
          description: 'State-of-the-art quantum computing system for research and development in quantum algorithms.',
          specifications: [
            '50+ Qubit Processor',
            'Quantum Error Correction',
            'Cryogenic Cooling System',
            'Quantum-Classical Interface',
            'Advanced Control Systems'
          ],
          dailyRate: 10000,
          weeklyRate: 60000,
          monthlyRate: 200000,
          availability: 'available',
          location: 'New York, NY',
          images: ['/images/quantum-system.jpg'],
          rating: 4.8,
          reviewCount: 89,
          features: [
            'Quantum Algorithm Development',
            'Research Collaboration',
            'Academic Partnerships',
            'Industry Applications'
          ],
          included: [
            'Quantum Programming Support',
            'Research Consultation',
            'Algorithm Optimization',
            'Results Analysis'
          ],
          requirements: [
            'Research Institution',
            'Quantum Computing Knowledge',
            'Project Proposal',
            'Security Clearance'
          ],
          provider: {
            name: 'Quantum Research Labs',
            rating: 4.9,
            verified: true
          }
        },
        {
          id: '3',
          name: 'Cisco Nexus 9000 Series',
          category: 'networking',
          description: 'Enterprise-grade networking equipment for high-performance data center operations.',
          specifications: [
            '48-Port 100Gbps',
            'Layer 2/3 Switching',
            'Advanced QoS',
            'Network Virtualization',
            'Automated Provisioning'
          ],
          dailyRate: 800,
          weeklyRate: 4500,
          monthlyRate: 15000,
          availability: 'available',
          location: 'Austin, TX',
          images: ['/images/nexus-9000.jpg'],
          rating: 4.7,
          reviewCount: 156,
          features: [
            'High-Speed Connectivity',
            'Network Automation',
            'Security Features',
            'Monitoring Tools'
          ],
          included: [
            'Network Design',
            'Configuration Setup',
            '24/7 Support',
            'Performance Monitoring'
          ],
          requirements: [
            'Network Engineering Team',
            'Data Center Access',
            'Security Protocols',
            'Backup Systems'
          ],
          provider: {
            name: 'Network Solutions Pro',
            rating: 4.6,
            verified: true
          }
        },
        {
          id: '4',
          name: 'Pure Storage FlashArray',
          category: 'storage',
          description: 'All-flash storage array with enterprise-grade performance and reliability.',
          specifications: [
            '500TB Raw Capacity',
            'NVMe Flash Storage',
            '99.9999% Availability',
            'Data Deduplication',
            'Encryption at Rest'
          ],
          dailyRate: 1200,
          weeklyRate: 7000,
          monthlyRate: 25000,
          availability: 'rented',
          location: 'Seattle, WA',
          images: ['/images/flasharray.jpg'],
          rating: 4.8,
          reviewCount: 203,
          features: [
            'High-Performance Storage',
            'Data Protection',
            'Automated Management',
            'Cloud Integration'
          ],
          included: [
            'Storage Migration',
            'Data Backup',
            'Performance Tuning',
            'Disaster Recovery'
          ],
          requirements: [
            'Storage Infrastructure',
            'Data Management',
            'Backup Systems',
            'Security Compliance'
          ],
          provider: {
            name: 'Storage Solutions Inc',
            rating: 4.7,
            verified: true
          }
        },
        {
          id: '5',
          name: 'Palo Alto Networks Firewall',
          category: 'security',
          description: 'Next-generation firewall with advanced threat protection and security features.',
          specifications: [
            '20Gbps Throughput',
            'Advanced Threat Prevention',
            'URL Filtering',
            'SSL Inspection',
            'WildFire Analysis'
          ],
          dailyRate: 600,
          weeklyRate: 3500,
          monthlyRate: 12000,
          availability: 'available',
          location: 'Chicago, IL',
          images: ['/images/palo-alto.jpg'],
          rating: 4.9,
          reviewCount: 178,
          features: [
            'Advanced Security',
            'Threat Intelligence',
            'Compliance Reporting',
            'Automated Response'
          ],
          included: [
            'Security Assessment',
            'Policy Configuration',
            'Threat Monitoring',
            'Incident Response'
          ],
          requirements: [
            'Security Team',
            'Network Access',
            'Compliance Requirements',
            'Incident Procedures'
          ],
          provider: {
            name: 'Cyber Security Pro',
            rating: 4.8,
            verified: true
          }
        },
        {
          id: '6',
          name: 'Splunk Enterprise Monitoring',
          category: 'monitoring',
          description: 'Comprehensive monitoring and analytics platform for IT infrastructure and applications.',
          specifications: [
            'Real-time Monitoring',
            'Machine Learning Analytics',
            'Custom Dashboards',
            'Alert Management',
            'Performance Metrics'
          ],
          dailyRate: 400,
          weeklyRate: 2200,
          monthlyRate: 8000,
          availability: 'available',
          location: 'Boston, MA',
          images: ['/images/splunk.jpg'],
          rating: 4.6,
          reviewCount: 94,
          features: [
            'Real-time Analytics',
            'Predictive Monitoring',
            'Custom Dashboards',
            'Automated Alerts'
          ],
          included: [
            'System Integration',
            'Dashboard Creation',
            'Alert Configuration',
            'Performance Analysis'
          ],
          requirements: [
            'Monitoring Infrastructure',
            'Data Sources',
            'Analytics Team',
            'Alert Procedures'
          ],
          provider: {
            name: 'Monitoring Experts',
            rating: 4.5,
            verified: true
          }
        }
      ];

      setEquipment(mockEquipment);
      setLoading(false);
    }, 1000);
  }, []);

  const filteredEquipment = useMemo(() => {
    let filtered = equipment.filter(item => {
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      const matchesSearch = searchTerm === '' || 
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });

    // Sort equipment
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price':
          return a.dailyRate - b.dailyRate;
        case 'rating':
          return b.rating - a.rating;
        case 'availability':
          return a.availability === 'available' ? -1 : 1;
        default:
          return 0;
      }
    });

    return filtered;
  }, [equipment, selectedCategory, searchTerm, sortBy]);

  const calculateRentalCost = (equipment: Equipment, days: number) => {
    if (days >= 30) return equipment.monthlyRate;
    if (days >= 7) return equipment.weeklyRate;
    return equipment.dailyRate * days;
  };

  const handleRentalPeriodChange = (field: keyof RentalPeriod, value: string | number) => {
    setRentalPeriod(prev => {
      const updated = { ...prev, [field]: value };
      
      if (updated.startDate && updated.endDate) {
        const start = new Date(updated.startDate);
        const end = new Date(updated.endDate);
        const days = Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
        updated.days = Math.max(1, days);
      }
      
      return updated;
    });
  };

  const handleRentEquipment = (equipment: Equipment) => {
    setSelectedEquipment(equipment);
    // In a real app, this would open a modal or navigate to rental form
    console.log('Renting equipment:', equipment.name);
  };

  const getAvailabilityColor = (availability: string) => {
    switch (availability) {
      case 'available': return 'text-green-400 bg-green-500/20';
      case 'rented': return 'text-red-400 bg-red-500/20';
      case 'maintenance': return 'text-yellow-400 bg-yellow-500/20';
      default: return 'text-gray-400 bg-gray-500/20';
    }
  };

  const getAvailabilityText = (availability: string) => {
    switch (availability) {
      case 'available': return 'Available';
      case 'rented': return 'Currently Rented';
      case 'maintenance': return 'Under Maintenance';
      default: return 'Unknown';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Head>
        <title>Equipment Rental - Zion Marketplace</title>
        <meta name="description" content="Rent high-performance computing equipment, networking gear, and specialized hardware for your projects" />
        <meta name="keywords" content="equipment rental, computing hardware, networking equipment, AI training, quantum computing, Zion" />
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
              <Link href="/real-time-chat" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Live Chat
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
            Equipment Rental
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Rent high-performance computing equipment, networking gear, and specialized hardware for your projects. 
            Access cutting-edge technology without the capital investment.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-white mb-2">{equipment.length}</div>
            <div className="text-gray-300">Total Equipment</div>
          </div>
          <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">
              {equipment.filter(e => e.availability === 'available').length}
            </div>
            <div className="text-gray-300">Available Now</div>
          </div>
          <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">
              {equipment.filter(e => e.rating >= 4.5).length}
            </div>
            <div className="text-gray-300">Top Rated</div>
          </div>
          <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">6</div>
            <div className="text-gray-300">Categories</div>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Search */}
            <div className="md:col-span-2">
              <input
                type="text"
                placeholder="Search equipment..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors"
              />
            </div>

            {/* Category Filter */}
            <div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors"
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.icon} {category.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Sort */}
            <div>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'price' | 'rating' | 'availability')}
                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors"
              >
                <option value="availability">Sort by Availability</option>
                <option value="price">Sort by Price</option>
                <option value="rating">Sort by Rating</option>
              </select>
            </div>
          </div>
        </div>

        {/* Equipment Grid */}
        {loading ? (
          <div className="text-center py-12">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-300 shadow-lg">
              <svg className="animate-spin -ml-1 mr-3 h-6 w-6 text-purple-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span className="text-lg font-medium">Loading equipment...</span>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEquipment.map((item) => (
              <div key={item.id} className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:bg-gradient-to-br hover:from-white/10 hover:to-white/20 transition-all duration-300 transform hover:scale-105">
                {/* Equipment Image */}
                <div className="h-48 bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
                  <div className="text-6xl">{item.category === 'ai-training' ? '🤖' : item.category === 'quantum' ? '⚛️' : item.category === 'networking' ? '🌐' : item.category === 'storage' ? '💾' : item.category === 'security' ? '🔒' : '📊'}</div>
                </div>

                {/* Equipment Info */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold text-white">{item.name}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getAvailabilityColor(item.availability)}`}>
                      {getAvailabilityText(item.availability)}
                    </span>
                  </div>

                  <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                    {item.description}
                  </p>

                  {/* Provider Info */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-gray-400">{item.provider.name}</span>
                      {item.provider.verified && (
                        <span className="text-blue-400">✓</span>
                      )}
                    </div>
                    <div className="flex items-center space-x-1">
                      <span className="text-yellow-400">★</span>
                      <span className="text-white text-sm">{item.rating}</span>
                      <span className="text-gray-400 text-sm">({item.reviewCount})</span>
                    </div>
                  </div>

                  {/* Pricing */}
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Daily Rate:</span>
                      <span className="text-white font-semibold">${item.dailyRate.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Weekly Rate:</span>
                      <span className="text-white font-semibold">${item.weeklyRate.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Monthly Rate:</span>
                      <span className="text-white font-semibold">${item.monthlyRate.toLocaleString()}</span>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="text-sm text-gray-400 mb-4">
                    📍 {item.location}
                  </div>

                  {/* Features */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                    <div className="flex flex-wrap gap-1">
                      {item.features.slice(0, 3).map((feature, index) => (
                        <span key={index} className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3">
                    <button
                      onClick={() => handleRentEquipment(item)}
                      disabled={item.availability !== 'available'}
                      className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 disabled:opacity-50 disabled:cursor-not-allowed text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-purple-500/25 transform hover:scale-105"
                    >
                      {item.availability === 'available' ? 'Rent Now' : 'Currently Rented'}
                    </button>
                    <button className="border border-white/20 text-white hover:bg-white/10 px-4 py-2 rounded-lg font-semibold transition-all duration-300 backdrop-blur-sm">
                      Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-xl p-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Need Custom Equipment?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Can't find what you're looking for? Contact us for custom equipment solutions and specialized hardware configurations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/quote-request" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-purple-500/25 transform hover:scale-105">
                Request Custom Quote
              </Link>
              <Link href="/real-time-chat" className="border border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 backdrop-blur-sm">
                Chat with Expert
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EquipmentRentalPage 