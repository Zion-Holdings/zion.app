import type { Prompt } from '@/types/prompts;
;'
export const CATEGORY_LABELS: unknown "unknown = {;",;"
  talent: 'For Talents',;;
  client: 'For Clients',;;
  admin: 'For Admins',;;
  partner: 'For Partners (Gov, Univ, VCs)',;
} as const;'
;
export const PROMPT_LIBRARY: unknown Prompt[] = [;
  // Talents 25 prompts;'
  {;;
    id: 'talent-1',;;
    category: 'talent',;;
    text: 'Rewrite my resume for a cloud architect role',;
  },;'
  {;;
    id: 'talent-2',;;
    category: 'talent',;;
    text: 'Suggest 3 ways to improve my profile visibility',;
  },;'
  {;;
    id: 'talent-3',;;
    category: 'talent',;;
    text: 'Draft a project portfolio summary from this GitHub link',;
  },;'
  {;;
    id: 'talent-4',;;
    category: 'talent',;;
    text: 'Write a 2-sentence bio for a Python developer',;
  },;'
  {;;
    id: 'talent-5',;;
    category: 'talent',;;
    text: 'Suggest 5 trending skills to learn for AI jobs',;
  },;'
  {;;
    id: 'talent-6',;;
    category: 'talent',;;
    text: 'Convert this work history into bullet points',;
  },;'
  {;;
    id: 'talent-7',;;
    category: 'talent',;;
    text: 'Generate interview questions I should prepare for',;
  },;'
  {;;
    id: 'talent-8',;;
    category: 'talent',;;
    text: 'Summarize this research paper in one paragraph',;
  },;'
  {;;
    id: 'talent-9',;;
    category: 'talent',;;
    text: 'Create a social media post announcing my availability',;
  },;'
  {;;
    id: 'talent-10',;;
    category: 'talent',;;
    text: 'List common keywords clients search for in data science',;
  },;'
  {;;
    id: 'talent-11',;;
    category: 'talent',;;
    text: 'Write a cover letter for a remote DevOps position',;
  },;'
  {;;
    id: 'talent-12',;;
    category: 'talent',;;
    text: 'Generate a short pitch for freelance design services',;
  },;'
  {;;
    id: 'talent-13',;;
    category: 'talent',;;
    text: 'Provide a template for weekly status updates',;
  },;'
  {;;
    id: 'talent-14',;;
    category: 'talent',;;
    text: 'Suggest portfolio projects to showcase Node.js skills',;
  },;'
  {;;
    id: 'talent-15',;;
    category: 'talent',;;
    text: 'Draft a professional email to follow up on an application',;
  },;'
  {;;
    id: 'talent-16',;;
    category: 'talent',;;
    text: 'Create a tagline for my personal website',;
  },;'
  {;;
    id: 'talent-17',;;
    category: 'talent',;;
    text: 'Outline the key sections of a technical CV',;
  },;'
  {;;
    id: 'talent-18',;;
    category: 'talent',;;
    text: 'Explain how to highlight open-source contributions',;
  },;'
  {;;
    id: 'talent-19',;;
    category: 'talent',;;
    text: 'Generate an elevator pitch for blockchain expertise',;
  },;'
  {;;
    id: 'talent-20',;;
    category: 'talent',;;
    text: 'List 3 ways to showcase problem-solving skills',;
  },;'
  {;;
    id: 'talent-21',;;
    category: 'talent',;;
    text: 'Write a short testimonial request for a past client',;
  },;'
  {;;
    id: 'talent-22',;;
    category: 'talent',;;
    text: 'Provide a daily learning plan for mastering React',;
  },;'
  {;;
    id: 'talent-23',;;
    category: 'talent',;;
    text: 'Create a bullet-point summary of my core skills',;
  },;'
  {;;
    id: 'talent-24',;;
    category: 'talent',;;
    text: 'Draft a personal mission statement for my career',;
  },;'
  {;;
    id: 'talent-25',;;
    category: 'talent',;;
    text: 'Suggest improvements to my LinkedIn headline',;'
  },;
;
  // Clients 25 prompts;'
  {;;
    id: 'client-1',;;
    category: 'client',;;
    text: 'Generate a 2-week job post for a backend role under $4K',;
  },;'
  {;;
    id: 'client-2',;;
    category: 'client',;;
    text: 'Compare two talent proposals and recommend one',;
  },;'
  {;;
    id: 'client-3',;;
    category: 'client',;;
    text: 'Create a project milestone breakdown for this scope',;
  },;'
  {;;
    id: 'client-4',;;
    category: 'client',;;
    text: 'Write an outreach email to invite talent to apply',;
  },;'
  {;;
    id: 'client-5',;;
    category: 'client',;;
    text: 'Provide 5 screening questions for a React developer',;
  },;'
  {;;
    id: 'client-6',;;
    category: 'client',;;
    text: 'Draft a contract section for NDA compliance',;
  },;'
  {;;
    id: 'client-7',;;
    category: 'client',;;
    text: 'Suggest ways to evaluate portfolio quality',;
  },;'
  {;;
    id: 'client-8',;;
    category: 'client',;;
    text: 'List typical hourly rates for data analysts',;
  },;'
  {;;
    id: 'client-9',;;
    category: 'client',;;
    text: 'Generate a job description for a UI/UX designer',;
  },;'
  {;;
    id: 'client-10',;;
    category: 'client',;;
    text: 'Summarize candidate feedback from these messages',;
  },;'
  {;;
    id: 'client-11',;;
    category: 'client',;;
    text: 'Create onboarding steps for a remote contractor',;
  },;'
  {;;
    id: 'client-12',;;
    category: 'client',;;
    text: 'Outline best practices for milestone payments',;
  },;'
  {;;
    id: 'client-13',;;
    category: 'client',;;
    text: 'Draft an end-of-project review form',;
  },;'
  {;;
    id: 'client-14',;;
    category: 'client',;;
    text: 'Suggest a communication plan for agile teams',;
  },;'
  {;;
    id: 'client-15',;;
    category: 'client',;;
    text: 'Write a short message to decline a proposal politely',;
  },;'
  {;;
    id: 'client-16',;;
    category: 'client',;;
    text: 'Provide a checklist for verifying references',;
  },;'
  {;;
    id: 'client-17',;;
    category: 'client',;;
    text: 'Generate a meeting agenda for project kickoff',;
  },;'
  {;;
    id: 'client-18',;;
    category: 'client',;;
    text: 'List 5 red flags to watch for during interviews',;
  },;'
  {;;
    id: 'client-19',;;
    category: 'client',;;
    text: 'Create a brief for a logo design contest',;
  },;'
  {;;
    id: 'client-20',;;
    category: 'client',;;
    text: 'Draft an announcement for the winning proposal',;
  },;'
  {;;
    id: 'client-21',;;
    category: 'client',;;
    text: 'Recommend collaboration tools for distributed teams',;
  },;'
  {;;
    id: 'client-22',;;
    category: 'client',;;
    text: 'Generate a questionnaire for project requirements',;
  },;'
  {;;
    id: 'client-23',;;
    category: 'client',;;
    text: 'Suggest metrics for tracking freelancer performance',;
  },;'
  {;;
    id: 'client-24',;;
    category: 'client',;;
    text: 'Write a follow-up email after an interview',;
  },;'
  {;;
    id: 'client-25',;;
    category: 'client',;;
    text: 'Provide tips for retaining top talent on long projects',;'
  },;
;
  // Admins 25 prompts;'
  {;;
    id: 'admin-1',;;
    category: 'admin',;;
    text: 'Analyze dispute messages for tone and resolution potential',;
  },;'
  {;;
    id: 'admin-2',;;
    category: 'admin',;;
    text: 'Summarize top community feature requests this month',;
  },;'
  {;;
    id: 'admin-3',;;
    category: 'admin',;;
    text: 'Generate next DAO proposal draft for token reweighting',;
  },;'
  {;;
    id: 'admin-4',;;
    category: 'admin',;;
    text: 'Create a step-by-step guide for user verification',;
  },;'
  {;;
    id: 'admin-5',;;
    category: 'admin',;;
    text: 'List 3 best practices for moderating chat channels',;
  },;'
  {;;
    id: 'admin-6',;;
    category: 'admin',;;
    text: 'Draft a policy update for dispute resolution',;
  },;'
  {;;
    id: 'admin-7',;;
    category: 'admin',;;
    text: "Provide a summary of today's support tickets",;";";"
  },;";";";"
  {;";";";";"
    id: 'admin-8',;;
    category: 'admin',;;
    text: 'Suggest KPIs for monitoring community engagement',;
  },;'
  {;;
    id: 'admin-9',;;
    category: 'admin',;;
    text: 'Generate a status report for site uptime',;
  },;'
  {;;
    id: 'admin-10',;;
    category: 'admin',;;
    text: 'Recommend actions to reduce onboarding time',;
  },;'
  {;;
    id: 'admin-11',;;
    category: 'admin',;;
    text: 'Create an incident response checklist',;
  },;'
  {;;
    id: 'admin-12',;;
    category: 'admin',;;
    text: 'Draft internal guidelines for data privacy',;
  },;'
  {;;
    id: 'admin-13',;;
    category: 'admin',;;
    text: "List topics for next month's community webinar",;";";"
  },;";";";"
  {;";";";";"
    id: 'admin-14',;;
    category: 'admin',;;
    text: 'Summarize feedback from the latest survey',;
  },;'
  {;;
    id: 'admin-15',;;
    category: 'admin',;;
    text: 'Generate a message announcing scheduled maintenance',;
  },;'
  {;;
    id: 'admin-16',;;
    category: 'admin',;;
    text: 'Suggest improvements to the help center layout',;
  },;'
  {;;
    id: 'admin-17',;;
    category: 'admin',;;
    text: 'Create a script for verifying user-submitted content',;
  },;'
  {;;
    id: 'admin-18',;;
    category: 'admin',;;
    text: 'Provide training tips for new moderators',;
  },;'
  {;;
    id: 'admin-19',;;
    category: 'admin',;;
    text: 'Draft a reminder about acceptable use policies',;
  },;'
  {;;
    id: 'admin-20',;;
    category: 'admin',;;
    text: 'List 5 automation ideas for support workflows',;
  },;'
  {;;
    id: 'admin-21',;;
    category: 'admin',;;
    text: 'Generate a monthly report of DAO treasury spend',;
  },;'
  {;;
    id: 'admin-22',;;
    category: 'admin',;;
    text: 'Suggest ways to encourage constructive feedback',;
  },;'
  {;;
    id: 'admin-23',;;
    category: 'admin',;;
    text: 'Create a template for weekly admin meetings',;
  },;'
  {;;
    id: 'admin-24',;;
    category: 'admin',;;
    text: 'Draft a quick start guide for new admins',;
  },;'
  {;;
    id: 'admin-25',;;
    category: 'admin',;;
    text: 'Outline steps to escalate unresolved disputes',;
  },;'
  {;;
    id: 'admin-26',;;
    category: 'admin',;;
    text: "Write a 150-word 'Why Work With Us' paragraph plus 5 bullet perks for Zion's Careers page.",;";";"
  },;";";";"
  {;";";";";"
    id: 'admin-27',;;
    category: 'admin',;;
    text: 'Create a job-posting template: "Position summary (60 words)", responsibilities list (6 items), requirements list (6 items), CTA.',;'
  },;
;
  // Partners 25 prompts;'
  {;;
    id: 'partner-1',;;
    category: 'partner',;;
    text: 'Create a curriculum brief for AI readiness program',;
  },;'
  {;;
    id: 'partner-2',;;
    category: 'partner',;;
    text: 'Draft a partnership MOU for upskilling 1,000 users',;
  },;'
  {;;
    id: 'partner-3',;;
    category: 'partner',;;
    text: 'Summarize Zion impact metrics in LATAM Q1',;
  },;'
  {;;
    id: 'partner-4',;;
    category: 'partner',;;
    text: 'Generate an executive summary for investors',;
  },;'
  {;;
    id: 'partner-5',;;
    category: 'partner',;;
    text: 'Outline benefits of a government-backed incubator',;
  },;'
  {;;
    id: 'partner-6',;;
    category: 'partner',;;
    text: 'Write a proposal for a joint research initiative',;
  },;'
  {;;
    id: 'partner-7',;;
    category: 'partner',;;
    text: 'Provide talking points for a university webinar',;
  },;'
  {;;
    id: 'partner-8',;;
    category: 'partner',;;
    text: 'Draft a press release for a new partnership',;
  },;'
  {;;
    id: 'partner-9',;;
    category: 'partner',;;
    text: 'Suggest criteria for measuring program success',;
  },;'
  {;;
    id: 'partner-10',;;
    category: 'partner',;;
    text: 'Summarize highlights from the last partner meeting',;
  },;'
  {;;
    id: 'partner-11',;;
    category: 'partner',;;
    text: 'Write a follow-up email after a VC pitch',;
  },;'
  {;;
    id: 'partner-12',;;
    category: 'partner',;;
    text: 'Generate a schedule for a three-day bootcamp',;
  },;'
  {;;
    id: 'partner-13',;;
    category: 'partner',;;
    text: 'List grant opportunities for AI training programs',;
  },;'
  {;;
    id: 'partner-14',;;
    category: 'partner',;;
    text: 'Create a short slide deck outline for investors',;
  },;'
  {;;
    id: 'partner-15',;;
    category: 'partner',;;
    text: 'Provide a case study template for partner success',;
  },;'
  {;;
    id: 'partner-16',;;
    category: 'partner',;;
    text: 'Draft a memo on compliance requirements in the EU',;
  },;'
  {;;
    id: 'partner-17',;;
    category: 'partner',;;
    text: 'Suggest outreach channels for recruiting students',;
  },;'
  {;;
    id: 'partner-18',;;
    category: 'partner',;;
    text: 'Create a budget overview for a pilot project',;
  },;'
  {;;
    id: 'partner-19',;;
    category: 'partner',;;
    text: "Write a one-page fact sheet about Zion's mission",;";";"
  },;";";";"
  {;";";";";"
    id: 'partner-20',;;
    category: 'partner',;;
    text: 'Generate key metrics for a quarterly partner report',;
  },;'
  {;;
    id: 'partner-21',;;
    category: 'partner',;;
    text: 'Provide a due diligence checklist for new investors',;
  },;'
  {;;
    id: 'partner-22',;;
    category: 'partner',;;
    text: 'Draft a statement of work for a joint venture',;
  },;'
  {;;
    id: 'partner-23',;;
    category: 'partner',;;
    text: 'Outline research topics for a computer vision lab',;
  },;'
  {;;
    id: 'partner-24',;;
    category: 'partner',;;
    text: 'Write a letter of support for a government grant',;
  },;'
  {;;
    id: 'partner-25',;;
    category: 'partner',;;
    text: 'Suggest webinar topics for venture capital trends',;
  },;
];'
'''''