import { CONTACT_LINK, RESUME_LINK } from "@/utils/constants";
import Link from "next/link";
import Image from "next/image";
import gradient from "@/assets/gradient.png";

const Navbar = () => {
  return (
    <nav
      className={`sticky flex justify-center items-center  z-50 top-0 w-full navbar shadow-xl transition-shadow duration-500 overflow-clip py-4 px-4`}
    >
      <div className="absolute w-full h-14 top-0 left-0 -z-20 ">
        <Image
          src={gradient}
          alt="gradient"
          priority
          sizes="100vw"
          style={{ width: "100%" }}
        />
      </div>

      <div className="container">
        <ul className="flex items-center gap-8 container">
          <li className="flex-grow font-black">
            <Link href="/">DCM</Link>
          </li>
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
