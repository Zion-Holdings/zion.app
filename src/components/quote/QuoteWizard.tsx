import { useState } from 'react';
import useSWR from 'swr';
import { Loader2 } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { captureException } from '@/utils/sentry';

interface ServiceItem {
  id: string;
  title: string;
}

const WIZARD_STEPS = [1, 2, 3];

const fetcher = async (url: string) => {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error('Failed');
    }
    return res.json();
  } catch (err) {
    if (process.env.NODE_ENV === 'development') {
      console.error(err);
    } else {
      captureException(err);
    }
    throw err;
  }
};

function StepIndicator({ step }: { step: number }) {
  const progress = (step / WIZARD_STEPS.length) * 100;
  return (
    <div className="space-y-1">
      <div data-testid="step-indicator" className="text-sm text-muted-foreground">
        {step}/{WIZARD_STEPS.length}
      </div>
      <div className="h-1 bg-zion-blue-light rounded">
        <div className="h-1 bg-zion-purple rounded" style={{ width: `${progress}%` }} />
      </div>
    </div>
  );
}

export function QuoteWizard() {
  const [step, setStep] = useState(1);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [message, setMessage] = useState('');
  const { data, error, mutate } = useSWR<ServiceItem[]>('/api/items?category=services', fetcher, {
    onErrorRetry: (error, key, config, revalidate, { retryCount }) => {
      // retryCount starts at 0, so retryCount >= 2 means it will retry for 0 and 1 (2 retries)
      if (retryCount >= 2) return;
      const timeout = 1000; // Fixed 1 second delay
      setTimeout(() => revalidate({ retryCount: retryCount + 1 }), timeout);
    },
    dedupingInterval: 600000, // 10 minutes
  });

  const loading = !data && !error;

  const handleSelect = (id: string) => {
    setSelectedItem(id);
    setStep(2);
  };

  const handleSubmit = async () => {
    if (!selectedItem) return;
    await fetch('/api/quotes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ service_id: selectedItem, user_message: message })
    });
    setStep(3);
  };

  if (step === 1) {

    return (
      <div className="space-y-6">
        <StepIndicator step={step} />
        {loading && (
          <div className="flex justify-center py-12">
            <Loader2 className="h-6 w-6 animate-spin" />
          </div>
        )}

        {error && (
          <div className="space-y-2" data-testid="service-fetch-error-alert">
            <Alert variant="destructive">
              <AlertTitle>Network Error</AlertTitle>
              <AlertDescription>
                There was a problem fetching the services. Please check your internet connection and try again.
              </AlertDescription>
            </Alert>
            <Button size="sm" onClick={() => mutate()} data-testid="retry-button">
              Retry
            </Button>
          </div>
        )}

        {data && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {data.map((item) => (
              <Card
                data-testid={`service-card-${item.id}`}
                key={item.id}
                className={`p-4 space-y-2 cursor-pointer border-2 transition-colors ${selectedItem === item.id ? 'border-zion-purple' : 'hover:border-zion-purple/50'} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zion-purple`}
                onClick={() => setSelectedItem(item.id)}
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setSelectedItem(item.id);
                  }
                }}
              >
                <div>{item.title}</div>
                <Button
                  size="sm"
                  data-testid={`request-quote-${item.id}`}
                  onClick={(e) => { e.stopPropagation(); handleSelect(item.id); }}
                  className="w-full"
                >
                  Request Quote
                </Button>
              </Card>
            ))}
          </div>
        )}

        <Button
          onClick={() => selectedItem && handleSelect(selectedItem)}
          disabled={!selectedItem || loading || !!error}
        >
          Continue
        </Button>
      </div>
    );
  }

  if (step === 2) {
    return (
      <div data-testid="details-step" className="space-y-4">
        <StepIndicator step={step} />
        {selectedItem && (
          <div data-testid="selected-item" className="text-sm text-zion-slate-light">
            Selected: {selectedItem}
          </div>
        )}
        <Textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          data-testid="message-input"
          placeholder="Your message"
        />
        <Button onClick={handleSubmit}>Submit</Button>
      </div>
    );
  }

  if (step === 3) {
    return (
      <div data-testid="success-step" className="space-y-4">
        <StepIndicator step={step} />
        <div>Quote Submitted</div>
      </div>
    );
  }

  return null;
}
