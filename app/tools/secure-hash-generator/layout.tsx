import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tool | Zion Tech Group',
  description: 'Free developer tool.',
};

export default function ToolLayout({ children }: { children: React.ReactNode }) {
  return children;
}
