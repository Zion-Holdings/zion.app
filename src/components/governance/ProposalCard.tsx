// src/components/governance/ProposalCard.tsx
import React from 'react';
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'; // Adjust path if needed
import { Badge } from '@/components/ui/badge'; // Adjust path
import { Button } from '@/components/ui/button'; // Adjust path

// Mirror the Proposal type from backend/frontend, or define a relevant subset
export interface Proposal {
  id: number | string;
  title: string;
  summary: string;
  proposal_type: string; // 'FEATURE', 'BUDGET', 'COMMUNITY_GRANT', 'GENERAL'
  status: string; // 'PENDING_REVIEW', 'ACTIVE', 'CLOSED_SUCCESSFUL', etc.
  proposer?: { username?: string; id?: number; } | null; // Assuming proposer might have a username
  created_at: string;
  voting_ends_at?: string | null;
  funding_ask_amount?: number; // Amount requested for funding-related proposals
  // Add other fields as needed for display
}

interface ProposalCardProps {
  proposal: Proposal;
}

const ProposalCard: React.FC<ProposalCardProps> = ({ proposal }) => {
  const summarySnippet = proposal.summary.length > 150
    ? proposal.summary.substring(0, 147) + '...'
    : proposal.summary;

  const getStatusVariant = (status: string): "default" | "secondary" | "destructive" | "outline" => {
    if (status.includes('ACTIVE')) return 'default'; // Blue/Primary in shadcn often
    if (status.includes('SUCCESSFUL') || status.includes('EXECUTED') || status.includes('QUEUED')) return 'secondary'; // Green-ish (shadcn secondary can be configured)
    if (status.includes('FAILED') || status.includes('CANCELED')) return 'destructive'; // Red
    return 'outline'; // Grey/Default outline
  };

  const getTypeVariant = (type: string): "default" | "secondary" | "destructive" | "outline" => {
     switch(type) {
        case 'FEATURE': return 'default';
        case 'BUDGET': return 'secondary';
        case 'COMMUNITY_GRANT': return 'destructive'; // Example, adjust based on theme
        case 'GENERAL': return 'outline';
        default: return 'outline';
     }
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle className="mb-1 pr-2">{proposal.title}</CardTitle> {/* Added pr-2 for spacing from badge */}
          <Badge variant={getStatusVariant(proposal.status)} className="whitespace-nowrap shrink-0"> {/* Added shrink-0 */}
            {proposal.status.replace(/_/g, ' ')}
          </Badge>
        </div>
        <CardDescription>
          Proposed by: {proposal.proposer?.username || 'Anonymous'} | Created: {new Date(proposal.created_at).toLocaleDateString()}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-3">{summarySnippet}</p> {/* Increased mb for spacing */}
        <Badge variant={getTypeVariant(proposal.proposal_type)} className="mr-2">
          {proposal.proposal_type.replace(/_/g, ' ')}
        </Badge>
        {proposal.voting_ends_at && (
          <p className="text-xs text-muted-foreground mt-2"> {/* Increased mt for spacing */}
            Voting ends: {new Date(proposal.voting_ends_at).toLocaleString()}
          </p>
        )}
      </CardContent>
      <CardFooter>
        <Link href={`/governance/${proposal.id}`}>
          <Button variant="outline">View Details & Vote</Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ProposalCard;
