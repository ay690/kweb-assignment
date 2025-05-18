"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const Footer: React.FC = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
    }),
  };

  return (
    <footer className="bg-white pt-10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start px-4 md:px-[112px] gap-40">
          {/* Logo */}
          <motion.div
            className="mb-6 md:mb-0"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Image
              src="/images/img_ssalogo_1.png"
              alt="SSA Logo"
              width={120}
              height={100}
            />
          </motion.div>

          {/* Nav Links & Contact Info */}
          <motion.div
            className="flex-1"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              className="flex flex-wrap gap-x-20 gap-y-3 text-[16px] font-normal text-black capitalize border-b border-gray-300 pb-6"
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.05,
                  },
                },
              }}
            >
              {[
                "about",
                "coaches",
                "news",
                "matches",
                "events",
                "faqs",
                "programs",
                "amenities",
                "blogs",
              ].map((link, i) => (
                <motion.div key={link} custom={i} variants={fadeUp}>
                  <Link href={`/${link}`}>{link.replace(/-/g, " ")}</Link>
                </motion.div>
              ))}
            </motion.div>

            {/* Contact Info & Socials */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
              <motion.div custom={1} variants={fadeUp}>
                <h3 className="text-lg font-semibold text-[#99b81a] mb-2">
                  Signature Slam Academy
                </h3>
                <p className="text-sm text-black mb-3">
                  30 Wills Hill Road, Lovedale, NSW
                </p>
                <div className="flex items-center text-sm text-black mb-2">
                  <Image
                    src="/images/img_fluentcall20regular.svg"
                    alt="Phone"
                    width={20}
                    height={20}
                  />
                  <span className="ml-3">+91 5642589752</span>
                </div>
                <div className="flex items-center text-sm text-black">
                  <Image
                    src="/images/img_iconamoonemailthin.svg"
                    alt="Email"
                    width={20}
                    height={20}
                  />
                  <span className="ml-3">info@ssagroup.com</span>
                </div>
              </motion.div>

              <motion.div custom={2} variants={fadeUp}>
                <h3 className="text-lg font-semibold text-[#99b81a] mb-4">
                  Connect with us
                </h3>
                <div className="flex space-x-4 mb-4">
                  {[
                    { href: "https://facebook.com", src: "img_basilfacebookoutline.svg", alt: "Facebook" },
                    { href: "https://twitter.com", src: "img_ritwitterxfill.svg", alt: "Twitter" },
                    { href: "https://instagram.com", src: "img_iconoirinstagram.svg", alt: "Instagram" },
                    { href: "https://youtube.com", src: "img_iconoiryoutube.svg", alt: "YouTube" },
                  ].map(({ href, src, alt }) => (
                    <Link key={alt} href={href} aria-label={alt}>
                      <Image src={`/images/${src}`} alt={alt} width={24} height={24} />
                    </Link>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <motion.div
        className="bg-gradient-to-r from-[#003a5d] to-[#99b81a] py-3 mt-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="px-4 md:px-[112px] flex flex-col md:flex-row justify-between items-center text-white text-xs md:text-sm">
          <Link href="/terms" className="capitalize mb-2 md:mb-0">
            terms and condition
          </Link>
          <p className="text-center mb-2 md:mb-0">
            © 2023 All Rights Reserved{" "}
            <span className="lowercase">www.signatureslamacademy.com</span>
          </p>
          <Link href="/privacy" className="capitalize">
            privacy policy
          </Link>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
