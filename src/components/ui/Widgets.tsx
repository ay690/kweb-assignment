import React from "react";
import Image from "next/image";

const Widgets: React.FC = () => {
  return (
    <div className="absolute flex flex-col items-end bottom-0 right-0 pb-4 space-y-4">
      {/* Weather */}
      <div className="flex flex-col items-end">
        <div className="flex items-center gap-2 mb-1">
          <Image
            src="/images/ep_arrow-up.png"
            alt="Arrow"
            width={16}
            height={16}
          />
          <p className="text-xs sm:text-[13px] font-bold uppercase">Weather</p>
          <div className="w-[50px] sm:w-[70px] h-[1px] bg-lime-400 mx-2"></div>
        </div>

        <div className="bg-[#99b81a8c] w-[230px] sm:w-[270px] h-[120px] sm:h-[140px] p-4 backdrop-blur-md">
          <div className="flex flex-col items-start">
            <p className="text-base sm:text-[16px] font-bold">Hunter Valley</p>

            <div className="flex justify-between items-center gap-6 sm:gap-9">
              <div className="flex">
                <span className="text-4xl sm:text-[50px] font-bold">19</span>
                <span className="text-4xl sm:text-[50px] font-light">°</span>
                <span className="text-2xl sm:text-[30px] font-light ml-1">
                  C
                </span>
              </div>
              <div className="flex flex-col gap-2 sm:gap-3.5">
                <p className="text-base sm:text-[16px] font-bold">Weather</p>
                <p className="text-xs sm:text-[13px] font-light">
                  Saturday, 8 pm
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Ongoing Matches */}
      <div className="flex items-center gap-2">
        <Image
          src="/images/ep_arrow-up.png"
          alt="Arrow"
          width={16}
          height={16}
        />
        <p className="text-xs sm:text-[13px] font-bold uppercase">
          Ongoing Matches
        </p>
        <div className="w-[50px] sm:w-[70px] h-[1px] bg-lime-400 mx-2"></div>
      </div>

      {/* Score */}
      <div className="flex items-center gap-2">
        <Image
          src="/images/ep_arrow-up.png"
          alt="Arrow"
          width={16}
          height={16}
        />
        <p className="text-xs sm:text-[13px] font-bold uppercase">Score</p>
        <div className="w-[50px] sm:w-[70px] h-[1px] bg-lime-400 mx-2"></div>
      </div>
    </div>
  );
};

export default Widgets;
