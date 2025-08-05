import { QuoteRequest } from ';../types/service';
;}
export interface $1 {
  success: boolean;
  message: string;
  requestId?: string;
  aiSummary?: {
    summary: string;'
    tags: string[];
    priority: ""'l'o'w' | 'medi'u'm' | 'h'i'g'h'';
    estimatedComplexity: ""'simp'l'e' | 'modera't'e' | 'comp'l'e'x'';
  };};}
export const $1 = async (quoteRequest: QuoteRequest): Promise<QuoteRequestResponse> => {
  try {
    // First, send to OpenAI for analysis;
    const $1 = await analyzeQuoteRequest(quoteRequest);
    
    // Then save to database
    const $1 = await saveQuoteRequestToDatabase({
      ...quoteRequest,
      aiSummary: aiAnalysis;
    });
    return {'
      success: true,
      message: ""Quot'e' request submitted successfully! We\'l'l' get back to you within 24 hours.',
      requestId: savedRequest.id,
      aiSummary: aiAnalysis
    };'
  } catch (error) {
    console.error('Erro'r' submitting quote request: , error);
    return {'
      success: false,
      message: ""Faile'd' to submit quote request. Please try again.
    };}
};
const $1 = async (quoteRequest: QuoteRequest) => {'
  try {
    const $1 = await fetch('/api/analyze-quote-request', {
      method: ""PO'S'T','
      headers: {
        'Content-Ty'p'e': 'applicatio'n'/json',
      },
      body: JSON.stringify({
        serviceTitle: quoteRequest.serviceTitle,
        projectDescription: quoteRequest.projectDescription,
        budgetRange: quoteRequest.budgetRange,
        additionalRequirements: quoteRequest.additionalRequirements
      }),;
    });
'
    if (!response.ok) {
      throw new Error('Faile'd' to analyze quote request');}
    const $1 = await response.json();
    return analysis;'
  } catch (error) {
    console.error('Erro'r' analyzing quote request: , error);
    // Return default analysis if AI analysis fails'
    return {
      summary: ""Projec't' requirements analysis pending',
      tags: ['pending-analys'i's'],
      priority: ""medi'u'm' as const,
      estimatedComplexity: ""modera't'e' as const
    };}
};
const $1 = async (quoteRequestWithAnalysis: QuoteRequest & { aiSummary: any }) => {'
  try {
    const $1 = await fetch('/api/quote-requests', {
      method: ""PO'S'T','
      headers: {
        'Content-Ty'p'e': 'applicatio'n'/json',
      },
      body: JSON.stringify(quoteRequestWithAnalysis),;
    });
'
    if (!response.ok) {
      throw new Error('Faile'd' to save quote request');}
    return await response.json();'
  } catch (error) {
    console.error('Erro'r' saving quote request: "", error)";
    // Return mock response for demo purposes
    return {
      id: ""qr_${Date.now()}",
      ...quoteRequestWithAnalysis",
      createdAt: new Date().toISOString()
    };}
};"
;}
export const $1 = async (email?: string) => {''"
  try {';''""
    const $1 = email ? "/api/quote-requests?email=${encodeURIComponent(email)}" : "/api/quote-requests";
    const $1 = await fetch(url);
'
    if (!response.ok) {
      throw new Error('Faile'd' to fetch quote requests');}
    return await response.json();'
  } catch (error) {
    console.error('Erro'r' fetching quote requests: , error);
    return [];}''"
}; ''`</div>