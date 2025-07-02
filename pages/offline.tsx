import Head from 'next/head'
import { motion } from 'framer-motion'
import { WifiOff, RefreshCw, Home, ShoppingCart, Clock, Bookmark, Search } from 'lucide-react';







import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import {logErrorToProduction} from '@/utils/productionLogger'

export default function OfflinePage() {

  const [isOnline, setIsOnline] = useState(false)
  const [lastUpdate, setLastUpdate] = useState<string>('')
  const [retryCount, setRetryCount] = useState(0)

  useEffect(() => {
    // Check online status
    const updateOnlineStatus = () => {
      setIsOnline(navigator.onLine)
      if (navigator.onLine) {
        setLastUpdate(new Date().toLocaleTimeString())
      }
    }

    // Set initial status
    updateOnlineStatus()

    // Listen for online/offline events
    window.addEventListener('online', updateOnlineStatus)
    window.addEventListener('offline', updateOnlineStatus)

    return () => {
      window.removeEventListener('online', updateOnlineStatus)
      window.removeEventListener('offline', updateOnlineStatus)
    }
  }, [])

  const handleRetry = () => {
    try {
      setRetryCount(prev => prev + 1)
      window.location.reload()
    } catch (err) {
      logErrorToProduction('Failed to reload page', err)
    }
  }

  const quickActions = [
    {
      title: 'Browse Cached Equipment',
      description: 'View recently visited equipment listings',
      icon: Search,
      href: '/equipment',
      available: true
    },
    {
      title: 'View Bookmarks',
      description: 'Access your saved items',
      icon: Bookmark,
      href: '/bookmarks',
      available: true
    },
    {
      title: 'Visit Marketplace',
      description: 'Browse all available services and gear',
      icon: ShoppingCart,
      href: '/marketplace',
      available: true
    },
    {
      title: 'Go to Homepage',
      description: 'Return to the main page',
      icon: Home,
      href: '/',
      available: true
    }
  ]

  return (
    <>
      <Head>
        <title>You're Offline - Zion Tech Marketplace</title>
        <meta name="description" content="You're currently offline. Some features may not be available." />
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900">
        <div className="container mx-auto px-4 py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            {/* Connection Status */}
            <div className="mb-6">
              <motion.div
                animate={isOnline ? { scale: [1, 1.1, 1] } : { rotate: [0, -10, 10, -10, 0] }}
                transition={{ duration: isOnline ? 0.6 : 2, repeat: isOnline ? 1 : Infinity }}
                className={`mx-auto w-24 h-24 rounded-full flex items-center justify-center mb-4 ${
                  isOnline 
                    ? 'bg-green-100 dark:bg-green-900/20' 
                    : 'bg-orange-100 dark:bg-orange-900/20'
                }`}
              >
                <WifiOff className={`w-12 h-12 ${
                  isOnline ? 'text-green-600' : 'text-orange-600'
                }`} />
              </motion.div>
              
              <Badge 
                variant={isOnline ? "default" : "secondary"}
                className="text-sm px-3 py-1"
              >
                {isOnline ? 'Connection Restored' : 'Offline Mode'}
              </Badge>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {isOnline ? 'You\'re Back Online!' : 'You\'re Offline'}
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
              {isOnline 
                ? 'Your internet connection has been restored. You can now access all features.'
                : 'No internet connection detected. Don\'t worry - you can still access cached content and use offline features.'
              }
            </p>

            {lastUpdate && (
              <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
                <Clock className="w-4 h-4" />
                Last updated: {lastUpdate}
              </p>
            )}
          </motion.div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              onClick={handleRetry}
              size="lg"
              className="flex items-center gap-2"
              disabled={isOnline}
            >
              <RefreshCw className="w-5 h-5" />
              {retryCount > 0 ? `Retry (${retryCount})` : 'Try Again'}
            </Button>
            
          <Button
            asChild
            variant="outline"
            size="lg"
            className="flex items-center gap-2"
          >
            <Link href="/">
              <Home className="w-5 h-5" />
              Go to Homepage
            </Link>
          </Button>

          <Button
            asChild
            variant="outline"
            size="lg"
            className="flex items-center gap-2"
          >
            <Link href="/marketplace">
              <ShoppingCart className="w-5 h-5" />
              Go to Marketplace
            </Link>
          </Button>
        </div>

          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 className="text-2xl font-bold text-center mb-8">Available Offline Features</h2>
            
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {quickActions.map((action, index) => (
                <motion.div
                  key={action.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                >
                  <Card className={`h-full transition-all duration-300 hover:shadow-lg ${
                    action.available 
                      ? 'hover:scale-105 cursor-pointer' 
                      : 'opacity-60 cursor-not-allowed'
                  }`}>
                    <CardHeader className="text-center">
                      <div className={`mx-auto w-12 h-12 rounded-full flex items-center justify-center mb-3 ${
                        action.available 
                          ? 'bg-blue-100 dark:bg-blue-900/20' 
                          : 'bg-gray-100 dark:bg-gray-800'
                      }`}>
                        <action.icon className={`w-6 h-6 ${
                          action.available 
                            ? 'text-blue-600 dark:text-blue-400' 
                            : 'text-gray-400'
                        }`} />
                      </div>
                      <CardTitle className="text-lg">{action.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                      <p className="text-muted-foreground mb-4">{action.description}</p>
                      {action.available ? (
                        <Button asChild variant="outline" size="sm" className="w-full">
                          <Link href={action.href}>
                            Access
                          </Link>
                        </Button>
                      ) : (
                        <Button disabled size="sm" className="w-full">
                          Requires Internet
                        </Button>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Tips Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-16"
          >
            <Card className="max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle className="text-center">💡 Offline Tips</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-2">
                    <span className="text-blue-600 font-semibold">•</span>
                    <span>Recently viewed pages are cached and available offline</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-blue-600 font-semibold">•</span>
                    <span>Your bookmarks and saved items can be accessed anytime</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-blue-600 font-semibold">•</span>
                    <span>Form submissions will be synced when you reconnect</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-blue-600 font-semibold">•</span>
                    <span>Check your internet connection and try refreshing the page</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Auto-refresh when online */}
          {isOnline && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="fixed bottom-6 right-6 z-50"
            >
              <Card className="bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-800">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium text-green-700 dark:text-green-300">
                      Connection restored
                    </span>
                    <Button
                      size="sm"
                      onClick={() => window.location.reload()}
                      className="bg-green-600 hover:bg-green-700"
                    >
                      Refresh
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </div>
      </div>
    </>
  )
} 