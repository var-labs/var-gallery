"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatedRoundedGradient } from "@/components/backgrounds/animated-rounded-gradient/AnimatedRoundedGradient";
import ProjectHeader from "./projectHeader";
import ProjectsList from "../../data/projectList";
import SeriouslyButton from "./seriouslyButton";
import { GradientBackground } from "../home-header/gradientBackground";
import portfolioData from "@/components/data/portfolioData";

const HomeProjects: React.FC = () => {
  return (
    <div className="pt-20 justify-center items-center text-white pb-80" id="projects">
      <ProjectHeader />
      <div className="relative flex flex-col items-center">
        <AnimatedRoundedGradient className="bottom-[calc(50%-var(--size)/2)] left-[calc(35%-var(--size))] animate-first" />
        <AnimatedRoundedGradient className="top-[calc(20%-var(--size)/2)] right-[calc(35%-var(--size))] animate-first" />
          <div className="bg-transparant">
            <div className="">
              <GradientBackground className="relative z-20">

                <Image src={"/assets/test.png"} alt="smkpurwosari" width={870} height={496} className="object-cover w-auto h-[296px] lg:w-[870px] lg:h-[496px]" loading="lazy"/>
              </GradientBackground>
            </div>

            <div className="w-full max-w-7xl mt-8 px-4 relative z-20">
              <div className="items-center px-2 ">

                <div className="flex flex-col">
                  <h1 className="font-semibold text-base md:text-3xl mb-8">SMK Negeri 1 Purwosari</h1>
                </div>

                <div className="flex justify-between">
                  <div className="flex flex-col">
                  <p className="font-medium text-xs md:text-lg mb-4">
                    Website <span className="mx-2">|</span> School
                  </p>
                  </div>
                  <div>
                  <Link legacyBehavior href={""}>
                    <a className="border px-9 py-2 rounded-full hover:bg-gray-400">Details</a>
                  </Link>
                  </div>
                </div>
              </div>
            </div>

          </div>
      </div>
        <ProjectsList
          projectData={[]}             
          portfolioData={portfolioData} 
          numOfProjects={6}            
          showProjects={false}         
          showZigzag={true}            
        />
      {/* <div className="relative z-20"> */}
      <AnimatedRoundedGradient className="top-[calc(10%-var(--size)/2)] right-[calc(95%-var(--size))] mt-36 lg:mt-0 animate-second w-[40%]" />
      <AnimatedRoundedGradient className="top-[calc(20%-var(--size)/2)] left-[calc(95%-var(--size))] mt-36 lg:mt-0 animate-second w-[50%]" />
      {/* <CircleBackground/> */}
      {/* </div> */}
      <div className="mih-h-[150px] w-full items-center justify-center relative">
      <SeriouslyButton/>
      </div>
    </div>
  );
};

export default HomeProjects;
