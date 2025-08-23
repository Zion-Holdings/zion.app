import React from 'react';
import { useFeatureFlags } from '@/context/FeatureFlagContext';

interface FeatureFlagProps {
  name: string;
  children: React.ReactNode;
}

export function FeatureFlag({ name, children }: FeatureFlagProps) {
  const { isEnabled } = useFeatureFlags();
  if (!isEnabled(name)) return null;
  return <>{children}</>;
}

export default FeatureFlag;
