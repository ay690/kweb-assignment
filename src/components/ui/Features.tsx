"use client";
import Image from "next/image";
import KeyFeatures from "./KeyFeatures";
import Glimpse from "./Glimpse";
import { motion } from "framer-motion";

export default function Features() {
  return (
    <section className="relative w-full min-h-screen -mt-24">
      {/* Animated background image wrapper */}
      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/images/img_27121converted_1.png"
          alt="Features Background"
          fill
          className="object-cover"
          priority
        />
      </motion.div>

      <div className="relative z-10 container mx-auto py-16">
        <KeyFeatures />
        <Glimpse />
      </div>
    </section>
  );
}
