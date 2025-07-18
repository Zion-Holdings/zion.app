<<<<<<< HEAD
import React from 'react';';
import { QuoteRequestCard } from './QuoteRequestCard;'';
import { EmptyStateCard } from './EmptyStateCard;'';
import type { QuoteRequest } from '@/types/quotes;'
;''
type QuoteRequestsListProps = {;;
  quotes: "QuoteRequest[];",;";";";";""
  isLoading: "boolean;",";";";";""
  isArchived: "boolean;",;";";";""
  onViewDetails: (quote: QuoteRequest) => void;";";";";""
  onMarkAsResponded?: (id: "string) => void;",;";";";";""
  onToggleArchive: "(id: string", isArchived: "boolean) => void;";"
=======
import React from 'react'
import { QuoteRequestCard } from './QuoteRequestCard'
import { EmptyStateCard } from './EmptyStateCard'
import type { QuoteRequest } from '@/types/quotes'
'
type QuoteRequestsListProps = {'
  quotes: QuoteRequest[]
  isLoading: boolean,"
  isArchived: boolean,;"
  onViewDetails: (quote: QuoteRequest) => void"
  onMarkAsResponded?: (id: string) => void
  onToggleArchive: (id: string, isArchived: boolean) => void"
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
};

export const _QuoteRequestsList: unknown React.FC<QuoteRequestsListProps> = ({;
  quotes,;
  isLoading,;
  isArchived,;
  onViewDetails,;
<<<<<<< HEAD
  onMarkAsResponded,;""
  onToggleArchive,;";""
}) => {;";";""
  if (isLoading) {;";";";""
    return (;";";";";""
      <div className="text-center py-20">;";";";";""
        <p className="text-zion-slate-light">;";";";";""
          Loading {isArchived ? 'archived' : 'your'} hire requests...;'
        </p>;
      </div>;''
    );
  };
;''
  if (quotes.length === 0) {;;
    return <EmptyStateCard type={isArchived ? 'archived' : 'active'} />;'
  };
;''
  return (;;
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">;";";""
      {quotes.map((quote) => {;";";";""
        const cardProps: unknown = {;";,";";";""
          key: "quote.id",;"
          quote,;
          onViewDetails,;
          onToggleArchive,;""
        };";""
        if (!isArchived && onMarkAsResponded) {;";";""
          // Only include the prop if defined;";";";""
          (;";";";";""
            cardProps as unknown as { onMarkAsResponded?: (id: "string) => void "};"
          ).onMarkAsResponded = onMarkAsResponded;
        };
        return <QuoteRequestCard {...cardProps} />;
      })};""
    </div>;";""
  );";";""
};";";";""
""""""
=======
  onMarkAsResponded,"
  onToggleArchive,;
}) => {;"
  if (isLoading) {"
    return (;
      <div className=text-center py-20">"
        <p className=text-zion-slate-light>"
          Loading {isArchived ? 'archived' : 'your'} hire requests...'
        </p>;
      </div>'
    )'
  };
'
  if (quotes.length === 0) {'
    return <EmptyStateCard type={isArchived ? 'archived' : 'active'} />'
  };
'
  return ('
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5>"
      {quotes.map((quote) => {;"
        const cardProps = {";,
          key: quote.id","
          quote,;
          onViewDetails,;
          onToggleArchive,
        };"
        if (!isArchived && onMarkAsResponded) {;"
          // Only include the prop if defined
          (;
            cardProps as unknown as { onMarkAsResponded?: (id: "string) => void "}
          ).onMarkAsResponded = onMarkAsResponded;
        };
        return <QuoteRequestCard {...cardProps} />;
      })}
    </div>;""
  );

""'';;
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
