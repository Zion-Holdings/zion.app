export interface ContentTemplate {
  id: string;
  name: string;
  description: string;
  category: 'blog' | 'social' | 'email' | 'ad' | 'product';
  prompt: string;
  variables: string[];
  estimatedTokens: number;
}

export interface GeneratedContent {
  id: string;
  title: string;
  content: string;
  template: string;
  language: string;
  seoScore: number;
  readabilityScore: number;
  wordCount: number;
  createdAt: Date;
  metadata: {
    keywords: string[];
    tone: string;
    targetAudience: string;
    callToAction?: string;
  };
}

export interface ContentAnalytics {
  totalGenerated: number;
  averageSeoScore: number;
  averageReadabilityScore: number;
  popularTemplates: Array<{ template: string; usage: number }>;
  languageDistribution: Record<string, number>;
  monthlyTrends: Array<{ month: string; count: number }>;
}

class AIContentGeneratorService {
  private templates: ContentTemplate[] = [
    {
      id: 'blog-post-intro',
      name: 'Blog Post Introduction',
      description: 'Engaging blog post introductions that hook readers',
      category: 'blog',
      prompt: 'Write a compelling introduction for a blog post about {topic}. Include a hook, context, and preview of what readers will learn. Target audience: {audience}. Tone: {tone}.',
      variables: ['topic', 'audience', 'tone'],
      estimatedTokens: 150
    },
    {
      id: 'social-media-post',
      name: 'Social Media Post',
      description: 'Engaging social media content for various platforms',
      category: 'social',
      prompt: 'Create a {platform} post about {topic}. Include relevant hashtags and a call to action. Target audience: {audience}. Tone: {tone}.',
      variables: ['platform', 'topic', 'audience', 'tone'],
      estimatedTokens: 100
    },
    {
      id: 'email-newsletter',
      name: 'Email Newsletter',
      description: 'Professional email newsletters that convert',
      category: 'email',
      prompt: 'Write an email newsletter about {topic}. Include a compelling subject line, engaging opening, and clear call to action. Target audience: {audience}.',
      variables: ['topic', 'audience'],
      estimatedTokens: 300
    }
  ];

  private generatedContent: GeneratedContent[] = [];

  async generateContent(templateId: string, variables: Record<string, string>): Promise<GeneratedContent> {
    const template = this.templates.find(t => t.id === templateId);
    if (!template) {
      throw new Error(`Template ${templateId} not found`);
    }

    // Simulate AI content generation with template variables
    let prompt = template.prompt;
    Object.entries(variables).forEach(([key, value]) => {
      prompt = prompt.replace(`{${key}}`, value);
    });

    // Generate content based on template type
    const content = await this.generateContentFromPrompt(prompt, template.category);
    
    const generatedContent: GeneratedContent = {
      id: `content_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      title: this.generateTitle(content),
      content,
      template: template.name,
      language: variables.language || 'en',
      seoScore: this.calculateSeoScore(content),
      readabilityScore: this.calculateReadabilityScore(content),
      wordCount: content.split(' ').length,
      createdAt: new Date(),
      metadata: {
        keywords: this.extractKeywords(content),
        tone: variables.tone || 'professional',
        targetAudience: variables.audience || 'general',
        callToAction: this.generateCallToAction(template.category)
      }
    };

    this.generatedContent.push(generatedContent);
    return generatedContent;
  }

  private async generateContentFromPrompt(prompt: string, category: string): Promise<string> {
    // Simulate AI generation with realistic content based on category
    const contentMap = {
      blog: `Based on the prompt: "${prompt}", here's a compelling blog post introduction that will engage your readers and keep them wanting more. This introduction sets the stage for what's to come while providing immediate value.`,
      social: `Here's an engaging social media post that will resonate with your audience: "${prompt}". This content is designed to spark conversations and encourage engagement.`,
      email: `Subject: ${prompt}\n\nDear valued reader,\n\nHere's your personalized newsletter content that addresses your interests and needs. We've crafted this specifically for you.`
    };

    return contentMap[category] || `Generated content based on: ${prompt}`;
  }

  private generateTitle(content: string): string {
    const words = content.split(' ').slice(0, 8);
    return words.join(' ') + '...';
  }

