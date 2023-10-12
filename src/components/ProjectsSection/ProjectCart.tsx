"use client";
import React from "react";
import { Iproject } from "./ProjectsSection";
import Link from "next/link";
import { HiCodeBracket } from "react-icons/hi2";
import { AiOutlineEye } from "react-icons/ai";

const ProjectCart = ({ imgUrl, title, description, gitUrl, previewUrl }: Iproject) => {
  return (
    <div>
      <div className="h-52 md:h-72 rounded-t-xl relative group" style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}>
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
          <Link href={`${gitUrl}`} className="mx-4">
            <HiCodeBracket className="h-10 w-10 text-[#ADB7BE] hover:text-white" />
          </Link>
          <Link href={`${previewUrl}`} className="mx-4">
            <AiOutlineEye className="h-10 w-10 text-[#ADB7BE] hover:text-white" />
          </Link>
        </div>
      </div>
      <div className="text-white rounded-b-xl bg-[#181818] py-6 px-4">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-[#ADB7BE]">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCart;
