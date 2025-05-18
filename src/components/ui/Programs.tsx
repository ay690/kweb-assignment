import React from "react";
import Card from "@/components/common/Card";
import Button from "@/components/common/Button";

export default function Programs() {
  const programs = [
    {
      src: "/images/img_rectangle_14.png",
      alt: "Academy",
      title: "Academy",
      subtitle: "Live and train with us",
      titleClassName: "text-white",
      subtitleClassName: "text-white",
    },
    {
      src: "/images/img_rectangle_15.png",
      alt: "Camps",
      title: "Camps",
      subtitle: "Train like a pro with us",
      titleClassName: "text-white",
      subtitleClassName: "text-white",
    },
    {
      src: "/images/img_rectangle_16.png",
      alt: "Performance",
      title: "Performance",
      subtitle: "Elevate your game with us",
      titleClassName: "text-white",
      subtitleClassName: "text-white",
    },
  ];

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Header Row */}
        <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
          <div className="flex items-center">
            <h2 className="text-[36px] font-bold text-black mr-4">Programs</h2>
            <div className="w-[10px] h-[10px] bg-[#99b81a] rounded-[5px]" />
          </div>
          <Button variant="primary">Register Now</Button>
        </div>

        {/* Intro Text */}
        <p className="text-[16px] font-light text-black mb-8 max-w-lg">
          Lorem Ipsum has been the industry&apos;s standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>

        {/* Program Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {programs.map((prog) => (
            <Card
              key={prog.title}
              src={prog.src}
              alt={prog.alt}
              title={prog.title}
              subtitle={prog.subtitle}
              className="h-80 md:h-96 rounded-[10px]"
              titleClassName={prog.titleClassName}
              subtitleClassName={prog.subtitleClassName}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

