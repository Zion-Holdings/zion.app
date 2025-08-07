export interface QuoteRequest {
  serviceId: string;
  clientId: string;
  description: string;
  budget: number;
  timeline: string;
  status: "pending" | "approved" | "rejected" | "completed";
}
