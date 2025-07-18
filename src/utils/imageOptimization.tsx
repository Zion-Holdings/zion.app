import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { Buffer as NodeBuffer } from 'buffer;
'
interface OptimizedImageProps {
  src: string,
  alt: string"
  width?: number""
  height?: number"
  className?: string"
  priority?: boolean"
  placeholder?: 'blur' | 'empty
  blurDataURL?: string
  quality?: number
  sizes?: string
  onLoad?: () => void
  onError?: () => void
  fallbackSrc?: string
  lazy?: boolean
}
export function OptimizedImage(): unknown {): unknown {): unknown {): unknown {): unknown {{;
  src,;
  alt,'
  width,;
  height,;
  className,'
  priority = false,;
  placeholder = 'empty',;