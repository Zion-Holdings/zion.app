const puppeteer = require('puppeteer');

async function checkSignupPage() {
  let browser;
  const results = {
    elements: {
      displayNameInput: false,
      emailInput: false,
      passwordInput: false,
      createAccountButton: false,
    },
    consoleErrors: [],
    genericErrors: [],
  };

  try {
    console.log('Launching Puppeteer...');
    // Add --no-sandbox for typical CI environments
    // You might need to install additional dependencies for Chrome to run in some Linux environments
    // e.g., sudo apt-get install -yq gconf-service libasound2 libatk-bridge2.0-0 libc6 libcairo2 libcups2 libdbus-1-3 \
    // libexpat1 libfontconfig1 libgbm1 libgcc1 libgconf-2-4 libgdk-pixbuf2.0-0 libglib2.0-0 libgtk-3-0 libnspr4 \
    // libpango-1.0-0 libpangocairo-1.0-0 libstdc++6 libx11-6 libx11-xcb1 libxcb1 libxcomposite1 \
    // libxcursor1 libxdamage1 libxext6 libxfixes3 libxi6 libxrandr2 libxrender1 libxss1 libxtst6 \
    // ca-certificates fonts-liberation libappindicator1 libnss3 lsb-release xdg-utils wget
    browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage']
    });
    const page = await browser.newPage();

    page.on('console', msg => {
      if (msg.type() === 'error') {
        results.consoleErrors.push(msg.text());
      }
    });

    console.log('Navigating to http://localhost:5178/signup...');
    await page.goto('http://localhost:5178/signup', { waitUntil: 'networkidle2', timeout: 30000 });

    console.log('Page loaded. Checking for elements...');

    // Check for display name input
    if (await page.$('[data-testid="display-name-input"]')) {
      results.elements.displayNameInput = true;
    }

    // Check for email input
    if (await page.$('[data-testid="email-input"]')) {
      results.elements.emailInput = true;
    }

    // Check for password input
    if (await page.$('[data-testid="password-input"]')) {
      results.elements.passwordInput = true;
    }

    // Check for create account button
    if (await page.$('[data-testid="create-account-button"]')) {
      results.elements.createAccountButton = true;
    }

  } catch (error) {
    console.error('Error during Puppeteer script execution:', error);
    results.genericErrors.push(error.message);
  } finally {
    if (browser) {
      console.log('Closing Puppeteer...');
      await browser.close();
    }
  }

  // Output results as JSON for easier parsing
  console.log('---RESULTS_START---');
  console.log(JSON.stringify(results, null, 2));
  console.log('---RESULTS_END---');
}

checkSignupPage();
