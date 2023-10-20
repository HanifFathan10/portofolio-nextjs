"use client";
import React from "react";

const TabButton = ({
  active,
  selectTab,
  children,
}: {
  active: any;
  selectTab: any;
  children: any;
}) => {
  const buttonClasses = active
    ? "text-white border-b border-purle-500"
    : "text-[#ADB7BE]";
  return (
    <button
      onClick={selectTab}
      className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}
    >
      {children}
    </button>
  );
};

export default TabButton;
