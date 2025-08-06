export interface QuoteRequest {
  id: string;
  serviceId: string;
  clientId: string;
  description: string;
  budget: number;
  timeline: string;
  status: 'pending' | 'approved' | 'rejected' | 'completed';'
  createdAt: string;
  updatedAt: string;
}

export interface QuoteRequestResponse {
  success: boolean;
  message: string;
  data?: QuoteRequest[];
}
