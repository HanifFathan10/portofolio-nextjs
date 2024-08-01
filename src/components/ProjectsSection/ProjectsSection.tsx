"use client";
import React, { useRef } from "react";
import ProjectCart from "./ProjectCart";
import { AnimatePresence, motion, useInView } from "framer-motion";
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
      {
        id: "zustand",
        src: "/svg/zustand.svg",
        alt: "zustand",
      },
    ],
  },
  {
    id: 2,
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
      {
        id: "tailwind",
        src: "/svg/tailwind.svg",
        alt: "tailwind",
      },
    ],
  },
  {
    id: 3,
    title: "GadgetIndo",
    description:
      "GadgetIndo is a website project designed to help users find information about the latest gadgets. During my internship, I worked on the frontend development, ensuring an attractive and functional user interface.",
    image: "/img/project/GI.png",
    previewUrl: "#",
    gitUrl: "https://github.com/HanifFathan10/Gadget-Indonesia",
    techStack: [
      {
        id: "html",
        src: "/svg/html.svg",
        alt: "html",
      },
      {
        id: "css",
        src: "/svg/css.svg",
        alt: "css",
      },
      {
        id: "javascript",
        src: "/svg/javascript.svg",
        alt: "javascript",
      },
      {
        id: "tailwind",
        src: "/svg/tailwind.svg",
        alt: "tailwind",
      },
    ],
  },
];

const ProjectsSection = ({ id }: { id: string }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true });

  const container = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        delayChildren: 0.9,
        staggerChildren: 0.6,
        ease: "easeOut",
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      ref={ref}
      className="flex flex-col justify-center items-center"
      id={id}>
      <h2 className="text-center text-3xl md:text-4xl font-medium text-white my-4">
        My Project
      </h2>
      <AnimatePresence>
        {isInView && (
          <motion.ul
            className="w-full grid md:grid-cols-2 place-content-center max-w-5xl px-6 mt-10 gap-5"
            variants={container}
            initial="hidden"
            animate="visible"
            exit="hidden">
            {ProjectData.map((project: Iproject, i) => (
              <motion.li variants={item} key={i}>
                <ProjectCart
                  title={project.title}
                  description={project.description}
                  imgUrl={project.image}
                  gitUrl={project.gitUrl}
                  previewUrl={project.previewUrl}
                  techStack={project.techStack}
                />
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsSection;
