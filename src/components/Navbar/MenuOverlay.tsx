"use client";
import React from "react";
import NavLink from "./NavLink";
import { Ilinks } from "./Navbar";

const MenuOverlay = ({
  Links,
  className,
}: {
  Links: Ilinks[];
  className: React.ReactNode;
}) => {
  return (
    <div className={`fixed w-full flex md:hidden justify-end ${className}`}>
      <ul className="flex flex-col gap-3 p-5 min-h-screen w-[275px] justify-center items-center bg-black rounded-ss-xl text-[#eaeaea] divide-slate-600">
        {Links.map((link: Ilinks, index: number) => {
          return <NavLink key={index} href={link.href} title={link.title} />;
        })}
      </ul>
    </div>
  );
};

export default MenuOverlay;
