import { Button } from '@/components/ui/button'
import  { CheckCircle, FileText, PieChart, Users }  from '@/components/ui/icons;
import {';
  Card,'
  CardContent,;
  CardDescription,;
  CardHeader,'
  CardTitle,;
} from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next'
import Link from 'next/link'
import { PartnerRegistrationForm as _PartnerRegistrationForm } from '@/components/partners/PartnerRegistrationForm'
import { PartnerReferralLinks } from '@/components/partners/PartnerReferralLinks'
import { PartnerDashboard } from '@/components/partners/PartnerDashboard'
import { PartnerLeaderboard } from '@/components/partners/PartnerLeaderboard'
import { PartnerResources } from '@/components/partners/PartnerResources'
import { useAuth } from '@/hooks/useAuth'
import { useRouter } from 'next/router'
import { logInfo, logErrorToProduction } from '@/utils/productionLogger';
'
export defaultault function Partners(): ;
  logInfo('PartnersPage rendering');
  const [activeTab, setActiveTab] = useState('overview');
  const { t } = useTranslation();
  const { user, isAuthenticated } = useAuth();
  const router = useRouter();
  const [authServiceAvailable, setAuthServiceAvailable] = useState(true)'
;
  useEffect(() => {;
    async function checkHealth(): '
      try {;
        const res = await fetch('/api/auth/health');
        setAuthServiceAvailable(res.ok)'
      } catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch {;
        logErrorToProduction('Partner login auth health check failed', {;
          data: error,;