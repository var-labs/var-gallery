import React, { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import SliderButton from '@/components/sliders/sliderButton';

const SeriouslyButton: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center relative z-30">
      <h1 className="font-bold text-[54px]">
        Our Creations <span className="underline underline-offset-[12px] opacity-[80%]">Go Beyond That!</span> <br />
        Discover More.
      </h1>
      <div className='mt-7 '>
        <SliderButton 
          initialText='SERIOUSLY'
          switchedText='LET`S SEE!'
          link='/projects'
        />
      </div>
    </div>
  );
};

export default SeriouslyButton;