"use client";
import React, { useState, useEffect } from "react";
import Avatar from "./avatars";
import AvatarTooltip from "./avatarTooltip";
import SliderButton from "@/components/sliders/sliderButton";
import TextRevealByWord from "@/components/animations/magicui/text-reveal";
TextRevealByWord

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
];

const Members: React.FC = () => {
  const [hovered, setHovered] = useState<{ name: string; role: string } | null>(null);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setCursorPosition({ x: event.clientX, y: event.clientY });
    }

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
    <div className="flex flex-col px-6 md:px-36 text-start select-none" id="members">
      <div className="text-4xl text-white max-w-1/2 hidden md:block">
        <p className="md:font-medium md:mb-10 md:leading-normal">
          <span className="font-bold underline underline-offset-8 decoration-white">With determination and hope</span>, we
          rise, <br /> leaving past flaws behind for a better <span className="italic">future</span>.
        </p>
      </div>
      <div className="text-[22px] md:text-4xl text-white md:max-w-1/2 md:ml-auto text-start md:text-end">
        <p className="font-medium md:leading-normal">
          We are here to help you achieve your <span className="font-bold underline underline-offset-4 md:underline-offset-8 decoration-white">dreams </span> 
          <br className="hidden md:block"/>
          and <span className="font-bold underline underline-offset-4 md:underline-offset-8 decoration-white">aspirations</span> through
          outstanding <span className="italic">design</span> <br className="hidden md:block"/> and functionality.
        </p>
      </div>
    </div>

    <div className="flex flex-col items-center justify-center mt-[3rem] py-6">
      <div className="grid grid-cols-3 md:grid-cols-6 gap-x-6 gap-y-10 md:gap-x-12 md:gap-y-20 mb-10">
        {avatarLinks.map((link, index) => (
          <Avatar
            key={index}
            link={link}
            onMouseEnter={() => setHovered({ name: link.name, role: link.role })}
            onMouseLeave={() => setHovered(null)}
          />
        ))}
        <div className="col-span-2 md:col-start-5 flex justify-center mt-10 text-white">
          <SliderButton 
            initialText="JOIN US?" 
            switchedText="APPLY NOW!" 
            link="/contacts" />
        </div>
      </div>
      <AvatarTooltip hovered={hovered} cursorPosition={cursorPosition} />
    </div>
  </>
  );
};

export default Members;
