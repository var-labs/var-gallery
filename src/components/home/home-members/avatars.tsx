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
      className="w-[120px] h-[120px] relative group"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <Image
        src={link.default}
        alt={`Avatar ${link.name}`}
        width={120}
        height={120}
        className="object-cover transition-opacity duration-300 opacity-100 group-hover:opacity-0"
      />
      <Image
        src={link.hover}
        alt={`Avatar ${link.name} hover`}
        width={120}
        height={120}
        className="object-cover transition-opacity duration-400 opacity-0 group-hover:opacity-100 absolute top-2 left-0"
      />
    </div>
  );
};

export default Avatar;
