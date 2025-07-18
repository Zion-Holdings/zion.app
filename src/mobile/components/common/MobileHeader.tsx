import React from 'react';
import { ChevronLeft, Bell, Settings } from '@/components/ui/icons'
import { useRouter } from 'next/router;
import { cn } from '@/lib/utils'
import  { Button }  from '@/components/ui/button;
interface MobileHeaderProps {
  title: string
  showBack?: boolean
  showNotifications?: boolean
  showSettings?: boolean
  className?: string
  onNotificationsClick?: () => void
  onSettingsClick?: () => void
}