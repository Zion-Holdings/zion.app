import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
// pages/governance/[proposalId].tsx
import { useEffect, useState, useCallback } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useWallet } from '@/context/WalletContext'; // Adjust path
// Import shadcn/ui components: Button, Card, Badge, Progress, Input, etc.
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Input } from '@/components/ui/input'; // For voting power temporary input
const ProposalDetailPage = () => {
    const router = useRouter();
    const proposalId = router.query.proposalId;
    const { address: connectedWalletAddress, isConnected, provider } = useWallet();
    const [proposal, setProposal] = useState(null);
    const [results, setResults] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [voteError, setVoteError] = useState(null);
    const [userVote, setUserVote] = useState(null);
    const [isVoting, setIsVoting] = useState(false);
    const [tempVotingPower, setTempVotingPower] = useState("1.0"); // Temporary state for voting power input
    const fetchProposalData = useCallback(async () => {
        if (!proposalId || !router.isReady)
            return; // Ensure router is ready and proposalId is available
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
            }
            else {
                const errData = await resultsRes.json().catch(() => ({}));
                console.warn('Could not fetch vote results:', errData.detail || resultsRes.status);
                // Set results to null or an empty state if needed
                setResults(null);
            }
        }
        catch (err) {
            setError(err.message);
        }
        finally {
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
            const existingVote = proposal.votes.find(v => (v.voter_wallet_address?.toLowerCase() === connectedWalletAddress.toLowerCase()) ||
                (v.voter && typeof v.voter === 'object' && 'id' in v.voter && v.voter.id === ( /* get platform user id if available */null)));
            setUserVote(existingVote || null);
        }
        else {
            setUserVote(null);
        }
    }, [proposal, connectedWalletAddress]);
    const handleVoteSubmit = async (choice) => {
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
                    // TODO: Add CSRF token header if Django backend requires it for POST requests
                    // Example: 'X-CSRFToken': getCookie('csrftoken'),
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
        }
        catch (err) {
            setVoteError(err.message);
        }
        finally {
            setIsVoting(false);
        }
    };
    if (isLoading)
        return _jsx("div", { className: "container mx-auto p-4 text-center", children: "Loading proposal details..." });
    if (error)
        return _jsxs("div", { className: "container mx-auto p-4 text-red-500 text-center", children: ["Error loading proposal: ", error] });
    if (!proposal)
        return _jsx("div", { className: "container mx-auto p-4 text-center", children: "Proposal not found." });
    const canVote = proposal.status === 'ACTIVE' &&
        (!proposal.voting_starts_at || new Date(proposal.voting_starts_at) <= new Date()) &&
        (!proposal.voting_ends_at || new Date(proposal.voting_ends_at) >= new Date()) &&
        !userVote;
    const totalPowerForProgress = results ? parseFloat(results.approve_power) + parseFloat(results.reject_power) + parseFloat(results.abstain_power) : 0;
    const getStatusVariant = (status) => {
        if (status.includes('ACTIVE'))
            return 'default';
        if (status.includes('SUCCESSFUL') || status.includes('EXECUTED') || status.includes('QUEUED'))
            return 'secondary';
        if (status.includes('FAILED') || status.includes('CANCELED'))
            return 'destructive';
        return 'outline';
    };
    return (
    // <MainLayout>
    _jsxs("div", { className: "container mx-auto p-4 space-y-6", children: [_jsx(Link, { href: "/governance", children: _jsx(Button, { variant: "outline", children: "\u2190 Back to Proposals" }) }), _jsxs(Card, { children: [_jsxs(CardHeader, { children: [_jsxs("div", { className: "flex flex-col sm:flex-row justify-between items-start gap-2", children: [_jsx(CardTitle, { className: "text-2xl md:text-3xl", children: proposal.title }), _jsx(Badge, { variant: getStatusVariant(proposal.status), children: proposal.status.replace(/_/g, ' ') })] }), _jsxs(CardDescription, { className: "text-xs sm:text-sm", children: ["Proposed by: ", proposal.proposer?.username || 'N/A', " | Type: ", proposal.proposal_type.replace(/_/g, ' '), " ", _jsx("br", {}), "Created: ", new Date(proposal.created_at).toLocaleString(), proposal.voting_starts_at && _jsxs(_Fragment, { children: [" ", _jsx("br", { className: "sm:hidden" }), "| Voting Starts: ", new Date(proposal.voting_starts_at).toLocaleString()] }), proposal.voting_ends_at && _jsxs(_Fragment, { children: [" ", _jsx("br", { className: "sm:hidden" }), "| Voting Ends: ", new Date(proposal.voting_ends_at).toLocaleString()] })] })] }), _jsxs(CardContent, { className: "space-y-4", children: [_jsxs("div", { children: [_jsx("h3", { className: "font-semibold text-lg mb-1", children: "Summary:" }), _jsx("p", { className: "whitespace-pre-wrap text-muted-foreground", children: proposal.summary })] }), proposal.quorum_percentage !== null && proposal.quorum_percentage !== undefined && (_jsxs("div", { children: [_jsx("h3", { className: "font-semibold", children: "Quorum:" }), _jsxs("p", { className: "text-muted-foreground", children: [proposal.quorum_percentage * 100, "%"] })] })), (proposal.funding_ask_amount && proposal.funding_ask_token_symbol) && (_jsxs("div", { children: [_jsx("h3", { className: "font-semibold", children: "Funding Ask:" }), _jsxs("p", { className: "text-muted-foreground", children: [proposal.funding_ask_amount, " ", proposal.funding_ask_token_symbol] })] })), proposal.reference_links && proposal.reference_links.length > 0 && (_jsxs("div", { children: [_jsx("h3", { className: "font-semibold", children: "References:" }), _jsx("ul", { className: "list-disc pl-5 space-y-1", children: proposal.reference_links.map((link, i) => (_jsx("li", { children: _jsx("a", { href: link, target: "_blank", rel: "noopener noreferrer", className: "text-blue-600 hover:underline break-all", children: link }) }, i))) })] })), proposal.snapshot_proposal_id && (_jsxs("div", { children: [_jsx("h3", { className: "font-semibold", children: "Snapshot ID:" }), _jsx("p", { className: "text-muted-foreground", children: proposal.snapshot_proposal_id })] }))] })] }), isConnected && (_jsxs(Card, { children: [_jsx(CardHeader, { children: _jsx(CardTitle, { children: "Cast Your Vote" }) }), _jsxs(CardContent, { className: "space-y-3", children: [canVote ? (_jsxs(_Fragment, { children: [_jsxs("div", { className: "mb-4", children: [_jsx("label", { htmlFor: "tempVotingPower", className: "block text-sm font-medium mb-1", children: "Your Voting Power (Temporary Input - ZION$):" }), _jsx(Input, { type: "number", id: "tempVotingPower", value: tempVotingPower, onChange: (e) => setTempVotingPower(e.target.value), placeholder: "e.g., 100.0", className: "w-full md:w-1/2 lg:w-1/3", min: "0.000001" // Example: ensure positive
                                                , step: "any" }), _jsx("p", { className: "text-xs text-muted-foreground mt-1", children: "Note: This is a temporary field. In a full system, your ZION$ balance at a specific snapshot block would be used." })] }), _jsxs("div", { className: "flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3", children: [_jsx(Button, { onClick: () => handleVoteSubmit('APPROVE'), disabled: isVoting, className: "flex-1", children: isVoting ? 'Voting...' : '✅ Approve' }), _jsx(Button, { onClick: () => handleVoteSubmit('REJECT'), disabled: isVoting, variant: "destructive", className: "flex-1", children: isVoting ? 'Voting...' : '❌ Reject' }), _jsx(Button, { onClick: () => handleVoteSubmit('ABSTAIN'), disabled: isVoting, variant: "secondary", className: "flex-1", children: isVoting ? 'Voting...' : '🤷 Abstain' })] })] })) : userVote ? (_jsxs("p", { children: ["You voted: ", _jsx(Badge, { variant: "outline", children: userVote.choice }), " (Voting Power: ", userVote.voting_power_at_snapshot, " ZION$)"] })) : (_jsx("p", { className: "text-muted-foreground", children: proposal.status !== 'ACTIVE' ? "Voting is not active for this proposal." :
                                    (proposal.voting_ends_at && new Date(proposal.voting_ends_at) < new Date()) ? "Voting period has ended." :
                                        (proposal.voting_starts_at && new Date(proposal.voting_starts_at) > new Date()) ? "Voting has not started yet." :
                                            "You may not be eligible to vote or have already voted." })), voteError && _jsx("p", { className: "text-red-600 text-sm mt-2", children: voteError })] })] })), !isConnected && (_jsxs(Card, { className: "text-center p-6", children: [_jsx(CardTitle, { children: "Connect Wallet to Participate" }), _jsx(CardDescription, { className: "my-2", children: "To cast your vote or see your voting status, please connect your wallet." })] })), results ? (_jsxs(Card, { children: [_jsx(CardHeader, { children: _jsx(CardTitle, { children: "Current Results" }) }), _jsxs(CardContent, { className: "space-y-4", children: [_jsxs("div", { children: [_jsxs("div", { className: "flex justify-between mb-1 text-sm", children: [_jsx("span", { children: "Approve" }), _jsxs("span", { children: [results.approve_power, " ZION$ (", results.approve_count, " votes)"] })] }), _jsx(Progress, { value: totalPowerForProgress > 0 ? (parseFloat(results.approve_power) / totalPowerForProgress) * 100 : 0, className: "w-full h-3" })] }), _jsxs("div", { children: [_jsxs("div", { className: "flex justify-between mb-1 text-sm", children: [_jsx("span", { children: "Reject" }), _jsxs("span", { children: [results.reject_power, " ZION$ (", results.reject_count, " votes)"] })] }), _jsx(Progress, { value: totalPowerForProgress > 0 ? (parseFloat(results.reject_power) / totalPowerForProgress) * 100 : 0, className: "w-full h-3 bg-destructive/30", indicatorClassName: "bg-destructive" })] }), _jsxs("div", { children: [_jsxs("div", { className: "flex justify-between mb-1 text-sm", children: [_jsx("span", { children: "Abstain" }), _jsxs("span", { children: [results.abstain_power, " ZION$ (", results.abstain_count, " votes)"] })] }), _jsx(Progress, { value: totalPowerForProgress > 0 ? (parseFloat(results.abstain_power) / totalPowerForProgress) * 100 : 0, className: "w-full h-3 bg-secondary/30", indicatorClassName: "bg-secondary-foreground" })] }), _jsxs("p", { className: "text-sm text-muted-foreground pt-2", children: ["Total Votes Cast: ", results.total_votes_cast] }), _jsxs("p", { className: "text-sm text-muted-foreground", children: ["Total Voting Power Cast: ", results.total_voting_power_cast, " ZION$"] })] })] })) : (_jsx(Card, { className: "text-center p-6", children: _jsx(CardDescription, { children: "Vote results are not yet available or could not be loaded." }) }))] })
    // </MainLayout>
    );
};
export default ProposalDetailPage;
