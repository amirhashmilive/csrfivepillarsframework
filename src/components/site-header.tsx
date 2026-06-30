"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const navItems = [
  { href: "/product/", label: "Product" },
  {
    href: "/modules/",
    label: "Modules",
    children: [
      { href: "/modules/accountability/", label: "Accountability" },
      { href: "/modules/execution/", label: "Execution" },
      { href: "/modules/initiative/", label: "Initiative" },
      { href: "/modules/outcome/", label: "Outcome" },
      { href: "/modules/meaning/", label: "Meaning" },
    ],
  },
  { href: "/pricing/", label: "Pricing" },
  {
    href: "/users/",
    label: "For You",
    children: [
      { href: "/users/corporate/", label: "Corporate CSR" },
      { href: "/users/implementing-agency/", label: "Implementing Agency" },
      { href: "/users/foundation/", label: "Foundations" },
      { href: "/users/government/", label: "Government" },
      { href: "/users/ngo/", label: "NGOs" },
      { href: "/users/auditor/", label: "Auditors" },
    ],
  },
  { href: "/resources/", label: "Resources" },
  { href: "/about/", label: "About" },
];

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-serif text-lg font-bold tracking-tight">
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
          <span className="hidden sm:inline">Five Pillars Framework</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <div
              key={item.href}
              className="relative"
              onMouseEnter={() => setDropdownOpen(item.label)}
              onMouseLeave={() => setDropdownOpen(null)}
            >
              <Link
                href={item.href}
                className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
              {item.children && dropdownOpen === item.label && (
                <div className="absolute left-0 top-full w-56 pt-1">
                  <div className="rounded-lg border bg-popover p-1 shadow-md">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* CTAs */}
        <div className="hidden items-center gap-2 lg:flex">
          <Link href="/demo/">
            <Button variant="ghost" size="sm">
              Demo
            </Button>
          </Link>
          <Link href="/contact/">
            <Button size="sm">Get Started</Button>
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="border-t bg-background lg:hidden">
          <nav className="container mx-auto flex flex-col gap-1 px-4 py-4">
            {navItems.map((item) => (
              <div key={item.href}>
                <Link
                  href={item.href}
                  className="block rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="ml-4 border-l pl-2">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block rounded-md px-3 py-1.5 text-xs text-muted-foreground hover:bg-muted hover:text-foreground"
                        onClick={() => setMobileOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="mt-2 flex gap-2">
              <Link href="/demo/" className="flex-1">
                <Button variant="outline" size="sm" className="w-full">
                  Demo
                </Button>
              </Link>
              <Link href="/contact/" className="flex-1">
                <Button size="sm" className="w-full">
                  Get Started
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
