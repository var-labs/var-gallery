"use client"
import React from "react";
import { Bungee } from "next/font/google";
import { motion } from "framer-motion";
import { AnimatedRoundedGradient } from "@/components/backgrounds/animated-rounded-gradient/AnimatedRoundedGradient";
import WordFadeIn from "@/components/animations/magicui/word-fade-in";
import BoxReveal from "@/components/animations/magicui/box-reveal-edit";

const bungee = Bungee({
  subsets: ["latin"],
  weight: ["400"],
}); 

const HomeHeader = () => {
  const text = "A passion for realizing your desire for \nfunctional work and aesthetic design.".split(" ");

  const leftText = ('Driven by words, we grow and thrive, \ndetermined to prove that we can \nsucceed.').split(" ")
  
  return (
    <div className="h-[54rem] w-full dark:bg-[#020505] bg-[#020505] dark:bg-grid-white/[0.2] bg-grid-white/[0.2] relative flex items-center justify-center select-none">

      <AnimatedRoundedGradient className="top-[calc(20%-var(--size)/2)] left-[calc(35%-var(--size))] animate-first" />
      <AnimatedRoundedGradient className="bottom-[calc(50%-var(--size)/2)] right-[calc(35%-var(--size))] animate-first" />
      
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-[#020505] [mask-image:radial-gradient(ellipse_at_center,transparent_0%,black)]"></div>
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-[#020505] [mask-image:radial-gradient(ellipse_at_center,transparent_0%,black)]"></div>

      <div
        className={`text-center relative z-35 bg-clip-text text-transparent text-white leading-none ${bungee.className}`}
      >
        <WordFadeIn words="GROWING" globalDelay={0} className="-mt-16 mb-5 text-white" />
        <WordFadeIn words="EVOLVING" globalDelay={0.7} className="mb-5 text-white" />
        <div className="mb-5 flex items-center justify-center">
          <BoxReveal boxColor={"#548187"} duration={0.9} >
            {/* <div className="bg-[#548187] text-[96px] rounded-3xl p-2 mr-3 text-white">
              PROVING
            </div> */}
            <WordFadeIn
              words="PROVING"
              globalDelay={0.9}
              className="bg-[#548187] rounded-3xl p-2 mr-3 text-white"
              />
            </BoxReveal>
          <WordFadeIn words="OUR" globalDelay={1.1} className="text-white" />
        </div>
        <WordFadeIn words="WORTH." globalDelay={1.3} className="mb-5 text-white" />
      </div>

      <div className="absolute bottom-24 left-0 right-0 p-5 flex justify-between text-white text-[16px] font-[500] mx-[122px]">
        <p className="w-1/2 text-left">
          {text.map((el, i) => (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.25,
              delay: i / 8,
            }}
            key={i}
          >
            {el === "for" && i + 1 === 7 ?  <>{el + " "}<br/></> :  <>{el + " "}</>}
          </motion.span>
        ))}
        </p>
        <p className="w-1/2 text-right">
        {leftText.map((el, i) => (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.25,
              delay: i / 10,
            }}
            key={i}
          >
            {(el === "thrive," && i + 1 === 7) || (el === "can" && i + 1 === 13)  ?  <>{el + " "}<br/></> :  <>{el + " "}</>}
          </motion.span>
        ))}
        </p>
      </div>
    </div>
  );
};

export default HomeHeader;