interface PostAnalytics {
  postId: string;
  title: string;
  postedAt: Date;
  status: 'success' | 'failed';
  engagement?: {
    likes: number;
    comments: number;
    shares: number;
  };
}

class LinkedInAnalytics {
  private analytics: PostAnalytics[] = [];

  recordPost(postId: string, title: string, status: 'success' | 'failed') {
    const record: PostAnalytics = {
      postId,
      title,
      postedAt: new Date(),
      status
    };
    
    this.analytics.push(record);
    console.log(`📊 Analytics: Recorded ${status} post - ${title}`);
  }

  updateEngagement(postId: string, engagement: { likes: number; comments: number; shares: number }) {
    const record = this.analytics.find(a => a.postId === postId);
    if (record) {
      record.engagement = engagement;
      console.log(`📊 Analytics: Updated engagement for ${record.title}`);
    }
  }

  getSuccessRate(): number {
    const total = this.analytics.length;
    const successful = this.analytics.filter(a => a.status === 'success').length;
    return total > 0 ? (successful / total) * 100 : 0;
  }

  getRecentPosts(limit: number = 10): PostAnalytics[] {
    return this.analytics
      .sort((a, b) => b.postedAt.getTime() - a.postedAt.getTime())
      .slice(0, limit);
  }

  getDailyStats(): { total: number; successful: number; failed: number } {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    const todayPosts = this.analytics.filter(
      a => a.postedAt >= today
    );
    
    return {
      total: todayPosts.length,
      successful: todayPosts.filter(a => a.status === 'success').length,
      failed: todayPosts.filter(a => a.status === 'failed').length
    };
  }

  generateReport(): string {
    const stats = this.getDailyStats();
    const successRate = this.getSuccessRate();
    const recentPosts = this.getRecentPosts(5);
    
    return `
📊 LinkedIn Automation Report
============================
Today's Stats:
- Total Posts: ${stats.total}
- Successful: ${stats.successful}
- Failed: ${stats.failed}
- Success Rate: ${successRate.toFixed(1)}%

Recent Posts:
${recentPosts.map(post => 
  `- ${post.title} (${post.status}) - ${post.postedAt.toLocaleString()}`
).join('\n')}
`;
  }
}

export const linkedInAnalytics = new LinkedInAnalytics(); 