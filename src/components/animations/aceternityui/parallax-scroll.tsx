"use client";
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/utils/cn";

export const ParallaxScroll = ({
  projects,
  className,
}: {
    projects: {
        title: string;
        description: string;
        imgSrc: string;
        width: number;
        height: number;
        link: string;
    }[];
  className?: string;
}) => {
  const gridRef = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    container: gridRef, 
    offset: ["start start", "end start"], 
  });

  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200]);


  const third = Math.ceil(projects.length / 2);

  const firstPart = projects.slice(0, third);
  const secondPart = projects.slice(third, 2 * third);


  return (
    <div
      className={cn("h-[40rem] items-start overflow-y-auto w-full", className)}
      ref={gridRef}
    >
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start  max-w-5xl mx-auto gap-10 py-40 px-10">
        <div className="grid gap-10">
          {firstPart.map((project, idx) => (
            <motion.div
              style={{ y: translateFirst }} // Apply the translateY motion value here
              key={"grid-1" + idx}
            >
              <Image
                src={project.imgSrc}
                className="h-80 w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0"
                height={project.height}
                width={project.width}
                alt={project.title}
              />
            </motion.div>
          ))}
        </div>
        <div className="grid gap-10">
          {secondPart.map((project, idx) => (
            <motion.div style={{ y: translateSecond }} key={"grid-2" + idx}>
              <Image
                src={project.imgSrc}
                className="h-80 w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0"
                height={project.height}
                width={project.width}
                alt={project.title}
              />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};