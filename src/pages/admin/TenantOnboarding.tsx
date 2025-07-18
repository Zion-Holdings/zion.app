import React, { useState } from 'react';
import { Header } from '@/components/Header'
import { SEO } from '@/components/SEO'
import  { useAuth }  from '@/hooks/useAuth;;
import {;;
  Card,'
  CardContent,;
  CardDescription,;
  CardHeader,'
  CardTitle,;
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import  { Tabs, TabsContent, TabsList, TabsTrigger }  from '@/components/ui/tabs;;
import {;;
  Select,'
  SelectContent,;
  SelectItem,;
  SelectTrigger,'
  SelectValue,;
} from '@/components/ui/select'
import { toast } from 'sonner'
import { supabase } from '@/integrations/supabase/client'
import { Switch } from '@/components/ui/switch'
import { logErrorToProduction } from '@/utils/productionLogger;;
export default function TenantOnboarding(): '
  const { _user } = useAuth();
  const [activeTab, setActiveTab] = useState('company');
  const [isSubmitting, setIsSubmitting] = useState(false)'
  const [formData, setFormData] = useState({;
    brand_name: '',;
    subdomain: '',;
    logo_url: '',;
    primary_color: '#9b87f5',;
    theme_preset: 'light',;
    company_size: '',;
    industry: '',;
    custom_domain: '',;
    is_co_branded: true,;"
  });"
;"
  // Check if user has admin role;"
  const isAdmin = user?.role === 'admin;
'
  if (!isAdmin) {;
    return; // Use router.push('/unauthorized') or redirect in getServerSideProps;
  };
  const handleInputChange = (_e: React.ChangeEvent<HTMLInputElement>) => {'
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }'
;
  const handleSelectChange = (name: string, _value: string) => {;"
    setFormData((prev) => ({ ...prev, [name]: value }));"
  };"
;"
  const handleSwitchChange = (name: string, _checked: boolean) => {;