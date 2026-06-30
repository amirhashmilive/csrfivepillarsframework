# CSR FIVE PILLARS FRAMEWORK — WEBSITE CREATION OUTLINE

## Deployment Target
🔗 **`amirhashmilive.github.io/csrfivepillarsframework`**

---

## 1. TECHNOLOGY STACK

### Core Framework
| Component | Technology | Rationale |
|-----------|------------|-----------|
| **Framework** | Next.js 16 (App Router) | Already available in environment; static export to GitHub Pages; React 19; TypeScript |
| **Language** | TypeScript 5 | Type safety; matches book's intellectual rigor |
| **Styling** | Tailwind CSS 4 + shadcn/ui | Consistent design system; glassmorphism support; dark mode |
| **Animations** | Framer Motion | Slide transitions; pillar interactions; scroll-triggered reveals |
| **Icons** | Lucide React | Clean, professional icon set |
| **Fonts** | Times New Roman (headings) + Inter (body) | Matches book typography; web-optimized |
| **Math Rendering** | KaTeX | CEI formula and mathematical notation |
| **Search** | Fuse.js (client-side) | No backend needed; instant search across all content |
| **State Management** | Zustand | CEI Calculator state; assessment tool state |

### No Backend Required
- 100% static site — all content embedded at build time
- AI integration via API routes (serverless functions deployed with the static export)
- All 55 figures served as static assets
- Client-side search index built at build time

---

## 2. FILE STRUCTURE

