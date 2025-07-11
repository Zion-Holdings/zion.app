import React from 'react';

interface MilestoneActivitiesProps {
  projectId: string;
}

export function MilestoneActivities(props: MilestoneActivitiesProps) {
  const { projectId } = props;
  return <div>Activity will be shown here</div>;
}
