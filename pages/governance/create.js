import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// pages/governance/create.tsx
import { useState } from 'react';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
// Assuming shadcn/ui components are available and auto-imported or aliased via @/components/ui
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
// import MainLayout from '@/components/layout/MainLayout'; // If exists
// import { useAuth } from '@/hooks/useAuth'; // If frontend auth is needed for API calls
// import { useWallet } from '@/context/WalletContext'; // If wallet info is needed
const proposalTypes = ['FEATURE', 'BUDGET', 'COMMUNITY_GRANT', 'GENERAL'];
const proposalSchema = z.object({
    title: z.string().min(5, { message: "Title must be at least 5 characters." }),
    summary: z.string().min(20, { message: "Summary must be at least 20 characters." }),
    proposal_type: z.enum(proposalTypes),
    voting_starts_at: z.string().optional().nullable(), // Using string for datetime-local
    voting_ends_at: z.string().optional().nullable(), // Using string for datetime-local
    quorum_percentage: z.preprocess((val) => (val === "" || val === undefined || val === null) ? undefined : parseFloat(String(val)), z.number().min(0).max(1).optional().nullable()),
    funding_ask_amount: z.preprocess((val) => (val === "" || val === undefined || val === null) ? undefined : parseFloat(String(val)), z.number().positive().optional().nullable()),
    funding_ask_token_symbol: z.string().optional().nullable(),
    reference_links_input: z.string().optional().nullable(), // Raw input for links
});
const CreateProposalPage = () => {
    const router = useRouter();
    // const { user, token } = useAuth(); // Example
    // const { address: walletAddress } = useWallet(); // Example
    const [apiError, setApiError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const form = useForm({
        resolver: zodResolver(proposalSchema),
        defaultValues: {
            title: '',
            summary: '',
            proposal_type: 'GENERAL',
            voting_starts_at: '',
            voting_ends_at: '',
            quorum_percentage: undefined, // Explicitly undefined for optional number
            funding_ask_amount: undefined,
            funding_ask_token_symbol: '',
            reference_links_input: '',
        },
    });
    const onSubmit = async (data) => {
        setIsLoading(true);
        setApiError(null);
        const { reference_links_input, ...restOfData } = data;
        const reference_links = reference_links_input
            ? reference_links_input.split('\n').map(link => link.trim()).filter(link => link)
            : [];
        const apiData = {
            ...restOfData,
            reference_links,
            // Handle empty strings for optional fields if backend expects null or undefined
            voting_starts_at: data.voting_starts_at || null,
            voting_ends_at: data.voting_ends_at || null,
            funding_ask_token_symbol: data.funding_ask_token_symbol || null,
            // proposer_id: user?.id, // If needed
            // proposer_wallet_address: walletAddress, // If needed
        };
        // Remove undefined values which might be problematic for JSON
        Object.keys(apiData).forEach(key => {
            const K = key;
            if (apiData[K] === undefined) {
                delete apiData[K];
            }
        });
        try {
            const response = await fetch('/api/governance/proposals/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    // 'X-CSRFToken': 'your-csrf-token', // Fetch and include if Django CSRF is enforced
                    // 'Authorization': `Bearer ${token}`, // If using token auth
                },
                body: JSON.stringify(apiData),
            });
            if (!response.ok) {
                const errorData = await response.json();
                console.error("Submission error:", errorData);
                throw new Error(errorData.detail || Object.values(errorData).join(', ') || `Error: ${response.status}`);
            }
            const newProposal = await response.json();
            router.push(`/governance/${newProposal.id}`);
        }
        catch (err) {
            setApiError(err.message || 'Failed to create proposal.');
            console.error(err);
        }
        finally {
            setIsLoading(false);
        }
    };
    return (
    // <MainLayout>
    _jsxs("div", { className: "container mx-auto p-4 max-w-2xl", children: [_jsx("h1", { className: "text-3xl font-bold mb-6", children: "Create New Proposal" }), _jsx(Form, { ...form, children: _jsxs("form", { onSubmit: form.handleSubmit(onSubmit), className: "space-y-8", children: [_jsx(FormField, { control: form.control, name: "title", render: ({ field }) => (_jsxs(FormItem, { children: [_jsx(FormLabel, { children: "Title" }), _jsx(FormControl, { children: _jsx(Input, { placeholder: "Proposal Title", ...field }) }), _jsx(FormMessage, {})] })) }), _jsx(FormField, { control: form.control, name: "summary", render: ({ field }) => (_jsxs(FormItem, { children: [_jsx(FormLabel, { children: "Summary" }), _jsx(FormControl, { children: _jsx(Textarea, { placeholder: "Detailed summary of the proposal...", ...field, rows: 5 }) }), _jsx(FormMessage, {})] })) }), _jsx(FormField, { control: form.control, name: "proposal_type", render: ({ field }) => (_jsxs(FormItem, { children: [_jsx(FormLabel, { children: "Proposal Type" }), _jsxs(Select, { onValueChange: field.onChange, defaultValue: field.value, children: [_jsx(FormControl, { children: _jsx(SelectTrigger, { children: _jsx(SelectValue, { placeholder: "Select a proposal type" }) }) }), _jsx(SelectContent, { children: proposalTypes.map(type => (_jsx(SelectItem, { value: type, children: type.replace('_', ' ') }, type))) })] }), _jsx(FormMessage, {})] })) }), _jsx(FormField, { control: form.control, name: "voting_starts_at", render: ({ field }) => (_jsxs(FormItem, { children: [_jsx(FormLabel, { children: "Voting Starts At (Optional)" }), _jsx(FormControl, { children: _jsx(Input, { type: "datetime-local", ...field, value: field.value || '' }) }), _jsx(FormMessage, {})] })) }), _jsx(FormField, { control: form.control, name: "voting_ends_at", render: ({ field }) => (_jsxs(FormItem, { children: [_jsx(FormLabel, { children: "Voting Ends At (Optional)" }), _jsx(FormControl, { children: _jsx(Input, { type: "datetime-local", ...field, value: field.value || '' }) }), _jsx(FormMessage, {})] })) }), _jsx(FormField, { control: form.control, name: "quorum_percentage", render: ({ field }) => (_jsxs(FormItem, { children: [_jsx(FormLabel, { children: "Quorum Percentage (e.g., 0.2 for 20%)" }), _jsx(FormControl, { children: _jsx(Input, { type: "number", step: "0.01", min: "0", max: "1", placeholder: "0.20", ...field, onChange: e => field.onChange(e.target.value === '' ? undefined : parseFloat(e.target.value)), value: field.value === undefined || field.value === null ? '' : field.value }) }), _jsx(FormDescription, { children: "Required participation rate (0.0 to 1.0)." }), _jsx(FormMessage, {})] })) }), _jsx(FormField, { control: form.control, name: "funding_ask_amount", render: ({ field }) => (_jsxs(FormItem, { children: [_jsx(FormLabel, { children: "Funding Ask Amount (Optional)" }), _jsx(FormControl, { children: _jsx(Input, { type: "number", step: "any", placeholder: "1000", ...field, onChange: e => field.onChange(e.target.value === '' ? undefined : parseFloat(e.target.value)), value: field.value === undefined || field.value === null ? '' : field.value }) }), _jsx(FormMessage, {})] })) }), _jsx(FormField, { control: form.control, name: "funding_ask_token_symbol", render: ({ field }) => (_jsxs(FormItem, { children: [_jsx(FormLabel, { children: "Funding Token Symbol (Optional)" }), _jsx(FormControl, { children: _jsx(Input, { placeholder: "e.g., USD, ZION$", ...field, value: field.value || '' }) }), _jsx(FormMessage, {})] })) }), _jsx(FormField, { control: form.control, name: "reference_links_input", render: ({ field }) => (_jsxs(FormItem, { children: [_jsx(FormLabel, { children: "Reference Links (Optional)" }), _jsx(FormControl, { children: _jsx(Textarea, { placeholder: "https://example.com/doc1\\nhttps://example.com/discussion", ...field, value: field.value || '', rows: 3 }) }), _jsx(FormDescription, { children: "One URL per line." }), _jsx(FormMessage, {})] })) }), apiError && _jsx("p", { className: "text-sm font-medium text-destructive", children: apiError }), _jsx(Button, { type: "submit", disabled: isLoading, className: "w-full", children: isLoading ? 'Submitting...' : 'Submit Proposal' })] }) })] })
    // </MainLayout>
    );
};
export default CreateProposalPage;
