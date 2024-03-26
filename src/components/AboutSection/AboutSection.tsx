"use client";
import Image from "next/image";
import React, { startTransition, useState } from "react";
import TabButton from "./TabButton";
import { Reveal } from "../Reveal";
import ListSkills from "./ListSkills";
import Marquee from "react-fast-marquee";
import { jetBrains } from "@/app/layout";

const AboutSection = ({ id }: { id: string }) => {
  const [tab, setTab] = useState("skill");

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
    {
      id: "CHAKRA",
      skill: "CHAKRA UI",
      svg: "/svg/chakraUI.svg",
    },
    {
      id: "LARAVEL",
      skill: "LARAVEL",
      svg: "/svg/laravel.svg",
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
            className={`grid grid-rows-2 place-content-center space-y-1 ${jetBrains.className}`}>
            <Marquee
              autoFill={true}
              speed={30}
              pauseOnHover={true}
              className=" py-2">
              {ListData.map((result, i) => (
                <ListSkills src={result.svg} title={result.skill} key={i} />
              ))}
            </Marquee>
            <Marquee
              autoFill={true}
              speed={30}
              pauseOnHover={true}
              className=" py-2"
              direction="right">
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
        <ul className=" font-semibold">
          <li className="flex gap-2 mt-2 items-center">
            <Image
              src={"/img/bppi.webp"}
              alt="bppi"
              width={20}
              height={20}
              fetchPriority="high"
              className="rounded-lg w-auto h-auto"
            />
            <h5>SMA BPPI BALEENDAH</h5>
          </li>
        </ul>
      ),
    },
    {
      title: "Experience",
      id: "experience",
      content: (
        <ul>
          <li className="flex gap-2">
            <div className="w-1 mt-3 h-48 bg-fuchsia-800 rounded shadow-md shadow-indigo-500"></div>
            <div>
              <h5 className="font-bold my-2">Frontend Developer</h5>
              <p className="text-xs">
                Internship at <span className="font-bold">Kawan Kerja</span>
              </p>
              <p className="text-xs font-extralight">
                Desember 2023 - March 2024
              </p>
              <img
                src="/img/sertifikat-kawankerja.jpg"
                alt="kawankerja"
                width={20}
                height={20}
                className="w-52 h-32 object-contain"
              />
            </div>
          </li>
        </ul>
      ),
    },
  ];
  return (
    <section
      className="md:grid md:grid-cols-2 gap-8 flex flex-col items-start p-8 xl:gap-16 sm:py-16 xl:px-16 justify-center text-white mb-20 sm:mt-20"
      id={id}>
      <Reveal>
        <Image
          src={"/img/about.webp"}
          alt="about"
          width={300}
          height={300}
          fetchPriority="high"
          className="rounded-lg border border-fuchsia-500 shadow-sky-500 shadow-2xl bg-cover bg-center place-self-center"
        />
      </Reveal>
      <Reveal>
        <div className="w-full mt-20 md:mt-0 text-lg flex flex-col ">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            About Me
          </h1>
          <p className={`text-xs lg:text-sm ${jetBrains.className}`}>
            Hello, I am a Software Engineer with a strong focus on Frontend
            development. Able of building a responsive and user-friendly
            interface that prioritizes application performance.
          </p>
          <div className="flex justify-start mt-8 gap-4">
            <TabButton
              selectTab={() => HandleTabChange("skill")}
              active={tab === "skill"}>
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => HandleTabChange("experience")}
              active={tab === "experience"}>
              {" "}
              Experience{" "}
            </TabButton>
            <TabButton
              selectTab={() => HandleTabChange("education")}
              active={tab === "education"}>
              {" "}
              Education{" "}
            </TabButton>
          </div>
          {TAB_DATA.find((t) => t.id === tab)?.content}
        </div>
      </Reveal>
    </section>
  );
};

export default AboutSection;
