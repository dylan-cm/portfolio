import Link from "next/link";
import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="p-4 font-light text-md bg-gradient-to-r from-cyan-200 to-orange-200 shadow sticky top-0 z-10">
      <div className="container mx-auto">
        <ul className="flex gap-8">
          <li className="flex-grow">
            <Link href="/">Home</Link>
          </li>

          <li>
            <a
              href="https://www.google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </li>
          <li>
            <a
              href="mailto:your-email@example.com"
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
