"use client";
import React, {useRef, } from 'react';
import { Bungee } from "next/font/google";
import emailjs from '@emailjs/browser';
import Link from 'next/link';

const bungee = Bungee({
  subsets: ["latin"],
  weight: ["400"],
});

const ContactsPage: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
    emailjs
      .sendForm('service_g9cu5vx', 'template_thxi2tt', form.current, {
        publicKey: '4rTRC9k0HeI9ULvAT'
      })
      .then(
        () => {
          if (form.current) {
            form.current.reset();
            alert('Email sent successfully!');
        }
        },
        (error) => {
          console.log('FAILED...',  error.text);
        }
      );
    }
  };

  return (
    <>
        <div className='text-[#FFF] min-h-screen flex flex-col justify-center items-center pt-14'>
            <div className={`text-center font-[400] text-[72px] leading-none ${bungee.className}`}>
                <p className='mb-2'>Lets <span className='bg-[#548187
                ] rounded-2xl md:rounded-3xl px-2'>hear</span> your</p>
                <p>suggestions and</p>  
                <p>wishes!</p>
            </div>

            <form className="flex flex-col items-start w-full max-w-5xl space-y-8 mt-10" ref={form} onSubmit={sendEmail}>
              <div className="flex justify-between w-full space-x-8">
                <div className="flex flex-col w-1/2">
                  <label htmlFor="user_name" className='text-[#FFFFFF] text-[40px] font-[600]'>Hello, I am</label>
                  <div className="relative w-full mt-2">
                    <input type="text" name="user_name" id="user_name" placeholder='John Doe' className=' placeholder:text-[#FFFFFF80] text-white text-[28px] font-[500] bg-transparent mb-4 w-full border-none focus:outline-none'/>
                    <div className="absolute bottom-0 left-0 w-[80%] border-b-2 border-[#FFFFFF80]"></div>
                  </div>
                </div>
                <div className="flex flex-col w-1/2 items-end">
                  <label htmlFor="user_email" className='text-[#FFFFFF] text-[40px] font-[600]'>Email</label>
                  <div className="relative w-full mt-2">
                    <input type="email" name="user_email" id="user_email" placeholder='johndoe@gmail.com' className='placeholder:text-[#FFFFFF80] text-white text-[28px] font-[500] bg-transparent mb-4 w-full border-none text-right focus:outline-none'/>
                    <div className="absolute bottom-0 right-0 w-[80%] border-b-2 border-[#FFFFFF80]"></div>
                  </div>
                </div>
              </div>
              <div className="flex justify-between w-full items-start mt-8">
                <div className="flex flex-col w-3/4">
                  <label htmlFor="message" className='text-[#FFFFFF] text-[40px] font-[600]'>What is it that you wish to express?</label>
                  <div className="relative w-full mt-2">
                    <input type="text" name="message" id="message" placeholder='Send us your suggestions and feedback, or discuss your project.' className='placeholder:text-[#FFFFFF80] text-white text-[28px] font-[500] bg-transparent mb-12 w-full border-none focus:outline-none'/>
                    <div className="absolute bottom-0 left-0 w-full border-b-2 border-[#FFFFFF80]"></div>
                  </div>
                </div>
                <button type="submit" value="Send" className="ml-4 mt-8 bg-[#101D1F] text-white cursor-hand rounded-full py-14 px-10 flex items-center justify-center text-[18px]">Submit</button>
              </div>
            </form>
        </div>
    </>
  )
}

export default ContactsPage
