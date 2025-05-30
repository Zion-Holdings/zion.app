import { useQuery } from '@tanstack/react-query';
import type { Order } from './useOrders';

export interface OrderItem {
  name: string;
  price: number;
  quantity: number;
}

export interface ShippingAddress {
  name: string;
  street: string;
  city: string;
  state: string;
  zip: string;
}

export interface TrackingEvent {
  status: string;
  location?: string;
  status_details?: string;
  timestamp: string;
}

export interface OrderDetail extends Order {
  items: OrderItem[];
  shippingAddress: ShippingAddress;
  trackingNumber?: string;
  trackingStatus?: string;
  trackingEvents?: TrackingEvent[];
}

export function useGetOrderQuery(orderId?: string) {
  return useQuery({
    queryKey: ['order', orderId],
    queryFn: async () => {
      if (!orderId) return null as unknown as OrderDetail;
      const res = await fetch(`/api/orders/${orderId}`);
      if (!res.ok) {
        throw new Error('Failed to fetch order');
      }
      return (await res.json()) as OrderDetail;
    },
    enabled: !!orderId,
  });
}
