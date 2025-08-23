
import { jsPDF } from 'jspdf';
import { Skill } from '@/types/resume';
import { PdfThemeColors } from '@/utils/pdf/themeConfig';

export function addSkillsSection(
  doc: jsPDF,
  skills: Skill[],
  colors: PdfThemeColors,
  startY: number
): number {
  if (skills.length === 0) return startY;
  
  let yPos = startY;
  
  doc.setFontSize(16);
  doc.setTextColor(colors.heading);
  doc.text('Skills', 20, yPos);
  yPos += 8;
  
  doc.setDrawColor(colors.accent);
  doc.line(20, yPos, 60, yPos);
  yPos += 8;
  
  // Group skills by category
  const skillsByCategory = skills.reduce((acc, skill) => {
    const category = skill.category || 'Other';
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);
  
  doc.setFontSize(11);
  doc.setTextColor(colors.text);
  
  for (const [category, categorySkills] of Object.entries(skillsByCategory)) {
    doc.setFont('helvetica', 'bold');
    doc.text(category, 20, yPos);
    doc.setFont('helvetica', 'normal');
    
    const skillsText = categorySkills.map(skill => skill.name).join(', ');
    const skillLines = doc.splitTextToSize(skillsText, 160);
    doc.text(skillLines, 30, yPos + 5);
    
    yPos += (skillLines.length * 5) + 10;
  }
  
  return yPos + 5;
}
