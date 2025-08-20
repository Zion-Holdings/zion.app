export interface ContentGenerationRequest {
  type: 'blog-post' | 'social-media' | 'email' | 'landing-page' | 'product-description';
  topic: string;
  tone: 'professional' | 'casual' | 'friendly' | 'formal';
  length: 'short' | 'medium' | 'long';
  keywords?: string[];
  targetAudience?: string;
}

export interface ContentGenerationResponse {
  content: string;
  wordCount: number;
  seoScore: number;
  readabilityScore: number;
  suggestions: string[];
  metadata: {
    title: string;
    description: string;
    tags: string[];
  };
}

export interface ContentTemplate {
  id: string;
  name: string;
  description: string;
  type: string;
  preview: string;
  price: number;
}

export class AIContentGeneratorService {
  private apiKey: string;
  private baseUrl: string;

  constructor(apiKey: string, baseUrl: string = 'https://api.ziontech.ai') {
    this.apiKey = apiKey;
    this.baseUrl = baseUrl;
  }

  async generateContent(request: ContentGenerationRequest): Promise<ContentGenerationResponse> {
    try {
      // In a real implementation, this would call OpenAI, Claude, or similar API
      const response = await fetch(`${this.baseUrl}/content/generate`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(request),
      });

      if (!response.ok) {
        throw new Error(`Content generation failed: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      // Fallback to mock data for demo purposes
      return this.generateMockContent(request);
    }
  }

  async getTemplates(): Promise<ContentTemplate[]> {
    return [
      {
        id: 'blog-post-starter',
        name: 'Blog Post Starter',
        description: 'Professional blog post template with SEO optimization',
        type: 'blog-post',
        preview: 'Create engaging blog posts that rank well in search engines...',
        price: 29
      },
      {
        id: 'social-media-campaign',
        name: 'Social Media Campaign',
        description: 'Complete social media content strategy and posts',
        type: 'social-media',
        preview: 'Engage your audience with compelling social media content...',
        price: 49
      },
      {
        id: 'email-sequence',
        name: 'Email Sequence',
        description: 'Convert prospects with persuasive email sequences',
        type: 'email',
        preview: 'Build relationships and drive sales with email automation...',
        price: 39
      },
      {
        id: 'landing-page-copy',
        name: 'Landing Page Copy',
        description: 'High-converting landing page content',
        type: 'landing-page',
        preview: 'Turn visitors into customers with compelling copy...',
        price: 59
      }
    ];
  }

  private generateMockContent(request: ContentGenerationRequest): ContentGenerationResponse {
    const mockContent = `# ${request.topic}

This is a ${request.length} ${request.type} about ${request.topic}. The content is written in a ${request.tone} tone to engage the target audience.

## Key Points

- Point 1: ${request.topic} is essential for modern businesses
- Point 2: Implementing ${request.topic} can improve efficiency
- Point 3: Best practices for ${request.topic} implementation

## Conclusion

${request.topic} represents a significant opportunity for organizations looking to stay competitive in today's digital landscape.`;

    return {
      content: mockContent,
      wordCount: mockContent.split(' ').length,
      seoScore: 85,
      readabilityScore: 78,
      suggestions: [
        'Add more specific examples',
        'Include relevant statistics',
        'Optimize for target keywords'
      ],
      metadata: {
        title: `${request.topic} - Complete Guide`,
        description: `Learn everything about ${request.topic} and how to implement it effectively.`,
        tags: [request.topic, request.type, 'guide', 'tutorial']
      }
    };
  }

  async analyzeContent(content: string): Promise<{
    seoScore: number;
    readabilityScore: number;
    suggestions: string[];
    keywordDensity: Record<string, number>;
  }> {
    // Mock content analysis
    return {
      seoScore: Math.floor(Math.random() * 30) + 70,
      readabilityScore: Math.floor(Math.random() * 30) + 70,
      suggestions: [
        'Add more headings for better structure',
        'Include internal links to related content',
        'Optimize meta description'
      ],
      keywordDensity: {
        'content': 2.1,
        'seo': 1.8,
        'marketing': 1.5
      }
    };
  }
}

// Pricing tiers for the AI Content Generator
export const AI_CONTENT_PRICING = {
  starter: {
    name: 'Starter',
    price: 29,
    period: '/month',
    features: [
      '100 content generations per month',
      'Basic templates',
      'SEO analysis',
      'Email support',
      'Standard quality'
    ]
  },
  professional: {
    name: 'Professional',
    price: 99,
    period: '/month',
    features: [
      '500 content generations per month',
      'Premium templates',
      'Advanced SEO analysis',
      'Priority support',
      'High quality output',
      'Custom branding',
      'API access'
    ]
  },
  enterprise: {
    name: 'Enterprise',
    price: 299,
    period: '/month',
    features: [
      'Unlimited content generations',
      'Custom templates',
      'Advanced analytics',
      'Dedicated support',
      'Highest quality',
      'White-label options',
      'Custom integrations',
      'SLA guarantee'
    ]
  }
};