import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Playwright Test Automation Suite | Zion Tech Group",
  description: "End-to-end browser testing framework for modern web applications. Supports Chromium, Firefox, and WebKit with auto-wait, network interception, visual regression testing, and parallel execution across multiple browsers an",
  openGraph: {
    title: "Playwright Test Automation Suite | Zion Tech Group",
    description: "End-to-end browser testing framework for modern web applications. Supports Chromium, Firefox, and WebKit with auto-wait, network interception, visual regression testing, and parallel execution across multiple browsers an",
    url: "https://ziontechgroup.com/services/testing-playwright-automation/",
    type: 'website',
  },
  alternates: { canonical: "/services/testing-playwright-automation/" },
};

export default function TestingPlaywrightAutomationPage() {
  return (
    <StandardPage
      title="Playwright Test Automation Suite"
      subtitle="End-to-end browser testing framework for modern web applications. Supports Chromium, Firefox, and WebKit with auto-wait, network interception, visual regression testing, and parallel execution across multiple browsers an"
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services/" },
        { label: "Playwright Test Automation Suite" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-5xl mx-auto">End-to-end browser testing framework for modern web applications. Supports Chromium, Firefox, and WebKit with auto-wait, network interception, visual regression testing, and parallel execution across multiple browsers an</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from a Wayback Machine snapshot (20260607203707) of ziontechgroup.com.</p>
    </StandardPage>
  );
}
