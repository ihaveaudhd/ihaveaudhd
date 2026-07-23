import type { Metadata } from "next";
import { DM_Sans, Lora } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const sans = DM_Sans({ subsets: ["latin"], variable: "--font-sans" });
const serif = Lora({ subsets: ["latin"], variable: "--font-serif" });

export const metadata: Metadata = {
  title: "I Have AuDHD",
  description:
    "Clear, compassionate information for autistic people with ADHD—and the people who love them.",
};

const nav = [
  ["Start Here", "/start-here"],
  ["Understand AuDHD", "/understanding-audhd"],
  ["For Adults", "/for-adults"],
  ["For Parents", "/for-parents"],
  ["Resources", "/resources"],
];

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable}`}>
      <body>
        <a className="skip-link" href="#main">Skip to content</a>
        <header className="site-header">
          <Link className="brand" href="/" aria-label="I Have AuDHD home">
            <span className="brand-mark" aria-hidden="true">✦</span>
            <span>I Have <em>AuDHD</em></span>
          </Link>
          <nav aria-label="Main navigation">
            {nav.map(([label, href]) => (
              <Link key={href} href={href}>{label}</Link>
            ))}
          </nav>
          <Link className="header-cta" href="/start-here">Find your way in</Link>
        </header>
        <main id="main">{children}</main>
        <footer className="site-footer">
          <div>
            <Link className="brand footer-brand" href="/">
              <span className="brand-mark" aria-hidden="true">✦</span>
              <span>I Have <em>AuDHD</em></span>
            </Link>
            <p>Understanding your brain can change how you understand your life.</p>
          </div>
          <div className="footer-links">
            <Link href="/about">About</Link>
            <Link href="/resources">Resources</Link>
            <Link href="/the-science">The Science</Link>
          </div>
          <p className="fine-print">Educational information, not medical advice.</p>
        </footer>
      </body>
    </html>
  );
}
