import React from "react";
import Navbar from "../components/Navbar";
import ProjectCard from "../components/ProjectCard";
import projects from "@/utils/mock-projects";

const Home: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto py-4 px-2 sm:px-4 ">
        <section id="hero" className="flex mb-10 relative py-4 min-h-48">
          <div className="w-48 h-48 bg-gray-300 absolute top-0" />
          <div className="whitespace-nowrap flex flex-col gap-4 lg:gap-12 items-end w-full">
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
        </section>
        <section id="project-list">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                project={project}
                isLast={index === projects.length - 1}
              />
            ))}
          </div>
        </section>
        <section id="about">about me</section>
      </div>
    </div>
  );
};

export default Home;
