
import { Resume } from '@/types/resume';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';
import { getPdfThemeColors } from './themeConfig';
import { loadCustomFonts, FontFamily } from './fontConfig';
import { addBasicInfoSection } from './sections/basicInfoSection';
import { addSkillsSection } from './sections/skillsSection';
import { addWorkExperienceSection } from './sections/workExperienceSection';
import { addEducationSection } from './sections/educationSection';
import { addCertificationsSection } from './sections/certificationsSection';
import { addPortfolioSection } from './sections/portfolioSection';

export interface ExportOptions {
  theme: 'light' | 'dark';
  includePortfolio?: boolean;
  maxProjects?: number;
  fontFamily?: FontFamily;
}

const defaultOptions: ExportOptions = {
  theme: 'light',
  includePortfolio: true,
  maxProjects: 2,
  fontFamily: 'default'
};

export async function exportResumeToPDF(
  resume: Resume, 
  options: Partial<ExportOptions> = {}
): Promise<Blob> {
  const mergedOptions: ExportOptions = { ...defaultOptions, ...options };
  const { theme, includePortfolio, maxProjects, fontFamily } = mergedOptions;
  
  // Create new PDF document (A4)
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4'
  });
  
  // Load custom fonts if specified
  await loadCustomFonts(doc, fontFamily);
  
  // Set up colors based on theme
  const colors = getPdfThemeColors(theme);
  
  // Set background color
  doc.setFillColor(colors.background);
  doc.rect(0, 0, 210, 297, 'F'); // Fill entire page
  
  // Set text color based on theme
  doc.setTextColor(colors.text);
  
  // Add each section of the resume
  let currentY = addBasicInfoSection(doc, resume.basic_info, colors);
  currentY = addSkillsSection(doc, resume.skills, colors, currentY);
  currentY = addWorkExperienceSection(doc, resume.work_experience, colors, currentY);
  currentY = addEducationSection(doc, resume.education, colors, currentY);
  currentY = addCertificationsSection(doc, resume.certifications, colors, currentY);
  
  // Add portfolio projects if needed
  if (includePortfolio && resume.portfolio_projects && resume.portfolio_projects.length > 0) {
    currentY = addPortfolioSection(doc, resume.portfolio_projects, colors, currentY, maxProjects);
  }
  
  return doc.output('blob');
}
