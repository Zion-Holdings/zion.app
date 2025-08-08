import { ApiDocsSpec } from './types';

const baseUrl = 'https://api.zion.os';

const v1: ApiDocsSpec = {
  product: 'Zion OS',
  versions: ['v1'],
  defaultVersion: 'v1',
  lastUpdatedIso: new Date().toISOString(),
  sections: [
    {
      id: 'auth',
      title: 'Auth (JWT, OAuth, Wallet)',
      description: 'Authenticate using JWT, OAuth 2.0, or connect a wallet.',
      endpoints: [
        {
          id: 'auth-login-jwt',
          title: 'JWT Login',
          description: 'Obtain a JWT by providing credentials.',
          path: '/v1/auth/login',
          method: 'POST',
          visibility: 'public',
          auth: ['none'],
          requestBodySchema: { type: 'object', properties: { email: { type: 'string' }, password: { type: 'string' } }, required: ['email', 'password'] },
          responseBodySchema: { type: 'object', properties: { token: { type: 'string' }, expiresIn: { type: 'number' } } },
          samples: [
            { language: 'curl', code: `curl -X POST ${baseUrl}/v1/auth/login -H 'Content-Type: application/json' -d '{"email":"user@zion.os","password":"***"}'` },
            { language: 'javascript', code: `await fetch('${baseUrl}/v1/auth/login', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email: 'user@zion.os', password: '***' }) }).then(r => r.json());` },
            { language: 'python', code: `import requests\nresp = requests.post('${baseUrl}/v1/auth/login', json={'email':'user@zion.os','password':'***'})\nprint(resp.json())` },
          ],
          errors: [
            { code: 'INVALID_CREDENTIALS', httpStatus: 401, message: 'Email or password incorrect' },
          ],
          versions: ['v1'],
        },
        {
          id: 'oauth-token',
          title: 'OAuth Token',
          description: 'Exchange auth code for access token.',
          path: '/v1/oauth/token',
          method: 'POST',
          visibility: 'partner',
          auth: ['none'],
          requestBodySchema: { type: 'object', properties: { code: { type: 'string' }, redirect_uri: { type: 'string' } }, required: ['code', 'redirect_uri'] },
          responseBodySchema: { type: 'object', properties: { access_token: { type: 'string' }, refresh_token: { type: 'string' } } },
          samples: [
            { language: 'curl', code: `curl -X POST ${baseUrl}/v1/oauth/token -H 'Content-Type: application/json' -d '{"code":"AUTH_CODE","redirect_uri":"https://app.partner.com/callback"}'` },
            { language: 'javascript', code: `await fetch('${baseUrl}/v1/oauth/token', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ code: 'AUTH_CODE', redirect_uri: 'https://app.partner.com/callback' }) }).then(r => r.json());` },
            { language: 'python', code: `import requests\nrequests.post('${baseUrl}/v1/oauth/token', json={'code':'AUTH_CODE','redirect_uri':'https://app.partner.com/callback'}).json()` },
          ],
          versions: ['v1'],
        },
      ],
    },
    {
      id: 'talent',
      title: 'Talent Profiles',
      endpoints: [
        {
          id: 'talent-get',
          title: 'Get Talent Profile',
          description: 'Fetch a talent profile by ID.',
          path: '/v1/talent/{talentId}',
          method: 'GET',
          visibility: 'public',
          auth: ['jwt'],
          params: { talentId: 'The UUID of the talent' },
          responseBodySchema: { type: 'object', properties: { id: { type: 'string' }, name: { type: 'string' }, skills: { type: 'array', items: { type: 'string' } } } },
          samples: [
            { language: 'curl', code: `curl '${baseUrl}/v1/talent/123' -H 'Authorization: Bearer <token>'` },
            { language: 'javascript', code: `await fetch('${baseUrl}/v1/talent/123', { headers: { Authorization: 'Bearer <token>' } }).then(r => r.json());` },
            { language: 'python', code: `import requests\nrequests.get('${baseUrl}/v1/talent/123', headers={'Authorization':'Bearer <token>'}).json()` },
          ],
          versions: ['v1'],
        },
      ],
    },
    {
      id: 'jobs',
      title: 'Job Listings',
      endpoints: [
        {
          id: 'jobs-list',
          title: 'List Jobs',
          description: 'List job postings with optional filters.',
          path: '/v1/jobs',
          method: 'GET',
          visibility: 'public',
          auth: ['jwt'],
          query: { q: 'Search text', status: 'open|closed' },
          responseBodySchema: { type: 'object', properties: { items: { type: 'array', items: { type: 'object' } }, nextPage: { type: 'string' } } },
          samples: [
            { language: 'curl', code: `curl '${baseUrl}/v1/jobs?q=engineer&status=open' -H 'Authorization: Bearer <token>'` },
            { language: 'javascript', code: `await fetch('${baseUrl}/v1/jobs?q=engineer&status=open', { headers: { Authorization: 'Bearer <token>' } }).then(r => r.json());` },
            { language: 'python', code: `import requests\nrequests.get('${baseUrl}/v1/jobs', params={'q':'engineer','status':'open'}, headers={'Authorization':'Bearer <token>'}).json()` },
          ],
          versions: ['v1'],
        },
      ],
    },
    {
      id: 'quotes',
      title: 'Quotes + Milestones',
      endpoints: [
        {
          id: 'quotes-create',
          title: 'Create Quote',
          description: 'Create a quote with milestones.',
          path: '/v1/quotes',
          method: 'POST',
          visibility: 'partner',
          auth: ['jwt'],
          requestBodySchema: { type: 'object', properties: { jobId: { type: 'string' }, milestones: { type: 'array', items: { type: 'object', properties: { title: { type: 'string' }, amount: { type: 'number' } } } } }, required: ['jobId', 'milestones'] },
          responseBodySchema: { type: 'object', properties: { id: { type: 'string' }, status: { type: 'string' } } },
          samples: [
            { language: 'curl', code: `curl -X POST ${baseUrl}/v1/quotes -H 'Authorization: Bearer <token>' -H 'Content-Type: application/json' -d '{"jobId":"JOB123","milestones":[{"title":"Design","amount":1000}]}'` },
            { language: 'javascript', code: `await fetch('${baseUrl}/v1/quotes', { method: 'POST', headers: { Authorization: 'Bearer <token>', 'Content-Type': 'application/json' }, body: JSON.stringify({ jobId: 'JOB123', milestones: [{ title: 'Design', amount: 1000 }] }) }).then(r => r.json());` },
            { language: 'python', code: `import requests\nrequests.post('${baseUrl}/v1/quotes', json={'jobId':'JOB123','milestones':[{'title':'Design','amount':1000}]}, headers={'Authorization':'Bearer <token>'}).json()` },
          ],
          versions: ['v1'],
        },
      ],
    },
    {
      id: 'messages',
      title: 'Messages',
      endpoints: [
        {
          id: 'messages-send',
          title: 'Send Message',
          description: 'Send a message between users.',
          path: '/v1/messages',
          method: 'POST',
          visibility: 'public',
          auth: ['jwt'],
          requestBodySchema: { type: 'object', properties: { to: { type: 'string' }, body: { type: 'string' } }, required: ['to', 'body'] },
          responseBodySchema: { type: 'object', properties: { id: { type: 'string' } } },
          samples: [
            { language: 'curl', code: `curl -X POST ${baseUrl}/v1/messages -H 'Authorization: Bearer <token>' -H 'Content-Type: application/json' -d '{"to":"USER123","body":"Hello"}'` },
            { language: 'javascript', code: `await fetch('${baseUrl}/v1/messages', { method: 'POST', headers: { Authorization: 'Bearer <token>', 'Content-Type': 'application/json' }, body: JSON.stringify({ to: 'USER123', body: 'Hello' }) }).then(r => r.json());` },
            { language: 'python', code: `import requests\nrequests.post('${baseUrl}/v1/messages', json={'to':'USER123','body':'Hello'}, headers={'Authorization':'Bearer <token>'}).json()` },
          ],
          versions: ['v1'],
        },
      ],
    },
    {
      id: 'wallet',
      title: 'ZION$ Wallet API',
      endpoints: [
        {
          id: 'wallet-balance',
          title: 'Get Balance',
          description: 'Fetch wallet balance for the current user.',
          path: '/v1/wallet/balance',
          method: 'GET',
          visibility: 'public',
          auth: ['wallet', 'jwt'],
          responseBodySchema: { type: 'object', properties: { balance: { type: 'number' }, currency: { type: 'string' } } },
          samples: [
            { language: 'curl', code: `curl '${baseUrl}/v1/wallet/balance' -H 'Authorization: Bearer <token>'` },
            { language: 'javascript', code: `await fetch('${baseUrl}/v1/wallet/balance', { headers: { Authorization: 'Bearer <token>' } }).then(r => r.json());` },
            { language: 'python', code: `import requests\nrequests.get('${baseUrl}/v1/wallet/balance', headers={'Authorization':'Bearer <token>'}).json()` },
          ],
          versions: ['v1'],
        },
      ],
    },
    {
      id: 'dao',
      title: 'DAO & Proposals',
      endpoints: [
        {
          id: 'dao-proposals-list',
          title: 'List Proposals',
          description: 'List DAO proposals.',
          path: '/v1/dao/proposals',
          method: 'GET',
          visibility: 'public',
          auth: ['jwt'],
          responseBodySchema: { type: 'object', properties: { items: { type: 'array', items: { type: 'object' } } } },
          samples: [
            { language: 'curl', code: `curl '${baseUrl}/v1/dao/proposals' -H 'Authorization: Bearer <token>'` },
            { language: 'javascript', code: `await fetch('${baseUrl}/v1/dao/proposals', { headers: { Authorization: 'Bearer <token>' } }).then(r => r.json());` },
            { language: 'python', code: `import requests\nrequests.get('${baseUrl}/v1/dao/proposals', headers={'Authorization':'Bearer <token>'}).json()` },
          ],
          versions: ['v1'],
        },
      ],
    },
    {
      id: 'voting',
      title: 'Voting + Treasury logs',
      endpoints: [
        {
          id: 'treasury-logs',
          title: 'Get Treasury Logs',
          description: 'Fetch treasury transactions and snapshots.',
          path: '/v1/treasury/logs',
          method: 'GET',
          visibility: 'partner',
          auth: ['jwt'],
          responseBodySchema: { type: 'object', properties: { items: { type: 'array', items: { type: 'object' } } } },
          samples: [
            { language: 'curl', code: `curl '${baseUrl}/v1/treasury/logs' -H 'Authorization: Bearer <token>'` },
            { language: 'javascript', code: `await fetch('${baseUrl}/v1/treasury/logs', { headers: { Authorization: 'Bearer <token>' } }).then(r => r.json());` },
            { language: 'python', code: `import requests\nrequests.get('${baseUrl}/v1/treasury/logs', headers={'Authorization':'Bearer <token>'}).json()` },
          ],
          versions: ['v1'],
        },
      ],
    },
    {
      id: 'nation',
      title: 'Nation Module',
      endpoints: [
        {
          id: 'nation-stats',
          title: 'Nation Stats',
          description: 'Aggregate stats across the Zion Nation module.',
          path: '/v1/nation/stats',
          method: 'GET',
          visibility: 'internal',
          auth: ['jwt'],
          responseBodySchema: { type: 'object', properties: { members: { type: 'number' }, proposals: { type: 'number' } } },
          samples: [
            { language: 'curl', code: `curl '${baseUrl}/v1/nation/stats' -H 'Authorization: Bearer <token>'` },
            { language: 'javascript', code: `await fetch('${baseUrl}/v1/nation/stats', { headers: { Authorization: 'Bearer <token>' } }).then(r => r.json());` },
            { language: 'python', code: `import requests\nrequests.get('${baseUrl}/v1/nation/stats', headers={'Authorization':'Bearer <token>'}).json()` },
          ],
          versions: ['v1'],
        },
      ],
    },
  ],
};

export default v1;