import React, { useRef, useState, useEffect } from 'react';
import Link from 'next/link';

const SeriouslyButton: React.FC = () => {
  const [isSwitched, setIsSwitched] = useState(false);
  const [fillPercentage, setFillPercentage] = useState(0);
  const buttonRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (isDragging.current && buttonRef.current && containerRef.current) {
        const containerRect = containerRef.current.getBoundingClientRect();
        const buttonRect = buttonRef.current.getBoundingClientRect();
        let newLeft = event.clientX - containerRect.left - buttonRect.width / 2;

        if (newLeft < 0) {
          newLeft = 0;
        } else if (newLeft > containerRect.width - buttonRect.width) {
          newLeft = containerRect.width - buttonRect.width;
        }

        const newFillPercentage = (newLeft / (containerRect.width - buttonRect.width)) * 100;
        setFillPercentage(newFillPercentage);

        buttonRef.current.style.left = `${newLeft}px`;
      }
    };

    const handleMouseUp = () => {
      if (isDragging.current && buttonRef.current && containerRef.current) {
        const containerRect = containerRef.current.getBoundingClientRect();
        const buttonRect = buttonRef.current.getBoundingClientRect();
        if (buttonRect.left + buttonRect.width / 2 < containerRect.width / 2) {
          buttonRef.current.style.left = '0px';
          setFillPercentage(0);
          setIsSwitched(false);
        } else {
          buttonRef.current.style.left = `${containerRect.width - buttonRect.width}px`;
          setFillPercentage(100);
          setIsSwitched(true);
        }
        isDragging.current = false;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  const handleMouseDown = () => {
    isDragging.current = true;
  };

  return (
    <div className="text-center relative z-30">
      <h1 className="font-bold text-[54px]">
        Our Creations <span className="underline underline-offset-[12px] opacity-[80%]">Go Beyond That!</span> <br />
        Discover More.
      </h1>
      <div 
        className="bg-[#101D1F] px-10 py-10 rounded-full mt-7 flex items-center cursor-hand hover:custom-pointer justify-center mx-auto w-[230px] h-[60px] relative"
        ref={containerRef}
      >
        <div
          className="absolute top-0 left-0 h-full bg-[#AAC8CD] rounded-full"
          style={{ width: `${fillPercentage}%` }}
        ></div>
        <div
          ref={buttonRef}
          className="absolute top-0 w-20 h-20 bg-[#AAC8CD] rounded-full"
          style={{ left: '0px' }}
          onMouseDown={handleMouseDown}
        ></div>
        <div className="flex items-center z-10">
          <h1 className="text-xl pl-2 pr-4">{isSwitched ? "LET'S SEE!" : 'SERIOUSLY?'}</h1>
        </div>
        {isSwitched && (
        <Link legacyBehavior href={"/projects"}>
          <a title="serious" className="absolute inset-0 cursor-hand"></a>
        </Link>
        )}
      </div>
    </div>
  );
};

export default SeriouslyButton;