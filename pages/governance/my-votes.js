import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// pages/governance/my-votes.tsx
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useWallet } from '@/context/WalletContext'; // Adjust path
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'; // Adjust path
import { Badge } from '@/components/ui/badge'; // Adjust path
import ConnectWalletButton from '@/components/ConnectWalletButton'; // Assuming this is the correct path
const MyVotesPage = () => {
    const { isConnected, address: connectedWalletAddress } = useWallet();
    const [votes, setVotes] = useState([]);
    const [isLoading, setIsLoading] = useState(false); // Set to false initially if wallet not connected
    const [error, setError] = useState(null);
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
            }
            catch (err) {
                setError(err.message);
            }
            finally {
                setIsLoading(false);
            }
        };
        fetchMyVotes();
    }, [isConnected, connectedWalletAddress]); // Refetch if wallet connection status or address changes
    const getChoiceVariant = (choice) => {
        if (choice === 'APPROVE')
            return 'secondary'; // Green-ish in shadcn (often success-like)
        if (choice === 'REJECT')
            return 'destructive'; // Red
        return 'outline'; // Grey/Default for ABSTAIN
    };
    if (!isConnected) {
        return (
        // <MainLayout>
        _jsxs("div", { className: "container mx-auto p-4 text-center space-y-4", children: [_jsx("h1", { className: "text-3xl font-bold mb-6", children: "My Voting History" }), _jsx("p", { children: "Please connect your wallet to see your voting history." }), _jsx(ConnectWalletButton, {}), _jsx("div", { className: "mt-6", children: _jsx(Link, { href: "/governance", children: _jsx(Button, { variant: "outline", children: "Back to Proposals" }) }) })] })
        // </MainLayout>
        );
    }
    return (
    // <MainLayout>
    _jsxs("div", { className: "container mx-auto p-4 space-y-6", children: [_jsxs("div", { className: "flex flex-col sm:flex-row justify-between items-center gap-4", children: [_jsx("h1", { className: "text-3xl font-bold", children: "My Voting History" }), _jsx(Link, { href: "/governance", children: _jsx(Button, { variant: "outline", children: "Back to Proposals" }) })] }), isLoading && _jsx("p", { className: "text-center py-5", children: "Loading your votes..." }), error && _jsxs("p", { className: "text-red-500 text-center py-5", children: ["Error: ", error] }), !isLoading && !error && votes.length === 0 && (_jsx("p", { className: "text-center py-5", children: "You haven't voted on any proposals yet with the connected wallet, or your votes are associated with a platform login that isn't linked to this wallet address on the backend." })), !isLoading && !error && votes.length > 0 && (_jsxs(Table, { children: [_jsx(TableCaption, { children: "A list of proposals you've voted on." }), _jsx(TableHeader, { children: _jsxs(TableRow, { children: [_jsx(TableHead, { children: "Proposal Title" }), _jsx(TableHead, { className: "text-center", children: "Your Vote" }), _jsx(TableHead, { className: "text-right", children: "Voting Power Used" }), _jsx(TableHead, { className: "text-right", children: "Date Voted" })] }) }), _jsx(TableBody, { children: votes.map((vote) => (_jsxs(TableRow, { children: [_jsx(TableCell, { className: "font-medium", children: _jsx(Link, { href: `/governance/${vote.proposal.id}`, className: "text-blue-600 hover:underline", children: vote.proposal.title }) }), _jsx(TableCell, { className: "text-center", children: _jsx(Badge, { variant: getChoiceVariant(vote.choice), children: vote.choice }) }), _jsxs(TableCell, { className: "text-right", children: [vote.voting_power_at_snapshot, " ZION$"] }), _jsx(TableCell, { className: "text-right", children: new Date(vote.voted_at).toLocaleString() })] }, vote.id))) })] }))] })
    // </MainLayout>
    );
};
export default MyVotesPage;
