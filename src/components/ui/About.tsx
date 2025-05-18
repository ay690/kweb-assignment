"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "../common/Button";

export default function About() {
  return (
    <section className="relative py-16 px-4 sm:py-20 sm:px-6 md:py-24 md:px-8 lg:px-16">
      {/* Faint “A” background—hide on small screens */}
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

      {/* Mission text */}
      <div className="relative max-w-3xl mx-auto text-center mb-12 sm:mb-16 z-10">
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-normal text-gray-800">
          To be the first venue in the world to have&nbsp;
          <span className="font-bold text-[#99b81a]">
            60 multi surface courts
          </span>
          &nbsp;at one location and establish first one stop tennis academy in
          the Asia Pacific producing grand slam champions.
        </p>
      </div>

      {/* Tabs */}
      <nav className="relative z-10 flex flex-wrap justify-center gap-x-4 sm:gap-x-8 mb-8 sm:mb-12">
        {["About Us", "Coaches", "Vision", "Mission"].map((tab) => (
          <Link
            key={tab}
            href={`#${tab.replace(/\s+/g, "").toLowerCase()}`}
            className={`text-[20px] sm:text-[22px] md:text-[25px] font-semibold pb-2 ${
              tab === "About Us"
                ? "text-gray-900 border-b-2 border-[#99b81a]"
                : "text-gray-400 hover:text-gray-600"
            }`}
          >
            {tab}
          </Link>
        ))}
      </nav>

  
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start max-w-5xl mx-auto">
        {/* Left column */}
        <div className="space-y-6">
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

            ].map(({ value, label }) => (
              <div key={label} className="w-16 sm:w-20">
                <p className="text-2xl sm:text-3xl md:text-3xl font-bold text-[#99b81a]">
                  {value}
                </p>
                <p className="text-xs sm:text-sm text-gray-600 uppercase mt-1">
                  {label}
                </p>
              </div>
            ))}
          </div>

          <Button variant="primary" className="mt-4 sm:mt-6">
            Read More
          </Button>
        </div>

        {/* Right column: image collage */}
        <div className="grid grid-cols-3 gap-4">
          {/* Image 1: spans 2 cols */}
          <div className="relative h-40 sm:h-48 md:h-56 col-span-2">
            <Image
              src="/images/img_rectangle_45.png"
              alt="Court 1"
              fill
              className="object-cover rounded"
            />
          </div>

          {/* Image 2: spans 1 col */}
          <div className="relative h-40 sm:h-48 md:h-56">
            <Image
              src="/images/img_rectangle_48.png"
              alt="Coach"
              fill
              className="object-cover rounded"
            />
          </div>

          {/* Image 3 */}
          <div className="relative h-40 sm:h-48 md:h-56">
            <Image
              src="/images/img_rectangle_46.png"
              alt="Court 2"
              fill
              className="object-cover rounded"
            />
          </div>

          {/* Image 4: spans 2 cols */}
          <div className="relative h-40 sm:h-48 md:h-56 col-span-2">
            <Image
              src="/images/img_rectangle_47.png"
              alt="Court 3"
              fill
              className="object-cover rounded"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