```
csrfivepillarsframework/
├── public/
│   ├── figures/                    # All 55 framework figures (PNG)
│   │   ├── fpf-001-gradient.png
│   │   ├── fpf-002-hierarchy.png
│   │   ├── ...
│   │   └── fpf-es-11.png
│   ├── manuscripts/
│   │   └── five-pillars-framework.pdf  # Downloadable manuscript
│   ├── favicon.ico
│   └── og-image.png                # Open Graph image
│
├── src/
│   ├── app/
│   │   ├── layout.tsx              # Root layout with theme provider
│   │   ├── page.tsx                # Homepage (slide-based landing)
│   │   ├── book/
│   │   │   ├── page.tsx            # Full book table of contents
│   │   │   ├── introduction/page.tsx
│   │   │   ├── prologue/page.tsx
│   │   │   ├── chapter-1/page.tsx   # The Proclamation Trap
│   │   │   ├── chapter-2/page.tsx   # The Legitimacy Gap
│   │   │   ├── chapter-3/page.tsx   # Comparative Review of CSR Frameworks
│   │   │   ├── chapter-4/page.tsx   # The Framework Architecture
│   │   │   ├── chapter-5/page.tsx   # The Five Pillars in Depth
│   │   │   ├── chapter-6/page.tsx   # The Trust Layer
│   │   │   ├── chapter-7/page.tsx   # The Institutional Operating System
│   │   │   ├── chapter-8/page.tsx   # Comparative International Analysis
│   │   │   ├── chapter-9/page.tsx   # The New Legitimacy
│   │   │   ├── chapter-10/page.tsx  # Empirical Validation
│   │   │   ├── chapter-11/page.tsx  # Mathematical Foundations
│   │   │   ├── epilogue/page.tsx
│   │   │   └── glossary/page.tsx
│   │   ├── pillars/
│   │   │   ├── page.tsx            # Interactive pillar explorer
│   │   │   ├── accountability/page.tsx
│   │   │   ├── execution/page.tsx
│   │   │   ├── initiative/page.tsx
│   │   │   ├── outcome/page.tsx
│   │   │   └── meaning/page.tsx
│   │   ├── tools/
│   │   │   ├── cei-calculator/page.tsx
│   │   │   ├── pillar-assessment/page.tsx
│   │   │   └── framework-explorer/page.tsx
│   │   ├── figures/
│   │   │   └── page.tsx            # Figure gallery (all 55)
│   │   ├── search/
│   │   │   └── page.tsx            # Search results
│   │   ├── ask/                     # AI chatbot
│   │   │   └── page.tsx
│   │   └── api/
│   │       ├── chat/route.ts       # AI chat endpoint (z-ai-web-dev-sdk)
│   │       └── search/route.ts     # Search index endpoint
│   │
│   ├── components/
│   │   ├── ui/                     # shadcn/ui components
│   │   ├── layout/
│   │   │   ├── Header.tsx          # Sticky nav with dark mode toggle
│   │   │   ├── Footer.tsx          # Sticky footer
│   │   │   ├── SlideContainer.tsx  # 100vh snap scroll wrapper
│   │   │   └── Navigation.tsx      # Side navigation dots
│   │   ├── slides/
│   │   │   ├── HeroSlide.tsx       # Landing hero with framework name
│   │   │   ├── PillarSlide.tsx     # Individual pillar slides
│   │   │   ├── FigureSlide.tsx     # Figure with caption
│   │   │   ├── ChapterSlide.tsx    # Chapter overview slide
│   │   │   └── CTASection.tsx      # Call-to-action slides
│   │   ├── pillars/
│   │   │   ├── PillarCard.tsx      # Glassmorphism pillar card
│   │   │   ├── PillarDiagram.tsx   # Interactive 5-pillar diagram
│   │   │   └── PillarDetail.tsx    # Expanded pillar view
│   │   ├── figures/
│   │   │   ├── FigureViewer.tsx    # Lightbox figure viewer
│   │   │   ├── FigureGrid.tsx      # Gallery grid
│   │   │   └── FigureCaption.tsx
│   │   ├── tools/
│   │   │   ├── CEICalculator.tsx    # Interactive CEI calculator
│   │   │   ├── PillarAssessment.tsx # Self-assessment tool
│   │   │   └── FrameworkExplorer.tsx
│   │   ├── chat/
│   │   │   ├── ChatWidget.tsx      # Floating AI chat button
│   │   │   └── ChatPanel.tsx       # Expandable chat interface
│   │   └── content/
│   │       ├── CognitiveRelief.tsx  # Key Insight, Stop & Think blocks
│   │       ├── ChapterMap.tsx      # Book journey progress
│   │       ├── ExecutiveSummary.tsx
│   │       ├── GlossaryTerm.tsx    # Hover-to-define terms
│   │       └── ReaderMomentum.tsx
│   │
│   ├── lib/
│   │   ├── content/
│   │   │   ├── chapters.ts         # Chapter metadata
│   │   │   ├── glossary.ts         # All terms with definitions
│   │   │   ├── pillars.ts          # Pillar definitions
│   │   │   └── figures.ts          # Figure registry
│   │   ├── ai/
│   │   │   ├── rag-index.ts        # RAG index builder
│   │   │   └── chat-service.ts     # LLM integration (z-ai-web-dev-sdk)
│   │   ├── search/
│   │   │   └── search-index.ts     # Fuse.js index
│   │   └── utils/
│   │       ├── cei.ts              # CEI calculation logic
│   │       └── theme.ts            # Theme management
│   │
│   ├── content/                    # Book content as structured data
│   │   ├── introduction.md
│   │   ├── prologue.md
│   │   ├── chapter-01.md
│   │   ├── chapter-02.md
│   │   ├── ...
│   │   ├── chapter-11.md
│   │   ├── epilogue.md
│   │   └── glossary.json
│   │
│   ├── hooks/
│   │   ├── useScrollSnap.ts        # Snap scroll behavior
│   │   ├── useActiveSlide.ts       # Track current slide
│   │   └── useTheme.ts             # Dark/light mode
│   │
│   └── styles/
│       └── globals.css             # Tailwind + custom glassmorphism
│
├── .github/
│   └── workflows/
│       └── deploy.yml              # GitHub Actions: build + deploy to Pages
│
├── next.config.ts                  # Static export config (output: 'export')
├── tailwind.config.ts
├── tsconfig.json
├── package.json
└── README.md
```

