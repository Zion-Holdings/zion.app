import { useState, useEffect, createContext, useContext, ReactNode } from 'react'

export interface Notification {
  id: string
  type: 'success' | 'error' | 'warning' | 'info' | 'loading'
  title: string
  message: string
  duration?: number
  action?: {
    label: string
    onClick: () => void
  }
  dismissible?: boolean
  icon?: string
}

interface NotificationContextType {
  notifications: Notification[]
  addNotification: (notification: Omit<Notification, 'id'>) => void
  removeNotification: (id: string) => void
  clearAll: () => void
}

const NotificationContext = createContext<NotificationContextType | undefined>(undefined)

export const useNotifications = () => {
  const context = useContext(NotificationContext)
  if (!context) {
    throw new Error('useNotifications must be used within a NotificationProvider')
  }
  return context
}

interface NotificationProviderProps {
  children: ReactNode
}

export const NotificationProvider = ({ children }: NotificationProviderProps) => {
  const [notifications, setNotifications] = useState<Notification[]>([])

  const addNotification = (notification: Omit<Notification, 'id'>) => {
    const id = Math.random().toString(36).substr(2, 9)
    const newNotification = { ...notification, id }
    
    setNotifications(prev => [...prev, newNotification])

    // Auto-remove after duration (default: 5 seconds)
    if (notification.duration !== 0) {
      setTimeout(() => {
        removeNotification(id)
      }, notification.duration || 5000)
    }
  }

  const removeNotification = (id: string) => {
    setNotifications(prev => prev.filter(notification => notification.id !== id))
  }

  const clearAll = () => {
    setNotifications([])
  }

  return (
    <NotificationContext.Provider value={{ notifications, addNotification, removeNotification, clearAll }}>
      {children}
      <NotificationContainer />
    </NotificationContext.Provider>
  )
}

const NotificationContainer = () => {
  const { notifications, removeNotification } = useNotifications()

  const getNotificationStyles = (type: Notification['type']) => {
    const baseStyles = 'relative overflow-hidden rounded-lg shadow-lg border-l-4 p-4 mb-4 transform transition-all duration-300'
    
    switch (type) {
      case 'success':
        return `${baseStyles} bg-green-900/90 border-green-500 text-green-100`
      case 'error':
        return `${baseStyles} bg-red-900/90 border-red-500 text-red-100`
      case 'warning':
        return `${baseStyles} bg-yellow-900/90 border-yellow-500 text-yellow-100`
      case 'info':
        return `${baseStyles} bg-blue-900/90 border-blue-500 text-blue-100`
      case 'loading':
        return `${baseStyles} bg-purple-900/90 border-purple-500 text-purple-100`
      default:
        return `${baseStyles} bg-gray-900/90 border-gray-500 text-gray-100`
    }
  }

  const getIcon = (type: Notification['type'], customIcon?: string) => {
    if (customIcon) return customIcon
    
    switch (type) {
      case 'success':
        return '✅'
      case 'error':
        return '❌'
      case 'warning':
        return '⚠️'
      case 'info':
        return 'ℹ️'
      case 'loading':
        return '⏳'
      default:
        return '📢'
    }
  }

  return (
    <div className="fixed top-4 right-4 z-50 w-96 max-h-screen overflow-y-auto">
      {notifications.map((notification, index) => (
        <div
          key={notification.id}
          className={`${getNotificationStyles(notification.type)} animate-slide-in`}
          style={{
            animationDelay: `${index * 100}ms`,
            transform: 'translateX(100%)',
            animation: 'slideIn 0.3s ease-out forwards'
          }}
        >
          {/* Progress Bar for timed notifications */}
          {notification.duration && notification.duration > 0 && (
            <div className="absolute top-0 left-0 h-1 bg-white/20 w-full">
              <div 
                className="h-full bg-white/40 transition-all duration-100"
                style={{
                  width: '100%',
                  animation: `shrink ${notification.duration}ms linear forwards`
                }}
              />
            </div>
          )}

          <div className="flex items-start space-x-3">
            {/* Icon */}
            <div className="flex-shrink-0 text-xl">
              {getIcon(notification.type, notification.icon)}
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <h4 className="text-sm font-semibold mb-1">
                {notification.title}
              </h4>
              <p className="text-sm opacity-90">
                {notification.message}
              </p>
              
              {/* Action Button */}
              {notification.action && (
                <button
                  onClick={notification.action.onClick}
                  className="mt-2 text-xs font-medium hover:opacity-80 transition-opacity"
                >
                  {notification.action.label}
                </button>
              )}
            </div>

            {/* Dismiss Button */}
            {notification.dismissible !== false && (
              <button
                onClick={() => removeNotification(notification.id)}
                className="flex-shrink-0 text-lg opacity-60 hover:opacity-100 transition-opacity"
              >
                ×
              </button>
            )}
          </div>

          {/* Loading Animation */}
          {notification.type === 'loading' && (
            <div className="absolute bottom-0 left-0 h-1 bg-white/20 w-full">
              <div className="h-full bg-white/40 animate-pulse" style={{ width: '30%' }} />
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

// CSS Animations
const styles = `
  @keyframes slideIn {
    from {
      transform: translateX(100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @keyframes shrink {
    from {
      width: 100%;
    }
    to {
      width: 0%;
    }
  }

  .animate-slide-in {
    animation: slideIn 0.3s ease-out forwards;
  }
`

// Add styles to document head
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style')
  styleSheet.textContent = styles
  document.head.appendChild(styleSheet)
}

export default NotificationContainer
