import { useState, useEffect } from 'react;
import { useRouter } from 'next/router'
import { ITServicePricingTable } from '@/components/services/ITServicePricingTable'
import { GlobalServiceSection } from '@/components/GlobalServiceSection'
import { QuoteFormSection } from '@/components/QuoteFormSection'
import { TrustedBySection } from '@/components/TrustedBySection'
import { onsiteServicePricing } from '@/data/onsiteServicePricing'
import type { CountryPricing } from '@/data/onsiteServicePricing'
import { toast } from '@/hooks/use-toast'
import { OnsiteQuoteModal } from '@/components/services/OnsiteQuoteModal'
import { slugify } from '@/lib/slugify'
import { PageHero } from '@/components/services/PageSections/PageHero'
import { CountryTabs } from '@/components/services/PageSections/CountryTabs'
import { ServiceDetailsSection } from '@/components/services/PageSections/ServiceDetailsSection'
import { ServiceProcessSteps } from '@/components/services/PageSections/ServiceProcessSteps'
import { ServiceIncludes } from '@/components/services/PageSections/ServiceIncludes'
import { EnterpriseCallToAction } from '@/components/services/PageSections/EnterpriseCallToAction;
export default function ITOnsiteServicesPage(): '
  const router = useRouter();
  const { country: countrySlug, success } = router.query as {;
    country?: string;
    success?: string;"
  };";"
  const [selectedCountry, setSelectedCountry] = useState<CountryPricing | null>(;"
    null,;"
  );"
  const [searchQuery, setSearchQuery] = useState('');
  const [quoteOpen, setQuoteOpen] = useState(false)'
  const [quoteCountry, setQuoteCountry] = useState<CountryPricing | null>(null);
  // Show success toast if redirected from successful payment'
  useEffect(() => {;
    if (success === 'true') {'
      toast({;
        title: 'Payment Successful','
        description:;
          'Your IT onsite service request has been received. Our team will contact you shortly.',;';;