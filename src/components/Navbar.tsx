"use client";

import React, { useState, useEffect } from "react";
import { CONTACT_LINK, RESUME_LINK } from "@/utils/constants";
import Link from "next/link";
import Image from "next/image";
import gradient from "@/assets/gradient.png";
const headshot = "../headshot.png";

const Navbar = ({ ...props }: { simple?: boolean }) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== "undefined") setScrollPosition(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navbarShadow = scrollPosition > 0 ? "shadow-lg" : ""; // Shadow appears after scrolling

  return (
    <nav
      className={`flex justify-center sticky z-50 top-0 w-full mb-8 navbar ${navbarShadow} transition-shadow duration-500`}
    >
      <div className="fixed w-full h-14 top-0 left-0 -z-20 overflow-clip">
        <Image src={gradient} layout="responsive" height={56} alt="gradient" />
      </div>
      <div className="container flex items-center justify-center px-2 md:px-4 font-normal text-md h-14 relative z-10">
        <Link href={"/"}>
          <img
            src={headshot}
            alt="headshot"
            className="blob absolute z-10"
            style={{
              width:
                scrollPosition > 0 ||
                props.simple ||
                typeof window === "undefined"
                  ? 42
                  : Math.max(300, window.innerWidth / 3),
              aspectRatio: 185 / 200,
              transition: "width 800ms, height 800ms, top 800ms",
              top: scrollPosition > 0 || props.simple ? 6 : 96,
              left: 24,
            }}
          />
          <span
            className="absolute top-4 left-16 font-bold z-0"
            style={{
              left: scrollPosition > 0 || props.simple ? 72 : 24,
              transition: "left 450ms 800ms ease-out",
            }}
          >
            DCM
          </span>
        </Link>
        <ul className="flex items-center gap-8 container">
          <li className="flex-grow">{/* <Link href="/">Home</Link> */}</li>
          <li>
            <a href={RESUME_LINK} target="_blank" rel="noopener noreferrer">
              Resume
            </a>
          </li>
          <li>
            <a
              href={CONTACT_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg py-1.5 px-3 text-white bg-brand-primary"
            >
              Say Hi 👋
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
