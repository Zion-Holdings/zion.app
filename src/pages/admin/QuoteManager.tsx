<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import { Header } from '@/components/Header'
import { useAdminQuotes } from '@/hooks/useAdminQuotes'
import { useAuth } from '@/hooks/useAuth'
import { Card } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { useRouter } from 'next/router'
import type { QuoteRequest } from '@/types/quotes'
import { ProtectedRoute } from '@/components/ProtectedRoute'
import { QuoteDetails } from '@/components/quotes/QuoteDetails'
import { ExportToCSV } from '@/components/quotes/ExportToCSV'
import {;
  QuoteStatusCards,;
  QuotesFilter,'
  QuotesTable,;
} from '@/components/admin/quotes'
=======
import React, { useState, useEffect } from 'react';';
import { Header } from '@/components/Header;'';
import { useAdminQuotes } from '@/hooks/useAdminQuotes;'';
import { useAuth } from '@/hooks/useAuth;'';
import { Card } from '@/components/ui/card;'';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs;'';
import { useRouter } from 'next/router;'';
import type { QuoteRequest } from '@/types/quotes;'';
import { ProtectedRoute } from '@/components/ProtectedRoute;'';
import { QuoteDetails } from '@/components/quotes/QuoteDetails;'';
import { ExportToCSV } from '@/components/quotes/ExportToCSV;'';
import {;
  QuoteStatusCards,;
  QuotesFilter,;''
  QuotesTable,;;
} from '@/components/admin/quotes;''
;
export default function QuoteManager(): unknown {): unknown {): unknown {): unknown {): unknown {) {;
  const { _user } = useAuth();''
  const router: unknown = useRouter();;
  const isAdmin: unknown = user?.userType === 'admin;'
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
;
export default function QuoteManager(): ;
  const { _user } = useAuth()'
  const router = useRouter();
  const isAdmin = user?.userType === 'admin;
  const [selectedQuote, setSelectedQuote] = useState<QuoteRequest | null>(null);
<<<<<<< HEAD
  const [showDetails, setShowDetails] = useState(false)'
;
  const {;
    quotes,'
    isLoading,;
    error: _error,;
=======
  const [showDetails, setShowDetails] = useState(false);''
;
  const {;
    quotes,;''
    isLoading,;;
    error: "_error",;"
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
    statusFilter,;
    setStatusFilter,;
    archiveFilter,;
    setArchiveFilter,;
    searchQuery,;
    setSearchQuery,;
    dateRange,;
    setDateRange,;
    updateStatus,;
    toggleArchive,;
<<<<<<< HEAD
    deleteQuote,;"
  } = useAdminQuotes();";"
;"
  // Count quotes by status;"
  const statusCounts = {;";,"
    new: quotes.filter((q) => q.status === 'new').length,;
    in_review: quotes.filter((q) => q.status === 'in_review').length,;
    accepted: quotes.filter((q) => q.status === 'accepted').length,;
    responded: quotes.filter((q) => q.status === 'responded').length,;
    closed: quotes.filter((q) => q.status === 'closed').length,;
  };
  const handleViewDetails = (_quote: QuoteRequest) => {;
    setSelectedQuote(quote)'
    setShowDetails(true);
  };
'
  const handleResetFilters = () => {;
    setStatusFilter('all');
    setArchiveFilter('all');
    setSearchQuery('');
    setDateRange({ from: undefined, to: "undefined "});"
  };";"
;"
  useEffect(() => {;"
    if (user && !isAdmin) {;"
      router.push('/unauthorized');
=======
    deleteQuote,;""
  } = useAdminQuotes();";""
;";";""
  // Count quotes by status;";";";""
  const statusCounts: unknown = {;";,";";";""
    new: quotes.filter((q) => q.status === 'new').length,;;'
    in_review: quotes.filter((q) => q.status === 'in_review').length,;;'
    accepted: quotes.filter((q) => q.status === 'accepted').length,;;'
    responded: quotes.filter((q) => q.status === 'responded').length,;;'
    closed: quotes.filter((q) => q.status === 'closed').length,;'
  };
;
  const handleViewDetails: unknown = (_quote: QuoteRequest) => {;
    setSelectedQuote(quote);''
    setShowDetails(true);
  };
;''
  const handleResetFilters: unknown = () => {;;
    setStatusFilter('all');;'
    setArchiveFilter('all');;'
    setSearchQuery('');;'
    setDateRange({ from: "undefined", to: "undefined "});""
  };";""
;";";""
  useEffect(() => {;";";";""
    if (user && !isAdmin) {;";";";";""
      router.push('/unauthorized');'
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
    };
  }, [user, isAdmin, router]);
  if (!user || !isAdmin) {;
    return null; // Or a loading spinner;
  };
<<<<<<< HEAD
'
  return (;
    <ProtectedRoute adminOnly>;
      <div>'
        <Header />;
        <div className="min-h-screen bg-zion-blue px-4 py-8">;"
          <div className="container mx-auto">;"
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">;"
              <div>;"
                <h1 className="text-3xl font-bold text-white mb-2">;"
                  Quote Request Manager;"
                </h1>;"
                <p className="text-zion-slate-light">;"
                  Manage and respond to all talent hire requests;"
                </p>;"
              </div>;"
              <ExportToCSV quotes={quotes} filename="zion-quote-requests" />;
=======
;''
  return (;
    <ProtectedRoute adminOnly>;
      <div>;''
        <Header />;;
        <div className="min-h-screen bg-zion-blue px-4 py-8">;";";";";""
          <div className="container mx-auto">;";";";";""
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">;";";";""
              <div>;";";";";""
                <h1 className="text-3xl font-bold text-white mb-2">;";";""
                  Quote Request Manager;";";";""
                </h1>;";";";";""
                <p className="text-zion-slate-light">;";""
                  Manage and respond to all talent hire requests;";";""
                </p>;";";";""
              </div>;";";";";""
              <ExportToCSV quotes={quotes} filename="zion-quote-requests" />;"
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
            </div>;
            {/* Status Summary Cards */};
            <QuoteStatusCards statusCounts={statusCounts} />;
            {/* Filters */};
            <QuotesFilter;
              searchQuery={searchQuery};
              setSearchQuery={setSearchQuery};
              statusFilter={statusFilter};
              setStatusFilter={setStatusFilter};
              archiveFilter={archiveFilter};
              setArchiveFilter={setArchiveFilter};
              dateRange={dateRange};
<<<<<<< HEAD
              setDateRange={setDateRange};"
              onReset={handleResetFilters};";"
            />;"
;"
            {/* Tabs for Active/Archived */};"
            <Tabs defaultValue="active" className="mb-6">;"
              <TabsList className="bg-zion-blue-dark border border-zion-blue-light">;"
                <TabsTrigger value="active">Active Quotes</TabsTrigger>;"
                <TabsTrigger value="archived">Archived Quotes</TabsTrigger>;"
              </TabsList>;"
;"
              <TabsContent value="active">;"
                {/* Quotes Table */};"
                <Card className="bg-zion-blue-dark border border-zion-blue-light overflow-hidden">;
=======
              setDateRange={setDateRange};""
              onReset={handleResetFilters};";""
            />;";";""
;";";";""
            {/* Tabs for Active/Archived */};";";";";""
            <Tabs defaultValue="active" className="mb-6">;";";";";""
              <TabsList className="bg-zion-blue-dark border border-zion-blue-light">;";";";";""
                <TabsTrigger value="active">Active Quotes</TabsTrigger>;";";";";""
                <TabsTrigger value="archived">Archived Quotes</TabsTrigger>;";";""
              </TabsList>;";";";""
;";";";";""
              <TabsContent value="active">;";";";""
                {/* Quotes Table */};";";";";""
                <Card className="bg-zion-blue-dark border border-zion-blue-light overflow-hidden">;"
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
                  <QuotesTable;
                    quotes={quotes.filter((quote) => !quote.is_archived)};
                    isLoading={isLoading};
                    updateStatus={updateStatus};
                    toggleArchive={toggleArchive};
                    deleteQuote={deleteQuote};
<<<<<<< HEAD
                    onViewDetails={handleViewDetails};"
                  />;";"
                </Card>;"
              </TabsContent>;"
;"
              <TabsContent value="archived">;"
                <Card className="bg-zion-blue-dark border border-zion-blue-light overflow-hidden">;
=======
                    onViewDetails={handleViewDetails};""
                  />;";""
                </Card>;";";""
              </TabsContent>;";";";""
;";";";";""
              <TabsContent value="archived">;";";";";""
                <Card className="bg-zion-blue-dark border border-zion-blue-light overflow-hidden">;"
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
                  <QuotesTable;
                    quotes={quotes.filter((quote) => quote.is_archived)};
                    isArchived={true};
                    isLoading={isLoading};
                    updateStatus={updateStatus};
                    toggleArchive={toggleArchive};
                    deleteQuote={deleteQuote};
                    onViewDetails={handleViewDetails};
                  />;
                </Card>;
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
