import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SSA | Elevate Your Game",
  description:
    "Signature Slam Academy offers elite tennis programs, top-tier coaching, and world-class training facilities in Lovedale, NSW.",
  keywords: [
    "Signature Slam Academy",
    "Tennis Academy",
    "Tennis Coaching",
    "Sports Training",
    "Camps",
    "Events",
    "Performance Programs",
    "Tennis NSW",
  ],
  authors: [
    {
      name: "Signature Slam Academy",
      url: "https://www.signatureslamacademy.com",
    },
  ],
  openGraph: {
    title: "Signature Slam Academy | Elevate Your Game",
    description:
      "Train like a pro with SSA's world-class coaches, performance camps, and tennis programs in Lovedale, NSW.",
    url: "https://www.signatureslamacademy.com",
    siteName: "Signature Slam Academy",
    locale: "en_AU",
    type: "website",
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
