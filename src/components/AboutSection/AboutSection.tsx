"use client";
import Image from "next/image";
import React, { useState, useTransition } from "react";
import TabButton from "./TabButton";
import { Reveal } from "../Reveal";
import ListSkills from "./ListSkills";

const AboutSection = ({ id }: { id: string }) => {
  const [tab, setTab] = useState("skill");
  const [isPending, startTransition] = useTransition();

  const HandleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };

  const ListData = [
    {
      id: "HTML5",
      skill: "HTML5",
      svg: "/svg/html.svg",
    },
    {
      id: "CSS3",
      skill: "CSS3",
      svg: "/svg/css.svg",
    },
    {
      id: "JAVASCRIPT",
      skill: "JAVASCRIPT",
      svg: "/svg/javascript.svg",
    },
    {
      id: "BOOTSTRAP",
      skill: "BOOTSTRAP",
      svg: "/svg/bootstrap.svg",
    },
    {
      id: "TAILWIND",
      skill: "TAILWIND CSS",
      svg: "/svg/tailwind.svg",
    },
    {
      id: "REACT JS",
      skill: "REACT JS",
      svg: "/svg/react.svg",
    },
    {
      id: "NEXT JS",
      skill: "NEXT JS",
      svg: "/svg/next.svg",
    },
    {
      id: "TYPESCRIPT",
      skill: "TYPESCRIPT",
      svg: "/svg/typescript.svg",
    },
    {
      id: "NODE JS",
      skill: "NODE JS",
      svg: "/svg/node.svg",
    },
    {
      id: "EXPRESS JS",
      skill: "EXPRESS JS",
      svg: "/svg/express.svg",
    },
    {
      id: "MONGODB",
      skill: "MONGODB",
      svg: "/svg/mongodb.svg",
    },
  ];

  const TAB_DATA = [
    {
      title: "Skills",
      id: "skill",
      content: (
        <div className="flex gap-5 pl-2 font-semibold text-base text-[#eaeaea]">
          <div className="flex flex-col mt-2 font-semibold">
            {ListData.slice(0, 6).map((result, i) => (
              <ListSkills src={result.svg} title={result.skill} key={i} />
            ))}
          </div>
          <div className="flex flex-col mt-2 font-semibold">
            {ListData.slice(6, 11).map((result, i) => (
              <ListSkills src={result.svg} title={result.skill} key={i} />
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "Education",
      id: "education",
      content: (
        <ul className="pl-2 font-semibold">
          <li className="flex gap-2 mt-2">
            <Image src={"/img/bppi.webp"} alt="bppi" width={20} height={20} className="rounded-lg" />
            <h5>SMA BPPI BALEENDAH</h5>
          </li>
        </ul>
      ),
    },
  ];
  return (
    <Reveal>
      <section className="text-white mt-44 sm:mt-20 min-h-screen" id={id}>
        <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 justify-between">
          <Image src={"/img/about.webp"} alt="about" width={300} height={300} fetchPriority="high" className="rounded-lg border border-fuchsia-500 shadow-sky-500 shadow-2xl bg-cover bg-center overflow-hidden" />
          <div className="mt-20 md:mt-0 text-lg flex flex-col h-full">
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
            <div className="flex flex-row">{TAB_DATA.find((t) => t.id === tab)?.content}</div>
          </div>
        </div>
      </section>
    </Reveal>
  );
};

export default AboutSection;
