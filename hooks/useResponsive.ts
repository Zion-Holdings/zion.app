import { useState, useEffect } from "react";

interface ResponsiveState {
  screenWidth: number;
  screenHeight: number;
  orientation: "landscape" | "portrait";
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
}

const useResponsive = (): ResponsiveState => {
  const [state, setState] = useState<ResponsiveState>({
    screenWidth: 1920,
    screenHeight: 1080,
    orientation: "landscape",
    isMobile: false,
    isTablet: false,
    isDesktop: true,
  });

  useEffect(() => {
    const updateDimensions = () => {
      setState({
        screenWidth: window.innerWidth,
        screenHeight: window.innerHeight,
        orientation:
          window.innerWidth > window.innerHeight ? "landscape" : "portrait",
        isMobile: window.innerWidth < 768,
        isTablet: window.innerWidth >= 768 && window.innerWidth < 1024,
        isDesktop: window.innerWidth >= 1024,
      });
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  return state;
};

export default useResponsive;
