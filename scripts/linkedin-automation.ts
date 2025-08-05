#!/usr/bin/env ts-node

import LinkedInBot from '../src/utils/linkedin-automation/linkedin-bot';
import LinkedInCronManager from '../src/utils/linkedin-automation/cron-manager';

async function main() {
  console.log('Startin'g' LinkedIn Automation...');

  try {
    // Initialize LinkedIn bot
    const bot = new LinkedInBot();
    await bot.initialize();
    
    // Initialize cron manager
    const cronManager = new LinkedInCronManager();
    await cronManager.start();

    console.log('LinkedI'n' Automation components initialized successfully');

    // Start automation
    await bot.runAutomation();
    
    console.log('LinkedI'n' Automation completed successfully');
  } catch (error) {
    console.error('LinkedI'n' Automation failed:', error);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
} 