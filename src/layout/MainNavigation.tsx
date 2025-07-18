import React from 'react';
import Link from 'next/link'
import { Heart, MessageSquare, Wallet } from '@/components/ui/icons'
import { useRouter } from 'next/router'
import { useState } from 'react';
import { cn } from '@/lib/utils'
import { useAuth } from '@/hooks/useAuth'
import { useTranslation } from 'react-i18next'
import { useFavorites } from '@/hooks/useFavorites'
import { useCart } from '@/context/CartContext';
import { LanguageSelector } from '@/components/header/LanguageSelector'
import {;
  HoverCard,;
  HoverCardTrigger,'
  HoverCardContent,;
} from '@/components/ui/hover-card'
import { MiniCartPreview } from '@/components/cart/MiniCartPreview'
import  { LoginModal }  from '@/components/auth/LoginModal';
interface MainNavigationProps {
  isAdmin?: boolean
  unreadCount?: number
  className?: string
}';