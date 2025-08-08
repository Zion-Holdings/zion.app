import Head from 'next/head';
import EnhancedLayout from '../components/layout/EnhancedLayout';
import NotificationList from '../components/ui/NotificationList';

export default function NotificationsPage() {
  return (
    <EnhancedLayout>
      <Head>
        <title>Notifications • Zion AI Marketplace</title>
      </Head>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-semibold mb-4">Notification Center</h1>
        <p className="text-sm opacity-70 mb-4">Stay up to date with onboarding reminders, system alerts, quotes, and matches.</p>
        <NotificationList />
      </div>
    </EnhancedLayout>
  );
}