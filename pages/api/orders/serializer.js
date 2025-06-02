export function serializeOrder(row) {
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
export function serializeOrders(rows) {
    return rows.map(serializeOrder);
}
