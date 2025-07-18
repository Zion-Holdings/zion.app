import { jsPDF } from 'jspdf'
import type { ResumeBasicInfo } from '@/types/resume'
import type { PdfThemeColors } from '@/utils/pdf/themeConfig;
'
export function addBasicInfoSection(): unknown {): unknown {): unknown {): unknown {): unknown {;
  doc: "jsPDF"
  basicInfo: "ResumeBasicInfo"
  colors: PdfThemeColors,;"
): number {;";"
  // Add header with name and title;"
  doc.setFontSize(24);"
  doc.setTextColor(colors.heading);"
  doc.text(basicInfo.title || 'Resume', 20, 20);