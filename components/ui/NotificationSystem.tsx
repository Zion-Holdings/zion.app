import { useState, useEffect } from 'react'

interface Notification {
  id: string
  type: 'success' | 'error' | 'warning' | 'info'
  title: string
  message: string
  duration?: number
  action?: {
    label: string
    onClick: () => void
  }
}

interface NotificationSystemProps {
  notifications: Notification[]
  onRemove: (id: string) => void
}

const NotificationSystem = ({ notifications, onRemove }: NotificationSystemProps) => {
  const getNotificationStyles = (type: string) => {
    switch (type) {
      case 'success':
        return {
          bg: 'bg-green-500/20',
          border: 'border-green-500/30',
          icon: '✅',
          text: 'text-green-400',
          glow: 'shadow-green-500/25'
        }
      case 'error':
        return {
          bg: 'bg-red-500/20',
          border: 'border-red-500/30',
          icon: '❌',
          text: 'text-red-400',
          glow: 'shadow-red-500/25'
        }
      case 'warning':
        return {
          bg: 'bg-yellow-500/20',
          border: 'border-yellow-500/30',
          icon: '⚠️',
          text: 'text-yellow-400',
          glow: 'shadow-yellow-500/25'
        }
      case 'info':
        return {
          bg: 'bg-blue-500/20',
          border: 'border-blue-500/30',
          icon: 'ℹ️',
          text: 'text-blue-400',
          glow: 'shadow-blue-500/25'
        }
      default:
        return {
          bg: 'bg-gray-500/20',
          border: 'border-gray-500/30',
          icon: '📢',
          text: 'text-gray-400',
          glow: 'shadow-gray-500/25'
        }
    }
  }

  return (
    <div className="fixed top-20 right-4 z-50 space-y-2">
      {notifications.map((notification) => {
        const styles = getNotificationStyles(notification.type)
        
        return (
          <div
            key={notification.id}
            className={`${styles.bg} ${styles.border} border rounded-lg p-4 backdrop-blur-md shadow-lg ${styles.glow} animate-slide-in-right max-w-sm`}
          >
            <div className="flex items-start gap-3">
              <div className="text-xl">{styles.icon}</div>
              <div className="flex-1 min-w-0">
                <h4 className={`font-semibold ${styles.text} mb-1`}>
                  {notification.title}
                </h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {notification.message}
                </p>
                {notification.action && (
                  <button
                    onClick={notification.action.onClick}
                    className="mt-2 text-xs bg-white/10 hover:bg-white/20 px-3 py-1 rounded transition-colors"
                  >
                    {notification.action.label}
                  </button>
                )}
              </div>
              <button
                onClick={() => onRemove(notification.id)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                ✕
              </button>
            </div>
          </div>
        )
      })}
    </div>
  )
}

// Hook for managing notifications
export const useNotifications = () => {
  const [notifications, setNotifications] = useState<Notification[]>([])

  const addNotification = (notification: Omit<Notification, 'id'>) => {
    const id = Math.random().toString(36).substr(2, 9)
    const newNotification = { ...notification, id }
    
    setNotifications(prev => [...prev, newNotification])

    // Auto-remove after duration (default 5 seconds)
    const duration = notification.duration || 5000
    setTimeout(() => {
      removeNotification(id)
    }, duration)
  }

  const removeNotification = (id: string) => {
    setNotifications(prev => prev.filter(n => n.id !== id))
  }

  const clearAll = () => {
    setNotifications([])
  }

  return {
    notifications,
    addNotification,
    removeNotification,
    clearAll
  }
}

// Predefined notification functions
export const createSuccessNotification = (title: string, message: string, action?: { label: string; onClick: () => void }) => ({
  type: 'success' as const,
  title,
  message,
  action
})

export const createErrorNotification = (title: string, message: string, action?: { label: string; onClick: () => void }) => ({
  type: 'error' as const,
  title,
  message,
  action
})

export const createWarningNotification = (title: string, message: string, action?: { label: string; onClick: () => void }) => ({
  type: 'warning' as const,
  title,
  message,
  action
})

export const createInfoNotification = (title: string, message: string, action?: { label: string; onClick: () => void }) => ({
  type: 'info' as const,
  title,
  message,
  action
})

export default NotificationSystem
