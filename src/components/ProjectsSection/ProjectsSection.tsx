"use client";
import React, { useRef } from "react";
import ProjectCart from "./ProjectCart";
import { motion, useInView } from "framer-motion";
import { Reveal } from "../Reveal";

export interface Iproject {
  id?: number;
  title?: string;
  description?: string;
  image?: string;
  imgUrl?: string;
  gitUrl?: any;
  previewUrl?: any;
  techStack?: any;
}

const ProjectData: Iproject[] = [
  {
    id: 1,
    title: "CiniKupi",
    description:
      "The coffee shop website that I developed focuses on menu information and details of each of our menus. You can order it online on our website.",
    image: "/img/project/cinikupiii.webp",
    gitUrl: "https://github.com/HanifFathan10/CiniKupiReactJs",
    previewUrl: "https://cini-kupi.vercel.app",
    techStack: [
      {
        id: "mongodb",
        src: "/svg/mongodb.svg",
        alt: "mongodb",
      },
      {
        id: "express",
        src: "/svg/express.svg",
        alt: "express",
      },
      {
        id: "react",
        src: "/svg/react.svg",
        alt: "react",
      },
      {
        id: "nodejs",
        src: "/svg/node.svg",
        alt: "nodejs",
      },
    ],
  },
  {
    id: 2,
    title: "Personal Website",
    description:
      "My personal website to introduce myself and store several project portfolios that I have developed",
    image: "/img/project/web-personal.webp",
    gitUrl: "https://github.com/HanifFathan10/portofolio-nextjs",
    previewUrl: "https://haniep-portofolio.vercel.app",
    techStack: [
      {
        id: "next",
        src: "/svg/next.svg",
        alt: "next",
      },
      {
        id: "typescript",
        src: "/svg/typescript.svg",
        alt: "typescript",
      },
      {
        id: "framer",
        src: "/svg/framer.svg",
        alt: "framer",
      },
    ],
  },
];

const ProjectsSection = ({ id }: { id: any }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const cartVariants = {
    initials: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };
  return (
    <Reveal>
      <section
        ref={ref}
        className="flex flex-col justify-center items-center"
        id={id}
      >
        <h2 className="text-center text-3xl md:text-4xl font-bold text-white my-4 ">
          My Project
        </h2>
        <ul className="flex flex-col lg:grid lg:grid-cols-2 mt-10 gap-5">
          {ProjectData.map((project: Iproject, index) => {
            return (
              <motion.li
                variants={cartVariants}
                initial="initial"
                animate={isInView ? "animate" : "initial"}
                transition={{ duration: 0.3, delay: (index = 0.4) }}
                key={index}
              >
                <ProjectCart
                  key={project.id}
                  title={project.title}
                  description={project.description}
                  imgUrl={project.image}
                  gitUrl={project.gitUrl}
                  previewUrl={project.previewUrl}
                  techStack={project.techStack}
                />
              </motion.li>
            );
          })}
        </ul>
      </section>
    </Reveal>
  );
};

export default ProjectsSection;
