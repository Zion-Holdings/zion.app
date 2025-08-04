import puppeteer from 'puppeteer';
import { LINKEDIN_CONFIG } from './config';
import { generatePostContent } from './content-generator';
import { schedulePost } from './scheduler';

export class LinkedInBot {
  private browser: puppeteer.Browser | null = null;
  private page: puppeteer.Page | null = null;
  private isLoggedIn = false;

  async initialize() {
    try {
      this.browser = await puppeteer.launch({
        headless: false, // Set to true for production
        args: ['--no-sandbox', '--disable-setuid-sandbox']
      });
      this.page = await this.browser.newPage();
      
      // Set user agent to avoid detection
      await this.page.setUserAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36');
      
      console.log('LinkedIn Bot initialized successfully');
      return true;
    } catch (error) {
      console.error('Failed to initialize LinkedIn Bot:', error);
      return false;
    }
  }

  async login() {
    if (!this.page) {
      throw new Error('Browser not initialized');
    }

    try {
      // Navigate to LinkedIn login
      await this.page.goto('https://www.linkedin.com/login');
      await this.page.waitForSelector('#username');

      // Enter credentials
      await this.page.type('#username', LINKEDIN_CONFIG.credentials.username);
      await this.page.type('#password', LINKEDIN_CONFIG.credentials.password);
      
      // Click login button
      await this.page.click('button[type="submit"]');
      
      // Wait for successful login
      await this.page.waitForNavigation();
      
      // Check if login was successful
      const currentUrl = this.page.url();
      if (currentUrl.includes('feed') || currentUrl.includes('mynetwork')) {
        this.isLoggedIn = true;
        console.log('Successfully logged into LinkedIn');
        return true;
      } else {
        throw new Error('Login failed - redirected to unexpected page');
      }
    } catch (error) {
      console.error('Login failed:', error);
      return false;
    }
  }

  async createPost(content: string) {
    if (!this.page || !this.isLoggedIn) {
      throw new Error('Not logged in or browser not initialized');
    }

    try {
      // Navigate to LinkedIn feed
      await this.page.goto('https://www.linkedin.com/feed/');
      await this.page.waitForSelector('div[data-placeholder="What do you want to talk about?"]');
      
      // Click on the post creation area
      await this.page.click('div[data-placeholder="What do you want to talk about?"]');
      await this.page.waitForTimeout(1000);
      
      // Type the content
      await this.page.keyboard.type(content);
      await this.page.waitForTimeout(2000);
      
      // Click post button
      const postButton = await this.page.$('button[aria-label="Post"]');
      if (postButton) {
        await postButton.click();
        console.log('Post created successfully');
        return true;
      } else {
        throw new Error('Post button not found');
      }
    } catch (error) {
      console.error('Failed to create post:', error);
      return false;
    }
  }

  async scheduleDailyPosts() {
    const posts = await generatePostContent();
    
    for (const post of posts) {
      const scheduled = await schedulePost(post);
      if (scheduled) {
        console.log(`Scheduled post: ${post.title}`);
      }
    }
  }

  async runAutomation() {
    try {
      const initialized = await this.initialize();
      if (!initialized) {
        throw new Error('Failed to initialize bot');
      }

      const loggedIn = await this.login();
      if (!loggedIn) {
        throw new Error('Failed to login');
      }

      // Generate and post content
      const posts = await generatePostContent();
      for (const post of posts) {
        const success = await this.createPost(post.content);
        if (success) {
          console.log(`Posted: ${post.title}`);
          // Wait between posts to avoid rate limiting
          await this.page?.waitForTimeout(30000); // 30 seconds
        }
      }

    } catch (error) {
      console.error('Automation failed:', error);
    } finally {
      await this.cleanup();
    }
  }

  async cleanup() {
    if (this.browser) {
      await this.browser.close();
    }
  }
} 