import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import DragPointer from "../DragPointer";

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
    <header className="w-full min-h-screen flex flex-col justify-center items-center relative overflow-hidden shadow-xl shadow-cyan-500/50">
      <FuzzyOverlay />
      <DragPointer />

      <div className="max-md:h-screen flex max-md:flex-col items-center justify-center gap-2 md:gap-16 px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="col-span-4 place-self-center text-left max-w-[1200px]"
        >
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
            className="text-white mb-4 text-4xl"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-800 via-sky-400 to-cyan-100 font-bold">
              Hello, I'm
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Haniep Fathan Riziq",
                3000,
                "Informatics Engineering Student",
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
              className="text-2xl lg:text-3xl"
            />
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
            className="text-[#eaeaea] text-xs text-start sm:text-sm md:text-base mb-6 tracking-wide"
          >
            Hi there👋, now I'm Informatics Engineering Student at Universitas
            Kebangsaan Republic Indonesia and I'm very interested in technology
            related to web development or mobile app development, always
            improving my skills and enjoying this role, and also a tech
            enthusiast.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.9 }}
            className="mb-14 lg:mb-0"
          >
            <motion.button
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => (window.location.href = "#contact")}
              className="rounded-2xl border-2 border-dashed border-black bg-white px-6 py-3 font-semibold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none"
            >
              Contact Me
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </header>
  );
};

export default HeroSection;
