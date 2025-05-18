"use client";
import Image from "next/image";
import Button from "../common/Button";
import { motion } from "framer-motion";

export default function Glimpse() {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Header section with title and button */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex items-center justify-between mb-8 flex-wrap gap-4"
        >
          <div className="flex items-center">
            <h2 className="text-[36px] font-bold text-black mr-4">
              A Glimpse of Excellence
            </h2>
            <div className="w-[10px] h-[10px] bg-[#99b81a] rounded-[5px]"></div>
          </div>
          <Button variant="primary">Register Now</Button>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-[16px] font-light text-black mb-8 max-w-3xl"
        >
          Lorem Ipsum has been the industry&apos;s standard dummy text ever since the
          1500s.
        </motion.p>

        {/* Responsive Image Grid with equal height */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* First image (1/3) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative h-[300px] lg:h-[400px] rounded-[10px] overflow-hidden col-span-1"
          >
            <Image
              src="/images/img_rectangle_12.png"
              alt="Tennis Court"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 33vw"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative h-[300px] lg:h-[400px] rounded-[10px] overflow-hidden col-span-1 lg:col-span-2"
          >
            <Image
              src="/images/img_rectangle_13.png"
              alt="Tennis Facility"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 66vw"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
