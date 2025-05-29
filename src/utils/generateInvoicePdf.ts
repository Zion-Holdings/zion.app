import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import type { OrderDetail } from '@/hooks/useOrder';

pdfMake.vfs = pdfFonts.pdfMake.vfs;

export async function generateInvoicePdf(order: OrderDetail): Promise<Blob> {
  const itemsTable = [
    ['Item', 'Qty', 'Price'],
    ...order.items.map(i => [i.name, String(i.quantity), `$${i.price.toFixed(2)}`])
  ];

  const docDef: any = {
    content: [
      { text: `Invoice #${order.orderId}`, style: 'header' },
      { text: `Date: ${new Date(order.date).toLocaleDateString()}` },
      { text: 'Shipping Address', style: 'subheader', margin: [0, 10, 0, 4] },
      `${order.shippingAddress.name}\n${order.shippingAddress.street}\n${order.shippingAddress.city}, ${order.shippingAddress.state} ${order.shippingAddress.zip}`,
      { text: 'Items', style: 'subheader', margin: [0, 10, 0, 4] },
      { table: { widths: ['*', 40, 60], body: itemsTable } },
      { text: `Total: $${order.total.toFixed(2)}`, margin: [0, 10, 0, 0] }
    ],
    styles: {
      header: { fontSize: 18, bold: true },
      subheader: { fontSize: 14, bold: true }
    }
  };

  return new Promise((resolve) => {
    pdfMake.createPdf(docDef).getBlob((blob: Blob) => resolve(blob));
  });
}
