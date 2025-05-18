"use client";

import Image from "next/image";
import Widgets from "@/components/ui/Widgets";
import Header from "@/components/common/Header";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/img_ezgif_1.png"
          alt="Tennis Court"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
      </div>

      {/* Header */}
      <Header />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-white px-4 text-center">
        <p className="text-sm sm:text-base md:text-[18px] font-bold tracking-[5px] md:tracking-[7px] uppercase mb-4">
          SSA HUNTER VALLEY
        </p>

        <h1 className="text-3xl sm:text-4xl md:text-[50px] font-light uppercase mb-4 max-w-4xl">
          Grow Your Game with the <br />
          <span className="font-bold">Professionals</span>
        </h1>

        <Image
          src="/images/img_line_1.png"
          alt="Divider"
          width={300}
          height={1}
          className="my-6 md:my-8 w-full max-w-[386px]"
        />

        <div className="bg-gradient-to-r from-transparent via-[#d2f24f] to-transparent h-[35px] w-full max-w-[638px] flex items-center justify-center my-4">
          <p className="text-sm sm:text-base md:text-[18px] font-normal tracking-[3px] sm:tracking-[5px] uppercase text-white">
            ADOPT
            <span className="mx-3 sm:mx-5 inline-block w-2 h-2 bg-white rounded-full"></span>
            NURTURE
            <span className="mx-3 sm:mx-5 inline-block w-2 h-2 bg-white rounded-full"></span>
            DELIVER
          </p>
        </div>

        <button className="mt-6 sm:mt-8 px-4 sm:px-6 py-2 text-sm sm:text-base capitalize text-white border border-white cursor-pointer rounded-full hover:bg-white hover:text-black transition duration-300">
          register now
        </button>

        {/* Right-side Widgets */}
        <Widgets />
      </div>
    </section>
  );
}
