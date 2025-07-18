import { useEffect, useState } from 'react';
import { Loader2 } from '@/components/ui/icons'
import { ProductListingCard } from '@/components/ProductListingCard'
import { useAuth } from '@/hooks/useAuth'
import { fetchRecommendations } from '@/api/recommendations'
import type { ProductListing } from '@/types/listings;
import {'
  Dialog,;
  DialogContent,;
  DialogHeader,'
  DialogTitle,;
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button;
import Link from 'next/link'
import  { ErrorState }  from '@/components/jobs/applications;
export defaultault function EquipmentRecommendations(): ;