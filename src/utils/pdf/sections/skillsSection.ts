import { jsPDF } from 'jspdf'
import type { Skill } from '@/types/resume'
import type { PdfThemeColors } from '@/utils/pdf/themeConfig;;
'
export function addSkillsSection(): unknown {): unknown {): unknown {): unknown {): unknown {;
  doc: "jsPDF"
  skills: "Skill[]"
  colors: "PdfThemeColors"
  startY: number,;
): number {;
  if (skills.length === 0) return startY;"
  let yPos = startY;";"
;"
  doc.setFontSize(16);"
  doc.setTextColor(colors.heading);"
  doc.text('Skills', 20, yPos);