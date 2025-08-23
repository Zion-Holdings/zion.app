import React, { useEffect, useState } from 'react';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

interface Address {
  name: string;
  address: string;
  city: string;
  country: string;
}

interface ShippingRate {
  id: string;
  carrier: string;
  service: string;
  rate: string;
  currency: string;
  delivery_days?: number | null;
  tax?: string;
}

interface Props {
  toAddress: Address | null;
  onSelect?: (rate: ShippingRate) => void;
}

const fromAddress = {
  name: 'Store',
  street1: '123 Market St',
  city: 'San Francisco',
  state: 'CA',
  zip: '94103',
  country: 'US',
};

const parcel = { weight: 1, length: 10, width: 10, height: 10 };

export function CheckoutShippingOptions({ toAddress, onSelect }: Props) {
  const [rates, setRates] = useState<ShippingRate[]>([]);
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState<string>('');

  useEffect(() => {
    if (!toAddress) return;
    const fetchRates = async () => {
      setLoading(true);
      try {
        const res = await fetch('/api/shipping-rates', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ fromAddress, toAddress, parcel }),
        });
        const data = await res.json();
        if (res.ok) {
          setRates(data.rates || []);
        } else {
          console.error('Rates error', data);
        }
      } catch (err) {
        console.error('Rates error', err);
      } finally {
        setLoading(false);
      }
    };
    fetchRates();
  }, [toAddress]);

  const handleChange = (value: string) => {
    setSelected(value);
    const rate = rates.find(r => r.id === value);
    if (rate && onSelect) onSelect(rate);
  };

  if (!toAddress) return null;

  return (
    <div className="my-4">
      <h2 className="font-semibold mb-2">Shipping Options</h2>
      {loading && <p>Loading...</p>}
      {!loading && (
        <RadioGroup value={selected} onValueChange={handleChange} className="space-y-2">
          {rates.map(rate => (
            <label key={rate.id} className="flex items-center gap-2">
              <RadioGroupItem value={rate.id} />
              <span>{`${rate.carrier} ${rate.service} - ${rate.rate} ${rate.currency}`}</span>
              {rate.tax && <span className="ml-1 text-sm">(+{rate.tax} taxes)</span>}
            </label>
          ))}
        </RadioGroup>
      )}
    </div>
  );
}

export type { ShippingRate };
