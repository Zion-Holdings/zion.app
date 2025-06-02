// Define structure for items as they are stored in the DB or come from Supabase
// This might include product details if joined, or just IDs and quantities.
export interface OrderItemData {
  product_id: string;
  quantity: number;
  price: number; // Price per unit at the time of order
  name?: string; // Denormalized or joined
  image_url?: string; // Denormalized or joined
  // Include other properties that might be stored with the order item
  [key: string]: unknown; // Allow other properties if items structure is very flexible
}

// Define structure for tracking events
export interface TrackingEvent {
  timestamp: string; // ISO date string or a more specific date type
  status: string;
  description: string;
  location?: string;
  // any other relevant tracking event fields
  [key: string]: unknown;
}

// Define structure for shipping address
export interface ShippingAddress {
  name?: string;
  street1: string;
  street2?: string;
  city: string;
  state_province: string; // Or just state
  postal_code: string;
  country: string;
  phone?: string;
  // any other relevant shipping address fields
  [key: string]: unknown;
}

// Raw order data structure from the database/Supabase
export interface OrderRow {
  id: string;
  created_at: string; // ISO date string
  total: number;
  status: string;
  invoice_url: string | null; // Can be null
  tracking_number?: string | null;
  tracking_status?: string | null;
  tracking_events?: TrackingEvent[] | null; // Array of TrackingEvent or null
  items?: OrderItemData[] | null;         // Array of OrderItemData or null
  shipping_address?: ShippingAddress | null; // ShippingAddress object or null
  // Add any other fields that come directly from the 'orders' table
  [key: string]: unknown; // Allow other properties
}

// Structure of the order after serialization for client response
export interface SerializedOrder {
  orderId: string;
  date: string;
  total: number;
  status: string;
  invoiceUrl: string | null;
  trackingNumber?: string | null;
  trackingStatus?: string | null;
  trackingEvents: TrackingEvent[]; // Default to empty array if null/undefined
  items: OrderItemData[];         // Default to empty array if null/undefined
  shippingAddress: ShippingAddress | null; // Default to null if null/undefined
  // Add any other fields that are part of the serialized order
  [key: string]: unknown;
}

export function serializeOrder(row: OrderRow | null | undefined): SerializedOrder | null {
  if (!row) {
    return null;
  }
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

export function serializeOrders(rows: OrderRow[] | null | undefined): SerializedOrder[] {
  if (!rows) {
    return [];
  }
  return rows.map(row => serializeOrder(row)).filter(order => order !== null) as SerializedOrder[];
}
