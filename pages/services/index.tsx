import React from 'react';
import { useNavigation } from '../../hooks/useNavigation';
import SmartSidebar from '../../components/SmartSidebar';
import Link from 'next/link';

export default function ServicesPage() {
  const { navigation, isLoading, error } = useNavigation();

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
        <div className="flex">
          <SmartSidebar pageType="services" className="w-64" />
          <div className="flex-1 p-8">
            <div className="animate-pulse space-y-4">
              <div className="h-8 bg-white/20 rounded w-1/3"></div>
              <div className="h-4 bg-white/20 rounded w-1/2"></div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[...Array(9)].map((_, i) => (
                  <div key={i} className="bg-white/10 rounded-2xl p-6 space-y-4">
                    <div className="h-6 bg-white/20 rounded w-3/4"></div>
                    <div className="h-4 bg-white/20 rounded w-full"></div>
                    <div className="h-4 bg-white/20 rounded w-2/3"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-2xl font-bold mb-4">Error Loading Services</h1>
          <p className="text-white/70">{error}</p>
        </div>
      </div>
    );
  }

  if (!navigation) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-2xl font-bold mb-4">No Services Available</h1>
          <p className="text-white/70">Please check back later.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
      <div className="flex">
        <SmartSidebar pageType="services" className="w-64" />
        
        <div className="flex-1 p-8">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-white mb-4">AI Services</h1>
            <p className="text-xl text-white/70 mb-6">
              Discover cutting-edge AI services and solutions powered by autonomous AI agents
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-white">{navigation.services.length}</div>
                <div className="text-white/60 text-sm">Total Services</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-white">{navigation.categories.length}</div>
                <div className="text-white/60 text-sm">Categories</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-white">
                  {navigation.services.filter(s => s.status === 'active').length}
                </div>
                <div className="text-white/60 text-sm">Active Services</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-white">
                  {navigation.services.filter(s => s.status === 'beta').length}
                </div>
                <div className="text-white/60 text-sm">Beta Services</div>
              </div>
            </div>
          </div>

          {/* Services Grid */}
          <div className="space-y-8">
            {navigation.categories.map(category => {
              const categoryServices = navigation.services.filter(s => s.category === category.name);
              
              return (
                <div key={category.id} className="space-y-6">
                  <div className="text-center">
                    <h2 className="text-3xl font-bold text-white mb-2 flex items-center justify-center gap-3">
                      <span>{category.icon}</span>
                      {category.name}
                    </h2>
                    <p className="text-white/70 text-lg">{category.description}</p>
                    <div className="mt-2 text-white/50 text-sm">
                      {categoryServices.length} service{categoryServices.length !== 1 ? 's' : ''} available
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categoryServices.map(service => (
                      <div 
                        key={service.id} 
                        className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:border-blue-400/50 transition-all duration-300 hover:transform hover:scale-105"
                      >
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex-1">
                            <h3 className="text-xl font-bold text-white mb-2">{service.label}</h3>
                            <p className="text-white/70 text-sm mb-3">{service.description}</p>
                          </div>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            service.status === 'active' ? 'bg-green-500/20 text-green-300' :
                            service.status === 'beta' ? 'bg-yellow-500/20 text-yellow-300' :
                            'bg-blue-500/20 text-blue-300'
                          }`}>
                            {service.status}
                          </span>
                        </div>
                        
                        <div className="mb-4">
                          <div className="text-white/60 text-sm mb-2">Technology Stack:</div>
                          <div className="flex flex-wrap gap-2">
                            {service.technologyStack?.map(tech => (
                              <span key={tech} className="px-2 py-1 bg-white/10 rounded text-xs text-white/80">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        <div className="mb-4">
                          <div className="text-white/60 text-sm mb-2">Key Features:</div>
                          <ul className="text-white/80 text-sm space-y-1">
                            <li className="flex items-center">
                              <span className="text-blue-400 mr-2">•</span>
                              {service.description?.split(' ').slice(0, 4).join(' ')}...
                            </li>
                            <li className="flex items-center">
                              <span className="text-blue-400 mr-2">•</span>
                              Advanced AI capabilities
                            </li>
                            <li className="flex items-center">
                              <span className="text-blue-400 mr-2">•</span>
                              Enterprise ready
                            </li>
                          </ul>
                        </div>
                        
                        <div className="mb-4">
                          <div className="text-white/60 text-sm mb-2">Pricing:</div>
                          <div className="text-white font-medium">{service.pricing}</div>
                        </div>
                        
                        <div className="mb-4">
                          <div className="text-white/60 text-sm mb-2">Performance:</div>
                          <div className="grid grid-cols-3 gap-2 text-xs">
                            <div className="text-center">
                              <div className="text-white font-medium">{service.performance?.uptime}</div>
                              <div className="text-white/60">Uptime</div>
                            </div>
                            <div className="text-center">
                              <div className="text-white font-medium">{service.performance?.response}</div>
                              <div className="text-white/60">Response</div>
                            </div>
                            <div className="text-center">
                              <div className="text-white font-medium">{service.performance?.users}</div>
                              <div className="text-white/60">Users</div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex space-x-2">
                          <Link 
                            href={service.href}
                            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-center py-2 px-4 rounded-lg text-sm font-medium transition-colors"
                          >
                            🚀 Demo
                          </Link>
                          <Link 
                            href={service.href.replace('/demo/', '/docs/')}
                            className="flex-1 bg-white/20 hover:bg-white/30 text-white text-center py-2 px-4 rounded-lg text-sm font-medium transition-colors"
                          >
                            📚 Docs
                          </Link>
                          <a 
                            href={`https://github.com/ai-factory/${service.id}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 bg-white/20 hover:bg-white/30 text-white text-center py-2 px-4 rounded-lg text-sm font-medium transition-colors"
                          >
                            💻 Code
                          </a>
                        </div>
                        
                        <div className="mt-4 pt-4 border-t border-white/20 text-center">
                          <div className="text-white/50 text-xs">
                            Last updated: {service.lastUpdated}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}


