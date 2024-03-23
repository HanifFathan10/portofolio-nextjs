"use client";
import React, { useRef } from "react";
import ProjectCart from "./ProjectCart";
import { motion, useInView } from "framer-motion";
import { Reveal } from "../Reveal";
import { Iproject } from "@/libs/interface";

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
      {
        id: "tailwind",
        src: "/svg/tailwind.svg",
        alt: "tailwind",
      },
      {
        id: "chalraUI",
        src: "/svg/chakraUI.svg",
        alt: "chalraUI",
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
      {
        id: "tailwind",
        src: "/svg/tailwind.svg",
        alt: "tailwind",
      },
    ],
  },
  {
    id: 3,
    title: "Hazelnote",
    description: "Hazelnote, to do list app to create my to do list every day!",
    image: "/img/project/hazelnote.png",
    previewUrl: "#",
    gitUrl: "https://github.com/HanifFathan10/hazelnote",
    techStack: [
      {
        id: "laravel",
        src: "/svg/laravel.svg",
        alt: "laravel",
      },
      {
        id: "react",
        src: "/svg/react.svg",
        alt: "react",
      },
    ],
  },
];

const ProjectsSection = ({ id }: { id: string }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true });

  const cartVariants = {
    initials: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: 50, opacity: 0 },
    initial: { y: 0, opacity: 1 },
  };
  return (
    <Reveal>
      <section
        ref={ref}
        className="flex flex-col justify-center items-center"
        id={id}>
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
                transition={{ duration: 0.3, delay: index * 0.1 }}
                key={index}>
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
