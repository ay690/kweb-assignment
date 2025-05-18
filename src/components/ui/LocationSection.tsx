"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function LocationSection() {
  return (
    <section className="py-16">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Left Content Animation */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-[#003a5d] to-[#99b81a] p-8 md:p-16 text-white"
        >
          <h2 className="text-[20px] md:text-[25px] font-light uppercase mb-2">
            Launching
          </h2>
          <h3 className="text-[32px] md:text-[40px] font-bold capitalize leading-tight mb-6">
            signature slam academy
            <br />
            Hunter Valley
          </h3>

          <h4 className="text-[20px] md:text-[25px] font-medium mb-4">
            SSA Connectivity
          </h4>

          <ul className="space-y-4">
            {[
              { name: "hunter valley golf and country club", dist: "220m" },
              { name: "rydges resort hunter valley", dist: "550m" },
              { name: "cressnock airport", dist: "1.7km" },
              { name: "cressnock CBD", dist: "7km" },
              { name: "nulkaba public school", dist: "4.8km" },
              { name: "cressnock hospital", dist: "7.3km" },
              { name: "mcdonalds, KFC, Oporto", dist: "7km" },
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-4">
                <Image
                  src="/images/img_iongolfoutline.svg"
                  alt="Icon"
                  width={20}
                  height={20}
                  className="mt-1 flex-shrink-0"
                />
                <div className="flex items-center w-full text-sm md:text-[16px]">
                  <p className="font-semibold capitalize whitespace-nowrap">
                    {item.name}
                  </p>
                  <div className="flex-grow border-b border-dotted border-white mx-2" />
                  <p className="font-normal whitespace-nowrap">{item.dist}</p>
                </div>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Right Image Animation */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="relative min-h-[300px] md:min-h-[500px] h-full"
        >
          <Image
            src="/images/img_image_5.png"
            alt="Aerial View"
            fill
            className="object-cover"
          />

          <div className="absolute bottom-4 right-4 flex space-x-2">
            <span className="w-3 h-3 bg-white rounded-full"></span>
            <span className="w-3 h-3 bg-white/50 rounded-full"></span>
            <span className="w-3 h-3 bg-white/50 rounded-full"></span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

