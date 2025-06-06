import { jsPDF } from 'jspdf';

export async function generateBookPdf(): Promise<Blob> {
  const doc = new jsPDF();
  const margin = 20;
  let y = margin;

  doc.setFont('Times', 'bold');
  doc.setFontSize(24);
  doc.text('Zion OS Book', margin, y);

  y += 30;
  doc.setFont('Times', 'italic');
  doc.setFontSize(14);
  doc.text('“We didn\'t build a startup. We built a civilization protocol.”', margin, y, { maxWidth: 170 });

  const sections = [
    { title: 'Chapter 1 – The Why', content: 'Origin story\nVision: AI + Talent + Trust' },
    { title: 'Chapter 2 – The Blueprint', content: 'Zion OS architecture\nMarketplace, DAO, AI, Token, Academy' },
    { title: 'Chapter 3 – Manifesto & Constitution', content: 'Published values\nFounding principles' },
    { title: 'Chapter 4 – Design Evolution', content: 'Figma timeline\nScreenshots per module' },
    { title: 'Chapter 5 – Global Footprint', content: 'Multiverse map\nTalent reach + ecosystem metrics' },
    { title: 'Chapter 6 – Road to v10', content: 'Roadmap\nDAO votes\nZion\'s future as protocol, not platform' }
  ];

  sections.forEach((section) => {
    doc.addPage();
    y = margin;
    doc.setFont('Times', 'bold');
    doc.setFontSize(18);
    doc.text(section.title, margin, y);
    doc.setFont('Times', 'normal');
    doc.setFontSize(12);
    y += 15;
    const lines = doc.splitTextToSize(section.content, 170);
    doc.text(lines, margin, y);
  });

  return doc.output('blob');
}
