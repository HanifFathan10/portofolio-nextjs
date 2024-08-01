"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Iproject } from "@/libs/interface";

const ProjectCart = (props: Iproject) => {
  const { imgUrl, title, description, gitUrl, previewUrl, techStack } = props;

  return (
    <section className="max-w-xl">
      <div
        className="h-52 w-full rounded-t-xl relative group"
        style={{
          background: `url(${imgUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundOrigin: "content-box",
          objectFit: "contain",
        }}>
        <div className="items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
          <Link href={`${gitUrl}`} className="mx-4">
            <Image
              src={"/svg/codebracket.svg"}
              alt="codebracket"
              width={30}
              height={30}
            />
          </Link>
          <Link href={`${previewUrl}`} className="mx-4">
            <Image
              src={"/svg/eyeoff.svg"}
              alt="eyeoff"
              width={30}
              height={30}
            />
          </Link>
        </div>
      </div>
      <div className="text-white rounded-b-xl space-y-2 bg-[#181818] py-6 px-4 h-48 flex flex-col justify-between">
        <div>
          <h2 className="text-xl font-semibold tracking-wide leading-10">
            {title}
          </h2>
          <p className="text-[#ADB7BE] text-xs tracking-wide">{description}</p>
        </div>
        <div className="flex gap-3">
          {techStack?.map((stack, i) => (
            <Image
              key={i}
              src={stack.src}
              alt={stack.alt}
              width={24}
              height={24}
              className={
                stack.id == "express" ? "rounded-full p-1 bg-[#ffffff]" : ""
              }
              fetchPriority="high"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectCart;
