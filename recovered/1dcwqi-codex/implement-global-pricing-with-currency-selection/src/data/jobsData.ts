import { Job } from "@/types/jobs";

export const JOB_POSTS: Job[] = [
  {
    id: "job-1",
    client_id: "client-1",
    title: "React Developer Needed",
    description: "Seeking a React developer for a 3 month contract building dashboards.",
    location: "Remote",
    category: "development",
    skills: ["React", "TypeScript"],
    budget: { min: 40, max: 50, currency: "USD" },
    deadline: "2024-07-01",
    status: "new",
    created_at: "2024-05-10",
    updated_at: "2024-05-10",
  },
  {
    id: "job-2",
    client_id: "client-2",
    title: "Part-time DevOps Engineer",
    description: "Looking for a DevOps expert to maintain CI/CD pipelines.",
    location: "San Francisco, CA",
    category: "development",
    skills: ["DevOps", "AWS", "Terraform"],
    budget: { min: 30, max: 60, currency: "USD" },
    deadline: "2024-06-15",
    status: "new",
    created_at: "2024-05-05",
    updated_at: "2024-05-05",
  }
];
