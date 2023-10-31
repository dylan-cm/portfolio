import React from "react";
import ProjectCard from "../components/ProjectCard";
import projects from "@/utils/mock-projects";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="container py-4 px-2 sm:px-4 h-full">
        <Hero />
        <section
          id="projects"
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 pt-10 h-full w-full"
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              isLast={index === projects.length - 1}
            />
          ))}
        </section>
        {/* <section id="about">about me</section> */}
      </div>
    </>
  );
};

export default Home;
