import { useState, useRef, useEffect } from 'react'

interface Toast {
  id: string
  title?: string
  description?: string
  action?: React.ReactNode
}

export function useToast() {
  const [toasts, setToasts] = useState<Toast[]>([])
  const toastsRef = useRef<Toast[]>([])
  
  useEffect(() => {
    toastsRef.current = toasts
  }, [toasts])

  function toast({ title, description, action }: Omit<Toast, 'id'>) {
    const id = Math.random().toString(36).substr(2, 9)
    const newToast = { id, title, description, action }
    
    setToasts([...toasts, newToast])
    
    // Auto remove after 5 seconds
    setTimeout(() => {
      const currentToasts = toastsRef.current
      const filteredToasts = currentToasts.filter((toast) => toast.id !== id)
      setToasts(filteredToasts)
    }, 5000)
    
    return id
  }

  function dismiss(toastId?: string) {
    if (toastId) {
      const currentToasts = toastsRef.current
      const filteredToasts = currentToasts.filter((toast) => toast.id !== toastId)
      setToasts(filteredToasts)
    } else {
      setToasts([])
    }
  }

  return {
    toasts,
    toast,
    dismiss,
  }
}