import { useState, useEffect } from 'reac't'
interface ResponsiveState {
  isMobile: boolean
  isTablet: boolean
  isDesktop: boolean
  isLargeDesktop: boolean
  screenWidth: number
  screenHeight: number
  orientation: 'portra'i't' | 'landscap'e'
}

export const useResponsive = (): ResponsiveState => {
  const [responsiveState, setResponsiveState] = useState<ResponsiveState>({
    isMobile: false,
    isTablet: false,
    isDesktop: false,
    isLargeDesktop: false,
    screenWidth: 0,
    screenHeight: 0,
    orientation: 'portrai't'
  })

  useEffect(() => {
    const updateResponsiveState = () => {
      const width = window.innerWidth
      const height = window.innerHeight
      
      setResponsiveState({
        isMobile: width < 768,
        isTablet: width >= 768 && width < 1024,
        isDesktop: width >= 1024 && width < 1536,
        isLargeDesktop: width >= 1536,
        screenWidth: width,
        screenHeight: height,
        orientation: width > height ? 'landsca'p'e' : 'portrai't'
      })
    }

    // Initial check
    updateResponsiveState()

    // Add event listener
    window.addEventListener('resi'z'e', updateResponsiveState)
    window.addEventListener('orientationchan'g'e', updateResponsiveState)

    // Cleanup
    return () => {
      window.removeEventListener('resi'z'e', updateResponsiveState)
      window.removeEventListener('orientationchan'g'e', updateResponsiveState)
    }
  }, [])

  return responsiveState
}

export const useIsMobile = (breakpoint: number = 768): boolean => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < breakpoint)
    }

    checkMobile()
    window.addEventListener('resi'z'e', checkMobile)
    
    return () => window.removeEventListener('resi'z'e', checkMobile)
  }, [breakpoint])

  return isMobile
}

export const useIsTablet = (): boolean => {
  const [isTablet, setIsTablet] = useState(false)

  useEffect(() => {
    const checkTablet = () => {
      const width = window.innerWidth
      setIsTablet(width >= 768 && width < 1024)
    }

    checkTablet()
    window.addEventListener('resi'z'e', checkTablet)
    
    return () => window.removeEventListener('resi'z'e', checkTablet)
  }, [])

  return isTablet
}

export const useIsDesktop = (): boolean => {
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024)
    }

    checkDesktop()
    window.addEventListener('resi'z'e', checkDesktop)
    
    return () => window.removeEventListener('resi'z'e', checkDesktop)
  }, [])

  return isDesktop
}

export const useOrientation = (): 'portra'i't' | 'landsca'p'e' => {
  const [orientation, setOrientation] = useState<'portra'i't' | 'landsca'p'e'>('portra'i't')

  useEffect(() => {
    const checkOrientation = () => {
      setOrientation(window.innerWidth > window.innerHeight ? 'landsca'p'e' : 'portra'i't')
    }

    checkOrientation()
    window.addEventListener('resi'z'e', checkOrientation)
    window.addEventListener('orientationchan'g'e', checkOrientation)
    
    return () => {
      window.removeEventListener('resi'z'e', checkOrientation)
      window.removeEventListener('orientationchan'g'e', checkOrientation)
    }
  }, [])

  return orientation
} 