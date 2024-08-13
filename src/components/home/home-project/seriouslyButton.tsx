import React, { useRef, useState, useEffect } from 'react';
import Link from 'next/link';

const SeriouslyButton: React.FC = () => {
  const [isSwitched, setIsSwitched] = useState(false);
  const [fillPercentage, setFillPercentage] = useState(0); // Start at 0%
  const [prevLeft, setPrevLeft] = useState(0);
  const [dragDistance, setDragDistance] = useState(0);
  const buttonRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const maxWidth = useRef(230); // Store the maximum width reached

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
    if(isDragging.current && buttonRef.current && containerRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect();
       const buttonRect = buttonRef.current.getBoundingClientRect();
       const padding = 10;

        let newleft = event.clientX - containerRect.left - buttonRect.width / 2;

        if(newleft < padding) {
          newleft = padding;
        } else if (newleft > containerRect.width - buttonRef.current.offsetWidth - padding) {
          newleft = containerRect.width - buttonRef.current.offsetWidth - padding;
          setIsSwitched(true);
        } else {
          setIsSwitched(false);
        }

        setDragDistance(newleft - prevLeft);

        const isDraggingLeft = newleft < prevLeft;

        let newWidth = Math.max(maxWidth.current, 16 + (newleft / containerRect.width) * 100);
        const newHeight = Math.max(64, 16 - (newleft / containerRect.width) * 8);

        if(newWidth > maxWidth.current) {
          maxWidth.current = newWidth;
        } else if (isDraggingLeft) {
          maxWidth.current = Math.max(16, maxWidth.current - 5);
          newWidth = maxWidth.current;
        }

        buttonRef.current.style.width = `${newWidth}px`;
        buttonRef.current.style.height = `${newHeight}px`;
        buttonRef.current.style.left = `${newleft}px`;
        buttonRef.current.style.top = `${(containerRect.height - newHeight) / 2}px`;

        setPrevLeft(newleft);
    }
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  window.addEventListener('mousemove', handleMouseMove);
  window.addEventListener('mouseup', handleMouseUp);
  return () => {
    window.removeEventListener('mousemove', handleMouseMove);
    window.removeEventListener('mouseupm', handleMouseUp);
  };
}, [prevLeft]);
  
  const handleMouseDown = () => {
    isDragging.current = true;
  }

  return (
    <div className="text-center relative z-30">
      <h1 className="font-bold text-[54px]">
        Our Creations <span className="underline underline-offset-[12px] opacity-[80%]">Go Beyond That!</span> <br />
        Discover More.
      </h1>
      <div 
        className="bg-[#101D1F] px-10 py-10 rounded-full mt-7 flex items-center cursor-hand hover:custom-cursor justify-center mx-auto w-[230px] h-[60px] relative"
        ref={containerRef}
      >
        <div
          ref={buttonRef}
          className="absolute h-16 w-16 bg-[#AAC8CD] rounded-full cursor-pointer"
          style={{ left: '10px', top: '10px' }}
          onMouseDown={handleMouseDown}
          id='sliderButton'
        ></div>
        <div className="flex items-center z-10">
          {/* <h1 className="text-xl pl-2 pr-4">{isSwitched ? "LET'S SEE!" : 'SERIOUSLY?'}</h1> */}
        {isSwitched ? (
          <Link legacyBehavior href={"/projects"}>
            <h1 className='text-white'>APPLY NOW!</h1>
          </Link>
        ) : (
          <div>
            <h1 className='text-white'>SERIOUSLY?</h1>
          </div>
        )}
        </div>
      </div>
    </div>
  );
};

export default SeriouslyButton;