import { useState, useMemo, useEffect } from 'react';
import { useQuoteWizard, ServiceItem } from '@/hooks/useQuoteWizard';
import { useDelayedError } from '@/hooks/useDelayedError';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import Skeleton from '@/components/ui/skeleton';
import { useToast } from '@/hooks/use-toast';

const WIZARD_STEPS = [1, 2, 3];

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

interface QuoteWizardProps {
  category: 'services' | 'talent' | 'equipment';
}

export function QuoteWizard({ category }: QuoteWizardProps) {
  const [step, setStep] = useState(1);
  const [selectedItemId, setSelectedItemId] = useState<string | null>(null);
  const [message, setMessage] = useState('');
  const [selectionError, setSelectionError] = useState('');
  const { data, error, mutate, isLoading } = useQuoteWizard(category);
  const delayedError = useDelayedError(error);
  const { toast } = useToast();

  useEffect(() => {
    if (delayedError) {
      toast({
        title: 'Unable to load services',
        variant: 'destructive'
      });
    }
  }, [delayedError, toast]);

  // Use isLoading from SWR for a more direct loading state
  const loading = isLoading;

  const selectedItem = useMemo(() => {
    if (!data || !selectedItemId) return null;
    return data.find(item => item.id === selectedItemId);
  }, [data, selectedItemId]);

  const handleSelect = (id: string) => {
    setSelectedItemId(id);
    setStep(2);
  };

  const handleContinue = () => {
    if (!selectedItemId) {
      setSelectionError(
        `Please choose a ${
          category === 'services'
            ? 'service'
            : category === 'talent'
            ? 'talent'
            : 'item'
        } to continue.`
      );
      return;
    }

    setSelectionError('');
    setStep(2);
  };

  const handleSubmit = async () => {
    if (!selectedItemId) return;
    // Different categories may require different API endpoints. Adjust the URL or payload here as needed.
    await fetch('/api/quotes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ item_id: selectedItemId, category: category, user_message: message })
    });
    setStep(3);
  };

  if (step === 1) {

    return (
      <div className="space-y-6">
        <StepIndicator step={step} />
        {loading && !delayedError && (
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
            data-testid="loading-indicator"
          >
            {Array.from({ length: 6 }).map((_, i) => (
              <Skeleton key={i} className="h-[120px] w-full" />
            ))}
          </div>
        )}

        {delayedError && (
          <div className="space-y-2" data-testid="fetch-error-alert">
            <Alert variant="destructive">
              <AlertTitle>Error Fetching {category}</AlertTitle>
              <AlertDescription>
                There was a problem fetching the {category}. Please check your internet connection and try again.
              </AlertDescription>
            </Alert>
            <Button size="sm" onClick={() => mutate()} data-testid="retry-button">
              Retry
            </Button>
          </div>
        )}

        {!loading && !delayedError && data && data.length === 0 && (
          <div className="text-center text-muted-foreground py-12">
            No {category} found.
          </div>
        )}

        {!loading && !delayedError && data && data.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.map((item: ServiceItem) => (
              <Card
                data-testid={`item-card-${item.id}`}
                key={item.id}
                className={`p-4 space-y-2 cursor-pointer border-2 transition-colors rounded-lg shadow-sm ${selectedItemId === item.id ? 'border-zion-purple ring-2 ring-zion-purple' : 'hover:border-zion-purple/70'} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zion-purple`}
                onClick={() => setSelectedItemId(item.id)}
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setSelectedItemId(item.id);
                  }
                }}
              >
                <div className="font-semibold text-lg">{item.name}</div>
                {/* Display other relevant info like price if available */}
                {item.price !== undefined && (
                  <div className="text-sm text-muted-foreground">
                    Price: ${item.price.toFixed(2)}
                  </div>
                )}
                {/* item.slug might not be directly displayable but useful for links if needed later */}
                <Button
                  size="sm"
                  variant="outline"
                  data-testid={`select-item-${item.id}`}
                  onClick={(e) => { e.stopPropagation(); handleSelect(item.id); }}
                  className="w-full mt-2"
                >
                  Select this {category === 'services' ? 'Service' : category === 'talent' ? 'Talent' : 'Item'}
                </Button>
              </Card>
            ))}
          </div>
        )}

        {selectionError && (
          <p className="text-red-500 text-sm mt-2" data-testid="selection-error">
            {selectionError}
          </p>
        )}
        <Button onClick={handleContinue} disabled={loading || !!delayedError || !selectedItemId} className="mt-6">
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
          <div data-testid="selected-item-name" className="text-lg font-semibold text-zion-slate-dark">
            Selected {category === 'services' ? 'Service' : category === 'talent' ? 'Talent' : 'Item'}: {selectedItem.name}
          </div>
        )}
        {selectedItem && selectedItem.price !== undefined && (
           <div className="text-md text-muted-foreground">
             Price: ${selectedItem.price.toFixed(2)}
           </div>
        )}
        <Textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          data-testid="message-input"
          placeholder={`Any specific details about your request for ${selectedItem?.name || 'the selected item'}?`}
          rows={4}
        />
        <div className="flex justify-between items-center">
          <Button variant="outline" onClick={() => setStep(1)}>Back</Button>
          <Button onClick={handleSubmit} disabled={!selectedItemId}>Submit Quote</Button>
        </div>
      </div>
    );
  }

  if (step === 3) {
    return (
      <div data-testid="success-step" className="space-y-4 text-center py-12">
        <StepIndicator step={step} />
        <div className="text-2xl font-semibold text-green-600">Quote Submitted Successfully!</div>
        <p className="text-muted-foreground">
          Thank you for your request regarding {selectedItem?.name || 'the selected item'}. We will get back to you shortly.
        </p>
        <Button onClick={() => {
          setStep(1);
          setSelectedItemId(null);
          setMessage('');
        }}>
          Request Another Quote
        </Button>
      </div>
    );
  }

  return null;
}
