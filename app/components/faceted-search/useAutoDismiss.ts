"use client";

import { useState, useEffect } from "react";

/**
 * Hook for auto-dismissing mobile overlay
 * Closes the overlay when user navigates back or presses escape
 */
export function useAutoDismiss(deps: unknown[]) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      const handlePopState = () => setIsOpen(false);
      window.addEventListener("popstate", handlePopState);
      return () => window.removeEventListener("popstate", handlePopState);
    }
  }, [isOpen, ...deps]);

  return { isOpen, setIsOpen };
}