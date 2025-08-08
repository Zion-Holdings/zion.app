const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const OpenAI = require('openai');
const axios = require('axios');

function ensureDirSync(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

function toSlug(text) {
  return String(text || '')
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

function loadConfig() {
  const configPath = path.join(__dirname, '..', 'data', 'content-automation.config.json');
  const fallback = {
    autoApprove: process.env.BLOG_AUTO_APPROVE === 'true',
    emailProvider: process.env.EMAIL_PROVIDER || 'none',
    imageEnabled: process.env.BLOG_IMAGE_ENABLED !== 'false',
  };
  try {
    const file = fs.readFileSync(configPath, 'utf8');
    const parsed = JSON.parse(file);
    return { ...fallback, ...parsed };
  } catch {
    return fallback;
  }
}

async function generateBlogContent(openai, topicPrompt) {
  const system = 'You are an expert B2B content marketer for Zion (zion.app). Return STRICT JSON matching the schema.';
  const user = `Generate a professional, SEO-optimized 700-word blog article on: "Top 5 Mistakes When Hiring AI Freelancers".
- Include: title, metaDescription (<=160 chars), bodyHtml (HTML only), tags (3), tweet (<=220 chars), summaryIntro (2-3 sentences), conclusion (1-2 paragraphs).
- Use subheadings (h2/h3), bullet lists where helpful, and internal CTAs to browse jobs/talent on Zion.
- Output ONLY JSON with keys: title, metaDescription, bodyHtml, tags, tweet, summaryIntro, conclusion.`;

  const completion = await openai.chat.completions.create({
    model: process.env.OPENAI_TEXT_MODEL || 'gpt-4o',
    temperature: 0.6,
    messages: [
      { role: 'system', content: system },
      { role: 'user', content: topicPrompt || user },
    ],
    response_format: { type: 'json_object' },
  });

  const raw = completion.choices?.[0]?.message?.content || '{}';
  const parsed = JSON.parse(raw);
  if (!parsed.title || !parsed.bodyHtml) {
    throw new Error('Model did not return expected fields');
  }
  return parsed;
}

async function generateImage(openai, prompt, outFilePath) {
  const image = await openai.images.generate({
    model: 'gpt-image-1',
    prompt,
    size: '1024x1024',
    quality: 'standard',
  });
  const b64 = image.data?.[0]?.b64_json;
  if (!b64) return null;
  const buf = Buffer.from(b64, 'base64');
  ensureDirSync(path.dirname(outFilePath));
  fs.writeFileSync(outFilePath, buf);
  return outFilePath;
}

function composePageTsx({ title, metaDescription, bodyHtml, tags, tweet, slug, imagePathRel }) {
  const safeDescription = (metaDescription || '').replace(/`/g, '\\`');
  const tagList = Array.isArray(tags) ? tags.map(t => `'${String(t).replace(/'/g, "\\'")}'`).join(', ') : '';
  const imageMeta = imagePathRel ? `\n        <meta property=\"og:image\" content=\"${imagePathRel}\" />` : '';
  return `import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

export const metadata = {
  title: ${JSON.stringify(title)},
  description: ${JSON.stringify(metaDescription || '')},
  tags: [${tagList}],
  tweet: ${JSON.stringify(tweet || '')},
  slug: ${JSON.stringify(slug)}
};

const Post: NextPage = () => {
  return (
    <div>
      <Head>
        <title>${title} - Zion Tech Solutions</title>
        <meta name=\"description\" content=\"${safeDescription}\" />${imageMeta}
      </Head>
      <main>
        <article>
          <h1>${title}</h1>
          <div dangerouslySetInnerHTML={{ __html: ${JSON.stringify(bodyHtml)} }} />
          <hr />
          <p><strong>Tags:</strong> ${Array.isArray(tags) ? tags.join(', ') : ''}</p>
          <p><em>Share:</em> ${tweet || ''}</p>
          <p><Link href=\"/blog\">Back to Blog</Link></p>
        </article>
      </main>
    </div>
  );
};

export default Post;
`;}

function writeBlogPage({ title, metaDescription, bodyHtml, tags, tweet, publicImagePath }) {
  const slugBase = toSlug(title) || `post-${Date.now()}`;
  const slug = `${slugBase}-chat`;
  const pagesDir = path.join(__dirname, '..', 'pages', 'blog');
  const filePath = path.join(pagesDir, `${slug}.tsx`);
  const imagePathRel = publicImagePath ? `/blog/${path.basename(publicImagePath)}` : '';
  ensureDirSync(pagesDir);
  const tsx = composePageTsx({ title, metaDescription, bodyHtml, tags, tweet, slug, imagePathRel });
  fs.writeFileSync(filePath, tsx, 'utf8');
  return { slug, filePath };
}

function saveDraft({ title, metaDescription, bodyHtml, tags, tweet }) {
  const draftsDir = path.join(__dirname, '..', 'data', 'drafts');
  ensureDirSync(draftsDir);
  const id = `${Date.now()}-${toSlug(title)}`;
  const jsonPath = path.join(draftsDir, `${id}.json`);
  fs.writeFileSync(jsonPath, JSON.stringify({ title, metaDescription, bodyHtml, tags, tweet }, null, 2));
  return jsonPath;
}

function buildNewsletterMarkdown({ title, summaryIntro, conclusion, tweet }) {
  const cta = `Browse jobs and top AI talent on Zion → https://zion.app`;
  return `# This week on Zion\n\n**${title}**\n\n${summaryIntro || ''}\n\n---\n\n${conclusion || ''}\n\n---\n\n${cta}\n\n> ${tweet || ''}\n`;
}

async function maybeSendNewsletter(provider, contentMarkdown) {
  const outDir = path.join(__dirname, '..', 'data', 'newsletters');
  ensureDirSync(outDir);
  const file = path.join(outDir, `newsletter-${Date.now()}.md`);
  fs.writeFileSync(file, contentMarkdown, 'utf8');

  const providerLower = (provider || 'none').toLowerCase();
  if (providerLower === 'mailchimp') {
    const apiKey = process.env.MAILCHIMP_API_KEY;
    const serverPrefix = (apiKey || '').split('-')[1];
    const listId = process.env.MAILCHIMP_LIST_ID;
    if (!apiKey || !serverPrefix || !listId) {
      console.log('Mailchimp env not set; saved newsletter draft to', file);
      return { provider: 'mailchimp', status: 'draft', file };
    }
    try {
      const auth = { username: 'anystring', password: apiKey };
      const api = `https://${serverPrefix}.api.mailchimp.com/3.0`;
      const campaignRes = await axios.post(`${api}/campaigns`, {
        type: 'regular',
        recipients: { list_id: listId },
        settings: { subject_line: 'Zion Weekly', from_name: 'Zion', reply_to: 'no-reply@zion.app' }
      }, { auth });
      const campaignId = campaignRes.data.id;
      await axios.put(`${api}/campaigns/${campaignId}/content`, { plain_text: contentMarkdown }, { auth });
      console.log('Mailchimp campaign draft created:', campaignId);
      return { provider: 'mailchimp', status: 'created', campaignId, file };
    } catch (err) {
      console.log('Mailchimp API error; saved newsletter draft to', file, err?.response?.data || err.message);
      return { provider: 'mailchimp', status: 'error', file };
    }
  }

  if (providerLower === 'convertkit') {
    const apiKey = process.env.CONVERTKIT_API_KEY;
    const formId = process.env.CONVERTKIT_FORM_ID;
    if (!apiKey || !formId) {
      console.log('ConvertKit env not set; saved newsletter draft to', file);
      return { provider: 'convertkit', status: 'draft', file };
    }
    try {
      await axios.post('https://api.convertkit.com/v3/broadcasts', {
        api_key: apiKey,
        subject: 'Zion Weekly',
        content: contentMarkdown,
      });
      console.log('ConvertKit broadcast draft created');
      return { provider: 'convertkit', status: 'created', file };
    } catch (err) {
      console.log('ConvertKit API error; saved newsletter draft to', file, err?.response?.data || err.message);
      return { provider: 'convertkit', status: 'error', file };
    }
  }

  if (providerLower === 'supabase') {
    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
    if (!supabaseUrl || !supabaseKey) {
      console.log('Supabase env not set; saved newsletter draft to', file);
      return { provider: 'supabase', status: 'draft', file };
    }
    try {
      const { createClient } = require('@supabase/supabase-js');
      const supabase = createClient(supabaseUrl, supabaseKey);
      const insertRes = await supabase.from('newsletters').insert({
        id: uuidv4(),
        created_at: new Date().toISOString(),
        content_md: contentMarkdown,
        status: 'draft'
      });
      if (insertRes.error) throw insertRes.error;
      console.log('Supabase newsletter draft inserted');
      return { provider: 'supabase', status: 'created', file };
    } catch (err) {
      console.log('Supabase insert error; saved newsletter draft to', file, err.message);
      return { provider: 'supabase', status: 'error', file };
    }
  }

  console.log('No email provider configured; saved newsletter draft to', file);
  return { provider: 'none', status: 'saved', file };
}

async function main() {
  const args = process.argv.slice(2);
  void args; // reserved for future modes

  const config = loadConfig();

  if (!process.env.OPENAI_API_KEY) {
    console.error('Missing OPENAI_API_KEY');
    process.exit(1);
  }
  const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

  console.log(`[${new Date().toISOString()}] Generating blog content...`);
  const content = await generateBlogContent(openai);

  let publicImagePath = '';
  if (config.imageEnabled) {
    try {
      console.log('Generating thumbnail image...');
      const imageOut = path.join(__dirname, '..', 'public', 'blog', `${toSlug(content.title)}.png`);
      await generateImage(openai, `Blog post thumbnail, modern, clean, minimal, topic: ${content.title}`, imageOut);
      publicImagePath = imageOut;
    } catch (e) {
      console.warn('Image generation failed:', e.message);
    }
  }

  if (config.autoApprove) {
    const { filePath } = writeBlogPage({
      title: content.title,
      metaDescription: content.metaDescription,
      bodyHtml: content.bodyHtml,
      tags: content.tags,
      tweet: content.tweet,
      publicImagePath,
    });
    console.log('Blog post created at', filePath);
  } else {
    const draftPath = saveDraft(content);
    console.log('Draft saved at', draftPath);
  }

  console.log('Composing newsletter...');
  const newsletterMd = buildNewsletterMarkdown(content);
  await maybeSendNewsletter(config.emailProvider, newsletterMd);

  console.log('Done.');
}

if (require.main === module) {
  main().catch(err => {
    console.error('Error:', err);
    process.exit(1);
  });
}