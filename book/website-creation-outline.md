# THE FIVE PILLARS FRAMEWORK — SaaS PLATFORM OUTLINE

## Product Positioning
**The Five Pillars Framework Platform** is a SaaS product that operationalizes the framework as software — enabling institutions to assess, track, verify, and demonstrate their Betterment of Society across all five pillars.

**Not a consulting website. Not a book site. A SaaS product.**

**Deployment Target:** `amirhashmilive.github.io/csrfivepillarsframework` (marketing site + app)

---

## 1. THE SaaS MODEL

### What the Product Is

A cloud-based platform where institutions:
- Assess their Pillar Coherence (A-E-I-O-M)
- Track their CEI score over time
- Manage their Trust Layer verification infrastructure
- Generate evidence-based reports for boards, investors, regulators
- Benchmark against peer institutions
- Receive AI-assisted improvement recommendations

### Who Uses It (User Types)

| User Type | Role | What They Do in the Platform |
|-----------|------|-----------------------------|
| **Corporate CSR Teams** | Primary subscriber | Track CSR initiatives, verify outcomes, generate board reports |
| **Implementing Agencies** | Delivery partner | Log execution data, report outcomes, verify field activities |
| **Foundations** | Funder | Assess grantees, track portfolio betterment, verify impact |
| **Government Departments** | Regulator/Operator | Monitor programs, verify public spending, report to parliament |
| **NGOs** | Implementer | Demonstrate betterment to funders, track community outcomes |
| **Auditors & Verifiers** | Independent | Conduct third-party verification, issue certifications |
| **Boards & Investors** | Read-only | View dashboards, monitor Pillar Coherence, assess investment risk |
| **Academic Researchers** | Analyst | Access anonymized benchmarking data, conduct studies |

### Subscription Tiers

| Tier | Price/mo | Users | Features | Target |
|------|----------|-------|----------|--------|
| **Starter** | $0 | 1 | Self-assessment, CEI calculator, basic dashboard | Small orgs, pilots |
| **Professional** | $499 | 5 | All modules, quarterly assessments, reporting, 1 implementing agency | Mid-size orgs |
| **Enterprise** | $2,499 | 25 | Unlimited agencies, benchmarking, API access, dedicated support | Large orgs |
| **Institutional** | Custom | Unlimited | Multi-entity, white-label, custom integrations, certification | Governments, multinationals |

---

## 2. THE FIVE MODULES (One Per Pillar)

Each pillar becomes a functional module in the SaaS:

