import { RefObject, useEffect, useRef } from "react";
import { frame, motion, useMotionValue, useSpring } from "framer-motion";

export function useFollowPointer(ref: RefObject<HTMLDivElement | null>) {
  const xPoint = useMotionValue(0);
  const yPoint = useMotionValue(0);
  const x = useSpring(xPoint, spring);
  const y = useSpring(yPoint, spring);

  useEffect(() => {
    if (!ref.current) return;

    const handlePointerMove = ({ clientX, clientY }: MouseEvent) => {
      const element = ref.current!;

      frame.read(() => {
        xPoint.set(clientX - element.offsetLeft - element.offsetWidth / 2);
        yPoint.set(clientY - element.offsetTop - element.offsetHeight / 2);
      });
    };

    window.addEventListener("pointermove", handlePointerMove);

    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, []);

  return { x, y };
}

const ball = {
  width: 30,
  height: 30,
  backgroundColor: "#0369a1",
  borderRadius: "50%",
};

export function DragPointer() {
  const ref = useRef<HTMLDivElement>(null);
  const { x, y } = useFollowPointer(ref);

  return (
    <motion.div
      ref={ref}
      style={{ ...ball, x, y }}
      className="hidden xl:block"
    />
  );
}

const spring = { damping: 3, stiffness: 50, restDelta: 0.001 };

export default DragPointer;
