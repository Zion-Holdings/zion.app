import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// pages/governance/index.tsx
import { useEffect, useState, useMemo } from 'react';
import Link from 'next/link';
import ProposalCard from '@/components/governance/ProposalCard'; // Adjust path if needed
// import MainLayout from '@/components/layout/MainLayout'; // If exists
import { Button } from '@/components/ui/button'; // Adjust path
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'; // Adjust path
import { Input } from '@/components/ui/input'; // For potential text search filter
import { ConnectWalletButton } from '@/components/ConnectWalletButton'; // Assuming this is the correct path
const GovernancePage = () => {
    const [proposals, setProposals] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [statusFilter, setStatusFilter] = useState('ALL');
    const [typeFilter, setTypeFilter] = useState('ALL');
    const [sortBy, setSortBy] = useState('newest');
    const [searchTerm, setSearchTerm] = useState('');
    // Fetch proposals
    useEffect(() => {
        const fetchProposals = async () => {
            setIsLoading(true);
            setError(null);
            try {
                // TODO: Implement backend filtering by passing query params:
                // e.g. /api/governance/proposals/?status=${statusFilter}&type=${typeFilter}&sort=${sortBy}&search=${searchTerm}
                // For now, fetching all and filtering client-side.
                const response = await fetch('/api/governance/proposals/');
                if (!response.ok) {
                    const errorData = await response.json().catch(() => ({ detail: `Failed to fetch proposals: ${response.status}` }));
                    throw new Error(errorData.detail || `Failed to fetch proposals: ${response.status}`);
                }
                const data = await response.json();
                // The Django REST Framework by default returns paginated results under a "results" key.
                // If not paginated, it might be a direct array.
                setProposals(Array.isArray(data) ? data : (data.results || []));
            }
            catch (err) {
                setError(err.message);
                console.error("Fetch error:", err);
            }
            finally {
                setIsLoading(false);
            }
        };
        fetchProposals();
    }, []); // Intentionally empty for now, client-side filtering first. Re-fetch on filter changes if backend supports it.
    const filteredAndSortedProposals = useMemo(() => {
        let processedProposals = [...proposals];
        if (statusFilter !== 'ALL') {
            processedProposals = processedProposals.filter(p => p.status === statusFilter);
        }
        if (typeFilter !== 'ALL') {
            processedProposals = processedProposals.filter(p => p.proposal_type === typeFilter);
        }
        if (searchTerm) {
            processedProposals = processedProposals.filter(p => p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                p.summary.toLowerCase().includes(searchTerm.toLowerCase()));
        }
        if (sortBy === 'newest') {
            processedProposals.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
        }
        else if (sortBy === 'expiring_soon') {
            processedProposals.sort((a, b) => {
                const aDate = a.voting_ends_at ? new Date(a.voting_ends_at).getTime() : Infinity;
                const bDate = b.voting_ends_at ? new Date(b.voting_ends_at).getTime() : Infinity;
                if (aDate === Infinity && bDate === Infinity)
                    return 0; // both null, keep order
                return aDate - bDate;
            });
        }
        // TODO: Add more sorting options like 'most_funded' if applicable
        return processedProposals;
    }, [proposals, statusFilter, typeFilter, sortBy, searchTerm]);
    // These should ideally come from an API or a shared constants file
    const proposalStatuses = ['ALL', 'PENDING_REVIEW', 'ACTIVE', 'CLOSED_SUCCESSFUL', 'CLOSED_FAILED_QUORUM', 'CLOSED_FAILED_REJECTED', 'EXECUTED', 'QUEUED_FOR_EXECUTION', 'CANCELED'];
    const proposalTypes = ['ALL', 'FEATURE', 'BUDGET', 'COMMUNITY_GRANT', 'GENERAL'];
    return (
    // <MainLayout>
    _jsxs("div", { className: "container mx-auto p-4", children: [_jsxs("div", { className: "flex flex-col sm:flex-row justify-between items-center mb-6 gap-4", children: [_jsx("h1", { className: "text-3xl font-bold", children: "Zion Governance" }), _jsxs("div", { className: "flex flex-col sm:flex-row items-center gap-2", children: [_jsx(ConnectWalletButton, {}), _jsx(Link, { href: "/governance/my-votes", passHref: true, children: _jsx(Button, { variant: "outline", className: "w-full sm:w-auto", children: "My Votes" }) }), _jsx(Link, { href: "/governance/create", passHref: true, children: _jsx(Button, { className: "w-full sm:w-auto", children: "Create Proposal" }) })] })] }), _jsxs("div", { className: "mb-6 p-4 border rounded-lg space-y-4", children: [_jsx(Input, { placeholder: "Search by title or summary...", value: searchTerm, onChange: (e) => setSearchTerm(e.target.value), className: "w-full" }), _jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-4", children: [_jsxs(Select, { value: statusFilter, onValueChange: setStatusFilter, children: [_jsx(SelectTrigger, { children: _jsx(SelectValue, { placeholder: "Filter by Status" }) }), _jsx(SelectContent, { children: proposalStatuses.map(status => (_jsx(SelectItem, { value: status, children: status.replace(/_/g, ' ') }, status))) })] }), _jsxs(Select, { value: typeFilter, onValueChange: setTypeFilter, children: [_jsx(SelectTrigger, { children: _jsx(SelectValue, { placeholder: "Filter by Type" }) }), _jsx(SelectContent, { children: proposalTypes.map(type => (_jsx(SelectItem, { value: type, children: type.replace(/_/g, ' ') }, type))) })] }), _jsxs(Select, { value: sortBy, onValueChange: setSortBy, children: [_jsx(SelectTrigger, { children: _jsx(SelectValue, { placeholder: "Sort By" }) }), _jsxs(SelectContent, { children: [_jsx(SelectItem, { value: "newest", children: "Newest First" }), _jsx(SelectItem, { value: "expiring_soon", children: "Expiring Soon" })] })] })] })] }), isLoading && _jsx("div", { className: "text-center py-10", children: "Loading proposals..." }), !isLoading && error && _jsxs("div", { className: "text-center py-10 text-red-500", children: ["Error: ", error] }), !isLoading && !error && filteredAndSortedProposals.length > 0 ? (_jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: filteredAndSortedProposals.map(proposal => (_jsx(ProposalCard, { proposal: proposal }, proposal.id))) })) : (!isLoading && !error && _jsx("p", { className: "text-center py-10", children: "No proposals found matching your criteria." }))] })
    // </MainLayout>
    );
};
export default GovernancePage;