---

## 3. DESIGN SYSTEM

### Color Palette

#### Light Mode
| Token | Hex | Usage |
|-------|-----|-------|
| `--background` | `#FFFFFF` | Page background |
| `--foreground` | `#1A1A1A` | Primary text (matches book) |
| `--muted` | `#F5F5F5` | Muted backgrounds |
| `--muted-foreground` | `#666666` | Secondary text |
| `--border` | `#E0E0E0` | Borders, dividers |
| `--card` | `rgba(255, 255, 255, 0.7)` | Glassmorphism cards |
| `--card-border` | `rgba(255, 255, 255, 0.3)` | Glass card borders |
| `--pillar-a` | `#2C2C2C` | Accountability (darkest) |
| `--pillar-e` | `#4A4A4A` | Execution |
| `--pillar-i` | `#6B6B6B` | Initiative |
| `--pillar-o` | `#8C8C8C` | Outcome |
| `--pillar-m` | `#ADADAD` | Meaning (lightest) |
| `--accent` | `#1A1A1A` | Primary accent |
| `--accent-foreground` | `#FFFFFF` | Accent text |

#### Dark Mode
| Token | Hex | Usage |
|-------|-----|-------|
| `--background` | `#0F0F0F` | Deep black (not pure) |
| `--foreground` | `#F5F5F5` | Primary text |
| `--muted` | `#1A1A1A` | Muted backgrounds |
| `--muted-foreground` | `#A0A0A0` | Secondary text |
| `--border` | `#333333` | Borders |
| `--card` | `rgba(30, 30, 30, 0.6)` | Glassmorphism cards |
| `--card-border` | `rgba(255, 255, 255, 0.1)` | Glass card borders |
| `--pillar-a` | `#E0E0E0` | Accountability (lightest in dark) |
| `--pillar-e` | `#B8B8B8` | Execution |
| `--pillar-i` | `#909090` | Initiative |
| `--pillar-o` | `#686868` | Outcome |
| `--pillar-m` | `#404040` | Meaning |
| `--accent` | `#F5F5F5` | Primary accent |
| `--accent-foreground` | `#0F0F0F` | Accent text |

### Typography

| Element | Font | Size (desktop) | Size (mobile) | Weight |
|---------|------|----------------|---------------|--------|
| H1 (page titles) | Times New Roman | 3rem | 2rem | 700 |
| H2 (section titles) | Times New Roman | 2.25rem | 1.75rem | 700 |
| H3 (subsections) | Times New Roman | 1.75rem | 1.5rem | 600 |
| Body | Inter | 1rem | 0.95rem | 400 |
| Body (lead) | Inter | 1.125rem | 1.05rem | 400 |
| Caption | Inter | 0.875rem | 0.8rem | 400 |
| Code/Math | KaTeX | 1rem | 0.95rem | 400 |
| Pillar letter | Times New Roman | 6rem | 4rem | 700 |

### Glassmorphism Card Specification

```css
.glass-card {
  background: var(--card);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid var(--card-border);
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.glass-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 48px rgba(0, 0, 0, 0.15);
  border-color: rgba(255, 255, 255, 0.5);
}
```

### Spacing & Layout Rules

| Token | Value | Usage |
|-------|-------|-------|
| `--space-xs` | 0.5rem | Tight spacing |
| `--space-sm` | 1rem | Component padding |
| `--space-md` | 1.5rem | Section spacing |
| `--space-lg` | 2rem | Large section spacing |
| `--space-xl` | 4rem | Slide padding |
| `--space-2xl` | 6rem | Between slides |
| `--max-width` | 1200px | Content container |
| `--slide-height` | 100vh | Full viewport slides |

### Visual Grammar (consistent with book)
- **Processes** → arrows (→)
- **Relationships** → connected circles
- **Hierarchy** → stacked levels / pyramids
- **Comparison** → tables / side-by-side cards
- **Decision** → diamonds
- **Evidence** → boxes with borders

---

## 4. PAGE/SLIDE STRUCTURE

### Full Navigation Map

```
Homepage (Slide-based)
├── Slide 1: Hero — Framework name + tagline + CTA
├── Slide 2: The Betterment Question (interactive)
├── Slide 3: The Five Pillars (interactive diagram)
├── Slide 4: The Proclamation Trap (diagnosis)
├── Slide 5: The Legitimacy Gap (problem)
├── Slide 6: Meta-Framework Positioning
├── Slide 7: The Trust Layer
├── Slide 8: Interactive CEI Calculator preview
├── Slide 9: Book overview (4 Parts, 11 Chapters)
├── Slide 10: Author — Dr. Hashmi
└── Slide 11: Footer + links

Book (/book)
├── Introduction
├── Prologue
├── Part I: Diagnosis (Ch 1-3)
├── Part II: The Framework (Ch 4-6)
├── Part III: Application (Ch 7-9)
├── Part IV: Specialized (Ch 10-11)
├── Epilogue
└── Glossary

Pillars (/pillars) — Interactive Explorer
├── Overview (all 5 pillars)
├── A — Accountability
├── E — Execution
├── I — Initiative
├── O — Outcome
└── M — Meaning

Tools (/tools)
├── CEI Calculator
├── Pillar Assessment Tool
└── Framework Explorer

Figures (/figures) — Gallery of all 55

Search (/search)

Ask AI (/ask) — Chatbot
```

### 100vh Slide Implementation

```css
.slide-container {
  height: 100vh;
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
}

.slide {
  height: 100vh;
  scroll-snap-align: start;
  scroll-snap-stop: always;
  display: flex;
  align-items: center;
  justify-content: center;
}
```

### Homepage Slide Details

| Slide | Title | Content | Visual |
|-------|-------|---------|--------|
| 1 | Hero | "The Five Pillars Framework" + subtitle + "Explore the Framework" CTA | Animated pillar diagram |
| 2 | The Betterment Question | Interactive question with reveal animation | Typewriter effect |
| 3 | The Five Pillars | Click each pillar to expand | Interactive FPF-004 diagram |
| 4 | The Proclamation Trap | Key diagnosis + gradient figure | FPF-001 |
| 5 | The Legitimacy Gap | Problem statement | FPF hierarchy |
| 6 | Meta-Framework | "Necessary but insufficient" positioning | Comparative matrix |
| 7 | The Trust Layer | Verification infrastructure | Trust Layer diagram |
| 8 | CEI Calculator | Live preview of calculator | FPF-CEI |
| 9 | Book Overview | 4 Parts, 11 Chapters visualization | Chapter map |
| 10 | Author | Dr. Hashmi bio + credentials | Portrait placeholder |
| 11 | Footer | Links: Book, Pillars, Tools, Figures, Search, Ask AI | Navigation grid |

---

## 5. CONTENT INTEGRATION

### Book Content Organization

All 15 sections of the book are structured as individual pages with consistent layout:

```
Each Chapter Page Contains:
├── Chapter Map (FPF-CM-xx) at top — progress indicator
├── Chapter Title (H2)
├── Opening passage (scene/question/paradox)
├── Section-by-section content with:
│   ├── Prose paragraphs
│   ├── Figure placeholders (rendered as images with captions)
│   ├── Cognitive Relief elements (styled callout boxes):
│   │   ├── Key Insight (blue-tinted glass card)
│   │   ├── Stop & Think (amber-tinted interactive)
│   │   ├── One Sentence Summary (highlighted)
│   │   ├── Visual Recap (figure reference)
│   │   └── Mini Case (bordered card)
│   └── Comparison tables (styled glass tables)
├── Executive Summary Graphic (FPF-ES-xx)
├── The Takeaway (large quote)
└── Reader Momentum (link to next chapter)
```

