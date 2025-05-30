export interface OrderRow {
  id: string;
  created_at: string;
  total: number;
  status: string;
  invoice_url: string;
  tracking_number?: string;
  tracking_status?: string;
  tracking_events?: any[];
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
    trackingNumber: row.tracking_number,
    trackingStatus: row.tracking_status,
    trackingEvents: row.tracking_events || [],
    items: row.items || [],
    shippingAddress: row.shipping_address || null,
  };
}

export function serializeOrders(rows: OrderRow[]) {
  return rows.map(serializeOrder);
}
