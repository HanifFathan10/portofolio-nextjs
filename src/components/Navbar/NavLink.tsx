"use client";
import Link from "next/link";
import React from "react";
import { Ilinks } from "./Navbar";

const NavLink = ({ href, title }: Ilinks) => {
  return (
    <li className="block py-2">
      <Link
        href={href}
        className="block py-2 pl-3 pr-4 text-[#ffffff] hover:text-[#e9e9e9e0] text-xs sm:text-base transition-all"
      >
        {title}
      </Link>
    </li>
  );
};

export default NavLink;
