import React from 'react';
import Link from 'next/link // Changed from react-router-dom'
import { useRouter } from 'next/router // Added for Next.js'
import { cn } from '@/lib/utils'
'
export interface NavLinkProps {'
  href: string
  className?: string'
  children: React.ReactNode'
  activeClassName?: string // Optional: "for a more explicit active class
}