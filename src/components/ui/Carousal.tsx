import React from "react";
import "./carousel.css";

const items = [
  { text: "ADOPT", variant: "solid" },
  { text: "NURTURE", variant: "outline" },
  { text: "DELIVER", variant: "solid" },
  { text: "ADOPT", variant: "outline" },
  { text: "NURTURE", variant: "solid" },
];

export default function Carousal() {
  return (
    <section className="relative overflow-hidden bg-white py-8 w-full">
      <div className="marquee-wrapper">
        <div className="marquee">
          {[...items, ...items].map((item, i) => (
            <div key={i} className="flex items-center space-x-2 mr-8">
              <span
                className={`text-[40px] font-bold uppercase tracking-[3px] ${
                  item.variant === "outline"
                    ? "text-transparent stroke-text"
                    : "text-[#99b81a]"
                }`}
              >
                {item.text}
              </span>
              <span className="w-2 h-2 bg-[#99b81a] rounded-full inline-block" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
