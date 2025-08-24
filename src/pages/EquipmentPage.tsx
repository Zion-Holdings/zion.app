import React, { useState } from 'react';
import { SEO } from '@/components/SEO';

const EquipmentPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const equipmentCategories = [
    {
      id: 'all',
      name: 'All Equipment',
      icon: '🔧'
    },
    {
      id: 'computers',
      name: 'Computers & Laptops',
      icon: '💻'
    },
    {
      id: 'servers',
      name: 'Servers & Storage',
      icon: '🖥️'
    },
    {
      id: 'networking',
      name: 'Networking',
      icon: '🌐'
    },
    {
      id: 'mobile',
      name: 'Mobile Devices',
      icon: '📱'
    },
    {
      id: 'peripherals',
      name: 'Peripherals',
      icon: '🖱️'
    }
  ];

  const equipment = [
    {
      id: 1,
      name: 'High-Performance Workstation',
      category: 'computers',
      description: 'Professional-grade workstation for development and design work',
      specs: {
        processor: 'Intel Core i9-12900K',
        memory: '32GB DDR4',
        storage: '1TB NVMe SSD',
        graphics: 'NVIDIA RTX 3080'
      },
      location: 'New York',
      availability: 'Available',
      price: '$2,499',
      leasePrice: '$199/month',
      image: '💻'
    },
    {
      id: 2,
      name: 'Enterprise Server',
      category: 'servers',
      description: 'Dell PowerEdge server for business applications',
      specs: {
        processor: 'Intel Xeon E5-2680 v4',
        memory: '64GB ECC DDR4',
        storage: '2TB RAID 1',
        network: 'Dual 10GbE'
      },
      location: 'California',
      availability: 'Available',
      price: '$4,999',
      leasePrice: '$399/month',
      image: '🖥️'
    },
    {
      id: 3,
      name: 'Network Switch',
      category: 'networking',
      description: 'Cisco Catalyst 48-port managed switch',
      specs: {
        ports: '48 x 1GbE + 4 x 10GbE',
        power: 'PoE+',
        management: 'Web-based',
        security: '802.1X, ACLs'
      },
      location: 'Texas',
      availability: 'Available',
      price: '$1,299',
      leasePrice: '$99/month',
      image: '🌐'
    },
    {
      id: 4,
      name: 'Mobile Development Kit',
      category: 'mobile',
      description: 'Complete mobile testing and development setup',
      specs: {
        devices: 'iPhone, Android, iPad',
        tools: 'Xcode, Android Studio',
        accessories: 'Cables, adapters, stands',
        software: 'Development licenses'
      },
      location: 'Florida',
      availability: 'Available',
      price: '$899',
      leasePrice: '$79/month',
      image: '📱'
    },
    {
      id: 5,
      name: 'Professional Monitor',
      category: 'peripherals',
      description: '4K Ultra HD monitor for design and development',
      specs: {
        resolution: '3840 x 2160',
        size: '27 inches',
        color: '100% sRGB',
        ports: 'HDMI, DisplayPort, USB-C'
      },
      location: 'Illinois',
      availability: 'Available',
      price: '$599',
      leasePrice: '$49/month',
      image: '🖥️'
    },
    {
      id: 6,
      name: 'Data Storage Array',
      category: 'servers',
      description: 'High-capacity storage solution for data centers',
      specs: {
        capacity: '100TB',
        drives: '12 x 8TB HDDs',
        raid: 'RAID 6',
        connectivity: 'SAS, iSCSI, FC'
      },
      location: 'Washington',
      availability: 'Available',
      price: '$8,999',
      leasePrice: '$699/month',
      image: '💾'
    }
  ];

  const filteredEquipment = equipment.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <SEO 
        title="Equipment & Technology Resources - Zion Tech Group"
        description="Browse our selection of high-quality technology equipment available for lease or purchase. From workstations to servers, find the perfect solution for your business needs."
        canonical="/equipment"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
        <main className="pt-12">
          <div className="container mx-auto px-4 py-16">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Equipment & Technology Resources
              </h1>
              <p className="text-xl text-blue-100 max-w-4xl mx-auto">
                Access high-quality technology equipment through flexible leasing options or direct purchase. 
                From workstations to enterprise servers, we provide the tools you need to succeed.
              </p>
            </div>

            {/* Search and Filters */}
            <div className="mb-12">
              <div className="max-w-4xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Search */}
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search equipment..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    <svg className="absolute right-3 top-3 w-5 h-5 text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>

                  {/* Category Filter */}
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                  >
                    {equipmentCategories.map((category) => (
                      <option key={category.id} value={category.id}>
                        {category.icon} {category.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Equipment Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {filteredEquipment.map((item) => (
                <div key={item.id} className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-6 hover:bg-white/20 transition-colors duration-200">
                  <div className="text-6xl mb-4 text-center">{item.image}</div>
                  
                  <h3 className="text-xl font-semibold text-white mb-2 text-center">
                    {item.name}
                  </h3>
                  
                  <p className="text-blue-100 mb-4 text-sm text-center">
                    {item.description}
                  </p>

                  <div className="mb-4">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                      item.availability === 'Available' 
                        ? 'bg-green-600/30 text-green-200' 
                        : 'bg-red-600/30 text-red-200'
                    }`}>
                      {item.availability}
                    </span>
                  </div>

                  {/* Specifications */}
                  <div className="mb-4">
                    <h4 className="text-white font-medium mb-2 text-sm">Specifications:</h4>
                    <div className="space-y-1">
                      {Object.entries(item.specs).map(([key, value]) => (
                        <div key={key} className="flex justify-between text-xs">
                          <span className="text-blue-200 capitalize">{key}:</span>
                          <span className="text-white">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Location */}
                  <div className="mb-4 text-center">
                    <span className="text-blue-200 text-sm">
                      📍 {item.location}
                    </span>
                  </div>

                  {/* Pricing */}
                  <div className="mb-6 text-center">
                    <div className="text-2xl font-bold text-white mb-1">
                      {item.price}
                    </div>
                    <div className="text-blue-200 text-sm">
                      Lease: {item.leasePrice}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2">
                    <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200 text-sm">
                      Purchase
                    </button>
                    <button className="flex-1 border border-white/30 hover:bg-white/10 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200 text-sm">
                      Lease
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* No Results */}
            {filteredEquipment.length === 0 && (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  No equipment found
                </h3>
                <p className="text-blue-100">
                  Try adjusting your search criteria or contact us for custom solutions.
                </p>
              </div>
            )}

            {/* Call to Action */}
            <div className="mt-20 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-8 text-center">
                <h2 className="text-3xl font-semibold text-white mb-4">
                  Need Custom Equipment Solutions?
                </h2>
                <p className="text-blue-100 mb-6 text-lg">
                  We can source and configure custom equipment packages tailored to your specific requirements. 
                  Get in touch to discuss your needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/contact"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-medium transition-colors duration-200 text-lg"
                  >
                    Contact Us
                  </a>
                  <a
                    href="/request-quote"
                    className="border border-white/30 hover:bg-white/10 text-white px-8 py-4 rounded-lg font-medium transition-colors duration-200 text-lg"
                  >
                    Request Custom Quote
                  </a>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default EquipmentPage;