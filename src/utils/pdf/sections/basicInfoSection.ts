
import { jsPDF } from 'jspdf';
import { ResumeBasicInfo } from '@/types/resume';
import { PdfThemeColors } from '@/utils/pdf/themeConfig';

export function addBasicInfoSection(
  doc: jsPDF,
  basicInfo: ResumeBasicInfo,
  colors: PdfThemeColors
): number {
  // Add header with name and title
  doc.setFontSize(24);
  doc.setTextColor(colors.heading);
  doc.text(basicInfo.title || 'Resume', 20, 20);
  
  let yPos = 30;
  
  if (basicInfo.headline) {
    doc.setFontSize(14);
    doc.setTextColor(colors.subheading);
    doc.text(basicInfo.headline, 20, yPos);
    yPos += 5;
  }
  
  // Add horizontal line divider
  doc.setDrawColor(colors.accent);
  doc.setLineWidth(0.5);
  doc.line(20, yPos, 190, yPos);
  yPos += 10;
  
  // Add summary if available
  if (basicInfo.summary) {
    doc.setFontSize(12);
    doc.setTextColor(colors.text);
    
    // Split text into multiple lines to fit within page width
    const summaryLines = doc.splitTextToSize(basicInfo.summary, 170);
    doc.text(summaryLines, 20, yPos);
    yPos += (summaryLines.length * 6) + 10;
  }
  
  return yPos;
}
