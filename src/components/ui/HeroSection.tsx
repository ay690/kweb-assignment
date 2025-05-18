"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Widgets from "@/components/ui/Widgets";
import Header from "@/components/common/Header";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Image with Fade-in */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <Image
          src="/images/img_ezgif_1.png"
          alt="Tennis Court"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
      </motion.div>

      {/* Header */}
      <Header />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-white px-4 text-center">
        <motion.p
          className="text-sm sm:text-base md:text-[18px] font-bold tracking-[5px] md:tracking-[7px] uppercase mb-4"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          SSA HUNTER VALLEY
        </motion.p>

        <motion.h1
          className="text-3xl sm:text-4xl md:text-[50px] font-light uppercase mb-4 max-w-4xl"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Grow Your Game with the <br />
          <span className="font-bold">Professionals</span>
        </motion.h1>

        <motion.div
          className="my-6 md:my-8 w-full max-w-[386px]"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <Image
            src="/images/img_line_1.png"
            alt="Divider"
            width={300}
            height={1}
            className="w-full"
          />
        </motion.div>

        <motion.div
          className="bg-gradient-to-r from-transparent via-[#d2f24f] to-transparent h-[35px] w-full max-w-[638px] flex items-center justify-center my-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          <p className="text-sm sm:text-base md:text-[18px] font-normal tracking-[3px] sm:tracking-[5px] uppercase text-white">
            ADOPT
            <span className="mx-3 sm:mx-5 inline-block w-2 h-2 bg-white rounded-full"></span>
            NURTURE
            <span className="mx-3 sm:mx-5 inline-block w-2 h-2 bg-white rounded-full"></span>
            DELIVER
          </p>
        </motion.div>

        <motion.button
          className="mt-6 sm:mt-8 px-4 sm:px-6 py-2 text-sm sm:text-base capitalize text-white border border-white cursor-pointer rounded-full hover:bg-white hover:text-black transition duration-300"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.1 }}
        >
          register now
        </motion.button>

        {/* Right-side Widgets */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
        >
          <Widgets />
        </motion.div>
      </div>
    </section>
  );
}
