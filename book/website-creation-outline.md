# THE FIVE PILLARS FRAMEWORK — CORPORATE WEBSITE OUTLINE

## Corporate Positioning
**The Five Pillars Framework** is presented as an institutional methodology — a professional framework organization that provides assessment, advisory, training, and certification services to corporations, governments, NGOs, foundations, and development institutions.

**Not a book site. A corporate site for a framework institution.**

**Deployment Target:** `amirhashmilive.github.io/csrfivepillarsframework`

---

## 1. CORPORATE POSITIONING & BRAND

### Brand Identity
- **Entity:** The Five Pillars Framework Institute (or simply "The Five Pillars Framework")
- **Positioning:** The world's first meta-framework for institutional legitimacy and the Betterment of Society
- **Value Proposition:** "We help institutions answer the one question that matters: Can you demonstrate — with evidence that would convince a skeptical observer — that society is measurably better because of your presence?"
- **Tone:** Authoritative, institutional, consulting-grade — like McKinsey, BCG, or a Big Four advisory

### What This Is NOT
- ❌ Not a book landing page
- ❌ Not an author portfolio
- ❌ Not an academic project site
- ❌ Not a blog

### What This IS
- ✅ A corporate website for a framework institution
- ✅ A professional services firm presenting proprietary methodology
- ✅ A lead-generation platform for assessment and advisory services
- ✅ A thought-leadership hub for institutional legitimacy
- ✅ A resource center where the book is one product among several

---

## 2. TECHNOLOGY STACK

| Component | Technology | Rationale |
|-----------|------------|-----------|
| **Framework** | Next.js 16 (App Router) | Static export to GitHub Pages; already in environment |
| **Language** | TypeScript 5 | Corporate-grade type safety |
| **Styling** | Tailwind CSS 4 + shadcn/ui | Professional design system |
| **Animations** | Framer Motion | Subtle, corporate-appropriate motion |
| **Icons** | Lucide React | Clean, professional |
| **Fonts** | Playfair Display (headings) + Inter (body) | Institutional, not academic |
| **Forms** | React Hook Form + Zod | Contact forms, inquiry forms, assessment intake |
| **Analytics** | Vercel Analytics or Plausible | Privacy-friendly, no backend |
| **State** | Zustand | Assessment tool state |

### No Backend Required
- 100% static site
- Forms submit to a third-party service (Formspree, Netlify Forms, or GitHub Issues API)
- AI assistant via serverless API routes (z-ai-web-dev-sdk)

---

## 3. SITE ARCHITECTURE — CORPORATE PAGES

### Primary Navigation (Top Bar)

```
THE FIVE PILLARS FRAMEWORK
├── Home
├── The Framework
│   ├── Overview
│   ├── The Five Pillars
│   ├── The Trust Layer
│   └── The CEI
├── Services
│   ├── Institutional Assessment
│   ├── Advisory & Consulting
│   ├── Executive Education
│   └── Certification
├── Insights
│   ├── Articles
│   ├── Research
│   └── Case Studies
├── About
│   ├── The Institute
│   ├── Dr. Hashmi
│   └── Leadership
├── Resources
│   ├── The Book
│   ├── Framework Tools
│   ├── Glossary
│   └── Downloads
└── Contact
```

### Footer Navigation

```
SERVICES          INSIGHTS          RESOURCES         LEGAL
- Assessment      - Articles        - The Book        - Privacy
- Advisory        - Research        - Tools           - Terms
- Education       - Case Studies    - Glossary        - Cookies
- Certification   - Newsletter      - Downloads

CONNECT
- LinkedIn
- Email Newsletter
- Contact Form
```

---

## 4. PAGE-BY-PAGE SPECIFICATIONS

### PAGE 1: HOME (`/`)

**Purpose:** Corporate hero. Establish authority. Drive to services or contact.

**Sections (vertical scroll, not slides):**

#### Section 1 — Hero
- **Headline:** "Can your institution demonstrate its Betterment of Society?"
- **Subheadline:** "The Five Pillars Framework is the world's first meta-framework for institutional legitimacy — helping organizations move from proclaimed impact to verified betterment."
- **CTAs:** [Assess Your Institution] [Explore the Framework]
- **Visual:** Subtle animated pillar diagram (grayscale, corporate)

