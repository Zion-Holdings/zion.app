import { jsPDF } from 'jspdf';
import 'jspdf-autotable';
import type { OrderDetail } from '@/hooks/useOrder';

// Generates a simple PDF invoice for an order using jsPDF which is already
// included in the project dependencies. The returned Blob can be downloaded by
// the browser.
export async function generateInvoicePdf(order: OrderDetail): Promise<Blob> {
  const doc = new jsPDF();

  doc.setFontSize(18);
  doc.text(`Invoice #${order.orderId}`, 20, 20);

  doc.setFontSize(12);
  doc.text(`Date: ${new Date(order.date).toLocaleDateString()}`, 20, 30);

  // Shipping address section
  const address = `${order.shippingAddress.name}\n${order.shippingAddress.street}\n` +
    `${order.shippingAddress.city}, ${order.shippingAddress.state} ${order.shippingAddress.zip}`;
  doc.text(address, 20, 40);

  // Items table
  const items = order.items.map(i => [i.name, String(i.quantity), `$${i.price.toFixed(2)}`]);
  (doc as any).autoTable({
    head: [['Item', 'Qty', 'Price']],
    body: items,
    startY: 70,
  });

  const finalY = ((doc as any).lastAutoTable?.finalY || 70) + 10;
  doc.text(`Total: $${order.total.toFixed(2)}`, 20, finalY);

  return doc.output('blob');
}
