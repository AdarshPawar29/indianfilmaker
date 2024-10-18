"use client";

import React, { CSSProperties } from "react";
import Image from "next/image";
import { useParallax } from "@/hooks/useParallax";

interface ParallaxCardProps {
  foregroundImage: string;
  backgroundImage: string;
  heroTitle: string;
  subtitle: string;
  details: string;
  icon?: React.ReactNode;
  width?: string;
  height?: string;
  className?: string;
}

const ParallaxCard: React.FC<ParallaxCardProps> = ({
  backgroundImage,
  foregroundImage,
  heroTitle,
  subtitle,
  details,
  icon,
  width = "600px",
  height = "330px",
  className = "",
}) => {
  const movement = useParallax();

  const baseWidth = parseInt(width);
  const horizontalPadding = 1.5;
  const imageWidth = Math.max(660, baseWidth + 60);
  const extraWidth =
    Math.max(Math.abs(movement.x.min), Math.abs(movement.x.max)) *
    2 *
    horizontalPadding;
  const extraHeight =
    Math.max(Math.abs(movement.y.min), Math.abs(movement.y.max)) * 2;

  const containerStyle: CSSProperties = {
    width,
    height: height === "auto" ? "auto" : height,
    aspectRatio: height === "auto" ? "2/1.1" : undefined,
    maxHeight: "calc(100svh - 2rem)",
    position: "relative",
    overflow: "hidden",
    maxWidth: "calc(100% - 2rem)",
  };

  const commonImageStyles: CSSProperties = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: `${imageWidth + extraWidth}px`,
    height: `calc(100% + ${extraHeight}px)`,
    objectFit: "cover",
    userSelect: "none",
    pointerEvents: "none",
    minWidth: "100%",
    minHeight: "100%",
  };

  return (
    <article style={containerStyle} className={className}>
      <div className="assets absolute inset-0 rounded-[4em] overflow-hidden">
        <Image
          src={backgroundImage}
          alt=""
          width={0}
          height={0}
          style={{
            ...commonImageStyles,
            filter: "saturate(1.5) brightness(0.9)",
            transform: `translate(-50%, -50%) translate(calc(var(--x) * 0px), calc(var(--y) * ${movement.y.min}px))`,
          }}
          className="z-[1]"
          sizes={`(max-width: ${parseInt(width) + 60}px) 100vw, ${
            parseInt(width) + 60
          }px`}
        />

        <h3
          className="absolute left-1/2 top-[5%] m-0 text-8xl uppercase text-white font-bold z-[2]"
          style={{
            transform: `translate(-50%, 0) translate(calc(var(--x) * 5px), calc(var(--y) * ${movement.y.min}px))`,
          }}
        >
          {heroTitle}
        </h3>

        <Image
          src={foregroundImage}
          alt=""
          width={0}
          height={0}
          style={{
            ...commonImageStyles,
            transform: `translate(-50%, -50%) translate(calc(var(--x) * 20px), calc(var(--y) * ${movement.y.max}px))`,
          }}
          className="z-[3]"
          sizes={`(max-width: ${parseInt(width) + 60}px) 100vw, ${
            parseInt(width) + 60
          }px`}
        />

        <div className="parallax-blur z-[4]">
          <Image src={foregroundImage} alt="" width={0} height={0} />
        </div>
      </div>

      <div className="content min-h-[32%] absolute bottom-0 w-full text-white grid gap-0.2rem place-items-center content-center pb-2 z-[4]">
        <p className="m-0 flex items-center gap-2 text-xl relative after:content-[''] after:absolute after:bottom-[calc(100%+1rem)] after:left-1/2 after:w-[6ch] after:bg-white after:h-[1px] after:-translate-x-1/2">
          {icon}
          <span>{details}</span>
        </p>
        <p className="m-0 flex items-center gap-2 text-xl opacity-80">
          {subtitle}
        </p>
      </div>
    </article>
  );
};

export default ParallaxCard;
