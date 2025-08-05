import type { NextPage } from 'next';import ModernLayout from '../components/layout/ModernLayout'

import Head from 'next/head';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface Equipment {
  id: string;
  name: string;
  category: string;
  description: string;
  dailyRate: number;
  weeklyRate: number;
  monthlyRate: number;
  availability: 'available' | 'rented' | 'maintenance' | 'reserved';
  location: string;
  condition: 'excellent' | 'good' | 'fair' | 'poor';
  images: string[];
  specifications: EquipmentSpecs;
  owner: string;
  totalRentals: number;
  averageRating: number;
  lastMaintenance: Date;
  nextMaintenance: Date;
  insurance: boolean;
  warranty: boolean;
}

interface EquipmentSpecs {
  brand: string;
  model: string;
  year: number;
  weight: number;
  dimensions: string;
  power: string;
  features: string[];
}

interface Rental {
  id: string;
  equipmentId: string;
  renterId: string;
  startDate: Date;
  endDate: Date;
  totalDays: number;
  totalCost: number;
  status: 'pending' | 'active' | 'completed' | 'cancelled';
  paymentStatus: 'pending' | 'paid' | 'refunded';
  insurance: boolean;
  deposit: number;
  notes?: string;
  createdAt: Date;
}

interface MaintenanceRecord {
  id: string;
  equipmentId: string;
  type: 'routine' | 'repair' | 'inspection' | 'emergency';
  description: string;
  cost: number;
  technician: string;
  startDate: Date;
  endDate: Date;
  status: 'scheduled' | 'in_progress' | 'completed';
  parts: string[];
  notes?: string;
}

interface RentalAnalytics {
  totalRevenue: number;
  totalRentals: number;
  averageRentalDuration: number;
  topPerformingEquipment: Equipment[];
  monthlyRevenue: MonthlyRevenue[];
  categoryPerformance: CategoryPerformance[];
}

interface MonthlyRevenue {
  month: string;
  revenue: number;
  rentals: number;
}

interface CategoryPerformance {
  category: string;
  revenue: number;
  rentals: number;
  averageRating: number;
}

