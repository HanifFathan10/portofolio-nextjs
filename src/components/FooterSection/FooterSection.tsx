"use client";
import React from "react";

const FooterSection = () => {
  return (
    <footer className="border border-t-[#33353F] border-l-transparent border-r-transparent text-white z-[9999]">
      <div className="container p-12 flex justify-between">
        <h1 className="text-xs sm:text-base md:text-lg font-semibold">
          Haniep Fathan
        </h1>
        <p className="text-xs md:text-lg sm:text-base text-slate-400">
          All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
