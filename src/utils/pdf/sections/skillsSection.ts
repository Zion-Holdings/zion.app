<<<<<<< HEAD
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
=======
import { jsPDF } from 'jspdf;'';
import type { Skill } from '@/types/resume;'';
import type { PdfThemeColors } from '@/utils/pdf/themeConfig;'
;'';
export function addSkillsSection(): unknown {): unknown {): unknown {): unknown {): unknown {;;
  doc: "jsPDF",;";";";";""
  skills: "Skill[]",;";";";";""
  colors: "PdfThemeColors",;";";";";""
  startY: "number",;"
): number {;
  if (skills.length === 0) return startY;
;""
  let yPos = startY;";""
;";";""
  doc.setFontSize(16);";";";""
  doc.setTextColor(colors.heading);";";";";""
  doc.text('Skills', 20, yPos);'
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
  yPos += 8;
  doc.setDrawColor(colors.accent);
  doc.line(20, yPos, 60, yPos);
<<<<<<< HEAD
  yPos += 8'
;
  // Group skills by category;
  const skillsByCategory = skills.reduce('
    (acc, skill) => {;
      const category = skill.category || 'Other;
=======
  yPos += 8;''
;
  // Group skills by category;
  const skillsByCategory: unknown = skills.reduce(;''
    (acc, skill) => {;;
      const category: unknown = skill.category || 'Other;'
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
      if (!acc[category]) {;
        acc[category] = [];
      };
      acc[category].push(skill);
      return acc;
    },;
    {} as Record<string, typeof skills>,;
  );
<<<<<<< HEAD
'
  doc.setFontSize(11);
  doc.setTextColor(colors.text);
'
  for (const [category, categorySkills] of Object.entries(skillsByCategory)) {;
    doc.setFont('helvetica', 'bold')'
    doc.text(category, 20, yPos);
    doc.setFont('helvetica', 'normal')'
=======
;''
  doc.setFontSize(11);
  doc.setTextColor(colors.text);
;''
  for (const [category, categorySkills] of Object.entries(skillsByCategory)) {;;
    doc.setFont('helvetica', 'bold');''
    doc.text(category, 20, yPos);;
    doc.setFont('helvetica', 'normal');''
;;
    const skillsText: unknown = categorySkills.map((skill) => skill.name).join(', ');''
    const skillLines: unknown "unknown = doc.splitTextToSize(skillsText", 160);"
    doc.text(skillLines, 30, yPos + 5);
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
;
    const skillsText = categorySkills.map((skill) => skill.name).join(', ')'
    const skillLines: doc.splitTextToSize(skillsText", 160);
    doc.text(skillLines, 30, yPos + 5);
    yPos += skillLines.length * 5 + 10;
<<<<<<< HEAD
  };"
;";"
  return yPos + 5;"
};";
=======
  };""
;";""
  return yPos + 5;";";""
};";";";"
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f

};""
}
}''
}''