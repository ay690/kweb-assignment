"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Quote() {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="py-12 sm:py-16 md:py-20 lg:py-24"
    >
      <div className="relative w-full h-56 sm:h-64 md:h-80 lg:h-96 xl:h-[500px]">
        {/* Background image */}
        <Image
          src="/images/img_image_3.png"
          alt="Tennis Court"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-6 md:px-8">
          <motion.div
            className="max-w-2xl text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.2 }}
            variants={{
              visible: { transition: { staggerChildren: 0.2 } },
              hidden: {},
            }}
          >
            {/* Quote text */}
            <motion.blockquote
              className="text-xl sm:text-xl md:text-2xl lg:text-[28px] font-semibold text-white mb-4"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              &ldquo;We have created an environment ideal for building craft.
              Our goal is to be recognized as the best tennis performance centre
              in the world.&rdquo;
            </motion.blockquote>

            {/* White line */}
            <motion.hr
              className="border-t border-white w-full mx-auto mb-6"
              variants={{
                hidden: { opacity: 0, scaleX: 0 },
                visible: { opacity: 1, scaleX: 1 },
              }}
              style={{ transformOrigin: "center" }}
            />

            {/* Author */}
            <motion.div
              className="flex flex-col justify-start items-start"
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <p className="text-base sm:text-lg md:text-xl font-medium text-white">
                John Doe
              </p>
              <p className="text-sm sm:text-base md:text-lg font-normal text-white">
                Chairman
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

