"use client";
import { motion } from "framer-motion";
import Button from "@/components/common/Button";
import Card from "@/components/common/Card";

const professionals = [
  {
    src: "/images/img_image_6.png",
    alt: "Craig Tiley",
    title: "Craig Tiley",
    subtitle: "CEO Tennis Australia & \nAustralian Open",
  },
  {
    src: "/images/img_image_7.png",
    alt: "Stephen Farrow",
    title: "Stephen Farrow",
    subtitle: "Director - Tournament, Players & \nInternational Relations",
  },
  {
    src: "/images/img_image_8.png",
    alt: "Cameron Pearson",
    title: "Cameron Pearson",
    subtitle: "Head Major Events - \nTennis Australia",
  },
];

export default function Professionals() {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Header animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex items-center mb-8"
        >
          <h2 className="text-[36px] font-bold text-black mr-4">
            Meet our professionals
          </h2>
          <div className="w-[10px] h-[10px] bg-[#99b81a] rounded-[5px]"></div>
        </motion.div>

        {/* Button animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex justify-end mb-4"
        >
          <Button variant="primary">View All</Button>
        </motion.div>

        {/* Paragraph animation */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-[16px] font-light text-black mb-8 max-w-md"
        >
          Lorem Ipsum has been the industry&apos;s standard dummy text ever
          since the 1500s.
        </motion.p>

        {/* Card grid with staggered animation */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.2 }}
        >
          {professionals.map((person, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <Card
                src={person.src}
                alt={person.alt}
                title={person.title}
                subtitle={person.subtitle}
                className="h-[400px]"
                titleClassName="text-[25px] font-semibold text-white"
                subtitleClassName="text-[16px] font-light text-white"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
