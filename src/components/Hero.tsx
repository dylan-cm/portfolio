"use client";

import React, { useState, useEffect } from "react";
// import Image from "next/image";
// import gradient from "@/assets/gradient.png";

const Hero = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <section
      id="top"
      className="flex items-center mb-20 overflow-clip"
      style={{ marginBottom: Math.max(64 - scrollPosition * 1.3, -96) }}
    >
      {/* <div className="absolute w-full h-14 top-0 left-0">
        <Image src={gradient} layout="responsive" height={56} alt="gradient" />
      </div> */}
      <div
        style={{
          width:
            scrollPosition > 0 || typeof window === "undefined"
              ? 72
              : Math.min(300, window.innerWidth / 3),
          aspectRatio: 185 / 200,
        }}
      ></div>
      <div className="whitespace-nowrap flex flex-col gap-2 lg:gap-12 items-end w-full">
        <h1
          className="text-md sm:text-xl md:text-2xl lg:text-4xl font-black"
          style={{
            opacity:
              scrollPosition > 0
                ? Math.max((100 - scrollPosition * 2.5) / 100, 0)
                : 1,
            transition: "opacity 200ms",
          }}
        >
          Dylan Cortez-Modell
        </h1>
        <h2
          className="text-md sm:text-xl md:text-2xl lg:text-4xl font-bold"
          style={{
            opacity:
              scrollPosition > 0
                ? Math.max((100 - scrollPosition * 2) / 100, 0)
                : 1,
            transition: "opacity 200ms",
          }}
        >
          Full-Stack Developer
        </h2>
        <h3
          className="text-md sm:text-xl md:text-2xl lg:text-4xl font-medium"
          style={{
            opacity:
              scrollPosition > 0
                ? Math.max((100 - scrollPosition * 1.5) / 100, 0)
                : 1,
            transition: "opacity 200ms",
          }}
        >
          Web Designer
        </h3>
        <h4
          className="text-md sm:text-xl md:text-2xl lg:text-4xl font-light"
          style={{
            opacity:
              scrollPosition > 0
                ? Math.max((100 - scrollPosition * 1) / 100, 0)
                : 1,
            transition: "opacity 200ms",
          }}
        >
          Creative
        </h4>
      </div>
    </section>
  );
};

export default Hero;
