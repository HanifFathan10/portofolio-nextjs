"use client";
import { useAnimation, useInView, motion } from "framer-motion";
import { useEffect, useRef } from "react";

interface Ireveal {
  children: JSX.Element;
}

export const Reveal = ({ children }: Ireveal) => {
  const ref = useRef(null);
  const IsInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    IsInView && mainControls.start("visible");
  }, [IsInView]);
  return (
    <main ref={ref}>
      <motion.div className="" variants={{ hidden: { opacity: 1, y: 75 }, visible: { opacity: 1, y: 0 } }} initial="hidden" animate={mainControls} transition={{ duration: 0.5, delay: 0.25 }}>
        {children}
      </motion.div>
    </main>
  );
};
