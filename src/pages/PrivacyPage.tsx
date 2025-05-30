import { useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';

export default function PrivacyPage() {
  const [loading, setLoading] = useState(false);

  const requestExport = async () => {
    setLoading(true);
    try {
      await fetch('/api/privacy/export', { method: 'POST' });
      alert('If data is available you will receive an email link.');
    } finally {
      setLoading(false);
    }
  };

  const requestDeletion = async () => {
    setLoading(true);
    try {
      await fetch('/api/privacy/delete', { method: 'POST' });
      alert('Account deletion requested.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4 space-y-4">
          <h1 className="text-3xl text-white mb-4">Privacy Controls</h1>
          <Button onClick={requestExport} disabled={loading}>
            Download my data
          </Button>
          <Button variant="destructive" onClick={requestDeletion} disabled={loading}>
            Request deletion
          </Button>
        </div>
      </main>
      <Footer />
    </>
  );
}
