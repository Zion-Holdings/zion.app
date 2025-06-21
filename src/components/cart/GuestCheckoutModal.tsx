import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, type ControllerRenderProps } from 'react-hook-form';
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

  const handleSubmit = (values: FormValues) => {
    onSubmit(values);
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
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit, (errors) => {
            const firstError = Object.keys(errors)[0] as keyof FormValues | undefined;
            if (firstError) {
              form.setFocus(firstError);
            }
          })} className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }: { field: ControllerRenderProps<FormValues, 'email'> }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="Email"
                      className="bg-zion-blue-dark border-zion-blue-light text-white"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="address"
              render={({ field }: { field: ControllerRenderProps<FormValues, 'address'> }) => (
                <FormItem>
                  <FormLabel>Shipping Address</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Shipping Address"
                      className="bg-zion-blue-dark border-zion-blue-light text-white"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter>
              <Button type="submit" className="w-full">
                Continue to Payment
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

export default GuestCheckoutModal;
