// pages/governance/[proposalId].tsx
import React, { useEffect, useState, useCallback } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useWallet } from '@/context/WalletContext'; // Adjust path
// Import shadcn/ui components: Button, Card, Badge, Progress, Input, etc.
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Input } from '@/components/ui/input'; // For voting power temporary input
// import MainLayout from '@/components/layout/MainLayout'; // If a MainLayout component exists
import { getCsrfToken } from '@/utils/cookies'; // Import the CSRF token utility
import { logWarn } from '@/utils/productionLogger';


// Types (should ideally be shared, e.g., from a types/governance.ts file)
interface Vote {
  id: string | number;
  voter_wallet_address?: string | null;
  voter?: { username?: string; id?: number } | null; // If platform user votes (example field)
  choice: string;
  voting_power_at_snapshot: string;
}
interface ProposalFull {
  id: string | number;
  title: string;
  summary: string;
  proposal_type: string;
  status: string;
  proposer?: { username?: string; id?: number } | null;
  created_at: string;
  voting_starts_at?: string | null;
  voting_ends_at?: string | null;
  quorum_percentage?: number | null;
  funding_ask_amount?: number | null;
  funding_ask_token_symbol?: string | null;
  reference_links?: string[];
  votes: Vote[]; // This comes from ProposalDetailSerializer
  snapshot_proposal_id?: string | null;
  snapshot_space_id?: string | null; // Added based on model
}
interface VoteResults {
  approve_count: number;
  reject_count: number;
  abstain_count: number;
  approve_power: string; // Decimal string
  reject_power: string;  // Decimal string
  abstain_power: string; // Decimal string
  total_votes_cast: number;
  total_voting_power_cast: string; // Decimal string
}

