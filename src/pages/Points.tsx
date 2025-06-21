import { Gift } from 'lucide-react';
import { EmptyState } from '@/components/ui/empty-state';

export default function PointsPage() {
  return (
    <div className="container py-10">
      <EmptyState
        icon={<Gift className="h-10 w-10 text-primary" />}
        title="Rewards Coming Soon"
        description="Your points history will appear here once our rewards backend is ready."
        action={{ text: 'Back to Home', href: '/' }}
      />
    </div>
  );
}
