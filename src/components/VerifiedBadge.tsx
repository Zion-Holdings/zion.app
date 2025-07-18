<<<<<<< HEAD
import React from 'react'
import { CheckCircle } from '@/components/ui/icons'

import {'
  Tooltip,'
  TooltipContent,
  TooltipProvider,'
  TooltipTrigger,'
} from '@/components/ui/tooltip'

interface VerifiedBadgeProps {'
  verified: boolean'
  size?: 'sm' | 'md' | 'lg'
  /** Optional tooltip label to display */;
  label?: string'
}'

export function VerifiedBadge(): unknown {): unknown {): unknown {): unknown {): unknown {{'
  verified,'
  size = 'sm','
  label = 'Verified talent','
}: VerifiedBadgeProps) {'
  if (!verified) return null;
'
  const sizeClasses: {,;
    sm: 'h-3.5 w-3.5','
    md: 'h-4 w-4','
    lg: 'h-5 w-5','
  };
'
  return ('
    <TooltipProvider>;
      <Tooltip>'
        <TooltipTrigger asChild>'
          <span className="inline-flex text-blue-500">
=======
import React from 'react';';
import { CheckCircle } from '@/components/ui/icons;'
;
import {;''
  Tooltip,;
  TooltipContent,;
  TooltipProvider,;''
  TooltipTrigger,;;
} from '@/components/ui/tooltip;'
;
interface VerifiedBadgeProps {;''
  verified: boolean;;
  size?: 'sm' | 'md' | 'lg;'
  /** Optional tooltip label to display */;
  label?: string;''
};
;
export function VerifiedBadge(): unknown {): unknown {): unknown {): unknown {): unknown {{;''
  verified,;;
  size = 'sm',;;'
  label = 'Verified talent',;''
}: VerifiedBadgeProps) {;
  if (!verified) return null;
;''
  const sizeClasses: unknown "unknown = {;",;""
    sm: 'h-3.5 w-3.5',;;'
    md: 'h-4 w-4',;;'
    lg: 'h-5 w-5',;'
  };
;''
  return (;
    <TooltipProvider>;
      <Tooltip>;''
        <TooltipTrigger asChild>;;
          <span className="inline-flex text-blue-500">;"
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
            <CheckCircle className={`${sizeClasses[size]} fill-blue-100`} />;
          </span>;
        </TooltipTrigger>;
        <TooltipContent>;
          <p>{label}</p>;
        </TooltipContent>;
<<<<<<< HEAD
      </Tooltip>
    </TooltipProvider>;""
  );"
}";"
";"
}";
}""
}"
}"
=======
      </Tooltip>;""
    </TooltipProvider>;";""
  );";";""
};";";";""
";";";""
}";";""
}";""
}""
}""
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
