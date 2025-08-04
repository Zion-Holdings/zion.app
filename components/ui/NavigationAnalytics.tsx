import React, { useState, useEffect } from 'react'
import { BarChart3, TrendingUp, Clock, Star, Users, Activity, X } from 'lucide-react'
import { useNavigation } from '../../src/contexts/NavigationContext'

interface NavigationAnalyticsProps {
  className?: string
}

interface NavigationMetric {
  path: string
  visits: number
  lastVisit: Date
  averageTime: number
}

const NavigationAnalytics: React.FC<NavigationAnalyticsProps> = ({ className = '' }) => {
  const { state } = useNavigation()
  const [metrics, setMetrics] = useState<NavigationMetric[]>([])
  const [isVisible, setIsVisible] = useState(false)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (!isClient) return

    // Load navigation analytics from localStorage
    const savedMetrics = localStorage.getItem('navigation-analytics')
    if (savedMetrics) {
      try {
        const parsed = JSON.parse(savedMetrics)
        setMetrics(parsed.map((m: any) => ({
          ...m,
          lastVisit: new Date(m.lastVisit)
        })))
      } catch (error) {
        console.error('Error loading navigation analytics:', error)
      }
    }
  }, [isClient])

  useEffect(() => {
    if (!isClient) return

    // Save analytics to localStorage
    localStorage.setItem('navigation-analytics', JSON.stringify(metrics))
  }, [metrics, isClient])

  const trackPageVisit = (path: string) => {
    const now = new Date()
    setMetrics(prev => {
      const existing = prev.find(m => m.path === path)
      if (existing) {
        return prev.map(m => 
          m.path === path 
            ? { 
                ...m, 
                visits: m.visits + 1, 
                lastVisit: now,
                averageTime: (m.averageTime + (now.getTime() - m.lastVisit.getTime())) / 2
              }
            : m
        )
      } else {
        return [...prev, { path, visits: 1, lastVisit: now, averageTime: 0 }]
      }
    })
  }

  const getMostVisitedPages = () => {
    return metrics
      .sort((a, b) => b.visits - a.visits)
      .slice(0, 5)
  }

  const getRecentlyVisitedPages = () => {
    return metrics
      .sort((a, b) => b.lastVisit.getTime() - a.lastVisit.getTime())
      .slice(0, 5)
  }

  const getAverageTimeOnSite = () => {
    if (metrics.length === 0) return 0
    const totalTime = metrics.reduce((sum, m) => sum + m.averageTime, 0)
    return Math.round(totalTime / metrics.length / 1000) // Convert to seconds
  }

  const getTotalVisits = () => {
    return metrics.reduce((sum, m) => sum + m.visits, 0)
  }

  const getUniquePages = () => {
    return metrics.length
  }

  // Don't render anything during SSR
  if (!isClient) return null

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={() => setIsVisible(false)}
      />
      
      {/* Analytics Panel */}
      <div className="relative w-full max-w-4xl bg-black/95 backdrop-blur-md border border-white/10 rounded-xl shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <div className="flex items-center space-x-3">
            <BarChart3 className="h-6 w-6 text-purple-400" />
            <h2 className="text-responsive-xl font-bold text-white">Navigation Analytics</h2>
          </div>
          <button
            onClick={() => setIsVisible(false)}
            className="p-2 text-gray-400 hover:text-white touch-target"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="p-6">
          {/* Overview Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <div className="p-4 bg-white/5 rounded-lg">
              <div className="flex items-center space-x-2">
                <Activity className="h-5 w-5 text-blue-400" />
                <span className="text-sm text-gray-400">Total Visits</span>
              </div>
              <div className="text-2xl font-bold text-white mt-2">{getTotalVisits()}</div>
            </div>
            
            <div className="p-4 bg-white/5 rounded-lg">
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-green-400" />
                <span className="text-sm text-gray-400">Unique Pages</span>
              </div>
              <div className="text-2xl font-bold text-white mt-2">{getUniquePages()}</div>
            </div>
            
            <div className="p-4 bg-white/5 rounded-lg">
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-yellow-400" />
                <span className="text-sm text-gray-400">Avg Time</span>
              </div>
              <div className="text-2xl font-bold text-white mt-2">{getAverageTimeOnSite()}s</div>
            </div>
            
            <div className="p-4 bg-white/5 rounded-lg">
              <div className="flex items-center space-x-2">
                <Star className="h-5 w-5 text-purple-400" />
                <span className="text-sm text-gray-400">Favorites</span>
              </div>
              <div className="text-2xl font-bold text-white mt-2">{state.favorites.length}</div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Most Visited Pages */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
                <TrendingUp className="h-5 w-5 text-green-400" />
                <span>Most Visited Pages</span>
              </h3>
              <div className="space-y-3">
                {getMostVisitedPages().map((metric, index) => (
                  <div key={metric.path} className="flex items-center justify-between p-3 rounded-lg bg-white/5">
                    <div className="flex items-center space-x-3">
                      <span className="text-sm font-mono text-gray-400">#{index + 1}</span>
                      <span className="text-gray-300">{metric.path}</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <span className="text-sm text-gray-400">{metric.visits} visits</span>
                      <span className="text-xs text-gray-500">
                        {new Date(metric.lastVisit).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recently Visited Pages */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
                <Clock className="h-5 w-5 text-blue-400" />
                <span>Recently Visited</span>
              </h3>
              <div className="space-y-3">
                {getRecentlyVisitedPages().map((metric, index) => (
                  <div key={metric.path} className="flex items-center justify-between p-3 rounded-lg bg-white/5">
                    <div className="flex items-center space-x-3">
                      <span className="text-sm font-mono text-gray-400">#{index + 1}</span>
                      <span className="text-gray-300">{metric.path}</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <span className="text-sm text-gray-400">{metric.visits} visits</span>
                      <span className="text-xs text-gray-500">
                        {new Date(metric.lastVisit).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Insights */}
          <div className="mt-8 p-4 bg-purple-500/10 border border-purple-500/20 rounded-lg">
            <h4 className="text-sm font-semibold text-purple-400 mb-2">Navigation Insights</h4>
            <ul className="text-sm text-gray-400 space-y-1">
              <li>• Your most visited page is {getMostVisitedPages()[0]?.path || 'none yet'}</li>
              <li>• You've visited {getUniquePages()} unique pages</li>
              <li>• Average time per page: {getAverageTimeOnSite()} seconds</li>
              <li>• You have {state.favorites.length} pages in favorites</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavigationAnalytics 