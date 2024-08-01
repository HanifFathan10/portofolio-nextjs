"use client";

import React, { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import Image from "next/image";
import { Reveal } from "../Reveal";

const HoverTildCard = () => {
  return (
    <div className="grid w-full place-content-center">
      <TiltCard />
    </div>
  );
};

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

const TiltCard = () => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e: any) => {
    if (!ref.current) return [0, 0];

    const refCurrent = ref.current as Element;

    const rect = refCurrent.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <Reveal>
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transformStyle: "preserve-3d",
          transform,
        }}
        className="relative w-60 h-72 md:h-96 md:w-72 rounded-xl bg-gradient-to-br from-sky-500 to-sky-90">
        <Image
          className="absolute rounded-xl w-60 h-72 md:h-96 md:w-72 inset-4"
          src="/img/hanif.webp"
          alt="hanif"
          priority
          width={384}
          height={288}
          style={{
            objectFit: "cover",
            transform: "translateZ(75px)",
            transformStyle: "preserve-3d",
          }}
        />
      </motion.div>
    </Reveal>
  );
};

export default HoverTildCard;
