"use client";
import Image from "next/image";
import React, { useState, useTransition } from "react";
import TabButton from "./TabButton";
// import { Reveal } from "../Reveal";
import ListSkills from "./ListSkills";
import Marquee from "react-fast-marquee";
import { jetBrains } from "@/app/layout";

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
    {
      id: "PHP",
      skill: "PHP",
      svg: "/svg/php.svg",
    },
    {
      id: "REACT-ROUTER",
      skill: "REACT ROUTER",
      svg: "/svg/react-router.svg",
    },
    {
      id: "REACT-REDUX",
      skill: "REACT REDUX",
      svg: "/svg/react-redux.svg",
    },
    {
      id: "ZUSTAND",
      skill: "ZUSTAND",
      svg: "/svg/zustand.svg",
    },
    {
      id: "FRAMER",
      skill: "FRAMER MOTION",
      svg: "/svg/framer.svg",
    },
  ];

  const TAB_DATA = [
    {
      title: "Skills",
      id: "skill",
      content: (
        <React.Fragment>
          <h1 className="font-bold my-2">My Coding Skills.</h1>
          <div
            className={`max-w-[246px] sm:max-w-xl flex flex-col overflow-x-hidden space-y-1 ${jetBrains.className}`}
          >
            <Marquee
              autoFill={true}
              speed={30}
              pauseOnHover={true}
              className="py-2 overflow-x-hidden"
            >
              {ListData.map((result, i) => (
                <ListSkills src={result.svg} title={result.skill} key={i} />
              ))}
            </Marquee>
            <Marquee
              autoFill={true}
              speed={30}
              pauseOnHover={true}
              className="py-2 overflow-x-hidden"
              direction="right"
            >
              {ListData.map((result, i) => (
                <ListSkills src={result.svg} title={result.skill} key={i} />
              ))}
            </Marquee>
          </div>
        </React.Fragment>
      ),
    },
    {
      title: "Education",
      id: "education",
      content: (
        <ul className="pl-2 font-semibold">
          <li className="flex gap-2 mt-2">
            <Image
              src={"/img/bppi.webp"}
              alt="bppi"
              width={20}
              height={20}
              fetchPriority="high"
              className="rounded-lg"
            />
            <h5>SMA BPPI BALEENDAH</h5>
          </li>
        </ul>
      ),
    },
  ];
  return (
    <section className="text-white mt-44 mb-20 sm:mt-20" id={id}>
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 justify-between">
        <Image
          src={"/img/about.webp"}
          alt="about"
          width={300}
          height={300}
          fetchPriority="high"
          className="rounded-lg border border-fuchsia-500 shadow-sky-500 shadow-2xl bg-cover bg-center overflow-hidden"
        />
        <div className="mt-20 md:mt-0 text-lg flex flex-col">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            About Me
          </h1>
          <p className={`text-xs lg:text-sm ${jetBrains.className}`}>
            Hello, I am a Software Engineer with a strong focus on Frontend
            development. Able of building a responsive and user-friendly
            interface that prioritizes application performance.
          </p>
          <div className="flex justify-start mt-8">
            <TabButton
              selectTab={() => HandleTabChange("skill")}
              active={tab === "skill"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => HandleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
          </div>
          {TAB_DATA.find((t) => t.id === tab)?.content}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
