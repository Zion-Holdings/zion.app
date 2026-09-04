'use client';

// Stub: @react-pdf/renderer not installed
// Install with: npm install @react-pdf/renderer

export interface Proposal {
  companyName: string;
  contactName: string;
  email: string;
  selectedServices: {
    title: string;
    tier: string;
    price: number;
    frequency: 'monthly' | 'annual';
  }[];
  subtotal: number;
  discount: number;
  total: number;
}

export const ProposalPDF = ({ proposal }: { proposal: Proposal }) => {
  return null;
};
