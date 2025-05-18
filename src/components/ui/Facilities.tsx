import Image from "next/image";
import { Play } from "lucide-react";
import FacilitiesMobile from "./FacilitiesMobile";

interface Facility {
  title: string;
  image: string;
  description: string;
  tags: string[];
  tagColor: {
    bg: string;
    text: string;
  };
}

const facilitiesTop: Facility[] = [
  {
    title: "Tennis",
    image: "/images/img_rectangle_21.png",
    description:
      "Lorem ipsum has been the industry's standard dummy text ever since the 1500s.",
    tags: ["9 Clay Courts", "4 Hard Courts"],
    tagColor: { bg: "bg-gray-100", text: "text-gray-800" },
  },
  {
    title: "Accommodation",
    image: "/images/img_rectangle_22.png",
    description:
      "Lorem ipsum has been the industry's standard dummy text ever since the 1500s.",
    tags: ["5-Star Hotel"],
    tagColor: { bg: "bg-gray-100", text: "text-gray-800" },
  },
];

const facilitiesBottom: Facility[] = [
  {
    title: "Fitness",
    image: "/images/img_rectangle_28.png",
    description:
      "Lorem ipsum has been the industry's standard dummy text ever since the 1500s.",
    tags: ["Gym", "Fitness Room"],
    tagColor: { bg: "bg-gray-100", text: "text-gray-800" },
  },
  {
    title: "Recovery",
    image: "/images/img_rectangle_29.png",
    description:
      "Lorem ipsum has been the industry's standard dummy text ever since the 1500s.",
    tags: ["Spa", "Pool", "Massage"],
    tagColor: { bg: "bg-green-100", text: "text-green-700" },
  },
];

export default function Facilities() {
  return (
    <>
      {/* Mobile version */}
      <div className="block md:hidden">
        <FacilitiesMobile />
      </div>

      {/* Desktop & Tablet version */}
      <div className="hidden md:block">
        <section className="relative py-20 bg-white overflow-hidden">
          <div className="container mx-auto px-6 max-w-7xl">
            {/* Header - above gradient */}
            <div className="mb-36 text-start">
              <div className="flex items-center">
            <h2 className="text-[36px] font-bold text-black mr-4">Facilities</h2>
            <div className="w-[10px] h-[10px] bg-[#99b81a] rounded-[5px]" />
          </div>
              <p className="mt-2 text-gray-600 max-w-md">
                Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s.
              </p>
            </div>

            {/* Gradient backdrop - full width */}
            <div className="absolute inset-x-0 top-0 h-3/5 bg-gradient-to-r from-blue-800 to-green-500 mt-80"></div>

            {/* Trophy silhouette */}
            <div className="absolute bottom-36 right-0 opacity-25">
              <Image
                src="/images/trophy.svg"
                alt="Trophy Silhouette"
                width={300}
                height={300}
              />
            </div>

            {/* Wrapper for absolute grids */}
            <div className="relative h-[800px] w-full">
              {/* Top row - pinned top-left */}
              <div className="absolute -top-20 left-0 max-w-xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 px-2">
                {facilitiesTop.map((f, idx) => (
                  <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-lg group">
                    <div className="relative">
                      <Image
                        src={f.image}
                        alt={f.title}
                        width={600}
                        height={400}
                        className="w-full h-auto object-cover"
                      />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <Play
                          size={48}
                          className="text-white bg-black bg-opacity-50 rounded-full p-3"
                        />
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-2xl font-semibold mb-2">{f.title}</h3>
                      <div className="mb-3 space-x-2">
                        {f.tags.map((tag, i) => (
                          <span
                            key={i}
                            className={`inline-block ${f.tagColor.bg} ${f.tagColor.text} text-sm px-3 py-1 rounded-full`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <p className="text-gray-600">{f.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom row - pinned bottom-right */}
              <div className="absolute bottom-10 right-0 max-w-xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 px-6">
                {facilitiesBottom.map((f, idx) => (
                  <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-lg group">
                    <div className="relative">
                      <Image
                        src={f.image}
                        alt={f.title}
                        width={600}
                        height={400}
                        className="w-full h-auto object-cover"
                      />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <Play
                          size={48}
                          className="text-white bg-black bg-opacity-50 rounded-full p-3"
                        />
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-2xl font-semibold mb-2">{f.title}</h3>
                      <div className="mb-3 space-x-2">
                        {f.tags.map((tag, i) => (
                          <span
                            key={i}
                            className={`inline-block ${f.tagColor.bg} ${f.tagColor.text} text-sm px-3 py-1 rounded-full`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <p className="text-gray-600">{f.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
