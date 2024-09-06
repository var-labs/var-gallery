"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

interface BoxRevealProps {
  children: JSX.Element;
  width?: "fit-content" | "100%";
  boxColor?: string;
  duration?: number;
}

export const BoxReveal = ({
  children,
  width = "fit-content",
  boxColor,
  duration,
}: BoxRevealProps) => {
  const mainControls = useAnimation();
  const slideControls = useAnimation();

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      slideControls.start("visible");
      mainControls.start("visible");
    } else {
      slideControls.start("hidden");
      mainControls.start("hidden");
    }
  }, [isInView, mainControls, slideControls]);

  return (
    <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }}>
       {/* <motion.div
        variants={{
          hidden: { opacity: 0, y: 75, zIndex: 10 },
          visible: { opacity: 1, y: 0, zIndex: 10 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: duration ? duration : 0.5, delay: 0.25 }}
        style={{
          position: "relative",
        }}
      >
        {children}
      </motion.div> */}

      <motion.div
        variants={{
          hidden: { left: 0, zIndex: 20 },
          visible: { left: "100%", zIndex: 20 },
        }}
        initial="hidden"
        animate={slideControls}
        transition={{ duration: duration ? duration : 0.5, ease: "easeIn" }}
        style={{
          position: "absolute",
          top: 4,
          bottom: 4,
          left: 0,
          right: 20,
          zIndex: 20,
          background: boxColor ? boxColor : "#5046e6",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 10, // Pastikan teks tetap di atas box reveal
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default BoxReveal;
