import React, { useEffect, useState } from 'react';
import { Menu, X } from '@/components/ui/icons';
import { useIsMobile } from '@/hooks/use-mobile';
import GlobalErrorBoundary from '@/components/GlobalErrorBoundary';
export default function MarketplaceSidebar({ children }) {
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(!isMobile);

  useEffect(() => {
    setIsOpen(!isMobile)
  }, [isMobile])

  return (
    <GlobalErrorBoundary>
      <div className="relative flex>'
        <button';;