#### Section 2 — The Problem
- **Headline:** "The Proclamation Trap"
- **Body:** Institutions report more than ever. Evidence of actual betterment is scarce. Reporting has increased. Confidence has declined.
- **Visual:** Proclamation-Proof Gradient figure (FPF-001)
- **CTA:** [Understand the Diagnosis]

#### Section 3 — The Solution
- **Headline:** "A Meta-Framework, Not a Replacement"
- **Body:** Existing frameworks — Carroll's Pyramid, GRI, ESG, BRSR — answer legitimate questions. We ask a different one: Can you demonstrate Betterment of Society?
- **Visual:** Comparative Matrix (FPF-comparative-matrix)
- **CTA:** [See the Comparative Analysis]

#### Section 4 — The Five Pillars
- **Headline:** "The Architecture of Legitimacy"
- **Body:** Five conditions, each presupposing the previous. Accountability. Execution. Initiative. Outcome. Meaning.
- **Visual:** Interactive pillar diagram (click to expand each)
- **CTA:** [Explore the Framework]

#### Section 5 — Services Overview
- **Headline:** "How We Work With Institutions"
- **Cards (4):**
  - Institutional Assessment — "Diagnose your Pillar Coherence"
  - Advisory & Consulting — "Build the Trust Layer"
  - Executive Education — "Train your leadership"
  - Certification — "Verify your Betterment Evidence"
- **CTA:** [Explore Services]

#### Section 6 — Authority / Social Proof
- **Headline:** "Grounded in Research. Validated Empirically."
- **Body:** Developed through years of field observation. Validated through a multi-year empirical investigation. Applicable across CSR, ESG, government, NGOs, healthcare, education, and development.
- **Stats:** "10 Countries Analyzed" · "40+ Original Concepts" · "55 Framework Diagrams"
- **CTA:** [Read the Research]

#### Section 7 — The Book (as resource, not focus)
- **Headline:** "The Definitive Reference"
- **Body:** "The Five Pillars Framework: A Universal Framework for Communication Usability, Institutional Accountability, and the Betterment of Society" — the 270-page definitive work by Dr. Sayed Amir Mustafa Hashmi.
- **Visual:** Book cover mockup
- **CTA:** [Learn About the Book]

#### Section 8 — Call to Action
- **Headline:** "Begin Your Legitimacy Migration"
- **CTA:** [Request an Assessment] [Download the Framework Overview]

---

### PAGE 2: THE FRAMEWORK (`/framework`)

**Purpose:** Present the methodology — the intellectual product the institution owns.

#### Section 1 — Framework Overview
- What the framework is
- What it is not (a replacement for existing frameworks)
- The meta-framework positioning
- The Betterment Question

#### Section 2 — The Five Pillars
- Interactive pillar explorer
- Each pillar: definition, failure mode, verification demand
- A-E-I-O-M dependency chain

#### Section 3 — The Trust Layer
- Verification infrastructure
- Technology as enabling, not doctrinal
- Trust Layer Maturity stages

#### Section 4 — The Composite Effectiveness Index (CEI)
- CEI = [β·WDC + (1-β)·SAI] × L^γ
- What each component measures
- Interactive CEI preview tool
- Link to full calculator

#### Section 5 — The Compliance-Betterment Paradox
- Key intellectual contribution
- Tested across 10 countries
- Why compliance ≠ betterment

---

### PAGE 3: SERVICES (`/services`)

**Purpose:** Generate leads. Present professional offerings.

#### Service 1: Institutional Assessment (`/services/assessment`)
- **What:** Comprehensive diagnosis of your institution against the Five Pillars
- **Deliverable:** CEI score, Pillar Coherence analysis, Trust Layer Maturity assessment, prioritized improvement roadmap
- **Duration:** 4-6 weeks
- **Format:** On-site + remote
- **CTA:** [Request Assessment]

#### Service 2: Advisory & Consulting (`/services/advisory`)
- **What:** Ongoing partnership to build the Trust Layer and improve Pillar Coherence
- **Deliverable:** Governance redesign, execution architecture, verification infrastructure
- **Duration:** 6-12 months
- **Format:** Embedded advisors
- **CTA:** [Engage Advisors]

#### Service 3: Executive Education (`/services/education`)
- **What:** Board and executive team training on the framework
- **Deliverable:** Customized curriculum, certification for participants
- **Duration:** 2-5 day intensive
- **Format:** On-site workshop
- **CTA:** [Schedule Training]

