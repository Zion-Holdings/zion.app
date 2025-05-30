import { useQuery } from '@tanstack/react-query';

export interface Order {
  orderId: string;
  date: string;
  total: number;
  status: string;
  invoiceUrl: string;
}

export function useGetOrdersQuery(userId?: string) {
  return useQuery({
    queryKey: ['orders', userId],
    queryFn: async () => {
      if (!userId) return [] as Order[];
      const res = await fetch(`/api/orders?userId=${encodeURIComponent(userId)}`);
      if (!res.ok) {
        throw new Error('Failed to fetch orders');
      }
      return (await res.json()) as Order[];
    },
    enabled: !!userId,
    initialData: [] as Order[],
  });
}
