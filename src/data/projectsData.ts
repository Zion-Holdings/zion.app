import { Project } from "@/types/projects";

export const PROJECTS: Project[] = [
  {
    id: "project-1",
    client_id: "client-1",
    talent_id: "t-001",
    job_id: "job-1",
    start_date: "2024-05-15",
    scope_summary: "Build an AI powered dashboard for sales metrics",
    payment_terms: "fixed",
    status: "in_progress",
    created_at: "2024-05-15",
    updated_at: "2024-05-20",
    job: {
      title: "AI Dashboard Development",
      description: "Develop dashboards using React and integrate ML models"
    },
    talent_profile: {
      full_name: "Alexandra Chen",
      professional_title: "Senior AI Engineer"
    }
  }
];