const EquipmentRentalPage: NextPage = () => {
  const [activeTab, setActiveTab] = useState('equipment')
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [filterAvailability, setFilterAvailability] = useState<string>('all')
  
  const [equipment, setEquipment] = useState<Equipment[]>([
    {
      id: 'EQ-001',
      name: 'Professional Camera Kit',
      category: 'Photography',
      description: 'Complete professional camera kit including DSLR, lenses, tripod, and lighting equipment.',
      dailyRate: 150,
      weeklyRate: 900,
      monthlyRate: 3000,
      availability: 'available',
      location: 'New York, NY',
      condition: 'excellent',
      images: ['https://via.placeholder.com/300x200/1F2937/FFFFFF?text=Camera+Kit'],
      specifications: {
        brand: 'Canon',
        model: 'EOS R5',
        year: 2023,
        weight: 2.5,
        dimensions: '15" x 12" x 8"',
        power: 'Battery powered',
        features: ['4K Video', '45MP Sensor', 'Dual Card Slots', 'WiFi Connectivity']
      },
      owner: 'PhotoPro Studios',
      totalRentals: 45,
      averageRating: 4.8,
      lastMaintenance: new Date('2024-01-10'),
      nextMaintenance: new Date('2024-02-10'),
      insurance: true,
      warranty: true
    },
    {
      id: 'EQ-002',
      name: 'DJ Equipment Set',
      category: 'Audio',
      description: 'Professional DJ setup with turntables, mixer, speakers, and lighting system.',
      dailyRate: 200,
      weeklyRate: 1200,
      monthlyRate: 4000,
      availability: 'rented',
      location: 'Los Angeles, CA',
      condition: 'good',
      images: ['https://via.placeholder.com/300x200/1F2937/FFFFFF?text=DJ+Equipment'],
      specifications: {
        brand: 'Pioneer',
        model: 'CDJ-3000',
        year: 2022,
        weight: 15.0,
        dimensions: '24" x 18" x 12"',
        power: 'AC powered',
        features: ['USB Support', 'Beat Sync', 'Hot Cues', 'Performance Pads']
      },
      owner: 'SoundWave Productions',
      totalRentals: 32,
      averageRating: 4.6,
      lastMaintenance: new Date('2024-01-05'),
      nextMaintenance: new Date('2024-02-05'),
      insurance: true,
      warranty: false
    },
    {
      id: 'EQ-003',
      name: 'Construction Tools Set',
      category: 'Construction',
      description: 'Complete set of professional construction tools including power tools and safety equipment.',
      dailyRate: 100,
      weeklyRate: 600,
      monthlyRate: 2000,
      availability: 'maintenance',
      location: 'Chicago, IL',
      condition: 'fair',
      images: ['https://via.placeholder.com/300x200/1F2937/FFFFFF?text=Construction+Tools'],
      specifications: {
        brand: 'DeWalt',
        model: 'Professional Series',
        year: 2021,
        weight: 25.0,
        dimensions: '36" x 24" x 18"',
        power: 'Battery/AC',
        features: ['Cordless Drills', 'Circular Saws', 'Safety Gear', 'Tool Storage']
      },
      owner: 'BuildRight Tools',
      totalRentals: 28,
      averageRating: 4.4,
      lastMaintenance: new Date('2024-01-15'),
      nextMaintenance: new Date('2024-01-20'),
      insurance: true,
      warranty: true
    }
  ])

  const [rentals, setRentals] = useState<Rental[]>([
    {
      id: 'RENTAL-001',
      equipmentId: 'EQ-001',
      renterId: 'USER-001',
      startDate: new Date('2024-01-20'),
      endDate: new Date('2024-01-25'),
      totalDays: 5,
      totalCost: 750,
      status: 'completed',
      paymentStatus: 'paid',
      insurance: true,
      deposit: 300,
      notes: 'Event photography for corporate conference',
      createdAt: new Date('2024-01-18')
    },
    {
      id: 'RENTAL-002',
      equipmentId: 'EQ-002',
      renterId: 'USER-002',
      startDate: new Date('2024-01-22'),
      endDate: new Date('2024-01-24'),
      totalDays: 2,
      totalCost: 400,
      status: 'active',
      paymentStatus: 'paid',
      insurance: false,
      deposit: 200,
      notes: 'Wedding reception DJ services',
      createdAt: new Date('2024-01-20')
    }
  ])

  const [maintenanceRecords, setMaintenanceRecords] = useState<MaintenanceRecord[]>([
    {
      id: 'MAINT-001',
      equipmentId: 'EQ-003',
      type: 'routine',
      description: 'Regular maintenance and cleaning of power tools',
      cost: 150,
      technician: 'Mike Johnson',
      startDate: new Date('2024-01-15'),
      endDate: new Date('2024-01-17'),
      status: 'completed',
      parts: ['Replacement batteries', 'Cleaning supplies'],
      notes: 'All tools inspected and cleaned. Batteries replaced.'
    },
    {
      id: 'MAINT-002',
      equipmentId: 'EQ-001',
      type: 'inspection',
      description: 'Camera sensor cleaning and lens calibration',
      cost: 75,
      technician: 'Sarah Chen',
      startDate: new Date('2024-01-10'),
      endDate: new Date('2024-01-10'),
      status: 'completed',
      parts: ['Sensor cleaning kit'],
      notes: 'Camera in excellent condition. No issues found.'
    }
  ])

  const [analytics, setAnalytics] = useState<RentalAnalytics>({
    totalRevenue: 12500,
    totalRentals: 105,
    averageRentalDuration: 3.2,
    topPerformingEquipment: [],
    monthlyRevenue: [
      { month: 'January 2024', revenue: 4200, rentals: 15 },
      { month: 'December 2023', revenue: 3800, rentals: 12 },
      { month: 'November 2023', revenue: 4500, rentals: 18 }
    ],
    categoryPerformance: [
      { category: 'Photography', revenue: 6000, rentals: 25, averageRating: 4.7 },
      { category: 'Audio', revenue: 4000, rentals: 20, averageRating: 4.5 },
      { category: 'Construction', revenue: 2500, rentals: 15, averageRating: 4.3 }
    ]
  })

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount)
  }

  const getAvailabilityColor = (availability: string) => {
    switch (availability) {
      case 'available': return 'text-green-400 bg-green-500/20 border-green-500/30'
      case 'rented': return 'text-blue-400 bg-blue-500/20 border-blue-500/30'
      case 'maintenance': return 'text-yellow-400 bg-yellow-500/20 border-yellow-500/30'
      case 'reserved': return 'text-purple-400 bg-purple-500/20 border-purple-500/30'
      default: return 'text-gray-400 bg-gray-500/20 border-gray-500/30'
    }
  }

  const getConditionColor = (condition: string) => {
    switch (condition) {
      case 'excellent': return 'text-green-400 bg-green-500/20 border-green-500/30'
      case 'good': return 'text-blue-400 bg-blue-500/20 border-blue-500/30'
      case 'fair': return 'text-yellow-400 bg-yellow-500/20 border-yellow-500/30'
      case 'poor': return 'text-red-400 bg-red-500/20 border-red-500/30'
      default: return 'text-gray-400 bg-gray-500/20 border-gray-500/30'
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'text-yellow-400 bg-yellow-500/20 border-yellow-500/30'
      case 'active': return 'text-blue-400 bg-blue-500/20 border-blue-500/30'
      case 'completed': return 'text-green-400 bg-green-500/20 border-green-500/30'
      case 'cancelled': return 'text-red-400 bg-red-500/20 border-red-500/30'
      default: return 'text-gray-400 bg-gray-500/20 border-gray-500/30'
    }
  }

  const filteredEquipment = equipment.filter(item => {
    const categoryMatch = selectedCategory === 'all' || item.category === selectedCategory
    const availabilityMatch = filterAvailability === 'all' || item.availability === filterAvailability
    return categoryMatch && availabilityMatch
  })

  const getStats = () => {
    const totalEquipment = equipment.length
    const availableEquipment = equipment.filter(e => e.availability === 'available').length
    const totalRevenue = analytics.totalRevenue
    const averageRating = equipment.reduce((sum, e) => sum + e.averageRating, 0) / equipment.length
    
    return { totalEquipment, availableEquipment, totalRevenue, averageRating }
  }

  const stats = getStats()

  return (
  <ModernLayout>
    return (
  <ModernLayout>
    return (
  <ModernLayout>
    return (
    <div className="relative z-10 container-responsive py-8">
        
        {/* Background Effects */}
        <div className="fixed inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-cyber-dark via-cyber-darker to-cyber-dark-blue opacity-90"></div>
          <div className="absolute inset-0 bg-holographic bg-[length:400%_400%] animate-holographic-shift opacity-10"></div>
        </div>
      
      <Head>
        <title>Equipment Rental & Management - Zion Marketplace</title>
        <meta name="description" content="Comprehensive equipment rental and management system. Rent professional equipment, track availability, and manage maintenance schedules." />
        <meta name="keywords" content="equipment rental, professional equipment, availability tracking, maintenance management, marketplace rentals" />
      
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" /></Head>

      {/* Header */}
      <div className="bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-white">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Zion</span>
            </Link>
            <nav className="flex items-center space-x-6">
              <Link href="/marketplace" className="text-gray-300 hover:text-white px-3 py-4 rounded-md text-sm font-medium transition-colors">
                Marketplace
              </Link>
              <Link href="/project-management" className="text-gray-300 hover:text-white px-3 py-4 rounded-md text-sm font-medium transition-colors">
                Projects
              </Link>
              <Link href="/auth/login" className="text-gray-300 hover:text-white px-3 py-4 rounded-md text-sm font-medium">
                Login
              </Link>
            </nav>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">
              Equipment Rental & Management
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Rent professional equipment for your projects. Track availability, manage maintenance, 
            and access high-quality tools and machinery through our comprehensive rental system.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="#equipment" className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg">
              Browse Equipment
            </Link>
            <Link href="/marketplace" className="border border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 backdrop-blur-sm">
              List Equipment
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-white mb-2">{stats.totalEquipment}</div>
            <p className="text-gray-300 text-sm">Total Equipment</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-white mb-2">{stats.availableEquipment}</div>
            <p className="text-gray-300 text-sm">Available Now</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-white mb-2">{formatCurrency(stats.totalRevenue)}</div>
            <p className="text-gray-300 text-sm">Total Revenue</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-white mb-2">{stats.averageRating.toFixed(1)}</div>
            <p className="text-gray-300 text-sm">Avg Rating</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {[
            { id: 'equipment', label: 'Equipment' },
            { id: 'rentals', label: 'Rentals' },
            { id: 'maintenance', label: 'Maintenance' },
            { id: 'analytics', label: 'Analytics' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-orange-600 to-red-600 text-white'
                  : 'bg-white/5 text-gray-300 hover:bg-white/10'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Filters */}
        {activeTab === 'equipment' && (
          <div className="flex flex-wrap gap-4 mb-8">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-4 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              <option value="all">All Categories</option>
              <option value="Photography">Photography</option>
              <option value="Audio">Audio</option>
              <option value="Construction">Construction</option>
              <option value="Video">Video</option>
              <option value="Lighting">Lighting</option>
            </select>
            <select
              value={filterAvailability}
              onChange={(e) => setFilterAvailability(e.target.value)}
              className="px-4 py-4 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              <option value="all">All Availability</option>
              <option value="available">Available</option>
              <option value="rented">Rented</option>
              <option value="maintenance">Maintenance</option>
              <option value="reserved">Reserved</option>
            </select>
          </div>
        )}

        {/* Tab Content */}
        {activeTab === 'equipment' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-white">Available Equipment</h2>
              <Link href="/marketplace" className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300">
                List Equipment
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredEquipment.map((item) => (
                <div key={item.id} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-all duration-300">
                  <div className="mb-4">
                    <Image src={item.images[0]} 
                      alt={item.name}
                      className="w-full h-48 object-cover rounded-lg mb-4"
                    width={400} height={300} />
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-lg font-semibold text-white">{item.name}</h3>
                        <p className="text-gray-300 text-sm">{item.category}</p>
                      </div>
                      <div className="text-right">
                        <span className={`px-3 py-3 rounded-full text-xs font-medium border ${getAvailabilityColor(item.availability)}`}>
                          {item.availability.toUpperCase()}
                        </span>
                        <div className="mt-2">
                          <span className={`px-3 py-3 rounded-full text-xs font-medium border ${getConditionColor(item.condition)}`}>
                            {item.condition.toUpperCase()}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-4">
                    <p className="text-gray-300 text-sm line-clamp-2">{item.description}</p>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Daily Rate:</span>
                      <span className="text-white font-semibold">{formatCurrency(item.dailyRate)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Weekly Rate:</span>
                      <span className="text-white">{formatCurrency(item.weeklyRate)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Location:</span>
                      <span className="text-white">{item.location}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Owner:</span>
                      <span className="text-white">{item.owner}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Rating:</span>
                      <span className="text-white">⭐ {item.averageRating}</span>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <span className="text-gray-300 text-sm">Features:</span>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {item.specifications.features.slice(0, 3).map((feature, index) => (
                        <span key={index} className="px-4 py-3 bg-white/10 rounded text-xs text-white">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    {item.availability === 'available' && (
                      <button className="flex-1 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-3 py-4 rounded text-sm transition-colors">
                        Rent Now
                      </button>
                    )}
                    <button className="flex-1 bg-white/10 text-white hover:bg-white/20 px-3 py-4 rounded text-sm transition-colors">
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'rentals' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white">Rental History</h2>
            
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-white/10">
                    <tr>
                      <th className="text-left text-gray-300 py-3 px-6">Rental ID</th>
                      <th className="text-left text-gray-300 py-3 px-6">Equipment</th>
                      <th className="text-left text-gray-300 py-3 px-6">Duration</th>
                      <th className="text-left text-gray-300 py-3 px-6">Total Cost</th>
                      <th className="text-left text-gray-300 py-3 px-6">Status</th>
                      <th className="text-left text-gray-300 py-3 px-6">Payment</th>
                      <th className="text-left text-gray-300 py-3 px-6">Dates</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10">
                    {rentals.map((rental) => (
                      <tr key={rental.id} className="hover:bg-white/5">
                        <td className="text-white py-3 px-6">{rental.id}</td>
                        <td className="text-white py-3 px-6">
                          {equipment.find(e => e.id === rental.equipmentId)?.name}
                        </td>
                        <td className="text-white py-3 px-6">{rental.totalDays} days</td>
                        <td className="text-white py-3 px-6">{formatCurrency(rental.totalCost)}</td>
                        <td className="py-3 px-6">
                          <span className={`px-3 py-3 rounded-full text-xs font-medium border ${getStatusColor(rental.status)}`}>
                            {rental.status.toUpperCase()}
                          </span>
                        </td>
                        <td className="py-3 px-6">
                          <span className={`px-3 py-3 rounded-full text-xs font-medium border ${getStatusColor(rental.paymentStatus)}`}>
                            {rental.paymentStatus.toUpperCase()}
                          </span>
                        </td>
                        <td className="text-white py-3 px-6">
                          {rental.startDate.toLocaleDateString()} - {rental.endDate.toLocaleDateString()}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'maintenance' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white">Maintenance Records</h2>
            
            <div className="space-y-6">
              {maintenanceRecords.map((record) => (
                <div key={record.id} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-white">
                        {equipment.find(e => e.id === record.equipmentId)?.name}
                      </h3>
                      <p className="text-gray-300 text-sm">{record.description}</p>
                    </div>
                    <div className="text-right">
                      <span className={`px-3 py-3 rounded-full text-xs font-medium border ${getStatusColor(record.status)}`}>
                        {record.status.toUpperCase()}
                      </span>
                      <div className="mt-2">
                        <span className="text-white font-semibold">{formatCurrency(record.cost)}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <span className="text-gray-300 text-sm">Type:</span>
                      <div className="text-white capitalize">{record.type}</div>
                    </div>
                    <div>
                      <span className="text-gray-300 text-sm">Technician:</span>
                      <div className="text-white">{record.technician}</div>
                    </div>
                    <div>
                      <span className="text-gray-300 text-sm">Start Date:</span>
                      <div className="text-white">{record.startDate.toLocaleDateString()}</div>
                    </div>
                    <div>
                      <span className="text-gray-300 text-sm">End Date:</span>
                      <div className="text-white">{record.endDate.toLocaleDateString()}</div>
                    </div>
                  </div>
                  
                  {record.parts.length > 0 && (
                    <div className="mb-4">
                      <span className="text-gray-300 text-sm">Parts Used:</span>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {record.parts.map((part, index) => (
                          <span key={index} className="px-4 py-3 bg-white/10 rounded text-xs text-white">
                            {part}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {record.notes && (
                    <div className="mb-4">
                      <span className="text-gray-300 text-sm">Notes:</span>
                      <p className="text-white text-sm mt-1">{record.notes}</p>
                    </div>
                  )}
                  
                  <div className="flex gap-2">
                    <button className="flex-1 bg-white/10 text-white hover:bg-white/20 px-3 py-4 rounded text-sm transition-colors">
                      View Details
                    </button>
                    <button className="flex-1 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-3 py-4 rounded text-sm transition-colors">
                      Schedule Maintenance
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'analytics' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white">Rental Analytics</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-white mb-2">{formatCurrency(analytics.totalRevenue)}</div>
                <p className="text-gray-300 text-sm">Total Revenue</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-white mb-2">{analytics.totalRentals}</div>
                <p className="text-gray-300 text-sm">Total Rentals</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-white mb-2">{analytics.averageRentalDuration}</div>
                <p className="text-gray-300 text-sm">Avg Duration (days)</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Monthly Revenue</h3>
                <div className="space-y-3">
                  {analytics.monthlyRevenue.map((month, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-gray-300">{month.month}</span>
                      <div className="text-right">
                        <div className="text-white font-semibold">{formatCurrency(month.revenue)}</div>
                        <div className="text-gray-300 text-sm">{month.rentals} rentals</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Category Performance</h3>
                <div className="space-y-3">
                  {analytics.categoryPerformance.map((category, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-gray-300">{category.category}</span>
                      <div className="text-right">
                        <div className="text-white font-semibold">{formatCurrency(category.revenue)}</div>
                        <div className="text-gray-300 text-sm">⭐ {category.averageRating}</div>
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
      <div className="bg-gradient-to-r from-orange-900/50 to-red-900/50 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Rent Professional Equipment Today
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Access high-quality equipment for your projects. From photography gear to construction tools, 
              we have everything you need to get the job done professionally.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="#equipment" className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg">
                Browse Equipment
              </Link>
              <Link href="/marketplace" className="border border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 backdrop-blur-sm">
                List Your Equipment
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black/20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Zion Marketplace</h3>
              <p className="text-gray-300 text-sm">
                The first free AI-powered marketplace for high-tech products, services, and innovation.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Equipment Rental</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/equipment-rental" className="text-gray-400 hover:text-white transition-colors">Browse Equipment</Link></li>
                <li><Link href="/project-management" className="text-gray-400 hover:text-white transition-colors">Project Management</Link></li>
                <li><Link href="/marketplace-pricing" className="text-gray-400 hover:text-white transition-colors">Pricing & Commissions</Link></li>
                <li><Link href="/referral-affiliate" className="text-gray-400 hover:text-white transition-colors">Referral System</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</Link></li>
                <li><Link href="/real-time-chat" className="text-gray-400 hover:text-white transition-colors">Live Chat</Link></li>
                <li><Link href="/notifications" className="text-gray-400 hover:text-white transition-colors">Notifications</Link></li>
                <li><Link href="/ai-powered-contract-legal" className="text-gray-400 hover:text-white transition-colors">Legal Support</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</Link></li>
                <li><Link href="/auth/signup" className="text-gray-400 hover:text-white transition-colors">Sign Up</Link></li>
                <li><Link href="/auth/login" className="text-gray-400 hover:text-white transition-colors">Login</Link></li>
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

  </ModernLayout>
)
}

export default EquipmentRentalPage 