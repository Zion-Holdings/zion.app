// pages/governance/index.tsx
import React, { useEffect, useState, useMemo } from 'react';
import Link from 'next/link';
import ProposalCard, { Proposal } from '@/components/governance/ProposalCard'; // Adjust path if needed
// import MainLayout from '@/components/layout/MainLayout'; // If exists
import { Button } from '@/components/ui/button'; // Adjust path
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'; // Adjust path
import { Input } from '@/components/ui/input'; // For potential text search filter
import ConnectWalletButton from '@/components/ConnectWalletButton'; // Assuming this is the correct path
import {logErrorToProduction} from '@/utils/productionLogger';



const GovernancePage: React.FC = () => {
  const [proposals, setProposals] = useState<Proposal[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [statusFilter, setStatusFilter] = useState<string>('ALL');
  const [typeFilter, setTypeFilter] = useState<string>('ALL');
  const [sortBy, setSortBy] = useState<string>('newest');
  const [searchTerm, setSearchTerm] = useState<string>('');

  // Fetch proposals
  useEffect(() => {
    const fetchProposals = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const params = new URLSearchParams();
        if (statusFilter !== 'ALL') params.append('status', statusFilter);
        if (typeFilter !== 'ALL') params.append('proposal_type', typeFilter);
        if (searchTerm) params.append('search', searchTerm);
        if (sortBy === 'newest') params.append('ordering', '-created_at');
        if (sortBy === 'expiring_soon') params.append('ordering', 'voting_ends_at');
        if (sortBy === 'most_funded') params.append('ordering', '-funding_ask_amount');

        const query = params.toString() ? `?${params.toString()}` : '';
        const response = await fetch(`/api/governance/proposals/${query}`);
        if (!response.ok) {
          const errorData = await response.json().catch(() => ({ detail: `Failed to fetch proposals: ${response.status}` }));
          throw new Error(errorData.detail || `Failed to fetch proposals: ${response.status}`);
        }
        const data = await response.json();
        // The Django REST Framework by default returns paginated results under a "results" key.
        // If not paginated, it might be a direct array.
        setProposals(Array.isArray(data) ? data : (data.results || []));
      } catch (err: any) {
        setError(err.message);
        logErrorToProduction('Fetch error:', { data: err });
      } finally {
        setIsLoading(false);
      }
    };
    fetchProposals();
  }, [statusFilter, typeFilter, sortBy, searchTerm]);

  const filteredAndSortedProposals = useMemo(() => {
    let processedProposals = [...proposals];

    if (statusFilter !== 'ALL') {
      processedProposals = processedProposals.filter(p => p.status === statusFilter);
    }
    if (typeFilter !== 'ALL') {
      processedProposals = processedProposals.filter(p => p.proposal_type === typeFilter);
    }
    if (searchTerm) {
        processedProposals = processedProposals.filter(p =>
            p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            p.summary.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }

    if (sortBy === 'newest') {
      processedProposals.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
    } else if (sortBy === 'expiring_soon') {
      processedProposals.sort((a, b) => {
        const aDate = a.voting_ends_at ? new Date(a.voting_ends_at).getTime() : Infinity;
        const bDate = b.voting_ends_at ? new Date(b.voting_ends_at).getTime() : Infinity;
        if (aDate === Infinity && bDate === Infinity) return 0; // both null, keep order
        return aDate - bDate;
      });
    } else if (sortBy === 'most_funded') {
      processedProposals.sort((a, b) => (b.funding_ask_amount || 0) - (a.funding_ask_amount || 0));
    }


    return processedProposals;
  }, [proposals, statusFilter, typeFilter, sortBy, searchTerm]);

  // These should ideally come from an API or a shared constants file
  const proposalStatuses = ['ALL', 'PENDING_REVIEW', 'ACTIVE', 'CLOSED_SUCCESSFUL', 'CLOSED_FAILED_QUORUM', 'CLOSED_FAILED_REJECTED', 'EXECUTED', 'QUEUED_FOR_EXECUTION', 'CANCELED'];
  const proposalTypes = ['ALL', 'FEATURE', 'BUDGET', 'COMMUNITY_GRANT', 'GENERAL'];

  return (
    // <MainLayout>
    <div className="container mx-auto p-4">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
        <h1 className="text-3xl font-bold">Zion Governance</h1>
        <div className="flex flex-col sm:flex-row items-center gap-2">
          <ConnectWalletButton />
          <Link href="/governance/my-votes">
            <Button variant="outline" className="w-full sm:w-auto">My Votes</Button>
          </Link>
          <Link href="/governance/zgp-library">
            <Button variant="secondary" className="w-full sm:w-auto">ZGP Library</Button>
          </Link>
          <Link href="/governance/create">
            <Button className="w-full sm:w-auto">Create Proposal</Button>
          </Link>
        </div>
      </div>

      <div className="mb-6 p-4 border rounded-lg space-y-4">
        <Input
            placeholder="Search by title or summary..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full"
        />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Filter by Status" />
              </SelectTrigger>
              <SelectContent>
                {proposalStatuses.map(status => (
                  <SelectItem key={status} value={status}>{status.replace(/_/g, ' ')}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={typeFilter} onValueChange={setTypeFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Filter by Type" />
              </SelectTrigger>
              <SelectContent>
                {proposalTypes.map(type => (
                  <SelectItem key={type} value={type}>{type.replace(/_/g, ' ')}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger>
                <SelectValue placeholder="Sort By" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Newest First</SelectItem>
                <SelectItem value="expiring_soon">Expiring Soon</SelectItem>
                <SelectItem value="most_funded">Most Funded</SelectItem>
              </SelectContent>
            </Select>
        </div>
      </div>

      {isLoading && <div className="text-center py-10">Loading proposals...</div>}
      {!isLoading && error && <div className="text-center py-10 text-red-500">Error: {error}</div>}
      {!isLoading && !error && filteredAndSortedProposals.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAndSortedProposals.map(proposal => (
            <ProposalCard key={proposal.id} proposal={proposal} />
          ))}
        </div>
      ) : (
        !isLoading && !error && <p className="text-center py-10">No proposals found matching your criteria.</p>
      )}
    </div>
    // </MainLayout>
  );
};

export default GovernancePage;
