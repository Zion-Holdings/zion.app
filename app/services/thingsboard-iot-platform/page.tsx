import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "ThingsBoard IoT Platform | Zion Tech Group",
  description: "Open-source IoT platform for device management, data collection, processing, and visualization at scale. Handles millions of devices with real-time telemetry ingestion, rule engine for automated alerts and actions, and c",
  openGraph: {
    title: "ThingsBoard IoT Platform | Zion Tech Group",
    description: "Open-source IoT platform for device management, data collection, processing, and visualization at scale. Handles millions of devices with real-time telemetry ingestion, rule engine for automated alerts and actions, and c",
    url: "https://ziontechgroup.com/services/thingsboard-iot-platform/",
    type: 'website',
  },
  alternates: { canonical: "/services/thingsboard-iot-platform/" },
};

export default function ThingsboardIotPlatformPage() {
  return (
    <StandardPage
      title="ThingsBoard IoT Platform"
      subtitle="Open-source IoT platform for device management, data collection, processing, and visualization at scale. Handles millions of devices with real-time telemetry ingestion, rule engine for automated alerts and actions, and c"
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services/" },
        { label: "ThingsBoard IoT Platform" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-5xl mx-auto">Open-source IoT platform for device management, data collection, processing, and visualization at scale. Handles millions of devices with real-time telemetry ingestion, rule engine for automated alerts and actions, and c</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from a Wayback Machine snapshot (20260614105311) of ziontechgroup.com.</p>
    </StandardPage>
  );
}
