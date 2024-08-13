import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

interface SliderButtonProps {
  initialText: string;
  switchedText: string;
  link: string;
}

const SliderButton: React.FC<SliderButtonProps> = ({ initialText, switchedText, link }) => {
  const [fillPercentage, setFillPercentage] = useState(0);
  const [isSwitched, setIsSwitched] = useState(false);
  const [isNavigating, setIsNavigating] = useState(false);
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
        const isFullySwitched = buttonRect.left + buttonRect.width / 2 >= containerRect.width;


        if (isFullySwitched) {
            buttonRef.current.style.left = `${containerRect.width - buttonRect.width}px`;
            setFillPercentage(100);
            setIsSwitched(true);
            setIsNavigating(true);
        } else {
            buttonRef.current.style.left = '0px';
            setFillPercentage(0);
            setIsSwitched(false);
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
  }, [link]);

  const handleMouseDown = (event: React.MouseEvent) => {
    event.preventDefault();
    isDragging.current = true;
  };

  return (
    <div
      ref={containerRef}
      className="relative w-64 h-20 bg-[#101D1F] rounded-full overflow-hidden flex items-center justify-center"
      onMouseDown={handleMouseDown}
    >
      <div
        className="absolute top-0 left-0 h-full bg-[#AAC8CD] rounded-full transition-all duration-300 ease-in-out"
        style={{ width: `${fillPercentage}%` }}
        id="fillBackground"
      ></div>
      <div
        ref={buttonRef}
        className="absolute w-16 h-16 bg-[#AAC8CD] rounded-full cursor-pointer transition-all duration-300 ease-in-out left-2 "
        
        onMouseDown={handleMouseDown}
        id="sliderButton"
      ></div>
      <div className={`absolute w-full text-center pointer-events-none ${isSwitched ? 'text-center' : 'text-left ml-8'}`}>
        <h1 className="text-white">{isSwitched ? switchedText : initialText}</h1>
      </div>
    </div>
  );
};

export default SliderButton;
