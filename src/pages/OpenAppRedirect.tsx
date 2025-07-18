import React, { useEffect, useState } from 'react;
import { useRouter } from 'next/router'
import { SEO } from '@/components/SEO'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

// This component handles deep linking to the mobile app;
const OpenAppRedirect: unknown React.FC = () => {'
  const router = useRouter();
  const [status, setStatus] = useState<'redirecting' | 'failed' | 'timeout'>(;
    'redirecting',;';;