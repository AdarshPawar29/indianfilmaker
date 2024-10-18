"use client";

import React, { CSSProperties } from "react";
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

interface LayerStyle extends React.CSSProperties {
  "--index"?: number;
}

const ParallaxCard: React.FC<ParallaxCardProps> = ({
  backgroundImage,
  foregroundImage,
  heroTitle,
  subtitle,
  details,
  icon,
  width = "600px",
  height = "auto",
  className = "",
}) => {
  const movement = useParallax();

  const baseWidth = parseInt(width);
  // Increase the padding factor for horizontal movement
  const horizontalPadding = 1.5; // Added padding factor
  const imageWidth = Math.max(660, baseWidth + 60);
  // Calculate extra space needed with the padding factor
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
    width: `${imageWidth + extraWidth}px`, // Increased width with padding
    height: `calc(100% + ${extraHeight}px)`,
    objectFit: "cover",
    userSelect: "none",
    pointerEvents: "none",
    // Added to ensure image maintains aspect ratio while covering
    minWidth: "100%",
    minHeight: "100%",
  };

  return (
    <article style={containerStyle} className={className}>
      <div className="assets absolute inset-0 rounded-[4em] overflow-hidden">
        <div className="absolute inset-0 overflow-visible z-[1]">
          {" "}
          <img
            src={backgroundImage}
            alt=""
            style={{
              ...commonImageStyles,
              filter: "saturate(1.5) brightness(0.9)",
              transform: `translate(-50%, -50%) translate(calc(var(--x) * ${movement.x.min}px), calc(var(--y) * ${movement.y.min}px))`,
            }}
          />
        </div>

        <h3
          className="absolute left-1/2 top-[15%] m-0 text-8xl uppercase text-white z-[2]"
          style={{
            transform: `translate(-50%, 0) translate(calc(var(--x) * ${-movement
              .x.min}px), calc(var(--y) * ${movement.y.min}px))`,
          }}
        >
          {heroTitle}
        </h3>

        <div className="absolute inset-0 overflow-visible z-[3]">
          {" "}
          <img
            src={foregroundImage}
            alt=""
            style={{
              ...commonImageStyles,
              transform: `translate(-50%, -50%) translate(calc(var(--x) * ${movement.x.max}px), calc(var(--y) * ${movement.y.max}px))`,
            }}
          />
        </div>
      </div>

      <div className="blur absolute inset-0">
        <div>
          {[1, 2, 3, 4, 5].map((index) => {
            const layerStyle: LayerStyle = {
              position: "absolute",
              inset: 0,
              backgroundColor: "hsla(0,0%,60%,0.05)",
              "--index": index,
              backdropFilter: `blur(calc(${
                Math.sin(((5 - index) / 5) * 90 * (Math.PI / 180)) * 30
              }px))`,
              mask: `radial-gradient(150% 130% at 45% 90%, #fff 15%, #0000 calc((15 + ${
                Math.sin((index / 5) * 90 * (Math.PI / 180)) * 15
              }) * 1%))`,
            } as LayerStyle;

            return <div key={index} style={layerStyle} />;
          })}
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
