"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import React, { MouseEvent, useEffect, useState } from "react";
import MenuOverlay from "./MenuOverlay";
import NavLink from "./NavLink";
import { MotionConfig } from "framer-motion";

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
      <div className="flex flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link
          href={"/"}
          className="font-semibold text-lg text-white font-jetBrains">
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
            className="relative block md:hidden h-20 w-20 rounded-full bg-white/0 transition-colors toggle-button">
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
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex md:p-0 md:flex-row md:space-x-8 mt-0">
            {NavLinks.map((link: Ilinks, index: number) => {
              return (
                <NavLink key={index} href={link.href} title={link.title} />
              );
            })}
          </ul>
        </div>
      </div>
      {active ? <MenuOverlay Links={NavLinks} /> : null}
    </nav>
  );
};

export default Navbar;
