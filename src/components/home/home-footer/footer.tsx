import React from 'react'
import Link from 'next/link';
import { Bungee } from "next/font/google";
import Image from 'next/image';

const bungee = Bungee({
  subsets: ["latin"],
  weight: ["400"],
});

const Footer = () => {
  return (
    <>
        <div className='relative text-white pt-10'>

        <div className='absolute inset-0 bg-[url("/assets/overlay.png")] bg-center bg-no-repeat bg-[size:100%] mt-48'></div>

          <div className={`pb-52`}>
            <h1 className={`text-start ml-5 md:text-center text-4xl md:text-[96px] font-[400] ${bungee.className} leading-none`}>Creating sleek, <br />functional interfaces <br />for your ideas.</h1>
          
            <div className='text-[16px] font-medium md:text-center mt-20 '>
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

export default Footer
