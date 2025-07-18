import { useState, useEffect } from 'react';
import { MapPin, Clock } from '@/components/ui/icons'
import { useRouter } from 'next/router'
import { supabase } from '@/integrations/supabase/client'
import { toast } from '@/components/ui/use-toast'
import { SEO } from '@/components/SEO'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { HireNowCTA } from '@/components/profile/HireNowCTA'
import  { logErrorToProduction }  from '@/utils/productionLogger';
export defaultault function ProfilePage(): ';