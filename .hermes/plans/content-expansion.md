# Content Expansion Plan — Zion Tech Group
**Date:** 2026-08-17  
**Scope:** Page-by-page recommendations for the next 10 content improvements  
**Constraint:** Read-only plan. Do not edit site files.

---

## 1. Home (`/`)
**Current gap:** Hero + 3 category cards + 2 CTAs. Missing social proof, metrics, and deeper value signals.  
**Proposed additions:**
- Add a "Trusted by" / metrics strip below the hero (e.g., engagement count, industries served, uptime target, response-time SLA).
- Expand the 3 service cards into 6, each with a one-line benefit and an "Explore →" link.
- Insert a "Why Zion" section (3-column) with differentiators: outcome-first, operational readiness, evidence-based expansion.
- Add a case-study teaser strip: 3 tiles linking to `/case-studies/` with measurable outcomes.
- Add a sticky or repeating secondary CTA block: "Start a project →" before the footer.

**Impact:** Higher conversion from first impression; clearer value prop for cold visitors.

---

## 2. Services (`/services/`)
**Current gap:** 6 category cards + delivery principles block. No per-category landing pages, no pricing transparency, no "what's included" detail.  
**Proposed additions:**
- Add a "Service selector" quick-match table (category × use case) so visitors self-navigate faster.
- Add a "Popular combinations" section (e.g., "AI Strategy + Managed AI", "Cloud Migration + Observability").
- Add an "Engagement models at a glance" mini-table mapping project-based, retainer, and managed to typical timelines and cost bands.
- Add a dedicated section for each category with 3-4 bullet capabilities and a "Learn more →" link to filtered `/services/` view or category pages.
- Insert a bottom-of-page CTA strip with "Request a quote" + "Browse case studies".

**Impact:** Reduces bounce rate; helps buyers self-qualify before contacting.

---

## 3. Service Detail Pages (`/services/[slug]/`)
**Current gap:** Only 2 mapped slugs (`ai-agents-autonomous`, `cloud-cost-optimization-service`). Each detail page is ~2 cards of placeholder content.  
**Proposed additions:**
- Expand `SERVICE_CATEGORY_MAP` to cover all 6 primary categories: `ai-strategy`, `cloud-devops`, `security-compliance`, `data-analytics`, `automation`, `micro-saas`.
- Add per-service sections:
  - Overview paragraph with outcomes, not just description.
  - Capabilities list (4-6 bullets).
  - Pricing model guidance (e.g., "Typically retainer or project-based").
  - Related services cross-links.
  - "Ideal for" buyer-fit bullets.
  - Bottom CTA: "Talk to an engineer about this service".
- Add a JSON or TS data file for service metadata to avoid hardcoding in the page component.

**Impact:** Transforms `/services/[slug]/` from placeholder into a real conversion path.

---

## 4. Industries (`/industries/`)
**Current gap:** 7 cards with one-line descriptions. No supporting evidence, no regulatory context, no vertical-specific outcomes.  
**Proposed additions:**
- Add a "Why industry specialization matters" intro paragraph.
- Expand each industry card to include:
  - One measurable outcome example (e.g., "Healthcare: 30% faster claim processing").
  - A compliance/regulatory tag (e.g., HIPAA, PCI-DSS, GDPR).
  - 2-3 "Key capabilities" bullets.
  - "See services" + "See case studies" dual links.
- Add a bottom CTA strip: "Not sure where to start? Contact us for a vertical readiness assessment".

**Impact:** Improves vertical SEO and shows compliance awareness to regulated buyers.

---

## 5. Industry Detail Pages (`/industries/[slug]/`)
**Current gap:** 3 generic bullets per industry. No case studies, no compliance details, no pricing context.  
**Proposed additions:**
- Add an industry-specific hero paragraph with pain point + outcome.
- Add sections:
  - "Typical outcomes" (2-3 metrics).
  - "Compliance context" (regimes relevant to the industry).
  - "Relevant services" (4-6 linked service cards).
  - "Case studies" (1-2 linked case-study tiles).
  - "Getting started" timeline (e.g., Week 1-2: assessment; Week 3-6: pilot).
- Add a CTA: "Schedule a vertical scoping call".

**Impact:** Converts industry researchers into discovery calls.

---

## 6. Case Studies (`/case-studies/`)
**Current gap:** 6 thematic cards with one-line descriptions. No metrics, no customer quotes, no detail pages.  
**Proposed additions:**
- Convert each card into a mini case study: Client, Challenge, Approach, Outcome, Metric.
- Add a "Results at a glance" strip (e.g., "40% cost reduction", "99.99% uptime", "3-day MTTR").
- Add a "Client quotes" section (even if anonymized).
- Add a bottom-of-page CTA: "Want similar results? Start a project".
- Link each card to a dedicated `/case-studies/[slug]/` page with extended narrative.

