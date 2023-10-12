import React from "react";
import NavLink from "./NavLink";
import { Ilinks } from "./Navbar";

const MenuOverlay = ({ Links }: {Links: Ilinks[]}) => {
  return (
    <ul className="flex flex-col py-4 items-center">
      {Links.map((link: Ilinks, index: number) => {
        return <NavLink key={index} href={link.href} title={link.title} />;
      })}
    </ul>
  );
};

export default MenuOverlay;
