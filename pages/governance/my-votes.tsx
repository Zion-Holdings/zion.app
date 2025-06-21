// pages/governance/my-votes.tsx
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useWallet } from '@/context/WalletContext'; // Adjust path
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'; // Adjust path
import { Badge } from '@/components/ui/badge'; // Adjust path
import ConnectWalletButton from '@/components/ConnectWalletButton'; // Assuming this is the correct path
import { captureException } from '@/utils/sentry';
import { useAuth } from '@/hooks/useAuth';
// import MainLayout from '@/components/layout/MainLayout';

// Types (should ideally be shared)
interface ProposalSlim { // For nested proposal object
  id: number | string;
  title: string;
}
interface UserVote {
  id: number | string;
  proposal: ProposalSlim;
  choice: 'APPROVE' | 'REJECT' | 'ABSTAIN';
  voted_at: string;
  voting_power_at_snapshot: string; // Assuming this is part of the Vote model data
  voter_wallet_address?: string; // If the API returns this for confirmation
}

const MyVotesPage: React.FC = () => {
  const { isConnected, address: connectedWalletAddress } = useWallet();
  const { user } = useAuth();
  const [votes, setVotes] = useState<UserVote[]>([]);
  const [isLoading, setIsLoading] = useState(false); // Set to false initially if wallet not connected
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!isConnected) {
      setIsLoading(false); // Not loading if no wallet connected
      setVotes([]);
      setError(null); // Clear any previous errors
      return;
    }

    const fetchMyVotes = async () => {
      setIsLoading(true);
      setError(null);
      try {
        // This endpoint requires authentication with the Django backend.
        // If using token auth, ensure the token is sent.
        // If using session auth, it should work if frontend and backend are on same domain.
        const response = await fetch('/api/governance/my-votes/');

        if (response.status === 401 || response.status === 403) {
            captureException(new Error(`Forbidden - ${response.status}`), {
              extra: { path: '/api/governance/my-votes/' },
              user: user ? { id: user.id, email: user.email } : undefined,
            });
            setError("Authentication issue: Please ensure you are logged in via the platform's main authentication, or this feature might require wallet-based vote fetching in the future if platform login is separate.");
            setVotes([]);
            return;
        }
        if (!response.ok) {
          const errData = await response.json().catch(() => ({}));
          throw new Error(errData.detail || `Failed to fetch your votes: ${response.status}`);
        }
        const data = await response.json();
        // The API might return votes directly associated with the Django user.
        // If votes are primarily by wallet_address, and Django user isn't linked to wallet on backend,
        // this might need a different endpoint or client-side filtering of all votes (less ideal).
        // For now, assume data is correctly filtered by the backend for the authenticated Django user.
        // If `connectedWalletAddress` is available, we could also filter client-side as a fallback:
        // const walletFilteredVotes = (data.results || data).filter((vote: UserVote) => vote.voter_wallet_address?.toLowerCase() === connectedWalletAddress?.toLowerCase());
        // setVotes(walletFilteredVotes);
        setVotes(Array.isArray(data) ? data : (data.results || []));
      } catch (err: any) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMyVotes();
  }, [isConnected, connectedWalletAddress]); // Refetch if wallet connection status or address changes

  const getChoiceVariant = (choice: string): "default" | "secondary" | "destructive" | "outline" => {
    if (choice === 'APPROVE') return 'secondary'; // Green-ish in shadcn (often success-like)
    if (choice === 'REJECT') return 'destructive'; // Red
    return 'outline'; // Grey/Default for ABSTAIN
  };

  if (!isConnected) {
    return (
      // <MainLayout>
      <div className="container mx-auto p-4 text-center space-y-4">
        <h1 className="text-3xl font-bold mb-6">My Voting History</h1>
        <p>Please connect your wallet to see your voting history.</p>
        <ConnectWalletButton />
        <div className="mt-6">
            <Link href="/governance">
              <Button variant="outline">Back to Proposals</Button>
            </Link>
        </div>
      </div>
      // </MainLayout>
    );
  }

  return (
    // <MainLayout>
    <div className="container mx-auto p-4 space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        <h1 className="text-3xl font-bold">My Voting History</h1>
        <Link href="/governance">
          <Button variant="outline">Back to Proposals</Button>
        </Link>
      </div>

      {isLoading && <p className="text-center py-5">Loading your votes...</p>}
      {error && <p className="text-red-500 text-center py-5">Error: {error}</p>}

      {!isLoading && !error && votes.length === 0 && (
        <p className="text-center py-5">You haven't voted on any proposals yet with the connected wallet, or your votes are associated with a platform login that isn't linked to this wallet address on the backend.</p>
      )}

      {!isLoading && !error && votes.length > 0 && (
        <Table>
          <TableCaption>A list of proposals you've voted on.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Proposal Title</TableHead>
              <TableHead className="text-center">Your Vote</TableHead>
              <TableHead className="text-right">Voting Power Used</TableHead>
              <TableHead className="text-right">Date Voted</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {votes.map((vote) => (
              <TableRow key={vote.id}>
                <TableCell className="font-medium">
                  <Link href={`/governance/${vote.proposal.id}`} className="text-blue-600 hover:underline">
                    {vote.proposal.title}
                  </Link>
                </TableCell>
                <TableCell className="text-center"><Badge variant={getChoiceVariant(vote.choice)}>{vote.choice}</Badge></TableCell>
                <TableCell className="text-right">{vote.voting_power_at_snapshot} ZION$</TableCell>
                <TableCell className="text-right">{new Date(vote.voted_at).toLocaleString()}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </div>
    // </MainLayout>
  );
};

export default MyVotesPage;
