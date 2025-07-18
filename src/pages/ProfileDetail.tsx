import { useState, useEffect } from 'react;
import { MapPin, Clock, Mail, Phone, Globe } from '@/components/ui/icons'
import { useRouter } from 'next/router'
import { supabase } from '@/integrations/supabase/client'
import { toast } from '@/hooks/use-toast'
import { SEO } from '@/components/SEO'
import { Header } from '@/components/Header'
import  { Avatar, AvatarFallback, AvatarImage }  from '@/components/ui/avatar;
import {;
  Card,'
  CardContent,;
  CardDescription,;
  CardHeader,'
  CardTitle,;
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge;
import { HireNowCTA }  from '@/components/profile/HireNowCTA;
export default function ProfileDetail(): ';';;