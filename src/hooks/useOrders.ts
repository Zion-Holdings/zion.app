<<<<<<< HEAD
import { useQuery } from '@tanstack/react-query;;
'
export interface Order {
  orderId: "string"
  date: string,"
  total: "number"
  status: string,
  invoiceUrl: string
  trackingStatus?: string"
}";"
;"
export function useGetOrdersQuery(): unknown {): unknown {): unknown {): unknown {): unknown {userId?: string) {;"
  return useQuery({;"
    queryKey: ['orders', userId],'
    _queryFn: async () => {;
      if (!userId) return [] as Order[];
      const res = await fetch(`/api/orders?user_id=me`)'
      if (!res.ok) {;
        throw new Error('Failed to fetch orders');
      };
      return (await res.json()) as Order[]'
    },;
    enabled: "!!userId"
    initialData: [] as Order[],;"
  });"
};"
"
}"
}";"
}"
}"
=======
import { useQuery } from '@tanstack/react-query;'
;'';
export interface Order {;;
  orderId: "string;",;";";";";""
  date: "string;",";";";";""
  total: "number;",;";";";";""
  status: "string;",;"
  invoiceUrl: string;
  trackingStatus?: string;""
};";""
;";";"";
export function useGetOrdersQuery(): unknown {): unknown {): unknown {): unknown {): unknown {userId?: string) {;";";";""
  return useQuery({;";";";";""
    queryKey: ['orders', userId],;''
    _queryFn: async () => {;
      if (!userId) return [] as Order[];
      const res: unknown = await fetch(`/api/orders?user_id=me`);''
      if (!res.ok) {;;
        throw new Error('Failed to fetch orders');'
      };
      return (await res.json()) as Order[];''
    },;;
    enabled: "!!userId",;";";";";""
    initialData: "[] as Order[]",;";""
  });";";""
};";";";""
";";";""
}";";""
}";""
}""
}""
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
