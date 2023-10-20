"use client";
import Image from "next/image";
import React, { useState, useTransition } from "react";
import TabButton from "./TabButton";

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
        <ul className="flex gap-2 pl-2 font-semibold text-base text-[#eaeaea]">
          <div className="flex flex-col justify-center mt-4">
            <li className="flex gap-2 items-center">
              <Image src={"/svg/html.svg"} alt="html" width={20} height={20} />
              <h5 className="text-xs md:text-base">HTML5</h5>
            </li>
            <li className="flex gap-2 mt-2">
              <Image src={"/svg/css.svg"} alt="css" width={20} height={20} />
              <h5 className="text-xs md:text-base">CSS3</h5>
            </li>
            <li className="flex gap-2 mt-2">
              <Image
                src={"/svg/javascript.svg"}
                alt="javascript"
                width={20}
                height={20}
              />
              <h5 className="text-xs md:text-base">JAVASCRIPT</h5>
            </li>
            <li className="flex gap-2 mt-2">
              <Image
                src={"/svg/bootstrap.svg"}
                alt="bootstrap"
                width={20}
                height={20}
              />
              <h5 className="text-xs md:text-base">BOOTSTRAP</h5>
            </li>
            <li className="flex gap-2 mt-2">
              <Image
                src={"/svg/tailwind.svg"}
                alt="tailwind"
                width={20}
                height={20}
              />
              <h5 className="text-xs md:text-base">TAILWIND CSS</h5>
            </li>
            <li className="flex gap-2 mt-2">
              <Image
                src={"/svg/react.svg"}
                alt="react"
                width={20}
                height={20}
              />
              <h5 className="text-xs md:text-base">REACT JS</h5>
            </li>
          </div>
          <div className="flex flex-col mt-2 ml-2">
            <li className="flex gap-2 mt-2">
              <Image
                src={"/svg/next.svg"}
                alt="next"
                width={20}
                height={20}
                className="bg-[#eaeaea] rounded-xl p-[2px] "
              />
              <h5 className="text-xs md:text-base">NEXT JS</h5>
            </li>
            <li className="flex gap-2 mt-2">
              <Image
                src={"/svg/typescript.svg"}
                alt="typescript"
                width={20}
                height={20}
              />
              <h5 className="text-xs md:text-base">TYPESCRIPT</h5>
            </li>
            <li className="flex gap-2 mt-2">
              <Image src={"/svg/node.svg"} alt="node" width={20} height={20} />
              <h5 className="text-xs md:text-base">NODE JS</h5>
            </li>
            <li className="flex gap-2 mt-2">
              <Image
                src={"/svg/express.svg"}
                alt="express"
                width={20}
                height={20}
                className="bg-[#eaeaea] rounded-xl p-[2px] "
              />
              <h5 className="text-xs md:text-base">EXPRESS JS</h5>
            </li>
            <li className="flex gap-2 mt-2">
              <Image
                src={"/svg/mongodb.svg"}
                alt="mongodb"
                width={20}
                height={20}
              />
              <h5 className="text-xs md:text-base">MONGODB</h5>
            </li>
          </div>
        </ul>
      ),
    },
    {
      title: "Education",
      id: "education",
      content: (
        <ul className="pl-2 font-semibold">
          <li className="flex gap-2 mt-2">
            <Image
              src={"/img/bppi.jpeg"}
              alt="bppi"
              width={23}
              height={20}
              className="rounded-lg"
            />
            <h5 className="text-md">SMA BPPI BALEENDAH</h5>
          </li>
        </ul>
      ),
    },
  ];
  return (
    <section className="text-white mt-44 sm:mt-20" id={id}>
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 justify-between">
        <Image
          src={"/img/about.jpg"}
          alt="about"
          width={500}
          height={500}
          className="rounded-lg border border-fuchsia-500 shadow-fuchsia-400 shadow-lg"
        />
        <div className="mt-20 md:mt-0 text-lg flex flex-col h-full">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            About Me
          </h1>
          <p className="text-xs lg:text-sm">
            I'm Haniep Fathan Riziq, a recent high school graduate, I have a
            keen interest in the field of programming and have mastered the
            fundamentals of web development. I am proficient in the javascript
            programming language along with its frameworks and libraries. My
            goal is to become an expert in the Frontend role, and with my
            adaptive, creative, and innovative personality, I am confident that
            I can thrive in this industry
          </p>
          <div className="flex flex-row justify-start mt-8">
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
          <div className="flex flex-row">
            {TAB_DATA.find((t) => t.id === tab)?.content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
