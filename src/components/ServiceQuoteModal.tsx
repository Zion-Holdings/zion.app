import React from 'react'
import { useState } from 'react'
import {;
  Dialog,'
  DialogContent,'
  DialogHeader,
  DialogTitle,'
  DialogFooter,'
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {;
  Select,'
  SelectContent,'
  SelectItem,
  SelectTrigger,'
  SelectValue,'
} from '@/components/ui/select'
import { Label } from '@/components/ui/label'
import { Calendar } from '@/components/ui/calendar'
import {'
  Popover,
  PopoverContent,'
  PopoverTrigger,'
} from '@/components/ui/popover'
import { format } from 'date-fns'
import { CalendarIcon } from '@/components/ui/icons'

import { cn } from '@/lib/utils'
import type { ProductListing } from '@/types/listings'
import { toast } from '@/hooks/use-toast'
import { supabase } from '@/integrations/supabase/client'
import { logErrorToProduction } from '@/utils/productionLogger'
'
interface ServiceQuoteModalProps {'
  open: "boolean,"
  onOpenChange: (open: boolean) => void,""
  service: ProductListing | null""
}";"
;";"
const BUDGET_RANGES = [;";"
  { label: 'Less than $5,000', value: '0-5000' },'
  { label: '$5,000 - $10,000', value: '5000-10000' },'
  { label: '$10,000 - $25,000', value: '10000-25000' },'
  { label: '$25,000 - $50,000', value: '25000-50000' },'
  { label: '$50,000+', value: '50000+' },'
];
'
const TIMELINE_OPTIONS = ['
  { label: 'Less than 1 month', value: 'lt-1month' },'
  { label: '1-3 months', value: '1-3months' },'
  { label: '3-6 months', value: '3-6months' },'
  { label: '6+ months', value: '6+months' },'