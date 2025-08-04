import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { useRouter } from 'next/router'

interface NavigationState {
  isSearchOpen: boolean
  isMobileMenuOpen: boolean
  activeDropdown: string | null
  recentPages: string[]
  favorites: string[]
}

interface NavigationContextType {
  state: NavigationState
  openSearch: () => void
  closeSearch: () => void
  toggleMobileMenu: () => void
  setActiveDropdown: (dropdown: string | null) => void
  addToRecent: (path: string) => void
  addToFavorites: (path: string) => void
  removeFromFavorites: (path: string) => void
  navigateTo: (path: string) => void
  goBack: () => void
  goForward: () => void
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined)

interface NavigationProviderProps {
  children: ReactNode
}

export const NavigationProvider: React.FC<NavigationProviderProps> = ({ children }) => {
  const router = useRouter()
  const [state, setState] = useState<NavigationState>({
    isSearchOpen: false,
    isMobileMenuOpen: false,
    activeDropdown: null,
    recentPages: [],
    favorites: []
  })

  // Load favorites from localStorage (SSR-safe)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedFavorites = localStorage.getItem('navigation-favorites')
      if (savedFavorites) {
        try {
          const favorites = JSON.parse(savedFavorites)
          setState(prev => ({ ...prev, favorites }))
        } catch (error) {
          console.error('Error loading navigation favorites:', error)
        }
      }
    }
  }, [])

  // Save favorites to localStorage (SSR-safe)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('navigation-favorites', JSON.stringify(state.favorites))
    }
  }, [state.favorites])

  // Keyboard shortcuts (SSR-safe)
  useEffect(() => {
    if (typeof window === 'undefined') return

    const handleKeyDown = (event: KeyboardEvent) => {
      // Cmd/Ctrl + K: Open search
      if (event.key === 'k' && (event.metaKey || event.ctrlKey)) {
        event.preventDefault()
        openSearch()
      }

      // Escape: Close modals
      if (event.key === 'Escape') {
        if (state.isSearchOpen) {
          closeSearch()
        }
        if (state.isMobileMenuOpen) {
          toggleMobileMenu()
        }
        if (state.activeDropdown) {
          setActiveDropdown(null)
        }
      }

      // Cmd/Ctrl + B: Go back
      if (event.key === 'b' && (event.metaKey || event.ctrlKey)) {
        event.preventDefault()
        goBack()
      }

      // Cmd/Ctrl + F: Go forward
      if (event.key === 'f' && (event.metaKey || event.ctrlKey)) {
        event.preventDefault()
        goForward()
      }

      // Cmd/Ctrl + 1-9: Quick navigation to favorites
      if (event.key >= '1' && event.key <= '9' && (event.metaKey || event.ctrlKey)) {
        event.preventDefault()
        const index = parseInt(event.key) - 1
        if (state.favorites[index]) {
          navigateTo(state.favorites[index])
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [state.isSearchOpen, state.isMobileMenuOpen, state.activeDropdown, state.favorites])

  const openSearch = () => {
    setState(prev => ({ ...prev, isSearchOpen: true }))
  }

  const closeSearch = () => {
    setState(prev => ({ ...prev, isSearchOpen: false }))
  }

  const toggleMobileMenu = () => {
    setState(prev => ({ 
      ...prev, 
      isMobileMenuOpen: !prev.isMobileMenuOpen,
      activeDropdown: null // Close dropdowns when toggling mobile menu
    }))
  }

  const setActiveDropdown = (dropdown: string | null) => {
    setState(prev => ({ ...prev, activeDropdown: dropdown }))
  }

  const addToRecent = (path: string) => {
    setState(prev => ({
      ...prev,
      recentPages: [path, ...prev.recentPages.filter(p => p !== path)].slice(0, 10)
    }))
  }

  const addToFavorites = (path: string) => {
    setState(prev => ({
      ...prev,
      favorites: prev.favorites.includes(path) ? prev.favorites : [...prev.favorites, path].slice(0, 9)
    }))
  }

  const removeFromFavorites = (path: string) => {
    setState(prev => ({
      ...prev,
      favorites: prev.favorites.filter(p => p !== path)
    }))
  }

  const navigateTo = (path: string) => {
    addToRecent(path)
    router.push(path)
  }

  const goBack = () => {
    router.back()
  }

  const goForward = () => {
    router.forward()
  }

  const value: NavigationContextType = {
    state,
    openSearch,
    closeSearch,
    toggleMobileMenu,
    setActiveDropdown,
    addToRecent,
    addToFavorites,
    removeFromFavorites,
    navigateTo,
    goBack,
    goForward
  }

  return (
    <NavigationContext.Provider value={value}>
      {children}
    </NavigationContext.Provider>
  )
}

export const useNavigation = (): NavigationContextType => {
  const context = useContext(NavigationContext)
  if (context === undefined) {
    throw new Error('useNavigation must be used within a NavigationProvider')
  }
  return context
} 