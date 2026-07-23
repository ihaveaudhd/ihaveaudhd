import type { Metadata } from "next";
import { Caveat, Lato, Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import "./globals.css";

const heading = Montserrat({ subsets: ["latin"], variable: "--font-heading" });
const body = Lato({ subsets: ["latin"], variable: "--font-body", weight: ["400", "700", "900"] });
const script = Caveat({ subsets: ["latin"], variable: "--font-script" });

export const metadata: Metadata = {
  title: "I Have AuDHD",
  description:
    "Clear, compassionate information for autistic people with ADHD—and the people who love them.",
  icons: { icon: "/brand/circle-logo.png", apple: "/brand/circle-logo.png" },
};

const nav = [
  ["Home", "/"],
  ["About", "/about"],
  ["The Science", "/the-science"],
  ["Resources", "/resources"],
];

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${heading.variable} ${body.variable} ${script.variable}`}>
      <body>
        <a className="skip-link" href="#main">Skip to content</a>
        <header className="site-header">
          <Link className="brand" href="/" aria-label="I Have AuDHD home">
            <span className="brand-name"><em>i have</em> <strong><i>au</i>DHD</strong></span>
          </Link>
          <nav aria-label="Main navigation">
            {nav.map(([label, href]) => (
              <Link key={href} href={href}>{label}</Link>
            ))}
          </nav>
          <Link className="header-cta" href="/start-here">Join the community</Link>
        </header>
        <main id="main">{children}</main>
        <footer className="site-footer">
          <div>
            <Link className="brand footer-brand" href="/">
              <Image className="footer-logo" src="/brand/circle-logo.png" alt="I Have AuDHD" width={100} height={100} />
              <span className="brand-name"><em>i have</em> <strong><i>au</i>DHD</strong></span>
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
