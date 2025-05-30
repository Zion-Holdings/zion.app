import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { cn } from '@/lib/utils'

export interface NavLinkProps {
  href: string
  className?: string
  children: React.ReactNode
}

export function NavLink({ href, className, children }: NavLinkProps) {
  const router = useRouter()
  const isActive = router.pathname === href
  return (
    <Link
      href={href}
      className={cn(
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zion-purple',
        isActive && 'border-b-2 border-green-500',
        className
      )}
    >
      {children}
    </Link>
  )
}

export default NavLink
