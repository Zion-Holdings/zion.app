export type DesignMapSection = {
  id: string
  title: string
  description?: string
  items: { id: string; title: string; description?: string }[]
}

export type DesignMap = {
  route: string
  products: {
    foundations: DesignMapSection[]
    talent: DesignMapSection[]
    client: DesignMapSection[]
    aiTools: DesignMapSection[]
    dao: DesignMapSection[]
    admin: DesignMapSection[]
    mobile: DesignMapSection[]
  }
}

export function getZionDesignMap(): DesignMap {
  return {
    route: '/design-map',
    products: {
      foundations: [
        {
          id: 'foundations-colors',
          title: 'Color system',
          items: [
            { id: 'light', title: 'Light' },
            { id: 'dark', title: 'Dark' },
          ],
        },
        {
          id: 'foundations-typography',
          title: 'Typography',
          items: [
            { id: 'heading-scale', title: 'Heading scale' },
            { id: 'body-text', title: 'Body text' },
            { id: 'mono', title: 'Monospace' },
          ],
        },
        {
          id: 'foundations-icons',
          title: 'Icon set',
          items: [
            { id: 'system', title: 'System icons' },
            { id: 'product', title: 'Product icons' },
          ],
        },
        {
          id: 'foundations-components',
          title: 'Component library',
          items: [
            { id: 'buttons', title: 'Buttons' },
            { id: 'cards', title: 'Cards' },
            { id: 'badges', title: 'Badges' },
            { id: 'tags', title: 'Tags' },
          ],
        },
      ],
      talent: [
        {
          id: 'talent-resume',
          title: 'Resume builder',
          items: [
            { id: 'sections', title: 'Sections' },
            { id: 'templates', title: 'Templates' },
            { id: 'export', title: 'Export' },
          ],
        },
        {
          id: 'talent-apply',
          title: 'Job application flow',
          items: [
            { id: 'job-list', title: 'Job list' },
            { id: 'apply-form', title: 'Apply form' },
            { id: 'status', title: 'Status' },
          ],
        },
        {
          id: 'talent-portfolio',
          title: 'Portfolio / project cards',
          items: [
            { id: 'grid', title: 'Grid' },
            { id: 'detail', title: 'Detail' },
          ],
        },
        {
          id: 'talent-interview',
          title: 'Interview & chat UI',
          items: [
            { id: 'chat', title: 'Chat' },
            { id: 'interview', title: 'Interview' },
          ],
        },
        {
          id: 'talent-dashboard',
          title: 'Dashboard with stats',
          items: [
            { id: 'overview', title: 'Overview' },
            { id: 'charts', title: 'Charts' },
          ],
        },
      ],
      client: [
        {
          id: 'client-job-post',
          title: 'Job post flow',
          items: [
            { id: 'draft', title: 'Draft' },
            { id: 'publish', title: 'Publish' },
          ],
        },
        {
          id: 'client-team-builder',
          title: 'Team builder',
          items: [
            { id: 'roles', title: 'Roles' },
            { id: 'invite', title: 'Invite' },
          ],
        },
        {
          id: 'client-shortlist-offer',
          title: 'Shortlist + offer page',
          items: [
            { id: 'shortlist', title: 'Shortlist' },
            { id: 'offer', title: 'Offer' },
          ],
        },
        {
          id: 'client-milestone-quote',
          title: 'Milestone + quote view',
          items: [
            { id: 'milestones', title: 'Milestones' },
            { id: 'quotes', title: 'Quotes' },
          ],
        },
      ],
      aiTools: [
        {
          id: 'ai-gpt-prompts',
          title: 'GPT prompt modals',
          items: [
            { id: 'prompt-modal', title: 'Prompt modal' },
            { id: 'history', title: 'History' },
          ],
        },
        {
          id: 'ai-content-assistant',
          title: 'Content assistant panels',
          items: [
            { id: 'side-panel', title: 'Side panel' },
            { id: 'inline', title: 'Inline helper' },
          ],
        },
        {
          id: 'ai-scoring',
          title: 'Scoring overlays',
          items: [
            { id: 'resume-score', title: 'Resume score' },
            { id: 'job-fit', title: 'Job fit' },
          ],
        },
        {
          id: 'ai-chat',
          title: 'Chat-style interaction screens',
          items: [
            { id: 'chat', title: 'Chat' },
            { id: 'agent', title: 'Agent view' },
          ],
        },
      ],
      dao: [
        {
          id: 'dao-voting',
          title: 'Voting screens',
          items: [
            { id: 'list', title: 'Proposals list' },
            { id: 'vote', title: 'Vote flow' },
          ],
        },
        {
          id: 'dao-treasury',
          title: 'Treasury dashboard',
          items: [
            { id: 'balances', title: 'Balances' },
            { id: 'activity', title: 'Activity' },
          ],
        },
        {
          id: 'dao-proposals',
          title: 'Proposal submission',
          items: [
            { id: 'create', title: 'Create proposal' },
            { id: 'review', title: 'Review' },
          ],
        },
        {
          id: 'dao-token',
          title: 'Token transfer + staking',
          items: [
            { id: 'transfer', title: 'Transfer' },
            { id: 'stake', title: 'Stake' },
          ],
        },
      ],
      admin: [
        {
          id: 'admin-user-metrics',
          title: 'User metrics',
          items: [
            { id: 'cohorts', title: 'Cohorts' },
            { id: 'funnels', title: 'Funnels' },
          ],
        },
        {
          id: 'admin-content-approvals',
          title: 'Content approvals',
          items: [
            { id: 'queue', title: 'Queue' },
            { id: 'policies', title: 'Policies' },
          ],
        },
        {
          id: 'admin-global-toggles',
          title: 'Global toggle center',
          items: [
            { id: 'flags', title: 'Feature flags' },
            { id: 'experiments', title: 'Experiments' },
          ],
        },
        {
          id: 'admin-deployment',
          title: 'Deployment panel',
          items: [
            { id: 'environments', title: 'Environments' },
            { id: 'releases', title: 'Releases' },
          ],
        },
      ],
      mobile: [
        {
          id: 'mobile-nav',
          title: 'Navigation tabs',
          items: [
            { id: 'tabs', title: 'Tabs' },
            { id: 'topbar', title: 'Top bar' },
          ],
        },
        {
          id: 'mobile-flows',
          title: 'Condensed flows for jobs + chat',
          items: [
            { id: 'jobs', title: 'Jobs' },
            { id: 'chat', title: 'Chat' },
          ],
        },
        {
          id: 'mobile-onboarding',
          title: 'App onboarding',
          items: [
            { id: 'welcome', title: 'Welcome' },
            { id: 'permissions', title: 'Permissions' },
          ],
        },
      ],
    },
  }
}

