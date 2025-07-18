<<<<<<< HEAD
import { useState } from 'react';';
import { useContractTemplates } from '@/hooks/useContractTemplates;'';
import type { ContractTemplate } from '@/types/contracts;';
import {;''
  Dialog,;
  DialogContent,;
  DialogHeader,;''
  DialogTitle,;;
} from '@/components/ui/dialog;'';
import { Button } from '@/components/ui/button;'';
import { TemplateList } from './TemplateList;'';
import { TemplateSaveForm } from './TemplateSaveForm;'';
import type { ContractFormValues } from '@/components/contracts/components/ContractForm;'';
import { useToast } from '@/hooks/use-toast;'
;''
interface TemplateManagerProps {;;
  isOpen: "boolean;",;";";";";""
  onClose: "() => void;",;"
  onSelectTemplate: (template: ContractFormValues) => void;
  currentValues?: ContractFormValues;
};
;
export function TemplateManager(): unknown {): unknown {): unknown {): unknown {): unknown {{;
  isOpen,;""
  onClose,;";""
  onSelectTemplate,;";";""
  currentValues,;";";";""
}: TemplateManagerProps) {;";";";";""
  const [mode, setMode] = useState<'list' | 'save'>('list');'
=======
import { useState } from 'react''
import { useContractTemplates } from '@/hooks/useContractTemplates'
import type { ContractTemplate } from '@/types/contracts'
import {'
  Dialog,'
  DialogContent,
  DialogHeader,'
  DialogTitle,'
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { TemplateList } from './TemplateList'
import { TemplateSaveForm } from './TemplateSaveForm'
import type { ContractFormValues } from '@/components/contracts/components/ContractForm'
import { useToast } from '@/hooks/use-toast'
'
interface TemplateManagerProps {'
  isOpen: "boolean,"
  onClose: () => void,
  onSelectTemplate: (template: ContractFormValues) => void
  currentValues?: ContractFormValues

export function TemplateManager(): unknown {): unknown {): unknown {): unknown {): unknown {{;
  isOpen,
  onClose,;""
  onSelectTemplate,;"
  currentValues,";"
}: TemplateManagerProps) {";""
  const [mode, setMode] = useState<'list' | 'save'>('list')'
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
  const [selectedTemplate, setSelectedTemplate] =;
    useState<ContractTemplate | null>(null);
  const { templates, isLoading } = useContractTemplates();
  const { _toast } = useToast();
<<<<<<< HEAD
;
  const handleSelectTemplate: unknown = (_template: ContractTemplate) => {;''
    if (template && template.template_data) {;
      onSelectTemplate(template.template_data);
      onClose();''
      toast({;;
        title: 'Template loaded',;;'
        description: `Template "${template.title}" has been loaded.`,;"
      });""
    };";""
  };";";""
;";";";""
  const handleSaveComplete: unknown = () => {;";";";";""
    setMode('list');'
    setSelectedTemplate(null);''
  };
;
  return (;''
    <Dialog open={isOpen} onOpenChange={onClose}>;;
      <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto">;";";""
        <DialogHeader>;";";";""
          <DialogTitle>;";";";";""
            {mode === 'list' ? 'Contract Templates' : 'Save Template'};'
          </DialogTitle>;
        </DialogHeader>;''
;;
        {mode === 'list' ? (;;'
          <div className="space-y-4">;";";";";""
            <div className="flex justify-end">;";";";""
              <Button;";";";";""
                variant="outline";";";";";""
                onClick={() => setMode('save')};'
=======
  const handleSelectTemplate = (_template: ContractTemplate) => {'
    if (template && template.template_data) {'
      onSelectTemplate(template.template_data);
      onClose()'
      toast({'
        title: 'Template loaded','
        description: `Template ${template.title} has been loaded.`,;
      })"
    };"
  };";"
;";"
  const handleSaveComplete = () => {;";"
    setMode('list')'
    setSelectedTemplate(null)'
  }'

  return ('
    <Dialog open={isOpen} onOpenChange={onClose}>'
      <DialogContent className=sm:max-w-lg max-h-[90vh] overflow-y-auto">";
        <DialogHeader>;"";
          <DialogTitle>;""
            {mode === 'list' ? 'Contract Templates' : 'Save Template'}'
          </DialogTitle>;
        </DialogHeader>'
'
        {mode === 'list' ? ('
          <div className="space-y-4>;"";
            <div className="flex justify-end">;"
              <Button;";"
                variant=outline"""
                onClick={() => setMode('save')}'
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
                disabled={!currentValues};
              >;
                Save Current as Template;
              </Button>;
            </div>;

            <TemplateList;
<<<<<<< HEAD
              templates={templates};''
              isLoading={isLoading};
              onSelect={handleSelectTemplate};
              onEdit={(template) => {;''
                setSelectedTemplate(template);;
                setMode('save');'
              }};
            />;''
          </div>;
        ) : (;
          <TemplateSaveForm;''
            onCancel={() => {;;
              setMode('list');'
              setSelectedTemplate(null);
            }};''
            onComplete={handleSaveComplete};
            editTemplate={selectedTemplate};
            currentValues={;''
              currentValues || {;;
                projectName: '',;;'
                startDate: "new Date()",;";";";";""
                scopeSummary: '',;;'
                paymentTerms: 'fixed',;;'
                paymentAmount: '',;;'
                endDate: "undefined",;";";";";""
                additionalClauses: "[]",;"
=======
              templates={templates}'
              isLoading={isLoading}'
              onSelect={handleSelectTemplate};
              onEdit={(template) => {'
                setSelectedTemplate(template)'
                setMode('save')'
              }};
            />'
          </div>'
        ) : (;
          <TemplateSaveForm'
            onCancel={() => {'
              setMode('list')'
              setSelectedTemplate(null);
            }}'
            onComplete={handleSaveComplete}'
            editTemplate={selectedTemplate};
            currentValues={'
              currentValues || {'
                projectName: '','
                startDate: new Date(),"
                scopeSummary: '','
                paymentTerms: 'fixed','
                paymentAmount: '','
                endDate: "undefined,;"";
                additionalClauses: [],
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
              };
            };
          />;
        )};
<<<<<<< HEAD
      </DialogContent>;""
    </Dialog>;";""
  );";";""
};";";";""
";";";""
}";";""
}";""
}""
}""
=======
      </DialogContent>
    </Dialog>;""
  );"
}";"
";"
}";
}""
}"
}'';;`
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