#### Service 4: Certification (`/services/certification`)
- **What:** Independent verification that your institution meets the Five Pillars standard
- **Deliverable:** Five Pillars Certification (annual)
- **Prerequisite:** Completed Assessment
- **CTA:** [Apply for Certification]

---

### PAGE 4: INSIGHTS (`/insights`)

**Purpose:** Thought leadership hub. Establish ongoing authority.

#### Sub-pages:
- `/insights/articles` — Framework articles (derived from book chapters)
- `/insights/research` — Empirical validation, working papers
- `/insights/case-studies` — Composite institutional case studies (from the 6 archetypes)
- `/insights/newsletter` — Newsletter signup

#### Featured Article Topics:
- "The Proclamation Trap: Why Reporting Has Replaced Accountability"
- "The Compliance-Betterment Paradox: Evidence from 10 Countries"
- "Why the CEI Outperforms Traditional ESG Scores"
- "Building the Trust Layer: A Practical Guide"
- "The Meta-Framework Position: Necessary but Insufficient"

---

### PAGE 5: ABOUT (`/about`)

**Purpose:** Establish the institution behind the framework.

#### Sub-pages:
- `/about/institute` — The Five Pillars Framework Institute
- `/about/hashmi` — Dr. Sayed Amir Mustafa Hashmi (credentials, philosophy)
- `/about/leadership` — Leadership team (placeholder for future)

#### Institute Positioning:
"The Five Pillars Framework Institute is the institutional home of the Five Pillars Framework — the meta-framework for institutional legitimacy and the Betterment of Society. Founded by Dr. Sayed Amir Mustafa Hashmi, the Institute provides assessment, advisory, education, and certification services to institutions worldwide."

---

### PAGE 6: RESOURCES (`/resources`)

**Purpose:** Resource center. The book is here, as one resource among several.

#### Sub-pages:
- `/resources/book` — The book (overview, sample chapter, purchase link)
- `/resources/tools` — CEI Calculator, Pillar Assessment Tool
- `/resources/glossary` — Full glossary (40+ terms)
- `/resources/downloads` — Framework overview PDF, white papers, figure library

---

### PAGE 7: CONTACT (`/contact`)

**Purpose:** Lead capture.

#### Form Fields:
- Name
- Organization
- Role/Title
- Email
- Organization Type (Corporate, Government, NGO, Foundation, Healthcare, Education, Other)
- Interest (Assessment, Advisory, Education, Certification, Speaking, Other)
- Message
- [Submit]

#### Form Submission:
- Formspree or Netlify Forms (no backend)
- Auto-reply email
- Lead routed to institute email

---

## 5. DESIGN SYSTEM — CORPORATE

### Color Palette

#### Light Mode
| Token | Hex | Usage |
|-------|-----|-------|
| `--background` | `#FAFAFA` | Off-white (corporate, not stark) |
| `--foreground` | `#0A0A0A` | Near-black text |
| `--muted` | `#F0F0F0` | Section backgrounds |
| `--muted-foreground` | `#525252` | Secondary text |
| `--border` | `#E5E5E5` | Borders |
| `--card` | `#FFFFFF` | White cards (corporate clean) |
| `--accent` | `#1A1A1A` | Black accent (authoritative) |
| `--accent-foreground` | `#FFFFFF` | Accent text |
| `--pillar-a` | `#1A1A1A` | Accountability |
| `--pillar-e` | `#404040` | Execution |
| `--pillar-i` | `#666666` | Initiative |
| `--pillar-o` | `#8C8C8C` | Outcome |
| `--pillar-m` | `#B2B2B2` | Meaning |

#### Dark Mode
| Token | Hex | Usage |
|-------|-----|-------|
| `--background` | `#0A0A0A` | Deep corporate black |
| `--foreground` | `#FAFAFA` | Primary text |
| `--muted` | `#171717` | Section backgrounds |
| `--muted-foreground` | `#A3A3A3` | Secondary text |
| `--border` | `#262626` | Borders |
| `--card` | `#141414` | Card backgrounds |
| `--accent` | `#FAFAFA` | White accent |
| `--accent-foreground` | `#0A0A0A` | Accent text |

### Typography

