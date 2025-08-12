
import React, { useState } from "react";
import { Header } from "@/components/Header";
import { useTalentQuotes } from "@/hooks/useTalentQuotes";
import { useAuth } from "@/hooks/useAuth";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { QuoteDetails } from "@/components/quotes/QuoteDetails";
import { 
  RequestsHeader, 
  QuoteRequestsList 
} from "@/components/quotes";
import type { QuoteRequest } from "@/types/quotes";
import { ProtectedRoute } from "@/components/ProtectedRoute";

export default function RequestsPanel() {
  const { user } = useAuth();
  const isTalent = (user?.userType as 'creator' | 'jobSeeker' | 'client') === 'creator' || (user?.userType as 'creator' | 'jobSeeker' | 'client') === 'jobSeeker';
  
  const [selectedQuote, setSelectedQuote] = useState<QuoteRequest | null>(null);
  const [showDetails, setShowDetails] = useState(false);

  const {
    quotes,
    unreadCount,
    isLoading,
    statusFilter,
    setStatusFilter,
    archiveFilter,
    setArchiveFilter,
    markAsViewed,
    markAsResponded,
    toggleArchive
  } = useTalentQuotes();

  const handleViewDetails = (quote: QuoteRequest) => {
    setSelectedQuote(quote);
    setShowDetails(true);
    
    // If status is new, mark as viewed
    if (quote.status === 'new') {
      markAsViewed(quote.id);
    }
  };

  // Filter quotes by archive status
  const activeQuotes = quotes.filter(q => !q.is_archived);
  const archivedQuotes = quotes.filter(q => q.is_archived);

  return (
    <ProtectedRoute>
      <div>
        <Header />
        <div className="min-h-screen bg-zion-blue px-4 py-8">
          <div className="container mx-auto">
            <RequestsHeader
              unreadCount={unreadCount}
              statusFilter={statusFilter}
              setStatusFilter={setStatusFilter}
              archiveFilter={archiveFilter}
              setArchiveFilter={setArchiveFilter}
            />
            
            {/* Main Content */}
            <Tabs defaultValue="active" className="mb-6">
              <TabsList className="bg-zion-blue-dark border border-zion-blue-light">
                <TabsTrigger value="active">Active Requests</TabsTrigger>
                <TabsTrigger value="archived">Archived</TabsTrigger>
              </TabsList>
              
              <TabsContent value="active">
                <QuoteRequestsList
                  quotes={activeQuotes}
                  isLoading={isLoading}
                  isArchived={false}
                  onViewDetails={handleViewDetails}
                  onMarkAsResponded={markAsResponded}
                  onToggleArchive={toggleArchive}
                />
              </TabsContent>
              
              <TabsContent value="archived">
                <QuoteRequestsList
                  quotes={archivedQuotes}
                  isLoading={isLoading}
                  isArchived={true}
                  onViewDetails={handleViewDetails}
                  onMarkAsResponded={markAsResponded}
                  onToggleArchive={toggleArchive}
                />
              </TabsContent>
            </Tabs>
          </div>
        </div>
        
        {/* Quote Details Modal */}
        <QuoteDetails
          quote={selectedQuote}
          isOpen={showDetails}
          onClose={() => {
            setShowDetails(false);
            setSelectedQuote(null);
          }}
        />
        
      </div>
    </ProtectedRoute>
  );
}
