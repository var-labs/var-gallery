"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { GradientBackground } from "../home/home-header/gradientBackground";

interface ProjectCardProps {
  title: string;
  description: string;
  imgSrc: string;
  width: number;
  height: number;
  link: string;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, imgSrc, width, height, link, index }) => (
  <div className={`flex flex-col items-center ${index % 2 === 0 ? "self-start" : "self-end mt-36"}`}>
      <div className="bg-transparant">
        <div className={`relative w-${width} h-${height}`}>
        <GradientBackground>

          <Image src={imgSrc} alt={title} width={width} height={height} className="object-cover" loading="lazy" />
    </GradientBackground>
        
        </div>
        <div className="w-full max-w-7xl mt-8">
          <div className="flex justify-between items-center px-9">
            <div className="flex flex-col">
              <h1 className="font-semibold text-[20px] mb-8">{title}</h1>
              <p className="font-medium text-[14px] mb-4">{description}</p>
            </div>
            <div>
              <Link legacyBehavior href={link}>
                <a className="border px-9 py-2 rounded-full hover:bg-gray-400">Details</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
  </div>
);

export default ProjectCard;
