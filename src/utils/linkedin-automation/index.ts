// Main exports for LinkedIn automation system
export { LinkedInBot } from './linkedin-bot';
export { generatePostContent, generateCustomPost } from './content-generator';
export { schedulePost, executeScheduledPosts, getScheduledPosts, clearCompletedPosts } from './scheduler';
export { LinkedInCronManager, linkedInCronManager } from './cron-manager';
export { LINKEDIN_CONFIG } from './config';

// Type exports
export type { PostContent } from './content-generator';

// Main automation runner
export async function startLinkedInAutomation() {
  const { linkedInCronManager } = await import('./cron-manager');
  
  // Start all automation jobs
  linkedInCronManager.startDailyPosting();
  linkedInCronManager.startHourlyMonitoring();
  linkedInCronManager.startWeeklyContentGeneration();
  
  console.log('LinkedIn automation system started successfully');
  return linkedInCronManager;
}

// Manual post creation
export async function createLinkedInPost(content?: string) {
  const { LinkedInBot } = await import('./linkedin-bot');
  const { generatePostContent } = await import('./content-generator');
  
  const bot = new LinkedInBot();
  
  try {
    const initialized = await bot.initialize();
    if (!initialized) {
      throw new Error('Failed to initialize bot');
    }

    const loggedIn = await bot.login();
    if (!loggedIn) {
      throw new Error('Failed to login');
    }

    if (content) {
      const success = await bot.createPost(content);
      return success;
    } else {
      const posts = await generatePostContent();
      if (posts.length > 0) {
        const success = await bot.createPost(posts[0].content);
        return success;
      }
    }
  } catch (error) {
    console.error('Manual post creation failed:', error);
    return false;
  } finally {
    await bot.cleanup();
  }
} 