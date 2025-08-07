import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const analytics = [
      {
        id: "analytics-1",
        metric: "user-engagement",
        value: 85,
        trend: "increasing",
      },
      {
        id: "analytics-2",
        metric: "conversion-rate",
        value: 12.5,
        trend: "stable",
      },
      {
        id: "analytics-3",
        metric: "page-load-time",
        value: 1.2,
        trend: "decreasing",
      },
    ];

    res.status(200).json({ analytics });
  } catch (error) {
    console.error("Error fetching analytics:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}
