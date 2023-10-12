"use client";
import Image from "next/image";
import React, { useState, useTransition } from "react";
import TabButton from "./TabButton";

const AboutSection = () => {
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
        <ul className="list-disc pl-2">
          <li>
            <h1>HTML5</h1>
          </li>
          <li>
            <h1>CSS3</h1>
          </li>
          <li>
            <h1>JAVASCRIPT DASAR</h1>
          </li>
          <li>
            <h1>JAVASCRIPT LANJUTAN/ES6</h1>
          </li>
          <li>
            <h1>BOOTSTRAP</h1>
          </li>
          <li>
            <h1>TAILWIND CSS</h1>
          </li>
          <li>
            <h1>REACT JS</h1>
          </li>
          <li>
            <h1>NEXT JS</h1>
          </li>
          <li>
            <h1>TYPESCRIPT</h1>
          </li>
        </ul>
      ),
    },
    {
      title: "Education",
      id: "education",
      content: (
        <ul className="list-disc pl-2">
          <li>
            <h1>SMA BPPI BALEENDAH</h1>
          </li>
        </ul>
      ),
    },
  ];
  return (
    <section className="text-white mt-44 sm:mt-0">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src={"/img/about.jpg"} alt="about" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-lg flex flex-col h-full">
          <h1 className="text-4xl font-bold text-white mb-4">About Me</h1>
          <p className="text-base lg:text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus laborum consequatur aliquam fuga voluptatibus nesciunt voluptates autem saepe, officiis, sequi quas in. Molestias minima eaque cumque, doloremque eum officia harum!</p>
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
