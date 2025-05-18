"use client";
import HeroSection from "@/components/ui/HeroSection";
import About from "@/components/ui/About";
import Quote from "@/components/ui/Quote";
import Features from "@/components/ui/Features";
import Programs from "@/components/ui/Programs";
import Carousal from "@/components/ui/Carousal";
import LocationSection from "@/components/ui/LocationSection";
import Professionals from "@/components/ui/Profesionals";
import EventsCoaches from "@/components/ui/EventsCoaches";
import Footer from "@/components/common/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <About />
      <Quote />
      <Features />
      <Programs />
      <Carousal />
      <LocationSection />
      <Professionals />
      <EventsCoaches />
      <Footer />
    </main>
  );
}
