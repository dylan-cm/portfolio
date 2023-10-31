"use client";

import gsap from "gsap";
import { useEffect, useRef, useState } from "react";

type Star = {
  hue: number;
  saturation: number;
  lightness: number;
  x: number;
  y: number;
  size: number;
  scale: number;
  alpha: number;
};
type Mapper = (value: number) => number;

type StarscapeProps = {
  width?: number;
  height?: number;
  densityRatio?: number;
  sizeLimit?: number;
  defaultAlpha?: number;
  scaleLimit?: number;
  proximityRatio?: number;
  starColor?: string;
};

const Starscape: React.FC<StarscapeProps> = ({
  densityRatio = 0.5,
  sizeLimit = 5,
  defaultAlpha = 0.2,
  scaleLimit = 2,
  proximityRatio = 0.1,
  starColor = "hsla(0, 0%, 100%, 0.2)",
  ...props
}) => {
  const [width, setWidth] = useState(props.width || 0);
  const [height, setHeight] = useState(props.height || 0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWidth(props.width || window.innerWidth);
      setHeight(props.height || window.innerHeight);
    }
  }, [props.width, props.height]);

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const contextRef = useRef<CanvasRenderingContext2D | null>(null);

  const vminRef = useRef<number | null>(null);
  const starsRef = useRef<Star[] | null>(null);
  const scaleMapperRef = useRef<Mapper | null>(null);
  const alphaMapperRef = useRef<Mapper | null>(null);

  //canvas effect
  useEffect(() => {
    if (!canvasRef.current) return;
    contextRef.current = canvasRef.current.getContext("2d");

    const LOAD = () => {
      if (width < 400) return;
      if (!canvasRef.current) return;
      vminRef.current = Math.min(height, width);
      const STAR_COUNT = Math.floor(vminRef.current * densityRatio);
      scaleMapperRef.current = gsap.utils.mapRange(
        0,
        vminRef.current * proximityRatio,
        scaleLimit,
        1
      );
      alphaMapperRef.current = gsap.utils.mapRange(
        0,
        vminRef.current * proximityRatio,
        1,
        defaultAlpha
      );
      canvasRef.current.width = width;
      canvasRef.current.height = height;
      starsRef.current = Array.from({ length: STAR_COUNT }, () => ({
        hue: 0,
        saturation: 0,
        lightness: 100,
        x: gsap.utils.random(0, width, 1),
        y: gsap.utils.random(0, height, 1),
        size: gsap.utils.random(1, sizeLimit, 1),
        scale: 1,
        alpha: defaultAlpha,
      }));
    };
    const RENDER = () => {
      if (!(canvasRef.current && contextRef.current && starsRef.current))
        return;
      contextRef.current.clearRect(
        0,
        0,
        canvasRef.current.width,
        canvasRef.current.height
      );
      starsRef.current.forEach((star) => {
        if (!contextRef.current) return;
        contextRef.current.fillStyle = starColor;
        contextRef.current.beginPath();
        contextRef.current.arc(
          star.x,
          star.y,
          (star.size / 2) * star.scale,
          0,
          Math.PI * 2
        );
        contextRef.current.fill();
      });
    };

    const UPDATE = ({
      clientX,
      clientY,
    }: {
      clientX: number;
      clientY: number;
    }) => {
      if (!starsRef.current || !scaleMapperRef.current || !vminRef.current)
        return;
      starsRef.current.forEach((STAR) => {
        if (
          !alphaMapperRef.current ||
          !scaleMapperRef.current ||
          !canvasRef.current ||
          !vminRef.current
        )
          return;
        const rect = canvasRef.current.getBoundingClientRect();
        const x = clientX - rect.left;
        const y = clientY - rect.top;

        const DISTANCE = Math.sqrt(
          Math.pow(STAR.x - x, 2) + Math.pow(STAR.y - y, 2)
        );
        gsap.to(STAR, {
          scale: scaleMapperRef.current(
            Math.min(DISTANCE, vminRef.current * proximityRatio)
          ),
          alpha: alphaMapperRef.current(
            Math.min(DISTANCE, vminRef.current * proximityRatio)
          ),
        });
      });
    };

    const EXIT = () => {
      gsap.to(starsRef.current, {
        scale: 1,
        alpha: defaultAlpha,
      });
    };

    LOAD();
    gsap.ticker.fps(24);
    gsap.ticker.add(RENDER);

    // Set up event handling
    window.addEventListener("resize", LOAD);
    document.addEventListener("pointermove", UPDATE);
    document.addEventListener("pointerleave", EXIT);
    return () => {
      window.removeEventListener("resize", LOAD);
      document.removeEventListener("pointermove", UPDATE);
      document.removeEventListener("pointerleave", EXIT);
      gsap.ticker.remove(RENDER);
    };
  }, [width, height]);

  return <canvas ref={canvasRef} className="absolute bottom-0 left-0 z-0" />;
};

export default Starscape;
