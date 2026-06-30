import Link from "next/link";

const footerSections = [
  {
    title: "Platform",
    links: [
      { href: "/product/", label: "Product Overview" },
      { href: "/modules/", label: "Modules" },
      { href: "/cei/", label: "CEI Dashboard" },
      { href: "/pricing/", label: "Pricing" },
      { href: "/demo/", label: "Interactive Demo" },
    ],
  },
  {
    title: "For Users",
    links: [
      { href: "/users/corporate/", label: "Corporate CSR" },
      { href: "/users/implementing-agency/", label: "Implementing Agencies" },
      { href: "/users/foundation/", label: "Foundations" },
      { href: "/users/government/", label: "Government" },
      { href: "/users/ngo/", label: "NGOs" },
      { href: "/users/auditor/", label: "Auditors" },
    ],
  },
  {
    title: "Resources",
    links: [
      { href: "/resources/framework/", label: "The Framework" },
      { href: "/resources/book/", label: "The Book" },
      { href: "/resources/glossary/", label: "Glossary" },
      { href: "/resources/research/", label: "Research" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about/", label: "About" },
      { href: "/about/hashmi/", label: "Dr. Hashmi" },
      { href: "/contact/", label: "Contact" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 font-serif text-lg font-bold">
              <div className="flex gap-0.5">
                {["A", "E", "I", "O", "M"].map((letter, i) => (
                  <div
                    key={letter}
                    className="flex h-6 w-6 items-center justify-center text-[10px] font-bold text-white"
                    style={{
                      backgroundColor: `hsl(0, 0%, ${10 + i * 18}%)`,
                    }}
                  >
                    {letter}
                  </div>
                ))}
              </div>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">
              The SaaS platform for institutional legitimacy and the Betterment of Society.
            </p>
          </div>

          {/* Link Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="mb-3 text-sm font-semibold">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} The Five Pillars Framework. Developed by Dr. Sayed Amir Mustafa Hashmi.
          </p>
          <p className="text-xs text-muted-foreground">
            Betterment of Society — not just proclaimed, but demonstrated.
          </p>
        </div>
      </div>
    </footer>
  );
}
