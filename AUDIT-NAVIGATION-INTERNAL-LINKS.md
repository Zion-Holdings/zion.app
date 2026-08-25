# Navigation & Internal Link Density Audit
**Site:** ziontechgroup.com | **Branch:** hero-carousel | **Date:** 2026-08-19

## 1. NAVIGATION SYSTEM CHECK

### Primary Header Analysis
**Current state:** Navigation.tsx renders 4 dropdown categories (Services, AI Lab, Solutions, Resources) plus inline links (Dashboard, Use Cases, Blog, FAQ, etc.) and a CTA button ("Get Free Consultation").

**Header item count:** 4 dropdowns + 2 inline links + 1 CTA button = ~7 items
- ✅ Within the 5–7 core category target
- ✅ Categorizations mapped: Services, Solutions, Products (via footer), Tools, Company (via footer)

**Mobile accessibility gaps:**
- ✅ `aria-label` present on mobile toggle (`Open menu`/`Close menu`)
- ✅ `aria-expanded` on all dropdown buttons
- ✅ `focus:ring-2 focus:ring-purple-500` on mobile toggle button
- ✅ Skip-to-content link in root layout
- ⚠️ **Touch target size:** Dropdown buttons use `px-3 py-2` (~h-16) — meets 48px minimum
- ⚠️ Mobile nav links use `px-3 py-2.5` — borderline (44px height); could increase vertical padding to `py-3`

### Footer Analysis
**Footer.tsx** currently contains a flat 13-item link list with no categorization:
- Home, Services, Products, Solutions, AI Agent Dashboard, Agents Monitoring, Use Cases, Blog, FAQ, Testimonials, About, Contact

**Issues:**
- ❌ No categorization — all 13 links mixed together
- ❌ No `<nav aria-label="Footer">` — bare `<nav>` with no accessible label
- ❌ Links use `/products/` and `/dashboard/` but nav uses `/products/` and `/dashboard/` — need consistency check
- ❌ No internal link groups (Services categories, Solutions, Company, Legal)

## 2. BREADCRUMB & CONTEXTUAL LINKING

### Active Breadcrumb Implementation
- ✅ `Breadcrumb.tsx` component exists with proper `aria-label="Breadcrumb"`, `aria-current="page"` on last item
- ✅ `StandardPage.tsx` and `PageTemplate.tsx` both accept `breadcrumbItems` prop
- ✅ `[slug]/page.tsx` (dynamic service route) sets breadcrumbs: `Home > Services > {service title}`

### CRITICAL GAP: Orphaned Service Pages
- **10,199 of 10,201 service pages use raw `<main>` markup — NO breadcrumbs, NO navigation**
- These pages are **completely orphaned** — they lack:
  - `Navigation` component (rendered in root layout, but these pages use bare `<main>` without `StandardPage`/`PageShell`)
  - `Footer` component
  - `Breadcrumb` navigation
  - Internal links to related services
  - `aria-label` or semantic structure

  **Example:** `app/services/5g-network-slicing-optimizer-c5e11434/page.tsx` — only contains 1 `href` (external Calendly link), no internal context.

### Other breadcrumb coverage:
- ✅ `/tools/page.tsx` — breadcrumbs: `Home > Tools`
- ✅ `/use-cases/page.tsx` — breadcrumbs present
- ✅ `/solutions/*/` — breadcrumbs present
- ✅ `/products/page.tsx` — breadcrumbs present
- ✅ `/blog/*` — breadcrumbs present (using SiteBreadcrumbs)
- ❌ **10,199 service pages** — NO breadcrumbs

## 3. CONCRETE ACTION PLAN

### Identified Orphan Pages
| Category | Count | Issue |
|---|---|---|
| Service detail pages (`<main>` raw) | 10,199 | No nav, footer, breadcrumb, or internal links |
| Service `[slug]` pages | 2 | Has breadcrumbs + navigation (dynamic route) |
| Standard pages (tools, products, etc.) | ~20 | Breadcrumbs present |
| **Total orphan/near-orphan pages** | **10,199** | |

### Link Density Assessment
- **Sitemap:** 10,064 URLs (750 unique non-service + service pages)
- **Footer links:** 13 (flat list, no categories)
- **Avg. internal links per service page:** 0 (orphaned pages)
- **Nav links per page:** 7–15 (via dropdowns + footer)

### Menu Layout Recommendation (Refactored)

```
PRIMARY HEADER (7 items max):
┌─ Services ─────┐  ┌─ AI Lab ──┐  ┌─ Solutions ──┐  ┌─ Resources ─┐
│ Automation     │  │ Agents    │  │ AI & Auto   │  │ Blog       │
│ Cloud          │  │ AI Labs   │  │ Cloud&Dev   │  │ FAQ        │
│ Security       │  │ Eval      │  │ Security    │  │ Providers  │
│ Data           │  │ Status    │  │ Data        │  │ Status    │
│ AI             │  └───────────┘  │ Managed IT  │  └───────────┘
│ DevOps         │  ┌─ Tools ──┐   │ Micro-SaaS  │  ┌─ Company │
│ IoT            │  │ Recommender│  └───────────┘  │ About   │
│ …view all      │  │ Comparator │  ┌─ Quick Links│  │ Careers │
└────────────────┘  │ SSL Check  │  │ Contact     │  │ Contact │
                    └─────────────┘  └─────────────┘  └─────────┘
   [AI Agent Dashboard]  [Get Free Consultation]
```

### Refactored Footer Links JSON Array

```json
[
  { "label": "Services", "href": "/services/", "group": "Primary" },
  { "label": "AI Services", "href": "/ai-services/", "group": "Primary" },
  { "label": "Products", "href": "/products/", "group": "Primary" },
  { "label": "Solutions", "href": "/solutions/", "group": "Primary" },
  { "label": "Tools", "href": "/tools/", "group": "Primary" },
  { "label": "AI Agent Dashboard", "href": "/agents-monitoring/", "group": "Primary" },
  { "label": "Blog", "href": "/blog/", "group": "Primary" },
  { "label": "Use Cases", "href": "/use-cases/", "group": "Primary" },
  { "label": "FAQ", "href": "/faq/", "group": "Company" },
  { "label": "Testimonials", "href": "/testimonials/", "group": "Company" },
  { "label": "About", "href": "/about/", "group": "Company" },
  { "label": "Contact", "href": "/contact/", "group": "Company" },
  { "label": "Careers", "href": "/careers/", "group": "Company" },
  { "label": "Privacy", "href": "/privacy/", "group": "Legal" },
  { "label": "Terms", "href": "/terms/", "group": "Legal" },
  { "label": "SLA", "href": "/sla/", "group": "Legal" }
]
```

### Immediate Actions Required
1. **Fix orphaned service pages** — migrate 10,199 raw `<main>` pages to use `StandardPage` wrapper to restore Navigation, Footer, and Breadcrumb
2. **Refactor Footer.tsx** — add categorization (`aria-label="Footer navigation"`) with grouped columns (Primary, Company, Legal)
3. **Verify 2-click depth** — all key landing pages (Tools, Products, Solutions) must be reachable within 2 clicks from any page via consistent nav
4. **Audit `/dashboard/` vs `/agents-monitoring/`** — footer references `/dashboard/` but nav uses `/agents-monitoring/` — verify correct route
