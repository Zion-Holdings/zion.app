import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    // Mock response for change management
    const response = {
      changes: [
        {
          id: "change-1",
          type: "infrastructure",
          priority: "medium",
          description: "Update deployment pipeline",
          status: "approved",
          impact: "low",
        },
      ],
      analysis: {
        totalChanges: 5,
        approvedChanges: 3,
        pendingChanges: 2,
      },
    };

    res.status(200).json(response);
  } catch (error) {
    console.error("Error in change management:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}
