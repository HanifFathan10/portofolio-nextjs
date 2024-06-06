"use client";
import React, { ReactNode, useRef, useState } from "react";
import { motion } from "framer-motion";

interface TabProps {
  children: ReactNode;
  setPosition: (position: {
    left: number;
    width: number;
    opacity: number;
  }) => void;
  href: string;
}

export const SlideTabs = ({ NavLinks }: any) => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <div className="menu hidden md:block md:w-auto" id="navbar">
      <ul
        onMouseLeave={() => {
          setPosition((pv) => ({
            ...pv,
            opacity: 0,
          }));
        }}
        className="relative mx-auto flex w-fit rounded-full border-2 border-black bg-white p-1">
        {NavLinks.map((item: any, i: number) => {
          return (
            <Tab setPosition={setPosition} href={item.href} key={i}>
              {item.title}
            </Tab>
          );
        })}

        <Cursor position={position} />
      </ul>
    </div>
  );
};

const Tab: React.FC<TabProps> = ({ children, setPosition, href }) => {
  const ref = useRef<HTMLLIElement>(null);

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref.current) return;

        const { width } = ref.current.getBoundingClientRect();

        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        });
      }}
      className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs text-white mix-blend-difference md:px-5 md:py-3 md:text-sm lg:text-base">
      <a href={href}>{children}</a>
    </li>
  );
};

const Cursor = ({
  position,
}: {
  position: {
    left: number;
    width: number;
    opacity: number;
  };
}) => {
  return (
    <motion.li
      animate={{
        ...position,
      }}
      className="absolute z-0 h-7 rounded-full bg-black md:h-12"
    />
  );
};