### Figure Placement

| Figure Type | Placement | Count |
|-------------|-----------|-------|
| Chapter Maps | Top of each chapter page | 11 |
| Framework Diagrams | Inline within relevant sections | 10 |
| Process Flows | Inline within relevant sections | 12 |
| Concept Maps | Inline within relevant sections | 10 |
| Comparison Tables | Inline within relevant sections | 25 |
| Executive Summaries | End of each chapter | 10 |
| Mathematical Visualizations | Chapter 11 only | 8 |
| Research Visualizations | Chapter 10 only | 8 |
| **Total** | | **55** (some overlap in categories) |

### Content as Structured Data

```typescript
// src/lib/content/chapters.ts
export const chapters = [
  {
    id: 'chapter-1',
    number: 1,
    part: 'I',
    partName: 'Diagnosis',
    title: 'The Proclamation Trap',
    pages: 22,
    concepts: ['The Proclamation Trap', 'The Expenditure Fallacy', 
               'The Output Illusion', 'The Compliance Theater'],
    figures: ['FPF-CM-01', 'FPF-001', 'FPF-002', 'FPF-003', 'FPF-005'],
    takeaway: 'The Proclamation Trap is not solved by more reporting...',
    nextChapter: 'chapter-2',
  },
  // ... all 11 chapters
];
```

### Glossary Integration

- Hover-over tooltips on any doctrinal term (e.g., "Betterment of Society", "Proclamation Trap")
- Click to expand full definition
- Link to Glossary page for complete reference
- 40+ canonical terms indexed

---

## 6. AI INTEGRATION

### Approach: RAG with Book Content

**Why RAG over plain API:**
- The AI must answer questions *about the book's specific content*
- Responses must be grounded in the framework's terminology and definitions
- Prevents hallucination about framework concepts
- Enables citations ("As discussed in Chapter 5...")

### Implementation Overview

#### Step 1: Build RAG Index (at build time)

```typescript
// src/lib/ai/rag-index.ts
import { chapters } from '@/lib/content/chapters';
import { glossary } from '@/lib/content/glossary';

// Build searchable index from:
// - All chapter text (chunked by section)
// - All glossary terms
// - All figure captions
// - All Cognitive Relief elements

export const ragIndex = buildIndex([
  ...chapterChunks,
  ...glossaryEntries,
  ...figureCaptions,
  ...cognitiveReliefElements,
]);
```

#### Step 2: Chat API Route (serverless)

```typescript
// src/app/api/chat/route.ts
import { ZAI } from 'z-ai-web-dev-sdk';
import { ragIndex } from '@/lib/ai/rag-index';

export async function POST(req: Request) {
  const { message } = await req.json();
  
  // 1. Retrieve relevant chunks from RAG index
  const relevantChunks = retrieveRelevant(message, ragIndex, topK=5);
  
  // 2. Build system prompt with framework context
  const systemPrompt = `
    You are the AI assistant for The Five Pillars Framework by 
    Dr. Sayed Amir Mustafa Hashmi. Answer questions about the framework 
    using ONLY the provided context. Always use canonical terminology 
    ("Betterment of Society", not "societal betterment"). 
    Reference chapters when relevant.
    
    Context: ${relevantChunks.map(c => c.text).join('\n\n')}
  `;
  
  // 3. Call LLM via z-ai-web-dev-sdk
  const response = await ZAI.chat.completions.create({
    messages: [
      { role: 'system', content: systemPrompt },
      { role: 'user', content: message },
    ],
  });
  
  return Response.json({ reply: response.choices[0].message.content });
}
```

#### Step 3: Chat Widget (floating, on every page)

- Floating button (bottom-right) with "Ask about the Framework"
- Expands to chat panel
- Suggested questions: "What is the Proclamation Trap?", "How does the CEI work?", "Explain the Five Pillars"
- Responses include source references ("See Chapter 4: The Framework Architecture")

