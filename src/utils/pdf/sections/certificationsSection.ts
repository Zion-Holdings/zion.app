
import { jsPDF } from 'jspdf';
import { Certification } from '@/types/resume';
import { PdfThemeColors } from '@/utils/pdf/themeConfig';
import { formatDate } from '@/utils/pdf/formatters';

export function addCertificationsSection(
  doc: jsPDF,
  certifications: Certification[],
  colors: PdfThemeColors,
  startY: number
): number {
  if (certifications.length === 0) return startY;
  
  let yPos = startY;
  
  // Check if we need to add a new page
  if (yPos > 250) {
    doc.addPage();
    yPos = 20;
  }
  
  doc.setFontSize(16);
  doc.setTextColor(colors.heading);
  doc.text('Certifications', 20, yPos);
  yPos += 8;
  
  doc.setDrawColor(colors.accent);
  doc.line(20, yPos, 80, yPos);
  yPos += 8;
  
  for (const cert of certifications) {
    // Check if we need to add a new page
    if (yPos > 260) {
      doc.addPage();
      yPos = 20;
    }
    
    doc.setFontSize(12);
    doc.setTextColor(colors.subheading);
    doc.text(cert.name, 20, yPos);
    
    doc.setFontSize(11);
    doc.setTextColor(colors.text);
    doc.text(cert.issuing_organization, 20, yPos + 5);
    
    if (cert.issue_date) {
      const issueDate = formatDate(cert.issue_date);
      const expirationText = cert.expiration_date ? ` - ${formatDate(cert.expiration_date)}` : '';
      doc.setFontSize(10);
      doc.text(`${issueDate}${expirationText}`, 20, yPos + 10);
    }
    
    yPos += 16;
  }
  
  return yPos;
}
