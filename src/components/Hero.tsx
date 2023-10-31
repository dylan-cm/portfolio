import Image from "next/image";
import headshot from "@/assets/headshot.png";

const Hero = () => {
  return (
    <section
      id="top"
      className="flex flex-row items-center gap-4 mb-12 overflow-clip px-4"
    >
      <div>
        <Image src={headshot} alt="Dylan Cortez-Modell" />
      </div>
      <div className="whitespace-nowrap flex flex-col gap-2 lg:gap-12 items-end w-full flex-grow">
        <h1 className="text-md sm:text-xl md:text-2xl lg:text-4xl font-black">
          Dylan Cortez-Modell
        </h1>
        <h2 className="text-md sm:text-xl md:text-2xl lg:text-4xl font-bold">
          Full-Stack Developer
        </h2>
        <h3 className="text-md sm:text-xl md:text-2xl lg:text-4xl font-medium">
          Web Designer
        </h3>
        <h4 className="text-md sm:text-xl md:text-2xl lg:text-4xl font-light">
          Creative
        </h4>
      </div>
    </section>
  );
};

export default Hero;
