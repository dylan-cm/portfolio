import React from "react";
import Navbar from "../../../components/Navbar";
import projects from "@/utils/mock-projects";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
import { MdScience } from "react-icons/md";

export default function ProjectDetails({
  params,
}: {
  params: { slug: string };
}) {
  const id = params.slug;
  const project = projects.find((item) => item.id === id);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <>
      <Navbar simple />
      <div className="container flex flex-col items-center mx-auto p-2">
        <section id="title" className="flex flex-col items-center">
          <h1 className="text-4xl font-bold mb-4 text-center">
            {project.title}
          </h1>
          <div className="flex gap-6 mb-16">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="whitespace-nowrap w-min flex gap-1 items-center underline underline-offset-4"
            >
              <FaGithub />
              Source Code
            </a>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 justify-center bg-brand-primary text-white p-1.5 px-6 rounded-xl whitespace-nowrap"
            >
              {project.demo ? <MdScience /> : <TbWorldWww />}
              {project.demo ? "View Demo" : "View Site"}
            </a>
          </div>
          <img
            src={project.video}
            alt={`${project.title} image 1`}
            className="rounded object-cover aspect-video"
          />
        </section>
        <p className="my-16 max-w-6xl">{project.description1}</p>
        <section id="description1">
          <div className="grid grid-cols-2 gap-4 w-full">
            <img
              src={project.pictures[0]}
              alt={`${project.title} image 2`}
              className="rounded object-cover aspect-mobile"
            />
            <img
              src={project.pictures[1]}
              alt={`${project.title} image 3`}
              className="rounded object-cover aspect-mobile"
            />
          </div>
        </section>
        <section id="description2">
          <p className="my-16 max-w-6xl">{project.description1}</p>
        </section>
        <section
          id="description3"
          className="grid grid-cols-2 grid-flow-row gap-4 auto-rows-min"
        >
          <img
            src={project.pictures[2]}
            alt={`${project.title} image 4`}
            className="rounded object-cover row-start-1 row-span-1 col-start-1 col-span-2 aspect-video"
          />
          <img
            src={project.pictures[3]}
            alt={`${project.title} image 5`}
            className="rounded object-cover aspect-square"
          />
          <img
            src={project.pictures[4]}
            alt={`${project.title} image 6`}
            className="rounded object-cover aspect-square"
          />
        </section>
        <p className="my-16 max-w-6xl">{project.description1}</p>
        <img
          src={project.pictures[5]}
          alt={`${project.title} image 7`}
          className="rounded object-cover aspect-video"
        />
        <Link href={"/"} className="mt-16 underline underline-offset-4">
          See more projects
        </Link>
      </div>
    </>
  );
}
