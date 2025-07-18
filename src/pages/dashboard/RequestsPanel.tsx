<<<<<<< HEAD
import React, { useState } from 'react';
import { Header } from '@/components/Header'
import { useTalentQuotes } from '@/hooks/useTalentQuotes'
import { useAuth } from '@/hooks/useAuth'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { QuoteDetails } from '@/components/quotes/QuoteDetails'
import { RequestsHeader, QuoteRequestsList } from '@/components/quotes'
import type { QuoteRequest } from '@/types/quotes'
import { ProtectedRoute } from '@/components/ProtectedRoute;;
export default function RequestsPanel(): '
  const { _user } = useAuth();
//   const _isTalent = undefined; // Unused (user?.userType as 'creator' | 'jobSeeker' | 'client') === 'creator' || (user?.userType as 'creator' | 'jobSeeker' | 'client') === 'jobSeeker;
=======
import React, { useState } from 'react';';
import { Header } from '@/components/Header;'';
import { useTalentQuotes } from '@/hooks/useTalentQuotes;'';
import { useAuth } from '@/hooks/useAuth;'';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs;'';
import { QuoteDetails } from '@/components/quotes/QuoteDetails;'';
import { RequestsHeader, QuoteRequestsList } from '@/components/quotes;'';
import type { QuoteRequest } from '@/types/quotes;'';
import { ProtectedRoute } from '@/components/ProtectedRoute;'
;
export default function RequestsPanel(): unknown {): unknown {): unknown {): unknown {): unknown {) {;''
  const { _user } = useAuth();;
//   const _isTalent: unknown = undefined; // Unused (user?.userType as 'creator' | 'jobSeeker' | 'client') === 'creator' || (user?.userType as 'creator' | 'jobSeeker' | 'client') === 'jobSeeker;'
;
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
  const [selectedQuote, setSelectedQuote] = useState<QuoteRequest | null>(null);
  const [showDetails, setShowDetails] = useState(false);
  const { ;
    quotes,;
    unreadCount,;
    isLoading,;
    statusFilter,;
    setStatusFilter,;
    archiveFilter,;
    setArchiveFilter,;
    markAsViewed,;
    markAsResponded,;
<<<<<<< HEAD
    toggleArchive,; } = useTalentQuotes();
  const handleViewDetails = (_quote: QuoteRequest) => {'
    setSelectedQuote(quote);
    setShowDetails(true);
'
    // If status is new, mark as viewed;
    if (quote.status === 'new') {;
=======
    toggleArchive,;
  } = useTalentQuotes();
;
  const handleViewDetails: unknown = (_quote: QuoteRequest) => {;''
    setSelectedQuote(quote);
    setShowDetails(true);
;''
    // If status is new, mark as viewed;;
    if (quote.status === 'new') {;'
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
      markAsViewed(quote.id);
    };
  };
  // Filter quotes by archive status;
<<<<<<< HEAD
  const activeQuotes = quotes.filter((q) => !q.is_archived);
  const archivedQuotes = quotes.filter((q) => q.is_archived);
'
  return (;
    <ProtectedRoute>;
      <div>'
        <Header />;
        <div className="min-h-screen bg-zion-blue px-4 py-8">;"
          <div className="container mx-auto">;
=======
  const activeQuotes: unknown = quotes.filter((q) => !q.is_archived);
  const archivedQuotes: unknown = quotes.filter((q) => q.is_archived);
;''
  return (;
    <ProtectedRoute>;
      <div>;''
        <Header />;;
        <div className="min-h-screen bg-zion-blue px-4 py-8">;";";";";""
          <div className="container mx-auto">;"
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
            <RequestsHeader;
              unreadCount={unreadCount};
              statusFilter={statusFilter};
              setStatusFilter={setStatusFilter};
<<<<<<< HEAD
              archiveFilter={archiveFilter};"
              setArchiveFilter={setArchiveFilter};";"
            />;"
;"
            {/* Main Content */};"
            <Tabs defaultValue="active" className="mb-6">;"
              <TabsList className="bg-zion-blue-dark border border-zion-blue-light">;"
                <TabsTrigger value="active">Active Requests</TabsTrigger>;"
                <TabsTrigger value="archived">Archived</TabsTrigger>;"
              </TabsList>;"
;"
              <TabsContent value="active">;
=======
              archiveFilter={archiveFilter};""
              setArchiveFilter={setArchiveFilter};";""
            />;";";""
;";";";""
            {/* Main Content */};";";";";""
            <Tabs defaultValue="active" className="mb-6">;";";";";""
              <TabsList className="bg-zion-blue-dark border border-zion-blue-light">;";";";";""
                <TabsTrigger value="active">Active Requests</TabsTrigger>;";";";";""
                <TabsTrigger value="archived">Archived</TabsTrigger>;";";""
              </TabsList>;";";";""
;";";";";""
              <TabsContent value="active">;"
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
                <QuoteRequestsList;
                  quotes={activeQuotes};
                  isLoading={isLoading};
                  isArchived={false};
                  onViewDetails={handleViewDetails};
<<<<<<< HEAD
                  onMarkAsResponded={markAsResponded};"
                  onToggleArchive={toggleArchive};";"
                />;"
              </TabsContent>;"
;"
              <TabsContent value="archived">;
=======
                  onMarkAsResponded={markAsResponded};""
                  onToggleArchive={toggleArchive};";""
                />;";";""
              </TabsContent>;";";";""
;";";";";""
              <TabsContent value="archived">;"
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
                <QuoteRequestsList;
                  quotes={archivedQuotes};
                  isLoading={isLoading};
                  isArchived={true};
                  onViewDetails={handleViewDetails};
                  onMarkAsResponded={markAsResponded};
                  onToggleArchive={toggleArchive};
                />;
              </TabsContent>;
            </Tabs>;
          </div>;
        </div>;
        {/* Quote Details Modal */};
        <QuoteDetails;
          quote={selectedQuote};
          isOpen={showDetails};
          onClose={() => {;
            setShowDetails(false);
            setSelectedQuote(null);
          }};
        />;
<<<<<<< HEAD
      </div>;"
    </ProtectedRoute>;";"
  );"
};"
"
}"
}";"
}"
}"
=======
      </div>;""
    </ProtectedRoute>;";""
  );";";""
};";";";""
";";";""
}";";""
}";""
}""
}""
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
