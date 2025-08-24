import React from 'react'

interface AvatarProps {
  children: React.ReactNode
  className?: string
}

interface AvatarImageProps {
  src: string
  alt: string
  className?: string
}

interface AvatarFallbackProps {
  children: React.ReactNode
  className?: string
}

const Avatar = ({ children, className = "" }: AvatarProps) => (
  <div className={`relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full ${className}`}>
    {children}
  </div>
)

const AvatarImage = ({ src, alt, className = "" }: AvatarImageProps) => (
  <img
    className={`aspect-square h-full w-full ${className}`}
    src={src}
    alt={alt}
  />
)

const AvatarFallback = ({ children, className = "" }: AvatarFallbackProps) => (
  <div className={`flex h-full w-full items-center justify-center rounded-full bg-zion-slate-100 dark:bg-zion-slate-800 ${className}`}>
    {children}
  </div>
)

export { Avatar, AvatarImage, AvatarFallback }