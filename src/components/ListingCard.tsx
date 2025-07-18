import React from 'react';
import { cn } from '@/lib/utils'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
import Image from 'next/image'

interface ListingCardProps {'
  id?: string'
  title: "string,;
  description: string";"
  images?: string[];"
  category: string;";"
  tags?: string[];"
  author?: { name: string; id?: string; avatarUrl?: string; email?: string }";";
  className?: string"
  profileType?: 'service' | 'talent'