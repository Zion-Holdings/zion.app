import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'

export type UserRole = 'client' | 'talent'

export type User = {
  id: string
  name: string
  role: UserRole
  avatarUrl?: string
  onboardingCompleted: boolean
}

export type UserContextValue = {
  user: User | null
  setUser: (user: User | null) => void
  logout: () => void
  completeOnboarding: () => void
}

const UserContext = createContext<UserContextValue | undefined>(undefined)

const DEFAULT_USER: User = {
  id: 'u_001',
  name: 'Jordan Lee',
  role: 'client',
  onboardingCompleted: false,
}

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    try {
      const raw = localStorage.getItem('zion.user')
      if (raw) {
        setUser(JSON.parse(raw))
      } else {
        setUser(DEFAULT_USER)
      }
    } catch {
      setUser(DEFAULT_USER)
    }
  }, [])

  useEffect(() => {
    try {
      if (user) localStorage.setItem('zion.user', JSON.stringify(user))
      else localStorage.removeItem('zion.user')
    } catch {}
  }, [user])

  const value = useMemo<UserContextValue>(() => ({
    user,
    setUser,
    logout: () => setUser(null),
    completeOnboarding: () => setUser(prev => prev ? { ...prev, onboardingCompleted: true } : prev),
  }), [user])

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

export function useUser() {
  const ctx = useContext(UserContext)
  if (!ctx) throw new Error('useUser must be used within UserProvider')
  return ctx
}