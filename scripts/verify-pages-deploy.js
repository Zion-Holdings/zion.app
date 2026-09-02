const https = require('https');
const slugs = [
  'managed-it-services-small-business/',
  'enterprise-cybersecurity-services/',
  'cloud-migration-services-brazil/',
  'devops-automation-services/',
  'data-analytics-bi-services/',
  'ai-devops-automation-services/',
  'msp-outsourcing-services/',
  'zion-composio-automation-stack/',
  'ai-call-center-automation/',
  'ai-it-helpdesk-automation/',
  'ai-process-automation-consulting/',
  'ai-data-engineering-services/',
  'finops-cloud-cost-optimization/',
  'ai-contact-center-consulting/',
  'outsourced-it-support-brazil/',
  'ai-cybersecurity-platform/',
];

function check(url) {
  return new Promise((resolve) => {
    https.get(url, { timeout: 20000 }, (res) => {
      resolve(`${res.statusCode} ${url}`);
    }).on('error', (e) => {
      resolve(`ERR ${url} ${e.message}`);
    });
  });
}

(async () => {
  const out = [];
  for (const s of slugs) {
    out.push(await check(`https://ziontechgroup.com/${s}`));
  }
  console.log(out.join('\n'));
})();
