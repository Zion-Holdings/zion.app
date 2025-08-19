export interface OrderRow {
  id: string;
  created_at: string;
  total: number;
  status: string;
  invoice_url: string;
  items?: any[];
  shipping_address?: any;
}

export function serializeOrder(row: OrderRow) {
  return {
    orderId: row.id,
    date: row.created_at,
    total: row.total,
    status: row.status,
    invoiceUrl: row.invoice_url,
    items: row.items || [],
    shippingAddress: row.shipping_address || null,
  };
}

export function serializeOrders(rows: OrderRow[]) {
  return rows.map(serializeOrder);
}
