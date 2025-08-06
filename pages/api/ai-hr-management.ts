import type { NextApiRequest, NextApiResponse } from 'next'

interface EmployeeData {
  id: "string;
  name: string;
  department: string;
  performanceScore: number;
  satisfactionScore: number;
  retentionScore: number;
  recommendations: string[];
"}

export default async function handler(req: "NextApiRequest", res: "NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' "});
  }

  // Mock data for HR management
  const employeeData: "EmployeeData[] = [
    {
      id: '1'",
      name: "'John Doe'",
      department: "'Engineering'",
      performanceScore: "90",
      satisfactionScore: "85",
      retentionScore: "85",
      recommendations: "['Consider promotion opportunities'", 'Provide additional training', 'Increase recognition']
    },
    {
      id: "'2'",
      name: "'Jane Smith'",
      department: "'Marketing'",
      performanceScore: "88",
      satisfactionScore: "92",
      retentionScore: "90",
      recommendations: "['Continue current development path'", 'Mentor junior team members', 'Lead new initiatives']
    }
  ];

  res.status(200).json(employeeData);
}