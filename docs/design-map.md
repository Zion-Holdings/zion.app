# Zion OS Design Map

This design map provides a Figma-compatible outline for the Zion OS ecosystem. Each section lists suggested Figma frames and key components to help designers organize work across the product layers.

## 1. Foundations

### Color System

- `zion-blue` (`#2e73ea`, light `#8ab1f3`, dark `#172d67`)
- `zion-purple` (`#a855f7`, light `#c084fc`, dark `#6b21a8`)
- `zion-cyan` (`#22ddd2`, light `#7aeae4`, dark `#14847e`)
- `zion-slate` (`#17072b`, light `#451582`, dark `#000000`)
- Primary/secondary variables from `src/index.css`

### Typography

- Sans font: `Inter`
- Heading font: `Poppins`
- Apply `--font-sans` and `--font-heading` tokens from `src/index.css`

### Icon Set

- Use icons located in `./images/` (auth, ecommerce, talent, AI, content, realtime)

### Component Library

- Core components: cards, buttons, badges, tags
- Additional controls: forms, charts, and modal layouts

## 2. Talent UI

- Resume builder screens
- Job application flow
- Portfolio/project cards
- Interview and chat UI based on Socket.IO real-time messaging
- Dashboard with candidate statistics

## 3. Client UI

- Job post creation flow
- Team builder interface
- Shortlist and offer management page
- Milestone and quote view

## 4. AI Tools UI

- GPT prompt modals and assistant panels
- Scoring overlays for resume or candidate review
- Chat-style interaction screens

## 5. DAO & Token UI

- Voting screens for proposals
- Treasury dashboard (wallet balances, recent activity)
- Proposal submission form
- Token transfer and staking interface

## 6. Admin Console

- User metrics and analytics panels
- Content approval queues
- Global toggle center for feature flags
- Deployment panel (drawn from `./UnifiedDeploymentProtocol.md`)

## 7. Mobile Layouts

- Bottom navigation tabs
- Condensed flows for job listings and chat
- App onboarding sequence

## Figma Outputs

- Central Figma file containing the above frames
- Optionally export components to Tailwind/Chakra/React libraries
- Integrate with Lovable CMS for auto‑updated content

### Bonus: GPT Layout Suggestions

Design a small plug‑in or script where typing **“Create New Screen”** triggers a GPT-generated wireframe suggestion.

## 8. Footer & Miscellaneous

| Area                    | AI Prompt                                                                                                | Enhancement        |
| ----------------------- | -------------------------------------------------------------------------------------------------------- | ------------------ |
| Quick Links Micro-copy  | "Write 15-word descriptions for footer links: Products, Services, Talent, Equipment, Green IT, Careers." | Adds context.      |
| Social Proof Strip      | "Compose a 25-word line: ‘Join 25,000+ innovators building AI solutions on Zion today.’"                 | Credibility boost. |
| Cookie Consent Banner   | "Draft a 30-word cookie notice with ‘Accept’ and ‘Settings’ buttons, friendly tone."                     | Compliance.        |
| Accessibility Statement | "Write a 60-word note pledging WCAG 2.2 AA compliance and inviting feedback."                            | Inclusivity.       |
