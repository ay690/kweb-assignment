import Image from "next/image";

export default function Quote() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24">
      {/* Container that defines the height of our “image + overlay” */}
      <div className="relative w-full h-56 sm:h-64 md:h-80 lg:h-96 xl:h-[500px]">
        {/* Background image fills this container */}
        <Image
          src="/images/img_image_3.png"
          alt="Tennis Court"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-6 md:px-8">
          <div className="max-w-2xl text-center">
            <blockquote className="text-xl sm:text-xl md:text-2xl lg:text-[28px] font-semibold text-white mb-4">
              &ldquo;We have created an environment ideal for building craft.
              Our goal is to be recognized as the best tennis performance centre
              in the world.&rdquo;
            </blockquote>

            {/* white line */}
            <hr className="border-t border-white w-full mx-auto mb-6" />
            <div className="flex flex-col justify-start items-start">
              <p className="text-base sm:text-lg md:text-xl font-medium text-white">
                John Doe
              </p>
              <p className="text-sm sm:text-base md:text-lg font-normal text-white">
                Chairman
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
