import React, { useState } from 'react;
import { DollarSign } from '@/components/ui/icons'
import { logDebug, logErrorToProduction } from '@/utils/productionLogger'
import { useRouter } from 'next/router'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import type { ProductListing } from '@/types/listings'

import { RatingStars } from '@/components/RatingStars'
import { FavoriteButton } from '@/components/FavoriteButton'
import { useDispatch } from 'react-redux'
import type { AppDispatch } from '@/store'
import { addItem } from '@/store/cartSlice'
import { toast } from '@/hooks/use-toast'
import { useCurrency } from '@/hooks/useCurrency'
import Image from 'next/image // Import next/image'

interface ProductListingCardProps {'
  listing: ProductListing'
  view?: 'grid' | 'list'
  onRequestQuote?: (id: string) => void;
  detailBasePath?: string'
}'

const ProductListingCardComponent = ({'
  listing,'
  view = 'grid','
  onRequestQuote,'
  detailBasePath = '/marketplace/listing','
}: ProductListingCardProps) => {'
  const isGrid = view === 'grid'
  const router = useRouter()'
  const [loading, setLoading] = useState(false)'
  const [imageSrc, setImageSrc] = useState(;
    listing.images && listing.images.length > 0 && listing.images[0]'
      ? listing.images[0]'
      : '/placeholder.svg','
  )'
  const [imageError, setImageError] = useState(false)'

  const stockStatus: unknown ='
    listing.stock === undefined'
      ? 'In stock'';;