# The Five Pillars Framework — SaaS Platform Website

A static marketing website for the Five Pillars Framework SaaS platform, deployed to GitHub Pages.

## Deployment Target

🔗 **`amirhashmilive.github.io/csrfivepillarsframework`**

## Quick Start

```bash
# Install dependencies
bun install

# Run dev server
bun run dev

# Build static site for production
bun run build:static

# Output is in /out directory
```

## GitHub Pages Deployment

The site is automatically deployed via GitHub Actions when you push to `main` or `master`.

### Manual Setup (one-time)

1. Go to your repository settings on GitHub
2. Navigate to **Pages** in the left sidebar
3. Under **Source**, select **GitHub Actions**
4. Push to `main` — the workflow will build and deploy automatically

### Configuration

The site is configured for the `/csrfivepillarsframework` subpath:

```typescript
// next.config.ts
const nextConfig = {
  output: "export",
  basePath: "/csrfivepillarsframework",
  assetPrefix: "/csrfivepillarsframework/",
  // ...
};
```

## Site Structure

| Page | Description |
|------|-------------|
| `/` | Home — hero, problem, solution, pillars, CEI, pricing, CTA |
| `/product` | Platform overview |
| `/modules` | All 5 pillar modules |
| `/modules/accountability` | Module A detail |
| `/modules/execution` | Module E detail |
| `/modules/initiative` | Module I detail |
| `/modules/outcome` | Module O detail |
| `/modules/meaning` | Module M detail |
| `/pricing` | 4-tier subscription comparison |
| `/users` | User type landing |
| `/users/corporate` | Corporate CSR landing |
| `/users/implementing-agency` | Implementing agency landing |
| `/users/foundation` | Foundation landing |
| `/users/government` | Government landing |
| `/users/ngo` | NGO landing |
| `/users/auditor` | Auditor landing |
| `/cei` | CEI explainer + live calculator |
| `/demo` | Interactive 15-question self-assessment |
| `/resources` | Resource hub |
| `/resources/framework` | Framework overview |
| `/resources/book` | The 270-page book |
| `/resources/glossary` | 40+ canonical terms |
| `/resources/research` | Empirical validation |
| `/about` | The Institute |
| `/about/hashmi` | Dr. Sayed Amir Mustafa Hashmi |
| `/contact` | Lead capture form |

## Tech Stack

- **Next.js 16** with static export
- **TypeScript 5**
- **Tailwind CSS 4** + **shadcn/ui**
- **Framer Motion** (subtle animations)
- **Inter** (body) + **Playfair Display** (headings)

## Interactive Features

- **CEI Calculator** (`/cei`) — Live calculation with adjustable parameters
- **Self-Assessment Demo** (`/demo`) — 15-question assessment with CEI score and pillar breakdown
- **Contact Form** (`/contact`) — Lead capture (static, shows success state)

## License

© The Five Pillars Framework. Developed by Dr. Sayed Amir Mustafa Hashmi.