const ProposalDetailPage: React.FC = () => {
  const router = useRouter();
  const proposalId = router.query.proposalId as string;
  const { address: connectedWalletAddress, isConnected, provider } = useWallet();

  const [proposal, setProposal] = useState<ProposalFull | null>(null);
  const [results, setResults] = useState<VoteResults | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [voteError, setVoteError] = useState<string | null>(null);
  const [userVote, setUserVote] = useState<Vote | null>(null);
  const [isVoting, setIsVoting] = useState(false);

  const [tempVotingPower, setTempVotingPower] = useState<string>("1.0"); // Temporary state for voting power input

  const fetchProposalData = useCallback(async () => {
    if (!proposalId || !router.isReady) return; // Ensure router is ready and proposalId is available
    setIsLoading(true);
    setError(null);
    setVoteError(null); // Clear vote errors on refetch
    try {
      const [proposalRes, resultsRes] = await Promise.all([
        fetch(`/api/governance/proposals/${proposalId}/`),
        fetch(`/api/governance/proposals/${proposalId}/results/`),
      ]);

      if (!proposalRes.ok) {
        const errData = await proposalRes.json().catch(() => ({}));
        throw new Error(errData.detail || `Failed to fetch proposal: ${proposalRes.status}`);
      }
      const proposalData = await proposalRes.json();
      setProposal(proposalData);

      if (resultsRes.ok) {
        const resultsData = await resultsRes.json();
        setResults(resultsData);
      } else {
        const errData = await resultsRes.json().catch(() => ({}));
        logWarn('Could not fetch vote results:', { data: errData.detail || resultsRes.status });
        // Set results to null or an empty state if needed
        setResults(null);
      }

    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  }, [proposalId]);

  useEffect(() => {
    if (router.isReady && proposalId) { // Ensure router is ready and proposalId is available
        fetchProposalData();
    }
  }, [router.isReady, proposalId, fetchProposalData]); // Depend on router.isReady and proposalId

  useEffect(() => {
    if (proposal && connectedWalletAddress) {
      const existingVote = proposal.votes.find(
        v => (v.voter_wallet_address?.toLowerCase() === connectedWalletAddress.toLowerCase()) ||
             (v.voter && typeof v.voter === 'object' && 'id' in v.voter && (v.voter as any).id === (/* get platform user id if available */ null))
      );
      setUserVote(existingVote || null);
    } else {
      setUserVote(null);
    }
  }, [proposal, connectedWalletAddress]);

  const handleVoteSubmit = async (choice: 'APPROVE' | 'REJECT' | 'ABSTAIN') => {
    if (!proposal || !isConnected || !connectedWalletAddress || !provider) {
      setVoteError("Please connect your wallet to vote.");
      return;
    }
    if (!tempVotingPower || isNaN(parseFloat(tempVotingPower)) || parseFloat(tempVotingPower) <= 0) {
        setVoteError("Please enter a valid voting power greater than 0.");
        return;
    }

    setIsVoting(true);
    setVoteError(null);
    try {
      const response = await fetch(`/api/governance/proposals/${proposal.id}/submit_vote/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': getCsrfToken() || '', // Add CSRF token header
        },
        body: JSON.stringify({
          choice: choice,
          voter_wallet_address: connectedWalletAddress,
          voting_power_at_snapshot: tempVotingPower,
        }),
      });
      if (!response.ok) {
        const errData = await response.json().catch(() => ({}));
        throw new Error(errData.detail || errData.error || `Failed to submit vote: ${response.status}`);
      }
      await fetchProposalData(); // Refetch proposal data to show new vote and updated results
    } catch (err: any) {
      setVoteError(err.message);
    } finally {
      setIsVoting(false);
    }
  };

  if (isLoading) return <div className="container mx-auto p-4 text-center">Loading proposal details...</div>;
  if (error) return <div className="container mx-auto p-4 text-red-500 text-center">Error loading proposal: {error}</div>;
  if (!proposal) return <div className="container mx-auto p-4 text-center">Proposal not found.</div>;

  const canVote = proposal.status === 'ACTIVE' &&
                  (!proposal.voting_starts_at || new Date(proposal.voting_starts_at) <= new Date()) &&
                  (!proposal.voting_ends_at || new Date(proposal.voting_ends_at) >= new Date()) &&
                  !userVote;

  const totalPowerForProgress = results ? parseFloat(results.approve_power) + parseFloat(results.reject_power) + parseFloat(results.abstain_power) : 0;

  const getStatusVariant = (status: string): "default" | "secondary" | "destructive" | "outline" => {
    if (status.includes('ACTIVE')) return 'default';
    if (status.includes('SUCCESSFUL') || status.includes('EXECUTED') || status.includes('QUEUED')) return 'secondary';
    if (status.includes('FAILED') || status.includes('CANCELED')) return 'destructive';
    return 'outline';
  };

  return (
    // <MainLayout>
    <div className="container mx-auto p-4 space-y-6">
      <Link href="/governance"><Button variant="outline">&larr; Back to Proposals</Button></Link>

      <Card>
        <CardHeader>
          <div className="flex flex-col sm:flex-row justify-between items-start gap-2">
            <CardTitle className="text-2xl md:text-3xl">{proposal.title}</CardTitle>
            <Badge variant={getStatusVariant(proposal.status)}>
              {proposal.status.replace(/_/g, ' ')}
            </Badge>
          </div>
          <CardDescription className="text-xs sm:text-sm">
            Proposed by: {proposal.proposer?.username || 'N/A'} | Type: {proposal.proposal_type.replace(/_/g, ' ')} <br/>
            Created: {new Date(proposal.created_at).toLocaleString()}
            {proposal.voting_starts_at && <> <br className="sm:hidden"/>| Voting Starts: {new Date(proposal.voting_starts_at).toLocaleString()}</>}
            {proposal.voting_ends_at && <> <br className="sm:hidden"/>| Voting Ends: {new Date(proposal.voting_ends_at).toLocaleString()}</>}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div><h3 className="font-semibold text-lg mb-1">Summary:</h3><p className="whitespace-pre-wrap text-muted-foreground">{proposal.summary}</p></div>
          {proposal.quorum_percentage !== null && proposal.quorum_percentage !== undefined && (
            <div><h3 className="font-semibold">Quorum:</h3><p className="text-muted-foreground">{proposal.quorum_percentage * 100}%</p></div>
          )}
          {(proposal.funding_ask_amount && proposal.funding_ask_token_symbol) && (
            <div><h3 className="font-semibold">Funding Ask:</h3><p className="text-muted-foreground">{proposal.funding_ask_amount} {proposal.funding_ask_token_symbol}</p></div>
          )}
          {proposal.reference_links && proposal.reference_links.length > 0 && (
            <div>
              <h3 className="font-semibold">References:</h3>
              <ul className="list-disc pl-5 space-y-1">
                {proposal.reference_links.map((link, i) => (
                  <li key={i}><a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline break-all">{link}</a></li>
                ))}
              </ul>
            </div>
          )}
          {proposal.snapshot_proposal_id && (
             <div><h3 className="font-semibold">Snapshot ID:</h3><p className="text-muted-foreground">{proposal.snapshot_proposal_id}</p></div>
          )}
        </CardContent>
      </Card>

      {isConnected && (
        <Card>
          <CardHeader><CardTitle>Cast Your Vote</CardTitle></CardHeader>
          <CardContent className="space-y-3">
            {canVote ? (
              <>
                <div className="mb-4">
                    <label htmlFor="tempVotingPower" className="block text-sm font-medium mb-1">
                        Your Voting Power (Temporary Input - ZION$):
                    </label>
                    <Input
                        type="number"
                        id="tempVotingPower"
                        value={tempVotingPower}
                        onChange={(e) => setTempVotingPower(e.target.value)}
                        placeholder="e.g., 100.0"
                        className="w-full md:w-1/2 lg:w-1/3"
                        min="0.000001" // Example: ensure positive
                        step="any"
                    />
                    <p className="text-xs text-muted-foreground mt-1">
                        Note: This is a temporary field. In a full system, your ZION$ balance at a specific snapshot block would be used.
                    </p>
                </div>
                <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
                  <Button onClick={() => handleVoteSubmit('APPROVE')} disabled={isVoting} className="flex-1">
                    {isVoting ? 'Voting...' : '✅ Approve'}
                  </Button>
                  <Button onClick={() => handleVoteSubmit('REJECT')} disabled={isVoting} variant="destructive" className="flex-1">
                    {isVoting ? 'Voting...' : '❌ Reject'}
                  </Button>
                  <Button onClick={() => handleVoteSubmit('ABSTAIN')} disabled={isVoting} variant="secondary" className="flex-1">
                    {isVoting ? 'Voting...' : '🤷 Abstain'}
                  </Button>
                </div>
              </>
            ) : userVote ? (
              <p>You voted: <Badge variant="outline">{userVote.choice}</Badge> (Voting Power: {userVote.voting_power_at_snapshot} ZION$)</p>
            ) : (
              <p className="text-muted-foreground">
                {proposal.status !== 'ACTIVE' ? "Voting is not active for this proposal." :
                 (proposal.voting_ends_at && new Date(proposal.voting_ends_at) < new Date()) ? "Voting period has ended." :
                 (proposal.voting_starts_at && new Date(proposal.voting_starts_at) > new Date()) ? "Voting has not started yet." :
                 "You may not be eligible to vote or have already voted."}
              </p>
            )}
            {voteError && <p className="text-red-600 text-sm mt-2">{voteError}</p>}
          </CardContent>
        </Card>
      )}
      {!isConnected && (
        <Card className="text-center p-6">
            <CardTitle>Connect Wallet to Participate</CardTitle>
            <CardDescription className="my-2">To cast your vote or see your voting status, please connect your wallet.</CardDescription>
            {/* Assuming ConnectWalletButton is self-contained and handles its own display */}
            {/* <ConnectWalletButton /> */}
        </Card>
      )}

      {results ? (
        <Card>
          <CardHeader><CardTitle>Current Results</CardTitle></CardHeader>
          <CardContent className="space-y-4">
            <div>
              <div className="flex justify-between mb-1 text-sm"><span>Approve</span><span>{results.approve_power} ZION$ ({results.approve_count} votes)</span></div>
              <Progress value={totalPowerForProgress > 0 ? (parseFloat(results.approve_power) / totalPowerForProgress) * 100 : 0} className="w-full h-3" />
            </div>
            <div>
              <div className="flex justify-between mb-1 text-sm"><span>Reject</span><span>{results.reject_power} ZION$ ({results.reject_count} votes)</span></div>
              <Progress value={totalPowerForProgress > 0 ? (parseFloat(results.reject_power) / totalPowerForProgress) * 100 : 0} className="w-full h-3 bg-destructive/30" indicatorClassName="bg-destructive" />
            </div>
            <div>
              <div className="flex justify-between mb-1 text-sm"><span>Abstain</span><span>{results.abstain_power} ZION$ ({results.abstain_count} votes)</span></div>
              <Progress value={totalPowerForProgress > 0 ? (parseFloat(results.abstain_power) / totalPowerForProgress) * 100 : 0} className="w-full h-3 bg-secondary/30" indicatorClassName="bg-secondary-foreground" />
            </div>
            <p className="text-sm text-muted-foreground pt-2">Total Votes Cast: {results.total_votes_cast}</p>
            <p className="text-sm text-muted-foreground">Total Voting Power Cast: {results.total_voting_power_cast} ZION$</p>
          </CardContent>
        </Card>
      ) : (
        <Card className="text-center p-6">
            <CardDescription>Vote results are not yet available or could not be loaded.</CardDescription>
        </Card>
      )}
    </div>
    // </MainLayout>
  );
};

export default ProposalDetailPage;
