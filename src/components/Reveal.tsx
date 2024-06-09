"use client";
import { Ireveal } from "@/libs/interface";
import { useAnimation, useInView, motion } from "framer-motion";
import React, { useEffect, useRef } from "react";

export const Reveal = ({ children, className }: Ireveal) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const IsInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    IsInView && mainControls.start("visible");
  }, [IsInView]);
  
  return (
    <main ref={ref} className="w-full">
      <motion.div
        className={className}
        variants={{
          hidden: { opacity: 0, y: 380 },
          visible: { opacity: 1, y: 50 },
          exit: { opacity: 0, y: 200 },
        }}
        initial="hidden"
        animate={mainControls}
        exit="exit"
        transition={{
          duration: 1.5,
          delay: 0.8,
          ease: [0.42, 0, 0.58, 1],
        }}>
        {children}
      </motion.div>
    </main>
  );
};
