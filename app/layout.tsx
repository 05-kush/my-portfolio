import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono, Newsreader } from "next/font/google";
import "./globals.css";
import InteractiveNodeBackground from "@/components/layout/InteractiveNodeBackground";

const sansFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const monoFont = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500", "600"],
});

const serifFont = Newsreader({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  style: ["normal", "italic"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Kushagra Gupta — SDE-I | Full-Stack & Distributed Systems",
  description:
    "Portfolio of Kushagra Gupta, Software Development Engineer at Reliance Jio Platforms. Technology-agnostic engineer building end-to-end full-stack applications and resilient distributed systems.",
  keywords: [
    "Kushagra Gupta",
    "Software Development Engineer",
    "Full-Stack Engineer",
    "React",
    "TypeScript",
    "Node.js",
    "Distributed Systems",
    "Reliance Jio Platforms",
    "Redis",
    "Kafka",
    "Elasticsearch"
  ],
  authors: [{ name: "Kushagra Gupta" }],
  creator: "Kushagra Gupta",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${sansFont.variable} ${monoFont.variable} ${serifFont.variable} scroll-smooth`}
    >
      <body className="bg-[var(--bg-paper)] text-[var(--color-ink)] font-sans antialiased selection:bg-[var(--color-accent)] selection:text-white min-h-screen flex flex-col relative overflow-x-hidden">
        {/* Full-site Interactive Node Web Background */}
        <InteractiveNodeBackground />
        
        {/* Main Content Layer */}
        <div className="relative z-10 flex flex-col min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
