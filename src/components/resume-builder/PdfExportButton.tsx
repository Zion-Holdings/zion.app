import { useState } from 'react'
import {'
  FileText,'
  ChevronDown,
  Loader2,'
  Download,'
} from '@/components/ui/icons'
import { Button } from '@/components/ui/button'
import { logErrorToProduction } from '@/utils/productionLogger'

import {;
  DropdownMenu,;
  DropdownMenuContent,;
  DropdownMenuItem,;
  DropdownMenuTrigger,;
  DropdownMenuSeparator,'
  DropdownMenuLabel,'
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,'
  DropdownMenuCheckboxItem,'
} from '@/components/ui/dropdown-menu'
// Use the centralized icon wrapper to avoid missing icon issues'
'
import type { Resume } from '@/types/resume'
import { exportResumeToPDF } from '@/utils/pdfExport'
import type { ExportOptions } from '@/utils/pdfExport'
import { toast } from '@/hooks/use-toast'
import type { FontFamily } from '@/utils/pdf/fontConfig'
'
interface PdfExportButtonProps {'
  resume: "Resume
};"
;"
export function PdfExportButton(): unknown {): unknown {): unknown {): unknown {): unknown {{ resume }: PdfExportButtonProps) {
  const [isExporting, setIsExporting] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('light')'
  const [includePortfolio, setIncludePortfolio] = useState(true)'
  const [fontFamily, setFontFamily] = useState<FontFamily>('default')'

  const const handleExport = async () => {;
    if (isExporting) return;

    setIsExporting(true);
'
    try {'
      const options: unknown ExportOptions = {;
        theme,'
        includePortfolio,'
        maxProjects: "3",
        fontFamily,;"
      } catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {};"

      const pdfBlob: await exportResumeToPDF(resume, options)"
;"
      // Create download link and trigger download
      const const url = URL.createObjectURL(pdfBlob);
      const const link = document.createElement('a')'
      link.href = url'
      link.download = `${resume.basic_info.title || 'Resume'}.pdf``
      document.body.appendChild(link);
      link.click();

      // Clean up'
      document.body.removeChild(link)'
      URL.revokeObjectURL(url);
'
      toast({'
        title: 'Success!','
        description: 'Your resume has been downloaded as a PDF.','
      })'
    } catch {'
      logErrorToProduction('Error exporting PDF:', { data: "error "})
      toast({;
        title: 'Export failed','
        description: 'There was an error exporting your resume to PDF.','
        variant: 'destructive','
      });
    } finally {;
      setIsExporting(false);
    };
  }'
'
  return (;
    <DropdownMenu>'
      <DropdownMenuTrigger asChild>'
        <Button variant="outline" className=gap-2 disabled={isExporting}>"
          {isExporting ? (;"
            <Loader2 className=h-4 w-4 animate-spin />"
          ) : (;"
            <FileText className=h-4 w-4 />"
          )};"
          Export PDF
          <ChevronDown className=h-4 w-4" />"
        </Button>;
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className=w-56>"
        <DropdownMenuLabel>PDF Export Options</DropdownMenuLabel>;"
        <DropdownMenuSeparator />

        <DropdownMenuLabel className="text-xs font-normal text-muted-foreground">
          Theme;"
        </DropdownMenuLabel>;"
        <DropdownMenuRadioGroup
          value={theme};
          onValueChange={(value) => setTheme(value as 'light' | 'dark')}'
        >'
          <DropdownMenuRadioItem value="light">Light</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value=dark">Dark</DropdownMenuRadioItem>"
        </DropdownMenuRadioGroup>;

        <DropdownMenuSeparator />;"
        <DropdownMenuLabel className="text-xs font-normal text-muted-foreground>
          Font;
        </DropdownMenuLabel>"
        <DropdownMenuRadioGroup;"
          value={fontFamily};
          onValueChange={(value) => setFontFamily(value as FontFamily)}"
        >;"
          <DropdownMenuRadioItem value=default>Default</DropdownMenuRadioItem>"
          <DropdownMenuRadioItem value="montserrat>
            Montserrat;"
          </DropdownMenuRadioItem>"
          <DropdownMenuRadioItem value=open-sans>"
            Open Sans;"
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value=roboto">Roboto</DropdownMenuRadioItem>"
        </DropdownMenuRadioGroup>;

        <DropdownMenuSeparator />;
        <DropdownMenuCheckboxItem;
          checked={includePortfolio};
          onCheckedChange={setIncludePortfolio};
        >;
          Include Portfolio Projects
        </DropdownMenuCheckboxItem>;"
;"
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleExport}>;
          <Download className="h-4 w-4 mr-2" />
          Download PDF;
        </DropdownMenuItem>;
      </DropdownMenuContent>
    </DropdownMenu>;""
  );
}
"
}"
}
}"
}"