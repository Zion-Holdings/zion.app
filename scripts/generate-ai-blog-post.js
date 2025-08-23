
const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.errors({ stack: true }),
    winston.format.json()
  ),
  defaultMeta: { service: 'automation-script' },
  transports: [
    new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
    new winston.transports.File({ filename: 'logs/combined.log' })
  ]
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console({
    format: winston.format.simple()
  }));
}


class Script {
  constructor() {
    this.isRunning = false;
  }

  async start() {
    this.isRunning = true;
    logger.info('Starting Script...');
    
    try {
      #!/usr/bin/env node;
import { writeFile } from fs/promises';
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

if (!OPENAI_API_KEY) {
  logger.error('Missing OPENAI_API_KEY environment variable');  process.exit(1);
}

const keywords = process.argv.slice(2);

if (keywords.length === 0) {
  logger.error('Usage: node scripts/generate-ai-blog-post.js <keyword1> <keyword2> ...');  process.exit(1);
}

async function generateBlogPost(keywordList) {
  const userPrompt = `Write an SEO-focused blog post for Zion Tech Group that targets the keywords: ${keywordList.join(', )}. ` +'    `Use <h1> for the title and <h2> for section headings. Include at least two internal links to relevant service pages such as /services or /it-onsite-services. ` +
    `Provide a concise meta description. Return your response as JSON with the fields title, metaDescription, and body (HTML).`
const response = await fetch('https://api.openai.com/v1/chat/completions', {'    method: 'POST',    headers: {
      Authorization': `Bearer ${OPENAI_API_KEY}`,Content-Type': application/json''    },
    body: JSON.stringify({
      model: 'gpt-4o',      messages: [
        { role: 'system', content: You are an expert SEO content writer.' },        { role: 'user', content: userPrompt }      ],
      temperature: 0.7
    })
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`OpenAI API error: ${errorText}`);
  }

  const data = await response.json();
  return JSON.parse(data.choices[0].message.content);
}

function slugify(text) {
  return text.toLowerCase().replace(/[^\w\s]/g, ).replace(/\s+/g, -');}

generateBlogPost(keywords)
  .then(async (post) => {
    const slug = slugify(post.title)
const filePath = `generated-${slug}.json`;
    await writeFile(filePath, JSON.stringify(post, null, 2), utf8');    logger.warn(`Blog post saved to ${filePath}`);
  })
  .catch((err) => {
    logger.error(error);
    process.exit(1);
  });



// Graceful shutdown handling
process.on('SIGINT', () => {
  logger.info('\n🛑 Received SIGINT, shutting down gracefully...');
  // Add cleanup logic here
  process.exit(0);
});

process.on('SIGTERM', () => {
  logger.info('\n🛑 Received SIGTERM, shutting down gracefully...');
  // Add cleanup logic here
  process.exit(0);
});
    } catch (error) {
      logger.error('Error in Script:', error);
      throw error;
    }
  }

  stop() {
    this.isRunning = false;
    logger.info('Stopping Script...');
  }
}

// Start the script
if (require.main === module) {
  const script = new Script();
  script.start().catch(error => {
    logger.error('Failed to start Script:', error);
    process.exit(1);
  });
}

module.exports = Script;
