// pages/governance/create.tsx
import React, { useState, useEffect } from 'react';
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
import { PROPOSAL_TEMPLATES } from '@/data/proposalTemplates';
import {logErrorToProduction} from '@/utils/productionLogger';

// import MainLayout from '@/components/layout/MainLayout'; // If exists
// import { useAuth } from '@/hooks/useAuth'; // If frontend auth is needed for API calls
// import { useWallet } from '@/context/WalletContext'; // If wallet info is needed

const proposalTypes = ['FEATURE', 'BUDGET', 'COMMUNITY_GRANT', 'GENERAL'] as const;

const proposalSchema = z.object({
  title: z.string().min(5, { message: "Title must be at least 5 characters." }),
  summary: z.string().min(20, { message: "Summary must be at least 20 characters." }),
  proposal_type: z.enum(proposalTypes),
  voting_starts_at: z.string().optional().nullable(), // Using string for datetime-local
  voting_ends_at: z.string().optional().nullable(),   // Using string for datetime-local
  quorum_percentage: z.coerce.number().min(0, { message: "Quorum must be between 0 and 1." }).max(1, { message: "Quorum must be between 0 and 1." }).optional().nullable(),
  funding_ask_amount: z.coerce.number().positive({ message: "Funding amount must be positive." }).optional().nullable(),
  funding_ask_token_symbol: z.string().optional().nullable(),
  reference_links_input: z.string().optional().nullable(), // Raw input for links
});

type ProposalFormData = z.infer<typeof proposalSchema>;

const CreateProposalPage: React.FC = () => {
  const router = useRouter();
  // const { user, token } = useAuth(); // Example
  // const { address: walletAddress } = useWallet(); // Example

  const [apiError, setApiError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<ProposalFormData>({
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

  const { query } = router;

  useEffect(() => {
    const templateId = Array.isArray(query.template) ? query.template[0] : query.template;
    if (templateId) {
      const template = PROPOSAL_TEMPLATES.find((t) => t.id === templateId);
      if (template) {
        form.reset({
          title: template.title,
          summary: `${template.summary}\n\nMotivation: ${template.motivation}\n\nSpecification / Impact: ${template.specification}\n\nCode/Module: ${template.codeModule}`,
          proposal_type: template.proposal_type,
          voting_starts_at: '',
          voting_ends_at: '',
          quorum_percentage: undefined,
          funding_ask_amount: undefined,
          funding_ask_token_symbol: '',
          reference_links_input: '',
        });
      }
    }
  }, [query.template]);

  const onSubmit = async (data: ProposalFormData) => {
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
        const K = key as keyof typeof apiData;
        if (apiData[K] === undefined) {
            delete apiData[K];
        }
    });


    try {
      const response = await fetch('/api/governance/proposals/', { // Adjust API endpoint as needed
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
        logErrorToProduction('Submission error:', { data: errorData });
        throw new Error(errorData.detail || Object.values(errorData).join(', ') || `Error: ${response.status}`);
      }

      const newProposal = await response.json();
      router.push(`/governance/${newProposal.id}`);
    } catch (err: any) {
      setApiError(err.message || 'Failed to create proposal.');
      logErrorToProduction("Error:", { error: err });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    // <MainLayout>
    <div className="container mx-auto p-4 max-w-2xl">
      <h1 className="text-3xl font-bold mb-6">Create New Proposal</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="title"
          render={({ field }: { field: any }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder="Proposal Title" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="summary"
          render={({ field }: { field: any }) => (
            <FormItem>
              <FormLabel>Summary</FormLabel>
                <FormControl>
                  <Textarea placeholder="Detailed summary of the proposal..." {...field} rows={5} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="proposal_type"
          render={({ field }: { field: any }) => (
            <FormItem>
              <FormLabel>Proposal Type</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a proposal type" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {proposalTypes.map(type => (
                      <SelectItem key={type} value={type}>{type.replace('_', ' ')}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="voting_starts_at"
          render={({ field }: { field: any }) => (
            <FormItem>
              <FormLabel>Voting Starts At (Optional)</FormLabel>
                <FormControl>
                  <Input type="datetime-local" {...field} value={field.value || ''} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="voting_ends_at"
          render={({ field }: { field: any }) => (
            <FormItem>
              <FormLabel>Voting Ends At (Optional)</FormLabel>
                <FormControl>
                  <Input type="datetime-local" {...field} value={field.value || ''} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="quorum_percentage"
          render={({ field }: { field: any }) => (
            <FormItem>
              <FormLabel>Quorum Percentage (e.g., 0.2 for 20%)</FormLabel>
                <FormControl>
                  <Input type="number" step="0.01" min="0" max="1" placeholder="0.20" {...field}
                         onChange={e => field.onChange(e.target.value === '' ? undefined : parseFloat(e.target.value))}
                         value={field.value === undefined || field.value === null ? '' : field.value} />
                </FormControl>
                <FormDescription>Required participation rate (0.0 to 1.0).</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="funding_ask_amount"
          render={({ field }: { field: any }) => (
            <FormItem>
              <FormLabel>Funding Ask Amount (Optional)</FormLabel>
                <FormControl>
                  <Input type="number" step="any" placeholder="1000" {...field}
                         onChange={e => field.onChange(e.target.value === '' ? undefined : parseFloat(e.target.value))}
                         value={field.value === undefined || field.value === null ? '' : field.value} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="funding_ask_token_symbol"
          render={({ field }: { field: any }) => (
            <FormItem>
              <FormLabel>Funding Token Symbol (Optional)</FormLabel>
                <FormControl>
                  <Input placeholder="e.g., USD, ZION$" {...field} value={field.value || ''} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="reference_links_input"
          render={({ field }: { field: any }) => (
            <FormItem>
              <FormLabel>Reference Links (Optional)</FormLabel>
                <FormControl>
                  <Textarea placeholder="https://example.com/doc1\nhttps://example.com/discussion" {...field} value={field.value || ''} rows={3}/>
                </FormControl>
                <FormDescription>One URL per line.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          {apiError && <p className="text-sm font-medium text-destructive">{apiError}</p>}

          <Button type="submit" disabled={isLoading} className="w-full">
            {isLoading ? 'Submitting...' : 'Submit Proposal'}
          </Button>
        </form>
      </Form>
    </div>
    // </MainLayout>
  );
};

export default CreateProposalPage;
