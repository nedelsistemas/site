"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import type { ComponentProps, ReactNode } from "react";

const easing = [0.21, 0.47, 0.32, 0.98] as const;

const presets = {
  fadeUp: {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0 },
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.96 },
    visible: { opacity: 1, scale: 1 },
  },
  slideLeft: {
    hidden: { opacity: 0, x: 32 },
    visible: { opacity: 1, x: 0 },
  },
  slideRight: {
    hidden: { opacity: 0, x: -32 },
    visible: { opacity: 1, x: 0 },
  },
} satisfies Record<string, Variants>;

export type RevealVariant = keyof typeof presets;

type MotionDivProps = Omit<
  ComponentProps<typeof motion.div>,
  "variants" | "initial" | "animate" | "whileInView" | "viewport"
>;

interface RevealProps extends MotionDivProps {
  children: ReactNode;
  variant?: RevealVariant;
  delay?: number;
  duration?: number;
  amount?: number;
  className?: string;
}

export function Reveal({
  children,
  variant = "fadeUp",
  delay = 0,
  duration = 0.6,
  amount = 0.2,
  className,
  ...rest
}: RevealProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      variants={presets[variant]}
      transition={{ duration, delay, ease: easing }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

interface RevealStaggerProps {
  children: ReactNode;
  staggerDelay?: number;
  initialDelay?: number;
  amount?: number;
  className?: string;
}

export function RevealStagger({
  children,
  staggerDelay = 0.08,
  initialDelay = 0.05,
  amount = 0.15,
  className,
}: RevealStaggerProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: initialDelay,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

interface RevealItemProps {
  children: ReactNode;
  variant?: RevealVariant;
  duration?: number;
  className?: string;
}

export function RevealItem({
  children,
  variant = "fadeUp",
  duration = 0.55,
  className,
}: RevealItemProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      variants={presets[variant]}
      transition={{ duration, ease: easing }}
    >
      {children}
    </motion.div>
  );
}
