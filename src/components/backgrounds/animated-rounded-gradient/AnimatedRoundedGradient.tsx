"use client";
import { cn } from "@/utils/cn";
import { useEffect } from "react";

export const AnimatedRoundedGradient = ({
  primaryColor = "126, 189, 198",
  secondaryColor = "83, 194, 209",
  tertiaryColor = "83, 194, 209",
  size = "80%",
  className,
}: {
  primaryColor?: string;
  secondaryColor?: string;
  tertiaryColor?: string;
  size?: string;
  className: string;
}) => {
  useEffect(() => {
    document.body.style.setProperty("--primary-color", primaryColor);
    document.body.style.setProperty("--secondary-color", secondaryColor);
    document.body.style.setProperty("--tertiary-color", tertiaryColor);
    document.body.style.setProperty("--size", size);
  }, [primaryColor, secondaryColor, tertiaryColor, size]);

  return (
    <>
      <svg className="hidden">
        <defs>
          <filter id="blurMe">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>
      <div
        className={cn(
          "gradients-container absolute h-full w-full z-20 blur-lg [filter:url(#blurMe)_blur(100px)]"
        )}
      >
        <div
          className={cn(
            "absolute [background:radial-gradient(circle_at_center,_rgba(var(--primary-color),_0.8)_0,_rgba(var(--secondary-color),_0)_50%,_rgba(var(--tertiary-color),_0)_100%)_no-repeat] w-[var(--size)] h-[var(--size)] opacity-100",
            className
          )}
        ></div>
      </div>
    </>
  );
};