  private calculateSeoScore(content: string): number {
    // Simple SEO scoring based on content length, keyword density, etc.
    const wordCount = content.split(' ').length;
    const hasKeywords = content.toLowerCase().includes('key') || content.toLowerCase().includes('important');
    const hasHeadings = content.includes('#') || content.includes('**');
    
    let score = 60; // Base score
    if (wordCount > 100) score += 20;
    if (hasKeywords) score += 10;
    if (hasHeadings) score += 10;
    
    return Math.min(100, score);
  }

  private calculateReadabilityScore(content: string): number {
    // Simple readability scoring
    const sentences = content.split(/[.!?]+/).length;
    const words = content.split(' ').length;
    const avgWordsPerSentence = words / sentences;
    
    if (avgWordsPerSentence <= 15) return 90;
    if (avgWordsPerSentence <= 20) return 80;
    if (avgWordsPerSentence <= 25) return 70;
    return 60;
  }

  private extractKeywords(content: string): string[] {
    // Simple keyword extraction
    const commonWords = ['the', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for', 'of', 'with', 'by'];
    const words = content.toLowerCase().split(/\W+/);
    const keywords = words.filter(word => 
      word.length > 3 && !commonWords.includes(word)
    );
    return [...new Set(keywords)].slice(0, 5);
  }

  private generateCallToAction(category: string): string {
    const ctaMap = {
      blog: 'Read more to discover the full story.',
      social: 'Share your thoughts in the comments below!',
      email: 'Click here to learn more.',
      ad: 'Get started today!',
      product: 'Try it now for free.'
    };
    return ctaMap[category] || 'Learn more.';
  }

  async getTemplates(): Promise<ContentTemplate[]> {
    return this.templates;
  }

  async getGeneratedContent(): Promise<GeneratedContent[]> {
    return this.generatedContent;
  }

  async getContentAnalytics(): Promise<ContentAnalytics> {
    const totalGenerated = this.generatedContent.length;
    const averageSeoScore = totalGenerated > 0 
      ? this.generatedContent.reduce((sum, content) => sum + content.seoScore, 0) / totalGenerated 
      : 0;
    const averageReadabilityScore = totalGenerated > 0
      ? this.generatedContent.reduce((sum, content) => sum + content.readabilityScore, 0) / totalGenerated
      : 0;

    const templateUsage = this.generatedContent.reduce((acc, content) => {
      acc[content.template] = (acc[content.template] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    const popularTemplates = Object.entries(templateUsage)
      .map(([template, usage]) => ({ template, usage }))
      .sort((a, b) => b.usage - a.usage)
      .slice(0, 5);

    const languageDistribution = this.generatedContent.reduce((acc, content) => {
      acc[content.language] = (acc[content.language] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    // Generate monthly trends for the last 6 months
    const monthlyTrends = [];
    const now = new Date();
    for (let i = 5; i >= 0; i--) {
      const date = new Date(now.getFullYear(), now.getMonth() - i, 1);
      const monthName = date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
      const count = this.generatedContent.filter(content => {
        const contentDate = new Date(content.createdAt);
        return contentDate.getMonth() === date.getMonth() && contentDate.getFullYear() === date.getFullYear();
      }).length;
      monthlyTrends.push({ month: monthName, count });
    }

    return {
      totalGenerated,
      averageSeoScore: Math.round(averageSeoScore),
      averageReadabilityScore: Math.round(averageReadabilityScore),
      popularTemplates,
      languageDistribution,
      monthlyTrends
    };
  }

  async addCustomTemplate(template: Omit<ContentTemplate, 'id'>): Promise<ContentTemplate> {
    const newTemplate: ContentTemplate = {
      ...template,
      id: `custom_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    };
    this.templates.push(newTemplate);
    return newTemplate;
  }

  async deleteContent(contentId: string): Promise<boolean> {
    const index = this.generatedContent.findIndex(content => content.id === contentId);
    if (index !== -1) {
      this.generatedContent.splice(index, 1);
      return true;
    }
    return false;
  }
}

export const aiContentGeneratorService = new AIContentGeneratorService();