"use client";

import { motion, Variants } from "framer-motion";

import { cn } from "@/utils/cn";

interface WordFadeInProps {
  words: string;
  className?: string;
  delay?: number;
  globalDelay?: number;
  variants?: Variants;
}

export default function WordFadeIn({
  words,
  delay = 0.5,
  globalDelay = 0,
  variants = {
    hidden: { opacity: 0, y:-20 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: { delay: globalDelay + i * delay,
        type: "spring",
        stiffness: 50
       },
    }),
  },
  className,
}: WordFadeInProps) {
  const _words = words.split(" ");

  return (
    <motion.h1
      // variants={variants}
      initial="hidden"
      animate="visible"
      className={cn(
        "font-display text-center text-4xl font-bold tracking-[-0.02em] text-black drop-shadow-sm dark:text-white md:text-[96px] md:leading-[5rem]",
        className,
      )}
    >
      {_words.map((word, i) => (
        <motion.span key={i} variants={variants} custom={i}>
          {word}{" "}
        </motion.span>
      ))}
    </motion.h1>
  );
}
