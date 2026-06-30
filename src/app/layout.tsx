import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Five Pillars Framework — SaaS Platform for Institutional Legitimacy",
  description:
    "The first SaaS platform that helps institutions demonstrate — with evidence — that they produce the Betterment of Society. Assess, verify, and track your Five Pillars Coherence.",
  keywords: [
    "Five Pillars Framework",
    "CSR",
    "ESG",
    "institutional legitimacy",
    "Betterment of Society",
    "CEI",
    "Composite Effectiveness Index",
    "Amir Hashmi",
  ],
  authors: [{ name: "Dr. Sayed Amir Mustafa Hashmi" }],
  openGraph: {
    title: "The Five Pillars Framework",
    description:
      "Stop Proclaiming. Start Proving. The SaaS platform for institutional legitimacy and the Betterment of Society.",
    siteName: "The Five Pillars Framework",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased bg-background text-foreground min-h-screen flex flex-col`}
      >
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <Toaster />
      </body>
    </html>
  );
}
