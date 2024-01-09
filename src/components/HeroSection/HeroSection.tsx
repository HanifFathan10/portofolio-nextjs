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
  const handleContact = () => {
    window.location.href = "#contact";
  };

  return (
    <section>
      <div className="flex max-md:flex-col min-h-screen items-center-center justify-center gap-16">
        <motion.div
          initial={{ x: "-10vw", y: "-10vw" }}
          animate={{ x: 0, y: 0 }}
          transition={{ duration: 1.5 }}
          className="col-span-4 place-self-center text-left"
        >
          <h1 className="text-white mb-4 text-2xl sm:text-3xl md:text-4xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-700 via-cyan-500 to-cyan-300">
              Hello, I'm
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Haniep Fathan Riziq",
                3000,
                "Software Engineer",
                2000,
                "Frontend Developer",
                2000,
              ]}
              wrapper="strong"
              speed={40}
              repeat={Infinity}
              className="font-jetBrains"
            />
          </h1>
          <p className="text-[#eaeaea] text-xs text-start sm:text-lg mb-6 font-jetBrains">
            Hello, welcome to my portofolio website. If you're interested in
            collaborating, please contact the details bellow or send a message
            on my Instagram😉
          </p>
          <div className="mb-14 lg:mb-0">
            <button
              onClick={handleContact}
              className="px-6 mx-2 py-4 w-full lg:w-fit rounded-full bg-gradient-to-br from-sky-700 to-cyan-400 hover:bg-emerald-300 text-white"
            >
              Contact Me
            </button>
            <button className="px-6 mx-2 py-4 w-full lg:w-fit rounded-full bg-transparent hover:bg-emerald-300 transition-all duration-300 text-white border border-white mt-3 hover:text-black">
              <a
                href="haniep-CV.pdf"
                download="haniep-CV.pdf"
                className="font-semibold"
              >
                Download CV
              </a>
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: "10vw", y: "10vw" }}
          animate={{ x: 0, y: 0 }}
          transition={{ duration: 1.1 }}
          className="col-span-5 place-self-center"
        >
          <div className="flex justify-center items-center rounded-full bg-transparent shadow-sky-400 shadow-2xl w-[240px] h-[240px] sm:w-[250px] sm:h-[250px] md:h-[300px] md:w-[300px] lg:w-[350px] lg:h-[350px] border border-fuchsia-300 overflow-hidden">
            <Image
              src="/img/hanif.webp"
              alt="hanif image"
              fetchPriority="high"
              width={180}
              height={180}
              className="lg:mt-7"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
