import { QuoteRequest } from '../types/service';

export interface QuoteRequestResponse {
  success: boolean;
  message: string;
  requestId?: string;
  aiSummary?: {
    summary: string;
    tags: string[];
    priority: 'low' | 'medium' | 'high';
    estimatedComplexity: 'simple' | 'moderate' | 'complex';
  };
}

export const submitQuoteRequest = async (quoteRequest: QuoteRequest): Promise<QuoteRequestResponse> => {
  try {
    // First, send to OpenAI for analysis
    const aiAnalysis = await analyzeQuoteRequest(quoteRequest);
    
    // Then save to database
    const savedRequest = await saveQuoteRequestToDatabase({
      ...quoteRequest,
      aiSummary: aiAnalysis
    });

    return {
      success: true,
      message: 'Quote request submitted successfully! We\'ll get back to you within 24 hours.',
      requestId: savedRequest.id,
      aiSummary: aiAnalysis
    };
  } catch (error) {
    console.error('Error submitting quote request:', error);
    return {
      success: false,
      message: 'Failed to submit quote request. Please try again.'
    };
  }
};

const analyzeQuoteRequest = async (quoteRequest: QuoteRequest) => {
  try {
    const response = await fetch('/api/analyze-quote-request', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        serviceTitle: quoteRequest.serviceTitle,
        projectDescription: quoteRequest.projectDescription,
        budgetRange: quoteRequest.budgetRange,
        additionalRequirements: quoteRequest.additionalRequirements
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to analyze quote request');
    }

    const analysis = await response.json();
    return analysis;
  } catch (error) {
    console.error('Error analyzing quote request:', error);
    // Return default analysis if AI analysis fails
    return {
      summary: 'Project requirements analysis pending',
      tags: ['pending-analysis'],
      priority: 'medium' as const,
      estimatedComplexity: 'moderate' as const
    };
  }
};

const saveQuoteRequestToDatabase = async (quoteRequestWithAnalysis: QuoteRequest & { aiSummary: any }) => {
  try {
    const response = await fetch('/api/quote-requests', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(quoteRequestWithAnalysis),
    });

    if (!response.ok) {
      throw new Error('Failed to save quote request');
    }

    return await response.json();
  } catch (error) {
    console.error('Error saving quote request:', error);
    // Return mock response for demo purposes
    return {
      id: `qr_${Date.now()}`,
      ...quoteRequestWithAnalysis,
      createdAt: new Date().toISOString()
    };
  }
};

export const getQuoteRequests = async (email?: string) => {
  try {
    const url = email ? `/api/quote-requests?email=${encodeURIComponent(email)}` : '/api/quote-requests';
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error('Failed to fetch quote requests');
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching quote requests:', error);
    return [];
  }
}; 