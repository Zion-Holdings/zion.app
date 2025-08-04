import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

interface NavigationProgressProps {
  className?: string
  color?: string
}

const NavigationProgress: React.FC<NavigationProgressProps> = ({ 
  className = '',
  color = 'from-purple-500 to-pink-500'
}) => {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleStart = () => {
      setIsLoading(true)
      setProgress(0)
    }

    const handleComplete = () => {
      setProgress(100)
      setTimeout(() => {
        setIsLoading(false)
        setProgress(0)
      }, 200)
    }

    const handleError = () => {
      setIsLoading(false)
      setProgress(0)
    }

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleComplete)
    router.events.on('routeChangeError', handleError)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleComplete)
      router.events.off('routeChangeError', handleError)
    }
  }, [router])

  useEffect(() => {
    if (isLoading && progress < 90) {
      const timer = setTimeout(() => {
        setProgress(prev => Math.min(prev + Math.random() * 15, 90))
      }, 100)
      return () => clearTimeout(timer)
    }
  }, [isLoading, progress])

  if (!isLoading && progress === 0) return null

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 ${className}`}>
      <div className="h-1 bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 ease-out"
           style={{ width: `${progress}%` }} />
    </div>
  )
}

export default NavigationProgress 