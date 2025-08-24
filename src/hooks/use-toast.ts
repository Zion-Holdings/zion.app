<<<<<<< HEAD
import React, { useState } from 'react'
=======
import { useState, useRef, useEffect } from 'react'
>>>>>>> 2d0a9714a42cb6b8a431feb1f9dc2a642983276c

interface Toast {
  id: string
  title?: string
  description?: string
<<<<<<< HEAD
  variant?: 'default' | 'destructive' | 'success'
=======
  action?: React.ReactNode
>>>>>>> 2d0a9714a42cb6b8a431feb1f9dc2a642983276c
}

export function useToast() {
  const [toasts, setToasts] = useState<Toast[]>([])
<<<<<<< HEAD

  const toast = ({ title, description, variant = 'default' }: Omit<Toast, 'id'>) => {
    const id = Math.random().toString(36).substr(2, 9)
    const newToast: Toast = { id, title, description, variant }
    
    setToasts(prev => [...prev, newToast])
    
    // Auto remove after 5 seconds
    setTimeout(() => {
      setToasts(prev => prev.filter(toast => toast.id !== id))
=======
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
>>>>>>> 2d0a9714a42cb6b8a431feb1f9dc2a642983276c
    }, 5000)
    
    return id
  }

<<<<<<< HEAD
  const dismiss = (id: string) => {
    setToasts(prev => prev.filter(toast => toast.id !== id))
=======
  function dismiss(toastId?: string) {
    if (toastId) {
      const currentToasts = toastsRef.current
      const filteredToasts = currentToasts.filter((toast) => toast.id !== toastId)
      setToasts(filteredToasts)
    } else {
      setToasts([])
    }
>>>>>>> 2d0a9714a42cb6b8a431feb1f9dc2a642983276c
  }

  return {
    toasts,
    toast,
<<<<<<< HEAD
    dismiss
=======
    dismiss,
>>>>>>> 2d0a9714a42cb6b8a431feb1f9dc2a642983276c
  }
}