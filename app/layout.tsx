import type { Metadata } from "next";
import { JetBrains_Mono, Noto_Sans_Myanmar } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
});

const myanmar = Noto_Sans_Myanmar({
  subsets: ["myanmar"],
  variable: "--font-mm",
  weight: ["400", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aungbobokyaw.com"),
  title: {
    default: "Aung Bo Bo Kyaw — Technician, builder, founder of Letyar Labs",
    template: "%s — Aung Bo Bo Kyaw",
  },
  description:
    "Aung Bo Bo Kyaw's personal site — writing, training, and the path from electronics repair technician to product builder.",
  alternates: {
    types: { "application/rss+xml": "/feed.xml" },
  },
  openGraph: {
    type: "website",
    siteName: "Aung Bo Bo Kyaw",
    title: "Aung Bo Bo Kyaw — Technician, builder, founder of Letyar Labs",
    description:
      "Writing, training, and the path from electronics repair technician to product builder.",
    url: "https://aungbobokyaw.com",
  },
  twitter: {
    card: "summary",
    title: "Aung Bo Bo Kyaw",
    description:
      "Writing, training, and the path from electronics repair technician to product builder.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${mono.variable} ${myanmar.variable}`}>
      <link
        rel="stylesheet"
        href="https://api.fontshare.com/v2/css?f[]=general-sans@600&f[]=satoshi@400,500&display=swap"
      />
      <body className="font-body bg-ink text-paper antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
