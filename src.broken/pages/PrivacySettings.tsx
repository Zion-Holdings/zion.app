import { useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SEO } from '@/components/SEO';
import { Switch } from '@/components/ui/switch';
import { Button } from '@/components/ui/button';
import { useConsent } from '@/context/ConsentContext';

export default function PrivacySettings() {
  const { consent, updateConsent } = useConsent();
  const [analytics, setAnalytics] = useState(consent.analytics);
  const [ads, setAds] = useState(consent.ads);

  const handleSave = () => {
    updateConsent({ analytics, ads });
  };

  return (
    <>
      <Header />
      <SEO title="Privacy Settings" description="Manage your cookie preferences" />
      <main className="container mx-auto px-4 py-8 space-y-6">
        <h1 className="text-2xl font-bold">Privacy Settings</h1>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span>Analytics Cookies</span>
            <Switch checked={analytics} onCheckedChange={setAnalytics} />
          </div>
          <div className="flex items-center justify-between">
            <span>Advertising Cookies</span>
            <Switch checked={ads} onCheckedChange={setAds} />
          </div>
          <Button onClick={handleSave}>Save Preferences</Button>
        </div>
      </main>
      <Footer />
    </>
  );
}
