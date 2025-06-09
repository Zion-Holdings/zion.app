import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '@/store';
import { useRouter } from 'next/router'; // Changed from useNavigate
import CardForm from '@/components/checkout/CardForm';
import { Elements } from '@stripe/react-stripe-js';
import { getStripe } from '@/utils/getStripe';
import { Input } from '@/components/ui/input';
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form';
import { useAuth } from '@/hooks/useAuth';

interface CheckoutFormData {
  name: string;
  email: string;
  address: string;
  city: string;
  country: string;
}

function CheckoutInner() {
  const items = useSelector((s: RootState) => s.cart.items);
  const form = useForm<CheckoutFormData>({ defaultValues: { name: '', email: '', address: '', city: '', country: '' } });
  const router = useRouter(); // Changed from navigate
  const { user } = useAuth();

  const subtotal = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  const [intent, setIntent] = useState<any | null>(null);

  const onSubmit = () => {};

  return (
    <div className="container max-w-2xl py-10">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>
      <div className="mb-4">
        <h2 className="font-semibold mb-2">Order Summary</h2>
        <ul className="space-y-1">
          {items.map((i) => (
            <li key={i.id} className="flex justify-between text-sm">
              <span>{i.name} x {i.quantity}</span>
              <span>${(i.price * i.quantity).toFixed(2)}</span>
            </li>
          ))}
        </ul>
        <div className="flex justify-between font-semibold mt-2">
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField name="name" control={form.control} render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl><Input {...field} /></FormControl>
              <FormMessage />
            </FormItem>
          )} />
          <FormField name="email" control={form.control} render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl><Input type="email" {...field} /></FormControl>
              <FormMessage />
            </FormItem>
          )} />
          <FormField name="address" control={form.control} render={({ field }) => (
            <FormItem>
              <FormLabel>Address</FormLabel>
              <FormControl><Input {...field} /></FormControl>
              <FormMessage />
            </FormItem>
          )} />
          <FormField name="city" control={form.control} render={({ field }) => (
            <FormItem>
              <FormLabel>City</FormLabel>
              <FormControl><Input {...field} /></FormControl>
              <FormMessage />
            </FormItem>
          )} />
          <FormField name="country" control={form.control} render={({ field }) => (
            <FormItem>
              <FormLabel>Country</FormLabel>
              <FormControl><Input {...field} /></FormControl>
              <FormMessage />
            </FormItem>
          )} />
          {intent ? (
            <div className="space-y-2 text-center">
              <p className="font-semibold">Payment Successful!</p>
              <p>Confirmation ID: {intent.id}</p>
            </div>
          ) : (
            <Elements stripe={getStripe()}>
              <CardForm amount={subtotal} onSuccess={setIntent} />
            </Elements>
          )}
          {!intent && (
            <p className="text-xs text-zion-slate-light">
              Use test card 4242 4242 4242 4242 with any future date and CVC.
            </p>
          )}
        </form>
      </Form>
    </div>
  );
}

export default function Checkout() {
  return <CheckoutInner />;
}
