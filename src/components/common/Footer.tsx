"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white pt-10 overflow-hidden">
    
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start px-4 md:px-[112px] gap-40">
          {/* Logo */}
          <div className="mb-6 md:mb-0">
            <Image
              src="/images/img_ssalogo_1.png"
              alt="SSA Logo"
              width={120}
              height={100}
            />
          </div>

          {/* Nav Links */}
          <div className="flex-1">
            <div className="flex flex-wrap gap-x-20 gap-y-3 text-[16px] font-normal text-black capitalize border-b border-gray-300 pb-6">
              <Link href="/about">about us</Link>
              <Link href="/coaches">coaches</Link>
              <Link href="/news">news</Link>
              <Link href="/matches">matches</Link>
              <Link href="/events">events</Link>
              <Link href="/faqs">faqs</Link>
              <Link href="/programs">programs</Link>
              <Link href="/amenities">amenities</Link>
              <Link href="/blogs">blogs</Link>
            </div>

            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
           
              <div>
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
              </div>

              <div>
                <h3 className="text-lg font-semibold text-[#99b81a] mb-4">
                  Connect with us
                </h3>
                <div className="flex space-x-4 mb-4">
                  <Link href="https://facebook.com" aria-label="Facebook">
                    <Image
                      src="/images/img_basilfacebookoutline.svg"
                      alt="Facebook"
                      width={24}
                      height={24}
                    />
                  </Link>
                  <Link href="https://twitter.com" aria-label="Twitter">
                    <Image
                      src="/images/img_ritwitterxfill.svg"
                      alt="Twitter"
                      width={24}
                      height={24}
                    />
                  </Link>
                  <Link href="https://instagram.com" aria-label="Instagram">
                    <Image
                      src="/images/img_iconoirinstagram.svg"
                      alt="Instagram"
                      width={24}
                      height={24}
                    />
                  </Link>
                  <Link href="https://youtube.com" aria-label="YouTube">
                    <Image
                      src="/images/img_iconoiryoutube.svg"
                      alt="YouTube"
                      width={24}
                      height={24}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gradient-to-r from-[#003a5d] to-[#99b81a] py-3 mt-10">
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
      </div>
    </footer>
  );
};

export default Footer;
