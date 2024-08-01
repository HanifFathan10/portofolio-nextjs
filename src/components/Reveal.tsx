"use client";
import { Ireveal } from "@/libs/interface";
import { useAnimation, useInView, motion } from "framer-motion";
import React, { useEffect, useRef } from "react";

export const Reveal = ({ children, className }: Ireveal) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
    <main ref={ref} className="w-full">
      <motion.div
        className={className}
        variants={{
          hidden: { opacity: 0, y: 80 },
          visible: { opacity: 1, y: 0 },
          exit: { opacity: 0, y: 20 },
        }}
        initial="hidden"
        animate={mainControls}
        exit="exit"
        transition={{
          duration: 0.9,
          ease: "easeInOut",
        }}>
        {children}
      </motion.div>
    </main>
  );
};
