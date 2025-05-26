import { useState } from 'react';
import useSWR from 'swr';
import { Loader2 } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useRequestQuoteWizard } from '@/context';

interface ServiceItem {
  id: string;
  title: string;
}

const fetcher = (url: string) => fetch(url).then(res => {
  if (!res.ok) throw new Error('Failed');
  return res.json();
});

export function QuoteWizard() {
  const { step, selectService } = useRequestQuoteWizard();
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const { data, error } = useSWR<ServiceItem[]>('/api/services', fetcher, {
    onErrorRetry: (error, key, config, revalidate, { retryCount }) => {
      if (retryCount >= 5) return;
      const timeout = Math.min(1000 * 2 ** retryCount, 30000);
      setTimeout(() => revalidate({ retryCount: retryCount + 1 }), timeout);
    },
  });

  if (step === 'Services') {
    if (error) {
      return (
        <div className="space-y-4 p-4">
          <div className="text-center text-red-500">Service temporarily unavailable</div>
          <Button disabled>Continue</Button>
        </div>
      );
    }

    if (!data) {
      return (
        <div className="flex justify-center py-12">
          <Loader2 className="h-6 w-6 animate-spin" />
        </div>
      );
    }

    return (
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {data.map((item) => (
            <Card
              data-testid={`service-card-${item.id}`}
              key={item.id}
              className={`p-4 cursor-pointer border-2 transition-colors ${selectedItem === item.id ? 'border-zion-purple' : 'hover:border-zion-purple/50'}`}
              onClick={() => setSelectedItem(item.id)}
            >
              {item.title}
            </Card>
          ))}
        </div>
        <Button onClick={() => selectedItem && selectService(selectedItem)} disabled={!selectedItem}>
          Continue
        </Button>
      </div>
    );
  }

  if (step === 'Details') {
    return <div data-testid="details-step">Step 2 Form</div>;
  }

  return null;
}
