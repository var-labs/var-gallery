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
        <div className='text-white'>
          <div className={`bg-[url('/assets/overlay.png')] bg-[length:auto_480px]`}>
            <h1 className={`text-center text-[80px] font-[400] ${bungee.className}`}>Creating sleek, <br />functional interfaces <br />for your ideas.</h1>
            <div className='text-[16px] font-medium text-center mt-20 mb-[7rem] '>
                <a href="https://github.com/var-labs" title='Github' target='blank' className='mx-16'>Github</a>
                <a href="" title='Instagram' target='blank' className='mx-16'>Instagram</a>
                <a href="" title='Dribbble' target='blank' className='mx-16'>Dribbble</a>
                <a href="" title='Behance' target='blank' className='mx-16'>Behance</a>
                <a href="" title='Medium' target='blank' className='mx-16'>Medium</a>
            </div>
            </div>
            <div>
              <Image
                src={"/assets/house.png"}
                alt='footer image'
                width={1440}
                height={100}
                className='max-h-full h-[100%] w-full'
              />
            </div>
        </div>
    </>
  )
}

export default Footer
