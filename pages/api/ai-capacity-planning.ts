import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    // Mock response for capacity planning
    const response = {
      recommendations: [
        {
          id: "rec-1",
          type: "capacity-increase",
          priority: "high",
          description: "Scale up infrastructure for peak loads",
          impact: "high",
          cost: 25000,
        },
      ],
      analysis: {
        currentCapacity: 80,
        projectedDemand: 120,
        recommendedCapacity: 150,
      },
    };

    res.status(200).json(response);
  } catch (error) {
    console.error("Error in capacity planning:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}
