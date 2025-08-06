import { useState, useEffect } from 'react'

interface LoadingProps {
  type?: 'spinner' | 'dots' | 'pulse' | 'skeleton' | 'progress'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  text?: string
  progress?: number
  showPercentage?: boolean
}

const EnhancedLoading = ({ 
  type = 'spinner', 
  size = 'md', 
  text = 'Loading...',
  progress,
  showPercentage = false 
}: LoadingProps) => {
  const [dots, setDots] = useState('')

  useEffect(() => {
    if (type === 'dots') {
      const interval = setInterval(() => {
        setDots(prev => prev.length >= 3 ? '' : prev + '.')
      }, 500)
      return () => clearInterval(interval)
    }
  }, [type])

  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  }

  const textSizes = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base',
    xl: 'text-lg'
  }

  const renderLoader = () => {
    switch (type) {
      case 'spinner':
        return (
          <div className={`${sizeClasses[size]} border-2 border-gray-600 border-t-purple-500 rounded-full animate-spin`}></div>
        )
      
      case 'dots':
        return (
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          </div>
        )
      
      case 'pulse':
        return (
          <div className={`${sizeClasses[size]} bg-purple-500 rounded-full animate-pulse`}></div>
        )
      
      case 'skeleton':
        return (
          <div className="space-y-3">
            <div className="h-4 bg-gray-700 rounded animate-pulse"></div>
            <div className="h-4 bg-gray-700 rounded animate-pulse" style={{ width: '80%' }}></div>
            <div className="h-4 bg-gray-700 rounded animate-pulse" style={{ width: '60%' }}></div>
          </div>
        )
      
      case 'progress':
        return (
          <div className="w-full max-w-md">
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${progress || 0}%` }}
              ></div>
            </div>
            {showPercentage && (
              <div className="text-center mt-2 text-sm text-gray-400">
                {progress || 0}%
              </div>
            )}
          </div>
        )
      
      default:
        return (
          <div className={`${sizeClasses[size]} border-2 border-gray-600 border-t-purple-500 rounded-full animate-spin`}></div>
        )
    }
  }

  return (
    <div className="flex flex-col items-center justify-center gap-4 p-8">
      {renderLoader()}
      {text && (
        <div className={`text-gray-400 ${textSizes[size]} text-center`}>
          {text}{type === 'dots' ? dots : ''}
        </div>
      )}
    </div>
  )
}

// Full screen loading overlay
interface LoadingOverlayProps extends LoadingProps {
  isVisible: boolean
  backdrop?: boolean
}

export const LoadingOverlay = ({ 
  isVisible, 
  backdrop = true, 
  ...props 
}: LoadingOverlayProps) => {
  if (!isVisible) return null

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center ${
      backdrop ? 'bg-black/50 backdrop-blur-sm' : ''
    }`}>
      <div className="bg-black/80 border border-white/20 rounded-lg p-8 backdrop-blur-md">
        <EnhancedLoading {...props} />
      </div>
    </div>
  )
}

// Page loading component
export const PageLoading = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <div className="text-center">
        <div className="text-6xl mb-8 animate-pulse">🚀</div>
        <h1 className="text-2xl font-bold text-white mb-4">Zion</h1>
        <p className="text-gray-400 mb-8">Loading your AI-powered marketplace...</p>
        <EnhancedLoading type="dots" size="lg" text="Initializing" />
      </div>
    </div>
  )
}

// Inline loading component
export const InlineLoading = ({ text = 'Loading...' }: { text?: string }) => {
  return (
    <div className="inline-flex items-center gap-2 text-gray-400">
      <div className="w-4 h-4 border-2 border-gray-600 border-t-purple-500 rounded-full animate-spin"></div>
      <span className="text-sm">{text}</span>
    </div>
  )
}

// Button loading state
export const ButtonLoading = ({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6'
  }

  return (
    <div className={`${sizeClasses[size]} border-2 border-white/30 border-t-white rounded-full animate-spin`}></div>
  )
}

export default EnhancedLoading
