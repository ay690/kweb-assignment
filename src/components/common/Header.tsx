'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full h-[83px] bg-transparent">
      <div className="flex items-center justify-between px-6 sm:px-10 md:px-14 lg:px-16 py-6">
        {/* Logo */}
        <div>
          <Link href="/">
            <Image
              src="/images/img_ssalogo03_1.png"
              alt="SSA Logo"
              width={60}
              height={37}
              className="w-[50px] sm:w-[60px] h-auto"
            />
          </Link>
        </div>

        {/* Nav Links - hidden on small screens */}
        <nav className="hidden md:flex items-center space-x-4 lg:space-x-6">
          {["about us", "matches", "programs", "coaches", "amenities", "events", "news", "blogs"].map((label) => (
            <Link
              key={label}
              href={`/${label.replace(/\s+/g, '')}`}
              className="text-[13px] font-normal text-white capitalize whitespace-nowrap"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Contact Button */}
        <div className="hidden sm:block">
          <Link
            href="/contact"
            className="rounded-full px-6 py-2 border border-[#d2f24f] text-[12px] font-bold text-white capitalize"
          >
            contact us
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
