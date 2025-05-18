import Image from "next/image";
import KeyFeatures from "./KeyFeatures";
import Glimpse from "./Glimpse";

export default function Features() {
  return (
    <section className="relative w-full min-h-screen -mt-24">
      <Image
        src="/images/img_27121converted_1.png"
        alt="Features Background"
        fill
        className="object-cover "
        priority
      />
      <div className="relative z-10 container mx-auto py-16">
        <KeyFeatures />
        <Glimpse />
      </div>
    </section>
  );
}
