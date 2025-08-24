
import React from "react";
import { QuoteRequestCard } from "./QuoteRequestCard";
import { EmptyStateCard } from "./EmptyStateCard";
import type { QuoteRequest } from "@/types/quotes";

type QuoteRequestsListProps = {
  quotes: QuoteRequest[];
  isLoading: boolean;
  isArchived: boolean;
  onViewDetails: (quote: QuoteRequest) => void;
  onMarkAsResponded: (id: string) => void;
  onToggleArchive: (id: string, isArchived: boolean) => void;
};

export const QuoteRequestsList: React.FC<QuoteRequestsListProps> = ({
  quotes,
  isLoading,
  isArchived,
  onViewDetails,
  onMarkAsResponded,
  onToggleArchive
}) => {
  if (isLoading) {
    return (
      <div className="text-center py-20">
        <p className="text-zion-slate-light">Loading {isArchived ? 'archived' : 'your'} hire requests...</p>
      </div>
    );
  }
  
  if (quotes.length === 0) {
    return <EmptyStateCard type={isArchived ? 'archived' : 'active'} />;
  }
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {quotes.map(quote => (
        <QuoteRequestCard
          key={quote.id}
          quote={quote}
          onViewDetails={onViewDetails}
          onMarkAsResponded={!isArchived ? onMarkAsResponded : undefined}
          onToggleArchive={onToggleArchive}
        />
      ))}
    </div>
  );
};
