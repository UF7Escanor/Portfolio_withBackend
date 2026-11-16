import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export default function GlobalCursor() {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const smoothX = useSpring(mouseX, {
    stiffness: 150,
    damping: 20,
    mass: 0.4,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 150,
    damping: 20,
    mass: 0.4,
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      style={{
        x: smoothX,
        y: smoothY,
        translateX: "-50%",
        translateY: "-50%",
      }}
      className="fixed top-0 left-0 w-4 h-4 bg-gradient-to-r from-[#00F5FF] to-[#3B82F6] rounded-full pointer-events-none z-[9999] shadow-[0_0_18px_rgba(0,245,255,0.9)]"
    />
  );
}
