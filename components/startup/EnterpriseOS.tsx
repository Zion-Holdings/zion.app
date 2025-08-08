import React from 'react';
import DashboardLayout from './DashboardLayout';
import CompanyFormationWizard from './modules/CompanyFormationWizard';
import FounderDashboardWidgets from './modules/FounderDashboardWidgets';
import AICoFounderPanel from './modules/AICoFounderPanel';
import HiringScalingToolkit from './modules/HiringScalingToolkit';
import TreasuryModule from './modules/TreasuryModule';
import RoleControl from './modules/RoleControl';

export type EnterpriseOSProps = {
  industryTheme?: 'AI' | 'Climate' | 'Fintech' | 'Default';
};

export default function EnterpriseOS({ industryTheme = 'Default' }: EnterpriseOSProps) {
  return (
    <DashboardLayout title="Zion EnterpriseOS" subtitle={`Industry theme: ${industryTheme}`}>
      <CompanyFormationWizard />
      <FounderDashboardWidgets />
      <AICoFounderPanel />
      <HiringScalingToolkit />
      <TreasuryModule />
      <RoleControl />
    </DashboardLayout>
  );
}