| Element | Font | Size (desktop) | Weight |
|---------|------|----------------|--------|
| H1 (hero) | Playfair Display | 4rem | 700 |
| H2 (section) | Playfair Display | 2.5rem | 600 |
| H3 (card) | Inter | 1.5rem | 600 |
| Body | Inter | 1rem | 400 |
| Lead | Inter | 1.25rem | 400 |
| Caption | Inter | 0.875rem | 400 |
| Pillar letter | Playfair Display | 5rem | 700 |

### Design Principles
- **Corporate restraint** — no excessive animation, no playful elements
- **White space as luxury** — generous padding, breathing room
- **Grayscale authority** — the book is B&W; the brand is grayscale
- **Glassmorphism on cards** — subtle, professional (blur 12px, not 20px)
- **No stock photos** — use framework diagrams and typographic design
- **Typography-driven** — let the words carry the weight

### Component Specifications

#### Corporate Card
```css
.corporate-card {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 2rem;
  transition: border-color 0.2s, transform 0.2s;
}
.corporate-card:hover {
  border-color: var(--accent);
  transform: translateY(-2px);
}
```

#### CTA Button
```css
.btn-primary {
  background: var(--accent);
  color: var(--accent-foreground);
  padding: 0.875rem 2rem;
  border-radius: 8px;
  font-weight: 500;
  transition: opacity 0.2s;
}
.btn-primary:hover { opacity: 0.9; }
```

---

## 6. FILE STRUCTURE

```
csrfivepillarsframework/
├── public/
│   ├── figures/                    # 55 framework figures
│   ├── book-cover.png
│   ├── og-image.png
│   └── favicon.ico
│
├── src/
│   ├── app/
│   │   ├── layout.tsx              # Root layout (Header + Footer)
│   │   ├── page.tsx                # Home
│   │   ├── framework/
│   │   │   ├── page.tsx            # Framework overview
│   │   │   ├── pillars/page.tsx    # Interactive pillars
│   │   │   ├── trust-layer/page.tsx
│   │   │   └── cei/page.tsx        # CEI explainer
│   │   ├── services/
│   │   │   ├── page.tsx            # Services overview
│   │   │   ├── assessment/page.tsx
│   │   │   ├── advisory/page.tsx
│   │   │   ├── education/page.tsx
│   │   │   └── certification/page.tsx
│   │   ├── insights/
│   │   │   ├── page.tsx            # Insights hub
│   │   │   ├── articles/page.tsx
│   │   │   ├── research/page.tsx
│   │   │   ├── case-studies/page.tsx
│   │   │   └── newsletter/page.tsx
│   │   ├── about/
│   │   │   ├── page.tsx            # About overview
│   │   │   ├── institute/page.tsx
│   │   │   ├── hashmi/page.tsx
│   │   │   └── leadership/page.tsx
│   │   ├── resources/
│   │   │   ├── page.tsx
│   │   │   ├── book/page.tsx
│   │   │   ├── tools/page.tsx      # CEI Calculator + Assessment
│   │   │   ├── glossary/page.tsx
│   │   │   └── downloads/page.tsx
│   │   ├── contact/
│   │   │   └── page.tsx
│   │   └── api/
│   │       ├── chat/route.ts       # AI assistant
│   │       └── contact/route.ts    # Form submission
│   │
│   ├── components/
│   │   ├── ui/                     # shadcn/ui
│   │   ├── layout/
│   │   │   ├── Header.tsx          # Sticky corporate nav
│   │   │   ├── Footer.tsx          # Corporate footer
│   │   │   └── CTASection.tsx      # Reusable CTA block
│   │   ├── home/
│   │   │   ├── Hero.tsx
│   │   │   ├── ProblemSection.tsx
│   │   │   ├── SolutionSection.tsx
│   │   │   ├── PillarsSection.tsx
│   │   │   ├── ServicesSection.tsx
│   │   │   ├── AuthoritySection.tsx
│   │   │   ├── BookSection.tsx
│   │   │   └── FinalCTA.tsx
│   │   ├── framework/
│   │   │   ├── PillarExplorer.tsx
│   │   │   ├── PillarCard.tsx
│   │   │   ├── TrustLayerDiagram.tsx
│   │   │   └── CEIFormula.tsx
│   │   ├── services/
│   │   │   ├── ServiceCard.tsx
│   │   │   ├── ProcessTimeline.tsx
│   │   │   └── DeliverableList.tsx
│   │   ├── tools/
│   │   │   ├── CEICalculator.tsx
│   │   │   └── PillarAssessment.tsx
│   │   ├── chat/
│   │   │   └── ChatWidget.tsx      # Floating AI assistant
│   │   └── forms/
│   │       ├── ContactForm.tsx
│   │       └── InquiryForm.tsx
│   │
│   ├── lib/
│   │   ├── content/
│   │   │   ├── articles.ts         # Insight articles
│   │   │   ├── services.ts         # Service descriptions
│   │   │   └── glossary.ts
│   │   ├── ai/
│   │   │   └── chat-service.ts     # z-ai-web-dev-sdk
│   │   └── utils/
│   │       ├── cei.ts
│   │       └── forms.ts            # Form submission handler
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

## 7. AI ASSISTANT INTEGRATION

### Purpose
A floating AI assistant that answers questions about the framework — positioned as a "Framework Concierge" for prospective clients.

### Implementation
- **RAG index** built from framework content (not the full book — selected sections)
- **z-ai-web-dev-sdk** for LLM
- **Floating widget** on every page (bottom-right)
- **Suggested questions:**
  - "Is my organization ready for assessment?"
  - "How does the CEI work?"
  - "What's the difference between the Five Pillars and ESG?"
  - "How long does certification take?"

### System Prompt
```
You are the AI assistant for The Five Pillars Framework Institute. 
You help prospective clients understand the framework and determine 
which service (Assessment, Advisory, Education, Certification) is 
right for them. Always use canonical terminology. Reference the 
framework's concepts. Direct serious inquiries to the Contact page.
```

---

## 8. INTERACTIVE TOOLS

### A. CEI Calculator (`/resources/tools`)

**Positioning:** A self-service preview tool — not the full institutional assessment.

**Features:**
- Input sliders for WDC, SAI, L, β, γ
- Real-time CEI calculation
- Interpretation of result
- "Request Full Assessment" CTA

### B. Pillar Self-Assessment (`/resources/tools`)

**Positioning:** A lightweight self-diagnosis — leads to the professional service.

**Features:**
- 15 questions (3 per pillar)
- Instant results: Pillar Coherence score
- Identification of deficient pillars
- "Request Professional Assessment" CTA
- Email results to user

---

## 9. BUILD & DEPLOY

### Build Configuration
```typescript
// next.config.ts
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,
  basePath: '/csrfivepillarsframework',
  assetPrefix: '/csrfivepillarsframework/',
};
```

### GitHub Actions Workflow
```yaml
name: Deploy
on:
  push:
    branches: [main]
