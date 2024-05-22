"use client";
import Link from "next/link";
import React from "react";
import { Ilinks } from "./Navbar";

const NavLink = ({ href, title }: Ilinks) => {
  return (
    <li className="block py-1">
      <Link
        href={href}
        className="block py-2 pl-3 pr-4 hover:text-[#ffffff] text-[#e9e9e9e0] hover:shadow-lg hover:shadow-sky-400 rounded-md text-sm sm:text-base transition-all hover:skew-y-3">
        {title}
      </Link>
    </li>
  );
};

export default NavLink;
