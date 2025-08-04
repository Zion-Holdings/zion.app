#!/usr/bin/env ts-node

import { LinkedInBot } from '../src/utils/linkedin-automation/linkedin-bot';
import { generatePostContent } from '../src/utils/linkedin-automation/content-generator';
import { linkedInCronManager } from '../src/utils/linkedin-automation/cron-manager';

async function runLinkedInAutomation() {
  console.log('🚀 Starting LinkedIn Automation...');
  
  try {
    // Option 1: Run immediate automation
    const bot = new LinkedInBot();
    await bot.runAutomation();
    
    console.log('✅ LinkedIn automation completed successfully');
  } catch (error) {
    console.error('❌ LinkedIn automation failed:', error);
  }
}

async function startCronJobs() {
  console.log('⏰ Starting LinkedIn cron jobs...');
  
  try {
    // Start all cron jobs
    linkedInCronManager.startDailyPosting();
    linkedInCronManager.startHourlyMonitoring();
    linkedInCronManager.startWeeklyContentGeneration();
    
    console.log('✅ LinkedIn cron jobs started successfully');
    console.log('📊 Job status:', linkedInCronManager.getJobStatus());
    
    // Keep the process running
    process.on('SIGINT', () => {
      console.log('🛑 Stopping LinkedIn cron jobs...');
      linkedInCronManager.stopAllJobs();
      process.exit(0);
    });
    
  } catch (error) {
    console.error('❌ Failed to start cron jobs:', error);
  }
}

async function generateContent() {
  console.log('📝 Generating LinkedIn content...');
  
  try {
    const posts = await generatePostContent();
    console.log(`✅ Generated ${posts.length} posts:`);
    
    posts.forEach((post, index) => {
      console.log(`\n--- Post ${index + 1}: ${post.title} ---`);
      console.log(post.content);
      console.log(`Hashtags: ${post.hashtags.join(' ')}`);
    });
  } catch (error) {
    console.error('❌ Failed to generate content:', error);
  }
}

// Command line interface
const command = process.argv[2];

switch (command) {
  case 'run':
    runLinkedInAutomation();
    break;
  case 'cron':
    startCronJobs();
    break;
  case 'generate':
    generateContent();
    break;
  default:
    console.log(`
LinkedIn Automation Script

Usage:
  npm run linkedin:run      - Run immediate automation
  npm run linkedin:cron     - Start cron jobs
  npm run linkedin:generate - Generate content only

Commands:
  run       - Execute LinkedIn automation immediately
  cron      - Start automated cron jobs
  generate  - Generate content without posting
`);
    break;
} 