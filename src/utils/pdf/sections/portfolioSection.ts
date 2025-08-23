
import { jsPDF } from 'jspdf';
import { PortfolioProject } from '@/types/resume';
import { PdfThemeColors } from '@/utils/pdf/themeConfig';

export function addPortfolioSection(
  doc: jsPDF,
  projects: PortfolioProject[],
  colors: PdfThemeColors,
  startY: number,
  maxProjects: number = 2
): number {
  if (projects.length === 0) return startY;
  
  let yPos = startY;
  
  // Check if we need to add a new page
  if (yPos > 250) {
    doc.addPage();
    yPos = 20;
  }
  
  doc.setFontSize(16);
  doc.setTextColor(colors.heading);
  doc.text('Portfolio Projects', 20, yPos);
  yPos += 8;
  
  doc.setDrawColor(colors.accent);
  doc.line(20, yPos, 100, yPos);
  yPos += 8;
  
  // Limit the number of projects shown based on maxProjects parameter
  const displayProjects = projects.slice(0, maxProjects);
  
  for (const project of displayProjects) {
    // Check if we need to add a new page
    if (yPos > 260) {
      doc.addPage();
      yPos = 20;
    }
    
    doc.setFontSize(14);
    doc.setTextColor(colors.subheading);
    doc.text(project.title, 20, yPos);
    yPos += 6;
    
    if (project.technologies && project.technologies.length > 0) {
      doc.setFontSize(10);
      doc.setTextColor(colors.text);
      doc.text(`Technologies: ${project.technologies.join(', ')}`, 20, yPos);
      yPos += 5;
    }
    
    if (project.description) {
      doc.setFontSize(10);
      const descriptionLines = doc.splitTextToSize(project.description, 170);
      doc.text(descriptionLines, 20, yPos);
      yPos += (descriptionLines.length * 5);
    }
    
    // Add links if available
    if (project.github_url || project.demo_url) {
      yPos += 5;
      doc.setFontSize(9);
      doc.setTextColor(colors.accent);
      
      if (project.github_url) {
        doc.text(`GitHub: ${project.github_url}`, 20, yPos);
        yPos += 4;
      }
      
      if (project.demo_url) {
        doc.text(`Demo: ${project.demo_url}`, 20, yPos);
        yPos += 4;
      }
    }
    
    yPos += 10; // Add space between projects
  }
  
  // If there are more projects than we're displaying
  if (projects.length > maxProjects) {
    doc.setFontSize(10);
    doc.setTextColor(colors.text);
    doc.text(`+ ${projects.length - maxProjects} more projects not shown`, 20, yPos);
    yPos += 6;
  }
  
  return yPos + 5;
}
