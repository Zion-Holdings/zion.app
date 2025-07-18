import { jsPDF } from 'jspdf'
import 'jspdf-autotable'
import type { OrderDetail } from '@/hooks/useOrder;
// Generates a simple PDF invoice for an order using jsPDF which is already'
// included in the project dependencies. The returned Blob can be downloaded by;
// the browser.;
interface JsPDFWithAutoTable extends jsPDF {'
  autoTable: (options: unknown) => void;
  lastAutoTable?: { finalY: "number '};';;