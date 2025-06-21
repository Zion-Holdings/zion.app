import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from '@/components/ui/form';
import { isProdDomain } from '@/utils/getStripe';

interface GuestCheckoutModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSubmit: (data: { email: string; address: string }) => void;
}

const schema = z.object({
  email: z.string().email('Enter a valid email'),
  address: z.string().min(1, 'Address is required'),
});

type FormValues = z.infer<typeof schema>;

export function GuestCheckoutModal({ open, onOpenChange, onSubmit }: GuestCheckoutModalProps) {
  const form = useForm<FormValues>({ resolver: zodResolver(schema) });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const normalizedEmailForSubmit = email.replace(/@@+/g, '@');
    if (email !== normalizedEmailForSubmit) {
      console.warn(`DIAGNOSTIC: Normalized email value during handleSubmit from "${email}" to "${normalizedEmailForSubmit}"`);
    }
    console.log("Email value at submission (original):", email, "(normalized):", normalizedEmailForSubmit);
    if (email.includes('@@')) { // Keep check on original email for diagnostics
      console.error("DIAGNOSTIC: Original email contained '@@' in handleSubmit before calling onSubmit");
      alert("DIAGNOSTIC: Original email contained '@@'. Check console. Submitting normalized version."); // Temporary
    }
    onSubmit({ email: normalizedEmailForSubmit, address });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-zion-blue border-zion-blue-light text-white">
        <DialogHeader>
          <DialogTitle>Guest Checkout</DialogTitle>
        </DialogHeader>
        {!isProdDomain() && (
          <div className="rounded-md bg-amber-500/20 p-2 text-center text-amber-400">
            Pay with test data – use card 4242 4242 4242 4242 and any future date.
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              const rawValue = e.target.value;
              console.log("Email input onChange raw value:", rawValue);
              const normalizedValue = rawValue.replace(/@@+/g, '@');
              if (rawValue !== normalizedValue) {
                console.warn(`DIAGNOSTIC: Normalized email value during onChange from "${rawValue}" to "${normalizedValue}"`);
              }
              setEmail(normalizedValue);
            }}
            className="guest-checkout-modal-input"
            required
          />
          <Input
            placeholder="Shipping Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="guest-checkout-modal-input"
            required
          />
          <DialogFooter>
            <Button type="submit" className="w-full">
              Continue to Payment
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default GuestCheckoutModal;
