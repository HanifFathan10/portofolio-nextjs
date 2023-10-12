"use client";
import Image from "next/image";
import React, { useState, useTransition } from "react";
import TabButton from "./TabButton";
import { TbBrandTypescript } from "react-icons/tb";
import {SiNextdotjs, SiTailwindcss, SiJavascript, SiHtml5, SiCss3} from "react-icons/Si"
import {FaReact, FaBootstrap} from "react-icons/Fa"

const AboutSection = ({ id }: { id: any }) => {
  const [tab, setTab] = useState("skill");
  const [isPending, startTransition] = useTransition();

  const HandleTabChange = (id: any) => {
    startTransition(() => {
      setTab(id);
    });
  };

  const TAB_DATA = [
    {
      title: "Skills",
      id: "skill",
      content: (
        <ul className=" pl-2 font-semibold text-base text-[#eaeaea]">
          <li className="mt-4 flex gap-2 items-center">
            <SiHtml5 />
            <h5>HTML5</h5>
          </li>
          <li className="flex gap-2 items-center">
            <SiCss3 />
            <h5>CSS3</h5>
          </li>
          <li className="flex gap-2 items-center">
            <SiJavascript />
            <h5>JAVASCRIPT</h5>
          </li>
          <li className="flex gap-2 items-center">
            <FaBootstrap />
            <h5>BOOTSTRAP</h5>
          </li>
          <li className="flex gap-2 items-center">
            <SiTailwindcss />
            <h5>TAILWIND CSS</h5>
          </li>
          <li className="flex gap-2 items-center">
            <FaReact />
            <h5>REACT JS</h5>
          </li>
          <li className="flex gap-2 items-center">
            <SiNextdotjs />
            <h5>NEXT JS</h5>
          </li>
          <li className="flex gap-2 items-center">
            <TbBrandTypescript />
            <h5>TYPESCRIPT</h5>
          </li>
        </ul>
      ),
    },
    {
      title: "Education",
      id: "education",
      content: (
        <ul className="pl-2 font-semibold text-base">
          <li className="mt-3">
            <h5>SMA BPPI BALEENDAH</h5>
          </li>
        </ul>
      ),
    },
  ];
  return (
    <section className="text-white mt-44 sm:mt-20" id={id}>
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src={"/img/about.jpg"} alt="about" width={500} height={500} className="rounded-lg border border-fuchsia-500 shadow-fuchsia-400 shadow-lg" />
        <div className="mt-12 md:mt-0 text-lg flex flex-col h-full">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">About Me</h1>
          <p className="text-xs lg:text-sm">I'm Haniep Fathan Riziq, a recent high school graduate, I have a keen interest in the field of programming and have mastered the fundamentals of web development. I am proficient in the javascript programming language along with its frameworks and libraries. My goal is to become an expert in the Frontend role, and with my adaptive, creative, and innovative personality, I am confident that I can thrive in this industry</p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton selectTab={() => HandleTabChange("skill")} active={tab === "skill"}>
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton selectTab={() => HandleTabChange("education")} active={tab === "education"}>
              {" "}
              Education{" "}
            </TabButton>
          </div>
          <div className="">{TAB_DATA.find((t) => t.id === tab)?.content}</div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
