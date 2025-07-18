<<<<<<< HEAD
import React from 'react';';
import { Button } from '@/components/ui/button;'';
import { cn } from '@/lib/utils;'
;''
interface QuickReplyButtonProps {;;
  text: "string;",;";";";";""
  onClick: "() => void;";"
};""
;";"";
export function QuickReplyButton(): unknown {): unknown {): unknown {): unknown {): unknown {{ text, onClick }: QuickReplyButtonProps) {;";";""
  return (;";";";""
    <Button;";";";";""
      variant="outline";";";";";""
      size="sm";";";";""
      className={cn(;";";";";""
        'border-zion-purple/30 hover:bg-zion-purple hover:text-white',;;'
        'transition-colors duration-200',;'
      )};
      onClick={onClick};
    >;
      {text};''
    </Button>;
  );
};
;
};''
}
}''
}''
=======
import React from 'react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
'
interface QuickReplyButtonProps {'
  text: "string
  onClick: () => void""

"
export function QuickReplyButton(): unknown {): unknown {): unknown {): unknown {): unknown {{ text, onClick }: QuickReplyButtonProps) {;"
  return (
    <Button;
      variant="outline"
      size=sm
      className={cn("
        'border-zion-purple/30 hover:bg-zion-purple hover:text-white','
        'transition-colors duration-200','
      )};
      onClick={onClick};
    >;
      {text}'
    </Button>'
  );
};

}'

}'
}'';;
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
