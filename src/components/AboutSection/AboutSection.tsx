"use client";
import Image from "next/image";
import React, { useState, useTransition } from "react";
import TabButton from "./TabButton";

const AboutSection = ({ id }: {id: any}) => {
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
        <ul className="list-disc pl-2 font-semibold text-base">
          <li className="mt-3">
            <h5>HTML5</h5>
          </li>
          <li>
            <h5>CSS3</h5>
          </li>
          <li>
            <h5>JAVASCRIPT DASAR</h5>
          </li>
          <li>
            <h5>JAVASCRIPT LANJUTAN/ES6</h5>
          </li>
          <li>
            <h5>BOOTSTRAP</h5>
          </li>
          <li>
            <h5>TAILWIND CSS</h5>
          </li>
          <li>
            <h5>REACT JS</h5>
          </li>
          <li>
            <h5>NEXT JS</h5>
          </li>
          <li>
            <h5>TYPESCRIPT</h5>
          </li>
        </ul>
      ),
    },
    {
      title: "Education",
      id: "education",
      content: (
        <ul className="list-disc pl-2 font-semibold text-base">
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
          <h1 className="text-4xl font-bold text-white mb-4">About Me</h1>
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
