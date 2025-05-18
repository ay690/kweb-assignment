"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "../common/Button";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative py-16 px-4 sm:py-20 sm:px-6 md:py-24 md:px-8 lg:px-16"
    >
      {/* Faint “A” background */}
      <div
        className="hidden md:block absolute top-0 left-1/10 transform -translate-x-1/2
                      w-48 h-48 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px]
                      pointer-events-none"
      >
        <Image
          src="/images/img_a_1.png"
          alt="A"
          fill
          style={{ objectFit: "contain" }}
        />
      </div>

      {/* Mission Text */}
      <motion.div
        className="relative max-w-3xl mx-auto text-center mb-12 sm:mb-16 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-normal text-gray-800">
          To be the first venue in the world to have&nbsp;
          <span className="font-bold text-[#99b81a]">60 multi surface courts</span>
          &nbsp;at one location and establish first one stop tennis academy in
          the Asia Pacific producing grand slam champions.
        </p>
      </motion.div>

      {/* Tabs */}
      <motion.nav
        className="relative z-10 flex flex-wrap justify-center gap-x-4 sm:gap-x-8 mb-8 sm:mb-12"
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.1 } },
        }}
      >
        {["About Us", "Coaches", "Vision", "Mission"].map((tab) => (
          <motion.div
            key={tab}
            variants={{
              hidden: { opacity: 0, scale: 0.95 },
              visible: { opacity: 1, scale: 1 },
            }}
          >
            <Link
              href={`#${tab.replace(/\s+/g, "").toLowerCase()}`}
              className={`text-[20px] sm:text-[22px] md:text-[25px] font-semibold pb-2 ${
                tab === "About Us"
                  ? "text-gray-900 border-b-2 border-[#99b81a]"
                  : "text-gray-400 hover:text-gray-600"
              }`}
            >
              {tab}
            </Link>
          </motion.div>
        ))}
      </motion.nav>

      {/* Content Grid */}
      <motion.div
        className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start max-w-5xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.2 } },
        }}
      >
        {/* Left Column */}
        <motion.div
          className="space-y-6"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <h2
            id="aboutus"
            className="text-2xl sm:text-3xl md:text-[36px] font-bold text-gray-900 flex items-center"
          >
            About Us
            <span className="ml-2 inline-block w-2 h-2 bg-[#99b81a] rounded-full" />
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-md mx-auto text-justify">
            To be the first venue in the world to have 60 multi surface courts
            at one location and establish first one stop tennis academy in the
            Asia Pacific producing grand slam champions.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-x-8 gap-y-4 text-center">
            {[
              { value: 20, label: "courts" },
              { value: 12, label: "coaches" },
              { value: 17, label: "years" },
              { value: 10, label: "clubs" },
            ].map(({ value, label }, index) => (
              <motion.div
                key={label}
                className="w-16 sm:w-20"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }}
              >
                <p className="text-2xl sm:text-3xl md:text-3xl font-bold text-[#99b81a]">
                  {value}
                </p>
                <p className="text-xs sm:text-sm text-gray-600 uppercase mt-1">
                  {label}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <Button variant="primary" className="mt-4 sm:mt-6">
              Read More
            </Button>
          </motion.div>
        </motion.div>

        {/* Right Column - Image Collage */}
        <motion.div
          className="grid grid-cols-3 gap-4"
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.15 } },
          }}
        >
          {[
            { src: "/images/img_rectangle_45.png", colSpan: "col-span-2" },
            { src: "/images/img_rectangle_48.png" },
            { src: "/images/img_rectangle_46.png" },
            { src: "/images/img_rectangle_47.png", colSpan: "col-span-2" },
          ].map(({ src, colSpan }, idx) => (
            <motion.div
              key={idx}
              className={`relative h-40 sm:h-48 md:h-56 ${colSpan || ""}`}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
            >
              <Image
                src={src}
                alt={`Image ${idx + 1}`}
                fill
                className="object-cover rounded"
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
