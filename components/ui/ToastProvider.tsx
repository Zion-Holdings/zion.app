import React, { createContext, useCallback, useContext, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

export type ToastVariant = 'default' | 'success' | 'error' | 'info'

export type Toast = {
  id: string
  title?: string
  description?: string
  variant?: ToastVariant
  actionLabel?: string
  onAction?: () => void
  durationMs?: number
}

export type ToastContextValue = {
  toasts: Toast[]
  addToast: (toast: Omit<Toast, 'id'>) => string
  removeToast: (id: string) => void
  clearToasts: () => void
}

const ToastContext = createContext<ToastContextValue | undefined>(undefined)

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([])

  const removeToast = useCallback((id: string) => {
    setToasts(prev => prev.filter(t => t.id !== id))
  }, [])

  const addToast = useCallback((toast: Omit<Toast, 'id'>) => {
    const id = `${Date.now()}_${Math.random().toString(36).slice(2)}`
    const item: Toast = { id, variant: 'default', durationMs: 4000, ...toast }
    setToasts(prev => [...prev, item])
    if (item.durationMs && item.durationMs > 0) {
      setTimeout(() => removeToast(id), item.durationMs)
    }
    return id
  }, [removeToast])

  const clearToasts = useCallback(() => setToasts([]), [])

  const value = useMemo(() => ({ toasts, addToast, removeToast, clearToasts }), [toasts, addToast, removeToast, clearToasts])

  return (
    <ToastContext.Provider value={value}>
      {children}
      <div className="fixed bottom-4 right-4 z-[100] space-y-3 w-[90vw] max-w-sm">
        <AnimatePresence>
          {toasts.map(t => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              className={`rounded-md border shadow-lg p-3 backdrop-blur bg-white/80 dark:bg-black/60 ${
                t.variant === 'success' ? 'border-emerald-400/40' : t.variant === 'error' ? 'border-rose-400/40' : t.variant === 'info' ? 'border-sky-400/40' : 'border-gray-300/40 dark:border-gray-700/40'
              }`}
            >
              <div className="flex items-start gap-3">
                <div className={`mt-1 h-2 w-2 rounded-full ${
                  t.variant === 'success' ? 'bg-emerald-400' : t.variant === 'error' ? 'bg-rose-400' : t.variant === 'info' ? 'bg-sky-400' : 'bg-gray-400'
                }`} />
                <div className="flex-1">
                  {t.title && <div className="font-medium text-sm">{t.title}</div>}
                  {t.description && <div className="text-xs opacity-80 mt-0.5">{t.description}</div>}
                  {t.actionLabel && t.onAction && (
                    <button onClick={t.onAction} className="mt-2 text-xs underline underline-offset-2 hover:opacity-80">
                      {t.actionLabel}
                    </button>
                  )}
                </div>
                <button onClick={() => removeToast(t.id)} className="text-xs opacity-60 hover:opacity-100">×</button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  )
}

export function useToast() {
  const ctx = useContext(ToastContext)
  if (!ctx) throw new Error('useToast must be used within ToastProvider')
  return ctx
}