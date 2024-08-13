import React from "react";

interface AvatarTooltipProps {
  hovered: {
    name: string;
    role: string;
  } | null;
  cursorPosition: {
    x: number;
    y: number;
  };
}

const AvatarTooltip: React.FC<AvatarTooltipProps> = ({ hovered, cursorPosition }) => {
  if (!hovered) return null;

  return (
    <div
      className="fixed pointer-events-none z-50 flex items-center"
      style={{ left: `${cursorPosition.x + 20}px`, top: `${cursorPosition.y + 20}px` }}
    >
      <div className="bg-[#101D1F] text-white px-4 py-2 rounded-2xl rounded-tl-none">
        <p>{hovered.name} | {hovered.role}</p>
      </div>
    </div>
  );
};

export default AvatarTooltip;
