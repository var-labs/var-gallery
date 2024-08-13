"use client";
import React, { useState, useEffect, useRef } from "react";
import Avatar from "./avatars";
import AvatarTooltip from "./avatarTooltip";
import Link from "next/link";

const avatarLinks = [
  {
    default: "/assets/avatars/aldo.png",
    hover: "/assets/avatars/aldo2.png",
    name: "Aldo",
    role: "Creative Director",
  },
  {
    default: "/assets/avatars/levian.png",
    hover: "/assets/avatars/levian2.png",
    name: "Levian",
    role: "Designer",
  },
  {
    default: "/assets/avatars/bilbis.png",
    hover: "/assets/avatars/bilbis2.png",
    name: "Flexsy",
    role: "FE Developer",
  },
  {
    default: "/assets/avatars/galang.png",
    hover: "/assets/avatars/galang2.png",
    name: "Galang",
    role: "FE Developer",
  },
  {
    default: "/assets/avatars/agil.png",
    hover: "/assets/avatars/agil2.png",
    name: "Agil",
    role: "FE Developer",
  },
  {
    default: "/assets/avatars/rizki.png",
    hover: "/assets/avatars/rizki2.png",
    name: "Rizki",
    role: "BE Developer",
  },
  {
    default: "/assets/avatars/budi.png",
    hover: "/assets/avatars/budi2.png",
    name: "Budi",
    role: "BE Developer",
  },
  {
    default: "/assets/avatars/dava.png",
    hover: "/assets/avatars/dava2.png",
    name: "Dava",
    role: "BE Developer",
  },
  {
    default: "/assets/avatars/dewa.png",
    hover: "/assets/avatars/dewa2.png",
    name: "Dewa",
    role: "BE Developer",
  },
  {
    default: "/assets/avatars/alif.png",
    hover: "/assets/avatars/alif2.png",
    name: "Alif",
    role: "BE Developer",
  },

  {
    default: "/assets/avatars/alif.png",
    hover: "/assets/avatars/alif2.png",
    name: "Widya",
    role: "UI Designer",
  },

  {
    default: "/assets/avatars/alif.png",
    hover: "/assets/avatars/alif2.png",
    name: "Nayla",
    role: "UI Designer",
  },
];

const Members: React.FC = () => {
  const [hovered, setHovered] = useState<{ name: string; role: string } | null>(null);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
<<<<<<< HEAD
  const [isSwitched, setIsSwitched] = useState(false);
  const [dragDistance, setDragDistance] = useState(0);
  const [prevLeft, setPrevLeft] = useState(0);
  const buttonRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const maxWidth = useRef(235); // Store the maximum width reached
  
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setCursorPosition({ x: event.clientX, y: event.clientY });
    
      if (isDragging.current && buttonRef.current && containerRef.current) {
        const containerRect = containerRef.current.getBoundingClientRect();
        const buttonRect = buttonRef.current.getBoundingClientRect();
        const padding = 10; // Padding inside the container
        let newLeft = event.clientX - containerRect.left - buttonRect.width / 2;
    
        if (newLeft < padding) {
          newLeft = padding;
        } else if (newLeft > containerRect.width - buttonRef.current.offsetWidth - padding) {
          newLeft = containerRect.width - buttonRef.current.offsetWidth - padding;
          setIsSwitched(true); // Change text when slider reaches the right end
        } else {
          setIsSwitched(false);
        }
    
        setDragDistance(newLeft - padding);
    
        // Determine drag direction
        const isDraggingLeft = newLeft < prevLeft;
    
        // Adjust the width and height of the slider button for stretching effect
        let newWidth = Math.max(maxWidth.current, 16 + (newLeft / containerRect.width) * 100); // Max width of 116px
        const newHeight = Math.max(64, 16 - (newLeft / containerRect.width) * 8); // Min height of 8px
    
        // Update the maximum width reached
        if (newWidth > maxWidth.current) {
          maxWidth.current = newWidth;
        } else if (isDraggingLeft) {
          // Gradually decrease maxWidth when dragging left
          maxWidth.current = Math.max(16, maxWidth.current - 5); // Increase the decrement value to 5
          newWidth = maxWidth.current;
        }
    
        buttonRef.current.style.width = `${newWidth}px`;
        buttonRef.current.style.height = `${newHeight}px`;
        buttonRef.current.style.left = `${newLeft}px`;
        buttonRef.current.style.top = `${(containerRect.height - newHeight) / 2}px`; // Center vertically
    
        // Update previous left value
        setPrevLeft(newLeft);
      }
    };
  
    const handleMouseUp = () => {
      isDragging.current = false;
    };
  
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
  
