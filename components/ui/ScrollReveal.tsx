"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { type ReactNode } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  withScale?: boolean;
} & Omit<HTMLMotionProps<"div">, "initial" | "whileInView" | "viewport" | "transition">;

export function ScrollReveal({
  children,
  className,
  delay = 0,
  withScale = false,
  ...rest
}: ScrollRevealProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
        ...(withScale && { scale: 1.05 }),
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        ...(withScale && { scale: 1 }),
      }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, ease: EASE, delay }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

export const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: EASE },
  },
};
