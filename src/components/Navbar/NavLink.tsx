"use client";
import Link from "next/link";
import React from "react";
import { Ilinks } from "./Navbar";

const NavLink = ({ href, title }: Ilinks) => {
  return (
    <li className="block w-full p-4 hover:border-l-2 hover:border-slate-800 transition duration-500">
      <Link href={href} className="block text-center text-white">
        {title}
      </Link>
    </li>
  );
};

export default NavLink;
