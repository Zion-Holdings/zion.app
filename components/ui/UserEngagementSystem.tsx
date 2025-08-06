import { useState, useEffect, useCallback } from 'react'
import { useNotifications } from './NotificationSystem'

interface UserEngagementSystemProps {
  onUserAction?: (action: string, data?: any) => void
}

const UserEngagementSystem = ({ onUserAction }: UserEngagementSystemProps) => {
  const { addNotification } = useNotifications()
  const [userActivity, setUserActivity] = useState({
    timeOnPage: 0,
    interactions: 0,
    lastAction: null as string | null
  })
  const [showFeedback, setShowFeedback] = useState(false)
  const [feedbackRating, setFeedbackRating] = useState(0)
  const [feedbackComment, setFeedbackComment] = useState('')

  // Track user activity
  useEffect(() => {
    const interval = setInterval(() => {
      setUserActivity(prev => ({
        ...prev,
        timeOnPage: prev.timeOnPage + 1
      }))
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  // Show engagement prompts based on user activity
  useEffect(() => {
    if (userActivity.timeOnPage === 30) {
      addNotification({
        type: 'info',
        title: 'Discover More',
        message: 'Explore our AI-powered services and find the perfect solution for your needs.',
        duration: 8000,
        action: {
          label: 'Explore Services',
          onClick: () => {
            onUserAction?.('explore_services')
            window.location.href = '/services'
          }
        }
      })
    }

    if (userActivity.timeOnPage === 60) {
      addNotification({
        type: 'success',
        title: 'Welcome to Zion!',
        message: 'You\'ve been exploring for a minute. Ready to get started?',
        duration: 10000,
        action: {
          label: 'Get Started',
          onClick: () => {
            onUserAction?.('get_started')
            window.location.href = '/auth'
          }
        }
      })
    }
  }, [userActivity.timeOnPage, addNotification, onUserAction])

  const handleInteraction = useCallback((action: string) => {
    setUserActivity(prev => ({
      ...prev,
      interactions: prev.interactions + 1,
      lastAction: action
    }))

    onUserAction?.(action)
  }, [onUserAction])

  const handleFeedbackSubmit = () => {
    if (feedbackRating > 0) {
      addNotification({
        type: 'success',
        title: 'Thank You!',
        message: 'Your feedback helps us improve. We appreciate your input!',
        duration: 5000
      })

      onUserAction?.('feedback_submitted', {
        rating: feedbackRating,
        comment: feedbackComment
      })

      setShowFeedback(false)
      setFeedbackRating(0)
      setFeedbackComment('')
    }
  }

  const showQuickActions = () => {
    addNotification({
      type: 'info',
      title: 'Quick Actions',
      message: 'Need help? Try our quick actions below.',
      duration: 0,
      dismissible: false
    })
  }

  return (
    <>
      {/* Floating Quick Actions */}
      <div className="fixed bottom-8 left-8 z-50 flex flex-col gap-4">
        {/* Help Button */}
        <button
          onClick={showQuickActions}
          className="w-12 h-12 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full shadow-lg hover:shadow-neon-blue/50 transition-all duration-300 transform hover:scale-110 flex items-center justify-center"
        >
          <span className="text-white text-lg">❓</span>
        </button>

        {/* Feedback Button */}
        <button
          onClick={() => setShowFeedback(true)}
          className="w-12 h-12 bg-gradient-to-r from-neon-green to-neon-blue rounded-full shadow-lg hover:shadow-neon-green/50 transition-all duration-300 transform hover:scale-110 flex items-center justify-center"
        >
          <span className="text-white text-lg">💬</span>
        </button>

        {/* Activity Indicator */}
        <div className="w-12 h-12 bg-black/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/10">
          <div className="w-6 h-6 border-2 border-neon-blue/50 border-t-neon-blue rounded-full animate-spin"></div>
        </div>
      </div>

      {/* Feedback Modal */}
      {showFeedback && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-black/90 border border-gray-600/50 rounded-lg p-6 w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-white text-lg font-semibold">Share Your Feedback</h3>
              <button 
                onClick={() => setShowFeedback(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Rating */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                How would you rate your experience?
              </label>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    onClick={() => setFeedbackRating(star)}
                    className={`text-2xl transition-colors ${
                      star <= feedbackRating ? 'text-yellow-400' : 'text-gray-400'
                    }`}
                  >
                    ★
                  </button>
                ))}
              </div>
            </div>

            {/* Comment */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Additional comments (optional)
              </label>
              <textarea
                value={feedbackComment}
                onChange={(e) => setFeedbackComment(e.target.value)}
                className="w-full px-3 py-2 border border-gray-600 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-neon-blue/50 focus:border-neon-blue/50"
                placeholder="Tell us more about your experience..."
                rows={3}
              />
            </div>

            {/* Submit Button */}
            <button
              onClick={handleFeedbackSubmit}
              disabled={feedbackRating === 0}
              className="w-full bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-purple hover:to-neon-pink px-4 py-2 rounded-lg text-white font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Submit Feedback
            </button>
          </div>
        </div>
      )}

      {/* Interactive Elements */}
      <div className="hidden">
        {/* These elements are hidden but track user interactions */}
        <button onClick={() => handleInteraction('service_click')} />
        <button onClick={() => handleInteraction('talent_click')} />
        <button onClick={() => handleInteraction('product_click')} />
        <button onClick={() => handleInteraction('auth_click')} />
      </div>
    </>
  )
}

export default UserEngagementSystem
