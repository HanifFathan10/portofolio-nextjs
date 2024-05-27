"use client";
import Link from "next/link";
import React from "react";
import { Ilinks } from "./Navbar";

const NavLink = ({ href, title }: Ilinks) => {
  return (
    <li className="block w-full p-4 max-md:border-l max-md:border-slate-400 hover:border-b hover:border-slate-600 hover:transition hover:duration-500 ease-in-out hover:border-l-0">
      <Link href={href} className="block text-center text-white">
        {title}
      </Link>
    </li>
  );
};

export default NavLink;
