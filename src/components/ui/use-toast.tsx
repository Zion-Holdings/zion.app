import { useState } from 'react'

interface Toast {
  id: string
  title: string
  description?: string
  type?: 'success' | 'error' | 'warning' | 'info'
  duration?: number
}

interface ToastOptions {
  title: string
  description?: string
  type?: 'success' | 'error' | 'warning' | 'info'
  duration?: number
}

export function useToast() {
  const [toasts, setToasts] = useState<Toast[]>([])

  const addToast = (options: ToastOptions) => {
    const id = Math.random().toString(36).substr(2, 9)
    const toast: Toast = {
      id,
      title: options.title,
      description: options.description,
      type: options.type || 'info',
      duration: options.duration || 5000
    }

    setToasts(prev => [...prev, toast])

    // Auto remove toast after duration
    setTimeout(() => {
      removeToast(id)
    }, toast.duration)

    return id
  }

  const removeToast = (id: string) => {
    setToasts(prev => prev.filter(toast => toast.id !== id))
  }

  const clearToasts = () => {
    setToasts([])
  }

  return {
    toasts,
    addToast,
    removeToast,
    clearToasts
  }
}