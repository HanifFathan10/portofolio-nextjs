"use client"
import React from "react";
import ProjectCart from "./ProjectCart";

export interface Iproject {
  id?: number;
  title?: string;
  description?: string;
  image?: string;
  imgUrl?: string;
  gitUrl?: any;
  previewUrl?: any
}

const ProjectData: Iproject[] = [
  {
    id: 1,
    title: "CiniKupi",
    description: "coffe shop website dengan tech stak untuk Frontend: ReactJs, Backend: NodeJs dan ExpressJs, Database: MongoDB, web ini saya buat untuk mengasah skill ReactJs saya dan mencoba mengimplementasikan intergrasi API dengan API yang saya buat.",
    image: "/img/project/cinikupiii.png",
    gitUrl: 'https://github.com/HanifFathan10/CiniKupiReactJs',
    previewUrl: 'https://cini-kupi.vercel.app'
  },
];

const ProjectsSection = () => {
  return (
    <div>
      <h2 className="text-center text-4xl font-bold text-white my-4 ">My Project</h2>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {ProjectData.map((project: Iproject) => {
          return <ProjectCart key={project.id} title={project.title} description={project.description} imgUrl={project.image} gitUrl={project.gitUrl} previewUrl={project.previewUrl} />;
        })}
      </div>
    </div>
  );
};

export default ProjectsSection;
