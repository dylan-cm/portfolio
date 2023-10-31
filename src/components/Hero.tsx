import Image from "next/image";
import headshot from "@/assets/headshot.png";
import gradient from "@/assets/gradient.png";

const Hero = () => {
  return (
    <section
      id="top"
      className="relative flex flex-row items-center justify-center mb-12 overflow-clip px-4 pt-8  w-full"
    >
      <Image
        src={gradient}
        alt="Gradient Background"
        className="absolute top-0 left-0 -z-10"
        priority
        sizes="100vw"
        style={{ width: "100%", height: "100%" }}
      />
      <div className="container flex w-full items-center justify-center gap-8">
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
      </div>
    </section>
  );
};

export default Hero;
