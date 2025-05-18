import Image from "next/image";
import { Play } from "lucide-react";

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

const allFacilities: Facility[] = [
  ...(
    [
      { title: "Tennis", image: "/images/img_rectangle_21.png", description: "Lorem ipsum has been the industry's standard dummy text ever since the 1500s.", tags: ["9 Clay Courts", "4 Hard Courts"], tagColor: { bg: "bg-gray-100", text: "text-gray-800" } },
      { title: "Accommodation", image: "/images/img_rectangle_22.png", description: "Lorem ipsum has been the industry's standard dummy text ever since the 1500s.", tags: ["5-Star Hotel"], tagColor: { bg: "bg-gray-100", text: "text-gray-800" } },
      { title: "Fitness", image: "/images/img_rectangle_28.png", description: "Lorem ipsum has been the industry's standard dummy text ever since the 1500s.", tags: ["Gym", "Fitness Room"], tagColor: { bg: "bg-gray-100", text: "text-gray-800" } },
      { title: "Recovery", image: "/images/img_rectangle_29.png", description: "Lorem ipsum has been the industry's standard dummy text ever since the 1500s.", tags: ["Spa", "Pool", "Massage"], tagColor: { bg: "bg-green-100", text: "text-green-700" } }
    ]
  )
];


export default function FacilitiesMobile() {
  return (
    <section className="block md:hidden py-10 bg-white">
      <div className="px-4">
        <div className="flex items-center justify-between">

        <h2 className="text-3xl font-bold mb-4">Facilities</h2>
        <div className="w-[10px] h-[10px] bg-[#99b81a] rounded-[5px]" />
        </div>
        <p className="text-gray-600 mb-8">
          Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s.
        </p>
        <div className="space-y-8">
          {allFacilities.map((f, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="relative">
                <Image
                  src={f.image}
                  alt={f.title}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Play className="text-white bg-black bg-opacity-50 rounded-full p-2" />
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
                <div className="flex flex-wrap gap-2 mb-3">
                  {f.tags.map((tag, i) => (
                    <span
                      key={i}
                      className={`${f.tagColor.bg} ${f.tagColor.text} text-xs px-2 py-1 rounded-full`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-gray-600 text-sm">{f.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
