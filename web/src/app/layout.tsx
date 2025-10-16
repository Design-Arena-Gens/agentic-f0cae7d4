import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Ketch Wellness — Luxury Holistic Gym, Oklahoma City",
    template: "%s — Ketch Wellness",
  },
  description:
    "Luxury holistic gym on Western Avenue, OKC. Discreet, evidence-based transformation for strength, bone density, and post-baby renewal.",
  metadataBase: new URL("https://agentic-f0cae7d4.vercel.app"),
  openGraph: {
    title: "Ketch Wellness — Luxury Holistic Gym, Oklahoma City",
    description:
      "Discreet, evidence-based transformation for women 30+. Strength, bone density, beauty and health restoration.",
    url: "https://agentic-f0cae7d4.vercel.app",
    siteName: "Ketch Wellness",
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} antialiased`}
      >
        <header className="sticky top-0 z-40 bg-[--brand-cream]/80 backdrop-blur supports-[backdrop-filter]:bg-[--brand-cream]/60 border-b border-black/[0.06]">
          <div className="container flex items-center justify-between py-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-full bg-[--brand-sage] grid place-items-center text-white font-bold">K</div>
              <span className="heading-serif text-xl tracking-wide">Ketch Wellness</span>
            </Link>
            <nav className="hidden md:flex items-center gap-6 text-sm">
              <Link href="/classes" className="hover:opacity-80">Classes</Link>
              <Link href="/booking" className="hover:opacity-80">Booking</Link>
              <Link href="/about" className="hover:opacity-80">About</Link>
              <Link href="/booking" className="btn btn-primary">Join waitlist</Link>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer className="mt-24 border-t border-black/[0.06]">
          <div className="container py-10 text-sm text-black/70 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>© {new Date().getFullYear()} Ketch Wellness — Western Ave, OKC</div>
            <div className="flex items-center gap-4">
              <Link href="/about" className="hover:opacity-80">Our philosophy</Link>
              <Link href="/booking" className="hover:opacity-80">Book a consult</Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
