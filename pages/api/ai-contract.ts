import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    // Mock contract data
    const contracts = [
      {
        id: "contract-1",
        type: "service-agreement",
        status: "active",
        value: 50000,
        startDate: "2024-01-01",
        endDate: "2024-12-31",
      },
      {
        id: "contract-2",
        type: "consulting",
        status: "pending",
        value: 25000,
        startDate: "2024-02-01",
        endDate: "2024-08-31",
      },
    ];

    res.status(200).json({ contracts });
  } catch (error) {
    console.error("Error fetching contracts:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}
