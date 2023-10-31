import Link from "next/link";
import Project from "../types/project";
import getIcon from "../utils/Icons";
import { FaGithub } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
import { MdScience } from "react-icons/md";

type ProjectCardProps = {
  project: Project;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className={`py-2  `}>
      <Link
        href={`/projects/${encodeURIComponent(project.id)}`}
        className="flex-shrink-0 flex gap-2"
      >
        <img
          src={project.thumbnail}
          alt={`${project.title} thumbnail`}
          className="w-24 md:w-36 object-cover rounded"
        />
        <div className="flex flex-col gap-2 justify-between">
          <h2 className="text-2xl font-bold">{project.title}</h2>
          <p className="text-sm md:text-md line-clamp-3">
            {project.description1}
          </p>
          <p className="text-brand-primary underline underline-offset-4 w-full text-right text-sm md:text-md">
            read more
          </p>
        </div>
      </Link>
      <div className="flex w-full justify-between gap-6 items-center my-4">
        <div className="w-full">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="whitespace-nowrap w-min flex gap-1 items-center underline underline-offset-4"
          >
            <FaGithub />
            Source Code
          </a>
        </div>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center gap-2 justify-center bg-brand-primary text-white p-1.5 rounded-xl whitespace-nowrap"
        >
          {project.demo ? <MdScience /> : <TbWorldWww />}
          {project.demo ? "View Demo" : "View Site"}
        </a>
      </div>
      <ul className="flex gap-2 overflow-x-scroll hide-scrollbar mx-2">
        {project.technologies.map((tech, index) => (
          <li
            key={index}
            className="flex gap-1 items-center bg-gray-200 rounded-xl px-2 py-1 text-xs whitespace-nowrap"
          >
            {getIcon(tech)}
            {tech}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectCard;