=======

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setCursorPosition({ x: event.clientX, y: event.clientY });
    }

    window.addEventListener('mousemove', handleMouseMove);

>>>>>>> parent of deee59d (feat: fixing slide bar)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  const handleMouseDown = () => {
    isDragging.current = true;
  };

  return (
    <>
<<<<<<< HEAD
      <div className="px-36 text-start">
        <div className="text-4xl text-white">
          <p className="font-medium mb-10">
            <span className="font-bold underline underline-offset-8 decoration-white">With determination and hope</span>, we
            rise, <br /> leaving past flaws behind for a better <span className="italic">future</span>.
          </p>
          <p className="font-medium ml-24">
            We are here to help you achieve your <span className="font-bold underline underline-offset-8 decoration-white">dreams</span> <br />
            and <span className="font-bold underline underline-offset-8 decoration-white">aspirations</span> through
            outstanding <span className="italic">design</span> <br /> and functionality.
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center mt-10 pb-20">
        <div className="grid grid-cols-6 gap-x-10 gap-y-12 mb-10">
          {avatarLinks.map((link, index) => (
            <Avatar
              key={index}
              link={link}
              onMouseEnter={() => setHovered({ name: link.name, role: link.role })}
              onMouseLeave={() => setHovered(null)}
            />
          ))}
          <div className="col-span-2 col-start-1 flex justify-center mt-10 text-white">
            <div
              ref={containerRef}
              className="relative w-64 h-20 bg-[#101D1F] rounded-full overflow-hidden flex items-center justify-center"
            >
              <div
                ref={buttonRef}
                className="absolute h-16 w-16 bg-[#AAC8CD] rounded-full cursor-pointer transition-all duration-100 ease-out"
                style={{ left: '10px', top: '10px' }} // Initial position
                onMouseDown={handleMouseDown}
                id="sliderButton"
              ></div>
              <div className="absolute w-full text-center">
                {isSwitched ? (
                  <Link href={"/contacts"}>
                    <h1 className="text-white">APPLY NOW!</h1>
                  </Link>
                ) : (
                  <div>
                    <h1 className="text-white">JOIN US?</h1>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <AvatarTooltip hovered={hovered} cursorPosition={cursorPosition} />
      </div>
    </>
=======
    <div className="flex flex-col px-36 text-start select-none" id="members">
       <div className="text-4xl text-white max-w-1/2">
        <p className="font-medium mb-10 leading-normal">
          <span className="font-bold underline underline-offset-8 decoration-white">With determination and hope</span>, we
          rise, <br /> leaving past flaws behind for a better <span className="italic">future</span>.
        </p>
      </div>
      <div className="text-4xl text-white max-w-1/2 ml-auto">
        <p className="font-medium leading-normal text-end">
          We are here to help you achieve your <span className="font-bold underline underline-offset-8 decoration-white">dreams</span> <br />
          and <span className="font-bold underline underline-offset-8 decoration-white">aspirations</span> through
          outstanding <span className="italic">design</span> <br /> and functionality.
        </p>
       </div>
    </div>

    <div className="flex flex-col items-center justify-center mt-[7rem] pb-20">
      <div className="grid grid-cols-6 gap-x-10 gap-y-12 mb-10">
        {avatarLinks.map((link, index) => (
          <Avatar
            key={index}
            link={link}
            onMouseEnter={() => setHovered({ name: link.name, role: link.role })}
            onMouseLeave={() => setHovered(null)}
          />
        ))}
        <div className="col-span-2 col-start-5 flex justify-center mt-10 text-white">
          <SliderButton 
            initialText="JOIN US?" 
            switchedText="APPLY NOW!" 
            link="/contacts" />
        </div>
      </div>
      <AvatarTooltip hovered={hovered} cursorPosition={cursorPosition} />
    </div>
  </>
>>>>>>> parent of deee59d (feat: fixing slide bar)
  );
};

export default Members;
