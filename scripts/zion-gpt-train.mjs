import { createClient } from '@supabase/supabase-js';
import fs from 'fs/promises';
import { createReadStream } from 'fs';
import path from 'path';
import FormData from 'form-data';
import fetch from 'node-fetch';

const {
  SUPABASE_URL,
  SUPABASE_SERVICE_ROLE_KEY,
  OPENAI_API_KEY
} = process.env;

if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY || !OPENAI_API_KEY) {
  console.error('Missing env vars: SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, OPENAI_API_KEY');
  process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

async function fetchData() {
  const jobPosts = await supabase.from('job_posts').select('title, description');
  const resumes = await supabase.from('resumes').select('summary, skills');
  const supportLogs = await supabase.from('support_logs').select('question, answer');

  const blogData = await loadBlogData();
  const serviceData = await loadServiceData();

  return {
    jobs: jobPosts.data || [],
    resumes: resumes.data || [],
    logs: supportLogs.data || [],
    blogs: blogData,
    services: serviceData
  };
}

// Simulates loading blog posts
async function loadBlogData() {
  return [
    {
      id: "ai-trends-2025",
      title: "10 Emerging AI Trends to Watch in 2025",
      slug: "ai-trends-2025",
      excerpt: "From multimodal AI to neuromorphic computing, discover the technologies that will shape the artificial intelligence landscape in 2025.",
      content: "<p>As we move further into 2025...</p><h2>1. Multimodal AI Systems</h2><p>Unlike traditional AI models...</p>",
      category: "Trends",
      tags: ["AI", "Technology Trends", "Machine Learning"],
    }
  ];
}

// Simulates loading service data
async function loadServiceData() {
  return [
    {
      id: "service-1",
      title: "AI Development & Integration",
      description: "Full-stack AI development services...",
      category: "Development",
      tags: ["AI Integration", "Machine Learning"],
    }
  ];
}

function stripPii(text) {
  if (!text) return text;
  let result = text;
  // Emails
  result = result.replace(/\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/gi, '[email]');
  // US-style phone numbers
  result = result.replace(/\b\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}\b/g, '[phone]');
  // Naive full name removal (two capitalized words)
  result = result.replace(/\b[A-Z][a-z]+\s+[A-Z][a-z]+\b/g, '[name]');
  return result;
}

function buildTrainingPairs(records) {
  const pairs = [];

  for (const job of records.jobs) {
    pairs.push({
      prompt: `Create a job description titled "${stripPii(job.title)}"`,
      completion: stripPii(job.description)
    });
  }

  for (const blog of records.blogs) {
    const plainTextContent = stripPii(blog.content.replace(/<[^>]*>/g, ''));
    pairs.push({
      prompt: `Create a blog post titled "${stripPii(blog.title)}" focusing on ${stripPii(blog.category)}. Keywords: ${stripPii(blog.tags.join(', '))}. Start with: "${stripPii(blog.excerpt)}"`,
      completion: plainTextContent
    });
  }

  for (const service of records.services) {
    pairs.push({
      prompt: `Write an SEO-optimized description for a service called "${stripPii(service.title)}" in the category "${stripPii(service.category)}". Associated tags: ${stripPii(service.tags.join(', '))}.`,
      completion: stripPii(service.description)
    });
  }

  for (const resume of records.resumes) {
    pairs.push({
      prompt: `Summarize the candidate with skills: ${stripPii(resume.skills)}`,
      completion: stripPii(resume.summary)
    });
  }

  for (const log of records.logs) {
    pairs.push({
      prompt: stripPii(log.question),
      completion: stripPii(log.answer)
    });
  }

  return pairs;
}

async function saveJsonl(pairs, filePath) {
  const lines = pairs.map(p => JSON.stringify({ prompt: p.prompt, completion: p.completion })).join('\n');
  await fs.writeFile(filePath, lines, 'utf8');
}

async function createFineTune(filePath) {
  const formData = new FormData();
  formData.append('purpose', 'fine-tune');
  formData.append('file', createReadStream(filePath), path.basename(filePath));

  const uploadRes = await fetch('https://api.openai.com/v1/files', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${OPENAI_API_KEY}`,
      ...formData.getHeaders()
    },
    body: formData
  });
  const uploaded = await uploadRes.json();

  // NOTE: additional parameters may be required depending on OpenAI API changes
  const jobRes = await fetch('https://api.openai.com/v1/fine_tuning/jobs', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${OPENAI_API_KEY}`
    },
    body: JSON.stringify({
      training_file: uploaded.id,
      model: 'gpt-3.5-turbo'
    })
  });
  const job = await jobRes.json();
  console.log('Fine-tune job created:', job.id);
}

async function main() {
  const records = await fetchData();
  const pairs = buildTrainingPairs(records);
  await saveJsonl(pairs, 'seo-training-data.jsonl');
  await createFineTune('seo-training-data.jsonl');
}

main().catch((err) => {
  console.error('Training workflow failed', err);
});
