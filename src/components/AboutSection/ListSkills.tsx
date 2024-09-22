"use client";
import Image from "next/image";
import React from "react";

type Props = {
  src: string;
  title: string;
};

const ListSkills = ({ src, title }: Props) => {
  return (
    <div className="flex overflow-x-hidden justify-center items-center rounded-md mx-2  border text-xs gap-2 px-3 py-2 bg-gradient-to-br from-[#EBEBEB] to-white text-[#212121]">
      <Image src={src} alt="next" width={21} height={21} className="bg-transparent bg-center bg-cover object-contain" />
      <h1 className="text-xs font-semibold">{title}</h1>
    </div>
  );
};

export default ListSkills;
