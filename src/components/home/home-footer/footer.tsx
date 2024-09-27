import React from 'react'
import Link from 'next/link';
import { Bungee } from "next/font/google";
import Image from 'next/image';

const bungee = Bungee({
  subsets: ["latin"],
  weight: ["400"],
});

const HomeFooter = () => {
  return (
    <>
        <div className='relative text-white pt-10'>

        <div className='absolute inset-0 bg-[url("/assets/overlay.png")] bg-center bg-no-repeat bg-[size:100%] z-[-1] lg:mt-48'></div>

          <div className={`pb-52 relative z-10`}>
            <h1 className={`text-start ml-5 lg:text-center text-4xl md:text-6xl lg:text-[96px] font-[400] ${bungee.className} leading-none`}>
              Creating sleek, <br />functional interfaces <br className='hidden md:block'/>for your ideas.
            </h1>
          
            <div className='text-[16px] font-medium lg:text-center mt-20'>
                <a href="https://github.com/var-labs" title='Github' target='blank' className='mx-16'>Github</a>
                <a href="" title='Instagram' target='blank' className='mx-16'>Instagram</a>
                <a href="" title='Dribbble' target='blank' className='mx-16'>Dribbble</a>
                <a href="" title='Behance' target='blank' className='mx-16'>Behance</a>
                <a href="" title='Medium' target='blank' className='mx-16'>Medium</a>
            </div>
            </div>
        </div>
    </>
  )
}

export default HomeFooter
