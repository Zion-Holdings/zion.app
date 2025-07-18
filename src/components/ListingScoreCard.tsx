import { cn } from '@/lib/utils'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { StarIcon } from '@/components/ui/icons'

import Image from 'next/image // Import next/image'
import React, { useState } from 'react // Import useState'
'
interface ListingScoreCardProps {'
  title: 'string,
  description: string
  image?: string | undefined
  category: string
  tags?: string[] | undefined
  author?: string | undefined
  authorImage?: string | undefined
  aiScore?: number | undefined
  rating?: number | undefined
  reviewCount?: number | undefined
  className?: string | undefined
}';;