export type TokenSet = {
  colors: Record<string, string>
  typography: {
    fontSizes: Record<string, string>
  }
}

export async function buildTokenSet(): Promise<TokenSet> {
  // Dynamically import Tailwind config for color extraction
  const tailwindConfig = require('../tailwind.config.js')
  const extendedColors = tailwindConfig?.theme?.extend?.colors || {}
  const colors: Record<string, string> = {}

  function flattenColors(prefix: string, obj: any) {
    Object.entries(obj || {}).forEach(([key, value]) => {
      const newKey = prefix ? `${prefix}.${key}` : key
      if (typeof value === 'string') {
        colors[newKey] = value
      } else if (typeof value === 'object') {
        flattenColors(newKey, value)
      }
    })
  }

  flattenColors('', extendedColors)

  const typography = {
    fontSizes: tailwindConfig?.theme?.extend?.fontSize || {},
  }

  return { colors, typography }
}

export type UIKitKind = 'tailwind' | 'chakra' | 'react'

export function buildUIKit(kind: UIKitKind): Record<string, string> {
  if (kind === 'tailwind') {
    return {
      'README.md': '# Zion OS Tailwind UI Kit\n\nUse components with Tailwind classes from the design map.',
      'components/Button.tsx': "export function Button({ children }: { children: React.ReactNode }) { return <button className=\"px-4 py-2 rounded bg-neon-blue text-black hover:opacity-90\">{children}</button> }",
      'components/Card.tsx': "export function Card({ children }: { children: React.ReactNode }) { return <div className=\"rounded-lg border border-gray-200 dark:border-gray-800 p-4 bg-white/60 dark:bg-black/40\">{children}</div> }",
    }
  }
  if (kind === 'chakra') {
    return {
      'README.md': '# Zion OS Chakra UI Kit\n\nTheme tokens and a couple of primitives.',
      'theme/index.ts': "import { extendTheme } from '@chakra-ui/react'; export default extendTheme({ colors: { neon: { blue: '#00d4ff' }}});",
      'components/Button.tsx': "import { Button as CButton } from '@chakra-ui/react'; export function Button(props: any){ return <CButton colorScheme=\"cyan\" {...props} /> }",
    }
  }
  return {
    'README.md': '# Zion OS React UI Kit\n\nFramework-agnostic React components.',
    'components/Button.tsx': "export function Button({ children }: { children: React.ReactNode }) { return <button style={{ background: '#00d4ff', color: '#000', borderRadius: 8, padding: '8px 12px' }}>{children}</button> }",
  }
}

export async function fetchLovableTokens(): Promise<Partial<TokenSet> | null> {
  const base = process.env.LOVABLE_CMS_URL
  if (!base) return null
  try {
    const res = await fetch(`${base.replace(/\/$/, '')}/api/design-tokens`)
    if (!res.ok) return null
    return (await res.json()) as Partial<TokenSet>
  } catch {
    return null
  }
}