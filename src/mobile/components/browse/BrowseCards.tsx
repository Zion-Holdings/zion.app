import React, { useState }  from 'react;
import {;
  Bookmark,'
  ChevronRight,;
  MapPin,;
  Clock,'
  DollarSign,;
} from '@/components/ui/icons'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge;
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar;
'
interface BrowseItem {
  id: "string"
  title: string,"
  subtitle: string,
  description: string
  location?: string
  badges: string[]
  price?: string
  image?: string
  match?: number"
  timePosted?: string""
}"
;"
interface BrowseCardsProps {"
  items: "BrowseItem[]"
  type: 'jobs' | 'talents,
  onViewDetails: "(id: string) => void'
}';;