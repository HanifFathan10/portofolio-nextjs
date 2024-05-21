import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { jetBrains } from "@/app/layout";

const HeroSection = () => {
  const handleContact = () => {
    window.location.href = "#contact";
  };

  const FuzzyOverlay = () => {
    return (
      <motion.div
        initial={{ transform: "translateX(-10%) translateY(-10%)" }}
        animate={{
          transform: "translateX(10%) translateY(10%)",
        }}
        transition={{
          repeat: Infinity,
          duration: 0.2,
          ease: "linear",
          repeatType: "mirror",
        }}
        // You can download these PNGs here:
        // https://www.hover.dev/black-noise.png
        // https://www.hover.dev/noise.png
        style={{
          backgroundImage: 'url("/img/black-noise.png")',
          // backgroundImage: 'url("/noise.png")',
        }}
        className="pointer-events-none absolute -inset-[100%] opacity-[15%]"
      />
    );
  };

  return (
    <section className="w-full min-h-screen flex flex-col justify-center items-center relative overflow-hidden">
      <FuzzyOverlay />
      <div className="max-md:h-screen flex max-md:flex-col items-center justify-center gap-2 md:gap-16 px-8 lg:px-16">
        <motion.div
          initial={{ x: "-10vw", y: "-10vw" }}
          animate={{ x: 0, y: 0 }}
          transition={{ duration: 2 }}
          className="col-span-4 place-self-center text-left">
          <h1 className="text-white mb-4 text-4xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-800 via-sky-400 to-cyan-100">
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
                "Fullstack Developer",
                2000,
              ]}
              wrapper="strong"
              speed={40}
              repeat={Infinity}
              className={`${jetBrains.className} text-2xl lg:text-3xl`}
            />
          </h1>
          <p className="text-[#eaeaea] text-xs text-start sm:text-sm md:text-base mb-6 font-jetBrains">
            Hi there👋, I am a frontend developer who is very interested in
            technology related to web development, always improving my skills
            and enjoying this role.
          </p>
          <div className="mb-14 lg:mb-0">
            <button
              onClick={handleContact}
              className="rounded-2xl border-2 border-dashed border-black bg-white px-6 py-3 font-semibold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none">
              Contact Me
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
