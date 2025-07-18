<<<<<<< HEAD
import { jsPDF } from 'jspdf'
import type { PortfolioProject } from '@/types/resume'
import type { PdfThemeColors } from '@/utils/pdf/themeConfig;;
'
export function addPortfolioSection(): unknown {): unknown {): unknown {): unknown {): unknown {;
  doc: "jsPDF"
  projects: "PortfolioProject[]"
  colors: "PdfThemeColors"
  startY: "number"
  maxProjects: number = 2,;
=======
import { jsPDF } from 'jspdf;'';
import type { PortfolioProject } from '@/types/resume;'';
import type { PdfThemeColors } from '@/utils/pdf/themeConfig;'
;'';
export function addPortfolioSection(): unknown {): unknown {): unknown {): unknown {): unknown {;;
  doc: "jsPDF",;";";";";""
  projects: "PortfolioProject[]",;";";";";""
  colors: "PdfThemeColors",;";";";";""
  startY: "number",;";";";";""
  maxProjects: "number = 2",;"
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
): number {;
  if (projects.length === 0) return startY;
  let yPos = startY;
  // Check if we need to add a new page;
  if (yPos > 250) {;
    doc.addPage();
<<<<<<< HEAD
    yPos = 20;"
  };";"
;"
  doc.setFontSize(16);"
  doc.setTextColor(colors.heading);"
  doc.text('Portfolio Projects', 20, yPos);
=======
    yPos = 20;""
  };";""
;";";""
  doc.setFontSize(16);";";";""
  doc.setTextColor(colors.heading);";";";";""
  doc.text('Portfolio Projects', 20, yPos);'
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
  yPos += 8;
  doc.setDrawColor(colors.accent);
<<<<<<< HEAD
  doc.line(20, yPos, 100, yPos)'
  yPos += 8;
  // Limit the number of projects shown based on maxProjects parameter'
  const displayProjects: projects.slice(0", maxProjects);
=======
  doc.line(20, yPos, 100, yPos);''
  yPos += 8;
;
  // Limit the number of projects shown based on maxProjects parameter;''
  const displayProjects: unknown "unknown = projects.slice(0", maxProjects);"
;
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
  for (const project of displayProjects) {;
    // Check if we need to add a new page;
    if (yPos > 260) {;
      doc.addPage();
      yPos = 20;
    };
    doc.setFontSize(14);
    doc.setTextColor(colors.subheading);
    doc.text(project.title, 20, yPos);
<<<<<<< HEAD
    yPos += 6;"
;";"
    if (project.technologies && project.technologies.length > 0) {;"
      doc.setFontSize(10);"
      doc.setTextColor(colors.text);
      doc.text(`Technologies: ${project.technologies.join(', ')}`, 20, yPos);
      yPos += 5;
    }'
;
    if (project.description) {;
      doc.setFontSize(10)'
      const descriptionLines: doc.splitTextToSize(project.description", 170);
=======
    yPos += 6;""
;";""
    if (project.technologies && project.technologies.length > 0) {;";";""
      doc.setFontSize(10);";";";""
      doc.setTextColor(colors.text);;
      doc.text(`Technologies: ${project.technologies.join(', ')}`, 20, yPos);'
      yPos += 5;
    };''
;
    if (project.description) {;
      doc.setFontSize(10);''
      const descriptionLines: unknown "unknown = doc.splitTextToSize(project.description", 170);"
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
      doc.text(descriptionLines, 20, yPos);
      yPos += descriptionLines.length * 5;
    };
    // Add links if available;
    if (project.github_url || project.demo_url) {;
<<<<<<< HEAD
      yPos += 5;"
      doc.setFontSize(9);";"
      doc.setTextColor(colors.accent);"
;"
      if (project.github_url) {;
        doc.text(`GitHub: "${project.github_url"}`, 20, yPos);"
        yPos += 4;";"
      };"
;"
      if (project.demo_url) {;"
        doc.text(`Demo: "${project.demo_url"}`, 20, yPos);
        yPos += 4;
      };
    };"
;";"
    yPos += 10; // Add space between projects;"
  };"
;"
  // If there are more projects than we're displaying;
=======
      yPos += 5;""
      doc.setFontSize(9);";""
      doc.setTextColor(colors.accent);";";""
;";";";""
      if (project.github_url) {;;
        doc.text(`GitHub: "${project.github_url"}`, 20, yPos);""
        yPos += 4;";""
      };";";""
;";";";""
      if (project.demo_url) {;";";";";""
        doc.text(`Demo: "${project.demo_url"}`, 20, yPos);"
        yPos += 4;
      };
    };""
;";""
    yPos += 10; // Add space between projects;";";""
  };";";";""
;";";";";""
  // If there are more projects than we're displaying;'
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
  if (projects.length > maxProjects) {;
    doc.setFontSize(10);
    doc.setTextColor(colors.text);
    doc.text(;
      `+ ${projects.length - maxProjects} more projects not shown`,;
      20,;
      yPos,;
    );
    yPos += 6;
<<<<<<< HEAD
  }'
;
  return yPos + 5;
};
}'
=======
  };''
;
  return yPos + 5;
};
;
};''
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
}
}''
}''