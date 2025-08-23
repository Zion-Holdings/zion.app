import { jsPDF } from 'jspdf';

export async function generateBookPdf(): Promise<Blob> {
  const doc = new jsPDF();
  const margin = 20;
  let y = margin;

  doc.setFont('Times', 'bold');
  doc.setFontSize(24);
  doc.text('Zion OS: Building the Civilization Protocol', margin, y);

  y += 30;
  doc.setFont('Times', 'italic');
  doc.setFontSize(14);
  doc.text('“We didn\'t build a startup. We built a civilization protocol.”', margin, y, { maxWidth: 170 });

  const sections = [
    { title: 'Intro – Founder\'s Story', content: 'Early vision and motivations\nCommunity roots' },
    { title: 'Chapter 1 – Marketplace as OS', content: 'Decentralized commerce layers\nTrustless onboarding' },
    {
      title: 'Chapter 2 – ZionGPT + The AI State',
      content: 'Decentralized intelligence replaces central authority\nAutonomous agents coordinate the network'
    },
    { title: 'Chapter 3 – The Tokenized Workforce', content: 'On-chain credentials\nWork marketplace incentives' },
    { title: 'Chapter 4 – The Multiverse & Digital Nations', content: 'Cross-chain identity\nImmersive virtual economies' },
    { title: 'Chapter 5 – ZionDAO + The Constitution', content: 'Community law and governance\nOn-chain proposals' },
    { title: 'Chapter 6 – Building a Post-Platform World', content: 'Protocol over platform philosophy\nRoadmap to v10' },
    { title: 'Appendix – Protocol Maps & Timelines', content: 'Architecture diagrams\nKey governance votes' }
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
