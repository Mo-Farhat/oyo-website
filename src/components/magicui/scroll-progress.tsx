"use client";

import { cn } from "~/lib/utils";
import { motion, useScroll } from "motion/react";
import type { MotionProps } from "motion/react";
import React from "react";
interface ScrollProgressProps
  extends Omit<React.HTMLAttributes<HTMLElement>, keyof MotionProps> {
  // Custom properties can be added here
  color?: string;
  height?: string;
}

export const ScrollProgress = React.forwardRef<
  HTMLDivElement,
  ScrollProgressProps
>(({ className, color, height = "1px", ...props }, ref) => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      ref={ref}
      className={cn(
        "fixed inset-x-0 top-0 z-50 origin-left",
        !color && "bg-gradient-to-r from-[#648402] via-[#4A6202] to-[#3A4A01]",
        className,
      )}
      style={{
        scaleX: scrollYProgress,
        height: height,
        backgroundColor: color,
      }}
      {...props}
    />
  );
});

ScrollProgress.displayName = "ScrollProgress";

// Example usage:
// <ScrollProgress color="#ff0000" height="2px" />
// <ScrollProgress /> <!-- Uses default gradient and 1px height -->
