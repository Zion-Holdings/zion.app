// app/dashboard/layout.tsx — Server component (metadata for client page)
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Agent Dashboard | Zion Tech Group',
  description: 'Monitor and manage your AI agents from a centralized dashboard. Track performance, monitor autonomous workflows, and optimize your AI investments.',
  alternates: { canonical: 'https://ziontechgroup.com/dashboard/' },
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
