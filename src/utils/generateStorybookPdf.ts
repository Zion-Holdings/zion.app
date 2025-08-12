import { jsPDF } from 'jspdf';

export interface StoryPage {
  text: string;
}

export async function generateStorybookPdf(pages: StoryPage[]): Promise<Blob> {
  const doc = new jsPDF();
  const margin = 20;
  let y = margin;

  doc.setFont('Times', 'bold');
  doc.setFontSize(24);
  doc.text('The Day the Protocol Woke Up', margin, y);

  doc.setFont('Times', 'normal');
  doc.setFontSize(14);
  pages.forEach((page, idx) => {
    if (idx !== 0) {
      doc.addPage();
    } else {
      y += 20;
    }
    const lines = doc.splitTextToSize(page.text, 170);
    doc.text(lines, margin, idx === 0 ? y : margin);
  });

  return doc.output('blob');
}
