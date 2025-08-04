import { useEffect } from 'react'
import { useHeader } from '../contexts/HeaderContext'

export const useHeaderTransparency = (transparent: boolean) => {
  const { setIsTransparent } = useHeader()

  useEffect(() => {
    setIsTransparent(transparent)
    
    // Reset to false when component unmounts
    return () => setIsTransparent(false)
  }, [transparent, setIsTransparent])
} 