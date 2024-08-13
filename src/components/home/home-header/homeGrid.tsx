"use client"
import React from "react";
import { Bungee } from "next/font/google";
import { AnimatedRoundedGradient } from "@/components/backgrounds/animated-rounded-gradient/AnimatedRoundedGradient";
import WordFadeIn from "@/components/animations/magicui/word-fade-in";
import BoxReveal from "@/components/animations/magicui/box-reveal";


const bungee = Bungee({
  subsets: ["latin"],
  weight: ["400"],
}); 

const HomeHeader = () => {

  return (
    <div className="h-[54rem] w-full dark:bg-[#020505] bg-[#020505] dark:bg-grid-white/[0.2] bg-grid-white/[0.2] relative flex items-center justify-center select-none">
      <AnimatedRoundedGradient className="top-[calc(20%-var(--size)/2)] left-[calc(35%-var(--size))] animate-first" />
      <AnimatedRoundedGradient className="bottom-[calc(50%-var(--size)/2)] right-[calc(35%-var(--size))] animate-first" />
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-[#020505] [mask-image:radial-gradient(ellipse_at_center,transparent_0%,black)]"></div>
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-[#020505] [mask-image:radial-gradient(ellipse_at_center,transparent_0%,black)]"></div>
      <div
        className={`text-center relative z-40 bg-clip-text text-transparent text-white leading-none ${bungee.className}`}
      >
        <WordFadeIn words="GROWING" globalDelay={0} className="-mt-16 mb-5 text-white" />
        <WordFadeIn words="EVOLVING" globalDelay={0.7} className="mb-5 text-white" />
        <p className="mb-5 flex items-center justify-center">

          <WordFadeIn
            words="PROVING"
            globalDelay={0.9}
            className="bg-[#548187] rounded-3xl p-2 mr-3 text-white"
            />{" "}
          <WordFadeIn words="OUR" globalDelay={1.1} className="text-white" />
        </p>
        <WordFadeIn words="WORTH." globalDelay={1.3} className="mb-5 text-white" />

      </div>

      <div className="absolute bottom-24 left-0 right-0 p-5 flex justify-between text-white text-[16px] font-[500] mx-[122px]">
        <p className="w-1/2 text-left">
          A passion for realizing your desire for <br /> functional work and
          aesthetic design.
        </p>
        <p className="w-1/2 text-right">
          Driven by words, we grow and thrive,
          <br /> determined to prove that we can <br /> succeed.
        </p>
      </div>
    </div>
  );
};

export default HomeHeader;