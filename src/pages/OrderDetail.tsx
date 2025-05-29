import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { useGetOrderQuery } from '@/hooks/useOrder';
import { generateInvoicePdf } from '@/utils/generateInvoicePdf';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';
import { toast } from '@/hooks/use-toast';

export default function OrderDetailPage() {
  // useParams may be untyped in this environment, so cast to the expected shape
  const { orderId } = useParams() as { orderId?: string };
  const { user } = useAuth();
  const { data: order, isLoading } = useGetOrderQuery(orderId);

  const handleDownload = async () => {
    if (!order) return;
    const blob = await generateInvoicePdf(order);
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `invoice-${order.orderId}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleResend = async () => {
    if (!order || !user?.email) return;
    try {
      await supabase.functions.invoke('send-email', {
        body: {
          to: user.email,
          subject: `Receipt for order ${order.orderId}`,
          html: `<p>Thank you for your purchase. Total ${order.total}.</p>`
        }
      });
      toast({ title: 'Receipt sent!' });
    } catch (err) {
      toast({ title: 'Failed to send receipt', variant: 'destructive' });
    }
  };

  if (isLoading || !order) {
    return (
      <div className="container max-w-3xl py-10">
        <Skeleton className="h-6 w-full" />
      </div>
    );
  }

  return (
    <div className="container max-w-3xl py-10 space-y-6">
      <h1 className="text-3xl font-bold">Order #{order.orderId}</h1>

      <div>
        <h2 className="font-semibold mb-2">Items</h2>
        <ul className="space-y-1">
          {order.items.map((item, idx) => (
            <li key={idx} className="flex justify-between">
              <span>{item.name} x {item.quantity}</span>
              <span>${item.price.toFixed(2)}</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className="font-semibold mb-2">Shipping Address</h2>
        <p>{order.shippingAddress.name}</p>
        <p>{order.shippingAddress.street}</p>
        <p>{order.shippingAddress.city}, {order.shippingAddress.state} {order.shippingAddress.zip}</p>
      </div>

      <div className="flex gap-3">
        <Button onClick={handleDownload}>Download PDF Invoice</Button>
        <Button variant="outline" onClick={handleResend}>Resend Receipt</Button>
      </div>

      <Link to="/orders" className="text-zion-purple underline">
        Back to orders
      </Link>
    </div>
  );
}
