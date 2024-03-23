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
    <main ref={ref}>
      <motion.div
        className={className}
        variants={{
          hidden: { opacity: 1, y: 380 },
          visible: { opacity: 1, y: 50 },
          exit: { opacity: 1, y: 200 },
          initial: { opacity: 0, y: 0 },
          animate: { opacity: 1, y: 250 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 1, delay: 0.5 }}>
        {children}
      </motion.div>
    </main>
  );
};
