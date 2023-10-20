"use client";
import Link from "next/link";
import React from "react";
import { Ilinks } from "./Navbar";

const NavLink = ({ href, title }: Ilinks) => {
  return (
    <li className="block py-2 text-[#eaeaea] sm:text-md">
      <Link
        href={href}
        className="block py-2 pl-3 pr-4 text-[#eaeaea] text-xs sm:text-base"
      >
        {title}
      </Link>
    </li>
  );
};

export default NavLink;
