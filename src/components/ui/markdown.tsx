<<<<<<< HEAD
import React, { Suspense } from 'react';';
const ReactMarkdown: unknown = React.lazy(() => import('react-markdown'));;';
import { cn } from '@/lib/utils;'
;
interface MarkdownProps {;
  content: string;
  className?: string;''
};
;
export function Markdown(): unknown {): unknown {): unknown {): unknown {): unknown {{ content, className }: MarkdownProps) {;''
  return (;;
    <div className={cn('prose dark:prose-invert max-w-none', className)}>;'
      <Suspense fallback={<div>Loading...</div>}>;
        <ReactMarkdown>{content}</ReactMarkdown>;
      </Suspense>;''
    </div>;
  );
};
;
};''
}
}''
}''
=======
import React, { Suspense } from 'react''
const ReactMarkdown = React.lazy(() => import('react-markdown'))'
import { cn } from '@/lib/utils'

interface MarkdownProps {;
  content: string;
  className?: string'
}'

export function Markdown(): unknown {): unknown {): unknown {): unknown {): unknown {{ content, className }: MarkdownProps) {'
  return ('
    <div className={cn('prose dark:prose-invert max-w-none', className)}>'
      <Suspense fallback={<div>Loading...</div>}>;
        <ReactMarkdown>{content}</ReactMarkdown>;
      </Suspense>'
    </div>'
  );
};

}'

}'
}'';;
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
