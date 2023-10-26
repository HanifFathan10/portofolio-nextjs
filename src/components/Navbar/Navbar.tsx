"use client";

import Link from "next/link";
import React, { useState } from "react";
import MenuOverlay from "./MenuOverlay";
import Image from "next/image";
import NavLink from "./NavLink";

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
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-transparent bg-opacity-90">
      <div className="flex flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link href={"/"} className="font-semibold text-lg text-white">
          Haniep Fathan
        </Link>
        <div className="block md:hidden">
          {!navbarOpen ? (
            <button onClick={() => setNavbarOpen(true)} className="flex items-center px-3 py-2 text-slate-200 hover:text-white hover:border-white">
              <Image src="/img/menu.png" alt="hamburger" width={30} height={30} />
            </button>
          ) : (
            <button onClick={() => setNavbarOpen(false)} id="closeImage" className="flex items-center px-3 py-2 text-slate-200 hover:text-white hover:border-white">
              <Image src="/img/cross-mark.png" alt="close" width={30} height={30} />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {NavLinks.map((link: Ilinks, index: number) => {
              return <NavLink key={index} href={link.href} title={link.title} />;
            })}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay Links={NavLinks} /> : null}
    </nav>
  );
};

export default Navbar;
