import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "IoT Device Management | Zion Tech Group",
  description: "Centralized IoT device provisioning, monitoring, and firmware updates. Supports MQTT, CoAP, and HTTP protocols with real-time dashboards.",
  openGraph: {
    title: "IoT Device Management | Zion Tech Group",
    description: "Centralized IoT device provisioning, monitoring, and firmware updates. Supports MQTT, CoAP, and HTTP protocols with real-time dashboards.",
    url: "https://ziontechgroup.com/services/iot-device-management/",
    type: 'website',
  },
  alternates: { canonical: "/services/iot-device-management/" },
};

export default function IotDeviceManagementPage() {
  return (
    <StandardPage
      title="IoT Device Management"
      subtitle="Centralized IoT device provisioning, monitoring, and firmware updates. Supports MQTT, CoAP, and HTTP protocols with real-time dashboards."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services/" },
        { label: "IoT Device Management" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-5xl mx-auto">Centralized IoT device provisioning, monitoring, and firmware updates. Supports MQTT, CoAP, and HTTP protocols with real-time dashboards.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from a Wayback Machine snapshot (20260614131041) of ziontechgroup.com.</p>
    </StandardPage>
  );
}
