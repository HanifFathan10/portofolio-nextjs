"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import React, { MouseEvent, useEffect, useState } from "react";
import MenuOverlay from "./MenuOverlay";
import { MotionConfig } from "framer-motion";
import { SlideTabs } from "./SlideTabs";

export interface Ilinks {
  title: string;
  href: string;
}

const NavLinks: Ilinks[] = [
  {
    title: "HOME",
    href: "/",
  },
  {
    title: "ABOUT",
    href: "#about",
  },
  {
    title: "PROJECT",
    href: "#project",
  },

  {
    title: "CONTACT",
    href: "#contact",
  },
];

const Navbar = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const handleClick = (e: any) => {
      if (e.target.closest(".toggle-button") === null) {
        setActive(false);
      }
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  const VARIANTS = {
    top: {
      open: {
        rotate: ["0deg", "0deg", "45deg"],
        top: ["35%", "50%", "50%"],
      },
      closed: {
        rotate: ["45deg", "0deg", "0deg"],
        top: ["50%", "50%", "35%"],
      },
    },
    middle: {
      open: {
        rotate: ["0deg", "0deg", "-45deg"],
      },
      closed: {
        rotate: ["-45deg", "0deg", "0deg"],
      },
    },
    bottom: {
      open: {
        rotate: ["0deg", "0deg", "45deg"],
        bottom: ["35%", "50%", "50%"],
        left: "50%",
      },
      closed: {
        rotate: ["45deg", "0deg", "0deg"],
        bottom: ["50%", "50%", "35%"],
        left: "calc(50% + 10px)",
      },
    },
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-transparent bg-opacity-90">
      <div className="flex flex-wrap items-center justify-between mx-auto px-3 py-[6px]">
        <Link
          href={"/"}
          className="font-normal tracking-widest text-lg text-white font-jetBrains">
          Haniep Fathan
        </Link>

        {/* Button Hamburger */}
        <MotionConfig
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}>
          <motion.button
            initial={false}
            animate={active ? "open" : "closed"}
            onClick={() => setActive((pv) => !pv)}
            className="relative block md:hidden h-16 w-16 rounded-full toggle-button">
            <motion.span
              variants={VARIANTS.top}
              className="absolute h-1 w-10 bg-white"
              style={{ y: "-50%", left: "50%", x: "-50%", top: "35%" }}
            />
            <motion.span
              variants={VARIANTS.middle}
              className="absolute h-1 w-10 bg-white"
              style={{ left: "50%", x: "-50%", top: "50%", y: "-50%" }}
            />
            <motion.span
              variants={VARIANTS.bottom}
              className="absolute h-1 w-5 bg-white"
              style={{
                x: "-50%",
                y: "50%",
                bottom: "35%",
                left: "calc(50% + 10px)",
              }}
            />
          </motion.button>
        </MotionConfig>

        {/* Menu */}
        <SlideTabs NavLinks={NavLinks} />
      </div>
      {active ? (
        <MenuOverlay
          Links={NavLinks}
          className="ml-0 transition-all duration-300 ease-in-out"
        />
      ) : (
        <MenuOverlay
          Links={NavLinks}
          className="ml-[275px] transition-all duration-500 ease-in-out"
        />
      )}
    </nav>
  );
};

export default Navbar;
