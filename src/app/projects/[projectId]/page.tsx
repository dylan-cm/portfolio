import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
import { MdScience } from "react-icons/md";
import {
  // getAllProjects,
  getImageURL,
  getImages,
  getProject,
} from "@/utils/firebase";
import Video from "@/components/Video";

interface ProjectPageProps {
  params: {
    projectId: string;
  };
}

// export const revalidate = 5;

// export async function generateStaticParams() {
//   const projects = await getAllProjects();
//   return projects.map((project) => ({
//     projectId: project.id,
//   }));
// }

const ProjectPage: React.FC<ProjectPageProps> = async ({ params }) => {
  const project = await getProject(params.projectId);
  const header = await getImageURL(project?.videoId);
  const pictures = await getImages(project?.pictures);

  if (!project) {
    return (
      <div className="flex flex-col items-center justify-center w-full h-52">
        Project not found.
      </div>
    );
  }

  return (
    <div className="container flex flex-col items-center mx-auto p-2 pt-8">
      <section
        id="title"
        className="flex flex-col items-center w-full max-w-4xl"
      >
        <h1 className="text-4xl font-bold mb-4 text-center">{project.title}</h1>
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
        {header ? (
          <Video image={header} />
        ) : (
          <Video videoId={project.videoId} />
        )}
      </section>
      <p className="my-16 max-w-6xl">{project.description1}</p>
      <section id="description1">
        <div className="grid grid-cols-2 gap-4 w-full max-w-4xl">
          <a href={pictures[0]}>
            <img
              src={pictures[0]}
              alt={`${project.title} image 2`}
              className="rounded-xl object-cover aspect-mobile shadow-lg"
            />
          </a>
          <a href={pictures[1]}>
            <img
              src={pictures[1]}
              alt={`${project.title} image 3`}
              className="rounded-xl object-cover aspect-mobile shadow-lg"
            />
          </a>
        </div>
      </section>
      <section id="description2">
        <p className="my-16 max-w-6xl">{project.description2}</p>
      </section>
      <section
        id="description3"
        className="grid grid-cols-2 grid-flow-row gap-4 auto-rows-min max-w-4xl"
      >
        <a href={pictures[2]}>
          <img
            src={pictures[2]}
            alt={`${project.title} image 4`}
            className="rounded-xl object-cover aspect-square shadow-lg"
          />
        </a>
        <a href={pictures[3]}>
          <img
            src={pictures[3]}
            alt={`${project.title} image 5`}
            className="rounded-xl object-cover aspect-square shadow-lg"
          />
        </a>
        <a href={pictures[4]}>
          <img
            src={pictures[4]}
            alt={`${project.title} image 6`}
            className="rounded-xl object-cover aspect-square shadow-lg"
          />
        </a>
        <a href={pictures[5]}>
          <img
            src={pictures[5]}
            alt={`${project.title} image 7`}
            className="rounded-xl object-cover aspect-square shadow-lg"
          />
        </a>
      </section>
      <p className="my-16 max-w-6xl">{project.description3}</p>
      <a href={pictures[6]} className="max-w-4xl">
        <img
          src={pictures[6]}
          alt={`${project.title} image 8`}
          className="rounded-xl object-cover aspect-video shadow-lg"
        />
      </a>
      <Link href={"/"} className="mt-16 underline underline-offset-4">
        See more projects
      </Link>
    </div>
  );
};

export default ProjectPage;
