import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const HeroSection = () => {
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
    <section className="w-full min-h-screen flex flex-col justify-center items-center relative overflow-hidden shadow-xl shadow-cyan-500/50">
      <FuzzyOverlay />
      <div className="h-screen w-full max-w-7xl text-white flex flex-col justify-center px-8 lg:px-16 gap-3">
        <h1 className="text-4xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-800 via-sky-400 to-cyan-100 font-bold">
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
            preRenderFirstString={true}
            className="font-jetBrains text-2xl lg:text-3xl mb-6"
          />
        </h1>
        <TypeAnimation
          sequence={[
            "Hi there👋, Im a frontend developer who is very interested in technology related to web development, always improving my skills and enjoying in this role.",
            0,
          ]}
          omitDeletionAnimation={true}
          wrapper="h2"
          speed={80}
          className="text-xs text-start sm:text-sm md:text-base font-jetBrains leading-5 tracking-tight"
        />
        <span>
          <button
            onClick={() => (window.location.href = "#contact")}
            className="rounded-2xl border-2 border-dashed border-black bg-white px-6 py-3 font-semibold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none">
            Contact Me
          </button>
        </span>
      </div>
    </section>
  );
};

export default HeroSection;
