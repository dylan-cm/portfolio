import React from "react";
import Navbar from "../../../components/Navbar";
import projects from "@/utils/mock-projects";
import Link from "next/link";

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
    <div>
      <Navbar />
      <div className="container flex flex-col items-center mx-auto p-2">
        <section id="title">
          <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
          <div className="mb-6">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 mr-4"
            >
              GitHub
            </a>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500"
            >
              {project.demo ? "View Demo" : "View Site"}
            </a>
          </div>
          <img
            src={project.video}
            alt={`${project.title} image 1`}
            className="rounded object-cover aspect-video"
          />
        </section>
        <section id="description1">
          <p className="mb-6">{project.description1}</p>
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
          <p className="mb-6">{project.description1}</p>
        </section>
        <section id="description3">
          <div className="grid grid-cols-2 grid-rows-2 gap-4">
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
          </div>
          <p className="mb-6">{project.description1}</p>
          <img
            src={project.pictures[5]}
            alt={`${project.title} image 7`}
            className="rounded object-cover aspect-video"
          />
        </section>
        <Link href={"/"} className="mt-12 underline underline-offset-4">
          See more projects
        </Link>
      </div>
    </div>
  );
}
