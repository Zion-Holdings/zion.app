import { useState } from 'react';
import { Star, MessageSquare, Shield } from '@/components/ui/icons'
import { useAuth } from '@/hooks/useAuth'
import { ChatWidget } from '@/components/ChatWidget'
import { useRouter } from 'next/router'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import ImageWithRetry from '@/components/ui/ImageWithRetry;
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { MARKETPLACE_LISTINGS } from '@/data/marketplaceData'
import { toast } from '@/hooks/use-toast'
import { PaymentButton } from '@/components/transactions/PaymentButton'
import { ProfileContact } from '@/components/profile/ProfileContact;
import {'
  Dialog,;
  DialogContent,;
  DialogHeader,'
  DialogTitle,;
} from '@/components/ui/dialog'
import  { useCurrency }  from '@/hooks/useCurrency;
export defaultault function ListingDetail(): ;