jobs:
  build-deploy:
    runs-on: ubuntu-latest
    permissions:
      pages: write
      id-token: write
    steps:
      - uses: actions/checkout@v4
      - uses: oven-sh/setup-bun@v1
      - run: bun install
      - run: bun run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: ./out
      - uses: actions/deploy-pages@v4
```

---

## 10. TIME ESTIMATE

| Phase | Task | Hours |
|-------|------|-------|
| **Phase 1** | Setup + design system | 4 |
| **Phase 2** | Layout (Header, Footer, CTA components) | 3 |
| **Phase 3** | Home page (8 sections) | 6 |
| **Phase 4** | Framework pages (4 sub-pages) | 5 |
| **Phase 5** | Services pages (5 sub-pages) | 4 |
| **Phase 6** | Insights + About + Resources pages | 5 |
| **Phase 7** | Contact + forms | 2 |
| **Phase 8** | Interactive tools (CEI, Assessment) | 4 |
| **Phase 9** | AI assistant | 3 |
| **Phase 10** | Responsive + polish | 4 |
| **Phase 11** | Build + deploy + test | 2 |
| **TOTAL** | | **42 hours** |

---

## KEY DIFFERENCE FROM BOOK SITE

| Aspect | Book Site (Rejected) | Corporate Site (This Outline) |
|--------|---------------------|-------------------------------|
| **Focus** | The book | The framework institution |
| **Primary CTA** | "Read the book" | "Request an Assessment" |
| **Structure** | Chapter-by-chapter reading | Services, Insights, About, Resources |
| **Tone** | Academic/literary | Corporate/consulting |
| **The book's role** | The main product | One resource among several |
| **User journey** | Read → learn | Discover → assess → engage → contact |
| **Revenue model** | Book sales | Assessment, advisory, education, certification |
| **Design** | Slide-based presentation | Corporate scrolling pages |

---

*This corporate website outline is ready for your review. Upon approval, I will begin building the site starting with the design system and home page.*
