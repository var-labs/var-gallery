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
  const [isSwitched, setIsSwitched] = useState(false);
  const [fillPercentage, setFillPercentage] = useState(0); // Start at 0%
  const buttonRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setCursorPosition({ x: event.clientX, y: event.clientY });
      
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
    <>
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
              className="absolute top-0 left-0 h-full bg-[#AAC8CD] rounded-full"
              style={{ width: `${fillPercentage}%` }}
              id="fillBackground"
            ></div>
            <div
              ref={buttonRef}
              className="absolute top-0 w-20 h-20 bg-[#AAC8CD] rounded-full cursor-pointer"
              style={{ left: '0px' }}
              onMouseDown={handleMouseDown}
              id="sliderButton"
            ></div>
            <div className="absolute w-full text-center">
              <Link href={"/contacts"}>
                <h1 className="text-white">{isSwitched ? 'APPLY NOW!' : 'JOIN US?'}</h1>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <AvatarTooltip hovered={hovered} cursorPosition={cursorPosition} />
    </div>
  </>
  );
};

export default Members;
