"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface RevealWrapperProps {
  children: ReactNode;
  delay?: number;
  width?: "auto" | "full" | "100%";
}

const RevealWrapper = ({ children, delay = 0, width = "auto" }: RevealWrapperProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ 
        duration: 0.8, 
        ease: [0.215, 0.61, 0.355, 1], // Quintic ease-out for a more organic feel
        delay: delay
      }}
      style={{ width }}
    >
      {children}
    </motion.div>
  );
};

export default RevealWrapper;
