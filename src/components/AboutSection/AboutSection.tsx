"use client";
import Image from "next/image";
import React, { startTransition, useState } from "react";
import TabButton from "./TabButton";
import ListSkills from "./ListSkills";
import Marquee from "react-fast-marquee";
import HoverTildCard from "../Card/HoverTildCard";
import WaterDropGrid from "./WaterDropGrid";
import Link from "next/link";
import { SpringModal } from "./SpringModal";

const AboutSection = ({ id }: { id: string }) => {
  const [tab, setTab] = useState("skill");
  const [isOpen, setIsOpen] = useState(false);

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
          <h1 className="font-extralight text-xs my-2">What do I use?</h1>
          <div className="grid grid-rows-2 place-content-center space-y-1 jetBrains">
            <Marquee autoFill={true} speed={100} className=" py-2">
              {ListData.slice(0, 9).map((result, i) => {
                return (
                  <ListSkills src={result.svg} title={result.skill} key={i} />
                );
              })}
            </Marquee>
            <Marquee
              autoFill={true}
              speed={100}
              className=" py-2"
              direction="right">
              {ListData.slice(9, 18).map((result, i) => {
                return (
                  <ListSkills src={result.svg} title={result.skill} key={i} />
                );
              })}
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
            <Link
              href="https://sma.bppi.sch.id/"
              target="_blank"
              className="text-base hover:underline font-jetBrains">
              SMA BPPI BALEENDAH
            </Link>
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
                Internship at{" "}
                <Link
                  target="_blank"
                  href={"https://www.linkedin.com/company/kawan-kerja/"}
                  className="text-xs font-bold hover:underline jetBrains">
                  Kawan Kerja
                </Link>
              </p>
              <p className="text-xs font-extralight jetBrains">
                December 2023 - March 2024
              </p>
              <button onClick={() => setIsOpen(true)}>
                <img
                  src="/img/sertifikat-kawankerja.webp"
                  alt="kawankerja"
                  width={20}
                  height={20}
                  fetchPriority="high"
                  loading="lazy"
                  className="w-52 h-32 object-contain bg-center bg-cover rounded-md"
                />
              </button>
            </div>
          </li>
        </ul>
      ),
    },
  ];

  return (
    <section
      className="max-w-[1440px] grid grid-cols-1 md:grid-cols-2 gap-28 md:gap-6 place-self-center p-8 xl:gap-16 sm:py-16 xl:px-16 text-white mb-20 sm:mt-20"
      id={id}>
      <HoverTildCard />
      <WaterDropGrid>
        <div className="absolute w-full h-[400px] md:h-[360px] mt-20 md:mt-0 text-lg flex flex-col backdrop-brightness-50 rounded-xl">
          <h1 className="text-3xl md:text-4xl font-medium text-white mb-4">
            About Me
          </h1>
          <p className="text-xs lg:text-sm font-jetBrains -tracking-tight leading-relaxed">
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
      </WaterDropGrid>
      <SpringModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </section>
  );
};

export default AboutSection;
