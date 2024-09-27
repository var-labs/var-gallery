'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Bungee } from 'next/font/google'
import { AnimatedRoundedGradient } from '../backgrounds/animated-rounded-gradient/AnimatedRoundedGradient';
import portfolioData from '../data/portfolioData';
import projectData from '../data/projectData';
import ProjectsList from '../data/projectList'

const bungee = Bungee({
    subsets: ["latin"],
    weight: ["400"],
  });
const ProjectPage = () => {
  return (
    <>
        <div className='text-[#fff] mb-[18rem]'>
            <div className={`text-center uppercase font-[400] text-[72px] relative z-auto bg-clip-text justify-center align-middle mt-[8rem] leading-none ${bungee.className}`}>
                <p className='mb-5'>Our Projects and </p>
                <p className='mb-5'>the <span className='bg-[#548187] px-1 rounded-3xl'>creations</span> we've </p>
                <p>made</p>
            </div>

            <div className='flex justify-between text-[#fff] text-[16px] font-[500] px-[9rem] py-10'>
              <p className='w-1/2 text-left'>We strive to deliver the best according to clients' requests,<br /> creating beautiful works.</p>
              <p className='w-1/2 text-right'>With our extensive capabilities and dedication, we strive to <br /> provide the best service tailored to your needs.</p>
            </div>

            <ProjectsList
              projectData={projectData}     
              portfolioData={portfolioData}
              numOfProjects={9}             
              showProjects={true}           
              showZigzag={true}             
            />

          <p className='text-center font-[500] text-[16px] -mt-[12rem]'>And that's not all!, 
            <button type='button' className='hover:text-white hover:underline'> 
            View More
            </button>
          </p>
        </div>
    </>
  )
}

export default ProjectPage
