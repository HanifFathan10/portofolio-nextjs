import Image from "next/image";
import React from "react";

type Props = {
  src: string;
  title: string;
};

const ListSkills = ({ src, title }: Props) => {
  return (
    <div className="flex flex-col mt-2">
      <div className="flex gap-2 mt-2">
        <Image src={src} alt="next" width={20} height={20} className="bg-transparent" />
        <h1 className="text-[12px] md:text-base">{title}</h1>
      </div>
    </div>
  );
};

export default ListSkills;
