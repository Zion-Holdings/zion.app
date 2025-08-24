export type DepinNetwork = 'DIMO' | 'Helium' | 'Hivemapper';

export type DepinActivity = {
  network: DepinNetwork;
  proofOfCompute?: number; // arbitrary units
  iotJobsCompleted?: number;
  dataStreamMb?: number;
};

export type DepinReward = {
  network: DepinNetwork;
  points: number;
  reason: string;
};

export async function fetchDepinActivities(userAddress: string): Promise<DepinActivity[]> {
  // TODO: Replace with real API integrations. For now, return mocked activity.
  return [
    { network: 'DIMO', proofOfCompute: 12 },
    { network: 'Helium', iotJobsCompleted: 5 },
    { network: 'Hivemapper', dataStreamMb: 320 },
  ];
}

export function calculateRewards(activities: DepinActivity[]): DepinReward[] {
  return activities.map((a) => {
    if (a.network === 'DIMO') {
      const points = Math.round((a.proofOfCompute ?? 0) * 10);
      return { network: a.network, points, reason: `Proof-of-compute x${a.proofOfCompute ?? 0}` };
    }
    if (a.network === 'Helium') {
      const points = Math.round((a.iotJobsCompleted ?? 0) * 20);
      return { network: a.network, points, reason: `IoT jobs x${a.iotJobsCompleted ?? 0}` };
    }
    const points = Math.round((a.dataStreamMb ?? 0) * 0.5);
    return { network: a.network, points, reason: `Data streamed ${a.dataStreamMb ?? 0}MB` };
  });
}