import { useEffect, useState } from 'react';
import EmptyState from '../../components/ui/EmptyState';
import { useRole } from '../../components/context/RoleContext';

export default function DashboardPage() {
  const { role } = useRole();
  const [hasData, setHasData] = useState(false);

  useEffect(() => {
    setHasData(false);
  }, []);

  if (!hasData) {
    return role === 'client' ? (
      <EmptyState
        title="No posted jobs yet"
        description="Kickstart your hiring — post a role and get matched with top talent in minutes."
        actionHref="/jobs/post"
        actionLabel="Post a Job"
      />
    ) : (
      <EmptyState
        title="Complete your profile"
        description="Stand out to clients by completing your profile and setting availability."
        actionHref="/dashboard"
        actionLabel="Open Profile"
      />
    );
  }

  return <div>Your dashboard content</div>;
}