**Impact:** Builds trust and gives sales-ready proof points.

---

## 7. About (`/about/`)
**Current gap:** 4 generic cards (Mission, Approach, Clients, Capability). No team, no history, no office info, no values.  
**Proposed additions:**
- Add a company timeline or founding story paragraph.
- Add a "Leadership" or "Team" section with 3-4 placeholder bio cards.
- Add a "Values" section (e.g., reliability, transparency, outcome-first).
- Add a "By the numbers" strip (years in market, clients, regions, engineers).
- Add a "Careers" teaser with current open roles linking to `/careers/`.
- Add a bottom CTA: "Work with us" linking to `/contact/` and `/start-project/`.

**Impact:** Humanizes the brand; improves recruiting and partner trust.

---

## 8. Blog (`/blog/`)
**Current gap:** Strong index with 45+ posts, but no newsletter capture, no author attribution, no reading-time metadata, no social sharing, no category filter UI.  
**Proposed additions:**
- Add a newsletter capture block: "Get AI and IT insights in your inbox" with email input + submit.
- Add author bios under each post (or a shared author sidebar).
- Add reading-time estimates and publish dates.
- Add a "Popular posts" sidebar or section based on a hardcoded or data-driven list.
- Add social-share buttons (copy link, LinkedIn, X).
- Add a category/tag filter at the top of the index.
- Add a "Related posts" section on individual blog post pages.

**Impact:** Increases engagement, return visits, and lead capture.

---

## 9. Contact (`/contact/`)
**Current gap:** Email card + response-time card + CTA block. No form, no phone, no office locations, no calendar integration.  
**Proposed additions:**
- Add a contact form with fields: name, email, company, service interest, message.
- Add a phone number field and direct-dial link.
- Add an "Offices" section with placeholder locations (even if remote-first).
- Add a "Before you contact" self-triage: 3 quick buttons ("I want a quote", "I have a support question", "I want to partner").
- Add a link to `/start-project/` for structured scoping before the first call.
- Add a "Response SLA" badge (e.g., "We reply within 1 business hour").

**Impact:** Lowers friction for inbound leads; qualifies inquiries before they reach a human.

---

## 10. Pricing (`/pricing/`)
**Current gap:** 3 engagement model cards with no actual pricing ranges, no comparison table, no ROI context.  
**Proposed additions:**
- Add "Starting at" bands for each model (e.g., "Project-based: from $15k", "Retainer: from $5k/mo", "Managed: from $20k/mo").
- Add a comparison table: columns = Model, Best for, Typical timeline, Billing cadence, Includes.
- Add an "ROI calculator" CTA linking to `/tools/roi-calculator/`.
- Add a "What's included" checklist per model (e.g., "Managed AI includes: monitoring, cost controls, model updates, incident response").
- Add a bottom CTA: "Need a custom proposal? Contact us".

**Impact:** Sets expectations earlier in the buyer journey; reduces unqualified contact submissions.

---

## Summary Table

| # | Page | Primary Additions | Expected Outcome |
|---|------|-------------------|------------------|
| 1 | Home | Metrics strip, expanded cards, case-study teaser | Higher first-impression conversion |
| 2 | Services | Selector table, combinations, mini pricing table | Lower bounce, faster self-qualification |
| 3 | Service Detail | Per-service pages for all 6 categories, full metadata | Real conversion path per capability |
| 4 | Industries | Outcomes, compliance tags, capability bullets | Vertical SEO, regulated-buyer trust |
| 5 | Industry Detail | Pain points, compliance, case studies, timeline | Research-to-call conversion |
| 6 | Case Studies | Metrics, quotes, dedicated detail pages | Trust and sales-ready proof |
| 7 | About | Timeline, team, values, by-the-numbers | Brand humanization, recruiting |
| 8 | Blog | Newsletter, authors, sharing, filters | Engagement and lead capture |
| 9 | Contact | Form, phone, locations, self-triage | Lower friction, qualified inbound |
| 10 | Pricing | Starting ranges, comparison table, ROI link | Clear expectations, fewer bad fits |

---

## Execution Notes
- **Data layer first:** Before editing pages, extract service/industry/case-study metadata into JSON/TS files under `app/data/` so content can be maintained without touching components.
- **Component reuse:** Introduce a `CaseStudyCard`, `ServiceCard`, and `IndustryCard` shared component to keep edits consistent.
- **SEO:** Every new section should add Schema.org JSON-LD where appropriate (e.g., `FAQPage`, `Article`, `Service`).
- **No live edits:** This is a planning document only. Implementation should follow after review and prioritization.