### AI Use Cases

| Use Case | Example Question | Response Source |
|----------|------------------|-----------------|
| Concept explanation | "What is Verification Debt?" | Glossary + Chapter 2 |
| Framework application | "How do the pillars apply to a healthcare organization?" | Chapter 5 + archetypes |
| CEI guidance | "How is the Legitimacy Factor calculated?" | Chapter 11 |
| Comparative analysis | "How does the framework compare to GRI?" | Chapter 3 |
| Criticism response | "Can small organizations use this framework?" | Chapter 9 (Anticipating Criticism) |

---

## 7. INTERACTIVE FEATURES

### A. CEI Calculator (`/tools/cei-calculator`)

**Purpose:** Let users calculate the Composite Effectiveness Index for their institution.

**Inputs:**
- WDC components (Execution score, Outcome score) — sliders 0-100
- SAI components (Initiative score, Meaning score) — sliders 0-100
- L (Legitimacy Factor / Trust Layer Maturity) — slider 0-1
- β (weighting parameter) — slider 0-1, default 0.5
- γ (legitimacy exponent) — slider 0.5-2, default 1.0

**Output:**
- CEI score (real-time calculation)
- Interpretation (which gradient position, what it means)
- Visual gauge showing position on Proclamation-Proof Gradient
- Recommendations for improvement

**Formula (from Chapter 11):**
```
CEI = [β · WDC + (1-β) · SAI] × L^γ
```

**Implementation:**
```typescript
function calculateCEI(wdc, sai, l, beta, gamma) {
  return (beta * wdc + (1 - beta) * sai) * Math.pow(l, gamma);
}
```

### B. Pillar Assessment Tool (`/tools/pillar-assessment`)

**Purpose:** Self-assessment against the Five Pillars.

**Flow:**
1. User selects institution type (Corporate, Government, NGO, Foundation, Healthcare, Education)
2. For each of the 5 pillars, user answers 5 diagnostic questions (25 total)
3. Questions based on the verification demands from Chapter 5
4. Results show:
   - Pillar Coherence score (all 5 must be present)
   - Pillar Deficiency identification (which pillars are weak)
   - Position on Proclamation-Proof Gradient
   - Personalized recommendations
   - Printable assessment report

**Example Questions (Accountability):**
- "Can your institution specify, in advance, what outcomes it is answerable for?"
- "Can it produce evidence of those outcomes on demand?"
- "Does the board review outcome evidence, not just expenditure reports?"

### C. Framework Explorer (`/tools/framework-explorer`)

**Purpose:** Interactive navigation of the entire framework architecture.

**Features:**
- Click any pillar to expand its full definition, failure mode, verification demand
- Hover over relationships to see dependency explanations
- Click the Trust Layer to see how it supports all pillars
- Navigate between connected concepts (click "The Proclamation Trap" → see related concepts)
- Visual concept map with zoom/pan

### D. Search Functionality (`/search`)

**Purpose:** Instant search across all book content.

**Implementation:**
- Fuse.js client-side search index
- Indexes: all chapter text, glossary terms, figure captions, Cognitive Relief elements
- Search results grouped by type (Chapters, Glossary Terms, Figures)
- Highlighted matches
- Keyboard shortcut (Cmd/Ctrl + K)

---

## 8. BUILD & DEPLOY

### Build Process

```bash
# 1. Install dependencies
bun install

# 2. Build static export
bun run build

# 3. Output goes to /out directory
# (next.config.ts has output: 'export')
```

### next.config.ts Configuration

```typescript
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,  // Required for static export
  },
  trailingSlash: true,
  basePath: '/csrfivepillarsframework',  // GitHub Pages subpath
  assetPrefix: '/csrfivepillarsframework/',
};
```

### GitHub Pages Deployment

#### Option A: GitHub Actions (Recommended)

