"use client";
import React from "react";
import NavLink from "./NavLink";
import { Ilinks } from "./Navbar";

const MenuOverlay = ({ Links }: { Links: Ilinks[] }) => {
  return (
    <div className="w-full flex justify-end">
      <ul className="flex flex-col h-full w-32 justify-center items-center bg-gradient-to-br from-purple-600 rounded-md mr-6 text-[#eaeaea]">
        {Links.map((link: Ilinks, index: number) => {
          return <NavLink key={index} href={link.href} title={link.title} />;
        })}
      </ul>
    </div>
  );
};

export default MenuOverlay;
