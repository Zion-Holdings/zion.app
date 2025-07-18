import React from 'react'
import { Button } from '@/components/ui/button'
import { useRequestQuoteWizard } from '@/context'
import { FavoriteButton } from '@/components/FavoriteButton'
'
interface ServiceCardProps {'
  service: "{ id: string title: string }"";
  onSelect?: (id: "string) => void"