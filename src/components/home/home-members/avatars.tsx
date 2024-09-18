import React from "react";
import Image from "next/image";

interface AvatarProps {
  link: {
    default: string;
    hover: string;
    name: string;
    role: string;
  };
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const Avatar: React.FC<AvatarProps> = ({ link, onMouseEnter, onMouseLeave }) => {
  return (
    <div
      className="md:w-[140px] md:h-[140px] relative group"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <Image
        src={link.default}
        alt={`Avatar ${link.name}`}
        width={150}
        height={150}
        className="object-cover transition-opacity duration-300 opacity-100 group-hover:opacity-0"
      />
      <Image
        src={link.hover}
        alt={`Avatar ${link.name} hover`}
        width={150}
        height={150}
        className="object-cover transition-opacity duration-400 opacity-0 group-hover:opacity-100 absolute top-0 left-0"
      />
    </div>
  );
};

export default Avatar;
