"use client";
import React, { useRef } from "react";
import ProjectCart from "./ProjectCart";
import { motion, useInView } from "framer-motion";

export interface Iproject {
  id?: number;
  title?: string;
  description?: string;
  image?: string;
  imgUrl?: string;
  gitUrl?: any;
  previewUrl?: any;
}

const ProjectData: Iproject[] = [
  {
    id: 1,
    title: "CiniKupi",
    description:
      "coffe shop website dengan tech stak untuk Frontend: ReactJs, Backend: NodeJs dan ExpressJs, Database: MongoDB, web ini saya buat untuk mengasah skill ReactJs saya dan mencoba mengimplementasikan intergrasi API dengan API yang saya buat.",
    image: "/img/project/cinikupiii.png",
    gitUrl: "https://github.com/HanifFathan10/CiniKupiReactJs",
    previewUrl: "https://cini-kupi.vercel.app",
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
    <section
      ref={ref}
      className="flex flex-col justify-center items-center"
      id={id}
    >
      <h2 className="text-center text-3xl md:text-4xl font-bold text-white my-4 ">
        My Project
      </h2>
      <ul className="flex max-w-xs md:max-w-xl mt-10 justify-center items-center">
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
              />
            </motion.li>
          );
        })}
      </ul>
    </section>
  );
};

export default ProjectsSection;
