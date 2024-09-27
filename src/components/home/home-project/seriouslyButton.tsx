import React from 'react';
import SliderButton from '@/components/sliders/sliderButton';
import GradualSpacing from '@/components/animations/magicui/gradual-spacing';

const SeriouslyButton: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center relative z-30 pt-52 lg:pt-8">
      <h1 className="font-bold text-[22px] md:text-[54px]">
        Our Creations <span className="underline underline-offset-[5px] md:underline-offset-[12px] text-[#D2D5D5]">Go Beyond That!</span> <br />
        Discover More.
      </h1>
      <div className='mt-7 border border-red-700 p-10'>
        <SliderButton
          initialText="Seriously?"
          switchedText=''
          link='/projects'
        />
      </div>
    </div>
  );
};

export default SeriouslyButton;