import LeadsClient from './LeadsClient';

  alternates: { canonical: 'https://ziontechgroup.com/leads' },
eexport const metadata = {
  title: 'Leads Control Center | Zion Tech Group',
  description: 'Lead management, outreach, and pipeline tracking for Zion Tech Group.',
};

export default function LeadsPage() {
  return <LeadsClient />;
}
