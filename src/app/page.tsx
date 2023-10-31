import React from "react";
import ProjectCard from "../components/ProjectCard";
import projects from "@/utils/mock-projects";
import Hero from "@/components/Hero";
import Image from "next/image";
import gradient from "@/assets/gradient.png";

const Home: React.FC = () => {
  return (
    <div className="container py-4 px-2 sm:px-4 h-full">
      <Image
        src={gradient}
        alt="Gradient Background"
        className="absolute top-0 left-0 -z-10"
        priority
      />

      <Hero />
      <section
        id="projects"
        className="grid grid-cols-1 lg:grid-cols-2 gap-12 pt-10 h-full w-full"
      >
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </section>
    </div>
  );
};

export default Home;
