# Zion OS Design Map

This design map provides a Figma-compatible outline for the Zion OS ecosystem. Each section lists suggested Figma frames and key components to help designers organize work across the product layers.

## 1. Foundations
### Color System
- `zion-blue` (`#2e73ea`, light `#8ab1f3`, dark `#172d67`)
- `zion-purple` (`#8c15e9`, light `#b971f2`, dark `#530c8b`)
- `zion-cyan` (`#22ddd2`, light `#7aeae4`, dark `#14847e`)
- `zion-slate` (`#17072b`, light `#451582`, dark `#000000`)
- Primary/secondary variables from `src/index.css`

### Typography
- Sans font: `Inter`
- Heading font: `Montserrat`
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