```yaml
# .github/workflows/deploy.yml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: oven-sh/setup-bun@v1
      - run: bun install
      - run: bun run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: ./out

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
    steps:
      - uses: actions/deploy-pages@v4
```

#### Option B: Manual Deploy

```bash
# Build
bun run build

# The /out directory contains the static site
# Push contents to gh-pages branch or use gh-pages CLI
npx gh-pages -d out
```

### GitHub Repository Settings

1. Go to repository Settings → Pages
2. Source: GitHub Actions
3. The workflow will automatically deploy on push to `main`

---

## 9. TIME ESTIMATE

### Phase Breakdown

| Phase | Task | Hours |
|-------|------|-------|
| **Phase 1** | Project setup + configuration | 2 |
| | - Next.js config for static export | |
| | - Tailwind + shadcn/ui setup | |
| | - Theme provider (dark/light) | |
| | - File structure scaffolding | |
| **Phase 2** | Design system implementation | 4 |
| | - Color tokens + CSS variables | |
| | - Typography system | |
| | - Glassmorphism components | |
| | - Spacing/layout utilities | |
| **Phase 3** | Content integration | 6 |
| | - Parse manuscript into structured data | |
| | - Build chapter page templates | |
| | - Integrate all 55 figures | |
| | - Implement Cognitive Relief components | |
| | - Glossary tooltips | |
| **Phase 4** | Homepage slides | 5 |
| | - 11 × 100vh slides with snap scroll | |
| | - Hero with animated pillars | |
| | - Interactive pillar diagram | |
| | - Navigation dots + progress | |
| | - Framer Motion animations | |
| **Phase 5** | Pillar explorer | 3 |
| | - Interactive 5-pillar diagram | |
| | - Individual pillar pages | |
| | - Dependency chain visualization | |
| **Phase 6** | Interactive tools | 6 |
| | - CEI Calculator (sliders + formula) | |
| | - Pillar Assessment Tool (25 questions) | |
| | - Framework Explorer (concept map) | |
| | - Results visualization | |
| **Phase 7** | AI chatbot | 4 |
| | - RAG index builder | |
| | - Chat API route (z-ai-web-dev-sdk) | |
| | - Chat widget UI | |
| | - Suggested questions | |
| **Phase 8** | Search + figures gallery | 3 |
| | - Fuse.js search index | |
| | - Search results page | |
| | - Figure gallery with lightbox | |
| | - Keyboard shortcuts | |
| **Phase 9** | Polish + responsive | 4 |
| | - Mobile responsive (all pages) | |
| | - Animation refinement | |
| | - Accessibility (WCAG AA) | |
| | - Performance optimization | |
| **Phase 10** | Build + deploy | 2 |
| | - GitHub Actions workflow | |
| | - Test deployment | |
| | - Fix base path issues | |
| | - Final verification | |
| **TOTAL** | | **39 hours** |

### Estimated Timeline

| Schedule | Duration |
|----------|----------|
| Intensive (full-time) | 1 week |
| Moderate (part-time) | 2-3 weeks |
| Relaxed (evenings/weekends) | 4-5 weeks |

---

## SUMMARY

| Aspect | Specification |
|--------|---------------|
| **Technology** | Next.js 16, TypeScript, Tailwind 4, shadcn/ui, Framer Motion |
| **Deployment** | Static export to GitHub Pages (`amirhashmilive.github.io/csrfivepillarsframework`) |
| **Pages** | Homepage (11 slides) + 15 book pages + 6 pillar pages + 3 tool pages + search + AI chat |
| **Figures** | All 55 embedded with lightbox viewer |
| **AI** | RAG-based chatbot using z-ai-web-dev-sdk |
| **Interactive Tools** | CEI Calculator, Pillar Assessment, Framework Explorer, Search |
| **Design** | Grayscale palette (honoring book's B&W), glassmorphism, light/dark mode |
| **Time** | ~39 hours total |

---

*This outline is ready for your review. Upon approval, I will begin building the website phase by phase.*
