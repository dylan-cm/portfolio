import React from "react";
import ProjectCard from "../components/ProjectCard";
import Hero from "@/components/Hero";
import { getAllProjects } from "@/utils/firebase";

export const dynamic = "force-dynamic";

const Home = async () => {
  const projects = await getAllProjects();

  return (
    <div className="w-full flex flex-col items-center  h-full">
      <Hero />
      <section
        id="projects"
        className="container grid grid-cols-1 lg:grid-cols-2 gap-12 pt-10 py-4 px-2 sm:px-4 h-full w-full"
      >
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </section>
    </div>
  );
};

export default Home;
