"use client";
import Image from "next/image";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

export interface TypeAnimationProps {
  sequence: Array<string | number>;
  wrapper?: string;
  repeat?: number;
  cursor?: boolean;
  className?: string;
}

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="col-span-7 place-self-center text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-5xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600">Hello, I'm</span>
            <br />
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Haniep Fathan Riziq",
                3000, // wait 1s before replacing "Mice" with "Hamsters"
                "FRONTEND DEVELOPER",
                2000,
                "FRONTEND ENGINEER",
                2000,
                "FULLSTACK DEVELOPER",
                1500,
              ]}
              wrapper="span"
              speed={40}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#eaeaea] text-xs text-start sm:text-lg mb-6 lg:text-xl">Hello, welcome to my portofolio website. If you're interested in collaborating, please contact the details bellow or send a direct message on my Instagram😉</p>
          <div className="mb-14 lg:mb-0">
            <button className="px-6 mx-2 py-4 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-emerald-300 text-white">Contact Me</button>
            <button className="px-6 mx-2 py-4 w-full sm:w-fit rounded-full bg-transparent hover:bg-emerald-300 text-white border border-white mt-3 ">Download CV</button>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="col-span-5 place-self-center mt-4 lg:mt-0">
          <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] ">
            <Image src="/img/hanif.png" alt="hanif image" className="relative transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" width={250} height={250} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