### Module A — Accountability Tracking
**What it does:** Tracks whether the institution is answerable for outcomes (not activities)
- Define outcome commitments (what you're accountable for)
- Assign accountability owners (board, executive, operational)
- Track accountability reviews (scheduled, completed, overdue)
- Generate accountability audit trail
- Flag accountability gaps (where no one is answerable)

### Module E — Execution Management
**What it does:** Manages the execution architecture that converts intent to reality
- Register implementing agencies (with capability assessment)
- Track initiative execution status
- Log execution architecture data (governance, delivery, capability)
- Monitor the Implementing Agency Variable (which agencies produce outcomes, which don't)
- Flag Policy-Practice Chasm risks

### Module I — Initiative Authenticity
**What it does:** Ensures initiatives originate from participatory engagement
- Log stakeholder identification of need (participatory process)
- Track initiative origin (participatory vs. imposed)
- Record community endorsement of initiatives
- Flag Imposed Imperative risks (initiatives without participatory origin)
- Track Participatory Engagement quality

### Module O — Outcome Verification
**What it does:** The core module — verifies that outcomes actually occurred
- Log activity → output → outcome → betterment chain
- Attach Betterment Evidence (documents, data, verification)
- Track Outcome Verifiability (can a skeptical observer confirm this?)
- Flag Output Illusion (outputs without outcomes)
- Calculate Betterment Index (community-level verified betterment)

### Module M — Meaning & Communication
**What it does:** Ensures communication is usable (legible, verifiable, actionable)
- Generate stakeholder-specific reports (board, community, regulator, investor)
- Test Communication Usability (legibility, verifiability, actionability scores)
- Track Meaning Correspondence (narrative vs. reality alignment)
- Flag Transparency Trap risks (voluminous reporting that no one can use)
- Auto-generate plain-language summaries for community stakeholders

### Module X — The CEI Dashboard (Cross-Pillar)
**What it does:** Integrates all 5 modules into a single diagnostic score
- Real-time CEI calculation: CEI = [β·WDC + (1-β)·SAI] × L^γ
- Pillar Coherence visualization (all 5 must be present)
- Pillar Deficiency alerts
- Position on Proclamation-Proof Gradient
- Trust Layer Maturity Score
- Historical trend (is the institution migrating toward evidence-based legitimacy?)

---

## 3. TECHNOLOGY STACK

| Component | Technology | Rationale |
|-----------|------------|-----------|
| **Marketing Site** | Next.js 16 (static export) | GitHub Pages deployment |
| **SaaS App** | Next.js 16 (full-stack) | Same codebase, different routes |
| **Database** | Prisma + SQLite (demo) → PostgreSQL (production) | User data, assessments, evidence |
| **Auth** | NextAuth.js | Multi-tenant, role-based access |
| **Payments** | Stripe | Subscription billing |
| **AI** | z-ai-web-dev-sdk | RAG-based recommendations, report generation |
| **Charts** | Recharts | CEI dashboards, trend visualization |
| **Forms** | React Hook Form + Zod | Assessment inputs, data entry |
| **File Storage** | Cloudinary or S3 | Evidence documents, verification files |

### Architecture Note
Since the deployment target is GitHub Pages (static), the marketing site is static. The SaaS app requires a backend — for the MVP, I recommend:
- **Phase 1 (MVP):** Static marketing site + client-side demo tools (CEI calculator, self-assessment)
- **Phase 2:** Deploy SaaS app to Vercel/Netlify (backend) while marketing site stays on GitHub Pages
- **Phase 3:** Custom domain for the app (`app.fivepillarsframework.org`)

---

## 4. WEBSITE STRUCTURE — MARKETING + APP

### Part A: Marketing Site (Static, GitHub Pages)

```
csrfivepillarsframework/ (marketing site)
├── /                          # Home
├── /product                   # Platform overview
├── /modules                   # The 5 pillar modules
│   ├── /modules/accountability
│   ├── /modules/execution
│   ├── /modules/initiative
│   ├── /modules/outcome
│   └── /modules/meaning
├── /pricing                   # Subscription tiers
├── /users                     # User type pages
│   ├── /users/corporate
│   ├── /users/implementing-agency
│   ├── /users/foundation
│   ├── /users/government
│   ├── /users/ngo
│   └── /users/auditor
├── /cei                       # CEI explainer + live calculator
├── /demo                      # Interactive demo (client-side)
├── /resources                 # Framework, book, glossary, research
├── /about                     # The institute, Dr. Hashmi
├── /contact                   # Sales/contact form
├── /login                     # Link to SaaS app
└── /signup                    # Link to SaaS app
```

### Part B: SaaS App (Dynamic, separate deployment)

```
app.fivepillarsframework.org/ (SaaS app)
├── /dashboard                 # Main dashboard (CEI, pillar overview)
├── /accountability            # Module A
├── /execution                 # Module E
├── /initiative                # Module I
├── /outcome                   # Module O
├── /meaning                   # Module M
├── /cei                       # CEI dashboard + history
├── /reports                   # Generate & download reports
├── /benchmarking              # Peer comparison (anonymized)
├── /team                      # User management
├── /settings                  # Organization settings, subscription
├── /implementing-agencies     # Manage partner agencies
├── /evidence                  # Evidence library
├── /audit-trail               | Accountability log
└── /api                       # API routes (CRUD, AI, Stripe webhooks)
```

---

## 5. MARKETING SITE — PAGE SPECIFICATIONS

### PAGE: HOME (`/`)

**Purpose:** Convert visitors to signups. Establish the SaaS value proposition.

**Sections:**

#### S1 — Hero
- **Headline:** "Stop Proclaiming. Start Proving."
- **Subheadline:** "The first SaaS platform that helps institutions demonstrate — with evidence — that they produce the Betterment of Society."
- **CTAs:** [Start Free Assessment] [Watch Demo]
- **Visual:** Animated dashboard mockup showing CEI score

#### S2 — The Problem
- **Headline:** "You're trapped in the Proclamation Trap"
- **Body:** Your reports are thicker than ever. Your evidence is thinner than ever. Your stakeholders are more skeptical than ever.
- **Stat:** "Institutions report 300% more than a decade ago. Public trust has declined 40%."
- **Visual:** Proclamation-Proof Gradient

#### S3 — The Solution
- **Headline:** "The Five Pillars Framework — as software"
- **Body:** Not another reporting tool. A verification platform that builds the architecture the Proclamation Trap evades."
- **5 Module Cards:** Accountability, Execution, Initiative, Outcome, Meaning

#### S4 — The CEI Dashboard
- **Headline:** "Your Composite Effectiveness Index — in real time"
- **Body:** CEI = [β·WDC + (1-β)·SAI] × L^γ. One score that tells you whether your institution produces verified betterment — or just reports activity.
- **Visual:** Live CEI dashboard mockup
- **CTA:** [Try the CEI Calculator]

#### S5 — For Your User Type
- **Headline:** "Built for your role"
- **6 cards:** Corporate CSR · Implementing Agency · Foundation · Government · NGO · Auditor
- Each card links to a user-type-specific page
- **CTA:** [See How It Works For You]

#### S6 — How It Works (3 Steps)
- **Step 1:** Assess — Complete the Five Pillars diagnostic
- **Step 2:** Verify — Upload evidence, track outcomes, build your Trust Layer
- **Step 3:** Demonstrate — Generate reports that meet the Skeptical Observer Standard
- **Visual:** Process flow diagram

#### S7 — Social Proof / Authority
- **Headline:** "Grounded in a validated framework"
- **Stats:** 10 countries analyzed · 40+ original concepts · Empirically validated · 270-page reference work
- **CTA:** [Read the Research]

#### S8 — Pricing
- **Headline:** "Pricing that scales with your verification needs"
- **4 tiers:** Starter (Free) · Professional ($499) · Enterprise ($2,499) · Institutional (Custom)
- **CTA:** [See Full Pricing]

#### S9 — Final CTA
- **Headline:** "Begin your Legitimacy Migration today"
- **CTAs:** [Start Free Assessment] [Talk to Sales]

---

### PAGE: PRODUCT (`/product`)

**Purpose:** Deep dive into the platform.

**Sections:**
1. Platform overview
2. The 5 modules (detailed)
3. The CEI dashboard
4. Benchmarking & analytics
5. Report generation
6. API & integrations
7. Security & compliance

---

### PAGE: MODULES (`/modules`)

**Purpose:** One page per pillar module — deep feature exploration.

#### `/modules/accountability` — Module A
**Features:**
- Outcome commitment tracker
- Accountability owner assignment
- Board review scheduler
- Accountability gap analysis
- Audit trail generation
- **Screenshot mockups:** Dashboard view, commitment form, audit log

#### `/modules/execution` — Module E
**Features:**
- Implementing agency registry
- Agency capability assessment
- Execution status tracker
- Implementing Agency Variable analytics
- Policy-Practice Chasm alerts
- **Screenshot mockups:** Agency dashboard, execution timeline, capability matrix

#### `/modules/initiative` — Module I
**Features:**
- Participatory engagement tracker
- Initiative origin logger (participatory vs. imposed)
- Community endorsement recording
- Imposed Imperative risk flags
- Stakeholder identification workflow
- **Screenshot mockups:** Initiative profile, participatory log, risk dashboard

#### `/modules/outcome` — Module O (Core Module)
**Features:**
- Activity → Output → Outcome → Betterment chain builder
- Betterment Evidence upload & verification
- Outcome Verifiability scoring
- Output Illusion detection
- Betterment Index calculation
- Skeptical Observer Standard compliance check
- **Screenshot mockups:** Outcome chain, evidence library, verification dashboard

#### `/modules/meaning` — Module M
**Features:**
- Stakeholder-specific report generator
- Communication Usability testing (legibility, verifiability, actionability)
- Meaning Correspondence tracker
- Transparency Trap detection
- Plain-language community summaries
- **Screenshot mockups:** Report builder, usability test, correspondence dashboard

---

### PAGE: USERS (`/users`)

**Purpose:** User-type-specific landing pages for targeted conversion.

#### `/users/corporate`
- **Headline:** "For Corporate CSR Teams"
- **Pain points:** Board pressure for evidence · ESG rating anxiety · Regulatory reporting burden
- **Solution:** Track outcomes, not activities. Generate board-ready evidence reports.
- **Use case:** A multinational tracking 200+ CSR initiatives across 15 countries
- **CTA:** [Start Corporate Trial]

#### `/users/implementing-agency`
- **Headline:** "For Implementing Agencies"
- **Pain points:** Funders demand proof · Execution data scattered · Outcome attribution unclear
- **Solution:** Log execution data, report verified outcomes, demonstrate your capability.
- **Use case:** An NGO implementing 50+ projects for 10 different funders
- **CTA:** [Join as Implementing Agency]

#### `/users/foundation`
- **Headline:** "For Foundations"
- **Pain points:** Grant portfolio impact unclear · Grantee reporting inconsistent · Betterment verification impossible
- **Solution:** Assess grantees on the Five Pillars. Track portfolio-level betterment.
- **Use case:** A foundation managing $500M in grants across 200 grantees
- **CTA:** [Assess Your Portfolio]

#### `/users/government`
- **Headline:** "For Government Departments"
- **Pain points:** Public spending accountability · Parliamentary scrutiny · Program evaluation
- **Solution:** Verify that public programs produce betterment. Report to parliament with evidence.
- **Use case:** A welfare authority managing 30+ social programs
- **CTA:** [Request Government Demo]

#### `/users/ngo`
- **Headline:** "For NGOs"
- **Pain points:** Funder reporting burden · Community accountability · Impact demonstration
- **Solution:** Demonstrate betterment to funders. Account to communities. Reduce reporting burden.
- **Use case:** A community development NGO with 100+ active projects
- **CTA:** [Start NGO Trial]

#### `/users/auditor`
- **Headline:** "For Auditors & Verifiers"
- **Pain points:** No standard for betterment verification · Client reporting inconsistency
- **Solution:** Use the Five Pillars standard. Conduct third-party verification. Issue certifications.
- **Use case:** An audit firm offering betterment verification services
- **CTA:** [Become a Verified Auditor]

---

### PAGE: PRICING (`/pricing`)

**4 tiers with feature comparison table:**

| Feature | Starter | Professional | Enterprise | Institutional |
|---------|---------|-------------|------------|---------------|
| Users | 1 | 5 | 25 | Unlimited |
| Self-assessment | ✅ | ✅ | ✅ | ✅ |
| CEI Calculator | ✅ | ✅ | ✅ | ✅ |
| All 5 modules | — | ✅ | ✅ | ✅ |
| Implementing agencies | — | 1 | 10 | Unlimited |
| Quarterly assessments | — | ✅ | ✅ | ✅ |
| Report generation | — | ✅ | ✅ | ✅ |
| Benchmarking | — | — | ✅ | ✅ |
| API access | — | — | ✅ | ✅ |
| Custom integrations | — | — | — | ✅ |
| White-label | — | — | — | ✅ |
| Dedicated support | — | — | ✅ | ✅ |
| Certification eligibility | — | ✅ | ✅ | ✅ |
| **Price/mo** | **Free** | **$499** | **$2,499** | **Custom** |

---

### PAGE: CEI (`/cei`)

**Purpose:** Explain the CEI and offer a live calculator.

**Sections:**
1. What is the CEI?
2. The formula (KaTeX rendered): CEI = [β·WDC + (1-β)·SAI] × L^γ
3. What each component measures
4. Interactive CEI Calculator (client-side, sliders)
5. Interpretation of results
6. "Track your CEI over time" → signup CTA

---

### PAGE: DEMO (`/demo`)

**Purpose:** Interactive client-side demo (no signup required).

**Features:**
- Mock institution profile
- Sample assessment (5 questions per pillar)
- Generate sample CEI score
- View sample dashboard
- View sample report
- **CTA:** "This is what your institution looks like. [Sign up to assess your own.]"

---

### PAGE: RESOURCES (`/resources`)

**Sub-pages:**
- `/resources/framework` — The framework explained
- `/resources/book` — The 270-page definitive work
- `/resources/glossary` — 40+ canonical terms
- `/resources/research` — Empirical validation
- `/resources/api-docs` — API documentation (for Enterprise tier)

---

### PAGE: ABOUT (`/about`)

- `/about/institute` — The Five Pillars Framework Institute
- `/about/hashmi` — Dr. Sayed Amir Mustafa Hashmi
- `/about/security` — Security, privacy, compliance

---

### PAGE: CONTACT (`/contact`)

- Sales inquiries
- Demo requests
- Partnership inquiries
- Media/press

---

## 6. SaaS APP — KEY SCREENS (For Phase 2)

### Dashboard (`/dashboard`)
- CEI score (large, prominent)
- Pillar Coherence visualization (5 pillars, green/gray/red)
- Position on Proclamation-Proof Gradient
- Recent activity feed
- Upcoming accountability reviews
- Alerts (Pillar Deficiencies, Output Illusion risks)

### Module Views
Each module has:
- Overview dashboard
- Data entry forms
- Evidence library
- Analytics & trends
- Report generation

### Reports (`/reports`)
- Board report (executive summary, CEI, pillar status)
- Regulator report (compliance + verification evidence)
- Community report (plain-language, Communication Usability optimized)
- Investor report (ESG-aligned, CEI-focused)
- Funder report (outcome verification, Betterment Evidence)

### Benchmarking (`/benchmarking`)
- Your CEI vs. sector average
- Your CEI vs. peer institutions (anonymized)
- Pillar-by-pillar comparison
- Trend over time

---

## 7. AI INTEGRATION

### AI-Powered Features
1. **Recommendation Engine:** "Based on your Pillar Deficiency in Outcome, here are 3 actions to improve Betterment Evidence collection."
2. **Report Generator:** AI-assisted draft reports (human-reviewed before finalization)
3. **Evidence Analyzer:** AI reviews uploaded evidence and flags whether it meets the Skeptical Observer Standard
4. **Framework Concierge:** Chatbot for platform navigation and framework questions
5. **Predictive CEI:** "At your current rate of improvement, you'll reach position 4 on the Gradient in 8 months."

### Implementation
- z-ai-web-dev-sdk (LLM)
- RAG index built from framework content + user's own data
- All AI outputs marked as "AI-assisted" and require human review

---

## 8. DESIGN SYSTEM — SaaS

### Color Palette

| Token | Light | Dark | Usage |
|-------|-------|------|-------|
| `--background` | `#FFFFFF` | `#0A0A0A` | App background |
| `--foreground` | `#0A0A0A` | `#FAFAFA` | Primary text |
| `--muted` | `#F5F5F5` | `#171717` | Section backgrounds |
| `--card` | `#FFFFFF` | `#141414` | Cards |
| `--border` | `#E5E5E5` | `#262626` | Borders |
| `--primary` | `#0A0A0A` | `#FAFAFA` | Primary buttons |
| `--success` | `#16A34A` | `#22C55E` | Good CEI, verified outcomes |
| `--warning` | `#EAB308` | `#FACC15` | Pillar Deficiency, risk |
| `--danger` | `#DC2626` | `#EF4444` | Critical alerts |
| `--pillar-a` | `#171717` | `#E5E5E5` | Accountability |
| `--pillar-e` | `#404040` | `#A3A3A3` | Execution |
| `--pillar-i` | `#525252` | `#737373` | Initiative |
| `--pillar-o` | `#737373` | `#525252` | Outcome |
| `--pillar-m` | `#A3A3A3` | `#404040` | Meaning |

### Typography
- **Headings:** Inter (clean, modern SaaS feel — not academic)
- **Body:** Inter
- **Data/Numbers:** Tabular nums (monospaced for dashboards)
- **Math:** KaTeX

### Design Principles
- **Clean SaaS aesthetic** — like Linear, Notion, Vercel
- **Dashboard-first** — data density with clarity
- **Minimal chrome** — focus on content and data
- **Subtle motion** — Framer Motion for transitions, not decoration
- **Responsive** — desktop-first (SaaS users are on desktops), mobile-responsive

---

## 9. FILE STRUCTURE

```
csrfivepillarsframework/
├── public/
│   ├── figures/                    # 55 framework figures
│   ├── screenshots/                # SaaS dashboard mockups
│   └── og-image.png
│
├── src/
│   ├── app/
│   │   ├── (marketing)/            # Marketing site route group
│   │   │   ├── page.tsx            # Home
│   │   │   ├── product/page.tsx
│   │   │   ├── modules/
│   │   │   │   ├── page.tsx
│   │   │   │   ├── accountability/page.tsx
│   │   │   │   ├── execution/page.tsx
│   │   │   │   ├── initiative/page.tsx
│   │   │   │   ├── outcome/page.tsx
│   │   │   │   └── meaning/page.tsx
│   │   │   ├── pricing/page.tsx
│   │   │   ├── users/
│   │   │   │   ├── corporate/page.tsx
│   │   │   │   ├── implementing-agency/page.tsx
│   │   │   │   ├── foundation/page.tsx
│   │   │   │   ├── government/page.tsx
│   │   │   │   ├── ngo/page.tsx
│   │   │   │   └── auditor/page.tsx
│   │   │   ├── cei/page.tsx
│   │   │   ├── demo/page.tsx
│   │   │   ├── resources/
│   │   │   │   ├── page.tsx
│   │   │   │   ├── framework/page.tsx
│   │   │   │   ├── book/page.tsx
│   │   │   │   ├── glossary/page.tsx
│   │   │   │   └── research/page.tsx
│   │   │   ├── about/
│   │   │   │   ├── page.tsx
│   │   │   │   ├── institute/page.tsx
│   │   │   │   ├── hashmi/page.tsx
│   │   │   │   └── security/page.tsx
│   │   │   └── contact/page.tsx
│   │   │
│   │   ├── (app)/                  # SaaS app route group (Phase 2)
│   │   │   ├── dashboard/page.tsx
│   │   │   ├── accountability/page.tsx
│   │   │   ├── execution/page.tsx
│   │   │   ├── initiative/page.tsx
│   │   │   ├── outcome/page.tsx
│   │   │   ├── meaning/page.tsx
│   │   │   ├── cei/page.tsx
│   │   │   ├── reports/page.tsx
│   │   │   ├── benchmarking/page.tsx
│   │   │   ├── team/page.tsx
│   │   │   └── settings/page.tsx
│   │   │
│   │   └── api/
│   │       ├── chat/route.ts       # AI assistant
│   │       ├── contact/route.ts    # Form submissions
│   │       └── cei/route.ts        # CEI calculation (server-side)
│   │
│   ├── components/
│   │   ├── ui/                     # shadcn/ui
│   │   ├── marketing/
│   │   │   ├── Header.tsx          # Marketing nav
│   │   │   ├── Footer.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── ProblemSection.tsx
│   │   │   ├── SolutionSection.tsx
│   │   │   ├── ModuleCards.tsx
│   │   │   ├── CEIDashboard.tsx    # Mockup component
│   │   │   ├── UserTypeCards.tsx
│   │   │   ├── HowItWorks.tsx
│   │   │   ├── PricingTable.tsx
│   │   │   └── FinalCTA.tsx
│   │   ├── app/                    # SaaS app components (Phase 2)
│   │   │   ├── AppSidebar.tsx
│   │   │   ├── CEIGauge.tsx
│   │   │   ├── PillarStatus.tsx
│   │   │   ├── EvidenceUploader.tsx
│   │   │   ├── OutcomeChain.tsx
│   │   │   └── ReportBuilder.tsx
│   │   ├── tools/
│   │   │   ├── CEICalculator.tsx   # Client-side calculator
│   │   │   └── SelfAssessment.tsx  # Client-side demo assessment
│   │   └── chat/
│   │       └── ChatWidget.tsx
│   │
│   ├── lib/
│   │   ├── content/
│   │   │   ├── modules.ts          # Module definitions
│   │   │   ├── userTypes.ts        # User type content
│   │   │   ├── pricing.ts          # Tier definitions
│   │   │   └── glossary.ts
│   │   ├── ai/
│   │   │   └── chat-service.ts
│   │   └── utils/
│   │       ├── cei.ts              # CEI calculation
│   │       └── assessment.ts       # Assessment scoring
│   │
│   └── styles/
│       └── globals.css
│
├── .github/workflows/deploy.yml
├── next.config.ts
├── tailwind.config.ts
└── package.json
```

---

## 10. BUILD PHASES

### Phase 1: Marketing Site MVP (Static — GitHub Pages)
**Goal:** Lead generation. Demo tools. No backend.

| Task | Hours |
|------|-------|
| Setup + design system | 4 |
| Marketing layout (Header, Footer) | 3 |
| Home page (9 sections) | 8 |
| Product page | 3 |
| 5 Module pages | 5 |
| 6 User type pages | 5 |
| Pricing page | 2 |
| CEI page + calculator | 3 |
| Demo page (client-side assessment) | 4 |
| Resources pages (framework, book, glossary) | 3 |
| About + Contact | 3 |
| AI chat widget | 3 |
| Responsive + polish | 4 |
| Build + deploy | 2 |
| **Phase 1 Total** | **52 hours** |

### Phase 2: SaaS App (Dynamic — Vercel/Netlify)
**Goal:** Functional product with database, auth, payments.

| Task | Hours |
|------|-------|
| Database schema (Prisma) | 4 |
| Authentication (NextAuth) | 3 |
| Stripe integration | 3 |
| Dashboard | 6 |
| Module A (Accountability) | 6 |
| Module E (Execution) | 6 |
| Module I (Initiative) | 6 |
| Module O (Outcome) — core | 8 |
| Module M (Meaning) | 6 |
| CEI dashboard + history | 5 |
| Report generation | 5 |
| Benchmarking | 4 |
| Team management | 3 |
| AI features (recommendations, evidence analyzer) | 6 |
| API (for Enterprise tier) | 4 |
| Testing + polish | 6 |
| **Phase 2 Total** | **85 hours** |

### Phase 3: Enterprise Features
**Goal:** White-label, custom integrations, certification workflow.

| Task | Hours |
|------|-------|
| White-label theming | 6 |
| Custom integrations (SSO, ERP) | 8 |
| Certification workflow | 6 |
| Advanced analytics | 5 |
| Audit trail enhancement | 4 |
| **Phase 3 Total** | **29 hours** |

### Grand Total: ~166 hours

---

## 11. SUBSCRIPTION & REVENUE MODEL

### Monthly Recurring Revenue (MRR) Projection

| Tier | Price/mo | Target Customers (Year 1) | MRR |
|------|----------|--------------------------|-----|
| Starter (Free) | $0 | 1,000 | $0 |
| Professional | $499 | 100 | $49,900 |
| Enterprise | $2,499 | 20 | $49,980 |
| Institutional | ~$10,000 | 5 | $50,000 |
| **Total Year 1 MRR** | | | **~$149,880** |

### Additional Revenue
- Certification fees: $5,000-$25,000 per certification
- Custom consulting: $500/hr
- Executive education: $15,000 per cohort
- API usage (Enterprise): usage-based

---

## 12. KEY DIFFERENTIATORS

### Why This SaaS Wins

| Differentiator | Competitors | Five Pillars Platform |
|----------------|------------|----------------------|
| **Focus** | Reporting (GRI, ESG tools) | Verification (Betterment Evidence) |
| **Question answered** | "What did you do?" | "What changed?" |
| **Standard** | Compliance | Skeptical Observer Standard |
| **Architecture** | Activity tracking | Five Pillars Coherence |
| **Score** | ESG ratings (opaque) | CEI (transparent, formula-based) |
| **Positioning** | Replaces nothing | Meta-framework (necessary but insufficient) |
| **AI** | Reporting automation | Verification recommendations |

---

## SUMMARY

| Aspect | Specification |
|--------|---------------|
| **Product** | SaaS platform operationalizing the Five Pillars Framework |
| **Users** | 8 user types (Corporate, Agency, Foundation, Government, NGO, Auditor, Board, Academic) |
| **Modules** | 5 (one per pillar) + CEI Dashboard |
| **Pricing** | 4 tiers: Free → $499 → $2,499 → Custom |
| **Marketing site** | Static, GitHub Pages |
| **SaaS app** | Dynamic, Vercel/Netlify (Phase 2) |
| **AI** | Recommendations, report generation, evidence analysis, concierge |
| **Revenue (Year 1)** | ~$150K MRR + certification + consulting |
| **Total build time** | ~166 hours (all 3 phases) |

---

*This SaaS outline is ready for your review. Upon approval, I will begin building Phase 1 (marketing site MVP) immediately.*
