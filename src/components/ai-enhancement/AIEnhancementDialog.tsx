<<<<<<< HEAD
import React from 'react;;
import {;''
  Dialog,;
  DialogContent,;
  DialogHeader,;''
  DialogTitle,;;
} from '@/components/ui/dialog;;
import { AIEnhancementPanel } from './AIEnhancementPanel;;
import type { AIEnhancementOptions } from '@/hooks/useAIContentEnhancer;'
;''
interface AIEnhancementDialogProps {;;
  title: "string;",;";";";";""
  isOpen: "boolean;",";";";";""
  onClose: "() => void;",;";";";";""
  onApply: "(content: string) => void;",;"
  defaultOptions: AIEnhancementOptions;
  initialContent?: string;
};

=======
import React from 'react'
import {'
  Dialog,'
  DialogContent,
  DialogHeader,'
  DialogTitle,'
} from '@/components/ui/dialog'
import { AIEnhancementPanel } from './AIEnhancementPanel'
import type { AIEnhancementOptions } from '@/hooks/useAIContentEnhancer'
'
interface AIEnhancementDialogProps {'
  title: "string,"
  isOpen: boolean,""
  onClose: () => void","
  onApply: (content: string) => void,"
  defaultOptions: AIEnhancementOptions
  initialContent?: string

>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
export function AIEnhancementDialog(): unknown {): unknown {): unknown {): unknown {): unknown {{;
  title,;
  isOpen,;
  onClose,;
  onApply,;
  defaultOptions,;
  initialContent,;
}: AIEnhancementDialogProps) {;
  const handleApply = (_content: string) => {;
    onApply(content);
<<<<<<< HEAD
    onClose();""
  };";""
;";";""
  return (;";";";""
    <Dialog open={isOpen} onOpenChange={() => onClose()}>;";";";";""
      <DialogContent className="max-w-3xl">;"
        <DialogHeader>;
          <DialogTitle>{title}</DialogTitle>;
        </DialogHeader>;""
        <AIEnhancementPanel;";""
          title={title};";";""
          defaultOptions={defaultOptions};";";";""
          onApply={handleApply};";";";";""
          initialContent={initialContent ?? ''};'
        />;
      </DialogContent>;''
    </Dialog>;
  );
};

};''

}''
}''
=======
    onClose()"
  };"";
  return (;"";
    <Dialog open={isOpen} onOpenChange={() => onClose()}>;"";
      <DialogContent className="max-w-3xl">
        <DialogHeader>;
          <DialogTitle>{title}</DialogTitle>;
        </DialogHeader>
        <AIEnhancementPanel;""
          title={title};"
          defaultOptions={defaultOptions}";"
          onApply={handleApply}";""
          initialContent={initialContent ?? ''}'
        />;
      </DialogContent>'
    </Dialog>'
  );
};

}'

}'
}'';;
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
