import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const data = req.body;

    // Mock service analysis
    const analysis = {
      serviceType: "web-development",
      estimatedDuration: "4-6 weeks",
      requiredSkills: ["React", "Node.js", "TypeScript"],
      teamSize: 3,
      recommendations: [
        {
          id: "rec-1",
          type: "technology-stack",
          description: "Use Next.js for optimal performance",
          impact: "high",
        },
        {
          id: "rec-2",
          type: "team-composition",
          description: "Include UX designer in team",
          impact: "medium",
        },
      ],
    };

    res.status(200).json(analysis);
  } catch (error) {
    console.error("Error analyzing service request:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}
