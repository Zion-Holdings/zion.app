import { PostContent } from './content-generator';
import { LinkedInBot } from './linkedin-bot';

interface ScheduledPost {
  id: string;
  content: PostContent;
  scheduledTime: Date;
  status: 'pending' | 'posted' | 'failed';
}

class PostScheduler {
  private scheduledPosts: ScheduledPost[] = [];
  private bot: LinkedInBot;

  constructor() {
    this.bot = new LinkedInBot();
  }

  async schedulePost(post: PostContent, scheduledTime?: Date): Promise<boolean> {
    try {
      const postId = `post_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      const time = scheduledTime || this.getOptimalPostingTime();
      
      const scheduledPost: ScheduledPost = {
        id: postId,
        content: post,
        scheduledTime: time,
        status: 'pending'
      };

      this.scheduledPosts.push(scheduledPost);
      console.log(`Scheduled post "${post.title}" for ${time.toLocaleString()}`);
      
      return true;
    } catch (error) {
      console.error('Failed to schedule post:', error);
      return false;
    }
  }

  private getOptimalPostingTime(): Date {
    const now = new Date();
    const preferredTimes = LINKEDIN_CONFIG.advertising.preferredTimes;
    
    // Get next preferred time
    for (const timeStr of preferredTimes) {
      const [hours, minutes] = timeStr.split(':').map(Number);
      const targetTime = new Date();
      targetTime.setHours(hours, minutes, 0, 0);
      
      if (targetTime > now) {
        return targetTime;
      }
    }
    
    // If all preferred times passed, schedule for tomorrow
    const tomorrow = new Date(now);
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(9, 0, 0, 0);
    return tomorrow;
  }

  async executeScheduledPosts(): Promise<void> {
    const now = new Date();
    const pendingPosts = this.scheduledPosts.filter(
      post => post.status === 'pending' && post.scheduledTime <= now
    );

    if (pendingPosts.length === 0) {
      console.log('No posts scheduled for execution');
      return;
    }

    // Initialize bot
    const initialized = await this.bot.initialize();
    if (!initialized) {
      console.error('Failed to initialize bot for scheduled posts');
      return;
    }

    // Login
    const loggedIn = await this.bot.login();
    if (!loggedIn) {
      console.error('Failed to login for scheduled posts');
      return;
    }

    // Execute posts
    for (const post of pendingPosts) {
      try {
        const success = await this.bot.createPost(post.content.content);
        if (success) {
          post.status = 'posted';
          console.log(`Successfully posted: ${post.content.title}`);
        } else {
          post.status = 'failed';
          console.error(`Failed to post: ${post.content.title}`);
        }
        
        // Wait between posts
        await new Promise(resolve => setTimeout(resolve, 30000));
      } catch (error) {
        post.status = 'failed';
        console.error(`Error posting ${post.content.title}:`, error);
      }
    }

    await this.bot.cleanup();
  }

  getScheduledPosts(): ScheduledPost[] {
    return this.scheduledPosts;
  }

  clearCompletedPosts(): void {
    this.scheduledPosts = this.scheduledPosts.filter(
      post => post.status === 'pending'
    );
  }
}

const scheduler = new PostScheduler();

export async function schedulePost(post: PostContent, scheduledTime?: Date): Promise<boolean> {
  return scheduler.schedulePost(post, scheduledTime);
}

export async function executeScheduledPosts(): Promise<void> {
  return scheduler.executeScheduledPosts();
}

export function getScheduledPosts() {
  return scheduler.getScheduledPosts();
}

export function clearCompletedPosts(): void {
  scheduler.clearCompletedPosts();
} 