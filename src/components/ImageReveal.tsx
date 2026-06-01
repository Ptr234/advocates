"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ImageRevealProps {
  children: ReactNode;
  delay?: number;
  direction?: "left" | "right" | "top" | "bottom";
  className?: string;
}

const ImageReveal = ({ children, delay = 0, direction = "left", className = "" }: ImageRevealProps) => {
  const revealVariants = {
    hidden: {
      left: direction === "left" ? 0 : "auto",
      right: direction === "right" ? 0 : "auto",
      top: direction === "top" ? 0 : "auto",
      bottom: direction === "bottom" ? 0 : "auto",
      width: direction === "left" || direction === "right" ? "100%" : "auto",
      height: direction === "top" || direction === "bottom" ? "100%" : "auto",
    },
    visible: {
      width: direction === "left" || direction === "right" ? "0%" : "auto",
      height: direction === "top" || direction === "bottom" ? "0%" : "auto",
    },
  };

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Content */}
      <motion.div
        initial={{ opacity: 0, scale: 1.1 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1], delay: delay + 0.1 }}
      >
        {children}
      </motion.div>

      {/* Curtain/Reveal Overlay */}
      <motion.div
        variants={revealVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1], delay: delay }}
        className="absolute inset-0 z-20 bg-gold"
        style={{
          left: direction === "left" ? 0 : "auto",
          right: direction === "right" ? 0 : "auto",
          top: direction === "top" ? 0 : "auto",
          bottom: direction === "bottom" ? 0 : "auto",
        }}
      />
    </div>
  );
};

export default ImageReveal;
