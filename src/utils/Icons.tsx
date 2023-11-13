import { Fragment } from "react";
import { FaFigma, FaGithubAlt, FaReact, FaShopify } from "react-icons/fa";
import {
  SiTypescript,
  SiCss3,
  SiHtml5,
  SiTailwindcss,
  SiGraphql,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

type TechnologyNames =
  | "react"
  | "shopify_api"
  | "typescript"
  | "css"
  | "html"
  | "nextjs"
  | "tailwind"
  | "react_native"
  | "git"
  | "figma"
  | "graphql"
  | string;

const Icons: Record<TechnologyNames, JSX.Element> = {
  react: <FaReact />,
  react_native: <FaReact />,
  shopify_api: <FaShopify />,
  typescript: <SiTypescript />,
  nextjs: <TbBrandNextjs />,
  css: <SiCss3 />,
  html: <SiHtml5 />,
  tailwind: <SiTailwindcss />,
  git: <FaGithubAlt />,
  figma: <FaFigma />,
  graphql: <SiGraphql />,
  default: <Fragment />,
};
const getIcon = (tech: TechnologyNames): JSX.Element => {
  return Icons[tech.toLowerCase().split(" ").join("_")] || Icons.default;
};

export default getIcon;
