#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const axios = require('axios');

const INPUT = path.join(__dirname, '..', 'data', 'reports', 'marketing', 'linkedin', 'linkedin-pro-posts.json');

async function postToLinkedIn(text, url) {
  const token = process.env.LINKEDIN_ACCESS_TOKEN;
  const author = process.env.LINKEDIN_URN || process.env.LINKEDIN_PERSON_URN; // urn:li:person:XXXX or org
  if (!token || !author) {
    console.log('Missing LINKEDIN credentials; skipping real post. Preview:', text);
    return;
  }
  const payload = {
    author,
    lifecycleState: 'PUBLISHED',
    specificContent: {
      'com.linkedin.ugc.ShareContent': {
        shareCommentary: { text },
        shareMediaCategory: 'ARTICLE',
        media: [{ status: 'READY', originalUrl: url }]
      }
    },
    visibility: { 'com.linkedin.ugc.MemberNetworkVisibility': 'PUBLIC' }
  };
  await axios.post('https://api.linkedin.com/v2/ugcPosts', payload, {
    headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' }
  });
}

async function main() {
  const data = JSON.parse(fs.readFileSync(INPUT, 'utf8'));
  const post = data.posts && data.posts[0];
  if (!post) { console.log('No posts to publish'); return; }
  await postToLinkedIn(post.text, post.url);
  console.log('LinkedIn Pro post published (or previewed).');
}

main().catch(e => { console.error('LinkedIn Pro poster error', e.message); process.exitCode = 1; });
