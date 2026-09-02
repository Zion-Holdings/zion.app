import { execSync } from 'child_process';

const tools = [
  { slug: 'TELEGRAM_GET_ME', payload: '{}' },
  { slug: 'CALENDLY_GET_USER', payload: '{}' },
  { slug: 'CALENDLY_LIST_EVENT_TYPES', payload: '{"user":"https://api.calendly.com/users/4cff085a-050c-4464-baac-d08ec02fa73d"}' },
  { slug: 'STRIPE_RETRIEVE_BALANCE', payload: '{}' },
  { slug: 'STRIPE_LIST_PAYMENT_LINKS', payload: '{}' },
  { slug: 'RESEND_LIST_DOMAINS', payload: '{}' },
  { slug: 'HUGGING_FACE_GET_TRENDING', payload: '{}' },
  { slug: 'CANVA_RETRIEVE_USER_PROFILE_DATA', payload: '{}' },
  { slug: 'CANVA_LIST_USER_DESIGNS', payload: '{}' },
  { slug: 'SERPAPI_GOOGLE_LIGHT_SEARCH', payload: '{"q":"AI IT managed services Brazil enterprise clients","num":10}' },
];

for (const t of tools) {
  try {
    const out = execSync(`composio execute ${t.slug} -d '${t.payload.replace(/'/g, "'\\''")}'`, { encoding: 'utf8', timeout: 30000 });
    console.log(`\n=== ${t.slug} ===\n${out.slice(0, 2000)}`);
  } catch (e) {
    console.log(`\n=== ${t.slug} FAILED ===\n${e.message}`);
  }
}
