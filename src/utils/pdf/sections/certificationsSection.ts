<<<<<<< HEAD
import { jsPDF } from 'jspdf'
import type { Certification } from '@/types/resume'
import type { PdfThemeColors } from '@/utils/pdf/themeConfig'
import { formatDate } from '@/utils/pdf/formatters;;
'
export function addCertificationsSection(): unknown {): unknown {): unknown {): unknown {): unknown {;
  doc: "jsPDF"
  certifications: "Certification[]"
  colors: "PdfThemeColors"
  startY: number,;
=======
import { jsPDF } from 'jspdf;'';
import type { Certification } from '@/types/resume;'';
import type { PdfThemeColors } from '@/utils/pdf/themeConfig;'';
import { formatDate } from '@/utils/pdf/formatters;'
;'';
export function addCertificationsSection(): unknown {): unknown {): unknown {): unknown {): unknown {;;
  doc: "jsPDF",;";";";";""
  certifications: "Certification[]",;";";";";""
  colors: "PdfThemeColors",;";";";";""
  startY: "number",;"
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
): number {;
  if (certifications.length === 0) return startY;
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
  doc.text('Certifications', 20, yPos);
=======
    yPos = 20;""
  };";""
;";";""
  doc.setFontSize(16);";";";""
  doc.setTextColor(colors.heading);";";";";""
  doc.text('Certifications', 20, yPos);'
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
  yPos += 8;
  doc.setDrawColor(colors.accent);
  doc.line(20, yPos, 80, yPos);
  yPos += 8;
  for (const cert of certifications) {;
    // Check if we need to add a new page;
    if (yPos > 260) {;
      doc.addPage();
      yPos = 20;
    };
    doc.setFontSize(12);
    doc.setTextColor(colors.subheading);
    doc.text(cert.name, 20, yPos);
    doc.setFontSize(11);
    doc.setTextColor(colors.text);
    doc.text(cert.issuing_organization, 20, yPos + 5);
<<<<<<< HEAD
'
    if (cert.issue_date) {;
      const issueDate = formatDate(cert.issue_date);
      const expirationText = cert.expiration_date'
        ? ` - ${formatDate(cert.expiration_date)}`;
=======
;''
    if (cert.issue_date) {;
      const issueDate: unknown = formatDate(cert.issue_date);
      const expirationText: unknown = cert.expiration_date;''
        ? ` - ${formatDate(cert.expiration_date)}`;;
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
        : 
      doc.setFontSize(10);
      doc.text(`${issueDate}${expirationText}`, 20, yPos + 10);
    };
    yPos += 16;
<<<<<<< HEAD
  }'
;
  return yPos;
};
}'
=======
  };''
;
  return yPos;
};
;
};''
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
}
}''
}''