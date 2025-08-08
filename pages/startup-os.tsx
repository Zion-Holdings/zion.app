import React from 'react';
import EnterpriseOS from '../components/startup/EnterpriseOS';
import { useRouter } from 'next/router';

export default function StartupOSPage() {
  const router = useRouter();
  const theme = (router.query.industry as string) || 'Default';
  return <EnterpriseOS industryTheme={theme as any} />;
}