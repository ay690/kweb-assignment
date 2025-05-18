"use client";
import Image from "next/image";
import Button from "../common/Button";
import { motion } from "framer-motion";

export default function KeyFeatures() {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          className="flex items-center justify-between mb-8 flex-wrap gap-4"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="flex items-center">
            <h2 className="text-[36px] font-bold text-black mr-4">
              Key Features
            </h2>
            <div className="w-[10px] h-[10px] bg-[#99b81a] rounded-[5px]" />
          </div>
          <Button variant="primary">Register Now</Button>
        </motion.div>

        <p className="text-[16px] font-light text-black mb-8 max-w-3xl">
          Lorem Ipsum has been the industry&apos;s standard dummy text ever
          since the 1500s.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <ul className="space-y-6">
              {[
                {
                  title: "First venue in the world",
                  description:
                    "First venue in the world to have 60 multi surface courts (20 clay & 30 hard + 10 natural grass) at one location alongside a stadium",
                },
                {
                  description:
                    "First facility in the world to have capabilities to hold WTA & ATP events on any three court surface at one location",
                },
                {
                  description:
                    "First tennis academy in the world to have capabilities to stage WTA & ATP events too",
                },
                {
                  description:
                    "First venue in the world with tennis academy, Equestrian Centre, 18 holes golf course, Exhibition Centre, Aboriginal Art & Culture Museum, Stadium; 5 Star Hunter Valley resort and airport all in 500 meters radius",
                },
                {
                  description: "First one stop tennis academy in Asia Pacific",
                },
              ].map((item, index) => (
                <li key={index} className="flex">
                  <Image
                    src="/images/img_arrow_2.svg"
                    alt="Arrow"
                    width={20}
                    height={20}
                    className="mt-1 mr-4 flex-shrink-0"
                  />
                  <div>
                    {item.title && (
                      <p className="text-[16px] font-medium text-black mb-1">
                        {item.title}
                      </p>
                    )}
                    <p className="text-[16px] font-light text-black">
                      {item.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="space-y-8">
              <div className="bg-white rounded-lg">
                <ul className="space-y-6">
                  {[
                    {
                      title: "First venue in the world",
                      description:
                        "First venue in the world to have 60 multi surface courts (20 clay & 30 hard + 10 natural grass) at one location alongside a stadium",
                    },
                    {
                      description:
                        "First facility in the world to have capabilities to hold WTA & ATP events on any three court surface at one location",
                    },
                  ].map((item, index) => (
                    <li key={index} className="flex">
                      <Image
                        src="/images/img_arrow_2.svg"
                        alt="Arrow"
                        width={20}
                        height={20}
                        className="mt-1 mr-4 flex-shrink-0"
                      />
                      <div>
                        {item.title && (
                          <p className="text-[16px] font-medium text-black mb-1">
                            {item.title}
                          </p>
                        )}
                        <p className="text-[16px] font-light text-black">
                          {item.description}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <ul className="space-y-6">
                {[
                  {
                    description:
                      "First tennis academy in the world to have capabilities to stage WTA & ATP events too",
                  },
                  {
                    description:
                      "First venue in the world with tennis academy, Equestrian Centre, 18 holes golf course, Exhibition Centre, Aboriginal Art & Culture Museum, Stadium; 5 Star Hunter Valley resort and airport all in 500 meters radius",
                  },
                  {
                    description:
                      "First one stop tennis academy in Asia Pacific",
                  },
                ].map((item, index) => (
                  <li key={index} className="flex">
                    <Image
                      src="/images/img_arrow_2.svg"
                      alt="Arrow"
                      width={20}
                      height={20}
                      className="mt-1 mr-4 flex-shrink-0"
                    />
                    <div>
                      <p className="text-[16px] font-light text-black">
                        {item.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
