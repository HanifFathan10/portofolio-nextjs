"use client";
import Image from "next/image";
import React from "react";

type Props = {
  src: string;
  title: string;
};

const ListSkills = ({ src, title }: Props) => {
  return (
    <div className="flex overflow-x-hidden justify-center rounded-xl mx-2 shadow-md border text-[12px] sm:text-xs md:text-base gap-2 px-3 py-2 bg-[#ffffff] text-[#212121]">
      <Image
        src={src}
        alt="next"
        width={16}
        height={16}
        className="bg-transparent"
      />
      <h1 className="md:text-xs font-bold">{title}</h1>
    </div>
  );
};

export default ListSkills;
