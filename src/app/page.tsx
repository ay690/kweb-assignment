"use client";

import HeroSection from "@/components/ui/HeroSection";
import About from "@/components/ui/About";
import Quote from "@/components/ui/Quote";
import Features from "@/components/ui/Features";
import Programs from "@/components/ui/Programs";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <About />
      <Quote />
      <Features />
      <Programs />
    </main>
  );
}
