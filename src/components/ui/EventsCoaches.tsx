import Image from "next/image";
import { motion } from "framer-motion";

export default function EventsCoaches() {
  return (
    <section className="py-8 md:py-16">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Coaches Section */}
        <div className="relative min-h-[300px] md:min-h-[400px]">
          <Image
            src="/images/img_rectangle_34.png"
            alt="Tennis Court"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <motion.div
            className="absolute inset-0 bg-black/30 p-6 md:p-16 flex flex-col justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-4 md:mb-8">
              <h2 className="text-2xl md:text-[36px] font-bold text-white mr-2 md:mr-4">
                Our Coaches
              </h2>
              <div className="w-2 h-2 md:w-[10px] md:h-[10px] bg-white rounded-full"></div>
            </div>

            <p className="text-sm md:text-[16px] font-light text-white mb-4 md:mb-8">
              Lorem Ipsum has been the industry&apos;s standard dummy text ever
              since the 1500s.
            </p>

            <div className="flex items-center">
              <p className="text-sm md:text-[15px] font-normal text-white capitalize mr-2">
                read more
              </p>
              <Image
                src="/images/img_arrow_2_white_a700.svg"
                alt="Arrow"
                width={20}
                height={20}
                className="w-5 h-5 md:w-6 md:h-6"
              />
            </div>
          </motion.div>
        </div>

        {/* Events Section */}
        <div className="relative bg-[#99b81a] min-h-[300px] md:min-h-[400px]">
          <div className="absolute right-0 -bottom-1 w-32 h-32 md:w-64 md:h-64">
            <Image
              src="/images/lawntennis.png"
              alt="Tennis Event"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 128px, 256px"
            />
          </div>

          <motion.div
            className="p-6 md:p-16 flex flex-col justify-center h-full"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-4 md:mb-8">
              <h2 className="text-2xl md:text-[36px] font-bold text-white mr-2 md:mr-4">
                Events
              </h2>
              <div className="w-2 h-2 md:w-[10px] md:h-[10px] bg-white rounded-full"></div>
            </div>

            <p className="text-sm md:text-[16px] font-light text-white mb-4 md:mb-8">
              Lorem Ipsum has been the industry&apos;s standard dummy text ever
              since the 1500s.
            </p>

            <div className="flex items-center">
              <p className="text-sm md:text-[15px] font-normal text-white capitalize mr-2">
                read more
              </p>
              <Image
                src="/images/img_arrow_2_white_a700.svg"
                alt="Arrow"
                width={20}
                height={20}
                className="w-5 h-5 md:w-6 md:h-6"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
