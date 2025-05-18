"use client";

import HeroSection from "@/components/ui/HeroSection";
import About from "@/components/ui/About";
import Quote from "@/components/ui/Quote";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <About />
      <Quote />
    </main>
  );
}
