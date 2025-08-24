## Zion AI Milestone Assistant

This module provides an API endpoint and a React component to auto-generate project milestones and suggested timelines based on a scope of work.

### Features
- Client-only trigger during project creation or contract editing
- GPT-powered milestone suggestions with dates and effort estimates
- Editable accordion UI with "AI Suggested" tag
- "Auto-add to Milestone Tracker" toggle

### Run locally
1. Copy env and set key:
```bash
cp .env.example .env
# set OPENAI_API_KEY
```
2. Install and run:
```bash
npm i
npm run dev
```
Service runs at `http://localhost:4321`.

### API
POST `/api/ai/milestones`
Body:
```json
{
  "scopeOfWork": "string (>= 10 chars)",
  "startDateIso": "YYYY-MM-DDTHH:mm:ss.sssZ",
  "endDateIso": "YYYY-MM-DDTHH:mm:ss.sssZ",
  "projectType": "Web Dev | AI/ML | DevOps | Mobile | Data Engineering | Other"
}
```
Response:
```json
{
  "milestones": [
    {
      "title": "...",
      "description": "...",
      "suggestedDueDateIso": "...",
      "estimatedEffortHours": 24,
      "tags": ["AI Suggested"]
    }
  ]
}
```

### React component
Import `src/client/MilestoneAssistant.tsx` into your project creation / contract editor view and pass the form values.

Example:
```tsx
<MilestoneAssistant
  scopeOfWork={form.scope}
  startDateIso={form.startDate}
  endDateIso={form.endDate}
  projectType={form.projectType}
  onAccept={(milestones, autoAdd) => {
    // save to project, show to both parties upon acceptance
  }}
/>
```

### Security & Access
- Only render the component for client users
- Persist accepted milestones to the project; keep suggestions ephemeral until accepted
- Show accepted milestones to both parties