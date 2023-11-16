import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { CONTACT_LINK, RESUME_LINK } from "@/utils/constants";
import Starscape from "@/components/Starscape";
import Navbar from "@/components/Navbar";
import Head from "next/head";

const DEFAULT_DENSITY = 5;
const DEFAULT_SIZE = 4;
const DEFAULT_SCALE = 12;
const DEFAULT_PROXIMITY = 0.1;

const font = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dylan Cortez-Modell",
  description: "Dylan's Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />

        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/android-chrome-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="512x512"
          href="/android-chrome-512x512.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000" />
        <meta name="msapplication-TileColor" content="#000" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <body
        className={`h-full min-h-screen w-full ${font.className} flex flex-col items-center relative`}
      >
        <Navbar />
        <div className="flex-grow min-h-[80vh] z-10 w-full">{children}</div>
        <footer className="relative mt-10 bg-gradient-to-b from-white to-brand-primary to-70% text-white h-64 w-full overflow-clip pb-6 px-4">
          <div className="w-full h-full flex flex-col gap-16 items-center justify-end">
            <ul className="w-full flex justify-around items-center text-sm z-10">
              <li>
                <Link href="/#top">Home</Link>
              </li>
              <li>
                <Link href="/#projects">Projects</Link>
              </li>
              {/* <li>
                <Link href="/#about">About</Link>
              </li> */}
              <li>
                <a
                  href={CONTACT_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Contact
                </a>
              </li>
              <li>
                <a href={RESUME_LINK} target="_blank" rel="noopener noreferrer">
                  Resume
                </a>
              </li>
            </ul>
            <a
              href="https://youtu.be/EL-D9LrFJd4?si=b9Uuuv_qceHf5ahb"
              target="_blank"
              rel="noopener noreferrer"
              className="italic self-end text-lg z-10"
            >
              See you space cowboy...
            </a>
          </div>
          <Starscape
            height={400}
            densityRatio={DEFAULT_DENSITY}
            sizeLimit={DEFAULT_SIZE}
            scaleLimit={DEFAULT_SCALE}
            proximityRatio={DEFAULT_PROXIMITY}
            starColor="hsla(50, 100%, 100%, 0.15)"
          />
        </footer>
      </body>
    </html>
  );
}
