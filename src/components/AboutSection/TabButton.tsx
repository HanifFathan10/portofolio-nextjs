"use client";
import React from "react";

const TabButton = ({
  active,
  selectTab,
  children,
}: {
  active: boolean;
  selectTab: () => void;
  children: React.ReactNode;
}) => {
  const buttonClasses = active
    ? "text-white border-b border-purle-500"
    : "text-[#ADB7BE]";
  return (
    <button
      onClick={selectTab}
      className={`font-semibold hover:text-white ${buttonClasses}`}>
      {children}
    </button>
  );
};

export default TabButton;
