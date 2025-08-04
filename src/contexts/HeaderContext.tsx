import React, { createContext, useContext, useState } from 'react'

interface HeaderContextType {
  isTransparent: boolean
  setIsTransparent: (transparent: boolean) => void
}

const HeaderContext = createContext<HeaderContextType | undefined>(undefined)

export const useHeader = () => {
  const context = useContext(HeaderContext)
  if (context === undefined) {
    throw new Error('useHeader must be used within a HeaderProvider')
  }
  return context
}

interface HeaderProviderProps {
  children: React.ReactNode
}

export const HeaderProvider: React.FC<HeaderProviderProps> = ({ children }) => {
  const [isTransparent, setIsTransparent] = useState(false)

  return (
    <HeaderContext.Provider value={{ isTransparent, setIsTransparent }}>
      {children}
    </HeaderContext.Provider>
  )
} 